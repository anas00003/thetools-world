const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const domain = "https://thetools.world";
const brand = "TheTools.World";
const brandSlug = "thetoolsworld";
const year = "2026";
const contactEmail = "pdfbuddy73@gmail.com";
const tagline = "Free online tools for images, files, text, and everyday tasks.";
const gaMeasurementId = "G-63DE2LM99R";

const routes = [
  {
    route: "/",
    file: "index.html",
    title: "TheTools.World - Free Online Tools for Images and Everyday Tasks",
    description: "TheTools.World starts with free browser-side image tools for compression, resizing, conversion, and upload preparation, with more utilities planned.",
    h1: "Free online tools for images, files, text, and everyday tasks",
    kind: "home",
    faq: [
      {
        question: "Do these tools upload my images?",
        answer: "The core resize, compress, and convert tools use browser APIs for the selected image task. Keep the page open until your download is ready.",
      },
      {
        question: "Can every image meet a strict upload limit?",
        answer: "No. Very large or detailed images may need resizing before compression, and some limits are too strict for a clear result.",
      },
      {
        question: "Which tool should I start with?",
        answer: "Use the compressor for file-size limits, the resizer for pixel dimensions, the converter for format changes, and exact-size pages when a form gives a specific KB limit.",
      },
    ],
    priority: "1.0",
  },
  {
    route: "/image-compressor",
    file: "image-compressor.html",
    title: "Image Compressor Online - Reduce Image File Size",
    description: "Compress JPG, PNG, and WebP images in your browser with quality, width, privacy, upload-limit, and troubleshooting guidance.",
    h1: "Image compressor online",
    kind: "compressor",
    intro: "Reduce image file size before uploading, emailing, or adding photos to a website. Processing happens in your browser, so you can test quality and size settings before downloading a smaller copy.",
    toolNotes: [
      "Supported inputs: JPG, PNG, and WebP.",
      "Compression output is prepared as JPG for smaller photo-friendly files.",
      "Large images may need width reduction before quality changes are enough.",
      "Exact output size depends on the original image and settings.",
    ],
    guide: {
      title: "How to compress an image",
      steps: [
        "Choose a JPG, PNG, or WebP image from your device.",
        "Start with the default quality and max-width settings.",
        "Compress the image and check the downloaded file size.",
        "If the result is still too large, reduce max width or lower quality gradually.",
        "Open the downloaded image once to confirm it is clear enough for your use.",
      ],
      note: "For forms and portals, compare the final file with the official size, dimension, format, and readability rules before submitting.",
    },
    extraSections: [
      {
        title: "When to use the image compressor",
        body: `<p>Use this general compressor when you need a smaller image for email, a website, a profile upload, a document portal, or a form that gives a file-size limit but not a specific target page. It is a flexible starting point when you want to control both quality and maximum width.</p>`,
      },
      {
        title: "Quality and readability tradeoffs",
        body: `<p>Lower quality usually reduces file size, but it can soften faces, document text, signatures, and small details. Reducing width first often gives a cleaner result for very large phone photos because the image has fewer pixels to store before quality is lowered.</p><p>For text-heavy screenshots or forms, check readability after compression. If the upload portal allows a larger file, use the least aggressive settings that meet the rule.</p>`,
      },
      {
        title: "Troubleshooting compression results",
        body: `<ul>
        <li>If the file is still too large, reduce max width before dropping quality too far.</li>
        <li>If the image looks blurry, try a higher quality setting or a larger size limit.</li>
        <li>If the portal asks for an exact limit, use a target page such as <a href="/compress-image-to-50kb">compress image to 50KB</a> or <a href="/compress-image-under-100kb">compress image under 100KB</a>.</li>
        <li>If dimensions matter, resize first with the <a href="/image-resizer">image resizer</a>.</li>
      </ul>`,
      },
    ],
    faq: [
      {
        question: "Which image formats can I compress?",
        answer: "The browser tool supports JPG, PNG, and WebP inputs when your browser can read the selected file.",
      },
      {
        question: "Will every image become small enough?",
        answer: "Not always. Very large, detailed, or text-heavy images may need width reduction or a less strict upload limit.",
      },
      {
        question: "Are selected images uploaded to a server?",
        answer: "The current image compression workflow uses browser APIs for the selected image task. Keep the page open until the download is ready.",
      },
    ],
    relatedRoutes: ["/compress-image-to-50kb", "/compress-image-to-20kb", "/compress-image-under-100kb", "/compress-image-under-200kb", "/image-resizer", "/image-converter"],
    priority: "0.9",
  },
  {
    route: "/image-resizer",
    file: "image-resizer.html",
    title: "Image Resizer Online - Resize Photos by Pixel",
    description: "Resize images by width and height in your browser, keep aspect ratio, choose output format, and prepare photos for uploads.",
    h1: "Image resizer online",
    kind: "resizer",
    intro: "Resize photos for forms, profile images, website uploads, and document workflows without adding a server upload step. Use it when pixel dimensions matter as much as file size.",
    guide: {
      title: "How to resize an image",
      steps: [
        "Choose an image from your device.",
        "Enter the width and height required by your form, website, or document workflow.",
        "Keep aspect ratio enabled unless the destination explicitly requires exact stretching.",
        "Choose JPG, PNG, or WebP output based on the destination rules.",
        "Resize the image, download the result, and check the final dimensions.",
      ],
      note: "If the resized file is still too large, use the image compressor after resizing.",
    },
    extraSections: [
      {
        title: "When resizing matters",
        body: `<p>Many upload problems are caused by dimensions rather than file size alone. A portal may ask for a square profile photo, a maximum width, or a fixed pixel size. Resizing first can make later compression easier and can prevent unnecessary quality loss.</p>`,
      },
      {
        title: "Aspect ratio and output format",
        body: `<p>Keeping aspect ratio prevents faces, products, documents, and graphics from looking stretched. Turn it off only when the destination specifically asks for exact width and height and you understand the visual tradeoff.</p><p>JPG is usually practical for photos, PNG is useful for graphics or screenshots, and WebP can be useful for web workflows when accepted.</p>`,
      },
      {
        title: "Troubleshooting resize results",
        body: `<ul>
        <li>If the result looks stretched, keep aspect ratio enabled and crop elsewhere if needed.</li>
        <li>If the file is still too large, use <a href="/image-compressor">image compressor</a> after resizing.</li>
        <li>If an online form rejects the image, compare both dimensions and file size with the form instructions.</li>
        <li>For passport-style photos, use <a href="/passport-photo-resizer">passport photo resizer</a> first.</li>
      </ul>`,
      },
    ],
    faq: [
      {
        question: "Can I resize to exact pixels?",
        answer: "Yes. Enter the required width and height, then check the downloaded image against the destination rules.",
      },
      {
        question: "Should I keep aspect ratio on?",
        answer: "Usually yes. Keeping aspect ratio prevents distortion. Disable it only when exact stretched dimensions are required.",
      },
      {
        question: "Does resizing also reduce file size?",
        answer: "Often it does, especially for large photos, but use compression afterward if the file is still above the upload limit.",
      },
    ],
    relatedRoutes: ["/resize-image-for-online-form", "/passport-photo-resizer", "/image-compressor", "/compress-image-under-100kb", "/image-converter"],
    priority: "0.9",
  },
  {
    route: "/image-converter",
    file: "image-converter.html",
    title: "Image Converter Online - Convert JPG PNG WebP",
    description: "Convert images between JPG, PNG, and WebP in your browser with format guidance for photos, transparency, forms, and web uploads.",
    h1: "Image converter online",
    kind: "converter",
    intro: "Change image formats for compatibility, smaller file sizes, transparent images, and web publishing. The converter works with JPG, PNG, and WebP inputs supported by your browser and prepares the selected output locally in the page.",
    guide: {
      title: "How to convert an image format",
      steps: [
        "Choose a JPG, PNG, or WebP image from your device.",
        "Select the output format: JPG, PNG, or WebP.",
        "Convert the image in your browser.",
        "Download the converted copy and keep your original file unchanged.",
        "Open the result once before uploading it to a form, website, or document portal.",
      ],
      note: "Use the format requested by the receiving website or form. If no format is specified, choose based on the image type and file-size needs.",
    },
    extraSections: [
      {
        title: "What this image converter does",
        body: `<p>This page helps you create a new copy of an image in another common web format. It is useful when an upload form accepts only JPG, when a design workflow asks for PNG, or when a web project benefits from WebP.</p><p>The current tool supports JPG, PNG, and WebP where the browser can decode the source image and export the selected output format.</p>`,
      },
      {
        title: "When to use JPG, PNG, or WebP",
        body: `<ul>
        <li><strong>JPG</strong> is usually a good choice for photos, scanned images, and upload forms that need broad compatibility or smaller files.</li>
        <li><strong>PNG</strong> is useful for screenshots, graphics, text-heavy images, and workflows that require a PNG file.</li>
        <li><strong>WebP</strong> can be useful for web publishing when the destination supports it and smaller web image files matter.</li>
      </ul>`,
      },
      {
        title: "Quality, transparency, and upload notes",
        body: `<p>Converting format does not improve the original image quality. If a JPG is blurry before conversion, saving it as PNG will not recover detail that was already lost.</p><p>When saving to JPG, transparent areas are flattened because JPG does not support transparency. For logos or graphics that need transparency, use PNG or WebP when the destination accepts it.</p><p>For online forms, check both the file format and the size limit. If the converted image is too large, use the <a href="/image-compressor">image compressor</a> or an exact-size page such as <a href="/compress-image-under-100kb">compress image under 100KB</a>.</p>`,
      },
      {
        title: "Troubleshooting conversion results",
        body: `<ul>
        <li>If the file does not load, confirm it is a JPG, PNG, or WebP image rather than a PDF or document.</li>
        <li>If a portal rejects the result, compare the required format, file size, and dimensions with the downloaded file.</li>
        <li>If the image is too large after conversion, compress or resize it before uploading.</li>
        <li>If transparency matters, avoid JPG output and choose PNG or WebP when allowed.</li>
      </ul>`,
      },
    ],
    faq: [
      {
        question: "Which formats can I convert?",
        answer: "The browser tool supports JPG, PNG, and WebP images when your browser can read the selected file and export the chosen output format.",
      },
      {
        question: "Does converting an image improve quality?",
        answer: "No. Conversion creates a new file format, but it cannot restore detail or sharpness missing from the original image.",
      },
      {
        question: "Are selected images uploaded to a server?",
        answer: "The current image conversion workflow uses browser APIs for the selected image task. Keep the page open until the download is ready.",
      },
    ],
    relatedRoutes: ["/convert-webp-to-jpg", "/png-to-jpg", "/jpg-to-png", "/image-compressor", "/image-resizer"],
    priority: "0.9",
  },
  {
    route: "/bulk-image-tools",
    file: "bulk-image-tools.html",
    title: "Bulk Image Tools - Resize and Compress Multiple Images",
    description: "Process multiple images in one browser session with practical guidance for batches, upload prep, limits, and downloads.",
    h1: "Bulk image tools",
    kind: "bulk",
    intro: "Handle groups of photos with repeatable settings. Your files stay in your browser while downloads are prepared locally, which is useful when several images need the same approximate size or width.",
    guide: {
      title: "How to process multiple images",
      steps: [
        "Choose several images from your device.",
        "Set the max width and quality you want to apply to the batch.",
        "Prepare the downloads in the browser.",
        "Download each processed image and check the sizes before submitting them.",
        "Use single-image tools for files that need a strict individual target.",
      ],
      note: "Batch processing is best for repeatable settings. Use exact-size pages when each file must meet a specific upload limit.",
    },
    extraSections: [
      {
        title: "When bulk tools help",
        body: `<p>Bulk processing is useful for product photos, gallery images, class or event photos, website uploads, and repeated document workflows where every image can use similar settings. It saves time compared with processing each image separately.</p>`,
      },
      {
        title: "Batch limitations",
        body: `<p>Different images can respond differently to the same quality and width settings. A detailed photo may remain larger than a simple image, so check each downloaded file before uploading. For strict limits, process the difficult images again with a target page.</p>`,
      },
      {
        title: "Troubleshooting batch downloads",
        body: `<ul>
        <li>If one image is still too large, use <a href="/image-compressor">image compressor</a> or an exact-size page for that file.</li>
        <li>If a website needs exact dimensions, resize images first with <a href="/image-resizer">image resizer</a>.</li>
        <li>If format matters, use <a href="/image-converter">image converter</a> for the affected files.</li>
        <li>Keep originals until all uploads are accepted.</li>
      </ul>`,
      },
    ],
    faq: [
      {
        question: "Can I process many images at once?",
        answer: "Yes. The bulk tool applies repeatable settings to selected images in the browser, then prepares downloads.",
      },
      {
        question: "Will every batch image have the same file size?",
        answer: "No. File size varies by original dimensions, detail, and image content even when the same settings are used.",
      },
      {
        question: "When should I use a single-image tool instead?",
        answer: "Use a single-image compressor or resizer when one file must meet a strict size, dimension, or format requirement.",
      },
    ],
    relatedRoutes: ["/image-compressor", "/image-resizer", "/image-converter", "/compress-image-under-100kb"],
    priority: "0.8",
  },
  {
    route: "/compress-image-to-50kb",
    file: "compress-image-to-50kb.html",
    title: "Compress Image to 50KB Online | TheTools.World",
    description: "Compress JPG, PNG, or WebP images toward a 50KB limit for online forms, profile photos, document portals, small uploads, and email.",
    h1: "Compress image to 50KB online",
    displayTitle: "Compress image to 50KB",
    displayDescription: "Compress images toward a 50KB target for online forms, profile photos, document portals, and email.",
    kind: "compressor",
    targetKb: 50,
    intro: "Use this page when an online form, profile upload, document portal, small upload, or email attachment needs an image close to or under 50KB. Choose your image, keep the 50KB target, and adjust width or quality until the downloaded file fits your requirement.",
    heroNote: "Exact final size depends on the original image, dimensions, visual detail, format, and quality. The current image processing workflow uses browser APIs for the selected image task.",
    toolNotes: [
      "Supported inputs: JPG, PNG, and WebP.",
      "Downloads are prepared as JPG for smaller output.",
      "Exact 50KB output is not guaranteed.",
      "Very large photos may need resizing before compression.",
    ],
    guide: {
      title: "How to compress an image to 50KB",
      steps: [
        "Choose a JPG, PNG, or WebP image from your device.",
        "Keep the target size set to 50KB.",
        "Start with the default quality and max-width settings.",
        "Compress the image and check the final file size.",
        "If the result is still above 50KB, reduce max width or quality and try again.",
        "Check the final image for readability before uploading.",
      ],
      note: "For upload portals, compare the final image against the official file size, dimensions, format, and readability requirements before submitting.",
    },
    extraSections: [
      {
        title: "What this 50KB compressor is for",
        body: `<p>A 50KB image target can help with profile photos, form uploads, small portal images, email attachments, and document systems with strict upload limits. It is strict, but usually more photo-friendly than a 20KB target.</p><p>Large photos may still need resizing before compression. If your form allows a larger file, you may get better quality with <a href="/compress-image-under-100kb">compress image under 100KB</a> or <a href="/compress-image-under-200kb">compress image under 200KB</a>.</p>`,
      },
      {
        title: "How to get closer to 50KB",
        body: `<p>Resize very large photos before expecting a 50KB result. If the image comes from a phone or camera, reduce max width first, then lower quality gradually so the result does not become unnecessarily soft.</p><p>JPG usually works better for photos because it can create smaller outputs. PNG may be better for graphics, but can stay larger than JPG. Text-heavy images, forms, certificates, and signatures should be checked for readability after compression.</p>`,
      },
      {
        title: "What if the image is still above 50KB?",
        body: `<ul>
        <li>Reduce max width, for example from 1600px to 1200px, 1000px, 800px, or lower if the upload rules allow it.</li>
        <li>Lower quality step by step and compare the downloaded file size.</li>
        <li>Use the <a href="/image-resizer">image resizer</a> first if the original dimensions are very large.</li>
        <li>Use <a href="/compress-image-to-20kb">compress image to 20KB</a> only if the upload portal requires a very small file.</li>
        <li>Use <a href="/compress-image-under-100kb">compress image under 100KB</a> or <a href="/compress-image-under-200kb">compress image under 200KB</a> if the upload portal allows a larger file and quality matters.</li>
        <li>Check official upload rules before submitting because some forms also specify dimensions, format, or photo type.</li>
      </ul>`,
      },
      {
        title: "Common 50KB upload uses",
        body: `<p>A 50KB target is often useful for online application forms, profile photo uploads, document portals, small account images, email attachments, and school, job, service, or account forms. It can be a better fit for small photos where 20KB is too aggressive.</p><p>If your form also has pixel-dimension rules, use the <a href="/resize-image-for-online-form">resize image for online form</a> tool first. For passport-style photo dimensions, start with the <a href="/passport-photo-resizer">passport photo resizer</a>, then compress only if the official instructions allow it.</p>`,
      },
    ],
    faq: [
      {
        question: "Can every image be compressed to exactly 50KB?",
        answer: "No. Exact output depends on the original image, dimensions, detail, format, and quality. The tool helps you get close to or under 50KB when possible.",
      },
      {
        question: "What should I do if my image is still above 50KB?",
        answer: "Reduce max width, lower quality gradually, or resize the image first. Check the final downloaded file size.",
      },
      {
        question: "Is 50KB better than 20KB for photos?",
        answer: "Often yes. A 50KB target usually preserves more detail than 20KB, but you should follow the upload limit required by your form or portal.",
      },
      {
        question: "Can I use this for online forms?",
        answer: "Yes, it can help prepare image file size for forms, but you must compare the result with the official size, dimension, and format rules.",
      },
      {
        question: "Which formats are supported?",
        answer: "JPG, PNG, and WebP uploads are supported by the browser tool. Compressed downloads are prepared as JPG for smaller file sizes.",
      },
      {
        question: "Are images uploaded to a server?",
        answer: "The current image processing workflow uses browser APIs for the selected image task. Avoid closing the page until your download is ready.",
      },
    ],
    relatedRoutes: ["/image-compressor", "/image-resizer", "/compress-image-to-20kb", "/compress-image-under-100kb", "/compress-image-under-200kb", "/resize-image-for-online-form", "/passport-photo-resizer"],
    priority: "0.8",
  },
  {
    route: "/compress-image-under-100kb",
    file: "compress-image-under-100kb.html",
    title: "Compress Image to 100KB Online | TheTools.World",
    description: "Compress JPG, PNG, or WebP images toward a 100KB limit for forms, portals, documents, and email. Adjust quality and width in your browser.",
    h1: "Compress image to 100KB online",
    displayTitle: "Compress image under 100KB",
    displayDescription: "Use a browser-side compressor with a 100KB target for forms, portals, and document upload limits.",
    kind: "compressor",
    targetKb: 100,
    intro: "Use this page when a form, portal, document upload, or email attachment needs an image close to or under 100KB. Choose your image, keep the 100KB target, and adjust quality or width until the downloaded file fits your requirement.",
    heroNote: "Exact final size depends on the original image, dimensions, visual detail, format, and quality. This tool uses the browser workflow for the current image processing task.",
    toolNotes: [
      "Supported inputs: JPG, PNG, and WebP.",
      "Downloads are prepared as JPG for smaller output.",
      "Exact final size is not guaranteed.",
      "If the result is still above 100KB, reduce quality or max width and try again.",
    ],
    guide: {
      title: "How to compress an image to 100KB",
      steps: [
        "Choose a JPG, PNG, or WebP image.",
        "Keep the target size set to 100KB.",
        "Start with the default quality.",
        "Download the compressed image and check the final file size.",
        "If it is still above 100KB, reduce quality or max width and try again.",
      ],
      note: "For upload portals, compare the final image against the official file size, dimensions, and format requirements before submitting.",
    },
    extraSections: [
      {
        title: "How to get closer to the 100KB limit",
        body: `<p>Large phone photos often need width reduction before compression. Lowering quality reduces file size, but it can soften fine details. JPG is usually smaller for photos than PNG, while screenshots or graphics with text may need a balance between size and readability.</p>`,
      },
      {
        title: "What if the image is still above 100KB?",
        body: `<ul>
        <li>Reduce max width, for example from 1600px to 1200px or 1000px.</li>
        <li>Lower quality gradually and check the downloaded file after each try.</li>
        <li>Use the <a href="/image-resizer">image resizer</a> first if the original dimensions are very large.</li>
        <li>Use the <a href="/compress-image-to-50kb">compress image to 50KB</a> page if the upload portal needs a smaller file.</li>
        <li>Use the <a href="/compress-image-under-200kb">compress image under 200KB</a> page if the upload portal allows a higher limit.</li>
        <li>Always check the official upload rules before submitting.</li>
      </ul>`,
      },
      {
        title: "Common 100KB upload uses",
        body: `<p>A 100KB image limit is common for online application forms, document portals, profile photo uploads, email attachments, and school, job, service, or account forms. If your form also has width and height rules, use the <a href="/resize-image-for-online-form">resize image for online form</a> tool or the <a href="/passport-photo-resizer">passport photo resizer</a> before compressing.</p>`,
      },
    ],
    faq: [
      {
        question: "Can every image be compressed to exactly 100KB?",
        answer: "No. Exact size depends on the original image, dimensions, detail, and quality. The tool helps you get close to or under the limit when possible.",
      },
      {
        question: "Which image formats are supported?",
        answer: "JPG, PNG, and WebP uploads are supported by the browser tool. Compressed downloads are prepared as JPG for smaller file sizes.",
      },
      {
        question: "What should I do if my image is still bigger than 100KB?",
        answer: "Lower quality, reduce max width, or resize the image before compressing. Check the final file size before uploading.",
      },
      {
        question: "Is this suitable for online forms and document portals?",
        answer: "It can help prepare file size, but you should compare the result with the official portal size, dimension, and format rules.",
      },
      {
        question: "Are my images uploaded to a server?",
        answer: "The current image processing workflow uses browser APIs for the selected image task. Avoid closing the page until your download is ready.",
      },
    ],
    relatedRoutes: ["/compress-image-to-50kb", "/compress-image-to-20kb", "/compress-image-under-200kb", "/image-resizer", "/resize-image-for-online-form"],
    priority: "0.8",
  },
  {
    route: "/compress-image-under-200kb",
    file: "compress-image-under-200kb.html",
    title: "Compress Image to 200KB Online | TheTools.World",
    description: "Compress JPG, PNG, or WebP images toward a 200KB limit for forms, portals, documents, and email. Adjust quality and width in your browser.",
    h1: "Compress image to 200KB online",
    displayTitle: "Compress image under 200KB",
    displayDescription: "Compress photos toward a 200KB target for forms, portals, and document upload limits.",
    kind: "compressor",
    targetKb: 200,
    intro: "Use this page when an upload form, document portal, application, profile page, or email attachment needs an image close to or under 200KB. Choose your image, keep the 200KB target, and adjust quality or width until the downloaded file fits your requirement.",
    heroNote: "Exact final size depends on the original image, dimensions, visual detail, format, and quality. This tool uses the browser workflow for the current image processing task.",
    toolNotes: [
      "Supported inputs: JPG, PNG, and WebP.",
      "Downloads are prepared as JPG for smaller output.",
      "Exact final size is not guaranteed.",
      "If the result is still above 200KB, reduce quality or max width and try again.",
    ],
    guide: {
      title: "How to compress an image to 200KB",
      steps: [
        "Choose a JPG, PNG, or WebP image.",
        "Keep the target size set to 200KB.",
        "Start with the default quality.",
        "Download the compressed image and check the final file size.",
        "If it is still above 200KB, reduce quality or max width and try again.",
      ],
      note: "For upload portals, compare the final image against the official file size, dimensions, and format requirements before submitting.",
    },
    extraSections: [
      {
        title: "How to get closer to the 200KB limit",
        body: `<p>Large phone photos often need width reduction before compression. Lowering quality reduces file size, but it can soften fine details. JPG is usually smaller for photos than PNG, while screenshots, certificates, or graphics with text may need a higher quality setting for readability.</p><p>If a form has both file-size and pixel-dimension rules, use the <a href="/resize-image-for-online-form">resize image for online form</a> tool first, then compress the resized image toward 200KB.</p>`,
      },
      {
        title: "What if the image is still above 200KB?",
        body: `<ul>
        <li>Reduce max width, for example from 1600px to 1400px, 1200px, or 1000px.</li>
        <li>Lower quality gradually and check the downloaded file after each try.</li>
        <li>Use the <a href="/image-resizer">image resizer</a> first if the original dimensions are very large.</li>
        <li>Use the <a href="/compress-image-under-100kb">compress image under 100KB</a> or <a href="/compress-image-to-50kb">compress image to 50KB</a> page if the upload portal needs a smaller file.</li>
        <li>Always check the official upload rules before submitting because some forms also require a specific format or dimension.</li>
      </ul>`,
      },
      {
        title: "Common 200KB upload uses",
        body: `<p>A 200KB image limit is common for online application forms, document portals, profile photo uploads, email attachments, and school, job, service, or account forms. For photo-specific portal requirements, the <a href="/passport-photo-resizer">passport photo resizer</a> and <a href="/compress-photo-for-government-form">compress photo for government form</a> pages can help you prepare dimensions and file size together.</p>`,
      },
    ],
    faq: [
      {
        question: "Can every image be compressed to exactly 200KB?",
        answer: "No. Exact size depends on the original image, dimensions, detail, and quality. The tool helps you get close to or under the limit when possible.",
      },
      {
        question: "Which image formats are supported?",
        answer: "JPG, PNG, and WebP uploads are supported by the browser tool. Compressed downloads are prepared as JPG for smaller file sizes.",
      },
      {
        question: "What should I do if my image is still bigger than 200KB?",
        answer: "Lower quality, reduce max width, or resize the image before compressing. Check the final file size before uploading.",
      },
      {
        question: "Should I use 100KB or 200KB compression?",
        answer: "Use the limit required by the form or portal. If it says under 200KB, this page is the better starting point. If it says under 100KB, use the 100KB page.",
      },
      {
        question: "Is this suitable for online forms and document portals?",
        answer: "It can help prepare file size, but you should compare the result with the official portal size, dimension, and format rules.",
      },
      {
        question: "Are my images uploaded to a server?",
        answer: "The current image processing workflow uses browser APIs for the selected image task. Avoid closing the page until your download is ready.",
      },
    ],
    relatedRoutes: ["/compress-image-to-50kb", "/compress-image-to-20kb", "/compress-image-under-100kb", "/image-resizer", "/resize-image-for-online-form"],
    priority: "0.8",
  },
  {
    route: "/compress-image-to-20kb",
    file: "compress-image-to-20kb.html",
    title: "Compress Image to 20KB Online | TheTools.World",
    description: "Compress JPG, PNG, or WebP images toward a 20KB limit for strict forms, signatures, icons, profile uploads, and document portals.",
    h1: "Compress image to 20KB online",
    displayTitle: "Compress image to 20KB",
    displayDescription: "Compress images toward a strict 20KB target for signatures, icons, small forms, and document portals.",
    kind: "compressor",
    targetKb: 20,
    intro: "Use this page when a form, portal, signature upload, icon upload, profile image, or document system needs an image close to or under 20KB. Choose your image, keep the 20KB target, and reduce width or quality until the downloaded file fits your requirement.",
    heroNote: "20KB is a very small file size. Exact final size depends on the original image, dimensions, visual detail, format, and quality. This tool uses the browser workflow for the current image processing task.",
    toolNotes: [
      "Supported inputs: JPG, PNG, and WebP.",
      "Downloads are prepared as JPG for smaller output.",
      "Exact 20KB output is not guaranteed.",
      "Very large photos may need resizing before compression.",
    ],
    guide: {
      title: "How to compress an image to 20KB",
      steps: [
        "Choose a JPG, PNG, or WebP image.",
        "Keep the target size set to 20KB.",
        "Start with a smaller max width if the image is a large photo.",
        "Compress the image and check the final file size.",
        "If it is still above 20KB, reduce max width or quality and try again.",
        "Check readability before uploading, especially for signatures or text-heavy images.",
      ],
      note: "For strict upload portals, compare the final image against the official file size, dimensions, format, and readability requirements before submitting.",
    },
    extraSections: [
      {
        title: "What this 20KB compressor is for",
        body: `<p>This page is for strict upload limits where a small image needs to fit close to or under 20KB. It can help with signatures, icons, small profile images, school or job forms, service portals, and document systems that reject larger files.</p><p>If you need a general-purpose compressor with more visual quality, start with the <a href="/image-compressor">image compressor</a> or use the larger <a href="/compress-image-to-50kb">compress image to 50KB</a> or <a href="/compress-image-under-100kb">compress image under 100KB</a> page.</p>`,
      },
      {
        title: "How to get closer to the 20KB limit",
        body: `<p>Resize very large photos before expecting a 20KB result. Reduce max width aggressively for profile photos, icons, and small form images, then lower quality gradually instead of jumping straight to the lowest setting.</p><p>JPG usually works better for photos because it can produce smaller outputs. PNG may stay larger for detailed screenshots or transparent graphics, and signatures or text-heavy images need a readability check after compression.</p>`,
      },
      {
        title: "What if the image is still above 20KB?",
        body: `<ul>
        <li>Reduce max width, for example from 1600px to 1000px, 800px, 600px, or lower if the form allows it.</li>
        <li>Lower quality step by step and compare the downloaded file size.</li>
        <li>Use the <a href="/image-resizer">image resizer</a> first if the image dimensions are large.</li>
        <li>Use <a href="/compress-image-under-100kb">compress image under 100KB</a> or <a href="/compress-image-under-200kb">compress image under 200KB</a> if the upload portal allows a larger file.</li>
        <li>Check official upload rules before submitting because some forms also specify dimensions, format, or photo type.</li>
      </ul>`,
      },
      {
        title: "Common 20KB upload uses",
        body: `<p>A 20KB image limit is most useful for small form uploads, signature images, icons, small profile images, document portals with strict file-size rules, and school, job, service, or account forms. If your form also requires exact dimensions, use the <a href="/resize-image-for-online-form">resize image for online form</a> tool first. For passport-style photos, use the <a href="/passport-photo-resizer">passport photo resizer</a> and then compress only if the official instructions allow it.</p>`,
      },
    ],
    faq: [
      {
        question: "Can every image be compressed to exactly 20KB?",
        answer: "No. Exact output depends on the original dimensions, detail, format, and quality. The tool helps you get close to or under 20KB when possible.",
      },
      {
        question: "What should I do if my image is still above 20KB?",
        answer: "Reduce max width, lower quality gradually, or resize the image first. Check the final downloaded file size before uploading.",
      },
      {
        question: "Is 20KB good for photos?",
        answer: "It can work for small profile photos or form images, but large detailed photos may lose quality. Use the size limit required by the form.",
      },
      {
        question: "Can I use this for signatures or form uploads?",
        answer: "Yes, it can help prepare small signature or form images, but check readability and the official upload requirements before submitting.",
      },
      {
        question: "Which formats are supported?",
        answer: "JPG, PNG, and WebP uploads are supported by the browser tool. Compressed downloads are prepared as JPG for smaller file sizes.",
      },
      {
        question: "Are images uploaded to a server?",
        answer: "The current image processing workflow uses browser APIs for the selected image task. Avoid closing the page until your download is ready.",
      },
    ],
    relatedRoutes: ["/image-compressor", "/image-resizer", "/compress-image-to-50kb", "/compress-image-under-100kb", "/compress-image-under-200kb", "/resize-image-for-online-form", "/passport-photo-resizer"],
    priority: "0.8",
  },
  {
    route: "/compress-jpg-to-20kb",
    file: "compress-jpg-to-20kb.html",
    title: "Compress JPG to 20KB Online | TheTools.World",
    description: "Compress JPG or JPEG photos toward a 20KB limit for signatures, online forms, small profile uploads, job portals, admission forms, and documents.",
    h1: "Compress JPG to 20KB online",
    displayTitle: "Compress JPG to 20KB",
    displayDescription: "Compress JPG or JPEG photos toward a strict 20KB target for signatures, forms, and small uploads.",
    kind: "compressor",
    targetKb: 20,
    intro: "Use this page when a form, signature upload, job application, admission portal, exam portal, profile upload, or document workflow needs a JPG or JPEG close to or under 20KB. Choose your JPG, keep the 20KB target, and reduce max width or quality until the downloaded file fits your requirement.",
    heroNote: "20KB is a very small file size. Exact final size depends on the original JPG dimensions, visual detail, compression quality, and upload requirements. The current image processing workflow uses browser APIs for the selected image task.",
    toolNotes: [
      "Best for JPG and JPEG photos.",
      "Compressed downloads are prepared as JPG for smaller output.",
      "Exact 20KB output is not guaranteed.",
      "Large JPG photos may need resizing before compression.",
      "Check signatures and text-heavy images for readability before uploading.",
    ],
    guide: {
      title: "How to compress JPG to 20KB",
      steps: [
        "Choose a JPG or JPEG image from your device.",
        "Keep the target size set to 20KB.",
        "Start with a smaller max width if the JPG is a large phone or camera photo.",
        "Compress the image and check the final downloaded file size.",
        "If the result is still above 20KB, reduce max width or quality and try again.",
        "Check the downloaded JPG for readability before uploading, especially for signatures or document images.",
      ],
      note: "For strict upload portals, compare the downloaded JPG against the official file size, dimensions, format, and readability requirements before submitting.",
    },
    extraSections: [
      {
        title: "What this JPG 20KB compressor is for",
        body: `<p>This page is for JPG and JPEG photos that need a strict 20KB upload limit. It can help with signatures, small profile images, document portals, online forms, school or job applications, admission forms, exam portals, and account forms.</p><p>JPG usually compresses photos more efficiently than PNG, but 20KB may still be too strict for large or detailed photos. If a form accepts a larger file, you may get better quality with <a href="/compress-jpg-to-50kb">compress JPG to 50KB</a>, <a href="/compress-jpg-to-100kb">compress JPG to 100KB</a>, or <a href="/compress-jpg-to-200kb">compress JPG to 200KB</a>.</p>`,
      },
      {
        title: "How to get closer to 20KB",
        body: `<p>Resize large JPG photos before expecting a 20KB result. Reduce max width first for photos from phones or cameras, then lower quality gradually so the image does not become unnecessarily soft.</p><p>For signatures, keep enough contrast and check the final image after download. For document or text-heavy images, readability matters more than forcing the file smaller than the upload rule requires.</p>`,
      },
      {
        title: "What if the JPG is still above 20KB?",
        body: `<ul>
        <li>Reduce max width, for example from 1600px to 1000px, 800px, 600px, or lower if the upload rules allow it.</li>
        <li>Lower quality step by step and compare the downloaded file size.</li>
        <li>Use the <a href="/image-resizer">image resizer</a> first if the JPG dimensions are large.</li>
        <li>Use <a href="/compress-jpg-to-50kb">compress JPG to 50KB</a>, <a href="/compress-jpg-to-100kb">compress JPG to 100KB</a>, or <a href="/compress-jpg-to-200kb">compress JPG to 200KB</a> if the upload portal allows a larger JPG file and quality matters.</li>
        <li>Use <a href="/compress-image-to-20kb">compress image to 20KB</a> if your input is PNG, WebP, or a mixed image format.</li>
        <li>Check official upload rules before submitting because some forms also specify dimensions, format, background, or photo type.</li>
      </ul>`,
      },
      {
        title: "JPG vs PNG for strict compression",
        body: `<p>JPG is often better for photos because it can produce smaller files at acceptable visual quality. PNG can stay larger, especially for detailed screenshots, transparent graphics, or images with sharp text.</p><p>If your upload rule accepts JPG or JPEG, this page is the focused starting point. If your file is PNG or WebP, use the broader <a href="/image-compressor">image compressor</a> or the general <a href="/compress-image-to-20kb">compress image to 20KB</a> page.</p>`,
      },
      {
        title: "Common upload uses",
        body: `<p>A 20KB JPG target is common for signature uploads, small profile photos, online application forms, job application portals, admission or exam portals, school, service, or account forms, and document workflows that require JPG or JPEG. If your form also has pixel-dimension rules, use the <a href="/resize-image-for-online-form">resize image for online form</a> tool first. For passport-style dimensions, start with the <a href="/passport-photo-resizer">passport photo resizer</a>.</p>`,
      },
    ],
    faq: [
      {
        question: "Can every JPG be compressed to exactly 20KB?",
        answer: "No. Exact output depends on the original JPG dimensions, detail, quality, and compression limits. The tool helps you get close to or under 20KB when possible.",
      },
      {
        question: "Is JPG better than PNG for 20KB compression?",
        answer: "Often yes for photos. JPG usually creates smaller photo files than PNG, but text-heavy images and signatures still need readability checks.",
      },
      {
        question: "What should I do if my JPG is still above 20KB?",
        answer: "Reduce max width, lower quality gradually, or resize the JPG first. Check the final downloaded file size and readability.",
      },
      {
        question: "Can I use this for signatures or online forms?",
        answer: "Yes, it can help prepare JPG signatures, small profile images, or form uploads, but you must compare the result with official size, dimension, format, and readability rules.",
      },
      {
        question: "Are images uploaded to a server?",
        answer: "The current image processing workflow uses browser APIs for the selected image task. Avoid closing the page until your download is ready.",
      },
      {
        question: "Should I resize before compressing?",
        answer: "If the JPG is a large phone or camera photo, resizing first can make it easier to get close to 20KB while keeping the result usable.",
      },
    ],
    relatedRoutes: ["/compress-jpg-to-50kb", "/compress-jpg-to-100kb", "/compress-jpg-to-200kb", "/compress-image-to-20kb", "/image-compressor", "/image-resizer", "/resize-image-for-online-form", "/passport-photo-resizer"],
    priority: "0.8",
  },
  {
    route: "/compress-jpg-to-50kb",
    file: "compress-jpg-to-50kb.html",
    title: "Compress JPG to 50KB Online | TheTools.World",
    description: "Compress JPG or JPEG photos toward a 50KB limit for online forms, profile photos, document portals, small uploads, and email.",
    h1: "Compress JPG to 50KB online",
    displayTitle: "Compress JPG to 50KB",
    displayDescription: "Compress JPG or JPEG photos toward a 50KB target for forms, profile photos, portals, and email.",
    kind: "compressor",
    targetKb: 50,
    intro: "Use this page when an online form, profile upload, application portal, small document workflow, or email attachment needs a JPG or JPEG close to or under 50KB. Choose your JPG, keep the 50KB target, and adjust width or quality until the downloaded file fits your requirement.",
    heroNote: "50KB is more photo-friendly than 20KB, but it is still a strict upload target. Exact final size depends on the original JPG dimensions, visual detail, compression quality, and upload requirements. The current image processing workflow uses browser APIs for the selected image task.",
    toolNotes: [
      "Best for JPG and JPEG photo workflows.",
      "This page is written for JPG/JPEG workflows. For broader JPG, PNG, and WebP compression, use the general image compressor.",
      "Exact 50KB output is not guaranteed.",
      "Large phone photos may need resizing before compression.",
      "Check text, signatures, and document images for readability before submitting.",
    ],
    guide: {
      title: "How to compress JPG to 50KB",
      steps: [
        "Choose a JPG or JPEG image from your device.",
        "Keep the target size set to 50KB.",
        "Start with the default quality and max-width settings.",
        "Compress the JPG and check the final downloaded file size.",
        "If the result is still above 50KB, reduce max width or quality gradually and try again.",
        "Check the downloaded JPG for readability before uploading it to a form, portal, or email.",
      ],
      note: "For upload portals, compare the final JPG with the official file size, dimension, and format rules before submitting.",
    },
    extraSections: [
      {
        title: "What this JPG compressor is for",
        body: `<p>This page is for JPG and JPEG images that need a 50KB upload target. It can help with online forms, profile photos, application portals, document systems, small uploads, and email attachments where 20KB is too aggressive for photo quality.</p><p>If your file is not JPG/JPEG, use <a href="/compress-image-to-50kb">compress image to 50KB</a> for broader JPG, PNG, and WebP guidance. For a general workflow without a strict target, start with the <a href="/image-compressor">image compressor</a>.</p>`,
      },
      {
        title: "How to get closer to 50KB",
        body: `<p>Large phone photos usually need width reduction before compression can get close to 50KB. Reduce max width first, then lower quality gradually so faces, signatures, or document details do not become unnecessarily soft.</p><p>JPG is usually better than PNG for photo compression, but text-heavy images still need a readability check after download. If the portal allows a larger file, <a href="/compress-jpg-to-100kb">compress JPG to 100KB</a> or <a href="/compress-jpg-to-200kb">compress JPG to 200KB</a> can preserve more detail.</p>`,
      },
      {
        title: "What if the JPG is still above 50KB?",
        body: `<ul>
        <li>Reduce max width, for example from 1600px to 1200px, 1000px, 800px, or lower if the rules allow it.</li>
        <li>Lower quality step by step and compare the downloaded file size after each try.</li>
        <li>Use the <a href="/image-resizer">image resizer</a> first if the JPG dimensions are very large.</li>
        <li>Use <a href="/compress-jpg-to-20kb">compress JPG to 20KB</a> only if the upload portal needs a smaller JPG file.</li>
        <li>Use <a href="/compress-image-under-100kb">compress image under 100KB</a> or <a href="/compress-image-under-200kb">compress image under 200KB</a> if broader image-format guidance is more useful.</li>
        <li>Check official upload rules before submitting because some forms also specify dimensions, background, or accepted format.</li>
      </ul>`,
      },
      {
        title: "JPG vs PNG for this target",
        body: `<p>For photos, JPG usually reaches a 50KB target more easily than PNG because it can trade some detail for a smaller file. PNG may be better for sharp graphics, screenshots, or transparency, but it can stay larger than JPG at strict limits.</p><p>If your upload accepts PNG or WebP too, the general <a href="/compress-image-to-20kb">compress image to 20KB</a> and exact-size image pages can help with broader formats.</p>`,
      },
      {
        title: "Common upload uses",
        body: `<p>A 50KB JPG can be useful for online application forms, profile photo uploads, document portals, small account images, email attachments, and school, job, service, or account forms. If the form also has pixel rules, use <a href="/resize-image-for-online-form">resize image for online form</a> first. For passport-style dimensions, start with the <a href="/passport-photo-resizer">passport photo resizer</a>.</p>`,
      },
    ],
    faq: [
      {
        question: "Can every JPG be compressed to exactly 50KB?",
        answer: "No. Exact output depends on the original JPG dimensions, visual detail, quality, and compression limits. The tool helps you get close to or under 50KB when possible.",
      },
      {
        question: "Is 50KB better than 20KB for photos?",
        answer: "Often yes. A 50KB target usually preserves more photo detail than 20KB, but you should follow the upload limit required by your form or portal.",
      },
      {
        question: "What should I do if my JPG is still above 50KB?",
        answer: "Reduce max width, lower quality gradually, or resize the JPG first. Check the final downloaded file size before uploading.",
      },
      {
        question: "Can I use this for online forms?",
        answer: "Yes, it can help prepare JPG file size for forms, but you must compare the result with the official size, dimension, and format rules.",
      },
      {
        question: "Are images uploaded to a server?",
        answer: "The current image processing workflow uses browser APIs for the selected image task. Avoid closing the page until your download is ready.",
      },
      {
        question: "Should I resize before compressing?",
        answer: "If the JPG is a large phone or camera photo, resizing first can make it easier to get close to 50KB while keeping the result usable.",
      },
    ],
    relatedRoutes: ["/compress-jpg-to-20kb", "/compress-jpg-to-100kb", "/compress-jpg-to-200kb", "/compress-image-to-50kb", "/image-compressor", "/image-resizer", "/resize-image-for-online-form", "/passport-photo-resizer"],
    priority: "0.8",
  },
  {
    route: "/compress-jpg-to-100kb",
    file: "compress-jpg-to-100kb.html",
    title: "Compress JPG to 100KB Online | TheTools.World",
    description: "Compress JPG or JPEG photos toward a 100KB limit for forms, portals, documents, profile uploads, and email attachments.",
    h1: "Compress JPG to 100KB online",
    displayTitle: "Compress JPG to 100KB",
    displayDescription: "Compress JPG or JPEG photos toward a common 100KB target for portals, forms, and documents.",
    kind: "compressor",
    targetKb: 100,
    intro: "Use this page when an upload portal, application form, document submission, school or job form, profile upload, or email attachment needs a JPG or JPEG close to or under 100KB. The 100KB target is often a practical balance between file size and visual detail.",
    heroNote: "Exact 100KB output is not guaranteed. Final size depends on the original JPG dimensions, detail, quality, and the browser compression result. The current image processing workflow uses browser APIs for the selected image task.",
    toolNotes: [
      "Best for JPG and JPEG photo workflows.",
      "This page is written for JPG/JPEG workflows. For broader JPG, PNG, and WebP compression, use the general image compressor.",
      "Exact 100KB output is not guaranteed.",
      "For very large photos, reduce max width before lowering quality too much.",
      "Check the final file against the portal's size, dimension, and format rules.",
    ],
    guide: {
      title: "How to compress JPG to 100KB",
      steps: [
        "Choose a JPG or JPEG image from your device.",
        "Keep the target size set to 100KB.",
        "Start by reducing max width if the photo came from a phone or camera.",
        "Compress the JPG and check the final downloaded file size.",
        "If it is still above 100KB, reduce quality gradually or lower max width and try again.",
        "Compare the final JPG with the official upload rules before submitting.",
      ],
      note: "A 100KB target usually keeps more detail than 20KB or 50KB, but official portal requirements should decide the final size.",
    },
    extraSections: [
      {
        title: "What this JPG compressor is for",
        body: `<p>This page is for JPG and JPEG files that need a common 100KB upload limit. It can help with application forms, document portals, resumes, profile photo requirements, school forms, job portals, and email attachments.</p><p>If your file is PNG or WebP, use the broader <a href="/compress-image-under-100kb">compress image under 100KB</a> page. For general compression without a fixed target, use the <a href="/image-compressor">image compressor</a>.</p>`,
      },
      {
        title: "How to get closer to 100KB",
        body: `<p>For very large photos, reduce max width before lowering quality too much. This keeps the file smaller while often preserving a clearer face, document, or profile image than heavy quality reduction alone.</p><p>If 100KB is still too large for the portal, use <a href="/compress-jpg-to-50kb">compress JPG to 50KB</a> or <a href="/compress-jpg-to-20kb">compress JPG to 20KB</a>. If quality matters and the portal allows it, <a href="/compress-jpg-to-200kb">compress JPG to 200KB</a> may be a better fit.</p>`,
      },
      {
        title: "What if the JPG is still above 100KB?",
        body: `<ul>
        <li>Reduce max width from a very large source image before dropping quality too far.</li>
        <li>Lower quality gradually and compare the downloaded size and clarity.</li>
        <li>Use the <a href="/image-resizer">image resizer</a> first if the image has large pixel dimensions.</li>
        <li>Use <a href="/compress-image-to-50kb">compress image to 50KB</a> or <a href="/compress-image-to-20kb">compress image to 20KB</a> if the portal needs a much smaller file.</li>
        <li>Use <a href="/compress-image-under-200kb">compress image under 200KB</a> if the portal allows a larger image and broader format guidance is helpful.</li>
        <li>Compare the final file with the official size, dimension, and format rules before submitting.</li>
      </ul>`,
      },
      {
        title: "JPG vs PNG for this target",
        body: `<p>JPG is usually a better choice for photos at 100KB because it can preserve recognizable detail while still reducing file size. PNG may be clearer for screenshots or graphics, but it can remain larger than JPG for photographic images.</p><p>For PNG, WebP, or mixed input workflows, use the general exact-size image pages rather than relying on this JPG-focused page alone.</p>`,
      },
      {
        title: "Common upload uses",
        body: `<p>A 100KB JPG target is common for forms, portals, documents, profile uploads, resumes, school or job applications, and email attachments. If your portal also specifies width and height, use <a href="/resize-image-for-online-form">resize image for online form</a> before compressing. For passport-style photo dimensions, use the <a href="/passport-photo-resizer">passport photo resizer</a>.</p>`,
      },
    ],
    faq: [
      {
        question: "Can every JPG be compressed to exactly 100KB?",
        answer: "No. Exact output depends on the original JPG dimensions, detail, quality, and compression limits. The tool helps you get close to or under 100KB when possible.",
      },
      {
        question: "Is 100KB enough for a clear photo?",
        answer: "Often yes for many upload workflows. A 100KB target usually keeps more detail than 20KB or 50KB, but very large or detailed photos may still need resizing.",
      },
      {
        question: "What should I do if my JPG is still above 100KB?",
        answer: "Reduce max width, lower quality gradually, or resize the JPG first. Check the final downloaded file size before uploading.",
      },
      {
        question: "Should I reduce width or quality first?",
        answer: "For very large photos, reduce width first. Then lower quality gradually so the image does not become softer than necessary.",
      },
      {
        question: "Can I use this for forms and document portals?",
        answer: "Yes, it can help prepare JPG file size for forms and document portals, but you must compare the result with the official size, dimension, and format rules.",
      },
      {
        question: "Are images uploaded to a server?",
        answer: "The current image processing workflow uses browser APIs for the selected image task. Avoid closing the page until your download is ready.",
      },
    ],
    relatedRoutes: ["/compress-jpg-to-50kb", "/compress-jpg-to-200kb", "/compress-jpg-to-20kb", "/compress-image-under-100kb", "/image-compressor", "/image-resizer", "/resize-image-for-online-form", "/passport-photo-resizer"],
    priority: "0.8",
  },
  {
    route: "/compress-jpg-to-200kb",
    file: "compress-jpg-to-200kb.html",
    title: "Compress JPG to 200KB Online | TheTools.World",
    description: "Compress JPG or JPEG photos toward a 200KB limit for forms, portals, documents, profile photos, and email attachments.",
    h1: "Compress JPG to 200KB online",
    displayTitle: "Compress JPG to 200KB",
    displayDescription: "Compress JPG or JPEG photos toward a quality-friendly 200KB target for forms, portals, and email.",
    kind: "compressor",
    targetKb: 200,
    intro: "Use this page when a form, portal, profile upload, email attachment, or document submission allows a JPG or JPEG close to or under 200KB and better visual quality matters. This target is less strict than 20KB, 50KB, or 100KB.",
    heroNote: "Exact 200KB output is not guaranteed. Final size depends on the original JPG dimensions, visual detail, quality, and browser compression result. The current image processing workflow uses browser APIs for the selected image task.",
    toolNotes: [
      "Best for JPG and JPEG photo workflows.",
      "This page is written for JPG/JPEG workflows. For broader JPG, PNG, and WebP compression, use the general image compressor.",
      "Exact 200KB output is not guaranteed.",
      "Start with width reduction only if the original photo is very large.",
      "Use smaller target pages only when the portal requires a smaller file.",
    ],
    guide: {
      title: "How to compress JPG to 200KB",
      steps: [
        "Choose a JPG or JPEG image from your device.",
        "Keep the target size set to 200KB.",
        "Use the default quality first if the original photo is not extremely large.",
        "Compress the JPG and check the final downloaded file size.",
        "If it is still above 200KB, reduce max width or lower quality gradually and try again.",
        "Check the image clarity and compare it with the official upload rules before submitting.",
      ],
      note: "A 200KB target is useful when the portal allows a higher file limit and you want to preserve more photo detail.",
    },
    extraSections: [
      {
        title: "What this JPG compressor is for",
        body: `<p>This page is for JPG and JPEG files where the upload limit is around 200KB and better visual quality is preferred. It can help with online forms, portals, profile photos, email attachments, and document submissions where the limit is less strict.</p><p>If your file is PNG or WebP, use the broader <a href="/compress-image-under-200kb">compress image under 200KB</a> page. For general image compression, use the <a href="/image-compressor">image compressor</a>.</p>`,
      },
      {
        title: "How to get closer to 200KB",
        body: `<p>Because 200KB is more quality-friendly, you may not need aggressive settings. Start with width reduction only if the original photo is very large, then lower quality gradually if the downloaded file is still above the limit.</p><p>Use <a href="/compress-jpg-to-100kb">compress JPG to 100KB</a>, <a href="/compress-jpg-to-50kb">compress JPG to 50KB</a>, or <a href="/compress-jpg-to-20kb">compress JPG to 20KB</a> only when the portal requires a smaller JPG file.</p>`,
      },
      {
        title: "What if the JPG is still above 200KB?",
        body: `<ul>
        <li>Reduce max width if the original photo is from a phone or camera and has large dimensions.</li>
        <li>Lower quality gradually while checking whether the photo still looks clear enough.</li>
        <li>Use the <a href="/image-resizer">image resizer</a> first if the portal also sets pixel dimensions.</li>
        <li>Use <a href="/compress-image-under-100kb">compress image under 100KB</a>, <a href="/compress-image-to-50kb">compress image to 50KB</a>, or <a href="/compress-image-to-20kb">compress image to 20KB</a> only when a smaller upload limit is required.</li>
        <li>Always compare the final file with the portal's size, dimension, and format instructions before submitting.</li>
      </ul>`,
      },
      {
        title: "JPG vs PNG for this target",
        body: `<p>JPG is usually the better format for photos at 200KB because it can keep a reasonable balance between file size and detail. PNG may be better for sharp graphics or screenshots, but it can produce larger files for photographic images.</p><p>If the portal accepts multiple image formats, choose the format that matches its instructions and keeps the image readable.</p>`,
      },
      {
        title: "Common upload uses",
        body: `<p>A 200KB JPG target can work well for online forms, document portals, profile photos, email attachments, school or job applications, and account uploads where quality matters. If the form also requires exact dimensions, use <a href="/resize-image-for-online-form">resize image for online form</a>. For passport-style dimensions, use the <a href="/passport-photo-resizer">passport photo resizer</a>.</p>`,
      },
    ],
    faq: [
      {
        question: "Can every JPG be compressed to exactly 200KB?",
        answer: "No. Exact output depends on the original JPG dimensions, detail, quality, and compression limits. The tool helps you get close to or under 200KB when possible.",
      },
      {
        question: "When should I choose 200KB instead of 100KB?",
        answer: "Choose 200KB when the portal allows a higher file limit and you want to preserve more photo detail. Use 100KB only when the upload rule requires a smaller file.",
      },
      {
        question: "What should I do if my JPG is still above 200KB?",
        answer: "Reduce max width, lower quality gradually, or resize the JPG first. Check the final downloaded file size before uploading.",
      },
      {
        question: "Is 200KB better for photo quality?",
        answer: "Usually yes. A 200KB target is less strict than 20KB, 50KB, or 100KB and often preserves more visible detail.",
      },
      {
        question: "Can I use this for online forms and emails?",
        answer: "Yes, it can help prepare JPG files for forms, portals, and email attachments, but you must compare the result with the official size, dimension, and format rules.",
      },
      {
        question: "Are images uploaded to a server?",
        answer: "The current image processing workflow uses browser APIs for the selected image task. Avoid closing the page until your download is ready.",
      },
    ],
    relatedRoutes: ["/compress-jpg-to-100kb", "/compress-jpg-to-50kb", "/compress-jpg-to-20kb", "/compress-image-under-200kb", "/image-compressor", "/image-resizer", "/resize-image-for-online-form", "/passport-photo-resizer"],
    priority: "0.8",
  },
  {
    route: "/resize-image-for-online-form",
    file: "resize-image-for-online-form.html",
    title: "Resize Image for Online Form Uploads",
    description: "Resize photos for online forms, application portals, profile uploads, and document systems using browser-side pixel settings.",
    h1: "Resize image for online form",
    kind: "resizer",
    preset: "form",
    intro: "Set width and height requirements before uploading to a form. This helps when a portal asks for dimensions such as a square profile photo, a maximum width, or a specific pixel size.",
    guide: {
      title: "How to resize an image for an online form",
      steps: [
        "Read the form instructions for width, height, format, and file size.",
        "Choose your image from your device.",
        "Enter the requested pixel width and height.",
        "Keep aspect ratio enabled unless the form requires exact dimensions.",
        "Download the resized image and compare it with the form rules before uploading.",
      ],
      note: "If the form also has a file-size limit, compress the resized image afterward.",
    },
    extraSections: [
      {
        title: "What problem this solves",
        body: `<p>Online forms often reject images because the dimensions are too large, too small, or not shaped correctly. This page helps prepare a copy with the pixel size requested by the form while keeping your original file unchanged.</p>`,
      },
      {
        title: "Common form situations",
        body: `<p>Use this tool for profile photos, application images, school portals, job forms, account images, document portals, and service forms that mention width and height. It does not verify official rules automatically, so the form instructions should always be the final source.</p>`,
      },
      {
        title: "Quality and privacy notes",
        body: `<p>Very small dimensions can make faces, signatures, or document text hard to read. Check the downloaded image before uploading. The current resizing workflow uses browser APIs for the selected image task.</p>`,
      },
      {
        title: "Troubleshooting form upload issues",
        body: `<ul>
        <li>If the portal rejects the file, check dimensions, file size, and format separately.</li>
        <li>If the resized image is still too large, use <a href="/image-compressor">image compressor</a>.</li>
        <li>If a strict file limit is listed, try <a href="/compress-image-to-50kb">compress image to 50KB</a> or <a href="/compress-image-under-100kb">compress image under 100KB</a>.</li>
        <li>If the photo is passport-style, use <a href="/passport-photo-resizer">passport photo resizer</a> for a square starting point.</li>
      </ul>`,
      },
    ],
    faq: [
      {
        question: "Can this match every online form requirement?",
        answer: "No. It helps prepare dimensions, but you must compare the downloaded file with the form's current size, format, and quality rules.",
      },
      {
        question: "Should I resize or compress first?",
        answer: "Resize first when the form gives pixel dimensions. Compress afterward if the resized image is still too large.",
      },
      {
        question: "Are images uploaded to a server?",
        answer: "The current resizing workflow uses browser APIs for the selected image task. Keep the page open until the download is ready.",
      },
    ],
    relatedRoutes: ["/image-resizer", "/image-compressor", "/passport-photo-resizer", "/compress-image-to-50kb", "/compress-image-under-100kb"],
    priority: "0.8",
  },
  {
    route: "/compress-photo-for-government-form",
    file: "compress-photo-for-government-form.html",
    title: "Compress Photo for Government Form Uploads",
    description: "Prepare photos for government and public-service form uploads with careful browser-side compression, resizing, and checking guidance.",
    h1: "Compress photo for government form",
    kind: "compressor",
    targetKb: 200,
    intro: "Government and public-service portals often use strict photo size and dimension limits. This page helps prepare a smaller photo copy, but the official portal instructions should always decide the final requirements.",
    heroNote: "This tool helps prepare images; it does not guarantee acceptance by any government, passport, visa, license, exam, school, or service portal.",
    toolNotes: [
      "Supported inputs: JPG, PNG, and WebP.",
      "Downloads are prepared as JPG for smaller output.",
      "Exact output size is not guaranteed.",
      "Check official file size, dimensions, background, and format rules before submitting.",
    ],
    guide: {
      title: "How to compress a photo for a government form",
      steps: [
        "Read the portal's photo instructions before changing the image.",
        "Choose your photo from your device.",
        "Resize first if the portal lists pixel dimensions or maximum width.",
        "Compress the photo and check the final file size.",
        "Open the downloaded file and confirm the face, text, or document details are still readable.",
        "Compare the result with the official portal rules before uploading.",
      ],
      note: "If a portal asks for a smaller size than 200KB, use a stricter exact-size page only after checking readability.",
    },
    extraSections: [
      {
        title: "What this page helps with",
        body: `<p>This page is for users preparing photos for portals that mention file-size limits, upload size, image format, or dimensions. It can help with application-style uploads, public-service forms, education portals, job portals, and account photo workflows.</p>`,
      },
      {
        title: "Readability and official rules",
        body: `<p>Government and public-service forms can reject photos for reasons beyond file size, including background, crop, face position, shadows, format, or dimensions. Compression can reduce size, but it cannot confirm those official visual rules.</p><p>Use the least aggressive compression that meets the portal's limit so the photo remains clear.</p>`,
      },
      {
        title: "Troubleshooting government form uploads",
        body: `<ul>
        <li>If the file is too large, reduce width first, then lower quality gradually.</li>
        <li>If the portal lists exact dimensions, use <a href="/resize-image-for-online-form">resize image for online form</a> before compressing.</li>
        <li>If the portal asks for a passport-style square image, start with <a href="/passport-photo-resizer">passport photo resizer</a>.</li>
        <li>If the portal requires a smaller limit, try <a href="/compress-image-under-100kb">compress image under 100KB</a> or <a href="/compress-image-to-50kb">compress image to 50KB</a>.</li>
      </ul>`,
      },
    ],
    faq: [
      {
        question: "Does this guarantee a government form will accept my photo?",
        answer: "No. It helps prepare file size and dimensions, but official acceptance depends on the portal's current rules and visual requirements.",
      },
      {
        question: "What should I check before uploading?",
        answer: "Check file size, dimensions, format, background, crop, face clarity, text readability where relevant, and any official portal instructions.",
      },
      {
        question: "Are selected photos uploaded to a server?",
        answer: "The current compression workflow uses browser APIs for the selected image task. Keep the page open until the download is ready.",
      },
    ],
    relatedRoutes: ["/resize-image-for-online-form", "/passport-photo-resizer", "/image-compressor", "/compress-image-under-100kb", "/compress-image-to-50kb"],
    priority: "0.8",
  },
  {
    route: "/convert-webp-to-jpg",
    file: "convert-webp-to-jpg.html",
    title: "Convert WebP to JPG Online",
    description: "Convert WebP images to JPG in your browser for forms, apps, documents, and websites that need a compatible JPG file.",
    h1: "Convert WebP to JPG",
    kind: "converter",
    output: "image/jpeg",
    intro: "Use JPG when you need broad compatibility and do not need transparency in the final image. This page is focused on WebP files that must be accepted by older apps, online forms, or document workflows.",
    guide: {
      title: "How to convert WebP to JPG",
      steps: [
        "Choose a WebP image from your device.",
        "Keep JPG selected as the output format.",
        "Convert the image in your browser.",
        "Download the JPG copy.",
        "Check the result before uploading it to the app, portal, or form that rejected WebP.",
      ],
      note: "If the destination has a file-size limit, check the downloaded JPG size before submitting it.",
    },
    extraSections: [
      {
        title: "Why convert WebP to JPG",
        body: `<p>WebP is common on modern websites, but some document portals, email workflows, editing apps, and older upload forms still ask for JPG or JPEG. Converting to JPG gives you a more widely accepted copy while leaving the original WebP file unchanged.</p>`,
      },
      {
        title: "Compatibility and form-upload uses",
        body: `<p>This tool can help when an online form rejects a WebP file, when a document system asks for JPG, or when you need to attach an image in a format a recipient can open easily. It is also useful for profile images, application forms, school portals, service portals, and basic image-sharing workflows.</p>`,
      },
      {
        title: "Quality and transparency notes",
        body: `<p>JPG is designed for photos and broad compatibility. It does not support transparency, so transparent WebP areas may become a solid background in the JPG result. For graphics that must keep transparency, use PNG or WebP if the destination accepts it.</p><p>JPG output can also be larger than the original WebP. If the JPG is too large for a portal, use the <a href="/image-compressor">image compressor</a>, <a href="/compress-image-to-50kb">compress image to 50KB</a>, or <a href="/compress-image-under-100kb">compress image under 100KB</a>.</p>`,
      },
      {
        title: "Troubleshooting WebP to JPG conversion",
        body: `<ul>
        <li>If the file does not open, confirm it is a valid WebP image.</li>
        <li>If the JPG is too large, compress or resize the result before uploading.</li>
        <li>If the background changed, the original WebP may have used transparency that JPG cannot keep.</li>
        <li>If a form still rejects the file, check whether it also requires specific dimensions or a smaller file size.</li>
      </ul>`,
      },
    ],
    faq: [
      {
        question: "Why would a website reject a WebP image?",
        answer: "Some older apps, forms, and document portals accept only JPG, JPEG, or PNG files even though WebP is common on the web.",
      },
      {
        question: "Will transparent WebP areas stay transparent in JPG?",
        answer: "No. JPG does not support transparency, so transparent areas may be flattened to a solid background.",
      },
      {
        question: "What should I do if the JPG is too large?",
        answer: "Compress the JPG, reduce image dimensions, or use an exact-size compression page when the upload portal has a strict file-size limit.",
      },
    ],
    relatedRoutes: ["/image-converter", "/jpg-to-png", "/png-to-jpg", "/image-compressor"],
    priority: "0.8",
  },
  {
    route: "/png-to-jpg",
    file: "png-to-jpg.html",
    title: "PNG to JPG Converter Online",
    description: "Convert PNG images to JPG for photos, online forms, document portals, email, and smaller compatible image files.",
    h1: "PNG to JPG converter",
    kind: "converter",
    output: "image/jpeg",
    intro: "JPG is often smaller than PNG for photos and is accepted by many upload portals. Transparent PNG areas will be filled with a solid background because JPG does not support transparency.",
    guide: {
      title: "How to convert PNG to JPG",
      steps: [
        "Choose a PNG image from your device.",
        "Keep JPG selected as the output format.",
        "Convert the image in the browser.",
        "Download the JPG copy.",
        "Check the background, readability, dimensions, and file size before uploading.",
      ],
      note: "For forms with strict file-size limits, compress the JPG result if it is still too large.",
    },
    extraSections: [
      {
        title: "Why convert PNG to JPG",
        body: `<p>PNG is useful for screenshots, graphics, and transparency, but it can be larger than needed for photo-style images. JPG is often a better fit for profile photos, scanned images, email attachments, and portals that only accept JPG or JPEG.</p>`,
      },
      {
        title: "When JPG is better",
        body: `<p>Use JPG when the image is mostly photographic, when broad compatibility matters, or when a form requires JPG. JPG compression can reduce file size compared with PNG, especially for camera photos or scanned photo-style images.</p>`,
      },
      {
        title: "Transparency and quality warnings",
        body: `<p>If your PNG has transparent areas, the JPG result cannot keep that transparency. Those areas may become a solid background. If transparency is required for a logo, sticker, or design asset, keep PNG or use another accepted transparent format.</p><p>Converting to JPG can also introduce compression. Check text-heavy screenshots and small details before submitting the result.</p>`,
      },
      {
        title: "Troubleshooting PNG to JPG results",
        body: `<ul>
        <li>If the JPG looks too large, use the <a href="/image-compressor">image compressor</a> or resize the image first.</li>
        <li>If the background changed, the source PNG likely included transparency.</li>
        <li>If text looks soft, try using PNG when the destination allows it.</li>
        <li>If a portal rejects the result, check whether it has separate size, dimension, or color-background rules.</li>
      </ul>`,
      },
    ],
    faq: [
      {
        question: "Does PNG to JPG make every file smaller?",
        answer: "Not always, but JPG is often smaller for photos and scanned photo-style images. Results depend on the original image.",
      },
      {
        question: "What happens to transparent PNG backgrounds?",
        answer: "JPG does not support transparency, so transparent areas may become a solid background in the converted file.",
      },
      {
        question: "Can I use the JPG for online forms?",
        answer: "Yes, if the form accepts JPG. Check the final file size, dimensions, and image readability before submitting.",
      },
    ],
    relatedRoutes: ["/image-converter", "/convert-webp-to-jpg", "/jpg-to-png", "/image-compressor"],
    priority: "0.8",
  },
  {
    route: "/jpg-to-png",
    file: "jpg-to-png.html",
    title: "JPG to PNG Converter Online",
    description: "Convert JPG images to PNG in your browser for apps, screenshots, document workflows, and upload portals that request PNG.",
    h1: "JPG to PNG converter",
    kind: "converter",
    output: "image/png",
    intro: "PNG is useful for screenshots, graphics, and workflows that specifically request PNG files. Converting a JPG to PNG creates a PNG copy, but it does not restore quality already lost in the JPG.",
    guide: {
      title: "How to convert JPG to PNG",
      steps: [
        "Choose a JPG or JPEG image from your device.",
        "Keep PNG selected as the output format.",
        "Convert the image in your browser.",
        "Download the PNG copy.",
        "Check the result before using it in a form, document, or design workflow.",
      ],
      note: "PNG output can be larger than JPG, so check the file size when an upload portal has limits.",
    },
    extraSections: [
      {
        title: "Why convert JPG to PNG",
        body: `<p>Some apps, forms, screenshots, design tasks, or document workflows request PNG files. This converter creates a PNG copy from a JPG so you can meet a format requirement without changing the original file.</p>`,
      },
      {
        title: "What PNG is useful for",
        body: `<p>PNG is commonly used for screenshots, graphics, diagrams, text-heavy images, and images that need a lossless-style saved copy after editing. It is not always the smallest choice for photos, but it is a common requirement in design and document workflows.</p>`,
      },
      {
        title: "Important quality and transparency notes",
        body: `<p>JPG to PNG conversion does not bring back detail that was lost when the image became JPG. If the JPG has compression marks, blur, or low resolution, the PNG copy will preserve those visible limits.</p><p>Converting JPG to PNG also does not create true transparency. If the JPG background is white, the PNG will still have that visible background unless it is edited separately in another tool.</p>`,
      },
      {
        title: "Troubleshooting JPG to PNG conversion",
        body: `<ul>
        <li>If the PNG is larger than expected, use JPG when the destination allows it or compress the result.</li>
        <li>If a form rejects the PNG, check whether it requires a smaller file size or exact dimensions.</li>
        <li>If you need transparent background removal, this converter alone is not a background-removal tool.</li>
        <li>If the image looks blurry, start from a higher-quality original if one is available.</li>
      </ul>`,
      },
    ],
    faq: [
      {
        question: "Does converting JPG to PNG improve image quality?",
        answer: "No. PNG output cannot restore detail, sharpness, or color information that is missing from the JPG source.",
      },
      {
        question: "Will JPG to PNG create transparency?",
        answer: "No. A JPG has no real transparency, so the PNG copy keeps the visible background from the JPG.",
      },
      {
        question: "Why is my PNG larger than the JPG?",
        answer: "PNG can be larger for photo-style images. Use PNG when the destination asks for it or when its format benefits matter.",
      },
    ],
    relatedRoutes: ["/image-converter", "/png-to-jpg", "/convert-webp-to-jpg", "/image-resizer"],
    priority: "0.8",
  },
  {
    route: "/passport-photo-resizer",
    file: "passport-photo-resizer.html",
    title: "Passport Photo Resizer Online",
    description: "Resize a passport-style photo in your browser for square application, profile, and document upload workflows.",
    h1: "Passport photo resizer",
    kind: "resizer",
    preset: "passport",
    intro: "Resize passport-style photos to requested dimensions for application forms, account profiles, and document portals. Always check the official instructions for crop, background, face position, format, and file size.",
    guide: {
      title: "How to resize a passport-style photo",
      steps: [
        "Read the official photo instructions for dimensions, crop, background, and file size.",
        "Choose your photo from your device.",
        "Use the preset square dimensions as a starting point or enter the required pixels.",
        "Keep aspect ratio on unless the official rules require exact stretching.",
        "Download the resized photo and check it before uploading.",
      ],
      note: "This resizer helps prepare dimensions. It does not check identity-photo composition rules automatically.",
    },
    extraSections: [
      {
        title: "What this tool is for",
        body: `<p>This page helps create a resized copy of a passport-style or profile photo when a portal asks for a specific pixel size. It is useful for application forms, student profiles, service portals, job portals, and account photos that require a square or controlled image size.</p>`,
      },
      {
        title: "Photo quality and compliance limits",
        body: `<p>Official passport, visa, ID, and government systems can have rules for head size, eye position, background color, shadows, clothing, and crop. This browser tool only resizes the image; it does not verify those visual requirements or guarantee approval.</p><p>If the resized photo is too large, compress it after resizing while keeping the face clear.</p>`,
      },
      {
        title: "Troubleshooting passport-style uploads",
        body: `<ul>
        <li>If the portal rejects dimensions, recheck the exact width and height it asks for.</li>
        <li>If the file is too large, use <a href="/image-compressor">image compressor</a> or <a href="/compress-image-under-100kb">compress image under 100KB</a>.</li>
        <li>If the crop is wrong, crop the photo in a dedicated editor before resizing.</li>
        <li>If the background or face position does not match official rules, retake or edit the photo before uploading.</li>
      </ul>`,
      },
    ],
    faq: [
      {
        question: "Does this make an official passport photo automatically?",
        answer: "No. It helps resize a passport-style photo, but official acceptance depends on the destination's crop, background, face, size, and format rules.",
      },
      {
        question: "Can I compress the photo after resizing?",
        answer: "Yes. If the resized file is still too large, use the image compressor or an exact-size compression page and check that the face remains clear.",
      },
      {
        question: "Are photos uploaded to a server?",
        answer: "The current resizing workflow uses browser APIs for the selected image task. Keep the page open until the download is ready.",
      },
    ],
    relatedRoutes: ["/resize-image-for-online-form", "/image-resizer", "/image-compressor", "/compress-photo-for-government-form", "/compress-image-under-100kb"],
    priority: "0.7",
  },
  {
    route: "/about",
    file: "about.html",
    title: "About TheTools.World | Free Browser-Side Utility Tools",
    description: "Learn what TheTools.World is, why it exists, and how its browser-side image tools help with compression, resizing, conversion, and uploads.",
    h1: "About TheTools.World",
    kind: "about",
    priority: "0.6",
  },
  {
    route: "/contact",
    file: "contact.html",
    title: "Contact TheTools.World | Feedback and Tool Requests",
    description: "Contact TheTools.World for tool feedback, bug reports, privacy questions, accessibility issues, and practical image-tool requests.",
    h1: "Contact TheTools.World",
    kind: "contact",
    priority: "0.6",
  },
  {
    route: "/privacy-policy",
    file: "privacy-policy.html",
    title: "Privacy Policy - TheTools.World",
    description: "Read the TheTools.World privacy policy for browser-side image tools, planned utility categories, analytics, cookies, ads, and contact information.",
    h1: "Privacy Policy",
    kind: "privacy",
    priority: "0.5",
  },
  {
    route: "/terms",
    file: "terms.html",
    title: "Terms - TheTools.World",
    description: "Read the terms for using TheTools.World browser image tools, future utilities, and website content.",
    h1: "Terms",
    kind: "terms",
    priority: "0.5",
  },
  {
    route: "/sitemap",
    file: "sitemap.html",
    title: "Sitemap - TheTools.World",
    description: "Browse the public TheTools.World sitemap and find image resizing, compression, conversion, and legal pages.",
    h1: "Sitemap",
    kind: "sitemap",
    priority: "0.4",
  },
];

