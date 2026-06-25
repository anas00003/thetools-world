# Full-Site AdSense Content Quality Audit

Production domain: https://thetools.world
Audit date: 2026-06-25

## Baseline Summary

The site has 24 indexable public pages generated through `tools/build-site.js`, plus legacy noindex redirect pages and a 404 page outside the sitemap. The source of routes, metadata, canonicals, sitemap, schema, related links, shared head, assets, and smoke-test expectations is `tools/build-site.js`.

Current page groups:

- Homepage: `/`
- Core hub/tool pages: `/image-compressor`, `/image-resizer`, `/image-converter`, `/bulk-image-tools`
- General exact-size pages: `/compress-image-to-20kb`, `/compress-image-to-50kb`, `/compress-image-under-100kb`, `/compress-image-under-200kb`
- JPG exact-size pages: `/compress-jpg-to-20kb`, `/compress-jpg-to-50kb`, `/compress-jpg-to-100kb`, `/compress-jpg-to-200kb`
- Converter pages: `/convert-webp-to-jpg`, `/jpg-to-png`, `/png-to-jpg`
- Form/photo utility pages: `/resize-image-for-online-form`, `/compress-photo-for-government-form`, `/passport-photo-resizer`
- Support/legal/info pages: `/about`, `/contact`, `/privacy-policy`, `/terms`, `/sitemap`

## Page-by-Page Audit

| URL | Type | Baseline quality | Checks present | Risk reason | Improvement needed | Implement now |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | homepage | acceptable | purpose, tool groups, related links, privacy note | needed stronger start path and FAQ schema alignment | add practical start-here guidance, task checks, schema-backed FAQ | yes |
| `/image-compressor` | tool page | thin | tool UI, intro, related links | lacked enough standalone explanation, limitations, troubleshooting, FAQ | add use cases, steps, limits, privacy note, FAQ | yes |
| `/image-resizer` | tool page | thin | tool UI, intro | lacked aspect-ratio guidance, output-format guidance, troubleshooting, FAQ | add steps, aspect-ratio notes, compression handoff, FAQ | yes |
| `/image-converter` | converter hub | strong | steps, use cases, format notes, troubleshooting, FAQ, schema | P8 already improved it | keep and validate | no |
| `/bulk-image-tools` | tool page | thin | tool UI, intro | lacked batch-specific guidance, limits, troubleshooting, FAQ | add batch use cases, limitations, related tools, FAQ | yes |
| `/compress-image-to-20kb` | exact-size compression | strong | target purpose, steps, limits, use cases, FAQ, schema | doorway risk exists for exact-size clusters generally | keep unique strict-limit copy, validate | no |
| `/compress-image-to-50kb` | exact-size compression | strong | target purpose, steps, limits, use cases, FAQ, schema | cluster similarity risk only | keep 50KB-specific copy, validate | no |
| `/compress-image-under-100kb` | exact-size compression | strong | target purpose, steps, limits, use cases, FAQ, schema | cluster similarity risk only | keep 100KB-specific copy, validate | no |
| `/compress-image-under-200kb` | exact-size compression | strong | target purpose, steps, limits, use cases, FAQ, schema | cluster similarity risk only | keep 200KB quality-friendly copy, validate | no |
| `/compress-jpg-to-20kb` | JPG exact-size compression | strong | JPG purpose, size guidance, JPG vs PNG, FAQ, schema | cluster similarity risk only | keep strict JPG-specific copy, validate | no |
| `/compress-jpg-to-50kb` | JPG exact-size compression | strong | JPG purpose, size guidance, JPG vs PNG, FAQ, schema | cluster similarity risk only | keep 50KB JPG-specific copy, validate | no |
| `/compress-jpg-to-100kb` | JPG exact-size compression | strong | JPG purpose, size guidance, JPG vs PNG, FAQ, schema | cluster similarity risk only | keep 100KB JPG-specific copy, validate | no |
| `/compress-jpg-to-200kb` | JPG exact-size compression | strong | JPG purpose, size guidance, JPG vs PNG, FAQ, schema | cluster similarity risk only | keep 200KB JPG-specific copy, validate | no |
| `/resize-image-for-online-form` | form utility page | thin | tool UI, intro | lacked enough form-specific guidance, limitations, FAQ | add form situations, steps, privacy, troubleshooting, FAQ | yes |
| `/compress-photo-for-government-form` | form utility page | risky | tool UI, intro | could imply broad government utility without enough careful limits | add no-approval guarantee, official-rule checks, troubleshooting, FAQ | yes |
| `/convert-webp-to-jpg` | converter page | strong | conversion purpose, compatibility, limits, troubleshooting, FAQ, schema | P8 already improved it | keep and validate | no |
| `/png-to-jpg` | converter page | strong | conversion purpose, transparency warning, troubleshooting, FAQ, schema | P8 already improved it | keep and validate | no |
| `/jpg-to-png` | converter page | strong | conversion purpose, quality warning, transparency note, FAQ, schema | P8 already improved it | keep and validate | no |
| `/passport-photo-resizer` | form/passport utility page | thin | tool UI, intro | lacked official-photo limits, troubleshooting, FAQ | add careful passport-style guidance and no approval guarantee | yes |
| `/about` | support/trust page | acceptable | purpose, audience, privacy approach, links | P8 already improved it | keep and validate title/H1 split | no |
| `/contact` | support page | acceptable | feedback, requests, bug report guidance, privacy note | P8 already improved it | keep and validate title/H1 split | no |
| `/privacy-policy` | legal page | acceptable | analytics, cookies, third-party services, future ads, file privacy | legal pages can be shorter if complete | keep and validate | no |
| `/terms` | legal page | acceptable | as-is use, no exact result, limits, misuse, contact | legal pages can be shorter if complete | keep and validate | no |
| `/sitemap` | info page | acceptable | grouped clean links | should remain concise and useful | keep and validate all important links | no |
| `/404` | non-sitemap utility | acceptable | helpful home/sitemap links | should not be indexable or in sitemap | keep short, do not add to sitemap | no |

## Implementation Notes

Implemented now:

- Homepage: stronger task-based start path, practical checks section, FAQ route data so visible FAQ has matching FAQPage schema.
- Core pages: `/image-compressor`, `/image-resizer`, `/bulk-image-tools`.
- Form/photo pages: `/resize-image-for-online-form`, `/compress-photo-for-government-form`, `/passport-photo-resizer`.
- Validation: expanded smoke checks for content depth, FAQ/schema matching, fake rating schema, and required sections on previously thin pages.

Deferred:

- No broad exact-size rewrites were made because those pages already had differentiated size-specific content and ranking slugs should not churn unnecessarily.
- No new public indexable pages were added.
- No AdSense ad units were added.

## Remaining Risk

The main remaining risk is live-review behavior after deployment, not local file structure. AdSense and Semrush must re-crawl the deployed site before the final outcome is known.

