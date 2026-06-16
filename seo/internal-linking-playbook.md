# Internal Linking Playbook

## Hub pages

Primary hubs:

- Home page: broad entry into live image tools.
- `/image-compressor`: compression hub.
- `/image-resizer`: resizing hub.
- `/image-converter`: conversion hub.
- `/bulk-image-tools`: multi-file workflow hub.

Future hubs should only be created when enough real pages exist to support them.

## Exact-size compression cluster

Cluster pages:

- `/compress-image-to-20kb`
- `/compress-image-to-50kb`
- `/compress-image-under-100kb`
- `/compress-image-under-200kb`
- Future JPG/JPEG-specific pages.

Link pattern:

- Smaller limit pages link to larger alternatives for quality.
- Larger limit pages link to smaller alternatives for stricter upload rules.
- All exact-size pages link to `/image-resizer` when large dimensions may block compression.

## Form-upload cluster

Cluster pages:

- `/resize-image-for-online-form`
- `/compress-photo-for-government-form`
- Future job, admission, exam, and account form pages.

Link pattern:

- Form pages link to exact-size compression pages by target.
- Exact-size pages link back to form resizing where dimension rules matter.
- Avoid implying official government or exam requirements unless sourced and maintained.

## Signature cluster

Future cluster pages:

- `/compress-signature-image-to-20kb`
- `/resize-signature-to-140x60`
- `/resize-signature-to-200x100`

Link pattern:

- Signature compression links to signature resizing.
- Signature resizing links to strict compression only after live.
- Signature pages link to form-upload pages when relevant.

## Passport/photo cluster

Current and future pages:

- `/passport-photo-resizer`
- `/resize-image-for-online-form`
- `/passport-photo-size-guide`

Link pattern:

- Passport pages link to resizer first, then compression only when file size is a separate rule.
- Avoid official-country-specific claims unless a maintained source strategy exists.

## Converter cluster

Current and future pages:

- `/image-converter`
- `/convert-webp-to-jpg`
- `/png-to-jpg`
- `/jpg-to-png`
- Future `/heic-to-jpg`, `/jpg-to-webp`, `/image-to-webp`.

Link pattern:

- Conversion pages link to compression pages when users may need smaller output after conversion.
- Compression pages link to conversion only when format compatibility is a common blocker.

## Homepage linking strategy

The homepage should highlight:

- Main image tools.
- Exact-size upload preparation.
- Form/photo preparation.
- Converter tools.

Do not overload the homepage with every long-tail page. Use sections and search/quick links to keep scanning easy.

## Related tools strategy

Each tool page should show 3-4 close related tools. Prefer relevance over volume. Related links should help complete the same job.

## Breadcrumbs

Breadcrumbs are optional. If added later, keep them simple:

`Home > Image Tools > Compress Image to 50KB`

Do not add breadcrumbs as schema unless the visual breadcrumb exists and is generated consistently.

## Anchor text examples

Good anchors:

- compress image to 50KB
- image resizer
- resize image for online form
- passport photo resizer
- convert WebP to JPG

Avoid anchors:

- click here
- best tool
- free #1 compressor
- guaranteed 50KB
- trusted by millions

## Links to avoid

- Future pages that are not built.
- Duplicate `.html` URLs.
- External competitors from core tool pages unless there is a deliberate reference reason.
- Unverified official portal pages that may change.

## When to add links to future pages

Add links only after:

- The page exists in `tools/build-site.js`.
- Build and smoke tests pass.
- The clean route is in sitemap.
- The page has a unique title, meta description, H1, and useful content.