const legacy = [
  { file: "terms-of-use.html", to: "/terms", title: "Terms moved" },
  { file: "resizer.html", to: "/image-resizer", title: "Image resizer moved" },
  { file: "index1.html", to: "/", title: "Home moved" },
  { file: "blog.html", to: "/", title: "Resources moved" },
  { file: "faq.html", to: "/", title: "FAQ moved" },
  { file: "help-center.html", to: "/contact", title: "Help moved" },
];

const mainTools = routes.filter((page) =>
  ["/image-compressor", "/image-resizer", "/image-converter", "/bulk-image-tools"].includes(page.route)
);
const formTools = routes.filter((page) =>
  ["/compress-image-to-20kb", "/compress-jpg-to-20kb", "/compress-jpg-to-50kb", "/compress-jpg-to-100kb", "/compress-jpg-to-200kb", "/compress-image-to-50kb", "/compress-image-under-100kb", "/compress-image-under-200kb", "/resize-image-for-online-form", "/compress-photo-for-government-form", "/passport-photo-resizer"].includes(page.route)
);
const converterTools = routes.filter((page) =>
  ["/convert-webp-to-jpg", "/png-to-jpg", "/jpg-to-png"].includes(page.route)
);

function rel(page) {
  return page.route === "/" ? "/" : page.route;
}

