# Bing Webmaster and IndexNow Readiness Checklist

Status: planning only. Do not implement IndexNow until the site has a clear key-management pattern and the owner has confirmed Bing Webmaster access.

## Bing Webmaster Tools setup

- Add property: `https://thetools.world`
- Preferred verification options:
  - Import from Google Search Console if available in the account.
  - DNS TXT verification if the domain provider is easier to manage.
  - Meta tag verification only if a generator-backed implementation is planned through `tools/build-site.js`.
- Submit sitemap: `https://thetools.world/sitemap.xml`
- Confirm Bing can crawl:
  - `https://thetools.world/`
  - `https://thetools.world/robots.txt`
  - `https://thetools.world/sitemap.xml`
  - `https://thetools.world/assets/favicon.svg`
  - `https://thetools.world/assets/logo.svg`
  - `https://thetools.world/site.webmanifest`
- Do not submit `www`, `.html`, or Vercel preview URLs.

## IndexNow later

If IndexNow is implemented later:

- Create an IndexNow API key in Bing Webmaster Tools.
- Host the key file at the site root using a generated static file.
- Submit only clean canonical URLs from `sitemap.xml`.
- Trigger submissions after page creation or meaningful content updates, not for every rebuild.
- Keep the key file out of prompts, screenshots, and public reports unless it is intentionally public as required by IndexNow.

## Monitoring

- Watch Indexing, Crawl Information, Sitemaps, and SEO Reports in Bing Webmaster Tools.
- Review Bing AI or Copilot-related performance panels if they become available in the account.
- Compare Bing indexed URLs against the 24 canonical URLs in `sitemap.xml`.

## Current recommendation

Ready for Bing Webmaster setup and sitemap submission. IndexNow should remain a later implementation task.
