# Search Console Next Actions

Status: manual checklist. Google Search Console is verified and the sitemap is submitted.

## Inspect manually

1. Inspect homepage:
   - `https://thetools.world/`
2. Inspect new JPG pages:
   - `https://thetools.world/compress-jpg-to-20kb`
   - `https://thetools.world/compress-jpg-to-50kb`
   - `https://thetools.world/compress-jpg-to-100kb`
   - `https://thetools.world/compress-jpg-to-200kb`
3. Inspect new image exact-size pages if not already done:
   - `https://thetools.world/compress-image-to-20kb`
   - `https://thetools.world/compress-image-to-50kb`
4. Resubmit sitemap:
   - `https://thetools.world/sitemap.xml`

## Do not submit

- `www` URLs.
- `.html` URLs.
- Vercel preview URLs.

## Track status

Use this table as the working tracker.

| URL | URL is on Google | Discovered currently not indexed | Crawled currently not indexed | Duplicate/canonical issue | Blocked by robots | Server error | Indexed |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `https://thetools.world/` |  |  |  |  |  |  |  |
| `https://thetools.world/compress-jpg-to-20kb` |  |  |  |  |  |  |  |
| `https://thetools.world/compress-jpg-to-50kb` |  |  |  |  |  |  |  |
| `https://thetools.world/compress-jpg-to-100kb` |  |  |  |  |  |  |  |
| `https://thetools.world/compress-jpg-to-200kb` |  |  |  |  |  |  |  |
| `https://thetools.world/compress-image-to-20kb` |  |  |  |  |  |  |  |
| `https://thetools.world/compress-image-to-50kb` |  |  |  |  |  |  |  |

## Interpretation notes

- `Discovered currently not indexed` can be normal for newly submitted pages.
- `Crawled currently not indexed` should be watched; if it persists, improve page depth and internal links.
- Any `Duplicate, Google chose different canonical` status should be checked against clean-route canonicals and `.html` redirects.
- Any `Blocked by robots` status is a priority issue.
- Any server error should be verified live with headers and fixed before AdSense application.
