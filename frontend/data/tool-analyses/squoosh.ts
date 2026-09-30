import type { ToolAnalysis } from './types.ts';

export const squooshAnalysis: ToolAnalysis = {
  lastVerified: '2026-09-30',
  summary: 'An open-source browser-based image compression and format-conversion app from Google Chrome Labs. Squoosh runs the image processing locally in the browser and exposes codec controls for reducing file size while inspecting visual quality.',
  company: 'Google Chrome Labs / the Squoosh open-source project.',
  officialUrl: 'https://squoosh.app/',
  status: 'Active as a publicly available web app and open-source project, but not an AI model service. The upstream GitHub repository remains the authoritative source for the current implementation and documents local processing.',
  targetUsers: ['Web developers optimizing page assets','Designers preparing web images','Frontend teams working on Core Web Vitals and performance','Photographers and creators needing quick format conversion','Privacy-conscious users who do not want to upload images to a compression service'],
  problemSolved: 'Reduces image file sizes and converts images to modern web formats without requiring a server upload, while letting the user compare output quality and compression settings before downloading.',
  howItWorks: 'The web app loads image codecs into the browser, decodes the selected image, applies optional resizing and encoding, and shows a before/after comparison. The compression work happens locally rather than by sending the image to a remote processing service.',
  features: [
    { name: 'Visual before/after comparison', detail: 'The interface lets users compare the original and compressed result and inspect the effect of codec settings.' },
    { name: 'Modern image codecs', detail: 'The project includes browser/WASM implementations for formats and encoders such as AVIF, WebP, MozJPEG and OxiPNG; the exact options depend on the current app build.' },
    { name: 'Format conversion', detail: 'An image can be decoded and exported in another supported format, making Squoosh useful for modern web-image migration as well as compression.' },
    { name: 'Resize and preprocessing', detail: 'The app can resize images before encoding, which is often more effective than compression alone for oversized web assets.' },
    { name: 'Local processing', detail: 'The official repository states that image data is not sent to a server and compression is performed locally.' },
    { name: 'Progressive codec loading', detail: 'Codec work is implemented with WebAssembly and browser workers so heavier processing can run without turning the app into a server-side upload workflow.' }
  ],
  aiAndModels: 'Not applicable. Squoosh is an image-processing utility, not a generative-AI product and does not expose a foundation model, model selector or AI credits. Its core technology is conventional image codecs compiled for browser execution.',
  inputsOutputs: 'Input is a local image selected or dropped into the browser. Outputs are downloaded compressed or converted image files. Common workflows include JPEG, PNG, WebP and AVIF; the exact codec availability should be checked in the current app because the open-source project can evolve.',
  limits: ['Large images can consume substantial browser memory and CPU time.','Compression speed depends on the device and browser because processing is local.','There is no built-in server-side batch pipeline or hosted image CDN.','Codec support and encoder options are constrained by what the current web build ships.','Squoosh is a manual optimization tool rather than a complete asset-management or deployment system.'],
  useCases: ['Compress hero images before publishing a website','Convert legacy JPEG/PNG assets to WebP or AVIF','Experiment with quality settings while checking visual artifacts','Resize oversized photos for responsive web delivery','Optimize images for Core Web Vitals and page weight','Process sensitive images locally when server upload is undesirable'],
  poorFit: ['Large enterprise pipelines requiring centralized batch processing','Teams that need automatic optimization integrated into every build or CMS upload','Users needing cloud asset storage, DAM, collaboration or publishing features','Very large image collections where a local CLI/build pipeline is more efficient'],
  pricing: [
    { name: 'Squoosh web app', detail: 'Free to use. There is no paid Squoosh subscription or AI credit system documented by the open-source project.' },
    { name: 'Open-source software', detail: 'The GoogleChromeLabs/squoosh repository is licensed under Apache-2.0, subject to the license terms and third-party codec licenses included by the project.' }
  ],
  integrations: ['Web browsers','Progressive Web App installation','Open-source codec ecosystem','jSquash and related browser/WebAssembly codec projects'],
  developer: ['The main project is a web application rather than a stable hosted compression API.','The open-source repository can be built and self-hosted, and its codecs have inspired reusable WebAssembly packages such as jSquash.','For automated server/build pipelines, developers commonly use dedicated libraries or tools such as Sharp rather than treating the Squoosh website as an API.'],
  privacy: 'The official Squoosh repository states that images are not sent to a server and that compression happens locally. It also states that Squoosh uses Google Analytics and collects basic visitor data plus before/after image-size values. Therefore the image pixels can remain local while the site still has analytics telemetry.',
  ownership: 'Squoosh is a processing tool rather than a content marketplace. It does not claim ownership of the image you process. Users remain responsible for the rights to their source images and for complying with the licenses of any codecs or software they redistribute when building derivative software.',
  alternatives: [
    { name: 'Sharp', detail: 'A strong choice for automated Node.js/server/build pipelines, with programmatic resizing and format conversion.' },
    { name: 'ImageMagick', detail: 'A mature command-line image-processing suite suited to scripting, batch jobs and server environments.' },
    { name: 'Cloudinary', detail: 'Better when optimization must be combined with hosted asset management, transformations, delivery and CDN workflows.' },
    { name: 'TinyPNG/TinyJPG', detail: 'Convenient hosted compression service, but the workflow involves uploading images to a remote service.' }
  ],
  strengths: ['Free and easy to try','No image upload required for the normal web workflow','Excellent visual feedback for quality-versus-size decisions','Useful support for modern web formats','Open-source implementation','Good fit for one-off developer and design tasks'],
  limitations: ['Manual rather than pipeline-first','Local browser processing can be slower for very large jobs','Not an image CDN or DAM','No first-party hosted batch API comparable to commercial optimization platforms','Analytics exist even though image pixels are processed locally'],
  workflow: ['1. Start with the original image and keep an untouched source copy.','2. Drop the image into Squoosh and inspect the original dimensions and file size.','3. Resize to the largest display dimensions actually required by the site.','4. Choose a target format such as WebP or AVIF when browser support and project requirements allow it.','5. Adjust quality while comparing the output visually, paying special attention to text, faces, gradients and fine detail.','6. Download the optimized file and use it in the website or asset pipeline.','7. For repeatable production optimization, move the chosen settings into a build-time tool such as Sharp rather than manually repeating the Squoosh workflow.'],
  takeaway: 'Squoosh is best understood as a privacy-friendly, visual image optimization workbench rather than an AI tool. It is excellent for deciding the right dimensions, format and quality settings for a web asset, especially when you want the image to stay on your device. Once the optimization rules are known and the task becomes repetitive, a scripted build pipeline is usually the better production choice.',
  sources: [
    { title: 'Squoosh official web app', publisher: 'Google Chrome Labs / Squoosh', url: 'https://squoosh.app/', type: 'official' },
    { title: 'Squoosh GitHub repository and README', publisher: 'Google Chrome Labs', url: 'https://github.com/GoogleChromeLabs/squoosh', type: 'official' },
    { title: 'Squoosh privacy documentation', publisher: 'Google Chrome Labs', url: 'https://github.com/GoogleChromeLabs/squoosh#privacy', type: 'official' },
    { title: 'Serving AVIF Images with Squoosh', publisher: 'web.dev', url: 'https://web.dev/codelabs/avif', type: 'independent' },
    { title: 'jSquash browser/Web Worker codecs', publisher: 'jSquash', url: 'https://github.com/jamsinclair/jSquash', type: 'independent' }
  ]
};