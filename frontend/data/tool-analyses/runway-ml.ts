import type { ToolAnalysis } from './types.ts';

export const runwayAnalysis: ToolAnalysis = {
  lastVerified: '2026-09-28',
  summary:
    'Runway is a professional-oriented generative media platform for creating, editing and producing AI video, images and audio, with its own models plus selected third-party models and developer/agent integrations.',
  company: 'Runway AI, Inc.',
  officialUrl: 'https://runway.com/',
  status: 'Active; rapidly changing model and workflow catalog.',
  targetUsers: [
    'Video creators and filmmakers',
    'Social and marketing teams',
    'Designers and visual artists',
    'Creative production teams',
    'Developers building generative-media products',
    'Teams using AI agents for creative production',
  ],
  problemSolved:
    'Runway reduces the cost and iteration time of producing visual media by combining generative models, video editing, image generation, audio tools, workflows and agent integrations in one production environment.',
  howItWorks:
    'Users can start from text prompts, images, video, audio or combinations of references depending on the model. Runway then generates or edits media using a selected model, while newer agentic workflows can help plan and execute multi-step creative tasks. The platform exposes both Runway models and selected third-party models, so model choice and credit consumption depend on the task and plan.',
  features: [
    {
      name: 'Gen-4.5 video generation',
      detail:
        'Runway’s flagship current video model supports text-to-video and image-to-video. The documented rate is 12 credits per second, with 5- or 10-second generations in the web workflow.',
    },
    {
      name: 'Aleph 2.0 video editing',
      detail:
        'Edit existing video using natural-language instructions. Runway documents edits such as changing a product color, removing an object, changing a background or restyling a shot while attempting to preserve the rest of the footage. Aleph 2.0 supports clips up to 30 seconds at 1080p.',
    },
    {
      name: 'Image generation and editing',
      detail:
        'Runway includes Gen-4 Image and Gen-4 Image Turbo plus selected third-party image models. Image workflows can use text and reference images, with model-specific resolution and credit rules.',
    },
    {
      name: 'Act-Two and Characters',
      detail:
        'Act-Two provides character-performance generation from a performance input. Runway also offers real-time Characters for conversational video-agent experiences.',
    },
    {
      name: 'Agentic creative workflows',
      detail:
        'Runway’s Agent can help create end-to-end video projects from conversational instructions, while the platform also exposes agent connectors and MCP integrations.',
    },
    {
      name: 'Runway MCP',
      detail:
        'The MCP integration lets compatible agents such as ChatGPT, Claude and Cursor invoke Runway generation without a separate API key. Generations use the connected Runway account’s credits.',
    },
    {
      name: 'Workflows and editing',
      detail:
        'Runway provides compositing and post-processing workflow capabilities, including stitching video and adding or extracting audio, alongside Edit Studio and generation tools.',
    },
    {
      name: 'Production exports',
      detail:
        'Current paid workflows include professional export options such as ProRes and PNG sequences for supported models, with HDR formats progressively available for Gen-4.5 and Aleph 2.0.',
    },
  ],
  aiAndModels:
    'Runway is now a multi-model platform rather than a single-model generator. Its catalog includes Runway models such as Gen-4.5, Gen-4, Gen-4 Turbo, Gen-4 Image, Gen-4 Image Turbo, Aleph 2.0 and Act-Two, plus selected third-party models such as Seedance, Kling, Veo, GPT Image and Nano Banana families. Availability varies by plan and product surface. Runway Dev also provides Model Router, which can choose an eligible model according to cost, latency or quality preferences.',
  inputsOutputs:
    'Depending on the model, inputs can include text prompts, still images, reference images, video clips, audio and performance footage. Outputs include generated video, edited video, still images, speech/audio and workflow assets. Model-specific limits apply; for example, Gen-4 requires an input image and supports 5- or 10-second generations in the documented web workflow, while Aleph 2.0 can edit up to 30 seconds of video at 1080p.',
  limits: [
    'Generations consume credits and the cost varies by model, duration, resolution and sometimes input/reference media.',
    'The Free plan provides a one-time 125-credit allocation and 5GB of asset storage; free video generations carry a Runway watermark.',
    'Standard and Pro monthly credits expire at the end of their billing cycle; Max and Team can roll over up to one month of unused credits.',
    'Free users have access only to a changing subset of models and tools; model availability should be checked in the account rather than assumed from the general catalog.',
    'Many generations are short clips rather than long-form finished video, so longer productions require iteration, editing or stitching.',
    'Content moderation scans inputs and outputs and cannot simply be disabled for a project or account.',
    'Third-party model availability and limits can change as Runway updates its catalog.',
  ],
  useCases: [
    'Concept trailers and pitch visuals before filming',
    'Product and advertising videos from existing product images',
    'Social-media clips, short-form ads and visual experiments',
    'Video-to-video restyling and controlled visual changes',
    'Character and performance-driven creative',
    'Storyboard and previsualization work',
    'Image generation for campaigns, websites and product marketing',
    'Developer-built creative applications using Runway Dev or MCP',
  ],
  poorFit: [
    'Projects that require deterministic frame-perfect results without human review',
    'Long-form production that expects one prompt to produce a finished film without editing',
    'Workflows where every generation must have a predictable fixed cost regardless of model or resolution',
    'Sensitive third-party content where organizational data controls have not been reviewed',
    'Users who only need simple video editing and do not need generative-media capabilities',
  ],
  pricing: [
    {
      name: 'Free',
      detail:
        '$0/month; one-time 125 credits, 5GB storage and a limited model/tool selection. Free video generations include a Runway watermark.',
    },
    {
      name: 'Standard',
      detail:
        '$15/month monthly or $12/month when billed annually; 625 credits/month, all AI video and image models, agentic creative collaborator, parallel generations, audio generation, up to 3 projects, no watermark, 4K upscaling and 20GB storage.',
    },
    {
      name: 'Pro',
      detail:
        '$35/month monthly or $28/month when billed annually; 2,250 credits/month, up to 5 projects, 1 Brand Kit, one custom voice clone, Runway MCP, unlimited 4K upscaling and 100GB storage.',
    },
    {
      name: 'Max',
      detail:
        '$95/month monthly or $76/month when billed annually; 9,500 credits/month, one-month credit rollover, early access to new models, up to 10 projects, 3 Brand Kits, 3 custom voice clones, Runway MCP, studio-grade HDR/ProRes/image-sequence output, unlimited 4K upscaling and 500GB storage.',
    },
    {
      name: 'Team',
      detail:
        'Team is for 2–9 seats. Each seat adds 6,900 monthly credits to a shared pool; the documented price is $69/month per seat or $55/month per seat on annual billing. Team includes collaboration features, 1TB shared storage and agent connectors.',
    },
    {
      name: 'API / Runway Dev',
      detail:
        'Developer usage is separate from web-app subscription credits. Runway Dev charges $0.01 per API credit, with model-specific generation rates. The API supports official SDKs and a Model Router for cost, latency or quality optimization.',
    },
  ],
  integrations: [
    'Runway MCP for ChatGPT, Claude, Cursor and other compatible agents',
    'Runway Agent and agent connectors',
    'Runway Dev API and official SDKs',
    'Model Router for automated model selection',
    'Team workspaces, comments, Brand Kits and shared projects',
    'Third-party model families exposed inside Runway, subject to plan and surface availability',
  ],
  developer: [
    'Runway Dev provides a public API for video, image, audio and other supported generative capabilities.',
    'Official SDKs are available and Runway recommends using its maintained SDKs for Node.js and Python rather than integrating directly with the HTTP API.',
    'API credits are separate from web-app credits and are purchased through the developer platform.',
    'Model Router can select among eligible models using cost, latency or quality optimization and supports allow/deny lists and dry-run previews.',
    'Runway MCP provides an agent-oriented integration where authentication is tied to the user’s Runway account rather than requiring a separate API key in compatible agent environments.',
  ],
  privacy:
    'Runway is a cloud service. Its published security documentation states that it maintains SOC 2 Type II compliance and ISO/IEC 27001:2022 certification. Uploaded and generated assets are private by default, although Projects and deliberate sharing can make content visible to collaborators or link recipients. Enterprise customers receive additional contractual security and data-protection terms. Third-party model handling should be reviewed against the applicable plan and enterprise commitments; Runway states that its enterprise third-party model providers have commitments not to train on Customer Content.',
  ownership:
    'Runway states that, as between the user and Runway, users retain ownership and rights to content they upload and generate, and that Runway does not impose a non-commercial-only restriction on generated content. This does not eliminate the user’s responsibility to have rights to source material, obtain necessary consent, and comply with applicable law or third-party rights.',
  alternatives: [
    {
      name: 'Adobe Firefly',
      detail:
        'A strong alternative for teams already invested in Adobe workflows and for users who prioritize Adobe’s ecosystem and commercially oriented creative tooling.',
    },
    {
      name: 'Kling',
      detail:
        'A major video-generation alternative with strong motion and longer-form generation options; Runway differentiates itself through its broader editing, workflow, agent and multi-model production environment.',
    },
    {
      name: 'Google Veo',
      detail:
        'A leading video-generation family available through Google products and also exposed as a selected third-party model in Runway; using it through Runway can be attractive when a team wants multiple models in one workspace.',
    },
    {
      name: 'Luma',
      detail:
        'Another generative-video platform. It can be attractive for focused generation workflows, whereas Runway is broader as a combined generation, editing, workflow and developer platform.',
    },
  ],
  strengths: [
    'Combines generation and editing rather than treating video generation as a standalone prompt box.',
    'Strong current model breadth, including Runway and selected third-party models.',
    'Gen-4.5, Aleph 2.0, Act-Two and production workflows cover different creative stages.',
    'MCP, Agent and Runway Dev make the platform useful beyond the web UI.',
    'Clear credit accounting makes model-level generation cost more predictable than opaque usage limits.',
    'Professional export options and enterprise controls make it more relevant to production teams than many lightweight AI-video apps.',
  ],
  limitations: [
    'High-quality iteration can consume credits quickly, especially with premium video models.',
    'The model catalog and plan entitlements change frequently, so older comparisons can become stale.',
    'AI video still requires human selection, editing and quality control; visual artifacts and physical/causal errors can remain.',
    'Short generation lengths mean many narrative projects still require stitching, editing and multiple generations.',
    'Third-party models add breadth but can also make privacy, cost and capability comparisons more complicated.',
  ],
  workflow: [
    'Define the final delivery format first: ad, social clip, concept shot, product demo, pitch video or another target.',
    'Create or collect a strong reference image/product asset when the selected model benefits from visual conditioning.',
    'Generate inexpensive drafts with a Turbo or lower-cost model where appropriate before spending credits on premium renders.',
    'Use Gen-4.5 for higher-quality generation or Aleph 2.0 when editing an existing clip is more efficient than regenerating it.',
    'Use references, camera terminology and constrained prompts to improve composition and motion consistency.',
    'Review every generated clip for object consistency, physics, text, identity and unintended changes rather than assuming a visually impressive clip is production-safe.',
    'Assemble, upscale and export the selected shots using Runway’s editing/workflow tools or a conventional NLE when deeper editorial control is required.',
    'For repeatable product workflows, move the stable process into Runway Dev, MCP or agent workflows and monitor credit usage and model changes.',
  ],
  takeaway:
    'Runway is best understood as a generative-media production platform rather than only an AI video generator. It is particularly strong when a project needs generation, editing, multiple models and automation in the same workflow. The trade-off is that serious use requires credit planning and human quality control, while the rapidly changing model catalog means pricing, model access and capabilities should always be rechecked before committing to a production workflow.',
  sources: [
    {
      title: 'Runway Pricing',
      publisher: 'Runway',
      url: 'https://runway.com/pricing',
      type: 'official',
    },
    {
      title: 'Credits & Available Models',
      publisher: 'Runway Academy',
      url: 'https://academy.runwayml.com/models-pricing',
      type: 'official',
    },
    {
      title: 'How do credits work?',
      publisher: 'Runway Help Center',
      url: 'https://help.runwayml.com/hc/en-us/articles/15124877443219-How-do-credits-work',
      type: 'official',
    },
    {
      title: 'Aleph 2.0',
      publisher: 'Runway',
      url: 'https://runway.com/product/aleph-2',
      type: 'official',
    },
    {
      title: 'Runway MCP',
      publisher: 'Runway',
      url: 'https://runway.com/mcp',
      type: 'official',
    },
    {
      title: 'API Pricing & Costs',
      publisher: 'Runway Dev',
      url: 'https://docs.dev.runwayml.com/guides/pricing/',
      type: 'official',
    },
    {
      title: 'API Changelog & Updates',
      publisher: 'Runway Dev',
      url: 'https://docs.dev.runwayml.com/api-details/api_changelog/',
      type: 'official',
    },
    {
      title: 'Understanding Runway’s security and privacy standards',
      publisher: 'Runway Help Center',
      url: 'https://help.runwayml.com/hc/en-us/articles/24300377879827-Understanding-Runway-s-security-and-privacy-standards',
      type: 'official',
    },
    {
      title: 'Usage rights',
      publisher: 'Runway Help Center',
      url: 'https://help.runwayml.com/hc/en-us/articles/18927776141715-Usage-rights',
      type: 'official',
    },
    {
      title: 'Runway Gen-4.5: high-quality video generation with remaining consistency limits',
      publisher: 'TechRadar',
      url: 'https://www.techradar.com/ai-platforms-assistants/most-people-now-cant-separate-ai-videos-from-reality-new-runway-study-reveals-not-even-its-co-founder',
      type: 'independent',
    },
  ],
};
