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
  "compress-image-under-100kb.html",
  "compress-image-under-200kb.html",
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
  if (!html.includes("TheTools.World")) fail(`${file} missing TheTools.World branding`);
  if (!html.includes("https://thetools.world")) fail(`${file} missing https://thetools.world reference`);
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
    const target = href === "/" ? "index.html" : href.slice(1) + ".html";
    if (!fs.existsSync(path.join(root, target))) fail(`${file} links to missing ${href}`);
  }
}

for (const file of legacyPages) {
  const full = path.join(root, file);
  if (!fs.existsSync(full)) fail(`${file} legacy redirect is missing`);
  const html = fs.readFileSync(full, "utf8");
  if (!/<meta name="robots" content="noindex, follow">/.test(html)) fail(`${file} legacy page must be noindex, follow`);
  if (!/<meta http-equiv="refresh"/.test(html)) fail(`${file} legacy page missing refresh redirect`);
}

const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
if (!sitemap.includes("https://thetools.world")) fail("sitemap missing https://thetools.world");
for (const route of [
  "/",
  "/image-compressor",
  "/image-resizer",
  "/image-converter",
  "/bulk-image-tools",
  "/compress-image-under-100kb",
  "/compress-image-under-200kb",
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
