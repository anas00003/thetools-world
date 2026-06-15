const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const domain = "https://thetools.world";
const brand = "TheTools.World";
const brandSlug = "thetoolsworld";
const year = "2026";
const contactEmail = "pdfbuddy73@gmail.com";
const tagline = "Free online tools for images, files, text, and everyday tasks.";

const routes = [
  {
    route: "/",
    file: "index.html",
    title: "TheTools.World - Free Online Tools for Images and Everyday Tasks",
    description: "TheTools.World starts with free browser-side image tools for compression, resizing, conversion, and upload preparation, with more utilities planned.",
    h1: "Free online tools for images, files, text, and everyday tasks",
    kind: "home",
    priority: "1.0",
  },
  {
    route: "/image-compressor",
    file: "image-compressor.html",
    title: "Image Compressor Online - Reduce Image File Size",
    description: "Compress JPG, PNG, and WebP images in your browser with quality controls and instant download.",
    h1: "Image compressor online",
    kind: "compressor",
    intro: "Reduce image file size before uploading, emailing, or adding photos to a website. Processing happens in your browser.",
    priority: "0.9",
  },
  {
    route: "/image-resizer",
    file: "image-resizer.html",
    title: "Image Resizer Online - Resize Photos by Pixel",
    description: "Resize images by width and height, keep aspect ratio, and download a smaller copy from your browser.",
    h1: "Image resizer online",
    kind: "resizer",
    intro: "Resize photos for forms, profile images, website uploads, and document workflows without sending files to a server.",
    priority: "0.9",
  },
  {
    route: "/image-converter",
    file: "image-converter.html",
    title: "Image Converter Online - Convert JPG PNG WebP",
    description: "Convert images between JPG, PNG, and WebP formats in your browser with a simple privacy-focused workflow.",
    h1: "Image converter online",
    kind: "converter",
    intro: "Change image formats for compatibility, smaller file sizes, transparent images, and web publishing.",
    priority: "0.9",
  },
  {
    route: "/bulk-image-tools",
    file: "bulk-image-tools.html",
    title: "Bulk Image Tools - Resize and Compress Multiple Images",
    description: "Process multiple images in one browser session for faster resize, compress, and conversion workflows.",
    h1: "Bulk image tools",
    kind: "bulk",
    intro: "Handle groups of photos with repeatable settings. Your files stay in your browser while previews and downloads are prepared locally.",
    priority: "0.8",
  },
  {
    route: "/compress-image-under-100kb",
    file: "compress-image-under-100kb.html",
    title: "Compress Image Under 100KB Online",
    description: "Use a browser-side compressor with a 100KB target for forms, portals, and document upload limits.",
    h1: "Compress image under 100KB",
    kind: "compressor",
    targetKb: 100,
    intro: "Aim for a 100KB image limit with adjustable quality. Results depend on original dimensions and content, so resize first if needed.",
    priority: "0.8",
  },
  {
    route: "/compress-image-under-200kb",
    file: "compress-image-under-200kb.html",
    title: "Compress Image Under 200KB Online",
    description: "Compress photos toward a 200KB target using local browser processing and adjustable output quality.",
    h1: "Compress image under 200KB",
    kind: "compressor",
    targetKb: 200,
    intro: "Prepare photos for portals that require files below 200KB. If a large image cannot fit cleanly, resize it before compressing.",
    priority: "0.8",
  },
  {
    route: "/resize-image-for-online-form",
    file: "resize-image-for-online-form.html",
    title: "Resize Image for Online Form Uploads",
    description: "Resize photos for online application forms, profile uploads, and document portals using pixel dimensions.",
    h1: "Resize image for online form",
    kind: "resizer",
    preset: "form",
    intro: "Set exact width and height requirements before uploading to a form. Keep a copy of your original file for future edits.",
    priority: "0.8",
  },
  {
    route: "/compress-photo-for-government-form",
    file: "compress-photo-for-government-form.html",
    title: "Compress Photo for Government Form Uploads",
    description: "Prepare photos for government and public-service form uploads with image compression and resizing guidance.",
    h1: "Compress photo for government form",
    kind: "compressor",
    targetKb: 200,
    intro: "Government portals often use strict size limits. Use this page to resize first when dimensions are too large, then compress.",
    priority: "0.8",
  },
  {
    route: "/convert-webp-to-jpg",
    file: "convert-webp-to-jpg.html",
    title: "Convert WebP to JPG Online",
    description: "Convert WebP images to JPG in your browser for apps and websites that do not accept WebP files.",
    h1: "Convert WebP to JPG",
    kind: "converter",
    output: "image/jpeg",
    intro: "Use JPG when you need broad compatibility and do not need transparency in the final image.",
    priority: "0.8",
  },
  {
    route: "/png-to-jpg",
    file: "png-to-jpg.html",
    title: "PNG to JPG Converter Online",
    description: "Convert PNG images to JPG for smaller files and wider upload compatibility.",
    h1: "PNG to JPG converter",
    kind: "converter",
    output: "image/jpeg",
    intro: "JPG is often smaller than PNG for photos. Transparent PNG areas will be filled with a white background.",
    priority: "0.8",
  },
  {
    route: "/jpg-to-png",
    file: "jpg-to-png.html",
    title: "JPG to PNG Converter Online",
    description: "Convert JPG images to PNG in your browser when you need a PNG copy for design or document workflows.",
    h1: "JPG to PNG converter",
    kind: "converter",
    output: "image/png",
    intro: "PNG is useful for screenshots, graphics, and workflows that specifically request PNG files.",
    priority: "0.8",
  },
  {
    route: "/passport-photo-resizer",
    file: "passport-photo-resizer.html",
    title: "Passport Photo Resizer Online",
    description: "Resize a passport-style photo to exact pixel dimensions for application forms and profile uploads.",
    h1: "Passport photo resizer",
    kind: "resizer",
    preset: "passport",
    intro: "Resize passport-style photos to requested dimensions. Always check the official instructions for crop, background, and size rules.",
    priority: "0.7",
  },
  {
    route: "/about",
    file: "about.html",
    title: "About TheTools.World",
    description: "Learn about TheTools.World, a growing utility website starting with practical browser-side image tools.",
    h1: "About TheTools.World",
    kind: "about",
    priority: "0.6",
  },
  {
    route: "/contact",
    file: "contact.html",
    title: "Contact TheTools.World",
    description: "Contact TheTools.World for support, corrections, accessibility issues, privacy questions, and tool suggestions.",
    h1: "Contact TheTools.World",
    kind: "contact",
    priority: "0.6",
  },
  {
    route: "/privacy-policy",
    file: "privacy-policy.html",
    title: "Privacy Policy - TheTools.World",
    description: "Read the TheTools.World privacy policy for browser-side image tools, planned utility categories, analytics, cookies, ads, and contact information.",
    h1: "Privacy Policy",
    kind: "privacy",
    priority: "0.5",
  },
  {
    route: "/terms",
    file: "terms.html",
    title: "Terms - TheTools.World",
    description: "Read the terms for using TheTools.World browser image tools, future utilities, and website content.",
    h1: "Terms",
    kind: "terms",
    priority: "0.5",
  },
  {
    route: "/sitemap",
    file: "sitemap.html",
    title: "Sitemap - TheTools.World",
    description: "Browse the public TheTools.World sitemap and find image resizing, compression, conversion, and legal pages.",
    h1: "Sitemap",
    kind: "sitemap",
    priority: "0.4",
  },
];

