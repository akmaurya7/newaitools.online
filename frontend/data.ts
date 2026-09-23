export type PricingType = 'Free' | 'Freemium' | 'Paid';

export interface Tool {
  id: string;
  name: string;
  category: string;
  description: string;
  pricing: PricingType;
  rating?: number;
  isTopPick?: boolean;
  tags?: string[];
  section?: 'top' | 'main' | 'free';
  link?: string;
  noSignupRequired?: boolean;
}

export const CATEGORIES = [
  'Writing & Text', 'Research & Knowledge', 'Image & Graphic Design', 'Video', 'Audio & Music',
  'Coding & Development', 'Website & App Creation', 'Data & Analytics', 'Productivity',
  'Business & Operations', 'Marketing & Advertising', 'Sales & CRM', 'Social Media',
  'Education & Learning', 'Presentations & Documents', 'Automation & AI Agents',
  'Customer Support', 'E-commerce', 'Finance', 'Legal', 'Healthcare', 'HR & Recruitment',
  'IT & DevOps', '3D & Game Development', 'Translation & Localization', 'SEO',
  'Meetings & Communication', 'Personal / Lifestyle', 'Scientific & Academic',
  'Specialized Industry AI', 'Knowledge Management', 'AI Infrastructure / Models / APIs'
];

