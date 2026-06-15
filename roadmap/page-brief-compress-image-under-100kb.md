# Page Brief: Compress Image Under 100KB

Target page: `https://thetools.world/compress-image-under-100kb`

Local source of truth: `tools/build-site.js`

Planning status: brief only. Do not implement in this step.

## Current Page Audit

| Area | Current state | Gap or opportunity |
| --- | --- | --- |
| Title | `Compress Image Under 100KB Online` | Good baseline, but can better capture `compress image to 100kb` and form-upload intent. |
| Meta description | `Use a browser-side compressor with a 100KB target for forms, portals, and document upload limits.` | Accurate, but could mention JPG/photo and the important size-limit workflow more clearly. |
| H1 | `Compress image under 100KB` | Good and concise. Keep close to current wording. |
| Intro | Explains adjustable quality and that results depend on original dimensions/content. | Useful, but should also explain forms, portals, uploads, documents, and email size limits. |
| Tool UI | File upload, quality slider, max width, optional target KB defaulting to 100, download result. | Good base. Needs clearer help text for supported formats, target-size behavior, and next steps if still above 100KB. |
| How-to section | Three generic steps used across tools. | Too generic for a high-priority long-tail page. Needs 100KB-specific steps. |
| Related tools | Shows image compressor, resizer, converter, bulk tools. | Good base, but should also link prominently to `/compress-image-under-200kb` and form-related pages. |
| FAQ presence | No page-specific FAQ on this generated page. | Add a short FAQ section for exact size, formats, privacy, and troubleshooting. |
| Internal links | Header/footer links plus related tools. Footer includes 100KB, 200KB, online form, passport photo. | Add contextual in-body links to 200KB, resize for online form, passport photo resizer, and image compressor. |
| Schema | No visible JSON-LD schema on the page. | Add `FAQPage` schema if FAQ is implemented; optionally add `SoftwareApplication`/`WebApplication` later if used consistently across tool pages. |
| Mobile usability | Current CSS stacks tool panel on small screens, full-width button, no obvious overflow from markup. | Keep the existing responsive layout. Add content without creating dense mobile blocks before the tool. |
| Content usefulness | Tool is usable but page copy is thin. | Add practical guidance for hitting a 100KB limit without keyword stuffing. |
| Keyword intent match | Matches `compress image under 100kb`; partially matches `compress image to 100kb`. | Strengthen exact `to 100kb`, JPG/photo variants, and upload-limit language naturally. |

## Search Intent Summary

Users searching for this page need to make an image file small enough for a fixed upload limit, usually for online forms, application portals, document uploads, email attachments, profile photos, or government/service portals. They want a fast browser tool, simple settings, and clear troubleshooting when the file does not land under 100KB on the first try.

The page should answer three practical questions:

1. Can I compress this image close to or under 100KB?
2. What settings should I change if it is still too large?
3. Is the result safe to use for my form or upload requirement?

## Primary Keyword

`compress image to 100kb`

## Secondary Keyword Variants

- `compress image under 100kb`
- `image compressor 100kb`
- `reduce image size to 100kb`
- `compress jpg under 100kb`
- `compress photo under 100kb`
- `photo compressor under 100kb`
- `reduce photo size under 100kb`

## Recommended Title Tag

`Compress Image to 100KB Online | TheTools.World`

Alternative if keeping closer to the current URL wording:

`Compress Image Under 100KB Online | TheTools.World`

## Recommended Meta Description

`Compress JPG, PNG, or WebP images toward a 100KB limit for forms, portals, documents, and email. Adjust quality and width in your browser.`

## Recommended H1

`Compress image to 100KB online`

This aligns better with the keyword decision report while still matching the existing URL and intent.

## H2 Section Plan

1. `Compress settings`
2. `How to compress an image to 100KB`
3. `How to get closer to the 100KB limit`
4. `What if the image is still above 100KB?`
5. `Common 100KB upload uses`
6. `Related image tools`
7. `FAQ`

## Tool UX Requirements

- Keep the upload field, quality slider, max-width input, target-KB input, and download result.
- Keep the target-KB input defaulted to `100`.
- Add concise helper text near the target input: `Exact final size depends on the original image, dimensions, format, and quality.`
- Add supported-format note near the upload input: `Supports JPG, PNG, and WebP input. Downloads are prepared as JPG for smaller output.`
- Add a privacy/browser-side note near the tool intro: `Your selected image is processed in your browser for this tool workflow.`
- Add a troubleshooting note near the result area or below the form: if the result is still above 100KB, lower quality, reduce max width, or resize first.
- Keep mobile controls stacked and full-width as they are now.
- Do not promise exact 100KB output for every image.
- Do not add account creation, server upload language, or AdSense placeholders.

## Exact Content Sections To Add Or Improve

### Hero/Intro

Improve the intro to explain that the tool is for upload limits:

Suggested copy direction:

`Use this page when a form, portal, document upload, or email attachment needs an image close to or under 100KB. Choose your image, keep the 100KB target, and adjust quality or width until the downloaded file fits your requirement.`

Include the warning:

`Exact final size depends on the original image, dimensions, format, and visual detail.`

### How To Compress An Image To 100KB

Replace the generic how-to with page-specific steps:

