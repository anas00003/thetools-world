# TheTools.World 90-Day Growth Roadmap

## Days 1-7: Foundation and current image cluster strengthening

Goal: Make the current image-tool cluster reliable, internally connected, and ready for focused expansion.

Pages/tools to improve or create:

- Improve `/image-compressor` related links and copy.
- Improve `/image-resizer` pathways into form-upload and passport tools.
- Confirm `/compress-image-to-20kb`, `/compress-image-to-50kb`, `/compress-image-under-100kb`, and `/compress-image-under-200kb` work as one exact-size cluster.
- Keep sitemap, clean routes, and smoke tests aligned with generated routes.

Expected SEO reason: Current pages need to behave as a coherent image-preparation hub before adding more long-tail pages.

Implementation risk: Low if changes stay in `tools/build-site.js` and generated output.

Priority: High.

Acceptance criteria:

- Build and smoke tests pass.
- No fake claims or exact-size guarantees.
- Core pages link naturally to adjacent exact-size and resizing tools.
- Tool defaults match page intent.

## Days 8-30: Exact-size and form-upload cluster expansion

Goal: Build the highest-intent upload-limit pages with honest tool behavior.

Pages/tools to improve or create:

- `/compress-jpg-to-20kb`
- `/compress-jpg-to-50kb`
- `/compress-jpg-to-100kb`
- `/compress-jpg-to-200kb`
- `/compress-signature-image-to-20kb`
- `/resize-signature-to-140x60`
- `/compress-photo-for-job-application`
- `/compress-photo-for-admission-form`

Expected SEO reason: These pages match specific user constraints and can link back to exact-size image, form, signature, and passport clusters.

Implementation risk: Medium. Many pages may share behavior, so the generator needs careful data modeling to avoid duplicate thin pages.

Priority: High.

Acceptance criteria:

- Each page has unique use-case copy.
- Each page has a relevant default size, format, or dimension setting.
- Pages explain limits without promising exact output.
- Related links only point to existing live pages.

## Days 31-60: Format conversion and JPG/JPEG-specific pages

Goal: Capture users who need a format conversion before or after compression.

Pages/tools to improve or create:

- `/heic-to-jpg`
- `/webp-to-jpg` improvement or alias strategy around existing `/convert-webp-to-jpg`
- `/jpg-to-webp`
- `/image-to-webp`
- `/compress-jpeg-to-50kb`
- `/compress-jpeg-to-100kb`

Expected SEO reason: Format modifiers are common in upload workflows and build a second image cluster connected to compression.

Implementation risk: Medium. HEIC support may require browser capability checks or a library decision; avoid publishing if behavior is unreliable.

Priority: Medium-high.

Acceptance criteria:

- Browser support is accurately described.
- Unsupported inputs fail clearly.
- No page claims a format is supported unless the tool actually handles it.
- Conversion pages link to compression and resizing only when relevant.

## Days 61-90: Reference assets, monitoring, and monetization readiness

Goal: Support the tool cluster with reference content, measure performance, and prepare for monetization only when quality is stable.

Pages/tools to improve or create:

- Upload-size guide pages only where they help users.
- Passport/photo size reference pages tied to tools.
- Search Console and Bing Webmaster setup documentation.
- First monetization readiness review.
- Internal linking review across all image clusters.

Expected SEO reason: Reference pages can answer informational queries and pass users into tools. Monitoring identifies pages that need refinement.

Implementation risk: Medium. Reference pages can become thin if they do not include real guidance.

Priority: Medium.

Acceptance criteria:

- Search Console and Bing Webmaster are configured.
- Top pages have clear indexed status and query data review.
- Monetization review confirms content depth, navigation, privacy policy, and no misleading ad placeholders.
- No AI or PDF expansion starts without a separate cluster brief.
