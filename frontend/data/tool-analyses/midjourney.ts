import type { ToolAnalysis } from './types.ts';

export const midjourneyAnalysis: ToolAnalysis = {
  lastVerified: '2026-10-07',
  summary: 'Midjourney is the premier AI-powered image generation platform, celebrated across digital art, marketing, concept design, and creative media for delivering unmatched visual aesthetics, nuanced lighting, photorealistic textures, and painterly coherence. Operating through both its modern web interface and Discord bot, Midjourney leverages proprietary deep generative foundation models (v6.1 and Niji 6) that interpret complex natural language prompts, render legible typographic text, and support advanced stylistic steering such as Style Reference (--sref), Character Consistency (--cref), and Model Personalization (--p).',
  company: 'Midjourney, Inc.',
  officialUrl: 'https://www.midjourney.com/',
  status: 'Active, industry-benchmark generative imagery platform with dedicated web creation interface, active Discord bot, proprietary v6/v6.1 foundation architectures, and continuous weekly model updates.',
  targetUsers: [
    'Concept artists, digital illustrators, and game developers generating environmental mood boards, character designs, asset mockups, and cinematic visual keys',
    'Creative directors, marketing agencies, and brand strategists crafting high-converting social media creatives, editorial hero banners, and ad campaign visuals',
    'Architects, industrial designers, and interior decorators visualizing spatial concepts, textural materials, and atmospheric lighting iterations before client presentations',
    'Indie authors, graphic novelists, and content creators designing book covers, episodic webcomics, YouTube thumbnails, and editorial illustrations',
    'UI/UX designers and web developers generating photorealistic stock photography, bespoke textures, and visual backgrounds without expensive stock photo licensing'
  ],
  problemSolved: 'Midjourney solves the visual blandness, artificial sheen, and anatomical distortion common in early diffusion models. Traditional stock photography is expensive, generic, and time-consuming to curate, while professional 3D rendering or bespoke photo shoots require days of production and thousands of dollars. Midjourney enables creators to conjure photorealistic, hyper-detailed imagery with cinematic volumetric lighting, authentic skin textures, coherent composition, and custom typography in seconds, dramatically compressing creative iteration cycles from days into minutes.',
  howItWorks: 'Midjourney functions as a proprietary latent diffusion neural network trained on massive multimodal datasets of art, photography, and 3D renderings. Users enter natural language descriptions accompanied by parameter flags (such as aspect ratio --ar 16:9, stylization --s 250, or chaos --c 15). The system maps the semantic tokens into a multi-dimensional latent space, iteratively denoising random Gaussian noise over multiple inference steps using dedicated GPU clusters. A single prompt yields an initial four-image grid (2x2). Users can then upscale individual images, produce subtle or creative variations (Vary Subtle / Strong), isolate specific bounding regions for inpainting (Vary Region), expand canvas bounds (Pan left/right/up/down and Zoom 1.5x/2x), or feed reference URLs to anchor character faces (--cref) and aesthetic palettes (--sref).',
  features: [
    {
      name: 'V6.1 Foundation Image Engine',
      detail: 'State-of-the-art diffusion architecture delivering hyper-realistic human anatomy, precise skin pores and eye reflections, accurate architectural perspective, complex lighting interactions, and coherent rendering of short typographic text strings within quotes.'
    },
    {
      name: 'Dedicated Web Creation Suite',
      detail: 'A modern, high-speed web application (midjourney.com) equipped with an interactive canvas editor, prompt sliders for aspect ratio and stylization, unified lightroom gallery, and organized collection management.'
    },
    {
      name: 'Style Reference (--sref) & Weight Control',
      detail: 'Replicate exact color palettes, artistic mediums, brushstrokes, and photographic moods across new generations by supplying reference image URLs with granular weight adjustments (--sw 0 to 1000).'
    },
    {
      name: 'Character Consistency Reference (--cref)',
      detail: 'Maintain consistent character facial identity, hairstyles, and features across multiple diverse scenes, outfits, and emotional expressions, regulated by character weight (--cw 0 for face only, --cw 100 for full outfit).'
    },
    {
      name: 'Model Personalization (--p / --personalize)',
      detail: 'Train a custom algorithmic preference profile by rating images in community pair-ranking tests, generating a personalized code that nudges future generations toward your subjective aesthetic taste.'
    },
    {
      name: 'Inpainting & Canvas Expansion (Vary Region, Pan & Zoom)',
      detail: 'In-app generative canvas editor that lets users brush over specific sections to replace elements, pan the camera in any cardinal direction to uncrop scenes, or zoom out 1.5x to 2x while maintaining compositional integrity.'
    },
    {
      name: 'Niji 6 Stylized Anime Engine',
      detail: 'Specialized collaborative model co-developed with Spellbrush, meticulously tuned for anime, manga, comic aesthetics, expressive character poses, and dynamic cel-shaded action sequences.'
    },
    {
      name: 'Image Weight & Multi-Prompt Blending',
      detail: 'Combine up to five reference images with text prompts or utilize /blend to synthesize disparate visual concepts with custom image weight multipliers (--iw 0.5 to 3.0).'
    },
    {
      name: 'Reverse Engineering via /describe',
      detail: 'Upload an existing photograph or illustration to receive four nuanced descriptive prompt suggestions, demystifying how the model interprets specific lighting, angles, and camera lens setups.'
    },
    {
      name: 'Stealth Mode (Pro & Mega Tiers)',
      detail: 'Toggles privacy settings (/stealth) to ensure your generated images, parameters, and reference URLs remain hidden from the public Midjourney community showcase.'
    }
  ],
  aiAndModels: 'Midjourney develops proprietary closed foundation models (primarily Midjourney v6 and v6.1, alongside Niji v6 for anime/stylized aesthetics). Unlike open-source Stable Diffusion weights or API-accessible models like DALL-E 3, Midjourney runs exclusively on managed cloud infrastructure featuring high-performance NVIDIA GPU clusters. Models are continuously tuned through reinforcement learning from human feedback (RLHF) and community pair-ranking votes.',
  inputsOutputs: 'Inputs: Natural language text prompts, image reference URLs, multi-image blend files, parameter syntax flags (--ar, --v, --s, --c, --w, --sref, --cref, --p, --tile, --stop). Outputs: 1024x1024 base square resolution images (or proportional aspect ratios like 1792x1024 for 16:9), upscalable up to 2048x2048 or 4096x4096, exported in lossless PNG format.',
  limits: [
    'No official public REST or GraphQL API for programmatic software integration; third-party wrapper APIs violate Terms of Service',
    'No permanent free tier; accounts require an active monthly or annual paid subscription',
    'Fast GPU hours deplete quickly on Basic (3.3 hrs) and Standard (15 hrs) plans during heavy exploration',
    'Stealth Mode is gated strictly behind Pro ($60/mo) and Mega ($120/mo) tiers, meaning Basic and Standard outputs appear in public community feeds',
    'Text rendering inside images is limited to short slogans or words (1-5 words), struggling with extended paragraphs or technical diagrams',
    'Strict content moderation filter blocks NSFW, explicit violence, and politically sensitive prompts, occasionally generating false-positive moderation flags'
  ],
  useCases: [
    'Creating photorealistic marketing and advertising banners for digital campaigns, landing pages, and email newsletters',
    'Generating character sheets, environmental keys, and cinematic concept art for video games and animation storyboards',
    'Designing book covers, album artwork, editorial magazine spreads, and illustrated storytelling narratives',
    'Rapid visual ideation and prototyping for product packaging, textile patterns (--tile), and interior architectural spaces',
    'Crafting high-engagement social media visuals, blog feature graphics, and YouTube video thumbnails with distinct visual identity'
  ],
  poorFit: [
    'Engineering, blueprint, and CAD diagramming requiring exact millimeter dimensions, legible vector layers, and geometric precision',
    'Developers building automated SaaS pipelines requiring programmatic API access and JSON responses',
    'Teams requiring complete confidentiality on a budget under $60/month, as lower tiers display all creations publicly',
    'Extended infographic design or typographic posters requiring multi-paragraph copy, tables, or complex font typesetting',
    'Sensitive corporate imagery involving trademarked enterprise logos or strict zero-tolerance prompt-filtering environments'
  ],
  pricing: [
    {
      name: 'Basic Plan',
      detail: '$10/month ($96/year billed annually at $8/mo). Includes 3.3 Fast GPU hours/month (~200 image generations), 3 concurrent fast jobs, general commercial terms, and member gallery access. Does not include Relax Mode or Stealth Mode.'
    },
    {
      name: 'Standard Plan',
      detail: '$30/month ($288/year billed annually at $24/mo). Includes 15 Fast GPU hours/month, unlimited Relax GPU generations (queued non-metered generation), 3 concurrent fast jobs, and 10 queued relax jobs. Best for active creators and freelancers.'
    },
    {
      name: 'Pro Plan',
      detail: '$60/month ($576/year billed annually at $48/mo). Includes 30 Fast GPU hours/month, unlimited Relax GPU generations, Stealth Mode (private gallery hiding), 12 concurrent fast jobs, and 3 concurrent relax jobs. Mandatory for commercial teams with >$1M annual gross revenue.'
    },
    {
      name: 'Mega Plan',
      detail: '$120/month ($1,152/year billed annually at $96/mo). Includes 60 Fast GPU hours/month, unlimited Relax GPU generations, Stealth Mode, 12 concurrent fast jobs, and priority processing queues. Designed for high-volume production agencies.'
    },
    {
      name: 'Fast GPU Add-ons',
      detail: 'Subscribers can purchase additional Fast GPU hours at $4/hour at any time to replenish depleted balances without changing tiers.'
    }
  ],
  integrations: [
    'Midjourney Web Application (midjourney.com) with integrated lightroom and canvas tools',
    'Discord Bot (direct messaging and private server channels)',
    'Spellbrush / Niji Journey mobile applications and collaborative portals',
    'Figma & Adobe Photoshop export pipelines (via high-resolution PNG asset download)'
  ],
  developer: [
    'Midjourney does NOT offer an official public API or developer SDK',
    'Automated scraping or programmatic bot-triggering on Discord violates Midjourney Terms of Service and results in account termination',
    'Developers seeking programmatic image generation are directed to alternatives with official APIs such as Ideogram, Leonardo AI, Recraft, or Stability AI'
  ],
  privacy: [
    'Public by default: All images and prompts generated on Basic and Standard plans are visible in the public Midjourney community explore gallery',
    'Stealth Mode available exclusively on Pro ($60/mo) and Mega ($120/mo) subscriptions to prevent assets from appearing in public feeds',
    'Prompts, rating interactions, and generated images may be used internally by Midjourney to train and refine future generative model versions'
  ],
  ownership: [
    'Subscribers own all visual assets generated during an active paid subscription to the fullest extent permitted by applicable copyright law',
    'General commercial rights included for indie creators, freelancers, and businesses earning under $1,000,000 USD gross annual revenue',
    'Companies generating over $1,000,000 USD gross annual revenue MUST subscribe to either the Pro ($60/mo) or Mega ($120/mo) plan to hold commercial rights',
    'Midjourney retains a perpetual, worldwide, non-exclusive, sublicensable license to reproduce, showcase, and distribute creations for operational and promotional purposes'
  ],
  alternatives: [
    {
      name: 'Flux.1 (by Black Forest Labs)',
      detail: 'Open-weights foundation diffusion model offering state-of-the-art prompt following, photorealistic hands, and commercial API accessibility via Replicate and Fal.ai.'
    },
    {
      name: 'Ideogram 2.0',
      detail: 'Leading image generation platform with superior in-image typographic text rendering, graphic design layouts, and an official developer API.'
    },
    {
      name: 'Adobe Firefly',
      detail: 'Commercially safe generative model trained exclusively on licensed Adobe Stock, featuring deep native integration into Photoshop, Illustrator, and Creative Cloud.'
    },
    {
      name: 'Leonardo AI',
      detail: 'Comprehensive creative suite offering custom LoRA fine-tuning, canvas inpainting, 3D texture mapping, and production-ready developer REST APIs.'
    },
    {
      name: 'DALL-E 3 (by OpenAI)',
      detail: 'Built-in ChatGPT image generator known for effortless conversational prompt understanding, though offering less granular artistic styling and photographic nuance than Midjourney.'
    }
  ],
  strengths: [
    'Unrivaled photographic and aesthetic fidelity: Produces the most cinematic, organic, and visually breathtaking imagery in generative AI',
    'Style & Character Consistency: Groundbreaking --sref and --cref parameters allow commercial creators to maintain branding and narrative continuity',
    'Unlimited Relax Mode: Standard ($30/mo) and above tiers offer limitless non-metered image generation when Fast GPU hours run out',
    'Intuitive Web Canvas: Transition from Discord commands to a polished web suite with drag-and-drop reference image tools and regional inpainting',
    'Vibrant community & inspiration: Millions of searchable community prompts provide an endless repository of aesthetic techniques and keyword recipes'
  ],
  limitations: [
    'No developer REST API: Inability to integrate programmatically into web applications, SaaS backends, or automated marketing workflows',
    'Privacy paywall: Basic and Standard tiers expose all prompts and images publicly; privacy requires a minimum $60/month Pro commitment',
    'No free tier: Beginners and hobbyists cannot experiment without committing to at least a $10 monthly subscription',
    'Moderation false positives: Overly strict automated keyword filters occasionally block benign artistic and medical prompts',
    'Inconsistent complex typography: While short slogans work well in v6.1, multi-line paragraphs and detailed infographic text remain error-prone'
  ],
  workflow: [
    '1. Subscription & Workspace Selection: Create an account at midjourney.com and select an active tier (Standard is recommended for unlimited Relax generations; Pro is required for private Stealth Mode and large enterprises). Access generation via the web interface or invite the Midjourney Bot to a private Discord server.',
    '2. Prompt Formulation & Parameter Tuning: Craft a structured descriptive prompt detailing subject, environment, lighting, medium, and camera lens. Append technical parameters such as aspect ratio (--ar 16:9), stylization intensity (--s 250), and model version (--v 6.1). For consistent branding, append style reference URLs with --sref.',
    '3. Grid Generation & Variation Exploration: Submit the prompt to generate an initial 2x2 thumbnail grid. Review compositions, color balance, and subject focus. Select subtle variation (Vary Subtle) for minor adjustments, strong variation (Vary Strong) for alternative takes, or reroll to explore fresh seeds.',
    '4. Canvas Refinement, Inpainting & Outpainting: Open the preferred variation in the Web Canvas editor or Discord controls. Use "Vary (Region)" to lasso and redraw awkward hands, misrendered text, or facial details. Apply "Pan" or "Zoom Out 1.5x" to expand the environmental framing without distorting the focal subject.',
    '5. High-Resolution Upscale & Production Export: Execute a Subtle or Creative upscale to render the final image at full resolution (2048x2048 or higher). Download the lossless PNG asset for final color grading in Photoshop/Lightroom, web publishing, marketing collateral, or print production.'
  ],
  takeaway: 'Midjourney remains the gold standard for artistic, cinematic, and photorealistic AI image generation in 2026. While the absence of an official developer API and the $60/month paywall for Stealth Mode privacy present hurdles for SaaS automation and privacy-conscious enterprises, its breathtaking visual output, groundbreaking style and character reference capabilities, and unlimited Relax Mode on the $30 Standard tier make it an indispensable powerhouse for creators, designers, and visual storytelling professionals worldwide.',
  sources: [
    {
      title: 'Midjourney Official Documentation & User Guide',
      publisher: 'Midjourney',
      url: 'https://docs.midjourney.com/',
      type: 'official'
    },
    {
      title: 'Midjourney Subscription Plans, Fast GPU Hours & Pricing Structure',
      publisher: 'Midjourney',
      url: 'https://docs.midjourney.com/docs/plans',
      type: 'official'
    },
    {
      title: 'Midjourney Model Versions & Parameter Reference (v6.1, --sref, --cref)',
      publisher: 'Midjourney',
      url: 'https://docs.midjourney.com/docs/models',
      type: 'official'
    },
    {
      title: 'Reddit r/midjourney & r/ArtificialIntelligence Prompt Guides, Critiques & Workflow Benchmarks',
      publisher: 'Reddit Communities',
      url: 'https://www.reddit.com/r/midjourney/',
      type: 'independent'
    }
  ]
};
