# TheTools.World Foundation Audit

Audit date: 2026-06-14

## Summary

The site is a standalone static website with 18 public indexable pages and 6 legacy noindex redirect pages. Image tools are the only live tool category. Future categories are mentioned as planned but are not published as indexable pages.

## Public Pages

| URL | Title | Meta description | H1 | Canonical | Sitemap | Related tools | FAQ | How-to |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| / | TheTools.World - Free Online Tools for Images and Everyday Tasks | TheTools.World starts with free browser-side image tools for compression, resizing, conversion, and upload preparation, with more utilities planned. | Free online tools for images, files, text, and everyday tasks | https://thetools.world | Yes | No | Yes | No |
| /image-compressor | Image Compressor Online - Reduce Image File Size | Compress JPG, PNG, and WebP images in your browser with quality controls and instant download. | Image compressor online | https://thetools.world/image-compressor | Yes | Yes | No | Yes |
| /image-resizer | Image Resizer Online - Resize Photos by Pixel | Resize images by width and height, keep aspect ratio, and download a smaller copy from your browser. | Image resizer online | https://thetools.world/image-resizer | Yes | Yes | No | Yes |
| /image-converter | Image Converter Online - Convert JPG PNG WebP | Convert images between JPG, PNG, and WebP formats in your browser with a simple privacy-focused workflow. | Image converter online | https://thetools.world/image-converter | Yes | Yes | No | Yes |
| /bulk-image-tools | Bulk Image Tools - Resize and Compress Multiple Images | Process multiple images in one browser session for faster resize, compress, and conversion workflows. | Bulk image tools | https://thetools.world/bulk-image-tools | Yes | Yes | No | Yes |
| /compress-image-under-100kb | Compress Image Under 100KB Online | Use a browser-side compressor with a 100KB target for forms, portals, and document upload limits. | Compress image under 100KB | https://thetools.world/compress-image-under-100kb | Yes | Yes | No | Yes |
| /compress-image-under-200kb | Compress Image Under 200KB Online | Compress photos toward a 200KB target using local browser processing and adjustable output quality. | Compress image under 200KB | https://thetools.world/compress-image-under-200kb | Yes | Yes | No | Yes |
| /resize-image-for-online-form | Resize Image for Online Form Uploads | Resize photos for online application forms, profile uploads, and document portals using pixel dimensions. | Resize image for online form | https://thetools.world/resize-image-for-online-form | Yes | Yes | No | Yes |
| /compress-photo-for-government-form | Compress Photo for Government Form Uploads | Prepare photos for government and public-service form uploads with image compression and resizing guidance. | Compress photo for government form | https://thetools.world/compress-photo-for-government-form | Yes | Yes | No | Yes |
| /convert-webp-to-jpg | Convert WebP to JPG Online | Convert WebP images to JPG in your browser for apps and websites that do not accept WebP files. | Convert WebP to JPG | https://thetools.world/convert-webp-to-jpg | Yes | Yes | No | Yes |
| /png-to-jpg | PNG to JPG Converter Online | Convert PNG images to JPG for smaller files and wider upload compatibility. | PNG to JPG converter | https://thetools.world/png-to-jpg | Yes | Yes | No | Yes |
| /jpg-to-png | JPG to PNG Converter Online | Convert JPG images to PNG in your browser when you need a PNG copy for design or document workflows. | JPG to PNG converter | https://thetools.world/jpg-to-png | Yes | Yes | No | Yes |
| /passport-photo-resizer | Passport Photo Resizer Online | Resize a passport-style photo to exact pixel dimensions for application forms and profile uploads. | Passport photo resizer | https://thetools.world/passport-photo-resizer | Yes | Yes | No | Yes |
| /about | About TheTools.World | Learn about TheTools.World, a growing utility website starting with practical browser-side image tools. | About TheTools.World | https://thetools.world/about | Yes | No | No | No |
| /contact | Contact TheTools.World | Contact TheTools.World for support, corrections, accessibility issues, privacy questions, and tool suggestions. | Contact TheTools.World | https://thetools.world/contact | Yes | No | No | No |
| /privacy-policy | Privacy Policy - TheTools.World | Read the TheTools.World privacy policy for browser-side image tools, planned utility categories, analytics, cookies, ads, and contact information. | Privacy Policy | https://thetools.world/privacy-policy | Yes | No | No | No |
| /terms | Terms - TheTools.World | Read the terms for using TheTools.World browser image tools, future utilities, and website content. | Terms | https://thetools.world/terms | Yes | No | No | No |
| /sitemap | Sitemap - TheTools.World | Browse the public TheTools.World sitemap and find image resizing, compression, conversion, and legal pages. | Sitemap | https://thetools.world/sitemap | Yes | No | No | No |

## Clean URLs

All expected clean URLs are represented in `vercel.json` rewrites. `.html` duplicate public pages redirect to clean URLs. Legacy duplicates redirect to relevant current pages.

## Robots And Sitemap

- `robots.txt` allows crawling.
- `robots.txt` references `https://thetools.world/sitemap.xml`.
- `sitemap.xml` contains 18 clean URLs.
- Sitemap contains 0 `.html` URLs.

## Internal Links

- Homepage links to all live image tools.
- Tool pages include related tools sections.
- Footer links to core tools, form-related tools, planned categories as text, and legal pages.
- No internal `.html` links were found in root HTML pages.

## Duplicate Checks

- Smoke test passed for unique titles, descriptions, and H1s.
- Every public page has exactly one H1.
- Every public page has exactly one canonical.

## Brand And Placeholder Checks

No matches were found outside `prompts/**` for the old brand names, old placeholder domains, legacy PDF-project references, fake-trust phrases, fake ad placeholders, or best-in-market style claims listed in the P5 prompt.

## Legal Pages

- About page exists and is brand-specific.
- Contact page exists with `pdfbuddy73@gmail.com`.
- Privacy Policy mentions cookies, analytics, ads, and third-party services generally.
- Terms page exists and is readable.

## Risks

- Domain may not be connected yet, so live routing, SSL, and Search Console cannot be fully verified from local files.
- Tool pages have how-to sections but do not yet have visible FAQs except the homepage. Add FAQs only where they add useful, distinct answers.
- Analytics and AdSense are not installed yet by design; policy copy must be updated if specific providers are added.
- Mobile UX appears structurally responsive from CSS, but final mobile validation should be performed in a browser after deploy.

## Commands Run

- `npm.cmd run build` passed.
- `npm.cmd run test:smoke` passed.
- Old-brand and placeholder residue search passed outside prompts.
- Internal `.html` link check passed.
