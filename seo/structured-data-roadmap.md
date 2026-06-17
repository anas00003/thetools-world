# Structured Data Roadmap

Status: audit and recommendation document. No broad schema expansion is implemented in this task.

## Current audit result

- Organization schema exists on generated pages.
- WebSite schema exists on generated pages.
- Organization logo points to `https://thetools.world/assets/logo.svg`.
- FAQPage schema is generated only for pages with visible FAQ content.
- The current smoke test checks the Organization logo schema and core metadata across all 24 public pages.
- No `aggregateRating`, fake reviews, fake ratings, or fake `sameAs` claims were found in the source scan.

## FAQPage rules

Keep FAQPage schema only where:

- The same questions are visible on the page.
- The accepted answers match visible FAQ content in substance.
- The FAQ helps the user complete the page task.
- The page avoids guaranteed exact-size claims such as "always exactly 50KB".

Do not add FAQ schema to short support/legal pages unless visible FAQ sections are actually added.

## WebApplication or SoftwareApplication later

Good candidates:

- `/image-compressor`
- `/image-resizer`
- `/image-converter`
- `/bulk-image-tools`
- `/compress-image-to-20kb`
- `/compress-image-to-50kb`
- `/compress-image-under-100kb`
- `/compress-image-under-200kb`
- `/compress-jpg-to-20kb`
- `/compress-jpg-to-50kb`
- `/compress-jpg-to-100kb`
- `/compress-jpg-to-200kb`
- `/resize-image-for-online-form`
- `/compress-photo-for-government-form`
- `/passport-photo-resizer`
- `/convert-webp-to-jpg`
- `/png-to-jpg`
- `/jpg-to-png`

Required visible support before adding this schema:

- Clear tool purpose near the top.
- Browser-side processing note.
- Supported input/output formats or constraints.
- How-to section.
- Limitations or troubleshooting.
- Clear canonical URL.

Allowed properties:

- `@context`
- `@type`: `WebApplication` or `SoftwareApplication`
- `name`
- `url`
- `applicationCategory`
- `operatingSystem`: `Web browser`
- `description`
- `offers` only if accurately set to free with no misleading monetization claim.

Avoid:

- `aggregateRating`
- `review`
- fake `sameAs`
- unverifiable audience claims
- unsupported privacy claims
- guaranteed output-size claims

## Implementation guidance

Add any future schema through `tools/build-site.js`, then run `npm.cmd run build` and `npm.cmd run test:smoke`. Do not hand-edit generated HTML.
