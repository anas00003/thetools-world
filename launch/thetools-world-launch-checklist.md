# TheTools.World Launch Checklist

## Repository

- Initialize or confirm Git repository.
- Review changed files.
- Commit the current launch-ready static site.
- Push to GitHub.

## Vercel Import

- Import the GitHub repository into Vercel.
- Build command: `npm.cmd run build`
- Output directory: project root
- Install command: default or none if Vercel detects no install need.
- Confirm deployment completes.

## Domain And DNS

- Add `thetools.world` in Vercel project domains.
- Add `www.thetools.world`.
- Configure DNS records exactly as Vercel provides.
- Wait for DNS propagation.
- Confirm SSL certificate is issued.
- Choose canonical host and verify www/non-www redirect behavior.

## Live Route Checks

- `https://thetools.world/`
- `https://thetools.world/image-compressor`
- `https://thetools.world/image-resizer`
- `https://thetools.world/image-converter`
- `https://thetools.world/bulk-image-tools`
- `https://thetools.world/sitemap.xml`
- `https://thetools.world/robots.txt`
- `.html` duplicates redirect to clean routes.
- Legacy pages redirect to clean destination routes.
- 404 page displays for missing routes.

## Legal And Trust Checks

- About page live.
- Contact page live and email correct.
- Privacy Policy live.
- Terms page live.
- Sitemap page live.
- Footer links work.

## Tool Functionality Checks

- Compress one JPG.
- Resize one image.
- Convert WebP to JPG if test file available.
- Convert PNG to JPG.
- Convert JPG to PNG.
- Test bulk image workflow.
- Check empty-file error states.

## Mobile Checks

- Homepage fits at 390px width.
- Navigation opens and closes.
- Upload controls are reachable.
- Result/download area remains visible.
- No text overlaps.

## Search Console

- Add Domain property for `thetools.world`.
- Verify DNS TXT.
- Submit `https://thetools.world/sitemap.xml`.
- Inspect homepage and top image-tool URLs.
- Request indexing only after routes and redirects are stable.

## Analytics

- Decide whether to add GA4, privacy-friendly analytics, or Clarity.
- Update Privacy Policy if analytics or heatmaps are added.
- Track page views and tool events only after policy copy matches reality.

## Post-Launch

- Check indexing status daily during the first week.
- Watch sitemap discovery.
- Review crawl/index errors.
- Review real Search Console queries before creating new pages.