const legacy = [
  { file: "terms-of-use.html", to: "/terms", title: "Terms moved" },
  { file: "resizer.html", to: "/image-resizer", title: "Image resizer moved" },
  { file: "index1.html", to: "/", title: "Home moved" },
  { file: "blog.html", to: "/", title: "Resources moved" },
  { file: "faq.html", to: "/", title: "FAQ moved" },
  { file: "help-center.html", to: "/contact", title: "Help moved" },
];

const mainTools = routes.filter((page) =>
  ["/image-compressor", "/image-resizer", "/image-converter", "/bulk-image-tools"].includes(page.route)
);
const formTools = routes.filter((page) =>
  ["/compress-image-under-100kb", "/compress-image-under-200kb", "/resize-image-for-online-form", "/compress-photo-for-government-form", "/passport-photo-resizer"].includes(page.route)
);
const converterTools = routes.filter((page) =>
  ["/convert-webp-to-jpg", "/png-to-jpg", "/jpg-to-png"].includes(page.route)
);

function rel(page) {
  return page.route === "/" ? "/" : page.route;
}

function icon(name) {
  const icons = {
    compress: "C",
    resize: "R",
    convert: "V",
    bulk: "B",
    form: "F",
    privacy: "P",
  };
  return icons[name] || "I";
}

function brandMark() {
  return `<span class="brand-mark">TW</span>`;
}

function nav(active) {
  const items = [
    ["/", "Home"],
    ["/image-compressor", "Compress"],
    ["/image-resizer", "Resize"],
    ["/image-converter", "Convert"],
    ["/bulk-image-tools", "Bulk"],
    ["/about", "About"],
    ["/contact", "Contact"],
  ];
  return items.map(([href, text]) => `<a href="${href}"${href === active ? ' class="active"' : ""}>${text}</a>`).join("");
}

function head(page) {
  const canonical = `${domain}${page.route === "/" ? "" : page.route}`;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${page.title}</title>
  <meta name="description" content="${page.description}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${brand}">
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.description}">
  <meta property="og:url" content="${canonical}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${page.title}">
  <meta name="twitter:description" content="${page.description}">
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/assets/styles.css">
</head>
<body data-tool="${page.kind}" data-target-kb="${page.targetKb || ""}" data-output="${page.output || ""}" data-preset="${page.preset || ""}">
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <a class="brand" href="/" aria-label="${brand} home">${brandMark()}<span>${brand}</span></a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
    <nav id="site-nav" class="site-nav" aria-label="Primary">${nav(page.route)}</nav>
  </header>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="footer-grid">
      <div>
        <a class="brand footer-brand" href="/">${brandMark()}<span>${brand}</span></a>
        <p>${tagline} Image tools are live now, with more useful categories planned carefully over time.</p>
      </div>
      <div>
        <h2>Image Tools</h2>
        <a href="/image-compressor">Image compressor</a>
        <a href="/image-resizer">Image resizer</a>
        <a href="/image-converter">Image converter</a>
        <a href="/bulk-image-tools">Bulk image tools</a>
      </div>
      <div>
        <h2>Forms</h2>
        <a href="/compress-image-under-100kb">Compress under 100KB</a>
        <a href="/compress-image-under-200kb">Compress under 200KB</a>
        <a href="/resize-image-for-online-form">Resize for online form</a>
        <a href="/passport-photo-resizer">Passport photo resizer</a>
      </div>
      <div>
        <h2>Planned</h2>
        <span>PDF Tools - planned</span>
        <span>Text Tools - planned</span>
        <span>Calculators - planned</span>
        <span>QR Tools - planned</span>
        <span>AI Tools - planned</span>
        <span>Developer Tools - planned</span>
      </div>
      <div>
        <h2>Site</h2>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms">Terms</a>
        <a href="/sitemap">Sitemap</a>
      </div>
    </div>
    <p class="footer-note">&copy; ${year} ${brand}. No advertising code is installed yet.</p>
  </footer>
  <script src="/assets/app.js" defer></script>