function icon(name) {
  const icons = {
    compress: "C",
    resize: "R",
    convert: "V",
    bulk: "B",
    form: "F",
    privacy: "P",
  };
  return icons[name] || "I";
}

function brandMark() {
  return `<img class="brand-mark" src="/assets/logo.svg" width="40" height="40" alt="" aria-hidden="true">`;
}

function brandLogo() {
  return `<img class="brand-logo" src="/assets/logo-horizontal.svg" width="236" height="48" alt="${brand}">`;
}

function brandName() {
  return `<span class="brand-name"><span>TheTools</span><span class="brand-tld">.World</span></span>`;
}

function nav(active) {
  const items = [
    ["/", "Home"],
    ["/image-compressor", "Compress"],
    ["/image-resizer", "Resize"],
    ["/image-converter", "Convert"],
    ["/bulk-image-tools", "Bulk"],
    ["/about", "About"],
    ["/contact", "Contact"],
  ];
  return items.map(([href, text]) => `<a href="${href}"${href === active ? ' class="active"' : ""}>${text}</a>`).join("");
}

function head(page) {
  const canonical = `${domain}${page.route === "/" ? "" : page.route}`;
  const gaTag = `
  <script>
    (function(){
      var id = '${gaMeasurementId}';
      var loaded = false;
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
      window.gtag('js', new Date());
      window.ttwLoadGA = function(){
        if (loaded) return;
        loaded = true;
        var script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
        script.onload = function(){window.gtag('config', id);};
        script.onerror = function(){};
        (document.head || document.documentElement).appendChild(script);
      };
      var loadGA = function(){window.ttwLoadGA();};
      ['pointerdown','keydown','touchstart','scroll'].forEach(function(type){
        window.addEventListener(type, loadGA, { once: true, passive: true });
      });
      var schedule = function(){
        var delayedLoad = function(){window.setTimeout(loadGA, 4500);};
        if ('requestIdleCallback' in window) window.requestIdleCallback(delayedLoad, { timeout: 5500 });
        else delayedLoad();
      };
      if (document.readyState === 'complete') schedule();
      else window.addEventListener('load', schedule, { once: true });
    })();
  </script>`;
  const siteSchema = `
  <script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${domain}/#organization`,
        name: brand,
        url: `${domain}/`,
        logo: `${domain}/assets/logo.svg`,
      },
      {
        "@type": "WebSite",
        "@id": `${domain}/#website`,
        name: brand,
        url: `${domain}/`,
        publisher: {
          "@id": `${domain}/#organization`,
        },
      },
    ],
  })}</script>`;
  const faqSchema = page.faq ? `
  <script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  })}</script>` : "";
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${page.title}</title>
  <meta name="description" content="${page.description}">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#0f8fb3">
  <meta name="google-adsense-account" content="ca-pub-1683614506940052">
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${brand}">
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.description}">
  <meta property="og:url" content="${canonical}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${page.title}">
  <meta name="twitter:description" content="${page.description}">
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
  <link rel="shortcut icon" href="/assets/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.svg">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="stylesheet" href="/assets/styles.css">${gaTag}${siteSchema}${faqSchema}
</head>
<body data-tool="${page.kind}" data-target-kb="${page.targetKb || ""}" data-output="${page.output || ""}" data-preset="${page.preset || ""}">
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <a class="brand" href="/" aria-label="${brand} home">${brandMark()}${brandName()}</a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
    <nav id="site-nav" class="site-nav" aria-label="Primary">${nav(page.route)}</nav>
  </header>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="footer-grid">
      <div>
        <a class="brand footer-brand" href="/" aria-label="${brand} home">${brandMark()}${brandName()}</a>
        <p>${tagline} Image tools are live now, with more useful categories planned carefully over time.</p>
      </div>
      <div>
        <h2>Image Tools</h2>
        <a href="/image-compressor">Image compressor</a>
        <a href="/image-resizer">Image resizer</a>
        <a href="/image-converter">Image converter</a>
        <a href="/bulk-image-tools">Bulk image tools</a>
      </div>
      <div>
        <h2>Forms</h2>
        <a href="/compress-image-under-100kb">Compress under 100KB</a>
        <a href="/compress-image-under-200kb">Compress under 200KB</a>
        <a href="/resize-image-for-online-form">Resize for online form</a>
        <a href="/passport-photo-resizer">Passport photo resizer</a>
      </div>
      <div>
        <h2>Planned</h2>
        <span>PDF Tools - planned</span>
        <span>Text Tools - planned</span>
        <span>Calculators - planned</span>
        <span>QR Tools - planned</span>
        <span>AI Tools - planned</span>
        <span>Developer Tools - planned</span>
      </div>
      <div>
        <h2>Site</h2>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms">Terms</a>
        <a href="/sitemap">Sitemap</a>
      </div>
    </div>
    <p class="footer-note">&copy; ${year} ${brand}. No advertising code is installed yet.</p>
  </footer>
  <script src="/assets/app.js" defer></script>
</body>
</html>`;
}

