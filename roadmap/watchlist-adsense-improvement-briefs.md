# AdSense Watchlist Improvement Briefs

Scope: planning only. Do not implement these page improvements in the current audit task.

## /convert-webp-to-jpg

Current status: Acceptable.

AdSense risk level: Low to medium. The page has a working converter purpose, unique title/meta/H1, a how-to section, related tools, and footer/legal links. It is lighter than the strongest compression pages.

Current gaps:

- Limited explanation of when JPG is better than WebP.
- No visible FAQ.
- Limited troubleshooting for transparency, quality loss, or upload compatibility.

Recommended title/meta changes: Not required now. Consider adding `| TheTools.World` to the title later for brand consistency if broader title cleanup is planned.

Content sections to improve:

- WebP vs JPG compatibility.
- What happens to transparency.
- Quality and file-size expectations.
- Troubleshooting failed uploads.

FAQ ideas:

- Will converting WebP to JPG keep transparency?
- Are files uploaded to a server?
- Why is the JPG larger than the WebP?

Internal links to add:

- Keep links to `/png-to-jpg`, `/jpg-to-png`, and `/image-converter`.
- Consider linking to `/image-compressor` when discussing file size after conversion.

Schema recommendation: Add WebApplication schema later only after the visible format guidance is expanded.

Acceptance criteria:

- Page has at least one format-specific guidance section.
- Page has accurate visible FAQ if FAQ schema is added.
- No fake claims or guaranteed results.

Priority: Medium.

## /jpg-to-png

Current status: Acceptable.

AdSense risk level: Low to medium. The page has a working converter purpose and useful support structure, but it is short.

Current gaps:

- Limited explanation of why PNG can become larger.
- No FAQ.
- No troubleshooting for transparency expectations or document workflows.

Recommended title/meta changes: Not required now.

Content sections to improve:

- JPG vs PNG differences.
- When PNG is useful.
- Why converting JPG to PNG does not restore transparency or lost quality.

FAQ ideas:

- Will JPG to PNG improve image quality?
- Will JPG to PNG create transparency?
- Are images processed in the browser?

Internal links to add:

- Keep links to `/convert-webp-to-jpg`, `/png-to-jpg`, and `/image-converter`.
- Consider `/image-resizer` for dimension workflows.

Schema recommendation: Add WebApplication schema later only after visible support content is expanded.

Acceptance criteria:

- Page explains realistic conversion outcomes.
- Page avoids implying PNG is always better.
- Visible content supports any future schema.

Priority: Medium.

## /png-to-jpg

Current status: Acceptable.

AdSense risk level: Low to medium. The page has useful intent and a working converter surface, but would benefit from more original guidance.

Current gaps:

- Limited explanation of transparency becoming white.
- No FAQ.
- Limited troubleshooting for file-size and image-background results.

Recommended title/meta changes: Not required now.

Content sections to improve:

- PNG vs JPG for photos, screenshots, and graphics.
- Transparency behavior.
- When to use compression after conversion.

FAQ ideas:

- What happens to transparent PNG areas?
- Is JPG smaller than PNG?
- Are images uploaded?

Internal links to add:

- Keep links to `/convert-webp-to-jpg`, `/jpg-to-png`, and `/image-converter`.
- Consider `/image-compressor` for users who need a smaller JPG.

Schema recommendation: Add WebApplication schema later only after visible support content is expanded.

Acceptance criteria:

- Page clearly explains transparency and quality tradeoffs.
- Page includes troubleshooting or limitations.
- No misleading download buttons or ad placeholders.

Priority: Medium.

## /contact

Current status: Acceptable.

AdSense risk level: Low. The page has a clear support purpose, contact email, and footer/legal links.

Current gaps:

- Very short page.
- Could better set expectations for response topics and privacy/security reports.

Recommended title/meta changes: Not required now.

Content sections to improve:

- What to include in a support request.
- Corrections and accessibility issues.
- Privacy and removal questions.
- Tool suggestions.

FAQ ideas:

- What information should I include when reporting a tool issue?
- Can I request a correction?
- Where should privacy questions be sent?

Internal links to add:

- Keep footer legal links.
- Consider visible links to `/privacy-policy`, `/terms`, and `/sitemap` in the body.

Schema recommendation: Do not add broad schema now. ContactPoint schema may be considered later if the contact workflow becomes more formal.

Acceptance criteria:

- Page remains honest and concise.
- No fake business claims.
- Contact route remains easy to find from header and footer.

Priority: Low.