</body>
</html>`;
}

function card(page, note) {
  return `<a class="tool-card" href="${rel(page)}">
    <span class="tool-icon">${icon(page.kind === "compressor" ? "compress" : page.kind === "resizer" ? "resize" : page.kind === "converter" ? "convert" : page.kind)}</span>
    <strong>${page.h1}</strong>
    <span>${note || page.description}</span>
  </a>`;
}

function homePage(page) {
  return `${head(page)}
  <main id="main">
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Utility tools hub</p>
        <h1>${page.h1}</h1>
        <p>${brand} is starting with fast browser-side image tools, with more file, text, calculator, QR, AI, and developer utilities planned.</p>
        <div class="hero-actions">
          <a class="button primary" href="/image-compressor">Compress an image</a>
          <a class="button secondary" href="/image-resizer">Resize a photo</a>
        </div>
      </div>
      <div class="hero-panel" aria-label="Image workflow preview">
        <div class="preview-frame">
          <div class="preview-sky"></div>
          <div class="preview-grid"></div>
        </div>
        <div class="preview-stats">
          <span>Resize</span><span>Compress</span><span>Convert</span>
        </div>
      </div>
    </section>
    <section class="category-strip" aria-labelledby="categories">
      <h2 id="categories">Current and planned categories</h2>
      <div class="category-grid">
        <a href="/image-compressor"><strong>Image Tools</strong><span>Live now</span></a>
        <span><strong>PDF Tools</strong><em>Planned</em></span>
        <span><strong>Text Tools</strong><em>Planned</em></span>
        <span><strong>Calculators</strong><em>Planned</em></span>
        <span><strong>QR Tools</strong><em>Planned</em></span>
        <span><strong>AI Tools</strong><em>Planned</em></span>
        <span><strong>Developer Tools</strong><em>Planned</em></span>
      </div>
    </section>
    <section class="section planned-tools" aria-labelledby="planned-tools">
      <div class="section-heading"><p class="eyebrow">More tools planned</p><h2 id="planned-tools">Future categories will be added only when real tools are ready</h2></div>
      <div class="planned-grid">
        <span>PDF Tools</span><span>Text Tools</span><span>Calculators</span><span>QR Tools</span><span>AI Tools</span><span>Developer Tools</span>
      </div>
    </section>
    <section class="search-section" aria-labelledby="find-tool">
      <h2 id="find-tool">Find the right image tool</h2>
      <input id="tool-search" class="search-input" type="search" placeholder="Search compress, resize, WebP, passport, online form" aria-label="Search image tools">
      <div class="quick-links">${[...mainTools, ...formTools, ...converterTools].map((p) => `<a data-search-item href="${rel(p)}">${p.h1}</a>`).join("")}</div>
    </section>
    <section class="section" aria-labelledby="popular-tools">
      <div class="section-heading"><p class="eyebrow">Popular image tools</p><h2 id="popular-tools">Start with a common task</h2></div>
      <div class="card-grid">${mainTools.map((p) => card(p)).join("")}</div>
    </section>
    <section class="section band" aria-labelledby="forms-documents">
      <div class="section-heading"><p class="eyebrow">For forms and documents</p><h2 id="forms-documents">Prepare images for upload limits</h2></div>
      <div class="card-grid">${formTools.map((p) => card(p)).join("")}</div>
    </section>
    <section class="section" aria-labelledby="format-tools">
      <div class="section-heading"><p class="eyebrow">Format converters</p><h2 id="format-tools">Switch between JPG, PNG, and WebP</h2></div>
      <div class="card-grid compact">${converterTools.map((p) => card(p)).join("")}</div>
    </section>
    <section class="privacy-band" aria-labelledby="privacy-first">
      <div><p class="eyebrow">Privacy-first browser-side tools</p><h2 id="privacy-first">Your selected image files are processed locally by the tool UI.</h2></div>
      <p>${brand} does not require account creation and does not add server upload steps to the core image tools. Some services, such as analytics or ads, may use standard web technologies if added later and will be disclosed in the privacy policy.</p>
    </section>
    <section class="section faq" aria-labelledby="faq-title">
      <h2 id="faq-title">FAQ</h2>
      <details><summary>Do these tools upload my images?</summary><p>The core resize, compress, and convert tools use browser APIs. Avoid closing the page until your download is ready.</p></details>
      <details><summary>Can every image be compressed under 100KB?</summary><p>No. Very large or detailed images may need resizing before compression. The tool reports the final size so you can adjust settings.</p></details>
      <details><summary>Can I use this website for official forms?</summary><p>You can prepare dimensions and file sizes, but always compare the result with the official form instructions before uploading.</p></details>
    </section>
  </main>
${footer()}`;
}

function toolUi(page) {
  if (page.kind === "compressor") {
    return `<section class="tool-panel" aria-labelledby="tool-title">
      <div class="tool-intro"><h2 id="tool-title">Compress settings</h2><p>${page.intro}</p></div>
      <form class="tool-form" data-compressor>
        <label>Choose image<input type="file" accept="image/*" data-file></label>
        <label>Quality <span data-quality-label>75%</span><input type="range" min="30" max="95" value="75" data-quality></label>
        <label>Max width in pixels<input type="number" min="200" max="6000" value="1600" data-max-width></label>
        <label>Target KB, optional<input type="number" min="20" max="5000" value="${page.targetKb || ""}" placeholder="Example: 200" data-target></label>
        <button class="button primary" type="submit">Compress image</button>
      </form>
      <div class="result-box" data-result aria-live="polite"></div>
    </section>`;
  }
  if (page.kind === "resizer") {
    const preset = page.preset === "passport" ? [600, 600] : page.preset === "form" ? [800, 800] : [1200, 800];
    return `<section class="tool-panel" aria-labelledby="tool-title">
      <div class="tool-intro"><h2 id="tool-title">Resize settings</h2><p>${page.intro}</p></div>
      <form class="tool-form" data-resizer>
        <label>Choose image<input type="file" accept="image/*" data-file></label>
        <label>Width in pixels<input type="number" min="1" max="8000" value="${preset[0]}" data-width></label>
        <label>Height in pixels<input type="number" min="1" max="8000" value="${preset[1]}" data-height></label>
        <label class="checkbox"><input type="checkbox" checked data-aspect> Keep aspect ratio</label>
        <label>Output format<select data-format><option value="image/jpeg">JPG</option><option value="image/png">PNG</option><option value="image/webp">WebP</option></select></label>
        <button class="button primary" type="submit">Resize image</button>
      </form>
      <div class="result-box" data-result aria-live="polite"></div>
    </section>`;
  }
  if (page.kind === "converter") {
    const output = page.output || "image/webp";
    return `<section class="tool-panel" aria-labelledby="tool-title">
      <div class="tool-intro"><h2 id="tool-title">Convert settings</h2><p>${page.intro}</p></div>
      <form class="tool-form" data-converter>
        <label>Choose image<input type="file" accept="image/*" data-file></label>
        <label>Output format<select data-format><option value="image/jpeg"${output === "image/jpeg" ? " selected" : ""}>JPG</option><option value="image/png"${output === "image/png" ? " selected" : ""}>PNG</option><option value="image/webp"${output === "image/webp" ? " selected" : ""}>WebP</option></select></label>
        <button class="button primary" type="submit">Convert image</button>
      </form>
      <div class="result-box" data-result aria-live="polite"></div>
    </section>`;
  }
  return `<section class="tool-panel" aria-labelledby="tool-title">
    <div class="tool-intro"><h2 id="tool-title">Bulk settings</h2><p>${page.intro}</p></div>
    <form class="tool-form" data-bulk>
      <label>Choose images<input type="file" accept="image/*" multiple data-file></label>
      <label>Max width in pixels<input type="number" min="200" max="6000" value="1600" data-max-width></label>
      <label>Quality <span data-quality-label>75%</span><input type="range" min="30" max="95" value="75" data-quality></label>
      <button class="button primary" type="submit">Prepare downloads</button>
    </form>
    <div class="result-box" data-result aria-live="polite"></div>
  </section>`;
}

function related(page) {
  const items = page.kind === "converter" ? converterTools : page.kind === "resizer" ? formTools : mainTools.concat(formTools.slice(0, 2));
  return `<section class="section" aria-labelledby="related-tools"><h2 id="related-tools">Related tools</h2><div class="card-grid compact">${items.filter((p) => p.route !== page.route).slice(0, 4).map((p) => card(p)).join("")}</div></section>`;
}

function toolPage(page) {
  return `${head(page)}
  <main id="main">
    <section class="page-hero">
      <p class="eyebrow">${brand} tool</p>
      <h1>${page.h1}</h1>
      <p>${page.intro}</p>
    </section>
    ${toolUi(page)}
    <section class="section guide">
      <h2>How to use this tool</h2>
      <ol>
        <li>Select an image from your device.</li>
        <li>Adjust the settings for size, format, or quality.</li>
        <li>Download the processed copy and keep your original file unchanged.</li>
      </ol>
      <p>For upload portals, compare the final image against the official file size, dimensions, and format requirements before submitting.</p>
    </section>
    ${related(page)}
  </main>