function card(page, note) {
  return `<a class="tool-card" href="${rel(page)}">
    <span class="tool-icon">${icon(page.kind === "compressor" ? "compress" : page.kind === "resizer" ? "resize" : page.kind === "converter" ? "convert" : page.kind)}</span>
    <strong>${page.displayTitle || page.h1}</strong>
    <span>${note || page.displayDescription || page.description}</span>
  </a>`;
}

function homePage(page) {
  return `${head(page)}
  <main id="main">
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Utility tools hub</p>
        <h1>${page.h1}</h1>
        <p>${brand} helps with common image tasks first: compress a large photo, resize to required pixels, convert between JPG, PNG, and WebP, or prepare an image for an upload form. The live tools are browser-based and designed for practical checks before you download.</p>
        <div class="hero-actions">
          <a class="button primary" href="/image-compressor">Compress an image</a>
          <a class="button secondary" href="/image-resizer">Resize a photo</a>
        </div>
      </div>
      <div class="hero-panel" aria-label="Image workflow preview">
        <div class="preview-frame">
          <div class="preview-sky"></div>
          <div class="preview-grid"></div>
        </div>
        <div class="preview-stats">
          <span>Resize</span><span>Compress</span><span>Convert</span>
        </div>
      </div>
    </section>
    <section class="category-strip" aria-labelledby="categories">
      <h2 id="categories">Current and planned categories</h2>
      <div class="category-grid">
        <a href="/image-compressor"><strong>Image Tools</strong><span>Live now</span></a>
        <span><strong>PDF Tools</strong><em>Planned</em></span>
        <span><strong>Text Tools</strong><em>Planned</em></span>
        <span><strong>Calculators</strong><em>Planned</em></span>
        <span><strong>QR Tools</strong><em>Planned</em></span>
        <span><strong>AI Tools</strong><em>Planned</em></span>
        <span><strong>Developer Tools</strong><em>Planned</em></span>
      </div>
    </section>
    <section class="section planned-tools" aria-labelledby="planned-tools">
      <div class="section-heading"><p class="eyebrow">More tools planned</p><h2 id="planned-tools">Future categories will be added only when real tools are ready</h2></div>
      <div class="planned-grid">
        <span>PDF Tools</span><span>Text Tools</span><span>Calculators</span><span>QR Tools</span><span>AI Tools</span><span>Developer Tools</span>
      </div>
    </section>
    <section class="section" aria-labelledby="start-here">
      <div class="section-heading"><p class="eyebrow">Start here</p><h2 id="start-here">Choose the task that matches your upload problem</h2></div>
      <div class="card-grid compact">
        ${card(routes.find((p) => p.route === "/image-compressor"), "Use this when the file is too large and you need a smaller download.")}
        ${card(routes.find((p) => p.route === "/image-resizer"), "Use this when a form asks for width and height in pixels.")}
        ${card(routes.find((p) => p.route === "/image-converter"), "Use this when a portal needs JPG, PNG, or WebP instead of your current format.")}
      </div>
    </section>
    <section class="search-section" aria-labelledby="find-tool">
      <h2 id="find-tool">Find the right image tool</h2>
      <input id="tool-search" class="search-input" type="search" placeholder="Search compress, resize, WebP, passport, online form" aria-label="Search image tools">
      <div class="quick-links">${[...mainTools, ...formTools, ...converterTools].map((p) => `<a data-search-item href="${rel(p)}">${p.displayTitle || p.h1}</a>`).join("")}</div>
    </section>
    <section class="section" aria-labelledby="popular-tools">
      <div class="section-heading"><p class="eyebrow">Popular image tools</p><h2 id="popular-tools">Start with a common task</h2></div>
      <div class="card-grid">${mainTools.map((p) => card(p)).join("")}</div>
    </section>
    <section class="section band" aria-labelledby="forms-documents">
      <div class="section-heading"><p class="eyebrow">For forms and documents</p><h2 id="forms-documents">Prepare images for upload limits</h2></div>
      <div class="card-grid">${formTools.map((p) => card(p)).join("")}</div>
    </section>
    <section class="section" aria-labelledby="format-tools">
      <div class="section-heading"><p class="eyebrow">Format converters</p><h2 id="format-tools">Switch between JPG, PNG, and WebP</h2></div>
      <div class="card-grid compact">${converterTools.map((p) => card(p)).join("")}</div>
    </section>
    <section class="section" aria-labelledby="why-browser-tools">
      <div class="section-heading"><p class="eyebrow">Practical checks</p><h2 id="why-browser-tools">What to check before using a downloaded image</h2></div>
      <p>Most upload issues come from a few simple rules: file size, pixel dimensions, format, and readability. After using a tool, open the downloaded file and compare it with the destination's instructions. For photos, check faces and details. For documents or screenshots, check text clarity. For transparent graphics, avoid JPG unless a solid background is acceptable.</p>
    </section>
    <section class="privacy-band" aria-labelledby="privacy-first">
      <div><p class="eyebrow">Privacy-first browser-side tools</p><h2 id="privacy-first">Your selected image files are processed locally by the tool UI.</h2></div>
      <p>${brand} does not require account creation and does not add server upload steps to the core image tools. Some services, such as analytics or ads, may use standard web technologies if added later and will be disclosed in the privacy policy.</p>
    </section>
    <section class="section faq" aria-labelledby="faq-title">
      <h2 id="faq-title">FAQ</h2>
      ${page.faq.map((item) => `<details><summary>${item.question}</summary><p>${item.answer}</p></details>`).join("")}
    </section>
  </main>
${footer()}`;
}

