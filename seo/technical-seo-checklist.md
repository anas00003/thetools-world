# TheTools.World Technical SEO Checklist

Run this checklist before every launch or major page expansion.

## Crawlability

- Public pages return 200 on clean URLs.
- Static assets return 200.
- Legacy pages redirect or remain noindex.
- No important content requires blocked scripts.

## Indexability

- Indexable pages have `index, follow`.
- No planned/future category pages are indexable.
- Legal pages remain indexable and accessible.
- No duplicate `.html` URLs are submitted.

## Canonicals

- Every public page has exactly one canonical.
- Canonicals use `https://thetools.world`.
- Canonicals point to clean URLs.
- Legacy pages canonicalize to their destination.

## Sitemap

- `sitemap.xml` contains only clean, useful, indexable URLs.
- Sitemap excludes `.html`, noindex, legacy, and redirect-only URLs.
- `robots.txt` references `https://thetools.world/sitemap.xml`.

## Robots

- `robots.txt` allows crawling.
- Do not block assets required for rendering.
- Do not use robots.txt to hide thin pages; avoid publishing them.

## Redirects And Clean URLs

- `.html` duplicate URLs redirect to clean URLs.
- Legacy duplicates redirect to the best matching clean route.
- `trailingSlash` behavior is consistent.
- There are no redirect chains.

## Duplicate Detection

- No duplicate title tags.
- No duplicate meta descriptions.
- Exactly one H1 per public page.
- No pages with identical search intent unless intentionally merged.

## UX And Performance

- Core Web Vitals are monitored after launch.
- Mobile viewport has no overlap or clipped controls.
- Upload areas, buttons, and errors are clear.
- Assets are lightweight.
- Images are optimized and lazy loaded when appropriate.
- JavaScript errors do not break core tools.

## Accessibility

- Inputs have labels.
- Buttons have clear accessible text.
- Color contrast is readable.
- Keyboard navigation reaches major controls.
- Focus states are visible.

## Schema

- Consider SoftwareApplication for real tool pages.
- Consider FAQPage only when visible FAQs exist.
- Consider BreadcrumbList when hierarchy expands.
- Do not add misleading schema.

## Broken Links And Link Depth

- Crawl internal links before launch.
- No internal `.html` links.
- Important tools are linked from the homepage and footer.
- Tool pages link to related tools.
- Keep key pages within two clicks of the homepage.

## Monitoring

- Verify Search Console coverage.
- Monitor Page indexing issues.
- Watch sitemap discovery.
- Inspect top URLs after launch.
- Review crawl stats and performance reports weekly.
