# Next 20 Page Queue

Current note: `/compress-image-to-50kb` is already present in the current local tree. If it is not deployed yet, deploy and verify it before building the next page. The next new implementation candidate is `/compress-jpg-to-20kb`.

| # | Proposed URL | Primary keyword | Secondary keywords | Intent | Type | Required behavior | Internal links | Priority | Decision |
| ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `/compress-image-to-50kb` | compress image to 50kb | compress image under 50kb, image compressor 50kb | Meet 50KB upload limit | Improve existing or deploy current implementation | Compressor target default 50KB | image compressor, image resizer, 20KB, 100KB, 200KB | High | Build now if not deployed |
| 2 | `/compress-jpg-to-20kb` | compress JPG to 20KB | JPG compressor 20KB, reduce JPG to 20KB | Strict JPG upload limit | New page | JPG-focused compressor target 20KB | image compressor, 20KB image, 50KB JPG, signature tools | High | Build now |
| 3 | `/compress-jpg-to-50kb` | compress JPG to 50KB | reduce JPG under 50KB, JPG compressor 50KB | Photo-friendly JPG limit | New page | JPG-focused compressor target 50KB | 50KB image, image resizer, 100KB JPG | High | Build now |
| 4 | `/compress-jpg-to-100kb` | compress JPG to 100KB | reduce JPG under 100KB | Common form limit | New page | JPG-focused compressor target 100KB | 100KB image, online form, JPG 50KB | High | Build now |
| 5 | `/compress-jpg-to-200kb` | compress JPG to 200KB | reduce JPG under 200KB | Higher-quality upload limit | New page | JPG-focused compressor target 200KB | 200KB image, JPG 100KB, resizer | High | Build now |
| 6 | `/compress-jpeg-to-50kb` | compress JPEG to 50KB | reduce JPEG size to 50KB | JPEG spelling variant | New page or canonical strategy | Same behavior as JPG 50KB with JPEG copy | JPG 50KB, image compressor | Medium | Build later |
| 7 | `/compress-signature-image-to-20kb` | compress signature image to 20KB | signature compressor, signature under 20KB | Signature upload limit | New page | Compressor target 20KB, readability warning | 20KB image, signature resize | High | Build now |
| 8 | `/resize-signature-to-140x60` | resize signature to 140x60 | signature resize 140 60 pixels | Exact signature dimensions | New page | Resizer default 140x60, aspect guidance | signature compressor, online form | High | Build now |
| 9 | `/resize-signature-to-200x100` | resize signature to 200x100 | signature 200x100 pixels | Signature dimension variant | New page | Resizer default 200x100 | signature 140x60, signature compressor | Medium | Build later |
| 10 | `/heic-to-jpg` | HEIC to JPG | convert HEIC to JPG online | Format compatibility | New page | Only publish with reliable HEIC support | image converter, JPG compression | High | Build later |
| 11 | `/webp-to-jpg` | WebP to JPG | convert WebP to JPG | Format compatibility | Improve or redirect strategy | Use existing converter behavior | image converter, compress JPG | High | Build now if route strategy is clear |
| 12 | `/jpg-to-webp` | JPG to WebP | convert JPG to WebP | Smaller web format | New page | Converter output WebP | image converter, image to WebP | Medium | Build later |
| 13 | `/image-to-webp` | image to WebP | convert image to WebP | Generic WebP conversion | New page | Converter output WebP | JPG to WebP, PNG to JPG | Medium | Build later |
| 14 | `/compress-photo-for-job-application` | compress photo for job application | job form photo size | Job upload preparation | New page | Compressor plus resize guidance | online form, 50KB, 100KB | High | Build now |
| 15 | `/compress-photo-for-admission-form` | compress photo for admission form | admission photo compressor | Admission upload preparation | New page | Compressor plus form checklist | online form, passport photo, 50KB | High | Build now |
| 16 | `/compress-image-for-government-form` | compress image for government form | government form image size | Public portal upload | Improve existing similar page | Align existing government form page with cluster | 100KB, 200KB, online form | Medium | Build later |
| 17 | `/resize-photo-for-online-form` | resize photo for online form | photo resizer for form | Form photo dimensions | New page or alias strategy | Resizer presets and guidance | resize image for online form, passport | Medium | Build later |
| 18 | `/passport-photo-size-guide` | passport photo size guide | passport photo dimensions | Reference plus tool path | New support page | Guide with links to resizer, no fake official advice | passport resizer, online form | Medium | Build later |
| 19 | `/compress-png-to-100kb` | compress PNG to 100KB | reduce PNG under 100KB | PNG size limit | New page | Explain PNG may remain large | image compressor, JPG converter | Medium | Build later |
| 20 | `/bulk-compress-images-to-100kb` | bulk compress images to 100KB | batch image compressor 100KB | Multi-file workflow | Improve existing bulk page or new page | Bulk target behavior required first | bulk tools, 100KB, 200KB | Low | Avoid until behavior exists |

## Queue rules

- Build only one public page per implementation prompt.
- Do not publish a page until the exact behavior exists.
- Prefer generator route data over hand-edited HTML.
- Add links to future pages only after the page is live.
- Keep exact-size pages honest: target size is a goal, not a guarantee.