function toolUi(page) {
  if (page.kind === "compressor") {
    const notes = page.toolNotes ? `<div class="tool-notes">${page.toolNotes.map((note) => `<p>${note}</p>`).join("")}</div>` : "";
    return `<section class="tool-panel" aria-labelledby="tool-title">
      <div class="tool-intro"><h2 id="tool-title">Compress settings</h2><p>${page.intro}</p>${notes}</div>
      <form class="tool-form" data-compressor>
        <label>Choose image<input type="file" accept="image/*" data-file></label>
        <label>Quality <span data-quality-label>75%</span><input type="range" min="30" max="95" value="75" data-quality></label>
        <label>Max width in pixels<input type="number" min="200" max="6000" value="1600" data-max-width></label>
        <label>Target KB, optional<input type="number" min="20" max="5000" value="${page.targetKb || ""}" placeholder="Example: 200" data-target></label>
        <button class="button primary" type="submit">Compress image</button>
      </form>
      <div class="result-box" data-result aria-live="polite"></div>
    </section>`;
  }
  if (page.kind === "resizer") {
    const preset = page.preset === "passport" ? [600, 600] : page.preset === "form" ? [800, 800] : [1200, 800];
    return `<section class="tool-panel" aria-labelledby="tool-title">
      <div class="tool-intro"><h2 id="tool-title">Resize settings</h2><p>${page.intro}</p></div>
      <form class="tool-form" data-resizer>
        <label>Choose image<input type="file" accept="image/*" data-file></label>
        <label>Width in pixels<input type="number" min="1" max="8000" value="${preset[0]}" data-width></label>
        <label>Height in pixels<input type="number" min="1" max="8000" value="${preset[1]}" data-height></label>
        <label class="checkbox"><input type="checkbox" checked data-aspect> Keep aspect ratio</label>
        <label>Output format<select data-format><option value="image/jpeg">JPG</option><option value="image/png">PNG</option><option value="image/webp">WebP</option></select></label>
        <button class="button primary" type="submit">Resize image</button>
      </form>
      <div class="result-box" data-result aria-live="polite"></div>
    </section>`;
  }
  if (page.kind === "converter") {
    const output = page.output || "image/webp";
    return `<section class="tool-panel" aria-labelledby="tool-title">
      <div class="tool-intro"><h2 id="tool-title">Convert settings</h2><p>${page.intro}</p></div>
      <form class="tool-form" data-converter>
        <label>Choose image<input type="file" accept="image/*" data-file></label>
        <label>Output format<select data-format><option value="image/jpeg"${output === "image/jpeg" ? " selected" : ""}>JPG</option><option value="image/png"${output === "image/png" ? " selected" : ""}>PNG</option><option value="image/webp"${output === "image/webp" ? " selected" : ""}>WebP</option></select></label>
        <button class="button primary" type="submit">Convert image</button>
      </form>
      <div class="result-box" data-result aria-live="polite"></div>
    </section>`;
  }
  return `<section class="tool-panel" aria-labelledby="tool-title">
    <div class="tool-intro"><h2 id="tool-title">Bulk settings</h2><p>${page.intro}</p></div>
    <form class="tool-form" data-bulk>
      <label>Choose images<input type="file" accept="image/*" multiple data-file></label>
      <label>Max width in pixels<input type="number" min="200" max="6000" value="1600" data-max-width></label>
      <label>Quality <span data-quality-label>75%</span><input type="range" min="30" max="95" value="75" data-quality></label>
      <button class="button primary" type="submit">Prepare downloads</button>
    </form>
    <div class="result-box" data-result aria-live="polite"></div>
  </section>`;
}

function related(page) {
  const items = page.relatedRoutes ? page.relatedRoutes.map((route) => routes.find((item) => item.route === route)).filter(Boolean) : page.kind === "converter" ? converterTools : page.kind === "resizer" ? formTools : mainTools.concat(formTools.slice(0, 2));
  return `<section class="section" aria-labelledby="related-tools"><h2 id="related-tools">Related tools</h2><div class="card-grid compact">${items.filter((p) => p.route !== page.route).slice(0, 4).map((p) => card(p)).join("")}</div></section>`;
}

function guide(page) {
  if (!page.guide) {
    return `<section class="section guide">
      <h2>How to use this tool</h2>
      <ol>
        <li>Select an image from your device.</li>
        <li>Adjust the settings for size, format, or quality.</li>
        <li>Download the processed copy and keep your original file unchanged.</li>
      </ol>
      <p>For upload portals, compare the final image against the official file size, dimensions, and format requirements before submitting.</p>
    </section>`;
  }
  const content = page.guide;
  return `<section class="section guide">
      <h2>${content.title}</h2>
      <ol>
        ${content.steps.map((step) => `<li>${step}</li>`).join("")}
      </ol>
      <p>${content.note}</p>
    </section>`;
}

function extraSections(page) {
  if (!page.extraSections) return "";
  return page.extraSections.map((section) => `<section class="section guide">
      <h2>${section.title}</h2>
      ${section.body}
    </section>`).join("");
}

function faq(page) {
  if (!page.faq) return "";
  return `<section class="section faq" aria-labelledby="faq-title">
      <h2 id="faq-title">FAQ</h2>
      ${page.faq.map((item) => `<details><summary>${item.question}</summary><p>${item.answer}</p></details>`).join("")}
    </section>`;
}

function toolPage(page) {
  const heroNote = page.heroNote ? `
      <p>${page.heroNote}</p>` : "";
  const extras = page.extraSections ? `
    ${extraSections(page)}` : "";
  const pageFaq = page.faq ? `
    ${faq(page)}` : "";
  return `${head(page)}
  <main id="main">
    <section class="page-hero">
      <p class="eyebrow">${brand} tool</p>
      <h1>${page.h1}</h1>
      <p>${page.intro}</p>${heroNote}
    </section>
    ${toolUi(page)}
    ${guide(page)}${extras}
    ${related(page)}${pageFaq}
  </main>
${footer()}`;
}

