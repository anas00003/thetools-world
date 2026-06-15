# Page Brief: Compress Image Under 200KB

Target page: `https://thetools.world/compress-image-under-200kb`

Local source of truth: `tools/build-site.js`

Planning status: brief only. Do not implement in this step.

## Current Page Audit

| Area | Current state | Gap or opportunity |
| --- | --- | --- |
| Title | `Compress Image Under 200KB Online` | Good baseline, but can better capture `compress image to 200kb`, JPG/photo variants, and upload-limit intent. |
| Meta description | `Compress photos toward a 200KB target using local browser processing and adjustable output quality.` | Accurate but short. It should mention forms, portals, documents, email, and supported image formats. |
| H1 | `Compress image under 200KB` | Clear and aligned with the URL. Consider `Compress image to 200KB online` if the implementation wants closer match to "to 200KB" searches. |
| Intro | Explains preparing photos for portals below 200KB and resizing large images first. | Useful but thin. Needs clearer target-size behavior, supported formats, browser-side workflow, and common upload use cases. |
| Tool UI | File upload, quality slider, max-width input, optional target KB defaulting to 200, submit button, and result box. | Functional. Needs inline helper copy for supported formats, JPG output, target-size limits, and what to try when the result is still above 200KB. |
| How-to section | Generic three-step section shared across tools. | Too generic for a long-tail upload-limit page. Needs 200KB-specific steps and troubleshooting guidance. |
| Related tools | Shows image compressor, image resizer, image converter, and bulk image tools. | Related cards should prioritize 100KB compressor, image resizer, online form resizer, and passport photo resizer. |
| FAQ presence | No page-specific FAQ is visible. | Add FAQ for exact 200KB output, supported formats, troubleshooting, portal suitability, and browser-side processing. |
| Internal links | Header/footer links exist. Footer links to 100KB, 200KB, online form, and passport photo pages. | Add contextual in-body links to the 100KB page, image resizer, online form resizer, passport photo resizer, and general image compressor. |
| Schema | No visible JSON-LD schema on this page. | Add `FAQPage` schema only if a visible FAQ section is implemented. Avoid fake rating or review schema. |
| Mobile usability | Existing CSS stacks the tool panel at small widths, makes buttons full-width, and avoids horizontal overflow. | Keep this behavior. Added content should stay scannable and should not push the tool too far below the fold. |
| Content usefulness | The compressor is usable, but the page has very little 200KB-specific guidance. | Add practical advice for choosing width/quality settings and checking final size against official upload rules. |
| Keyword intent match | Matches `compress image under 200kb`; partially matches `compress image to 200kb` and `image compressor 200kb`. | Strengthen natural references to 200KB upload limits, JPG/photo compression, forms, portals, email attachments, and applications. |

## Search Intent Summary

Users searching for this page usually have a fixed file-size requirement and need an image or photo close to or under 200KB before uploading it. Common contexts include online forms, job or school applications, account/profile photo uploads, document portals, government or service portals, and email attachments.

The page should quickly answer:

1. Can I reduce this image close to or under 200KB?
2. Which settings should I change if the first download is still too large?
3. What other tool should I use if the upload form also has width, height, or stricter file-size rules?

## Primary Keyword

`compress image under 200kb`

## Secondary Keyword Variants

- `compress image to 200kb`
- `image compressor 200kb`
- `reduce image size to 200kb`
- `compress jpg under 200kb`
- `compress photo under 200kb`
- `photo compressor under 200kb`
- `reduce photo size under 200kb`

## Recommended Title Tag

`Compress Image to 200KB Online | TheTools.World`

Alternative if keeping closer to the current URL wording:

`Compress Image Under 200KB Online | TheTools.World`

## Recommended Meta Description

`Compress JPG, PNG, or WebP images toward a 200KB limit for forms, portals, documents, and email. Adjust quality and width in your browser.`

## Recommended H1

`Compress image to 200KB online`

This is slightly stronger for search intent than the current H1 while still matching the existing URL. Keeping `Compress image under 200KB` is also acceptable if consistency with the URL is preferred.

## H2 Section Plan

1. `Compress settings`
2. `How to compress an image to 200KB`
3. `How to get closer to the 200KB limit`
4. `What if the image is still above 200KB?`
5. `Common 200KB upload uses`
6. `Related image tools`
7. `FAQ`

## Tool UX Requirements

- Keep the upload field, quality slider, max-width input, target-KB input, submit button, preview/result area, and download flow.
- Keep the target-KB input defaulted to `200`.
- Add helper text near the upload control: `Supports JPG, PNG, and WebP input. Compressed downloads are prepared as JPG for smaller output.`
- Add helper text near the target input: `Exact final size depends on the original image, dimensions, format, and visual detail.`
- Add a browser-side workflow note near the tool intro: `Your selected image is processed in your browser for this tool workflow.`
- Add a short troubleshooting note below the form or result area: if the result is still above 200KB, reduce max width, lower quality, or resize first.
- Keep controls stacked on mobile and avoid placing dense explanatory text between the hero and the tool.
- Do not promise exact 200KB output for every image.
- Do not add account creation, server-upload claims, AdSense code, or ad placeholders.

## Exact Content Sections To Add Or Improve

### Hero/Intro

Improve the intro so it explains the upload-limit use case:

`Use this page when an upload form, document portal, application, profile page, or email attachment needs an image close to or under 200KB. Choose your image, keep the 200KB target, and adjust quality or width until the downloaded file fits your requirement.`

Include the warning:

`Exact final size depends on the original image, dimensions, format, and visual detail.`

### How To Compress An Image To 200KB

Replace the generic how-to with page-specific steps:

1. Choose a JPG, PNG, or WebP image from your device.
2. Leave the target size set to `200KB`.
3. Start with the default quality setting.
4. Download the compressed image and check the final file size.
5. If it is still above 200KB, lower quality or reduce max width and try again.

### How To Get Closer To 200KB

Add practical guidance:

- Large phone photos often need width reduction before compression.
- Lowering quality reduces file size but can soften fine details.
- JPG is usually smaller for photos than PNG.
- Screenshots, certificates, or graphics with text may need a higher quality setting for readability.
- If a form has both file-size and pixel-dimension rules, resize first and then compress.

### What If The Image Is Still Above 200KB?

Add troubleshooting:

- Reduce max width, for example from 1600px to 1400px, 1200px, or 1000px.
- Lower the quality slider gradually instead of jumping to the lowest setting.
- Use the `/image-resizer` first if the original dimensions are very large.
- If the portal needs a smaller limit, use `/compress-image-under-100kb`.
- Check the official upload rules before submitting because some forms also require a specific format or dimension.

### Common 200KB Upload Uses

Mention realistic use cases without fake claims:

- online application forms
- document upload portals
- profile photo uploads
- email attachments
- school, job, service, and account forms
- forms that allow a larger file than a strict 100KB photo limit

## FAQ Questions To Add

1. `Can every image be compressed to exactly 200KB?`
   - Answer direction: No. Exact size depends on the original image, dimensions, detail, and quality. The tool helps you get close to or under the limit when possible.

2. `Which image formats are supported?`
   - Answer direction: JPG, PNG, and WebP uploads are supported by the browser tool. Compressed downloads are prepared as JPG for smaller file sizes.

3. `What should I do if my image is still bigger than 200KB?`
   - Answer direction: Lower quality, reduce max width, or resize the image before compressing. Check the final file size before uploading.

4. `Should I use the 100KB or 200KB compressor?`
   - Answer direction: Use the limit required by the form or portal. If it says under 200KB, this page is the better starting point. If it says under 100KB, use the 100KB page.

5. `Is this suitable for online forms and document portals?`
   - Answer direction: It can help prepare file size, but users must compare the result with the official portal's size, dimension, and format rules.

6. `Are my images uploaded to a server?`
   - Answer direction: The current image processing workflow uses browser APIs. Keep wording consistent with the privacy policy and avoid broader security claims.

## Schema Recommendation

Add `FAQPage` JSON-LD only if the visible FAQ section is added to the page.

Recommended schema type:

- `FAQPage` with the exact visible questions and answers from the page.

Optional later schema:

- `WebApplication` or `SoftwareApplication` for core tools, but only if applied consistently and accurately across tool pages.

Do not add fake ratings, review schema, aggregate ratings, user counts, or unsupported organization claims.

## Internal Links To Add

Add contextual in-body links, not only footer links:

| Link target | Suggested anchor | Placement |
| --- | --- | --- |
| `/image-compressor` | image compressor | Intro or related tools |
| `/compress-image-under-100kb` | compress image under 100KB | Troubleshooting or FAQ |
| `/image-resizer` | resize the image first | Troubleshooting section |
| `/resize-image-for-online-form` | resize image for online form | Common upload uses or related tools |
| `/passport-photo-resizer` | passport photo resizer | Related tools |
| `/compress-photo-for-government-form` | compress photo for government form | Common upload uses or related tools |

## Related Tools To Show

Prioritize:

1. `/image-compressor`
2. `/compress-image-under-100kb`
3. `/image-resizer`
4. `/resize-image-for-online-form`
5. `/passport-photo-resizer`
6. `/compress-photo-for-government-form`

If the related-tools component remains limited to four cards, use:

1. Image compressor
2. Compress under 100KB
3. Image resizer
4. Resize image for online form

## Acceptance Criteria For Implementation

- Public URL remains `https://thetools.world/compress-image-under-200kb`.
- Canonical remains `https://thetools.world/compress-image-under-200kb`.
- No new pages are created.
- No AdSense code is added.
- `sitemap.xml`, `robots.txt`, and `vercel.json` remain unchanged unless a later implementation prompt explicitly allows them.
- The implementation is made in `tools/build-site.js`, then generated output is rebuilt from the source of truth.
- Page has one H1 only.
- Title and meta description are unique and not stuffed.
- The page includes useful 200KB-specific guidance before and after the tool.
- The tool still defaults to a 200KB target.
- FAQ content is visible on the page if FAQ schema is added.
- FAQ schema, if added, exactly matches visible FAQ content.
- Internal links point only to existing live pages.
- Related tools include the 100KB compressor and form/photo preparation tools.
- Mobile layout keeps the tool usable without horizontal scrolling.
- Copy avoids fake claims, fake testimonials, fake user counts, `#1`, guaranteed exact compression promises, and unsupported privacy/security claims.
- Smoke test passes after implementation.

## What Not To Add

- Do not add AdSense, ad placeholders, or monetization blocks.
- Do not add fake testimonials, ratings, reviews, trust badges, or user counts.
- Do not claim exact 200KB output is guaranteed.
- Do not keyword-stuff repeated variants into headings.
- Do not create `/compress-image-to-200kb` or any new alternate URL in this step.
- Do not change the domain, canonical strategy, sitemap, robots, or Vercel routing.
- Do not add links to future pages until those pages exist.
- Do not add server-upload language unless the implementation changes.

## Implementation Notes For Later

- Update the route object for `/compress-image-under-200kb` in `tools/build-site.js`.
- Reuse the richer page-specific content model already used for `/compress-image-under-100kb` if possible.
- Prefer structured page data in the route object over hard-coded route checks if this pattern will be reused for future size-limit pages.
- Rebuild with the existing build command after implementation.
- Run the existing smoke test after rebuild.
