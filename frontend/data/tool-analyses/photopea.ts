import type { ToolAnalysis } from './types.ts';

export const photopeaAnalysis: ToolAnalysis = {
  lastVerified: '2026-09-30',
  summary: 'A browser-based, Photoshop-like image editor that runs primarily on the user device. It supports PSD, raster, vector, RAW and many other formats, plus JavaScript scripting, plugins and an embeddable API.',
  company: 'Photopea, the independent product behind photopea.com.',
  officialUrl: 'https://www.photopea.com/',
  status: 'Active and mature; the editor is continuously delivered as a web application and also has paid distribution, school and self-hosted options.',
  targetUsers: ['Graphic designers and freelancers','Students and teachers','Social-media creators','Small businesses and e-commerce teams','Developers embedding image editing into products'],
  problemSolved: 'Provides a full-featured image editor in a browser without requiring a desktop installation, while preserving workflows built around PSD and other professional graphics formats.',
  howItWorks: 'Photopea loads its editor into the browser and performs normal editing on the device. Users can open local files, edit layered documents, export formats, optionally connect cloud storage, or integrate Photopea into another product through URL configuration, iframe embedding, scripts and Live Messaging.',
  features: [
    { name: 'Professional raster editing', detail: 'Layers, masks, blending, layer styles, smart objects, adjustment layers, channels, paths, filters and tools such as Liquify and Puppet Warp.' },
    { name: 'PSD-first workflow', detail: 'PSD is the primary format and Photopea supports opening and saving PSD documents.' },
    { name: 'Broad format support', detail: 'Official product pages list PNG, JPG, GIF, BMP, WEBP, SVG, PDF, AI, AVIF, DDS, HEIC, TIFF, MP4, TGA, CDR, PDN, EPS, INDD, Figma and 40+ other formats.' },
    { name: 'RAW support', detail: 'Opens DNG, CR2, CR3, NEF, ARW, RW2, RAF, ORF and FFF RAW files with exposure, color and tonal controls.' },
    { name: 'AI-assisted editing', detail: 'Current product pages advertise one-click background removal and text-described replacement of image regions.' },
    { name: 'Vector editing', detail: 'Create and edit vector graphics inside the same editor.' }
  ],
  aiAndModels: 'Photopea documents the AI capabilities but does not identify a named foundation model in the reviewed product documentation. Some API examples expose third-party AI services such as Dezgo for Magic Replace and Remove BG.',
  inputsOutputs: 'Inputs include local files, URLs/data URIs through the API, cloud-storage files and resources such as fonts, brushes and gradients. Outputs include PSD and common raster/vector formats; scripts can also send binary exports to an embedding application.',
  limits: ['Performance depends heavily on the user device because editing is local.','Closing the editor without saving can lose unsaved work.','Browser compatibility and extensions can affect behavior.','The API documentation describes the API as an early-stage feature and warns of possible critical bugs.','Cloud-storage access is optional and requires explicit access by the user.'],
  useCases: ['PSD editing without Photoshop','Product-photo cleanup and e-commerce graphics','Social-media graphics and thumbnails','Logo, icon and vector work','Student and classroom graphics','Batch resizing, watermarking or format conversion with scripts','Embedding an editor inside a SaaS product'],
  poorFit: ['Teams requiring a fully managed cloud DAM/editor by default','Workloads that need server-side rendering without building an integration around the editor','Users whose devices are too weak for large layered files','Organizations needing enterprise support terms comparable to large commercial creative suites'],
  pricing: [
    { name: 'Free editor', detail: 'The editor can be used for free without an account. Photopea says all available free functionality can be used without paying.' },
    { name: 'Premium', detail: 'Premium removes advertising and has historically been sold as time-limited access. The current account documentation says Premium is managed from the Account window; verify the live price before purchase because pricing can change.' },
    { name: 'API', detail: 'The documented Photopea API is free to use. The documentation points to Distributor/whitelabel and self-hosted offerings for organizations embedding the editor commercially.' },
    { name: 'Schools', detail: 'Photopea documents school pricing starting at $450/year for a whole school without ads.' },
    { name: 'Self-hosted', detail: 'The official account documentation lists self-hosted pricing of $500-$2,000/month, normally paid annually, with two updates per year included.' }
  ],
  integrations: ['Dropbox','Google Drive','OneDrive','Photopea plugins','Iframe embedding','Custom storage through Live Messaging','Fonts, brushes and gradients as resources'],
  developer: ['URL API can preload files/resources, configure an outer server for saving, set environment options and run scripts.','Live Messaging lets an outer webpage send JavaScript or ArrayBuffers to Photopea and receive strings or exported binary files back.','Plugins are JSON configurations pointing to a plugin website and can exchange files and scripts with Photopea.','JavaScript scripting exposes an application/document/layer model and includes methods such as saveToOE for embedded workflows.','The API documentation says API usage is completely free.'],
  privacy: 'Photopea states that files opened in the editor never leave the device and are processed locally. If a user logs in, account data such as name, email, settings and payment-related information can be stored on Photopea servers. Optional cloud integrations transfer files directly between the device/editor and the selected cloud storage over HTTPS. Embedding can deliberately add a server-save path, so privacy depends on the integration configuration.',
  ownership: 'Photopea states in its terms that users own their work, may sell work created in Photopea, and do not owe Photopea a share or attribution. This does not transfer rights in source assets, fonts, stock imagery or third-party material used in a design.',
  alternatives: [
    { name: 'Adobe Photoshop', detail: 'Stronger desktop ecosystem, advanced professional workflows and Adobe integrations, but requires a paid Adobe plan.' },
    { name: 'GIMP', detail: 'Free and open-source desktop image editor; better suited to users who want a local installed application and extensibility.' },
    { name: 'Canva', detail: 'Better for template-driven design, collaboration and quick marketing content than pixel-level PSD editing.' },
    { name: 'Pixlr', detail: 'Another browser-based image-editing option, generally oriented toward lighter web editing.' }
  ],
  strengths: ['Free entry point with no account required','Runs in a browser and works across devices','Strong PSD compatibility','Very broad format support','Local processing is a major privacy advantage','Powerful scripting and embedding APIs','Cloud storage can be connected without making Photopea the permanent file store'],
  limitations: ['Large projects can be constrained by browser/device memory and CPU/GPU','Some advanced features depend on third-party services','API documentation warns that the API is early-stage','Local-first processing means there is no automatic cloud backup of unsaved work','The interface is closer to a professional editor than a beginner-first design tool'],
  workflow: ['1. Open Photopea and import the PSD, RAW, vector or raster asset.','2. Work with layers, masks, smart objects and adjustments rather than flattening early.','3. Use AI tools for quick background or generative edits, then inspect edges manually.','4. Save the working document as PSD and export delivery formats separately.','5. For repeated operations, create a JavaScript script and test it on representative files.','6. For a SaaS product, embed Photopea in an iframe and use Live Messaging/custom storage so your application controls open/save behavior.','7. For sensitive files, keep the local workflow or explicitly review any cloud/API save path before deployment.'],
  takeaway: 'Photopea is unusually strong when the requirement is “professional image editing in a browser, especially PSD, without uploading the working file.” Its local-first model, broad format support and developer APIs make it more than a simple Photoshop clone. It is a particularly good fit for freelancers, students, e-commerce teams and products that need an embeddable editor, while heavy collaborative cloud workflows may be better served by a purpose-built cloud design platform.',
  sources: [
    { title: 'Photopea official editor', publisher: 'Photopea', url: 'https://www.photopea.com/', type: 'official' },
    { title: 'Photopea API', publisher: 'Photopea', url: 'https://www.photopea.com/api/', type: 'official' },
    { title: 'Photopea Live Messaging API', publisher: 'Photopea', url: 'https://www.photopea.com/api/live', type: 'official' },
    { title: 'Photopea Plugins API', publisher: 'Photopea', url: 'https://www.photopea.com/api/plugins', type: 'official' },
    { title: 'Photopea Scripts', publisher: 'Photopea', url: 'https://www.photopea.com/learn/scripts', type: 'official' },
    { title: 'Photopea Accounts and self-hosting', publisher: 'Photopea', url: 'https://www.photopea.com/api/accounts', type: 'official' },
    { title: 'Photopea Privacy Policy and Terms', publisher: 'Photopea', url: 'https://www.photopea.com/privacy.html', type: 'official' },
    { title: 'Photopea for Schools', publisher: 'Photopea', url: 'https://www.photopea.com/schools/', type: 'official' },
    { title: 'Photopea Premium', publisher: 'Photopea Blog', url: 'https://blog.photopea.com/photopea-premium.html', type: 'official' }
  ]
};