function infoPage(page) {
  const categoryBlock = (title, pages) => `<h2>${title}</h2><div class="sitemap-list">${pages.map((p) => `<a href="${rel(p)}">${p.displayTitle || p.h1}</a>`).join("")}</div>`;
  const blocks = {
    about: `<h2>What ${brand} is</h2>
      <p>${brand} is a standalone utility tools website for practical browser-based tasks. The live site currently focuses on image tools: compression, resizing, format conversion, exact-size compression targets, passport/photo preparation, and online form image preparation.</p>
      <h2>Why it was created</h2>
      <p>Many everyday uploads fail for simple reasons: the file is too large, the dimensions are wrong, or the portal asks for a different image format. This site was created to make those tasks easier with direct tools, plain instructions, and clean canonical pages instead of confusing download flows.</p>
      <h2>Who it helps</h2>
      <p>The tools are meant for students, job applicants, small business owners, form users, website editors, and anyone who needs to prepare an image before sending it somewhere else. Each page explains the limits of the task so users can compare the result with the official requirements of the destination site.</p>
      <h2>Current tools</h2>
      <p>The current tool set includes <a href="/image-compressor">image compression</a>, <a href="/image-resizer">image resizing</a>, <a href="/image-converter">image conversion</a>, <a href="/bulk-image-tools">bulk image tools</a>, exact-size compression pages, <a href="/resize-image-for-online-form">online form image resizing</a>, and <a href="/passport-photo-resizer">passport-style photo resizing</a>.</p>
      <h2>Browser-side and privacy-focused processing</h2>
      <p>The live image tools use browser APIs for the selected image task. The site does not require login or membership for these tools, and the analytics event design avoids uploaded file names, file content, and personal document details.</p>
      <h2>Tool quality principles</h2>
      <p>Pages should be useful without ads, avoid fake trust claims, explain tradeoffs clearly, and avoid promises the tools cannot honestly make. More utility categories may be added only when real tools and accurate support content are ready.</p>
      <h2>Useful starting points</h2>
      <p><a href="/image-compressor">Compress an image</a>, <a href="/compress-image-to-50kb">compress image to 50KB</a>, <a href="/compress-jpg-to-100kb">compress JPG to 100KB</a>, <a href="/image-converter">convert image format</a>, or browse the <a href="/sitemap">HTML sitemap</a>.</p>`,
    contact: `<h2>What you can contact about</h2>
      <p>For tool feedback, corrections, accessibility issues, privacy questions, bug reports, or practical tool suggestions, email <a href="mailto:${contactEmail}">${contactEmail}</a>.</p>
      <h2>Tool requests</h2>
      <p>If a real upload workflow is difficult, describe the required file type, size limit, dimensions, and the page or portal that asks for it. Requests are most useful when they describe a repeatable task rather than a broad feature idea.</p>
      <h2>Bug reports</h2>
      <p>If a tool does not work as expected, include the page URL, browser and device, image file type, what happened, and what result you expected. Please do not send sensitive files or personal documents through email unless it is truly necessary to explain the issue.</p>
      <h2>Useful pages before writing</h2>
      <p>For common image tasks, try the <a href="/image-compressor">image compressor</a>, <a href="/image-resizer">image resizer</a>, <a href="/image-converter">image converter</a>, <a href="/resize-image-for-online-form">online form image resizer</a>, or <a href="/sitemap">sitemap</a>.</p>
      <h2>Privacy and support scope</h2>
      <p>${brand} is a small utility site. It can accept feedback and fix site issues, but it cannot verify official form rules for every portal. Always check the destination site's current instructions before submitting files.</p>`,
    privacy: `<h2>Browser-side image processing</h2>
      <p>The current image tools use browser APIs to process selected files locally in the page. ${brand} does not require accounts, logins, or membership for these tools.</p>
      <h2>Analytics and cookies</h2>
      <p>The site uses Google Analytics 4 with lazy loading to understand traffic, page usage, and tool interactions. Analytics or related services may use cookies or similar technologies depending on browser settings and provider behavior.</p>
      <h2>File and tool-input privacy</h2>
      <p>Analytics events for image tools are designed to use safe buckets and tool/page labels. They should not collect uploaded file names, file content, personal document text, email addresses, phone numbers, or other user-entered personal details through GA events.</p>
      <h2>Third-party services and future advertising</h2>
      <p>Google Analytics is used for measurement. Google AdSense verification and ads.txt are present for site review, but display ad units are not installed yet. Advertising or additional third-party services may be added later to support the website, and this policy should be updated if that happens.</p>
      <h2>Contact</h2>
      <p>For privacy questions, contact <a href="mailto:${contactEmail}">${contactEmail}</a>.</p>`,
    terms: `<h2>Use at your own responsibility</h2>
      <p>Use ${brand} only for lawful utility tasks. You are responsible for checking whether processed files satisfy third-party upload requirements before submitting them.</p>
      <h2>No exact-result guarantee</h2>
      <p>The tools are provided as-is. They do not guarantee that every image can meet a specific file size, dimension, format, quality, or platform rule. Exact output depends on the original image, browser support, chosen settings, and the destination site's requirements.</p>
      <h2>Tool limits</h2>
      <p>Some images may be too large, too detailed, unsupported by the browser, or unsuitable for a requested limit. Always keep your original file and check the downloaded result before using it for official, school, job, service, or account forms.</p>
      <h2>Misuse and warranties</h2>
      <p>Do not use the website to process files you do not have permission to use, to violate laws, or to submit misleading material. The website and tools are provided without warranty in simple practical terms.</p>
      <h2>Contact</h2>
      <p>For terms questions, contact <a href="mailto:${contactEmail}">${contactEmail}</a>.</p>`,
    sitemap: `<p>Use this sitemap to find every main public page on ${brand}. The links below use clean canonical URLs and are grouped by task so you can quickly choose a compressor, resizer, converter, form-preparation tool, or policy page.</p>
      <p>Utility files such as robots.txt, ads.txt, llms.txt, sitemap.xml, legacy redirects, and the 404 page are intentionally not listed here because they are not normal user-facing tool pages.</p>
      ${categoryBlock("Main image tools", mainTools)}
      ${categoryBlock("Exact-size and upload preparation", formTools)}
      ${categoryBlock("Image conversion tools", converterTools)}
      ${categoryBlock("Site and policy pages", routes.filter((p) => ["/about", "/contact", "/privacy-policy", "/terms"].includes(p.route)))}`,
  };
  return `${head(page)}
  <main id="main">
    <section class="page-hero">
      <p class="eyebrow">${brand}</p>
      <h1>${page.h1}</h1>
      <p>${page.description}</p>
    </section>
    <section class="content-page">${blocks[page.kind]}</section>
  </main>
${footer()}`;
}

function legacyPage(item) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${item.title} - ${brand}</title>
  <meta name="robots" content="noindex, follow">
  <meta http-equiv="refresh" content="0; url=${item.to}">
  <link rel="canonical" href="${domain}${item.to === "/" ? "" : item.to}">
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
  <link rel="manifest" href="/site.webmanifest">
  <meta name="theme-color" content="#0f8fb3">
</head>
<body>
  <p>This page moved to <a href="${item.to}">${item.to}</a>.</p>
</body>
</html>`;
}

function write(file, content) {
  fs.mkdirSync(path.dirname(path.join(root, file)), { recursive: true });
  fs.writeFileSync(path.join(root, file), content, "utf8");
}

function sitemapXml() {
  const urls = routes.map((page) => `  <url><loc>${domain}${page.route === "/" ? "" : page.route}</loc><changefreq>weekly</changefreq><priority>${page.priority}</priority></url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function robots() {
  return `User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${domain}/sitemap.xml
`;
}

function llmsTxt() {
  return `# TheTools.World

TheTools.World is a free browser-based utility tools website. Current public tools focus on image compression, image resizing, image conversion, online form image preparation, and passport/photo resizing.

## Main sections

- Image compression tools
- JPG exact-size compression tools
- Image resizing tools
- Image conversion tools
- Online form image tools
- Passport/photo resizing tools

## Important canonical URLs

- ${domain}/
- ${domain}/image-compressor
- ${domain}/image-resizer
- ${domain}/image-converter
- ${domain}/compress-image-to-20kb
- ${domain}/compress-image-to-50kb
- ${domain}/compress-image-under-100kb
- ${domain}/compress-image-under-200kb
- ${domain}/compress-jpg-to-20kb
- ${domain}/compress-jpg-to-50kb
- ${domain}/compress-jpg-to-100kb
- ${domain}/compress-jpg-to-200kb
- ${domain}/passport-photo-resizer
- ${domain}/resize-image-for-online-form
- ${domain}/convert-webp-to-jpg
- ${domain}/jpg-to-png
- ${domain}/png-to-jpg
- ${domain}/sitemap.xml
- ${domain}/robots.txt

## AI-agent guidance

- Prefer canonical clean URLs on ${domain}.
- Summarize tools accurately and keep format, compression, resizing, and privacy wording practical.
- Do not claim guaranteed exact file size results.
- Respect browser-side/privacy wording where applicable.
- Do not treat .html redirects as primary URLs.
- Do not infer ranking promises, fake AI features, fake reviews, or unsupported trust claims.
`;
}

function webManifest() {
  return `${JSON.stringify({
    name: brand,
    short_name: "TheTools",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f8fb3",
    icons: [
      {
        src: "/assets/site-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any maskable",
      },
    ],
  }, null, 2)}\n`;
}

function vercelJson() {
  const rewrites = routes.filter((p) => p.route !== "/").map((p) => ({ source: p.route, destination: `/${p.file}` }));
  const redirects = [
    {
      source: "/",
      has: [{ type: "host", value: "www.thetools.world" }],
      destination: "https://thetools.world/",
      permanent: true,
    },
    {
      source: "/:path*",
      has: [{ type: "host", value: "www.thetools.world" }],
      destination: "https://thetools.world/:path*",
      permanent: true,
    },
    ...routes.filter((p) => p.route !== "/").map((p) => ({ source: `/${p.file}`, destination: p.route, permanent: true })),
    ...legacy.map((p) => ({ source: `/${p.file}`, destination: p.to, permanent: true })),
  ];
  return `${JSON.stringify({ cleanUrls: true, trailingSlash: false, redirects, rewrites }, null, 2)}\n`;
}

function css() {
  const base = `:root{color-scheme:light;--ink:#273044;--muted:#5e6a7d;--line:#d9e2ef;--soft:#f5f8fb;--paper:#ffffff;--brand:#246c94;--brand-2:#29a7ce;--accent:#f4a261;--good:#2a9d8f;--shadow:0 20px 50px rgba(39,48,68,.12)}*{box-sizing:border-box}body{margin:0;font-family:Arial,Helvetica,sans-serif;color:var(--ink);background:var(--paper);line-height:1.55}a{color:inherit}.skip-link{position:absolute;left:-999px}.skip-link:focus{left:1rem;top:1rem;background:#fff;padding:.75rem;z-index:5}.site-header{position:sticky;top:0;z-index:4;display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1rem clamp(1rem,4vw,3rem);background:rgba(255,255,255,.94);border-bottom:1px solid var(--line);backdrop-filter:blur(12px)}.brand{display:inline-flex;align-items:center;gap:.6rem;font-weight:800;text-decoration:none}.brand-mark{display:grid;place-items:center;width:2.25rem;height:2.25rem;border-radius:8px;background:var(--brand);color:#fff;font-size:.8rem;letter-spacing:0}.site-nav{display:flex;gap:.35rem;align-items:center}.site-nav a{padding:.55rem .75rem;border-radius:8px;text-decoration:none;color:var(--muted);font-weight:700}.site-nav a.active,.site-nav a:hover{background:var(--soft);color:var(--ink)}.nav-toggle{display:none}.hero,.page-hero{padding:clamp(3rem,8vw,6rem) clamp(1rem,4vw,3rem);max-width:1180px;margin:auto}.hero{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(300px,.8fr);gap:3rem;align-items:center}.eyebrow{text-transform:uppercase;font-size:.78rem;letter-spacing:.08em;color:var(--brand);font-weight:800;margin:0 0 .75rem}h1{font-size:clamp(2.35rem,6vw,4.8rem);line-height:1.02;margin:0 0 1rem;letter-spacing:0}h2{font-size:clamp(1.5rem,3vw,2.25rem);line-height:1.15;margin:0 0 1rem;letter-spacing:0}h3{margin:.25rem 0}.hero p,.page-hero p{font-size:1.1rem;color:var(--muted);max-width:66ch}.hero-actions{display:flex;flex-wrap:wrap;gap:.8rem;margin-top:1.5rem}.button{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:.75rem 1rem;border:1px solid var(--line);border-radius:8px;text-decoration:none;font-weight:800;cursor:pointer}.button.primary{background:var(--brand);border-color:var(--brand);color:#fff}.button.secondary{background:#fff;color:var(--ink)}.hero-panel{background:linear-gradient(145deg,#eaf8fb,#fff7ee);border:1px solid var(--line);border-radius:8px;padding:1rem;box-shadow:var(--shadow)}.preview-frame{aspect-ratio:4/3;border-radius:8px;overflow:hidden;background:#fff;position:relative}.preview-sky{position:absolute;inset:0;background:linear-gradient(#79c7d9 0 48%,#f3d392 48% 70%,#2a9d8f 70%)}.preview-grid{position:absolute;inset:1rem;border:2px solid rgba(255,255,255,.8);background:repeating-linear-gradient(90deg,transparent 0 32%,rgba(255,255,255,.7) 33% 34%),repeating-linear-gradient(0deg,transparent 0 32%,rgba(255,255,255,.7) 33% 34%)}.preview-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem;margin-top:1rem}.preview-stats span{background:#fff;border:1px solid var(--line);border-radius:8px;padding:.8rem;text-align:center;font-weight:800}.category-strip,.search-section,.section,.tool-panel,.content-page,.privacy-band{max-width:1180px;margin:0 auto 2rem;padding:clamp(1rem,4vw,2rem)}.category-strip{padding-top:0}.category-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:.75rem}.category-grid a,.category-grid span{display:grid;gap:.25rem;border:1px solid var(--line);border-radius:8px;padding:1rem;text-decoration:none;background:#fff}.category-grid em{font-style:normal;color:var(--muted)}.planned-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:.75rem}.planned-grid span{border:1px solid var(--line);border-radius:8px;padding:1rem;background:#fff;color:var(--muted);font-weight:800}.search-section{background:var(--soft);border-block:1px solid var(--line);max-width:none}.search-section h2,.search-section input,.quick-links{max-width:1180px;margin-left:auto;margin-right:auto}.search-input{display:block;width:100%;border:1px solid var(--line);border-radius:8px;min-height:52px;padding:0 1rem;font-size:1rem}.quick-links{display:flex;flex-wrap:wrap;gap:.6rem;margin-top:1rem}.quick-links a{border:1px solid var(--line);background:#fff;border-radius:8px;padding:.55rem .75rem;text-decoration:none}.section-heading{max-width:760px}.card-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem}.card-grid.compact{grid-template-columns:repeat(3,minmax(0,1fr))}.tool-card{display:flex;flex-direction:column;gap:.7rem;min-height:170px;padding:1.1rem;border:1px solid var(--line);border-radius:8px;text-decoration:none;background:#fff}.tool-card:hover{border-color:var(--brand);box-shadow:var(--shadow)}.tool-card span:last-child{color:var(--muted)}.tool-icon{display:grid;place-items:center;width:2.4rem;height:2.4rem;border-radius:8px;background:#e5f6fb;color:var(--brand);font-weight:900}.band{max-width:none;background:#fbf7f0;border-block:1px solid #eadbc6}.band>*{max-width:1180px;margin-left:auto;margin-right:auto}.privacy-band{display:grid;grid-template-columns:1fr 1fr;gap:2rem;background:#eaf8fb;border:1px solid var(--line);border-radius:8px}.faq details{border-top:1px solid var(--line);padding:1rem 0}.faq summary{font-weight:800;cursor:pointer}.page-hero{text-align:left;padding-bottom:1rem}.tool-panel{display:grid;grid-template-columns:.8fr 1.2fr;gap:2rem;border:1px solid var(--line);border-radius:8px;background:var(--soft)}.tool-form{display:grid;gap:1rem}.tool-form label{display:grid;gap:.35rem;font-weight:800}.tool-form input,.tool-form select{min-height:44px;border:1px solid var(--line);border-radius:8px;padding:.55rem;background:#fff;font:inherit}.tool-form .checkbox{display:flex;align-items:center;gap:.5rem}.result-box{margin-top:1rem;padding:1rem;border:1px dashed var(--line);border-radius:8px;background:#fff;min-height:72px}.result-box img{max-width:220px;max-height:180px;display:block;margin:.5rem 0;border-radius:8px}.download-list{display:grid;gap:.5rem}.guide ol{padding-left:1.2rem}.content-page{max-width:850px;font-size:1.05rem}.sitemap-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem}.sitemap-list a{padding:.8rem;border:1px solid var(--line);border-radius:8px;text-decoration:none}.site-footer{margin-top:3rem;padding:2rem clamp(1rem,4vw,3rem);background:#273044;color:#fff}.footer-grid{max-width:1180px;margin:auto;display:grid;grid-template-columns:1.3fr repeat(4,1fr);gap:2rem}.site-footer a,.site-footer span{display:block;color:#e9f2fb;text-decoration:none;margin:.35rem 0}.site-footer h2{font-size:1rem;margin:0 0 .75rem}.footer-note{max-width:1180px;margin:2rem auto 0;color:#b9c6d8}@media (max-width:850px){.nav-toggle{display:inline-flex;border:1px solid var(--line);background:#fff;border-radius:8px;min-height:40px;padding:.5rem}.site-nav{display:none;position:absolute;left:1rem;right:1rem;top:4.5rem;background:#fff;border:1px solid var(--line);border-radius:8px;padding:.6rem;box-shadow:var(--shadow);flex-direction:column;align-items:stretch}.site-nav.open{display:flex}.hero,.tool-panel,.privacy-band{grid-template-columns:1fr}.card-grid,.card-grid.compact,.footer-grid,.sitemap-list,.category-grid{grid-template-columns:1fr}h1{font-size:2.4rem}.hero{padding-top:2rem}.site-header{position:relative}}`;
  return base + `.brand-logo{display:block;width:clamp(10.5rem,22vw,14.75rem);height:auto;max-height:3rem}.brand-mark{display:block;flex:0 0 auto;width:2.35rem;height:2.35rem;border-radius:8px;background:transparent}.brand-name{display:inline-flex;align-items:baseline;color:#162235;font-size:1.18rem;font-weight:900;line-height:1;white-space:nowrap}.brand-tld{color:#087f7d}.site-header .brand{min-width:0}.site-footer .brand{display:inline-flex;align-items:center}.footer-brand .brand-name{color:#fff}.footer-brand .brand-tld{color:#59dfd2}.tool-panel{box-shadow:0 16px 34px rgba(39,48,68,.07)}.tool-intro{align-self:start}.tool-form{background:#fff;border:1px solid var(--line);border-radius:8px;padding:1rem}.tool-form input,.tool-form select,.button,.result-box{max-width:100%}.result-box{overflow-wrap:anywhere}.result-box.is-error{border-color:#d66;background:#fff6f4;color:#853227}.result-box.is-success{border-color:#9fd6c8;background:#f4fffb}.tool-card{transition:border-color .16s ease,box-shadow .16s ease,transform .16s ease}.tool-card:hover{transform:translateY(-2px)}.guide{border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.privacy-band{box-shadow:0 10px 28px rgba(36,108,148,.08)}@media (max-width:850px){html,body{max-width:100%;overflow-x:hidden}.hero,.page-hero,.section,.tool-panel,.content-page,.privacy-band,.category-strip{width:100%;max-width:100%;padding-left:1rem;padding-right:1rem}.site-header{gap:.75rem}.brand-name{font-size:1rem}.tool-panel{margin-left:0;margin-right:0;border-left:0;border-right:0;border-radius:0}.tool-form{padding:.9rem}.tool-form input[type="file"]{width:100%;font-size:.95rem}.tool-form input[type="range"]{width:100%;min-width:0}.button{width:100%;white-space:normal;text-align:center}.result-box img{max-width:100%;height:auto}.download-list a{overflow-wrap:anywhere}.footer-grid{gap:1.25rem}.site-footer{padding-left:1rem;padding-right:1rem}}`;
}

