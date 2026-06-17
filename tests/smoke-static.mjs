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
if (!sitemap.includes("https://thetools.world")) fail("sitemap missing https://thetools.world");
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

if (failures) process.exit(1);
console.log(`Smoke checks passed for ${pages.length} public pages.`);
