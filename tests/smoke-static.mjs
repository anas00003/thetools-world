import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pages = [
  "index.html",
  "image-compressor.html",
  "image-resizer.html",
  "image-converter.html",
  "bulk-image-tools.html",
  "compress-image-to-50kb.html",
  "compress-image-under-100kb.html",
  "compress-image-under-200kb.html",
  "compress-image-to-20kb.html",
  "compress-jpg-to-20kb.html",
  "compress-jpg-to-50kb.html",
  "compress-jpg-to-100kb.html",
  "compress-jpg-to-200kb.html",
  "resize-image-for-online-form.html",
  "compress-photo-for-government-form.html",
  "convert-webp-to-jpg.html",
  "png-to-jpg.html",
  "jpg-to-png.html",
  "passport-photo-resizer.html",
  "about.html",
  "contact.html",
  "privacy-policy.html",
  "terms.html",
  "sitemap.html"
];
const legacyPages = [
  "terms-of-use.html",
  "resizer.html",
  "index1.html",
  "blog.html",
  "faq.html",
  "help-center.html"
];
const forbiddenTerms = [
  "Tool" + "Pilot",
  "tool" + "pilot",
  "tool" + "pilot.vercel.app",
  "tool" + "pilot.example",
  "example" + "." + "com",
  "Image" + "Pilot",
  "image" + "pilot",
  "Image " + "Pilot",
  "Pixel" + "Flow",
  "pixel" + "flow",
  "The PDF " + "Buddy",
  "PDF " + "Buddy",
  "the" + "pdf" + "buddy",
  "Advertisement" + " (Your Ad Here)",
  "trusted" + " by",
  "mil" + "lions",
  "#" + "1",
];
const forbidden = forbiddenTerms.map((term) => term.toLowerCase());
let failures = 0;
const seenTitles = new Map();
const seenDescriptions = new Map();
const seenH1s = new Map();
const gaMeasurementId = "G-63DE2LM99R";
const appJs = fs.readFileSync(path.join(root, "assets/app.js"), "utf8");

function fail(message) {
  failures += 1;
  console.error("FAIL", message);
}