${footer()}`;
}

function infoPage(page) {
  const blocks = {
    about: `<p>${brand} is a standalone utility tools website with the tagline: ${tagline}</p><p>The first live category is Image Tools, including compression, resizing, format conversion, bulk processing, and upload preparation pages for common form requirements.</p><p>The broader plan is to add useful file, text, calculator, QR, AI, and developer utilities only when those tools are real, useful, and ready to publish. The site avoids unverifiable claims and keeps expansion honest.</p><p>The goal is simple: publish useful tools, clear instructions, accessible navigation, and honest privacy information before monetization.</p>`,
    contact: `<p>For support, corrections, accessibility issues, privacy questions, or tool suggestions, email <a href="mailto:${contactEmail}">${contactEmail}</a>.</p><p>Please include the page URL, browser, device type, and a short description of the issue.</p>`,
    privacy: `<p>The current image tools use browser APIs to process selected files locally. ${brand} does not require accounts for these tools.</p><p>The site may later include additional utility categories. Cookies may be used for basic site preferences or standard browser behavior. Analytics, advertising, and other third-party services are not required for the current image tools, but may be added in the future to understand site usage or support the website.</p><p>If analytics, ads, or third-party services are added, this policy should be updated with provider names, cookie behavior, and opt-out information where available.</p><p>Contact: <a href="mailto:${contactEmail}">${contactEmail}</a>.</p>`,
    terms: `<p>Use ${brand} only for lawful utility tasks. You are responsible for checking whether processed files satisfy third-party upload requirements.</p><p>The tools are provided as-is without a guarantee that every image or future utility output can meet a specific file size, format, or platform requirement.</p><p>Do not use the website to process files you do not have permission to use, and do not rely on the tools as legal, financial, medical, or official government advice.</p><p>Contact: <a href="mailto:${contactEmail}">${contactEmail}</a>.</p>`,
    sitemap: `<div class="sitemap-list">${routes.filter((p) => p.route !== "/sitemap").map((p) => `<a href="${rel(p)}">${p.h1}</a>`).join("")}</div>`,
  };
  return `${head(page)}
  <main id="main">
    <section class="page-hero">
      <p class="eyebrow">${brand}</p>
      <h1>${page.h1}</h1>
      <p>${page.description}</p>
    </section>
    <section class="content-page">${blocks[page.kind]}</section>
  </main>
${footer()}`;
}

function legacyPage(item) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${item.title} - ${brand}</title>
  <meta name="robots" content="noindex, follow">
  <meta http-equiv="refresh" content="0; url=${item.to}">
  <link rel="canonical" href="${domain}${item.to === "/" ? "" : item.to}">
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
</head>
<body>
  <p>This page moved to <a href="${item.to}">${item.to}</a>.</p>
</body>
</html>`;
}

function write(file, content) {
  fs.mkdirSync(path.dirname(path.join(root, file)), { recursive: true });
  fs.writeFileSync(path.join(root, file), content, "utf8");
}

