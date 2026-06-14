# TheTools.World

TheTools.World is a standalone static utility tools website for Vercel.

Tagline: Free online tools for images, files, text, and everyday tasks.

The first live category is browser-side image tools for compression, resizing, conversion, bulk processing, and upload preparation. More file, text, calculator, QR, AI, and developer utilities are planned, but they should not be published as indexable pages until real tools exist.

## Local Commands

```powershell
npm.cmd run build
npm.cmd run test:smoke
npm.cmd run dev
```

Open the local server URL printed by `npm.cmd run dev`.

## Deployment Notes

- Production domain: `https://thetools.world`
- Contact/privacy email: `pdfbuddy73@gmail.com`
- Update domain-level settings in `tools/build-site.js`, then run `npm.cmd run build`.
- No advertising code is installed.
- Vercel build command: `npm.cmd run build`
- Vercel output directory: project root
- Add `thetools.world` and `www.thetools.world` in Vercel project domains, then configure the DNS records shown by Vercel.
