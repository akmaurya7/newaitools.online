import type { ToolAnalysis } from './types.ts';

export const adobeFireflyAnalysis: ToolAnalysis = {
  lastVerified: '2026-09-27',
  summary: 'Adobe Firefly is Adobe’s generative-creative platform for producing and editing images, video, audio and design assets, with Adobe’s own Firefly models plus a growing set of partner models. Its main advantage is not simply generation: outputs can move directly into Adobe creative workflows, while Firefly Services exposes APIs for production-scale automation.',
  company: 'Adobe',
  officialUrl: 'https://firefly.adobe.com/',
  status: 'Active and rapidly expanding. Current Firefly combines Adobe models, partner-model selection, Boards and creative generation/editing workflows, while Firefly Services provides developer APIs for image generation, compositing, upscaling and other creative automation.',
  targetUsers: [
    'Designers, marketers and content teams producing campaign and brand assets.',
    'Photographers and creative professionals who want generative editing alongside Photoshop and other Adobe tools.',
    'Video and audio teams using generative video, sound, voice and localization workflows.',
    'Developers and enterprise teams that need to automate creative production through Firefly Services APIs.'
  ],
  problemSolved: 'Firefly shortens the path from creative brief to usable asset by combining generation, editing, model selection and Adobe production workflows in one environment. For teams, the bigger value is repeatability: Firefly Services can turn creative operations such as image generation, compositing, upscaling and template-driven production into APIs and batch workflows.',
  howItWorks: 'A user selects a Firefly capability such as Generate Image, Generate Video, Generate Audio or Boards, chooses an available Adobe or partner model where applicable, supplies a prompt and/or reference asset, then iterates on the result. Outputs can be refined inside Firefly and moved into Adobe applications. Developers use Firefly Services through Adobe Developer Console credentials and REST-style APIs, commonly submitting asynchronous jobs and polling their status.',
  features: [
    { name: 'Multi-model generation', detail: 'Firefly now exposes Adobe models alongside partner models such as Gemini/Nano Banana, GPT Image, Kling, Runway, Luma and ElevenLabs, allowing users to compare models instead of maintaining separate creative workflows.' },
    { name: 'Image generation and editing', detail: 'Generate images and perform prompt-driven edits, background changes, composition work, and other generative image operations. Adobe’s current Firefly Image Model 5 documentation emphasizes improved realism, lighting, composition and natural-language editing.' },
    { name: 'Video generation and editing', detail: 'Generate and modify short video content using Adobe and partner video models. Adobe documents model-specific capabilities and limits, so the available controls depend on the selected model.' },
    { name: 'Firefly Boards', detail: 'A canvas for collecting, comparing and refining creative directions. It is particularly useful when the task is exploration rather than producing a single final image immediately.' },
    { name: 'Generative AI inside Adobe apps', detail: 'Firefly capabilities appear across Adobe products such as Photoshop and Adobe Express, reducing the need to export every generation into a separate application before editing.' },
    { name: 'Content Credentials', detail: 'Adobe can attach C2PA-based Content Credentials to qualifying generated or modified content, providing provenance information about how content was created.' },
    { name: 'Firefly Services', detail: 'Developers can integrate Firefly generation and creative automation into applications and production pipelines rather than relying only on the web interface.' }
  ],
  aiAndModels: 'Firefly is no longer a single-model product. Adobe provides its own Firefly models and a model selector for supported partner models. Current Adobe documentation lists partner integrations including Google Gemini/Nano Banana, OpenAI GPT Image, Kling, Runway, Luma, ElevenLabs and FLUX-family models, with the exact model availability depending on the feature and plan. Adobe does not expose every internal implementation detail of its proprietary models, so this profile does not infer hidden model versions.',
  inputsOutputs: 'Inputs can include natural-language prompts, reference images and other creative assets depending on the selected feature. Outputs include images, short video, audio/voice and edited creative assets. Model-specific constraints vary, so users should check the capability page for the selected model before designing a production pipeline around a particular duration, resolution or format.',
  limits: [
    'Generative credits are a central usage control. Credit consumption varies by feature, output, resolution and model; premium generations generally consume credits while many standard image-generation features are unlimited on eligible paid plans.',
    'Partner-model availability is not universal across every Firefly feature or Adobe plan. The model dropdown shown for a specific workflow is the authoritative availability signal.',
    'Outputs are not guaranteed to be unique or automatically protectable by intellectual-property law; Adobe’s product-specific terms explicitly warn about this.',
    'Adobe states that partner-model outputs require the creator to decide whether a particular model is appropriate for commercial use, considering how that partner model was trained and its terms.',
    'Some generative features are beta or have feature-specific commercial-use/indemnification conditions. Do not assume every new feature has identical legal protection.',
    'Adobe’s generative-AI guidelines prohibit infringement, deceptive/harmful uses and other prohibited content, and prompts/results may be subject to automated or manual abuse-prevention review.',
    'Firefly is best treated as a creative-production system, not a replacement for final human art direction, factual review, rights clearance or brand approval.'
  ],
  useCases: [
    'Campaign concepting and rapid visual exploration before a designer commits to final production.',
    'Product and ecommerce imagery, including generating environments and compositing products into scenes.',
    'Social-media creative variations for different formats and audiences.',
    'Image cleanup, expansion, replacement and other generative editing tasks in Photoshop/Firefly workflows.',
    'Short-form video ideation, B-roll and creative experimentation.',
    'Voice, sound and localization workflows where supported by the selected Firefly feature/model.',
    'High-volume creative automation through Firefly Services APIs and Adobe creative APIs.'
  ],
  poorFit: [
    'Projects that require guaranteed deterministic output from a single fixed model without model or platform changes.',
    'Sensitive workflows where the team has not reviewed Adobe’s applicable privacy, processing, retention and contractual terms.',
    'Use cases requiring unrestricted control over every generation algorithm or model weight.',
    'Work that assumes every partner-model output automatically receives the same commercial-safety or indemnification treatment as Adobe Firefly-native outputs.',
    'Professional decisions where generated content would substitute for legal, medical, financial or other qualified advice.'
  ],
  pricing: [
    { name: 'Firefly Free', detail: 'Adobe currently offers a free tier with limited daily generations across image, video and audio features and a limited selection of models.' },
    { name: 'Firefly Standard', detail: 'US pricing currently shows $9.99/month with 2,000 monthly generative credits and access to standard and premium Firefly capabilities. Adobe states this can cover up to 400 partner-model images or up to 40 five-second videos under its example usage.' },
    { name: 'Firefly Pro', detail: 'US pricing currently shows a $19.99/month promotional price, with 4,000 monthly generative credits. The current offer also includes Adobe Express Premium and Photoshop web/mobile; promotional unlimited-generation terms apply only to selected models and periods.' },
    { name: 'Firefly Pro Plus', detail: 'Adobe currently advertises a $34.97/month promotional price, normally $49.99, with 10,000 monthly credits and broader included Adobe apps. The current offer has a first-year promotional unlimited-generation component for selected models.' },
    { name: 'Firefly Premium', detail: 'For high-volume users, Adobe lists 50,000 monthly credits at $199.99/month in the current US plan information.' },
    { name: 'Credit add-ons', detail: 'Adobe sells additional credit packs, currently including 2,000 for $9.99/month, 7,000 for $29.99, 10,000 for $49.99 and 50,000 for $199.99. Credits refresh monthly and unused credits do not roll over.' }
  ],
  integrations: [
    'Photoshop, Adobe Express and other Adobe creative applications.',
    'Partner AI models from Google, OpenAI, Runway, Luma, Kling, Black Forest Labs and other providers, depending on the workflow.',
    'Adobe Stock and Content Credentials/Content Authenticity workflows.',
    'Firefly Services APIs for custom applications and production pipelines.',
    'Photoshop, InDesign and other Firefly Services APIs for automated creative operations.'
  ],
  developer: [
    'Firefly API provides programmatic generative workflows including image generation, custom models, compositing and image upscaling.',
    'Firefly Custom Models can be trained for brand-aligned image variations and referenced through API asset IDs.',
    'Firefly Services supports asynchronous jobs for several production APIs, making it suitable for backend automation rather than only interactive UI use.',
    'Adobe provides a Firefly Services SDK with Node.js and TypeScript support plus common authentication utilities.',
    'Photoshop API v2 is now generally available through Firefly Services, including support for files up to 5GB and event-driven workflows through Adobe I/O Events.',
    'Adobe also exposes audio/video and InDesign APIs for larger creative-automation pipelines.'
  ],
  privacy: 'Adobe states that it does not train Adobe Firefly generative AI models on customer content and that Firefly models are trained on licensed content such as Adobe Stock and public-domain material. Adobe also states that partner integrations are covered by agreements preventing customer data/content from being used to train generative AI models. However, prompts and generated results can be reviewed through automated and manual methods for abuse prevention/content filtering, and Adobe’s broader content-analysis policies should be reviewed for server-processed content. Do not treat the no-training statement as meaning that content is never processed, retained or analyzed for every operational purpose.',
  ownership: 'Adobe states that it does not claim ownership of customer content. Its generative-AI guidelines generally permit commercial use of outputs, but beta features can have different conditions and partner-model outputs require separate judgment. Adobe’s product-specific terms also warn that generated output may not be unique or protectable by intellectual-property rights. Enterprise Firefly customers may receive IP indemnification for qualifying Firefly-native generated content, but that should not be generalized to every partner model or feature.',
  alternatives: [
    { name: 'Midjourney', detail: 'Strong alternative for image-focused artistic generation and exploration. Firefly has the advantage when the workflow needs Adobe editing, model choice and production automation.' },
    { name: 'Runway', detail: 'A stronger specialist comparison for generative video workflows. Firefly is broader as a multi-modal creative hub and can expose Runway models alongside Adobe workflows.' },
    { name: 'Canva', detail: 'More template- and communication-oriented for non-specialist design teams. Firefly is more tightly connected to professional Adobe production tools and APIs.' },
    { name: 'ChatGPT image generation', detail: 'Useful for conversational image ideation and editing. Firefly differentiates through Adobe-native creative workflows, partner-model selection and production APIs.' }
  ],
  strengths: [
    'Combines Adobe-native generation with multiple partner models in one creative workflow.',
    'Strong bridge between generative experimentation and professional Photoshop/Adobe production workflows.',
    'Clear generative-credit accounting makes high-volume usage measurable.',
    'Firefly Services turns many creative operations into automatable APIs.',
    'Adobe provides unusually explicit provenance, Content Credentials and responsible-AI documentation.'
  ],
  limitations: [
    'The product is increasingly broad, so model/feature availability can be confusing without checking the exact workflow.',
    'Credits and premium-model costs make high-volume video/audio generation more expensive than simple image generation.',
    'Partner models do not inherit every Firefly-native commercial-safety or indemnification promise.',
    'Generated results still require human art direction, rights review and quality control.',
    'Some important capabilities are tied to Adobe subscriptions, feature eligibility or enterprise access.'
  ],
  workflow: [
    '1. Define the deliverable first: channel, dimensions, audience, brand rules, source assets and approval criteria.',
    '2. Use Firefly or Boards to generate several creative directions instead of trying to perfect the first output.',
    '3. Compare the available Adobe and partner models for the specific task; use the model selector rather than assuming Firefly’s native model is always best.',
    '4. Move the selected concept into Photoshop, Express or another appropriate Adobe workflow for human-controlled refinement.',
    '5. Check text, logos, people, product details, brand consistency and composition manually before delivery.',
    '6. For commercial work, verify the selected model/feature’s commercial-use and indemnification conditions, especially for partner and beta features.',
    '7. For repeated production, prototype the workflow manually first, then move stable steps into Firefly Services APIs and monitor asynchronous jobs, failures and usage.'
  ],
  takeaway: 'Firefly is best understood as Adobe’s creative AI layer rather than just an image generator. Its strongest use case is a professional workflow where generation, editing, model comparison, brand work and downstream Adobe production need to stay connected. For developers and larger teams, Firefly Services makes the platform substantially more interesting because creative generation and editing can become repeatable production infrastructure. The main caution is legal and operational: partner models, beta features, credit costs and commercial-use protections are not identical, so each production workflow should be evaluated feature-by-feature.',
  sources: [
    { title: 'Adobe Firefly', publisher: 'Adobe', url: 'https://firefly.adobe.com/', type: 'official' },
    { title: 'Firefly partner models', publisher: 'Adobe', url: 'https://www.adobe.com/products/firefly/partner-models.html', type: 'official' },
    { title: 'Firefly plans and pricing', publisher: 'Adobe', url: 'https://www.adobe.com/products/firefly/features/ai-art-generator.html', type: 'official' },
    { title: 'Generative credits overview', publisher: 'Adobe HelpX', url: 'https://helpx.adobe.com/il_en/firefly/web/get-started/learn-the-basics/generative-credits-overview.html', type: 'official' },
    { title: 'Adobe approach to generative AI with Firefly', publisher: 'Adobe', url: 'https://www.adobe.com/in/ai/overview/firefly/gen-ai-approach.html', type: 'official' },
    { title: 'Adobe Generative AI User Guidelines', publisher: 'Adobe Legal', url: 'https://www.adobe.com/in/legal/licenses-terms/adobe-gen-ai-user-guidelines.html', type: 'official' },
    { title: 'Adobe Generative AI Product Specific Terms', publisher: 'Adobe Legal', url: 'https://www.adobe.com/cc-shared/assets/pdf/legal/servicetou/adobe-generative-ai-product-specific-terms-en-us-20260423.pdf', type: 'official' },
    { title: 'Adobe Firefly API / Firefly Services', publisher: 'Adobe Developer', url: 'https://developer.adobe.com/firefly-services/docs/firefly-api/', type: 'official' },
    { title: 'Firefly Services SDK', publisher: 'Adobe Developer', url: 'https://developer.adobe.com/firefly-services/docs/guides/sdks/', type: 'official' },
    { title: 'Photoshop API v2 in Firefly Services', publisher: 'Adobe Developer', url: 'https://developer.adobe.com/firefly-services/docs/photoshop/', type: 'official' }
  ]
};