export const TOOLS: Tool[] = [
  // Top Picks Section
  {
    id: 'canva-pro',
    name: 'Canva',
    category: 'Image & Graphic Design',
    description: 'Design anything with AI-powered magic',
    pricing: 'Freemium',
    rating: 4.7,
    isTopPick: true,
    tags: ['🔥 Most Used by Designers', '🔥 Popular in India'],
    section: 'top',
    link: 'https://www.canva.com/',
  },
  {
    id: 'framer-ai',
    name: 'Framer AI',
    category: 'Website & App Creation',
    description: 'Build client websites with AI in minutes',
    pricing: 'Freemium',
    rating: 4.6,
    isTopPick: true,
    tags: ['🔥 Most Used by Designers'],
    section: 'top',
    link: 'https://www.framer.com/ai/',
  },
  {
    id: 'hostinger',
    name: 'Hostinger',
    category: 'Website & App Creation',
    description: 'AI-powered website builder & hosting',
    pricing: 'Paid',
    rating: 4.5,
    tags: ['🔥 Most Used by Designers', '🔥 Popular in India'],
    section: 'top',
    link: 'https://www.hostinger.com/in?REFERRALCODE=UWNAMAURYN6F',
  },
  {
    id: 'writesonic',
    name: 'Writesonic',
    category: 'Writing & Text',
    description: 'AI copywriting for sales pages & ads',
    pricing: 'Freemium',
    rating: 4.4,
    tags: ['🔥 Most Used by Designers'],
    section: 'top',
    link: 'https://writesonic.com/',
  },

  // Main Tools Grid
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    category: 'Image & Graphic Design',
    description: 'Generate pro-grade images from text prompts',
    pricing: 'Paid',
    rating: 4.5,
    section: 'main',
    link: 'https://firefly.adobe.com/',
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo AI',
    category: 'Image & Graphic Design',
    description: 'AI image generation for creators',
    pricing: 'Freemium',
    rating: 4.6,
    tags: ['🔥 Popular in India'],
    section: 'main',
    link: 'https://leonardo.ai/',
  },
  {
    id: 'looka',
    name: 'Looka',
    category: 'Image & Graphic Design',
    description: 'AI logo maker for freelance brand kits',
    pricing: 'Paid',
    rating: 4.3,
    section: 'main',
    link: 'https://looka.com/',
  },
  {
    id: 'durable',
    name: 'Durable',
    category: 'Website & App Creation',
    description: 'One-page website builder for service pros',
    pricing: 'Paid',
    rating: 4.4,
    tags: ['🔥 Popular in India'],
    section: 'main',
    link: 'https://durable.co/',
  },
  {
    id: 'runway-ml',
    name: 'Runway',
    category: 'Video',
    description: 'AI video generation for designer reels',
    pricing: 'Freemium',
    rating: 4.4,
    section: 'main',
    link: 'https://runwayml.com/',
  },
  {
    id: 'uizard',
    name: 'Uizard',
    category: 'Image & Graphic Design',
    description: 'Turn rough sketches into polished wireframes',
    pricing: 'Freemium',
    rating: 4.2,
    section: 'main',
    link: 'https://uizard.io/',
  },
  {
    id: 'khroma-free',
    name: 'Khroma',
    category: 'Image & Graphic Design',
    description: 'AI learns your taste, generates palettes',
    pricing: 'Free',
    rating: 4.5,
    section: 'main',
    link: 'https://www.khroma.co/',
  },
  {
    id: 'presentations-ai',
    name: 'Presentations.AI',
    category: 'Presentations & Documents',
    description: 'Auto-design decks from your content',
    pricing: 'Freemium',
    rating: 4.1,
    section: 'main',
    link: 'https://www.presentations.ai/',
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    category: 'Writing & Text',
    description: 'Write client proposals and UX copy fast',
    pricing: 'Freemium',
    rating: 4.3,
    section: 'main',
    link: 'https://www.copy.ai/',
  },

  // Free Tools Section
  {
    id: 'remove-bg',
    name: 'Remove.bg',
    category: 'Image & Graphic Design',
    description: 'Remove image backgrounds instantly with AI',
    pricing: 'Free',
    rating: 4.7,
    section: 'free',
    link: 'https://www.remove.bg',
    noSignupRequired: true,
    tags: ['🆓 No signup required'],
  },
  {
    id: 'photopea',
    name: 'Photopea',
    category: 'Image & Graphic Design',
    description: 'Free browser-based alternative to Photoshop',
    pricing: 'Free',
    rating: 4.6,
    section: 'free',
    link: 'https://www.photopea.com',
    noSignupRequired: true,
    tags: ['🆓 No signup required', '🔥 Popular in India'],
  },
  {
    id: 'squoosh',
    name: 'Squoosh',
    category: 'Image & Graphic Design',
    description: 'Compress and optimize images for web performance',
    pricing: 'Free',
    rating: 4.6,
    section: 'free',
    link: 'https://squoosh.app',
    noSignupRequired: true,
    tags: ['🆓 No signup required'],
  },
  {
    id: 'khroma',
    name: 'Khroma',
    category: 'Image & Graphic Design',
    description: 'AI-powered color palette generator that learns your preferences',
    pricing: 'Free',
    rating: 4.5,
    section: 'free',
    link: 'https://www.khroma.co',
    noSignupRequired: true,
    tags: ['🆓 No signup required'],
  },
  ...[
    ['chatgpt','ChatGPT','Writing & Text','An all-purpose assistant for writing, analysis, research and creative work.','https://chatgpt.com/','Freemium'],
    ['claude','Claude','Writing & Text','Thoughtful AI assistant for writing, coding and document analysis.','https://claude.ai/','Freemium'],
    ['gemini','Gemini','Research & Knowledge','Google AI assistant for research, writing and multimodal work.','https://gemini.google.com/','Freemium'],
    ['jasper','Jasper','Marketing & Advertising','AI content platform for marketing teams and brand campaigns.','https://www.jasper.ai/','Paid'],
    ['grammarly','Grammarly','Writing & Text','Improve clarity, tone and correctness across your writing.','https://www.grammarly.com/','Freemium'],
    ['quillbot','QuillBot','Writing & Text','Rewrite, summarize and check writing with AI tools.','https://quillbot.com/','Freemium'],
    ['perplexity','Perplexity','Research & Knowledge','Answer engine for web research with cited sources.','https://www.perplexity.ai/','Freemium'],
    ['notebooklm','NotebookLM','Knowledge Management','Research assistant grounded in your documents and sources.','https://notebooklm.google.com/','Free'],
    ['elicit','Elicit','Scientific & Academic','Find and synthesize evidence from academic papers.','https://elicit.com/','Freemium'],
    ['midjourney','Midjourney','Image Generation','Create expressive images and visual concepts from prompts.','https://www.midjourney.com/','Paid'],
    ['ideogram','Ideogram','Image Generation','Generate images with strong typography and graphic layouts.','https://ideogram.ai/','Freemium'],
    ['photoroom','Photoroom','Image Generation','Create product visuals and remove image backgrounds.','https://www.photoroom.com/','Freemium'],
    ['heygen','HeyGen','Video','Create presenter videos, avatars and localized content.','https://www.heygen.com/','Freemium'],
    ['synthesia','Synthesia','Video','Make studio-style AI avatar videos from a script.','https://www.synthesia.io/','Paid'],
    ['descript','Descript','Audio & Music','Edit podcasts and videos by editing the transcript.','https://www.descript.com/','Freemium'],
    ['elevenlabs','ElevenLabs','Audio & Music','Generate natural speech, voices and audio experiences.','https://elevenlabs.io/','Freemium'],
    ['suno','Suno','Audio & Music','Create original songs and music from text prompts.','https://suno.com/','Freemium'],
    ['github-copilot','GitHub Copilot','Coding & Development','AI coding assistant for code completion and agent workflows.','https://github.com/features/copilot','Freemium'],
    ['cursor','Cursor','Coding & Development','AI-first code editor for building and understanding software.','https://cursor.com/','Freemium'],
    ['windsurf','Windsurf','Coding & Development','AI-powered development environment with agentic workflows.','https://windsurf.com/','Freemium'],
    ['replit','Replit','Website & App Creation','Build, run and deploy apps with an AI coding agent.','https://replit.com/','Freemium'],
    ['lovable','Lovable','Website & App Creation','Generate full-stack web apps from natural-language prompts.','https://lovable.dev/','Freemium'],
    ['v0','v0','Website & App Creation','Generate polished web interfaces and app code from prompts.','https://v0.dev/','Freemium'],
    ['julius','Julius AI','Data & Analytics','Analyze spreadsheets and datasets through natural language.','https://julius.ai/','Freemium'],
    ['power-bi','Power BI Copilot','Data & Analytics','Use AI to explore data and create business intelligence reports.','https://www.microsoft.com/en-us/power-platform/products/power-bi','Paid'],
    ['notion-ai','Notion AI','Productivity','Write, summarize and search knowledge inside your workspace.','https://www.notion.so/product/ai','Freemium'],
    ['microsoft-copilot','Microsoft Copilot','Productivity','AI assistance across Microsoft apps and everyday tasks.','https://copilot.microsoft.com/','Freemium'],
    ['zapier','Zapier AI','Automation & AI Agents','Connect apps and automate work with AI-powered workflows.','https://zapier.com/ai','Freemium'],
    ['make','Make','Automation & AI Agents','Visually build automated workflows across thousands of apps.','https://www.make.com/','Freemium'],
    ['n8n','n8n','Automation & AI Agents','Build flexible workflow automations and AI agent systems.','https://n8n.io/','Freemium'],
    ['intercom','Intercom Fin','Customer Support','AI agent that answers customer questions using your support content.','https://www.intercom.com/fin','Paid'],
    ['hubspot','HubSpot AI','Sales & CRM','AI features for marketing, sales and customer relationship workflows.','https://www.hubspot.com/','Freemium'],
    ['deepseek','DeepSeek','AI Infrastructure / Models / APIs','Use capable AI models for reasoning, coding and development.','https://chat.deepseek.com/','Freemium'],
    ['mistral','Mistral AI','AI Infrastructure / Models / APIs','Open and commercial AI models with chat and developer APIs.','https://mistral.ai/','Freemium'],
    ['deepl','DeepL','Translation & Localization','Translate text and documents with natural-sounding results.','https://www.deepl.com/','Freemium'],
    ['semrush','Semrush','SEO','Research keywords, competitors and opportunities to grow search traffic.','https://www.semrush.com/','Paid'],
    ['ahrefs','Ahrefs','SEO','Research keywords, backlinks, and search performance.','https://ahrefs.com/','Paid'],
    ['surfer','Surfer','SEO','Research and optimize search-focused content with SEO workflows.','https://surferseo.com/','Paid'],
    ['clearscope','Clearscope','SEO','Improve content relevance and organic search performance.','https://www.clearscope.io/','Paid'],
    ['otter','Otter.ai','Meetings & Communication','Transcribe meetings and capture searchable notes and actions.','https://otter.ai/','Freemium'],
    ['meshy','Meshy','3D & Game Development','Generate 3D assets from text and images for creative projects.','https://www.meshy.ai/','Freemium'],
    ['harvey','Harvey','Legal','AI platform supporting legal research and professional workflows.','https://www.harvey.ai/','Paid'],
    ['abridge','Abridge','Healthcare','AI clinical documentation and conversation summarization platform.','https://www.abridge.com/','Paid'],
    ['linkedin-learning','Khanmigo','Education & Learning','AI-powered tutoring and learning support from Khan Academy.','https://www.khanacademy.org/khan-labs','Freemium'],
    ['fireflies','Fireflies','Meetings & Communication','Record, transcribe and summarize team conversations.','https://fireflies.ai/','Freemium'],
    ['salesforce','Salesforce AI','Sales & CRM','AI assistance for customer data, sales and service workflows.','https://www.salesforce.com/','Paid'],
    ['pika','Pika','Video','Create and transform short videos with generative AI.','https://pika.art/','Freemium'],
    ['luma','Luma AI','Video','Generate cinematic video and visual content with AI.','https://lumalabs.ai/','Freemium'],
    ['sora','Sora','Video','Create videos from text and image prompts.','https://sora.com/','Paid'],
    ['grammarly-business','LanguageTool','Writing & Text','Check grammar and style across multiple languages.','https://languagetool.org/','Freemium'],
    ['frase','Frase','SEO','Research and optimize search-focused content with AI.','https://www.frase.io/','Paid'],
    ['scite','Scite','Scientific & Academic','Explore scientific literature with citation context.','https://scite.ai/','Freemium'],
    ['crew-ai','CrewAI','Automation & AI Agents','Build teams of AI agents that collaborate on tasks.','https://www.crewai.com/','Freemium'],
    ['webflow','Webflow AI','Website & App Creation','Design and publish professional websites with AI assistance.','https://webflow.com/','Freemium'],
    ['wix','Wix AI','Website & App Creation','Create and manage a website with an AI site builder.','https://www.wix.com/ai-website-builder','Freemium'],
    ['monday-ai','monday AI','Business & Operations','Bring AI into team projects, workflows, and everyday operations.','https://monday.com/ai','Freemium'],
    ['buffer-ai','Buffer AI','Social Media','Draft and adapt social posts for your publishing workflow.','https://buffer.com/ai-assistant','Freemium'],
    ['shopify-magic','Shopify Magic','E-commerce','Create product content and support store workflows with Shopify AI.','https://www.shopify.com/magic','Freemium'],
    ['quickbooks','Intuit Assist','Finance','AI assistance for small-business finance and accounting workflows.','https://quickbooks.intuit.com/','Paid'],
    ['eightfold','Eightfold AI','HR & Recruitment','AI platform for talent acquisition and workforce planning.','https://eightfold.ai/','Paid'],
    ['amazon-q','Amazon Q Developer','IT & DevOps','AI assistant for building, operating, and maintaining software on AWS.','https://aws.amazon.com/q/developer/','Freemium'],
    ['sudowrite','Sudowrite','Writing & Text','Creative writing partner for outlining, drafting, and revising fiction.','https://sudowrite.com/','Freemium'],
    ['novelai','NovelAI','Writing & Text','AI storytelling and image generation for original worlds and characters.','https://novelai.net/','Paid'],
    ['rytr','Rytr','Writing & Text','Writing assistant for marketing copy, articles, and everyday text.','https://rytr.me/','Freemium'],
    ['chatgpt-deep-research','ChatGPT Deep Research','Research & Knowledge','Research mode for investigating a topic and compiling a sourced report.','https://chatgpt.com/','Freemium'],
    ['gemini-deep-research','Gemini Deep Research','Research & Knowledge','Research experience that explores a topic across multiple sources.','https://gemini.google.com/','Freemium'],
    ['consensus','Consensus','Scientific & Academic','Search and synthesize scientific research with answers grounded in papers.','https://consensus.app/','Freemium'],
    ['semantic-scholar','Semantic Scholar','Scientific & Academic','Discover and explore academic papers with AI-powered research tools.','https://www.semanticscholar.org/','Free'],
    ['google-ai-tools','Google AI tools','Research & Knowledge','Explore Google AI products for research, learning, and creative work.','https://ai.google/','Freemium'],
    ['chatgpt-image-generation','ChatGPT image generation','Image & Graphic Design','Create and edit images with image generation built into ChatGPT.','https://chatgpt.com/','Freemium'],
    ['photoshop','Photoshop + Firefly','Image & Graphic Design','Edit, composite, and generate imagery using Photoshop and Firefly.','https://www.adobe.com/products/photoshop.html','Paid'],
    ['adobe','Adobe','Image & Graphic Design','Explore Adobe creative apps and AI-powered tools for visual work.','https://www.adobe.com/creativecloud.html','Paid'],
    ['google-image-generation','Google Image Generation','Image & Graphic Design','Generate and edit images with Google’s image creation tools.','https://gemini.google.com/','Freemium'],
    ['stable-diffusion','Stable Diffusion','Image & Graphic Design','Generate and edit images using Stability AI’s image models.','https://stability.ai/stable-image','Freemium'],
    ['adobe-express','Adobe Express','Image & Graphic Design','Create social graphics, flyers, and branded designs with AI features.','https://www.adobe.com/express/','Freemium'],
    ['figma-ai','Figma AI','Image & Graphic Design','Use AI-assisted features to explore, design, and prototype interfaces.','https://www.figma.com/ai/','Freemium'],
    ['galileo-ai','Google Stitch (formerly Galileo AI)','Image & Graphic Design','Generate and refine interface designs with Google Stitch, the successor to Galileo AI.','https://stitch.withgoogle.com/','Freemium'],
    ['relume','Relume','Website & App Creation','Generate site maps and wireframes for website projects.','https://www.relume.ai/','Freemium'],
    ['google-veo','Google Veo','Video','Create video from prompts with Google DeepMind’s video generation model.','https://deepmind.google/models/veo/','Freemium'],
    ['kling-ai','Kling AI','Video','Generate and edit video from text and image prompts.','https://kling.ai/','Freemium'],
    ['adobe-premiere','Adobe Premiere','Video','Edit video with AI-assisted tools for creators and professionals.','https://www.adobe.com/products/premiere.html','Paid'],
    ['davinci-resolve','DaVinci Resolve','Video','Edit, color grade, and finish video with intelligent production tools.','https://www.blackmagicdesign.com/products/davinciresolve','Freemium'],
    ['capcut','CapCut','Video','Create and edit short-form videos with AI-powered tools.','https://www.capcut.com/','Freemium'],
    ['d-id','D-ID','Video','Create presenter videos and talking avatars from images and text.','https://www.d-id.com/','Freemium'],
    ['tavus','Tavus','Video','Create personalized AI video experiences and digital replicas.','https://www.tavus.io/','Paid'],
    ['google-cloud-speech','Google Cloud AI Speech','Audio & Music','Build speech-to-text and text-to-speech experiences with Google Cloud.','https://cloud.google.com/text-to-speech','Paid'],
    ['openai-audio','OpenAI Text to Speech','Audio & Music','Generate natural-sounding speech through OpenAI audio models.','https://platform.openai.com/docs/guides/text-to-speech','Paid'],
    ['azure-ai-speech','Microsoft Azure AI Speech','Audio & Music','Create speech, transcriptions, and voice experiences with Azure AI.','https://azure.microsoft.com/products/ai-services/ai-speech','Paid'],
    ['playht','PlayHT','Audio & Music','Generate realistic AI voices and speech for audio content.','https://playht.co/','Freemium'],
    ['udio','Udio','Audio & Music','Generate original songs and music from text prompts.','https://www.udio.com/','Freemium'],
    ['stable-audio','Stable Audio','Audio & Music','Generate music and sound effects from text descriptions.','https://stableaudio.com/','Freemium'],
    ['adobe-podcast','Adobe Podcast','Audio & Music','Enhance speech recordings and streamline podcast production.','https://podcast.adobe.com/','Freemium'],
    ['krisp','Krisp','Audio & Music','Reduce background noise and improve audio for calls and recordings.','https://krisp.ai/','Freemium'],
    ['claude-code','Claude Code','Coding & Development','Coding agent that helps plan and implement software changes.','https://claude.com/product/claude-code','Paid'],
    ['openai-codex','OpenAI Codex','Coding & Development','Coding agent for delegating software tasks and working with code.','https://openai.com/codex/','Freemium'],
    ['gemini-code-assist','Gemini Code Assist','Coding & Development','AI coding assistance for development, from code completion to agents.','https://cloud.google.com/products/gemini/code-assist','Freemium'],
    ['bolt','Bolt','Website & App Creation','Build and iterate on web apps from natural-language prompts.','https://bolt.new/','Freemium'],
    ['tableau-ai','Tableau AI','Data & Analytics','Explore data and surface insights with AI capabilities in Tableau.','https://www.tableau.com/products/ai','Paid'],
    ['mem','Mem','Productivity','AI workspace that organizes notes, meetings, and project context.','https://mem.ai/','Freemium'],
    ['obsidian-ai','Obsidian AI','Productivity','Extend a personal knowledge workspace with community AI workflows.','https://obsidian.md/','Freemium'],
    ['salesforce-einstein','Salesforce Einstein','Sales & CRM','AI features for sales, service, and customer relationship workflows.','https://www.salesforce.com/einstein/','Paid'],
    ['apollo','Apollo','Sales & CRM','Find prospects and support sales engagement with AI features.','https://www.apollo.io/','Freemium'],
    ['clay','Clay','Sales & CRM','Research prospects and enrich go-to-market workflows with AI.','https://www.clay.com/','Freemium'],
    ['gong','Gong','Sales & CRM','Analyze customer conversations and support revenue teams.','https://www.gong.io/','Paid'],
    ['opusclip','OpusClip','Social Media','Turn long videos into short social clips with AI.','https://www.opus.pro/','Freemium'],
    ['hootsuite','Hootsuite','Social Media','Plan and manage social publishing with AI-assisted content tools.','https://www.hootsuite.com/','Paid'],
    ['metricool','Metricool','Social Media','Plan, publish, and analyze social media content.','https://metricool.com/','Freemium'],
    ['vidiq','vidIQ','Social Media','Research and optimize video ideas and YouTube channel growth.','https://vidiq.com/','Freemium'],
    ['gamma','Gamma','Presentations & Documents','Create presentations and documents from a prompt or outline.','https://gamma.app/','Freemium'],
    ['beautiful-ai','Beautiful.ai','Presentations & Documents','Design polished slide decks with automated layout assistance.','https://www.beautiful.ai/','Paid'],
    ['openai-agents','OpenAI Agents','Automation & AI Agents','Build AI agents that can use tools and complete multi-step workflows.','https://platform.openai.com/docs/guides/agents','Paid'],
    ['claude-agents','Claude Agents','Automation & AI Agents','Use Claude agent workflows to coordinate research and connected tools.','https://claude.com/','Freemium'],
    ['gemini-agents','Gemini Agents','Automation & AI Agents','Build and use agentic workflows with Google AI models and tools.','https://ai.google.dev/','Freemium'],
    ['copilot-studio','Microsoft Copilot Studio','Automation & AI Agents','Build and manage AI agents and workflows for business processes.','https://copilotstudio.microsoft.com/','Paid'],
    ['lindy','Lindy','Automation & AI Agents','Create AI agents that handle routine work across connected apps.','https://www.lindy.ai/','Freemium'],
    ['relevance-ai','Relevance AI','Automation & AI Agents','Build AI agents and teams to automate business workflows.','https://relevanceai.com/','Freemium'],
    ['autogen','AutoGen','Automation & AI Agents','Open-source framework for building multi-agent applications.','https://microsoft.github.io/autogen/','Free'],
    ['zendesk-ai','Zendesk AI','Customer Support','AI agents and assistance for customer service teams.','https://www.zendesk.com/ai/','Paid'],
    ['ada','Ada','Customer Support','AI customer service automation for support teams.','https://www.ada.cx/','Paid'],
    ['lexis-plus-ai','Lexis+ AI','Legal','AI-assisted legal research and document workflows.','https://www.lexisnexis.com/en-us/products/lexis-plus-ai.page','Paid'],
    ['westlaw-ai','Westlaw AI','Legal','AI-powered legal research and analysis from Westlaw.','https://legal.thomsonreuters.com/en/products/westlaw-ai','Paid'],
    ['cocounsel','CoCounsel','Legal','AI legal assistant for research, review, and drafting tasks.','https://legal.thomsonreuters.com/en/products/cocounsel','Paid'],
    ['nuance-dax','Nuance DAX','Healthcare','AI-powered clinical documentation and ambient note capture.','https://www.microsoft.com/en-us/health-solutions/clinical-workflow/dragon-copilot','Paid'],
    ['nabla','Nabla','Healthcare','AI clinical assistant for documentation and care workflows.','https://www.nabla.com/','Paid'],
    ['google-health-ai','Google Health AI','Specialized Industry AI','Explore AI research and products focused on health and life sciences.','https://health.google/','Freemium'],
    ['tripo','Tripo','3D & Game Development','Generate 3D models from text and images for creative projects.','https://www.tripo3d.ai/','Freemium'],
    ['rodin','Rodin','3D & Game Development','Generate detailed 3D assets from text and visual references.','https://hyper3d.ai/','Freemium'],
    ['blender-ai','Blender AI workflows','3D & Game Development','Explore AI-assisted workflows in Blender for 3D creation.','https://www.blender.org/','Free'],
    ['google-translate','Google Translate','Translation & Localization','Translate text, documents, and web pages between languages.','https://translate.google.com/','Free'],
    ['granola','Granola','Meetings & Communication','AI meeting notes that capture key context and decisions.','https://granola.ai/','Freemium'],
    ['fathom','Fathom','Meetings & Communication','Record, transcribe, and summarize video meetings.','https://fathom.video/','Freemium'],
    ['zoom-ai-companion','Zoom AI Companion','Meetings & Communication','AI assistance for meeting summaries and communication workflows.','https://www.zoom.com/en/ai-assistant/','Freemium'],
    ['glean','Glean','Knowledge Management','Search and use company knowledge across connected workplace apps.','https://www.glean.com/','Paid'],
    ['gpt-models','GPT Models','AI Infrastructure / Models / APIs','OpenAI’s GPT model family and APIs for building AI-powered products.','https://platform.openai.com/docs/models','Paid'],
    ['llama','Llama','AI Infrastructure / Models / APIs','Open models from Meta for research and AI application development.','https://www.llama.com/','Free'],
    ['qwen','Qwen','AI Infrastructure / Models / APIs','Family of AI models and developer resources from Alibaba.','https://qwen.ai/','Freemium'],
  ].map(([id,name,category,description,link,pricing]) => ({ id, name, category, description, link, pricing: pricing as PricingType, section: 'main' as const }))
];