for (const file of pages) {
  const full = path.join(root, file);
  if (!fs.existsSync(full)) fail(`${file} is missing`);
  const html = fs.readFileSync(full, "utf8");
  if (!/<title>[^<]+<\/title>/.test(html)) fail(`${file} missing title`);
  if (!/<meta name="description" content="[^"]+">/.test(html)) fail(`${file} missing meta description`);
  if ((html.match(/<h1[\s>]/g) || []).length !== 1) fail(`${file} must have exactly one h1`);
  if ((html.match(/rel="canonical"/g) || []).length !== 1) fail(`${file} must have one canonical`);
  if (!/<meta name="robots" content="index, follow">/.test(html)) fail(`${file} missing index, follow robots meta`);
  if (!/<meta property="og:title" content="[^"]+">/.test(html)) fail(`${file} missing OG title`);
  if (!/<meta property="og:description" content="[^"]+">/.test(html)) fail(`${file} missing OG description`);
  if (!/<meta name="twitter:card" content="summary_large_image">/.test(html)) fail(`${file} missing Twitter card`);
  if (!html.includes('href="/assets/favicon.svg"')) fail(`${file} missing SVG favicon`);
  if (!html.includes('href="/site.webmanifest"')) fail(`${file} missing web manifest`);
  if (!html.includes('<meta name="theme-color" content="#0f8fb3">')) fail(`${file} missing theme color`);
  if ((html.match(/<meta name="google-adsense-account" content="ca-pub-1683614506940052">/g) || []).length !== 1) fail(`${file} must have exactly one AdSense ownership meta tag`);
  if (!html.includes('"logo":"https://thetools.world/assets/logo.svg"')) fail(`${file} missing Organization logo schema`);
  if (!html.includes('src="/assets/logo.svg"')) fail(`${file} missing brand icon logo`);
  if (!html.includes('class="brand-name"')) fail(`${file} missing readable brand name`);
  if (!html.includes("TheTools.World")) fail(`${file} missing TheTools.World branding`);
  if (!html.includes("https://thetools.world")) fail(`${file} missing https://thetools.world reference`);
  if (!html.includes(gaMeasurementId)) fail(`${file} missing GA4 measurement ID`);
  if (!html.includes("window.ttwLoadGA")) fail(`${file} missing lazy GA loader`);
  if (/<script[^>]+googletagmanager\.com\/gtag\/js/i.test(html)) fail(`${file} loads gtag.js immediately`);
  if ((html.match(/gtag\('config', 'G-63DE2LM99R'\)|gtag\("config", "G-63DE2LM99R"\)|gtag\('config', id\)|gtag\("config", id\)/g) || []).length !== 1) fail(`${file} must have exactly one GA4 config call`);
  if (/GTM-[A-Z0-9]+|googletagmanager\.com\/gtm\.js|googletagmanager\.com\/ns\.html/i.test(html)) fail(`${file} contains Google Tag Manager`);
  if (/adsbygoogle|pagead2\.googlesyndication\.com/i.test(html)) fail(`${file} contains AdSense code`);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1]?.trim();
  const description = html.match(/<meta name="description" content="([^"]+)">/)?.[1]?.trim();
  const h1 = html.match(/<h1[^>]*>([^<]+)<\/h1>/)?.[1]?.trim();
  for (const [label, value, map] of [["title", title, seenTitles], ["description", description, seenDescriptions], ["h1", h1, seenH1s]]) {
    if (!value) continue;
    if (map.has(value)) fail(`${file} duplicate ${label} with ${map.get(value)}`);
    else map.set(value, file);
  }
  const lower = html.toLowerCase();
  for (const term of forbidden) if (lower.includes(term)) fail(`${file} contains forbidden reference ${term}`);
  if (/href="\/[^"]+\.html"/.test(html)) fail(`${file} contains internal .html link`);
  const internalLinks = [...html.matchAll(/href="(\/[^"#?]+)"/g)].map((m) => m[1]);
  for (const href of internalLinks) {
    if (href.startsWith("/assets")) continue;
    if (href === "/site.webmanifest") continue;
    const target = href === "/" ? "index.html" : href.slice(1) + ".html";
    if (!fs.existsSync(path.join(root, target))) fail(`${file} links to missing ${href}`);
  }
}

if (!appJs.includes("window.ttwTrackEvent")) fail("assets/app.js missing custom event helper");
for (const eventName of ["tool_upload_selected", "tool_process_start", "tool_process_success", "tool_process_error", "tool_result_download", "related_tool_click"]) {
  if (!appJs.includes(eventName)) fail(`assets/app.js missing ${eventName}`);
}
if (!appJs.includes("window.ttwLoadGA")) fail("assets/app.js does not call lazy GA loader");
if (/file_name|file_path|file_content|file_contents|raw_error/i.test(appJs)) fail("assets/app.js includes unsafe GA parameter names");

for (const file of legacyPages) {
  const full = path.join(root, file);
  if (!fs.existsSync(full)) fail(`${file} legacy redirect is missing`);
  const html = fs.readFileSync(full, "utf8");
  if (!/<meta name="robots" content="noindex, follow">/.test(html)) fail(`${file} legacy page must be noindex, follow`);
  if (!/<meta http-equiv="refresh"/.test(html)) fail(`${file} legacy page missing refresh redirect`);
  if (!html.includes('href="/assets/favicon.svg"')) fail(`${file} legacy page missing SVG favicon`);
  if (!html.includes('href="/site.webmanifest"')) fail(`${file} legacy page missing web manifest`);
}

for (const asset of ["assets/favicon.svg", "assets/logo.svg", "assets/logo-horizontal.svg", "assets/site-icon.svg", "assets/apple-touch-icon.svg", "assets/favicon-48.svg", "site.webmanifest"]) {
  if (!fs.existsSync(path.join(root, asset))) fail(`${asset} is missing`);
}

const manifest = JSON.parse(fs.readFileSync(path.join(root, "site.webmanifest"), "utf8"));
if (manifest.name !== "TheTools.World") fail("manifest has wrong name");
if (manifest.short_name !== "TheTools") fail("manifest has wrong short_name");
if (!JSON.stringify(manifest.icons || []).includes("/assets/site-icon.svg")) fail("manifest missing site icon");

const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
const robotsTxt = fs.readFileSync(path.join(root, "robots.txt"), "utf8");
const llmsTxtPath = path.join(root, "llms.txt");
const adsTxtPath = path.join(root, "ads.txt");
if (!fs.existsSync(adsTxtPath)) fail("ads.txt is missing");
else if (fs.readFileSync(adsTxtPath, "utf8").trim() !== "google.com, pub-1683614506940052, DIRECT, f08c47fec0942fa0") fail("ads.txt has incorrect content");
if (!fs.existsSync(llmsTxtPath)) fail("llms.txt is missing");
else {
  const llmsTxt = fs.readFileSync(llmsTxtPath, "utf8");
  for (const required of ["TheTools.World", "https://thetools.world/image-compressor", "https://thetools.world/compress-jpg-to-100kb", "Do not claim guaranteed exact file size results"]) {
    if (!llmsTxt.includes(required)) fail(`llms.txt missing ${required}`);
  }
}
if (!robotsTxt.includes("Sitemap: https://thetools.world/sitemap.xml")) fail("robots.txt missing sitemap reference");
if (!sitemap.includes("https://thetools.world")) fail("sitemap missing https://thetools.world");
if (/\.html<\/loc>|robots\.txt|ads\.txt|llms\.txt|404/i.test(sitemap)) fail("sitemap contains utility, redirect, or non-canonical URLs");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const expectedUrls = new Set([
  "https://thetools.world",
  "https://thetools.world/image-compressor",
  "https://thetools.world/image-resizer",
  "https://thetools.world/image-converter",
  "https://thetools.world/bulk-image-tools",
  "https://thetools.world/compress-image-to-50kb",
  "https://thetools.world/compress-image-under-100kb",
  "https://thetools.world/compress-image-under-200kb",
  "https://thetools.world/compress-image-to-20kb",
  "https://thetools.world/compress-jpg-to-20kb",
  "https://thetools.world/compress-jpg-to-50kb",
  "https://thetools.world/compress-jpg-to-100kb",
  "https://thetools.world/compress-jpg-to-200kb",
  "https://thetools.world/resize-image-for-online-form",
  "https://thetools.world/compress-photo-for-government-form",
  "https://thetools.world/convert-webp-to-jpg",
  "https://thetools.world/png-to-jpg",
  "https://thetools.world/jpg-to-png",
  "https://thetools.world/passport-photo-resizer",
  "https://thetools.world/about",
  "https://thetools.world/contact",
  "https://thetools.world/privacy-policy",
  "https://thetools.world/terms",
  "https://thetools.world/sitemap"
]);
if (sitemapUrls.length !== expectedUrls.size) fail("sitemap URL count does not match public routes");
for (const url of sitemapUrls) if (!expectedUrls.has(url)) fail(`sitemap includes unexpected URL ${url}`);
for (const route of [
  "/",
  "/image-compressor",
  "/image-resizer",
  "/image-converter",
  "/bulk-image-tools",
  "/compress-image-to-50kb",
  "/compress-image-under-100kb",
  "/compress-image-under-200kb",
  "/compress-image-to-20kb",
  "/compress-jpg-to-20kb",
  "/compress-jpg-to-50kb",
  "/compress-jpg-to-100kb",
  "/compress-jpg-to-200kb",
  "/resize-image-for-online-form",
  "/compress-photo-for-government-form",
  "/convert-webp-to-jpg",
  "/png-to-jpg",
  "/jpg-to-png",
  "/passport-photo-resizer",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/sitemap"
]) {
  const url = `https://thetools.world${route === "/" ? "" : route}`;
  if (!sitemap.includes(url)) fail(`sitemap missing ${url}`);
}
const linkedRoutes = new Set(["/"]);
for (const file of pages) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  for (const match of html.matchAll(/href="(\/[^"#?]+)"/g)) {
    const href = match[1];
    if (href.startsWith("/assets") || href === "/site.webmanifest") continue;
    linkedRoutes.add(href);
  }
}
for (const route of [
  "/",
  "/image-compressor",
  "/image-resizer",
  "/image-converter",
  "/bulk-image-tools",
  "/compress-image-to-50kb",
  "/compress-image-under-100kb",
  "/compress-image-under-200kb",
  "/compress-image-to-20kb",
  "/compress-jpg-to-20kb",
  "/compress-jpg-to-50kb",
  "/compress-jpg-to-100kb",
  "/compress-jpg-to-200kb",
  "/resize-image-for-online-form",
  "/compress-photo-for-government-form",
  "/convert-webp-to-jpg",
  "/png-to-jpg",
  "/jpg-to-png",
  "/passport-photo-resizer",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/sitemap"
]) {
  if (route !== "/" && !linkedRoutes.has(route)) fail(`sitemap route is orphaned from internal links: ${route}`);
}
for (const [file, route] of [
  [
    "index.html",
    "/"
  ],
  [
    "image-compressor.html",
    "/image-compressor"
  ],
  [
    "image-resizer.html",
    "/image-resizer"
  ],
  [
    "image-converter.html",
    "/image-converter"
  ],
  [
    "bulk-image-tools.html",
    "/bulk-image-tools"
  ],
  [
    "compress-image-to-50kb.html",
    "/compress-image-to-50kb"
  ],
  [
    "compress-image-under-100kb.html",
    "/compress-image-under-100kb"
  ],
  [
    "compress-image-under-200kb.html",
    "/compress-image-under-200kb"
  ],
  [
    "compress-image-to-20kb.html",
    "/compress-image-to-20kb"
  ],
  [
    "compress-jpg-to-20kb.html",
    "/compress-jpg-to-20kb"
  ],
  [
    "compress-jpg-to-50kb.html",
    "/compress-jpg-to-50kb"
  ],
  [
    "compress-jpg-to-100kb.html",
    "/compress-jpg-to-100kb"
  ],
  [
    "compress-jpg-to-200kb.html",
    "/compress-jpg-to-200kb"
  ],
  [
    "resize-image-for-online-form.html",
    "/resize-image-for-online-form"
  ],
  [
    "compress-photo-for-government-form.html",
    "/compress-photo-for-government-form"
  ],
  [
    "convert-webp-to-jpg.html",
    "/convert-webp-to-jpg"
  ],
  [
    "png-to-jpg.html",
    "/png-to-jpg"
  ],
  [
    "jpg-to-png.html",
    "/jpg-to-png"
  ],
  [
    "passport-photo-resizer.html",
    "/passport-photo-resizer"
  ],
  [
    "about.html",
    "/about"
  ],
  [
    "contact.html",
    "/contact"
  ],
  [
    "privacy-policy.html",
    "/privacy-policy"
  ],
  [
    "terms.html",
    "/terms"
  ],
  [
    "sitemap.html",
    "/sitemap"
  ]
]) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  const canonical = html.match(/<link rel="canonical" href="([^"]+)">/)?.[1];
  const expected = `https://thetools.world${route === "/" ? "" : route}`;
  if (canonical !== expected) fail(`${file} canonical mismatch`);
  if (!sitemap.includes(expected)) fail(`${file} canonical missing from sitemap`);
}
if (sitemap.includes("https://thetools.world/404")) fail("404 is in sitemap");
for (const rankingRoute of ["/compress-jpg-to-20kb", "/compress-jpg-to-100kb", "/compress-jpg-to-200kb", "/passport-photo-resizer", "/resize-image-for-online-form", "/image-converter"]) {
  const file = rankingRoute.slice(1) + ".html";
  if (!fs.existsSync(path.join(root, file))) fail(`important ranking URL missing ${rankingRoute}`);
}
for (const file of ["image-converter.html", "convert-webp-to-jpg.html", "png-to-jpg.html", "jpg-to-png.html"]) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  if ((html.match(/<h2>/g) || []).length < 4) fail(`${file} needs meaningful content sections`);
  if (!html.includes("FAQPage")) fail(`${file} missing FAQPage schema for visible FAQ`);
}
for (const file of ["about.html", "contact.html"]) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1]?.trim();
  const h1 = html.match(/<h1[^>]*>([^<]+)<\/h1>/)?.[1]?.trim();
  if (title === h1) fail(`${file} title and h1 must differ`);
}
for (const file of pages) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  if (/click\s+(on\s+)?ads|adsbygoogle|aggregateRating|ratingValue|reviewRating|best in the world|trusted by millions|#1/i.test(html)) fail(`${file} contains unsafe ad, rating, or fake trust language`);
  if (/guaranteed exact (compression|file size|output)|guarantee an exact (compression|file size|output)/i.test(html)) fail(`${file} contains guaranteed exact compression claim`);
}