1. Choose a JPG, PNG, or WebP image from your device.
2. Leave the target size set to `100KB`.
3. Start with the default quality setting.
4. Download the compressed image and check the final file size.
5. If it is still above 100KB, reduce quality or max width and try again.

### How To Get Closer To 100KB

Add practical guidance:

- Large phone photos often need width reduction before compression.
- Lowering quality reduces file size but may soften fine details.
- JPG is usually smaller for photos than PNG.
- Screenshots or graphics with text may need a balance between quality and readability.

### What If The Image Is Still Above 100KB?

Add troubleshooting:

- Reduce max width, for example from 1600px to 1200px or 1000px.
- Lower the quality slider gradually.
- Use `/image-resizer` first if the original dimensions are very large.
- If the portal accepts a higher limit, use `/compress-image-under-200kb`.
- Check the official upload rules before submitting.

### Common 100KB Upload Uses

Mention realistic use cases without fake claims:

- online application forms
- document portals
- profile photo uploads
- email attachments
- school, job, service, and account forms

## FAQ Questions To Add

1. `Can every image be compressed to exactly 100KB?`
   - Answer direction: No. Exact size depends on the original image, dimensions, detail, and quality. The tool helps you get close or under the limit when possible.

2. `Which image formats are supported?`
   - Answer direction: JPG, PNG, and WebP uploads are supported by the browser tool. Compressed downloads are prepared as JPG for smaller file sizes.

3. `What should I do if my image is still bigger than 100KB?`
   - Answer direction: Lower quality, reduce max width, or resize the image before compressing. Check the final file size before uploading.

4. `Is this suitable for online forms and document portals?`
   - Answer direction: It can help prepare file size, but users must compare the result with the official portal's size, dimension, and format rules.

5. `Are my images uploaded to a server?`
   - Answer direction: The current image processing workflow uses browser APIs. Avoid claiming more than the implementation supports; keep wording consistent with the privacy policy.

## Schema Recommendation

Add `FAQPage` JSON-LD only if the visible FAQ section is added to the page.

Recommended schema type:

- `FAQPage` with the exact visible questions and answers from the page.

Optional later schema:

- `WebApplication` or `SoftwareApplication` for core tools, but only if applied consistently and accurately across tool pages.

Do not add fake ratings, review schema, aggregate ratings, or organization claims that are not backed by real data.

## Internal Links To Add

Add contextual in-body links, not only footer links:

| Link target | Suggested anchor | Placement |
| --- | --- | --- |
| `/image-compressor` | image compressor | Intro or related tools |
| `/image-resizer` | resize the image first | Troubleshooting section |
| `/compress-image-under-200kb` | compress image under 200KB | Troubleshooting section |
| `/resize-image-for-online-form` | resize image for online form | Common upload uses or related tools |
| `/passport-photo-resizer` | passport photo resizer | Related tools |
| Future `/compress-image-to-20kb` | compress image to 20KB | Add later only after the page exists |
| Future `/compress-image-to-50kb` | compress image to 50KB | Add later only after the page exists |

## Related Tools To Show

Keep or prioritize:

1. `/image-compressor`
2. `/compress-image-under-200kb`
3. `/image-resizer`
4. `/resize-image-for-online-form`
5. `/passport-photo-resizer`
6. `/bulk-image-tools`

If the related-tools component remains limited to four cards, use:

1. Image compressor
2. Compress under 200KB
3. Image resizer
4. Resize image for online form

## Acceptance Criteria For Implementation

- Public URL remains `https://thetools.world/compress-image-under-100kb`.
- Canonical remains `https://thetools.world/compress-image-under-100kb`.
- No new pages are created.
- No AdSense code is added.
- `sitemap.xml`, `robots.txt`, and `vercel.json` remain unchanged unless a later implementation prompt explicitly allows them.
- The implementation is made in `tools/build-site.js`, then generated output is rebuilt from the source of truth.
- Page has one H1 only.
- Title and meta description are unique and not stuffed.
- The page includes useful 100KB-specific guidance before and after the tool.
- FAQ content is visible on the page if FAQ schema is added.
- FAQ schema, if added, exactly matches visible FAQ content.
- Internal links point only to existing live pages unless future pages have been approved and created.
- Mobile layout keeps the tool usable without horizontal scrolling.
- Copy avoids fake claims, fake testimonials, fake user counts, `#1`, guaranteed exact compression promises, and unsupported privacy/security claims.
- Smoke test passes after implementation.

## What Not To Add

- Do not add AdSense, ad placeholders, or monetization blocks.
- Do not add fake testimonials, ratings, reviews, trust badges, or user counts.
- Do not claim exact 100KB output is guaranteed.
- Do not keyword-stuff repeated variants into headings.
- Do not create `/compress-image-to-100kb` or any new alternate URL in this step.
- Do not change the domain, canonical strategy, sitemap, robots, or Vercel routing.
- Do not add links to future 20KB/50KB pages until those pages exist.
- Do not add server-upload language unless the implementation changes.

## Implementation Notes For Later

- Update the route object for `/compress-image-under-100kb` in `tools/build-site.js`.
- Extend the generated tool-page template carefully so only this page receives the extra sections, or add page-specific content fields that other pages can safely ignore.
- Prefer structured page data in the route object over hard-coded route checks if this pattern will be reused for 200KB and future 20KB/50KB pages.
- Rebuild with the existing build command after implementation.
- Run the existing smoke test after rebuild.