export interface BlogPost {
  id: string;
  slug: string;
  category: 'Guide' | 'Case Study' | 'Comparison' | 'Tutorial' | 'Interview';
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  modifiedDate?: string;
  readTime: number;
  tags: string[];
  featured?: boolean;
  ogImage?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'best-ai-tools-for-freelance-designers-2026',
    category: 'Guide',
    title: 'Best AI Tools for Freelance Designers (2026)',
    excerpt: 'Save hours every week with these powerful AI tools. From Canva Pro to Framer AI, discover the top tools transforming designer workflows.',
    content: `<section class="prose-article">
<h1>Best AI Tools for Freelance Designers in 2026</h1>
<p>The AI revolution has fundamentally changed how designers work. What once took days now takes hours, and what took hours now takes minutes. This comprehensive guide covers 80+ AI tools that are actively used by freelance designers worldwide.</p>

<h2>Why AI Tools Matter for Designers</h2>
<p>The design landscape has shifted dramatically. AI isn't replacing designers—it's amplifying their capabilities. Designers who master these tools are commanding higher rates and delivering more projects.</p>

<h2>Top AI Tools by Category</h2>

<h3>Logo Design Tools</h3>
<ul>
<li><strong>Looka</strong> - AI logo maker that generates thousands of options in seconds</li>
<li><strong>Canva Pro</strong> - All-in-one design with AI magic tools</li>
</ul>

<h3>Image Generation</h3>
<ul>
<li><strong>Adobe Firefly</strong> - Professional-grade image generation</li>
<li><strong>Leonardo AI</strong> - Perfect for concept art and design mockups</li>
</ul>

<h3>Website Building</h3>
<ul>
<li><strong>Framer AI</strong> - Build websites with conversational AI</li>
<li><strong>Hostinger Builder</strong> - AI-powered hosting and design</li>
</ul>

<h2>How to Get Started</h2>
<p>Start with one tool, master it, then expand. Most tools offer free trials—use them to test your workflow before committing financially.</p>

<h2>Conclusion</h2>
<p>The designers thriving in 2026 are those embracing AI as a tool, not fearing it. Pick the right tools for your niche and watch your productivity soar.</p>
</section>`,
    author: 'Design Team',
    publishDate: '2026-01-15',
    readTime: 12,
    tags: ['AI Tools', 'Design', 'Freelance', 'Productivity'],
    featured: true,
  },
  {
    id: 'post-2',
    slug: 'how-i-used-framer-ai-to-deliver-a-client-site-in-4-hours',
    category: 'Case Study',
    title: 'How I used Framer AI to deliver a client site in 4 hours',
    excerpt: 'A detailed case study showing how modern designers leverage AI to compress project timelines without sacrificing quality.',
    content: `<section class="prose-article">
<h1>Case Study: Building a Client Site in 4 Hours with Framer AI</h1>
<p>Last week, a potential client reached out with an urgent request: they needed a professional website in 48 hours. Instead of turning them down, I accepted the challenge using Framer AI. Here's how I did it.</p>

<h2>The Brief</h2>
<p>A small marketing agency needed a modern, professional website showcasing their services. They wanted:</p>
<ul>
<li>Hero section with clear value proposition</li>
<li>Services landing pages</li>
<li>Case studies section</li>
<li>Contact form</li>
<li>Blog integration</li>
</ul>

<h2>The Process</h2>
<p>Breaking it down into 4 hours of work meant being strategic about every step...</p>

<h3>Hour 1: Setup & Design System</h3>
<p>I described the brand vision to Framer AI and let it generate initial design components. Then I customized colors, fonts,and spacing to match brand guidelines.</p>

<h3>Hours 2-3: Page Templates</h3>
<p>Using AI-powered components, I assembled service pages and case study templates. AI suggestions accelerated my decision-making on layout and copy.</p>

<h3>Hour 4: Polish & Deploy</h3>
<p>Final tweaks, form integration, and deployment took less than an hour with Framer's built-in hosting.</p>

<h2>Results</h2>
<p>Client received a beautiful, functional website in 4 hours of work. They were thrilled, I charged premium rates, and booked 3 more projects from their network.</p>

<h2>Key Takeaways</h2>
<ul>
<li>AI amplifies speed without sacrificing quality</li>
<li>Knowing your tools deeply is critical</li>
<li>Client confidence in your process closes deals</li>
</ul>
</section>`,
    author: 'Alex Rivera',
    publishDate: '2026-01-10',
    readTime: 8,
    tags: ['Framer', 'Case Study', 'Web Design', 'AI Tools'],
    featured: true,
  },
  {
    id: 'post-3',
    slug: 'canva-pro-vs-adobe-firefly-comparison-2026',
    category: 'Comparison',
    title: 'Canva Pro vs Adobe Firefly: Which one is worth it in 2026?',
    excerpt: 'An honest comparison of the two biggest players in AI-powered design, helping you choose the right tool for your workflow.',
    content: `<section class="prose-article">
<h1>Canva Pro vs Adobe Firefly: Which Tool Wins in 2026?</h1>
<p>Both Canva Pro and Adobe Firefly have established themselves as essential tools for modern designers. But which one deserves space in your toolkit? Let's compare.</p>

<h2>Canva Pro Overview</h2>
<p>Canva Pro is the all-in-one design solution. It excels at quick turnarounds and offers a massive template library.</p>
<ul>
<li>Price: $13/month</li>
<li>Best for: Social media, marketing materials, presentations</li>
<li>Learning curve: Minimal</li>
</ul>

<h2>Adobe Firefly Overview</h2>
<p>Firefly is Adobe's answer to image generation. It's powerful but part of the Creative Cloud ecosystem.</p>
<ul>
<li>Price: $55/month+ (Creative Cloud)</li>
<li>Best for: Professional image generation, print-quality assets</li>
<li>Learning curve: Moderate</li>
</ul>

<h2>Head-to-Head Comparison</h2>

<h3>Image Quality</h3>
<p><strong>Winner: Adobe Firefly</strong> - Produces higher quality, more nuanced images.</p>

<h3>Speed & Ease of Use</h3>
<p><strong>Winner: Canva Pro</strong> - Faster to learn and execute designs.</p>

<h3>Pricing</h3>
<p><strong>Winner: Canva Pro</strong> - Significantly cheaper at $13/month vs $55/month.</p>

<h3>Integration with Other Tools</h3>
<p><strong>Winner: Adobe Firefly</strong> - Seamless integration with Photoshop, Illustrator, InDesign.</p>

<h2>The Verdict</h2>
<p>If you're a solo freelancer focused on marketing materials and social content: <strong>Canva Pro</strong>.</p>
<p>If you work with high-end clients and need print-quality assets: <strong>Adobe Firefly</strong>.</p>
<p>Pro Tip: Many professionals use both. Canva for quick wins, Firefly for premium work.</p>
</section>`,
    author: 'Design Team',
    publishDate: '2026-01-05',
    readTime: 10,
    tags: ['Comparison', 'Canva', 'Adobe', 'Design Tools'],
    featured: false,
  }
];