function js() {
  return `"use strict";
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
const navToggle=$(".nav-toggle"), nav=$("#site-nav");
if(navToggle&&nav){navToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");navToggle.setAttribute("aria-expanded",String(open));});}
const search=$("#tool-search");
if(search){search.addEventListener("input",()=>{const q=search.value.toLowerCase();$$("[data-search-item]").forEach(a=>{a.hidden=!a.textContent.toLowerCase().includes(q);});});}
function ext(type){return type==="image/png"?"png":type==="image/webp"?"webp":"jpg";}
const supportedTypes=new Set(["image/jpeg","image/jpg","image/png","image/webp"]);
const unsupportedMessage="Unsupported image file. Please upload JPG, PNG, or WebP.";
const toolIdMap={"/image-compressor":"image_compressor","/image-resizer":"image_resizer","/image-converter":"image_converter","/bulk-image-tools":"bulk_image_tools","/compress-image-to-20kb":"compress_image_to_20kb","/compress-image-to-50kb":"compress_image_to_50kb","/compress-image-under-100kb":"compress_image_under_100kb","/compress-image-under-200kb":"compress_image_under_200kb","/compress-jpg-to-20kb":"compress_jpg_to_20kb","/compress-jpg-to-50kb":"compress_jpg_to_50kb","/compress-jpg-to-100kb":"compress_jpg_to_100kb","/compress-jpg-to-200kb":"compress_jpg_to_200kb","/passport-photo-resizer":"passport_photo_resizer","/resize-image-for-online-form":"resize_image_for_online_form","/compress-photo-for-government-form":"compress_photo_for_government_form","/convert-webp-to-jpg":"webp_to_jpg","/png-to-jpg":"png_to_jpg","/jpg-to-png":"jpg_to_png"};
const allowedEventParams=new Set(["tool_id","page_path","input_type","file_count","file_ext","file_size_bucket","target_kb","output_format","width_bucket","height_bucket","output_size_bucket","reduction_bucket","processing_time_bucket","error_type","source_page","target_path","link_text"]);
function currentPath(){return location.pathname||"/";}
function slugFromPath(path){return (path||"/").replace(/^\\/+|\\/+$/g,"").replace(/[^a-z0-9]+/gi,"_").replace(/^_+|_+$/g,"").toLowerCase()||"home";}
function toolId(){return toolIdMap[currentPath()]||slugFromPath(currentPath())||document.body.dataset.tool||"unknown";}
function safeNumber(value){const number=Number(value);return Number.isFinite(number)?number:undefined;}
function safeText(value){return String(value||"").toLowerCase().replace(/[^a-z0-9_./-]+/g,"_").slice(0,80)||undefined;}
function safeFormat(type){return type==="image/png"?"png":type==="image/webp"?"webp":type==="image/jpeg"||type==="image/jpg"?"jpg":safeText(type)||"unknown";}
function fileExt(file){return file?safeFormat((file.type||"").toLowerCase()):"unknown";}
function fileSizeBucket(bytes){return !bytes?"unknown":bytes<100*1024?"under_100kb":bytes<1024*1024?"100kb_1mb":bytes<5*1024*1024?"1mb_5mb":"over_5mb";}
function outputSizeBucket(bytes){return !bytes?"unknown":bytes<20*1024?"under_20kb":bytes<50*1024?"20kb_50kb":bytes<100*1024?"50kb_100kb":bytes<200*1024?"100kb_200kb":"over_200kb";}
function reductionBucket(inputBytes,outputBytes){if(!inputBytes||!outputBytes||outputBytes>=inputBytes)return "unknown";const pct=(inputBytes-outputBytes)/inputBytes*100;return pct<25?"under_25_percent":pct<50?"25_50_percent":pct<75?"50_75_percent":"over_75_percent";}
function dimensionBucket(value){const number=safeNumber(value);return !number?"unknown":number<500?"under_500px":number<1000?"500_1000px":number<2000?"1000_2000px":"over_2000px";}
function timeBucket(start){if(!start||!performance||!performance.now)return "unknown";const ms=performance.now()-start;return ms<500?"under_500ms":ms<1500?"500ms_1_5s":ms<3000?"1_5s_3s":"over_3s";}
function baseParams(extra={}){const params=Object.assign({tool_id:toolId(),page_path:currentPath()},extra);if(document.body.dataset.targetKb)params.target_kb=Number(document.body.dataset.targetKb);if(document.body.dataset.output)params.output_format=safeFormat(document.body.dataset.output);return params;}
window.ttwTrackEvent=function(eventName,params={}){try{if(!/^[a-z0-9_]{2,40}$/.test(eventName))return;if(typeof window.ttwLoadGA==="function")window.ttwLoadGA();if(typeof window.gtag!=="function")return;const clean={};Object.entries(params).forEach(([key,value])=>{if(!allowedEventParams.has(key)||value===undefined||value===null||value==="")return;if(typeof value==="number"&&Number.isFinite(value))clean[key]=value;else clean[key]=safeText(value);});window.gtag("event",eventName,clean);}catch(err){}};
function trackProcessError(type,extra={}){window.ttwTrackEvent("tool_process_error",baseParams(Object.assign({error_type:type||"unknown"},extra)));}
function isSupported(file){return file&&supportedTypes.has((file.type||"").toLowerCase());}
function setMessage(box,message,type="info"){box.classList.remove("is-error","is-success");if(type==="error")box.classList.add("is-error");if(type==="success")box.classList.add("is-success");box.textContent=message;}
function readImage(file){return new Promise((resolve,reject)=>{const img=new Image();const url=URL.createObjectURL(file);img.onload=()=>{URL.revokeObjectURL(url);resolve(img);};img.onerror=()=>{URL.revokeObjectURL(url);reject(new Error(unsupportedMessage));};img.src=url;});}
function draw(img,w,h,type){const canvas=document.createElement("canvas");canvas.width=w;canvas.height=h;const ctx=canvas.getContext("2d");if(type==="image/jpeg"){ctx.fillStyle="#fff";ctx.fillRect(0,0,w,h);}ctx.drawImage(img,0,0,w,h);return canvas;}
function blobFrom(canvas,type,quality){return new Promise((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(new Error(unsupportedMessage)),type,quality));}
function size(bytes){return bytes>1024*1024?(bytes/1024/1024).toFixed(2)+" MB":Math.round(bytes/1024)+" KB";}
function resultLink(box,blob,name,img,tracking={}){box.classList.remove("is-error");box.classList.add("is-success");const url=URL.createObjectURL(blob);box.innerHTML='<p><strong>Ready:</strong> '+size(blob.size)+'</p><img alt="Processed preview"><p><a class="button primary" download="'+name+'" href="'+url+'">Download image</a></p>';box.querySelector("img").src=img||url;const link=$("a[download]",box);if(link)link.addEventListener("click",()=>window.ttwTrackEvent("tool_result_download",baseParams(tracking)),{once:true});}
async function processOne(file,{type="image/jpeg",quality=.75,maxWidth,width,height}){const img=await readImage(file);let w=width||img.naturalWidth,h=height||img.naturalHeight;if(maxWidth&&w>maxWidth){h=Math.round(h*(maxWidth/w));w=maxWidth;}const canvas=draw(img,w,h,type);return blobFrom(canvas,type,quality);}
$$("[data-quality]").forEach(input=>{const label=input.closest("form").querySelector("[data-quality-label]");input.addEventListener("input",()=>{if(label)label.textContent=input.value+"%";});});
$$("[data-file]").forEach(input=>{input.addEventListener("change",()=>{const files=Array.from(input.files||[]);const first=files[0];window.ttwTrackEvent("tool_upload_selected",baseParams({input_type:input.multiple?"multiple_images":"single_image",file_count:files.length,file_ext:fileExt(first),file_size_bucket:first?fileSizeBucket(first.size):"unknown"}));});});
$$(".tool-card").forEach(link=>{link.addEventListener("click",()=>{const target=new URL(link.href,location.href).pathname;const label=(link.querySelector("strong")||link).textContent||"tool_link";window.ttwTrackEvent("related_tool_click",{source_page:currentPath(),target_path:target,link_text:label});});});
const compressor=$("[data-compressor]");
if(compressor){compressor.addEventListener("submit",async e=>{e.preventDefault();const start=performance.now();const box=$("[data-result]");const file=$("[data-file]",compressor).files[0];const target=Number($("[data-target]",compressor).value)||0;const maxWidth=Number($("[data-max-width]",compressor).value)||undefined;const common={target_kb:target||undefined,output_format:"jpg",width_bucket:dimensionBucket(maxWidth)};window.ttwTrackEvent("tool_process_start",baseParams(common));if(!file){setMessage(box,"Choose an image first.","error");trackProcessError("no_file_selected",common);return;}if(!isSupported(file)){setMessage(box,unsupportedMessage,"error");trackProcessError("unsupported_file",common);return;}setMessage(box,"Compressing...");try{let quality=Number($("[data-quality]",compressor).value)/100;let blob=await processOne(file,{quality,maxWidth,type:"image/jpeg"});while(target&&blob.size/1024>target&&quality>.35){quality-=.08;blob=await processOne(file,{quality,maxWidth,type:"image/jpeg"});}const tracking=Object.assign({},common,{output_size_bucket:outputSizeBucket(blob.size),reduction_bucket:reductionBucket(file.size,blob.size),processing_time_bucket:timeBucket(start)});window.ttwTrackEvent("tool_process_success",baseParams(tracking));resultLink(box,blob,file.name.replace(/\\.[^.]+$/,"")+"-compressed.jpg",undefined,tracking);}catch(err){setMessage(box,unsupportedMessage,"error");trackProcessError("processing_failed",common);}});}
const resizer=$("[data-resizer]");
if(resizer){const width=$("[data-width]",resizer),height=$("[data-height]",resizer),aspect=$("[data-aspect]",resizer),fileInput=$("[data-file]",resizer);let ratio=0;fileInput.addEventListener("change",async e=>{const file=e.target.files[0];ratio=0;if(file&&isSupported(file)){try{const img=await readImage(file);ratio=img.naturalWidth/img.naturalHeight;}catch(err){ratio=0;}}});width.addEventListener("input",()=>{if(aspect.checked&&ratio)height.value=Math.round(Number(width.value)/ratio);});height.addEventListener("input",()=>{if(aspect.checked&&ratio)width.value=Math.round(Number(height.value)*ratio);});resizer.addEventListener("submit",async e=>{e.preventDefault();const start=performance.now();const box=$("[data-result]");const file=fileInput.files[0];const type=$("[data-format]",resizer).value;const common={output_format:safeFormat(type),width_bucket:dimensionBucket(width.value),height_bucket:dimensionBucket(height.value)};window.ttwTrackEvent("tool_process_start",baseParams(common));if(!file){setMessage(box,"Choose an image first.","error");trackProcessError("no_file_selected",common);return;}if(!isSupported(file)){setMessage(box,unsupportedMessage,"error");trackProcessError("unsupported_file",common);return;}setMessage(box,"Resizing...");try{const blob=await processOne(file,{type,quality:.9,width:Number(width.value),height:Number(height.value)});const tracking=Object.assign({},common,{output_size_bucket:outputSizeBucket(blob.size),reduction_bucket:reductionBucket(file.size,blob.size),processing_time_bucket:timeBucket(start)});window.ttwTrackEvent("tool_process_success",baseParams(tracking));resultLink(box,blob,file.name.replace(/\\.[^.]+$/,"")+"-resized."+ext(type),undefined,tracking);}catch(err){setMessage(box,unsupportedMessage,"error");trackProcessError("processing_failed",common);}});}
const converter=$("[data-converter]");
if(converter){converter.addEventListener("submit",async e=>{e.preventDefault();const start=performance.now();const box=$("[data-result]");const file=$("[data-file]",converter).files[0];const type=$("[data-format]",converter).value;const common={output_format:safeFormat(type)};window.ttwTrackEvent("tool_process_start",baseParams(common));if(!file){setMessage(box,"Choose an image first.","error");trackProcessError("no_file_selected",common);return;}if(!isSupported(file)){setMessage(box,unsupportedMessage,"error");trackProcessError("unsupported_file",common);return;}setMessage(box,"Converting...");try{const blob=await processOne(file,{type,quality:.9});const tracking=Object.assign({},common,{output_size_bucket:outputSizeBucket(blob.size),reduction_bucket:reductionBucket(file.size,blob.size),processing_time_bucket:timeBucket(start)});window.ttwTrackEvent("tool_process_success",baseParams(tracking));resultLink(box,blob,file.name.replace(/\\.[^.]+$/,"")+"."+ext(type),undefined,tracking);}catch(err){setMessage(box,unsupportedMessage,"error");trackProcessError("processing_failed",common);}});}
const bulk=$("[data-bulk]");
if(bulk){bulk.addEventListener("submit",async e=>{e.preventDefault();const start=performance.now();const box=$("[data-result]");const files=Array.from($("[data-file]",bulk).files);const maxWidth=Number($("[data-max-width]",bulk).value)||undefined;const common={output_format:"jpg",width_bucket:dimensionBucket(maxWidth),file_count:files.length};window.ttwTrackEvent("tool_process_start",baseParams(common));if(!files.length){setMessage(box,"Choose images first.","error");trackProcessError("no_file_selected",common);return;}if(files.some(file=>!isSupported(file))){setMessage(box,unsupportedMessage,"error");trackProcessError("unsupported_file",common);return;}setMessage(box,"Preparing downloads...");try{const quality=Number($("[data-quality]",bulk).value)/100;const links=[];for(const file of files.slice(0,20)){const blob=await processOne(file,{type:"image/jpeg",quality,maxWidth});const url=URL.createObjectURL(blob);links.push('<a class="button secondary" download="'+file.name.replace(/\\.[^.]+$/,"")+'-processed.jpg" href="'+url+'">'+file.name+' - '+size(blob.size)+'</a>');}const tracking=Object.assign({},common,{processing_time_bucket:timeBucket(start)});box.classList.remove("is-error");box.classList.add("is-success");box.innerHTML='<p>Prepared '+links.length+' download'+(links.length===1?'':'s')+'.</p><div class="download-list">'+links.join("")+'</div>';$$("a[download]",box).forEach(link=>link.addEventListener("click",()=>window.ttwTrackEvent("tool_result_download",baseParams(tracking)),{once:true}));window.ttwTrackEvent("tool_process_success",baseParams(tracking));}catch(err){setMessage(box,unsupportedMessage,"error");trackProcessError("processing_failed",common);}});}`;
}

function keywordMap() {
  const cell = (value) => String(value).replace(/\|/g, "\\|");
  const rows = [
    ["/image-compressor", "image compressor online", "compress image for email, reduce image size", "Compress images with quality control", "Tool page", "High", "Image Tools"],
    ["/image-resizer", "image resizer online", "resize image by pixels, resize photo online", "Resize dimensions", "Tool page", "High", "Image Tools"],
    ["/image-converter", "image converter online", "jpg png webp converter", "Change image format", "Tool page", "High", "Image Tools"],
    ["/bulk-image-tools", "bulk image compressor online", "bulk resize images, multiple image compressor", "Process many images", "Tool page", "Medium", "Image Tools"],
    ["/compress-image-to-20kb", "compress image to 20kb", "compress image under 20kb, image compressor 20kb, compress jpg to 20kb", "Meet strict upload size limit", "Long-tail tool page", "High", "Image Tools"],
    ["/compress-jpg-to-20kb", "compress jpg to 20kb", "compress jpeg to 20kb, reduce jpg size to 20kb, jpg compressor 20kb", "Meet strict JPG upload size limit", "Long-tail tool page", "High", "Image Tools"],
    ["/compress-jpg-to-50kb", "compress jpg to 50kb", "compress jpeg to 50kb, reduce jpg size to 50kb, jpg compressor 50kb", "Meet JPG upload size limit", "Long-tail tool page", "High", "Image Tools"],
    ["/compress-jpg-to-100kb", "compress jpg to 100kb", "compress jpeg to 100kb, reduce jpg size to 100kb, jpg compressor 100kb", "Meet common JPG upload size limit", "Long-tail tool page", "High", "Image Tools"],
    ["/compress-jpg-to-200kb", "compress jpg to 200kb", "compress jpeg to 200kb, reduce jpg size to 200kb, jpg compressor 200kb", "Meet quality-friendly JPG upload size limit", "Long-tail tool page", "High", "Image Tools"],
    ["/compress-image-to-50kb", "compress image to 50kb", "compress image under 50kb, image compressor 50kb, compress jpg to 50kb", "Meet upload size limit", "Long-tail tool page", "High", "Image Tools"],
    ["/compress-image-under-100kb", "compress image under 100kb", "photo under 100 kb, reduce image to 100kb", "Meet upload size limit", "Long-tail tool page", "High", "Image Tools"],
    ["/compress-image-under-200kb", "compress image under 200kb", "photo under 200 kb, image compressor 200kb", "Meet upload size limit", "Long-tail tool page", "High", "Image Tools"],
    ["/resize-image-for-online-form", "resize image for online form", "resize photo for form, form image resizer", "Prepare form upload", "Long-tail tool page", "High", "Image Tools"],
    ["/compress-photo-for-government-form", "compress photo for government form", "government form photo size, compress photo for portal", "Prepare official upload", "Long-tail tool page", "High", "Image Tools"],
    ["/convert-webp-to-jpg", "convert webp to jpg online", "webp to jpg converter", "Format compatibility", "Long-tail tool page", "High", "Image Tools"],
    ["/png-to-jpg", "png to jpg converter", "convert png to jpg online", "Smaller compatible image", "Long-tail tool page", "High", "Image Tools"],
    ["/jpg-to-png", "jpg to png converter", "convert jpg to png online", "Required PNG output", "Long-tail tool page", "Medium", "Image Tools"],
    ["/passport-photo-resizer", "resize passport photo online", "passport photo resizer, photo size for application", "Resize photo dimensions", "Long-tail tool page", "Medium", "Image Tools"],
  ];
  const roadmap = [
    ["PDF compressor", "PDF Tools", "Future file utility", "Do not publish until a real PDF compression tool exists."],
    ["JPG to PDF", "PDF Tools", "Future file conversion", "Do not publish until a real JPG to PDF workflow exists."],
    ["word counter", "Text Tools", "Future text utility", "Do not publish until a real counter exists."],
    ["age calculator", "Calculators", "Future calculator", "Do not publish until a real calculator exists."],
    ["QR code generator", "QR Tools", "Future QR utility", "Do not publish until a real QR generator exists."],
    ["JSON formatter", "Developer Tools", "Future developer utility", "Do not publish until a real formatter exists."],
    ["resume builder", "File Tools", "Future document utility", "Do not publish until a real builder exists."],
    ["AI email writer", "AI Tools", "Future AI utility", "Do not publish until an actual AI workflow and policy copy exist."],
  ];
  return `# TheTools.World SEO Keyword Map\n\nProduction domain: ${domain}\n\n${brand} is a broader utility tools brand. Current indexable tool pages focus on image utilities because those are the only live tools in this folder.\n\n| Page URL | Primary keyword | Secondary keywords | Search intent | Page type | Title | Meta description | Internal links to add | Priority | Future expansion category |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n${rows.map(([route, target, secondary, intent, pageType, priority, category]) => {
    const page = routes.find((p) => p.route === route);
    const links = route.includes("compress") ? "/image-resizer, /image-converter, /bulk-image-tools" : route.includes("resize") || route.includes("passport") ? "/image-compressor, /resize-image-for-online-form, /passport-photo-resizer" : "/image-compressor, /image-resizer, /bulk-image-tools";
    return `| ${domain}${route} | ${target} | ${secondary} | ${intent} | ${pageType} | ${cell(page.title)} | ${cell(page.description)} | ${links} | ${priority} | ${category} |`;
  }).join("\n")}\n\n## Future Roadmap Keywords\n\nThese are planning targets only. They should not be added to the sitemap or navigation as live pages until real tools exist.\n\n| Keyword | Future category | Intent | Publishing note |\n| --- | --- | --- | --- |\n${roadmap.map((row) => `| ${row[0]} | ${row[1]} | ${row[2]} | ${row[3]} |`).join("\n")}\n`;
}

function faviconSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="TheTools.World icon">
  <defs>
    <linearGradient id="g" x1="8" y1="6" x2="58" y2="58" gradientUnits="userSpaceOnUse">
      <stop stop-color="#155df5"/>
      <stop offset=".52" stop-color="#078fc9"/>
      <stop offset="1" stop-color="#19c6ac"/>
    </linearGradient>
  </defs>
  <rect x="3" y="3" width="58" height="58" rx="15" fill="url(#g)"/>
  <path d="M17 18h30M17 32h30M17 46h30" stroke="#fff" stroke-opacity=".14" stroke-width="3" stroke-linecap="round"/>
  <text x="32" y="42" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="900" letter-spacing="-1" fill="#fff">TW</text>
  <path d="M48 12l4 4-5.5 5.5-4-4L48 12Z" fill="#062a46" fill-opacity=".32"/>
</svg>
`;
}

function logoSvg() {
  return faviconSvg();
}

function horizontalLogoSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 48" role="img" aria-label="TheTools.World">
  <defs>
    <linearGradient id="g" x1="7" y1="5" x2="43" y2="43" gradientUnits="userSpaceOnUse">
      <stop stop-color="#155df5"/>
      <stop offset=".52" stop-color="#078fc9"/>
      <stop offset="1" stop-color="#19c6ac"/>
    </linearGradient>
  </defs>
  <rect x="2" y="2" width="44" height="44" rx="11" fill="url(#g)"/>
  <path d="M13 15h22M13 24h22M13 33h22" stroke="#fff" stroke-opacity=".14" stroke-width="2.2" stroke-linecap="round"/>
  <text x="24" y="32" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="19" font-weight="900" letter-spacing="-.8" fill="#fff">TW</text>
  <path d="M37 8.5l3 3-4.4 4.4-3-3 4.4-4.4Z" fill="#062a46" fill-opacity=".32"/>
  <text x="58" y="31" font-family="Inter, Arial, Helvetica, sans-serif" font-size="22" font-weight="850" letter-spacing="0" fill="#162235">TheTools</text>
  <text x="160" y="31" font-family="Inter, Arial, Helvetica, sans-serif" font-size="22" font-weight="850" letter-spacing="0" fill="#079b9b">.World</text>
</svg>
`;
}

function smokeTest() {
  return `import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pages = ${JSON.stringify(routes.map((p) => p.file), null, 2)};
const legacyPages = ${JSON.stringify(legacy.map((p) => p.file), null, 2)};
const forbiddenTerms = [
  "Tool" + "Pilot",
  "tool" + "pilot",
  "tool" + "pilot.vercel.app",
  "tool" + "pilot.example",
  "example" + "." + "com",
  "Image" + "Pilot",
  "image" + "pilot",
  "Image " + "Pilot",
  "Pixel" + "Flow",
  "pixel" + "flow",
  "The PDF " + "Buddy",
  "PDF " + "Buddy",
  "the" + "pdf" + "buddy",
  "Advertisement" + " (Your Ad Here)",
  "trusted" + " by",
  "mil" + "lions",
  "#" + "1",
];
const forbidden = forbiddenTerms.map((term) => term.toLowerCase());
let failures = 0;
const seenTitles = new Map();
const seenDescriptions = new Map();
const seenH1s = new Map();
const gaMeasurementId = "${gaMeasurementId}";
const appJs = fs.readFileSync(path.join(root, "assets/app.js"), "utf8");

function fail(message) {
  failures += 1;
  console.error("FAIL", message);
}

for (const file of pages) {
  const full = path.join(root, file);
  if (!fs.existsSync(full)) fail(\`\${file} is missing\`);
  const html = fs.readFileSync(full, "utf8");
  if (!/<title>[^<]+<\\/title>/.test(html)) fail(\`\${file} missing title\`);
  if (!/<meta name="description" content="[^"]+">/.test(html)) fail(\`\${file} missing meta description\`);
  if ((html.match(/<h1[\\s>]/g) || []).length !== 1) fail(\`\${file} must have exactly one h1\`);
  if ((html.match(/rel="canonical"/g) || []).length !== 1) fail(\`\${file} must have one canonical\`);
  if (!/<meta name="robots" content="index, follow">/.test(html)) fail(\`\${file} missing index, follow robots meta\`);
  if (!/<meta property="og:title" content="[^"]+">/.test(html)) fail(\`\${file} missing OG title\`);
  if (!/<meta property="og:description" content="[^"]+">/.test(html)) fail(\`\${file} missing OG description\`);
  if (!/<meta name="twitter:card" content="summary_large_image">/.test(html)) fail(\`\${file} missing Twitter card\`);
  if (!html.includes('href="/assets/favicon.svg"')) fail(\`\${file} missing SVG favicon\`);
  if (!html.includes('href="/site.webmanifest"')) fail(\`\${file} missing web manifest\`);
  if (!html.includes('<meta name="theme-color" content="#0f8fb3">')) fail(\`\${file} missing theme color\`);
  if ((html.match(/<meta name="google-adsense-account" content="ca-pub-1683614506940052">/g) || []).length !== 1) fail(\`\${file} must have exactly one AdSense ownership meta tag\`);
  if (!html.includes('"logo":"${domain}/assets/logo.svg"')) fail(\`\${file} missing Organization logo schema\`);
  if (!html.includes('src="/assets/logo.svg"')) fail(\`\${file} missing brand icon logo\`);
  if (!html.includes('class="brand-name"')) fail(\`\${file} missing readable brand name\`);
  if (!html.includes("${brand}")) fail(\`\${file} missing ${brand} branding\`);
  if (!html.includes("${domain}")) fail(\`\${file} missing ${domain} reference\`);
  if (!html.includes(gaMeasurementId)) fail(\`\${file} missing GA4 measurement ID\`);
  if (!html.includes("window.ttwLoadGA")) fail(\`\${file} missing lazy GA loader\`);
  if (/<script[^>]+googletagmanager\\.com\\/gtag\\/js/i.test(html)) fail(\`\${file} loads gtag.js immediately\`);
  if ((html.match(/gtag\\('config', 'G-63DE2LM99R'\\)|gtag\\("config", "G-63DE2LM99R"\\)|gtag\\('config', id\\)|gtag\\("config", id\\)/g) || []).length !== 1) fail(\`\${file} must have exactly one GA4 config call\`);
  if (/GTM-[A-Z0-9]+|googletagmanager\\.com\\/gtm\\.js|googletagmanager\\.com\\/ns\\.html/i.test(html)) fail(\`\${file} contains Google Tag Manager\`);
  if (/adsbygoogle|pagead2\\.googlesyndication\\.com/i.test(html)) fail(\`\${file} contains AdSense code\`);
  const title = html.match(/<title>([^<]+)<\\/title>/)?.[1]?.trim();
  const description = html.match(/<meta name="description" content="([^"]+)">/)?.[1]?.trim();
  const h1 = html.match(/<h1[^>]*>([^<]+)<\\/h1>/)?.[1]?.trim();
  for (const [label, value, map] of [["title", title, seenTitles], ["description", description, seenDescriptions], ["h1", h1, seenH1s]]) {
    if (!value) continue;
    if (map.has(value)) fail(\`\${file} duplicate \${label} with \${map.get(value)}\`);
    else map.set(value, file);
  }
  const lower = html.toLowerCase();
  for (const term of forbidden) if (lower.includes(term)) fail(\`\${file} contains forbidden reference \${term}\`);
  if (/href="\\/[^"]+\\.html"/.test(html)) fail(\`\${file} contains internal .html link\`);
  const internalLinks = [...html.matchAll(/href="(\\/[^"#?]+)"/g)].map((m) => m[1]);
  for (const href of internalLinks) {
    if (href.startsWith("/assets")) continue;
    if (href === "/site.webmanifest") continue;
    const target = href === "/" ? "index.html" : href.slice(1) + ".html";
    if (!fs.existsSync(path.join(root, target))) fail(\`\${file} links to missing \${href}\`);
  }
}

if (!appJs.includes("window.ttwTrackEvent")) fail("assets/app.js missing custom event helper");
for (const eventName of ["tool_upload_selected", "tool_process_start", "tool_process_success", "tool_process_error", "tool_result_download", "related_tool_click"]) {
  if (!appJs.includes(eventName)) fail(\`assets/app.js missing \${eventName}\`);
}
if (!appJs.includes("window.ttwLoadGA")) fail("assets/app.js does not call lazy GA loader");
if (/file_name|file_path|file_content|file_contents|raw_error/i.test(appJs)) fail("assets/app.js includes unsafe GA parameter names");

for (const file of legacyPages) {
  const full = path.join(root, file);
  if (!fs.existsSync(full)) fail(\`\${file} legacy redirect is missing\`);
  const html = fs.readFileSync(full, "utf8");
  if (!/<meta name="robots" content="noindex, follow">/.test(html)) fail(\`\${file} legacy page must be noindex, follow\`);
  if (!/<meta http-equiv="refresh"/.test(html)) fail(\`\${file} legacy page missing refresh redirect\`);
  if (!html.includes('href="/assets/favicon.svg"')) fail(\`\${file} legacy page missing SVG favicon\`);
  if (!html.includes('href="/site.webmanifest"')) fail(\`\${file} legacy page missing web manifest\`);
}

for (const asset of ["assets/favicon.svg", "assets/logo.svg", "assets/logo-horizontal.svg", "assets/site-icon.svg", "assets/apple-touch-icon.svg", "assets/favicon-48.svg", "site.webmanifest"]) {
  if (!fs.existsSync(path.join(root, asset))) fail(\`\${asset} is missing\`);
}

const manifest = JSON.parse(fs.readFileSync(path.join(root, "site.webmanifest"), "utf8"));
if (manifest.name !== "${brand}") fail("manifest has wrong name");
if (manifest.short_name !== "TheTools") fail("manifest has wrong short_name");
if (!JSON.stringify(manifest.icons || []).includes("/assets/site-icon.svg")) fail("manifest missing site icon");

const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
const robotsTxt = fs.readFileSync(path.join(root, "robots.txt"), "utf8");
const llmsTxtPath = path.join(root, "llms.txt");
const adsTxtPath = path.join(root, "ads.txt");
if (!fs.existsSync(adsTxtPath)) fail("ads.txt is missing");
else if (fs.readFileSync(adsTxtPath, "utf8").trim() !== "google.com, pub-1683614506940052, DIRECT, f08c47fec0942fa0") fail("ads.txt has incorrect content");
if (!fs.existsSync(llmsTxtPath)) fail("llms.txt is missing");
else {
  const llmsTxt = fs.readFileSync(llmsTxtPath, "utf8");
  for (const required of ["TheTools.World", "${domain}/image-compressor", "${domain}/compress-jpg-to-100kb", "Do not claim guaranteed exact file size results"]) {
    if (!llmsTxt.includes(required)) fail(\`llms.txt missing \${required}\`);
  }
}
if (!robotsTxt.includes("Sitemap: ${domain}/sitemap.xml")) fail("robots.txt missing sitemap reference");
if (!sitemap.includes("${domain}")) fail("sitemap missing ${domain}");
if (/\\.html<\\/loc>|robots\\.txt|ads\\.txt|llms\\.txt|404/i.test(sitemap)) fail("sitemap contains utility, redirect, or non-canonical URLs");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\\/loc>/g)].map((m) => m[1]);
const expectedUrls = new Set(${JSON.stringify(routes.map((p) => `${domain}${p.route === "/" ? "" : p.route}`), null, 2)});
if (sitemapUrls.length !== expectedUrls.size) fail("sitemap URL count does not match public routes");
for (const url of sitemapUrls) if (!expectedUrls.has(url)) fail(\`sitemap includes unexpected URL \${url}\`);
for (const route of ${JSON.stringify(routes.map((p) => p.route), null, 2)}) {
  const url = \`${domain}\${route === "/" ? "" : route}\`;
  if (!sitemap.includes(url)) fail(\`sitemap missing \${url}\`);
}
const linkedRoutes = new Set(["/"]);
for (const file of pages) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  for (const match of html.matchAll(/href="(\\/[^"#?]+)"/g)) {
    const href = match[1];
    if (href.startsWith("/assets") || href === "/site.webmanifest") continue;
    linkedRoutes.add(href);
  }
}
for (const route of ${JSON.stringify(routes.map((p) => p.route), null, 2)}) {
  if (route !== "/" && !linkedRoutes.has(route)) fail(\`sitemap route is orphaned from internal links: \${route}\`);
}
for (const [file, route] of ${JSON.stringify(routes.map((p) => [p.file, p.route]), null, 2)}) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  const canonical = html.match(/<link rel="canonical" href="([^"]+)">/)?.[1];
  const expected = \`${domain}\${route === "/" ? "" : route}\`;
  if (canonical !== expected) fail(\`\${file} canonical mismatch\`);
  if (!sitemap.includes(expected)) fail(\`\${file} canonical missing from sitemap\`);
}
if (sitemap.includes("${domain}/404")) fail("404 is in sitemap");
for (const rankingRoute of ["/compress-jpg-to-20kb", "/compress-jpg-to-100kb", "/compress-jpg-to-200kb", "/passport-photo-resizer", "/resize-image-for-online-form", "/image-converter"]) {
  const file = rankingRoute.slice(1) + ".html";
  if (!fs.existsSync(path.join(root, file))) fail(\`important ranking URL missing \${rankingRoute}\`);
}
for (const file of ["image-converter.html", "convert-webp-to-jpg.html", "png-to-jpg.html", "jpg-to-png.html"]) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  if ((html.match(/<h2>/g) || []).length < 4) fail(\`\${file} needs meaningful content sections\`);
  if (!html.includes("FAQPage")) fail(\`\${file} missing FAQPage schema for visible FAQ\`);
}
for (const file of ["about.html", "contact.html"]) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  const title = html.match(/<title>([^<]+)<\\/title>/)?.[1]?.trim();
  const h1 = html.match(/<h1[^>]*>([^<]+)<\\/h1>/)?.[1]?.trim();
  if (title === h1) fail(\`\${file} title and h1 must differ\`);
}
for (const file of pages) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  if (/click\\s+(on\\s+)?ads|adsbygoogle|aggregateRating|ratingValue|reviewRating|best in the world|trusted by millions|#1/i.test(html)) fail(\`\${file} contains unsafe ad, rating, or fake trust language\`);
  if (/guaranteed exact (compression|file size|output)|guarantee an exact (compression|file size|output)/i.test(html)) fail(\`\${file} contains guaranteed exact compression claim\`);
}

function visibleText(html) {
  const main = html.match(/<main[^>]*>([\\s\\S]*?)<\\/main>/)?.[1] || html;
  return main
    .replace(/<script[\\s\\S]*?<\\/script>/gi, " ")
    .replace(/<style[\\s\\S]*?<\\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&amp;|&lt;|&gt;|&quot;/g, " ")
    .replace(/\\s+/g, " ")
    .trim();
}

function wordCount(html) {
  return (visibleText(html).match(/\\b[a-z0-9][a-z0-9-]*\\b/gi) || []).length;
}

function faqSchemaObjects(html, file) {
  const schemas = [];
  for (const match of html.matchAll(/<script type="application\\/ld\\+json">([\\s\\S]*?)<\\/script>/g)) {
    try {
      const parsed = JSON.parse(match[1]);
      if (parsed && parsed["@type"] === "FAQPage") schemas.push(parsed);
    } catch (error) {
      fail(\`\${file} has invalid JSON-LD\`);
    }
  }
  return schemas;
}

for (const file of pages) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  const minWords = ["privacy-policy.html", "terms.html", "sitemap.html", "contact.html"].includes(file) ? 130 : file === "about.html" ? 240 : 320;
  if (wordCount(html) < minWords) fail(\`\${file} content depth is below \${minWords} words\`);
  const visibleFaq = [...html.matchAll(/<details><summary>([\\s\\S]*?)<\\/summary><p>([\\s\\S]*?)<\\/p><\\/details>/g)].map((match) => ({
    question: match[1].replace(/<[^>]+>/g, "").trim(),
    answer: match[2].replace(/<[^>]+>/g, "").trim(),
  }));
  const faqSchemas = faqSchemaObjects(html, file);
  if (faqSchemas.length && !visibleFaq.length) fail(\`\${file} has FAQPage schema without visible FAQ\`);
  if (visibleFaq.length && faqSchemas.length !== 1) fail(\`\${file} visible FAQ must have exactly one FAQPage schema\`);
  if (faqSchemas.length === 1) {
    const schemaItems = faqSchemas[0].mainEntity || [];
    if (schemaItems.length !== visibleFaq.length) fail(\`\${file} FAQ schema count does not match visible FAQ\`);
    visibleFaq.forEach((item, index) => {
      const schemaItem = schemaItems[index] || {};
      if (schemaItem.name !== item.question) fail(\`\${file} FAQ question mismatch at \${index + 1}\`);
      if (schemaItem.acceptedAnswer?.text !== item.answer) fail(\`\${file} FAQ answer mismatch at \${index + 1}\`);
    });
  }
  if (/aggregateRating|reviewRating|ratingValue|"Review"|"Rating"/i.test(html)) fail(\`\${file} contains fake rating or review schema\`);
}

for (const file of ["image-compressor.html", "image-resizer.html", "bulk-image-tools.html", "resize-image-for-online-form.html", "compress-photo-for-government-form.html", "passport-photo-resizer.html"]) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  for (const required of ["How to", "Troubleshooting", "Related tools", "FAQ"]) {
    if (!html.includes(required)) fail(\`\${file} missing required content section: \${required}\`);
  }
}

if (failures) process.exit(1);
console.log(\`Smoke checks passed for \${pages.length} public pages.\`);
`;
}

function notFound() {
  const page = { route: "/404", title: "Page Not Found - TheTools.World", description: "The requested TheTools.World page could not be found.", h1: "Page not found", kind: "404" };
  return `${head(page)}
  <main id="main">
    <section class="page-hero">
      <p class="eyebrow">${brand}</p>
      <h1>Page not found</h1>
      <p>The page may have moved. Use the sitemap or return home to find the image tool you need.</p>
      <p><a class="button primary" href="/">Go home</a> <a class="button secondary" href="/sitemap">View sitemap</a></p>
    </section>
  </main>
${footer()}`;
}

for (const page of routes) {
  const content = page.kind === "home" ? homePage(page) : ["about", "contact", "privacy", "terms", "sitemap"].includes(page.kind) ? infoPage(page) : toolPage(page);
  write(page.file, content);
}
for (const item of legacy) write(item.file, legacyPage(item));
write("404.html", notFound());
write("assets/styles.css", css());
write("assets/app.js", js());
write("assets/favicon.svg", faviconSvg());
write("assets/logo.svg", logoSvg());
write("assets/logo-horizontal.svg", horizontalLogoSvg());
write("assets/site-icon.svg", logoSvg());
write("assets/apple-touch-icon.svg", logoSvg());
write("assets/favicon-48.svg", faviconSvg());
write("site.webmanifest", webManifest());
write("sitemap.xml", sitemapXml());
write("robots.txt", robots());
write("llms.txt", llmsTxt());
write("vercel.json", vercelJson());
write("seo-keyword-map.md", keywordMap());
write("tests/smoke-static.mjs", smokeTest());

console.log(`Built ${routes.length} public pages for ${brand}.`);