function sitemapXml() {
  const urls = routes.map((page) => `  <url><loc>${domain}${page.route === "/" ? "" : page.route}</loc><changefreq>weekly</changefreq><priority>${page.priority}</priority></url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function robots() {
  return `User-agent: *\nAllow: /\n\nSitemap: ${domain}/sitemap.xml\n`;
}

function vercelJson() {
  const rewrites = routes.filter((p) => p.route !== "/").map((p) => ({ source: p.route, destination: `/${p.file}` }));
  const redirects = [
    {
      source: "/",
      has: [{ type: "host", value: "www.thetools.world" }],
      destination: "https://thetools.world/",
      permanent: true,
    },
    {
      source: "/:path*",
      has: [{ type: "host", value: "www.thetools.world" }],
      destination: "https://thetools.world/:path*",
      permanent: true,
    },
    ...routes.filter((p) => p.route !== "/").map((p) => ({ source: `/${p.file}`, destination: p.route, permanent: true })),
    ...legacy.map((p) => ({ source: `/${p.file}`, destination: p.to, permanent: true })),
  ];
  return `${JSON.stringify({ cleanUrls: true, trailingSlash: false, redirects, rewrites }, null, 2)}\n`;
}

function css() {
  const base = `:root{color-scheme:light;--ink:#273044;--muted:#5e6a7d;--line:#d9e2ef;--soft:#f5f8fb;--paper:#ffffff;--brand:#246c94;--brand-2:#29a7ce;--accent:#f4a261;--good:#2a9d8f;--shadow:0 20px 50px rgba(39,48,68,.12)}*{box-sizing:border-box}body{margin:0;font-family:Arial,Helvetica,sans-serif;color:var(--ink);background:var(--paper);line-height:1.55}a{color:inherit}.skip-link{position:absolute;left:-999px}.skip-link:focus{left:1rem;top:1rem;background:#fff;padding:.75rem;z-index:5}.site-header{position:sticky;top:0;z-index:4;display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1rem clamp(1rem,4vw,3rem);background:rgba(255,255,255,.94);border-bottom:1px solid var(--line);backdrop-filter:blur(12px)}.brand{display:inline-flex;align-items:center;gap:.6rem;font-weight:800;text-decoration:none}.brand-mark{display:grid;place-items:center;width:2.25rem;height:2.25rem;border-radius:8px;background:var(--brand);color:#fff;font-size:.8rem;letter-spacing:0}.site-nav{display:flex;gap:.35rem;align-items:center}.site-nav a{padding:.55rem .75rem;border-radius:8px;text-decoration:none;color:var(--muted);font-weight:700}.site-nav a.active,.site-nav a:hover{background:var(--soft);color:var(--ink)}.nav-toggle{display:none}.hero,.page-hero{padding:clamp(3rem,8vw,6rem) clamp(1rem,4vw,3rem);max-width:1180px;margin:auto}.hero{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(300px,.8fr);gap:3rem;align-items:center}.eyebrow{text-transform:uppercase;font-size:.78rem;letter-spacing:.08em;color:var(--brand);font-weight:800;margin:0 0 .75rem}h1{font-size:clamp(2.35rem,6vw,4.8rem);line-height:1.02;margin:0 0 1rem;letter-spacing:0}h2{font-size:clamp(1.5rem,3vw,2.25rem);line-height:1.15;margin:0 0 1rem;letter-spacing:0}h3{margin:.25rem 0}.hero p,.page-hero p{font-size:1.1rem;color:var(--muted);max-width:66ch}.hero-actions{display:flex;flex-wrap:wrap;gap:.8rem;margin-top:1.5rem}.button{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:.75rem 1rem;border:1px solid var(--line);border-radius:8px;text-decoration:none;font-weight:800;cursor:pointer}.button.primary{background:var(--brand);border-color:var(--brand);color:#fff}.button.secondary{background:#fff;color:var(--ink)}.hero-panel{background:linear-gradient(145deg,#eaf8fb,#fff7ee);border:1px solid var(--line);border-radius:8px;padding:1rem;box-shadow:var(--shadow)}.preview-frame{aspect-ratio:4/3;border-radius:8px;overflow:hidden;background:#fff;position:relative}.preview-sky{position:absolute;inset:0;background:linear-gradient(#79c7d9 0 48%,#f3d392 48% 70%,#2a9d8f 70%)}.preview-grid{position:absolute;inset:1rem;border:2px solid rgba(255,255,255,.8);background:repeating-linear-gradient(90deg,transparent 0 32%,rgba(255,255,255,.7) 33% 34%),repeating-linear-gradient(0deg,transparent 0 32%,rgba(255,255,255,.7) 33% 34%)}.preview-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem;margin-top:1rem}.preview-stats span{background:#fff;border:1px solid var(--line);border-radius:8px;padding:.8rem;text-align:center;font-weight:800}.category-strip,.search-section,.section,.tool-panel,.content-page,.privacy-band{max-width:1180px;margin:0 auto 2rem;padding:clamp(1rem,4vw,2rem)}.category-strip{padding-top:0}.category-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:.75rem}.category-grid a,.category-grid span{display:grid;gap:.25rem;border:1px solid var(--line);border-radius:8px;padding:1rem;text-decoration:none;background:#fff}.category-grid em{font-style:normal;color:var(--muted)}.planned-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:.75rem}.planned-grid span{border:1px solid var(--line);border-radius:8px;padding:1rem;background:#fff;color:var(--muted);font-weight:800}.search-section{background:var(--soft);border-block:1px solid var(--line);max-width:none}.search-section h2,.search-section input,.quick-links{max-width:1180px;margin-left:auto;margin-right:auto}.search-input{display:block;width:100%;border:1px solid var(--line);border-radius:8px;min-height:52px;padding:0 1rem;font-size:1rem}.quick-links{display:flex;flex-wrap:wrap;gap:.6rem;margin-top:1rem}.quick-links a{border:1px solid var(--line);background:#fff;border-radius:8px;padding:.55rem .75rem;text-decoration:none}.section-heading{max-width:760px}.card-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem}.card-grid.compact{grid-template-columns:repeat(3,minmax(0,1fr))}.tool-card{display:flex;flex-direction:column;gap:.7rem;min-height:170px;padding:1.1rem;border:1px solid var(--line);border-radius:8px;text-decoration:none;background:#fff}.tool-card:hover{border-color:var(--brand);box-shadow:var(--shadow)}.tool-card span:last-child{color:var(--muted)}.tool-icon{display:grid;place-items:center;width:2.4rem;height:2.4rem;border-radius:8px;background:#e5f6fb;color:var(--brand);font-weight:900}.band{max-width:none;background:#fbf7f0;border-block:1px solid #eadbc6}.band>*{max-width:1180px;margin-left:auto;margin-right:auto}.privacy-band{display:grid;grid-template-columns:1fr 1fr;gap:2rem;background:#eaf8fb;border:1px solid var(--line);border-radius:8px}.faq details{border-top:1px solid var(--line);padding:1rem 0}.faq summary{font-weight:800;cursor:pointer}.page-hero{text-align:left;padding-bottom:1rem}.tool-panel{display:grid;grid-template-columns:.8fr 1.2fr;gap:2rem;border:1px solid var(--line);border-radius:8px;background:var(--soft)}.tool-form{display:grid;gap:1rem}.tool-form label{display:grid;gap:.35rem;font-weight:800}.tool-form input,.tool-form select{min-height:44px;border:1px solid var(--line);border-radius:8px;padding:.55rem;background:#fff;font:inherit}.tool-form .checkbox{display:flex;align-items:center;gap:.5rem}.result-box{margin-top:1rem;padding:1rem;border:1px dashed var(--line);border-radius:8px;background:#fff;min-height:72px}.result-box img{max-width:220px;max-height:180px;display:block;margin:.5rem 0;border-radius:8px}.download-list{display:grid;gap:.5rem}.guide ol{padding-left:1.2rem}.content-page{max-width:850px;font-size:1.05rem}.sitemap-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem}.sitemap-list a{padding:.8rem;border:1px solid var(--line);border-radius:8px;text-decoration:none}.site-footer{margin-top:3rem;padding:2rem clamp(1rem,4vw,3rem);background:#273044;color:#fff}.footer-grid{max-width:1180px;margin:auto;display:grid;grid-template-columns:1.3fr repeat(4,1fr);gap:2rem}.site-footer a,.site-footer span{display:block;color:#e9f2fb;text-decoration:none;margin:.35rem 0}.site-footer h2{font-size:1rem;margin:0 0 .75rem}.footer-note{max-width:1180px;margin:2rem auto 0;color:#b9c6d8}@media (max-width:850px){.nav-toggle{display:inline-flex;border:1px solid var(--line);background:#fff;border-radius:8px;min-height:40px;padding:.5rem}.site-nav{display:none;position:absolute;left:1rem;right:1rem;top:4.5rem;background:#fff;border:1px solid var(--line);border-radius:8px;padding:.6rem;box-shadow:var(--shadow);flex-direction:column;align-items:stretch}.site-nav.open{display:flex}.hero,.tool-panel,.privacy-band{grid-template-columns:1fr}.card-grid,.card-grid.compact,.footer-grid,.sitemap-list,.category-grid{grid-template-columns:1fr}h1{font-size:2.4rem}.hero{padding-top:2rem}.site-header{position:relative}}`;
  return base + `.tool-panel{box-shadow:0 16px 34px rgba(39,48,68,.07)}.tool-intro{align-self:start}.tool-form{background:#fff;border:1px solid var(--line);border-radius:8px;padding:1rem}.tool-form input,.tool-form select,.button,.result-box{max-width:100%}.result-box{overflow-wrap:anywhere}.result-box.is-error{border-color:#d66;background:#fff6f4;color:#853227}.result-box.is-success{border-color:#9fd6c8;background:#f4fffb}.tool-card{transition:border-color .16s ease,box-shadow .16s ease,transform .16s ease}.tool-card:hover{transform:translateY(-2px)}.guide{border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.privacy-band{box-shadow:0 10px 28px rgba(36,108,148,.08)}@media (max-width:850px){html,body{max-width:100%;overflow-x:hidden}.hero,.page-hero,.section,.tool-panel,.content-page,.privacy-band,.category-strip{width:100%;max-width:100%;padding-left:1rem;padding-right:1rem}.tool-panel{margin-left:0;margin-right:0;border-left:0;border-right:0;border-radius:0}.tool-form{padding:.9rem}.tool-form input[type="file"]{width:100%;font-size:.95rem}.tool-form input[type="range"]{width:100%;min-width:0}.button{width:100%;white-space:normal;text-align:center}.result-box img{max-width:100%;height:auto}.download-list a{overflow-wrap:anywhere}.footer-grid{gap:1.25rem}.site-footer{padding-left:1rem;padding-right:1rem}}`;
}

function js() {
  return `"use strict";
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
const navToggle=$(".nav-toggle"), nav=$("#site-nav");
if(navToggle&&nav){navToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");navToggle.setAttribute("aria-expanded",String(open));});}
const search=$("#tool-search");
if(search){search.addEventListener("input",()=>{const q=search.value.toLowerCase();$$("[data-search-item]").forEach(a=>{a.hidden=!a.textContent.toLowerCase().includes(q);});});}
function ext(type){return type==="image/png"?"png":type==="image/webp"?"webp":"jpg";}
const supportedTypes=new Set(["image/jpeg","image/jpg","image/png","image/webp"]);
const unsupportedMessage="Unsupported image file. Please upload JPG, PNG, or WebP.";
function isSupported(file){return file&&supportedTypes.has((file.type||"").toLowerCase());}
function setMessage(box,message,type="info"){box.classList.remove("is-error","is-success");if(type==="error")box.classList.add("is-error");if(type==="success")box.classList.add("is-success");box.textContent=message;}
function readImage(file){return new Promise((resolve,reject)=>{const img=new Image();const url=URL.createObjectURL(file);img.onload=()=>{URL.revokeObjectURL(url);resolve(img);};img.onerror=()=>{URL.revokeObjectURL(url);reject(new Error(unsupportedMessage));};img.src=url;});}
function draw(img,w,h,type){const canvas=document.createElement("canvas");canvas.width=w;canvas.height=h;const ctx=canvas.getContext("2d");if(type==="image/jpeg"){ctx.fillStyle="#fff";ctx.fillRect(0,0,w,h);}ctx.drawImage(img,0,0,w,h);return canvas;}
function blobFrom(canvas,type,quality){return new Promise((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(new Error(unsupportedMessage)),type,quality));}
function size(bytes){return bytes>1024*1024?(bytes/1024/1024).toFixed(2)+" MB":Math.round(bytes/1024)+" KB";}
function resultLink(box,blob,name,img){box.classList.remove("is-error");box.classList.add("is-success");const url=URL.createObjectURL(blob);box.innerHTML=\`<p><strong>Ready:</strong> \${size(blob.size)}</p><img alt="Processed preview"><p><a class="button primary" download="\${name}" href="\${url}">Download image</a></p>\`;box.querySelector("img").src=img||url;}
async function processOne(file,{type="image/jpeg",quality=.75,maxWidth,width,height}){const img=await readImage(file);let w=width||img.naturalWidth,h=height||img.naturalHeight;if(maxWidth&&w>maxWidth){h=Math.round(h*(maxWidth/w));w=maxWidth;}const canvas=draw(img,w,h,type);return blobFrom(canvas,type,quality);}
$$("[data-quality]").forEach(input=>{const label=input.closest("form").querySelector("[data-quality-label]");input.addEventListener("input",()=>{if(label)label.textContent=input.value+"%";});});
const compressor=$("[data-compressor]");
if(compressor){compressor.addEventListener("submit",async e=>{e.preventDefault();const box=$("[data-result]");const file=$("[data-file]",compressor).files[0];if(!file){setMessage(box,"Choose an image first.","error");return;}if(!isSupported(file)){setMessage(box,unsupportedMessage,"error");return;}setMessage(box,"Compressing...");try{let quality=Number($("[data-quality]",compressor).value)/100;const maxWidth=Number($("[data-max-width]",compressor).value)||undefined;const target=Number($("[data-target]",compressor).value)||0;let blob=await processOne(file,{quality,maxWidth,type:"image/jpeg"});while(target&&blob.size/1024>target&&quality>.35){quality-=.08;blob=await processOne(file,{quality,maxWidth,type:"image/jpeg"});}resultLink(box,blob,file.name.replace(/\\.[^.]+$/,"")+"-compressed.jpg");}catch(err){setMessage(box,unsupportedMessage,"error");}});}
const resizer=$("[data-resizer]");
if(resizer){const width=$("[data-width]",resizer),height=$("[data-height]",resizer),aspect=$("[data-aspect]",resizer),fileInput=$("[data-file]",resizer);let ratio=0;fileInput.addEventListener("change",async e=>{const file=e.target.files[0];ratio=0;if(file&&isSupported(file)){try{const img=await readImage(file);ratio=img.naturalWidth/img.naturalHeight;}catch(err){ratio=0;}}});width.addEventListener("input",()=>{if(aspect.checked&&ratio)height.value=Math.round(Number(width.value)/ratio);});height.addEventListener("input",()=>{if(aspect.checked&&ratio)width.value=Math.round(Number(height.value)*ratio);});resizer.addEventListener("submit",async e=>{e.preventDefault();const box=$("[data-result]");const file=fileInput.files[0];if(!file){setMessage(box,"Choose an image first.","error");return;}if(!isSupported(file)){setMessage(box,unsupportedMessage,"error");return;}setMessage(box,"Resizing...");try{const type=$("[data-format]",resizer).value;const blob=await processOne(file,{type,quality:.9,width:Number(width.value),height:Number(height.value)});resultLink(box,blob,file.name.replace(/\\.[^.]+$/,"")+"-resized."+ext(type));}catch(err){setMessage(box,unsupportedMessage,"error");}});}
const converter=$("[data-converter]");
if(converter){converter.addEventListener("submit",async e=>{e.preventDefault();const box=$("[data-result]");const file=$("[data-file]",converter).files[0];if(!file){setMessage(box,"Choose an image first.","error");return;}if(!isSupported(file)){setMessage(box,unsupportedMessage,"error");return;}setMessage(box,"Converting...");try{const type=$("[data-format]",converter).value;const blob=await processOne(file,{type,quality:.9});resultLink(box,blob,file.name.replace(/\\.[^.]+$/,"")+"."+ext(type));}catch(err){setMessage(box,unsupportedMessage,"error");}});}
const bulk=$("[data-bulk]");
if(bulk){bulk.addEventListener("submit",async e=>{e.preventDefault();const box=$("[data-result]");const files=Array.from($("[data-file]",bulk).files);if(!files.length){setMessage(box,"Choose images first.","error");return;}if(files.some(file=>!isSupported(file))){setMessage(box,unsupportedMessage,"error");return;}setMessage(box,"Preparing downloads...");try{const quality=Number($("[data-quality]",bulk).value)/100,maxWidth=Number($("[data-max-width]",bulk).value)||undefined;const links=[];for(const file of files.slice(0,20)){const blob=await processOne(file,{type:"image/jpeg",quality,maxWidth});const url=URL.createObjectURL(blob);links.push(\`<a class="button secondary" download="\${file.name.replace(/\\.[^.]+$/,"")}-processed.jpg" href="\${url}">\${file.name} - \${size(blob.size)}</a>\`);}box.classList.remove("is-error");box.classList.add("is-success");box.innerHTML=\`<p>Prepared \${links.length} download\${links.length===1?"":"s"}.</p><div class="download-list">\${links.join("")}</div>\`;}catch(err){setMessage(box,unsupportedMessage,"error");}});}`;
}

function keywordMap() {
  const rows = [
    ["/image-compressor", "image compressor online", "compress image for email, reduce image size", "Compress images with quality control", "Tool page", "High", "Image Tools"],
    ["/image-resizer", "image resizer online", "resize image by pixels, resize photo online", "Resize dimensions", "Tool page", "High", "Image Tools"],
    ["/image-converter", "image converter online", "jpg png webp converter", "Change image format", "Tool page", "High", "Image Tools"],
    ["/bulk-image-tools", "bulk image compressor online", "bulk resize images, multiple image compressor", "Process many images", "Tool page", "Medium", "Image Tools"],
    ["/compress-image-under-100kb", "compress image under 100kb", "photo under 100 kb, reduce image to 100kb", "Meet upload size limit", "Long-tail tool page", "High", "Image Tools"],
    ["/compress-image-under-200kb", "compress image under 200kb", "photo under 200 kb, image compressor 200kb", "Meet upload size limit", "Long-tail tool page", "High", "Image Tools"],
    ["/resize-image-for-online-form", "resize image for online form", "resize photo for form, form image resizer", "Prepare form upload", "Long-tail tool page", "High", "Image Tools"],
    ["/compress-photo-for-government-form", "compress photo for government form", "government form photo size, compress photo for portal", "Prepare official upload", "Long-tail tool page", "High", "Image Tools"],
    ["/convert-webp-to-jpg", "convert webp to jpg online", "webp to jpg converter", "Format compatibility", "Long-tail tool page", "High", "Image Tools"],
    ["/png-to-jpg", "png to jpg converter", "convert png to jpg online", "Smaller compatible image", "Long-tail tool page", "High", "Image Tools"],
    ["/jpg-to-png", "jpg to png converter", "convert jpg to png online", "Required PNG output", "Long-tail tool page", "Medium", "Image Tools"],
    ["/passport-photo-resizer", "resize passport photo online", "passport photo resizer, photo size for application", "Resize photo dimensions", "Long-tail tool page", "Medium", "Image Tools"],
  ];
  const roadmap = [
    ["PDF compressor", "PDF Tools", "Future file utility", "Do not publish until a real PDF compression tool exists."],
    ["JPG to PDF", "PDF Tools", "Future file conversion", "Do not publish until a real JPG to PDF workflow exists."],
    ["word counter", "Text Tools", "Future text utility", "Do not publish until a real counter exists."],
    ["age calculator", "Calculators", "Future calculator", "Do not publish until a real calculator exists."],
    ["QR code generator", "QR Tools", "Future QR utility", "Do not publish until a real QR generator exists."],
    ["JSON formatter", "Developer Tools", "Future developer utility", "Do not publish until a real formatter exists."],
    ["resume builder", "File Tools", "Future document utility", "Do not publish until a real builder exists."],
    ["AI email writer", "AI Tools", "Future AI utility", "Do not publish until an actual AI workflow and policy copy exist."],
  ];
  return `# TheTools.World SEO Keyword Map\n\nProduction domain: ${domain}\n\n${brand} is a broader utility tools brand. Current indexable tool pages focus on image utilities because those are the only live tools in this folder.\n\n| Page URL | Primary keyword | Secondary keywords | Search intent | Page type | Title | Meta description | Internal links to add | Priority | Future expansion category |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n${rows.map(([route, target, secondary, intent, pageType, priority, category]) => {
    const page = routes.find((p) => p.route === route);
    const links = route.includes("compress") ? "/image-resizer, /image-converter, /bulk-image-tools" : route.includes("resize") || route.includes("passport") ? "/image-compressor, /resize-image-for-online-form, /passport-photo-resizer" : "/image-compressor, /image-resizer, /bulk-image-tools";
    return `| ${domain}${route} | ${target} | ${secondary} | ${intent} | ${pageType} | ${page.title} | ${page.description} | ${links} | ${priority} | ${category} |`;
  }).join("\n")}\n\n## Future Roadmap Keywords\n\nThese are planning targets only. They should not be added to the sitemap or navigation as live pages until real tools exist.\n\n| Keyword | Future category | Intent | Publishing note |\n| --- | --- | --- | --- |\n${roadmap.map((row) => `| ${row[0]} | ${row[1]} | ${row[2]} | ${row[3]} |`).join("\n")}\n`;
}

function smokeTest() {
  return `import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pages = ${JSON.stringify(routes.map((p) => p.file), null, 2)};
const legacyPages = ${JSON.stringify(legacy.map((p) => p.file), null, 2)};
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
  if (!fs.existsSync(full)) fail(\`\${file} is missing\`);
  const html = fs.readFileSync(full, "utf8");
  if (!/<title>[^<]+<\\/title>/.test(html)) fail(\`\${file} missing title\`);
  if (!/<meta name="description" content="[^"]+">/.test(html)) fail(\`\${file} missing meta description\`);
  if ((html.match(/<h1[\\s>]/g) || []).length !== 1) fail(\`\${file} must have exactly one h1\`);
  if ((html.match(/rel="canonical"/g) || []).length !== 1) fail(\`\${file} must have one canonical\`);
  if (!/<meta name="robots" content="index, follow">/.test(html)) fail(\`\${file} missing index, follow robots meta\`);
  if (!/<meta property="og:title" content="[^"]+">/.test(html)) fail(\`\${file} missing OG title\`);
  if (!/<meta property="og:description" content="[^"]+">/.test(html)) fail(\`\${file} missing OG description\`);
  if (!/<meta name="twitter:card" content="summary_large_image">/.test(html)) fail(\`\${file} missing Twitter card\`);
  if (!html.includes("${brand}")) fail(\`\${file} missing ${brand} branding\`);
  if (!html.includes("${domain}")) fail(\`\${file} missing ${domain} reference\`);
  const title = html.match(/<title>([^<]+)<\\/title>/)?.[1]?.trim();
  const description = html.match(/<meta name="description" content="([^"]+)">/)?.[1]?.trim();
  const h1 = html.match(/<h1[^>]*>([^<]+)<\\/h1>/)?.[1]?.trim();
  for (const [label, value, map] of [["title", title, seenTitles], ["description", description, seenDescriptions], ["h1", h1, seenH1s]]) {
    if (!value) continue;
    if (map.has(value)) fail(\`\${file} duplicate \${label} with \${map.get(value)}\`);
    else map.set(value, file);
  }
  const lower = html.toLowerCase();
  for (const term of forbidden) if (lower.includes(term)) fail(\`\${file} contains forbidden reference \${term}\`);
  if (/href="\\/[^"]+\\.html"/.test(html)) fail(\`\${file} contains internal .html link\`);
  const internalLinks = [...html.matchAll(/href="(\\/[^"#?]+)"/g)].map((m) => m[1]);
  for (const href of internalLinks) {
    if (href.startsWith("/assets")) continue;
    const target = href === "/" ? "index.html" : href.slice(1) + ".html";
    if (!fs.existsSync(path.join(root, target))) fail(\`\${file} links to missing \${href}\`);
  }
}

for (const file of legacyPages) {
  const full = path.join(root, file);
  if (!fs.existsSync(full)) fail(\`\${file} legacy redirect is missing\`);
  const html = fs.readFileSync(full, "utf8");
  if (!/<meta name="robots" content="noindex, follow">/.test(html)) fail(\`\${file} legacy page must be noindex, follow\`);
  if (!/<meta http-equiv="refresh"/.test(html)) fail(\`\${file} legacy page missing refresh redirect\`);
}

const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
if (!sitemap.includes("${domain}")) fail("sitemap missing ${domain}");
for (const route of ${JSON.stringify(routes.map((p) => p.route), null, 2)}) {
  const url = \`${domain}\${route === "/" ? "" : route}\`;
  if (!sitemap.includes(url)) fail(\`sitemap missing \${url}\`);
}

if (failures) process.exit(1);
console.log(\`Smoke checks passed for \${pages.length} public pages.\`);
`;
}

function notFound() {
  const page = { route: "/404", title: "Page Not Found - TheTools.World", description: "The requested TheTools.World page could not be found.", h1: "Page not found", kind: "404" };
  return `${head(page)}
  <main id="main">
    <section class="page-hero">
      <p class="eyebrow">${brand}</p>
      <h1>Page not found</h1>
      <p>The page may have moved. Use the sitemap or return home to find the image tool you need.</p>
      <p><a class="button primary" href="/">Go home</a> <a class="button secondary" href="/sitemap">View sitemap</a></p>
    </section>
  </main>
${footer()}`;
}

for (const page of routes) {
  const content = page.kind === "home" ? homePage(page) : ["about", "contact", "privacy", "terms", "sitemap"].includes(page.kind) ? infoPage(page) : toolPage(page);
  write(page.file, content);
}
for (const item of legacy) write(item.file, legacyPage(item));
write("404.html", notFound());
write("assets/styles.css", css());
write("assets/app.js", js());
write("assets/favicon.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="TheTools.World"><rect width="64" height="64" rx="14" fill="#246c94"/><text x="32" y="38" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700" fill="#fff">TW</text><circle cx="48" cy="17" r="5" fill="#f4a261"/></svg>\n`);
write("sitemap.xml", sitemapXml());
write("robots.txt", robots());
write("vercel.json", vercelJson());
write("seo-keyword-map.md", keywordMap());
write("tests/smoke-static.mjs", smokeTest());

console.log(`Built ${routes.length} public pages for ${brand}.`);