function visibleText(html) {
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1] || html;
  return main
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&amp;|&lt;|&gt;|&quot;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function wordCount(html) {
  return (visibleText(html).match(/\b[a-z0-9][a-z0-9-]*\b/gi) || []).length;
}

function faqSchemaObjects(html, file) {
  const schemas = [];
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const parsed = JSON.parse(match[1]);
      if (parsed && parsed["@type"] === "FAQPage") schemas.push(parsed);
    } catch (error) {
      fail(`${file} has invalid JSON-LD`);
    }
  }
  return schemas;
}

for (const file of pages) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  const minWords = ["privacy-policy.html", "terms.html", "sitemap.html", "contact.html"].includes(file) ? 130 : file === "about.html" ? 240 : 320;
  if (wordCount(html) < minWords) fail(`${file} content depth is below ${minWords} words`);
  const visibleFaq = [...html.matchAll(/<details><summary>([\s\S]*?)<\/summary><p>([\s\S]*?)<\/p><\/details>/g)].map((match) => ({
    question: match[1].replace(/<[^>]+>/g, "").trim(),
    answer: match[2].replace(/<[^>]+>/g, "").trim(),
  }));
  const faqSchemas = faqSchemaObjects(html, file);
  if (faqSchemas.length && !visibleFaq.length) fail(`${file} has FAQPage schema without visible FAQ`);
  if (visibleFaq.length && faqSchemas.length !== 1) fail(`${file} visible FAQ must have exactly one FAQPage schema`);
  if (faqSchemas.length === 1) {
    const schemaItems = faqSchemas[0].mainEntity || [];
    if (schemaItems.length !== visibleFaq.length) fail(`${file} FAQ schema count does not match visible FAQ`);
    visibleFaq.forEach((item, index) => {
      const schemaItem = schemaItems[index] || {};
      if (schemaItem.name !== item.question) fail(`${file} FAQ question mismatch at ${index + 1}`);
      if (schemaItem.acceptedAnswer?.text !== item.answer) fail(`${file} FAQ answer mismatch at ${index + 1}`);
    });
  }
  if (/aggregateRating|reviewRating|ratingValue|"Review"|"Rating"/i.test(html)) fail(`${file} contains fake rating or review schema`);
}

for (const file of ["image-compressor.html", "image-resizer.html", "bulk-image-tools.html", "resize-image-for-online-form.html", "compress-photo-for-government-form.html", "passport-photo-resizer.html"]) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  for (const required of ["How to", "Troubleshooting", "Related tools", "FAQ"]) {
    if (!html.includes(required)) fail(`${file} missing required content section: ${required}`);
  }
}

if (failures) process.exit(1);
console.log(`Smoke checks passed for ${pages.length} public pages.`);
