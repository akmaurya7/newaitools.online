import type { ToolAnalysis } from './types.ts';

export const removeBgAnalysis: ToolAnalysis = {
  lastVerified: '2026-09-29',
  summary: 'AI background remover for people, products, animals, cars and other foregrounds. Active today, but the standalone product is being consolidated into Canva and the API is moving to Leonardo.Ai on December 1, 2026.',
  company: 'Kaleido / remove.bg, part of Canva since Canva acquired Kaleido in 2021; the site identifies remove.bg as a Canva Austria GmbH brand.',
  officialUrl: 'https://www.remove.bg/',
  status: 'Active but transitional; plan around the December 1, 2026 migration.',
  targetUsers: ['E-commerce and catalog teams','Photographers and marketers','Designers and creators','Developers and automation teams'],
  problemSolved: 'Automatically separates a foreground from its background so users can create transparent cutouts without manual masking.',
  howItWorks: 'Upload an image or provide a URL. The background-removal AI detects the foreground and returns a cutout. The API exposes resolution, type, crop, ROI, background, format, scale, position and shadow controls. Leonardo says its remove-bg API uses the same background-removal model.',
  features: [
    { name: 'Automatic cutouts', detail: 'People, products, animals, cars and other foregrounds.' },
    { name: 'High resolution', detail: 'API supports up to 50MP; PNG up to 10MP, JPG/WebP/ZIP up to 50MP.' },
    { name: 'Finishing controls', detail: 'Crop, ROI, scale, position, backgrounds, foreground type and shadows.' },
    { name: 'Apps and plugins', detail: 'Windows, Mac, Linux, Photoshop, Android and API workflows.' }
  ],
  aiAndModels: 'No public foundation-model name is given in the reviewed remove.bg documentation. Leonardo.Ai says its remove-bg API exposes the same model that previously powered remove.bg.',
  inputsOutputs: 'API accepts image_file, image_file_b64 or image_url. Outputs include PNG, JPG, WebP and ZIP under documented resolution rules.',
  limits: ['Standalone service is scheduled to migrate December 1, 2026.','Free website output is up to 0.25MP and free/no-account use is non-commercial.','API input is up to 50MP and 22MB.','Rate limit is up to 500MP/minute, resolution dependent.','High-resolution API images use credits; previews use 0.25 credits in API/apps.','Leonardo changes endpoint, auth, payload/response and some formats/metadata.'],
  useCases: ['E-commerce product cutouts','Headshots and profile images','Social, ads and presentations','Batch processing','Automated image pipelines'],
  poorFit: ['New long-lived standalone dependencies','Integrations unable to absorb API migration','Commercial use on free/no-account access','Images that cannot be uploaded to cloud services','Users needing a full professional editor'],
  pricing: [
    { name: 'Free', detail: 'Website previews up to 0.25MP are free for personal use; help docs also describe a bonus credit and 50 free API/app previews per month.' },
    { name: 'Pay-as-you-go', detail: 'Current pricing lists 3 credits for $3. Credits expire December 1, 2026 at 9:00 AM CET.' },
    { name: 'Subscription', detail: 'Current pricing lists 40 credits for $9/month with max-quality exports, automation, API/integrations and bulk editing.' },
    { name: 'Enterprise', detail: 'Starts at 100,000 images/year with flexible API, credits, rate limits and premium support.' },
    { name: 'Commercial use', detail: 'Allowed on subscription plans and full-resolution PAYG; free/no-account is non-commercial.' }
  ],
  integrations: ['Windows/Mac/Linux apps','Photoshop extension','Android app','HTTP API','Official/third-party libraries','cURL, Node.js, Python, Ruby, PHP, Java, .NET, Swift and Objective-C examples'],
  developer: ['Current API: POST https://api.remove.bg/v1.0/removebg with X-API-Key; OAuth 2.0 is documented.','Supports multipart, base64 and URL input; exposes credit/foreground metadata.','429 rate-limit responses do not charge credits.','Leonardo target: POST https://cloud.leonardo.ai/api/rest/v2/generationssync with Bearer auth and model remove-bg.','Leonardo supports ephemeral=true for no-storage behavior and async workflows with webhooks.'],
  privacy: 'remove.bg says uploads use SSL/TLS, are used for background removal and deleted at latest about one hour after website upload; API images are deleted after processing. It says normal uploads are not used to train the AI; optional Improvement Program submissions may be used for improvement. Leonardo has different default storage, so ephemeral=true matters during migration.',
  ownership: 'Commercial use is permitted on eligible paid paths; free/no-account use is non-commercial. A cutout does not grant rights to the source image. Keep originals and use an eligible commercial plan for client/marketplace work.',
  alternatives: [
    { name: 'Canva Background Remover', detail: 'Official consumer/design destination; includes removal and erase/restore refinement.' },
    { name: 'Leonardo.Ai Background Removal API', detail: 'Official API migration target; same remove-bg model with broader creative tooling but changed API semantics.' },
    { name: 'Adobe Photoshop', detail: 'Better for professional editing and compositing around the cutout.' },
    { name: 'Photopea', detail: 'Useful for browser-based manual masking and broader editing.' }
  ],
  strengths: ['Very simple workflow','Mature high-resolution API','Useful production controls','Fast cutout generation','Documented deletion behavior'],
  limitations: ['Published standalone end date','Free/no-account use is non-commercial','Credit-based API','Migration changes API contract','Difficult edges may need manual cleanup'],
  workflow: ['1. Test representative images at final output size.','2. Use an eligible commercial plan for paid/client work.','3. For batches, standardize inputs and monitor credits/retries.','4. Record endpoint, parameters and output assumptions before migration.','5. Migrate self-serve API integrations before December 1, 2026 and test real workloads.','6. On Leonardo, use ephemeral=true when no-storage behavior is required.','7. Keep human review for important assets.'],
  takeaway: 'remove.bg remains useful today but is transitional. Canva is the consumer/design destination and Leonardo.Ai is the announced API destination. For new projects, choose the long-term destination rather than creating a fresh dependency on standalone remove.bg.',
  sources: [
    { title: 'remove.bg FAQ: moving to Canva', publisher: 'remove.bg', url: 'https://www.remove.bg/faq', type: 'official' },
    { title: 'remove.bg API documentation', publisher: 'remove.bg', url: 'https://www.remove.bg/api', type: 'official' },
    { title: 'remove.bg pricing', publisher: 'remove.bg', url: 'https://www.remove.bg/pricing', type: 'official' },
    { title: 'Commercial use policy', publisher: 'remove.bg', url: 'https://www.remove.bg/help/a/can-i-use-remove-bg-for-commercial-purposes', type: 'official' },
    { title: 'Image safety and deletion', publisher: 'remove.bg', url: 'https://www.remove.bg/help/a/are-my-images-safe', type: 'official' },
    { title: 'Image training policy', publisher: 'remove.bg', url: 'https://www.remove.bg/help/a/do-you-use-my-images-to-train-the-ai', type: 'official' },
    { title: 'remove.bg API is Moving to Leonardo.Ai', publisher: 'Leonardo.Ai', url: 'https://www.leonardo.ai/news/removebg-api-leonardo', type: 'official' },
    { title: 'Migrate from remove.bg API to Leonardo.Ai', publisher: 'Leonardo.Ai Documentation', url: 'https://docs.leonardo.ai/docs/migrate-from-the-removebg-api-to-leonardoai', type: 'official' },
    { title: 'Canva Background Remover', publisher: 'Canva', url: 'https://www.canva.com/features/background-remover/', type: 'official' },
    { title: 'remove.bg pricing and review context', publisher: 'Capterra', url: 'https://www.capterra.com/p/10014638/RemoveBG/', type: 'independent' }
  ]
};