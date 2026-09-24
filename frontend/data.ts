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
  ogImageAlt?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'ai-notes-client-calls-consent-first',
    slug: 'ai-notes-client-calls-consent-first',
    category: 'Guide',
    title: 'AI Notes on Client Calls: A Consent-First Workflow for Freelancers',
    excerpt: 'A practical guide to deciding when to use AI meeting notes, how to explain them to clients, and how to review and share the smallest useful record.',
    author: 'newaitools Editorial',
    publishDate: '2026-09-24',
    readTime: 8,
    tags: ['AI meeting notes', 'freelancers', 'client communication', 'privacy', 'productivity'],
    featured: true,
    ogImage: '/blog/images/ai-notes-client-calls.webp',
    ogImageAlt: 'Editorial illustration of a client video call flowing into a human-reviewed meeting summary, with a visible consent check and one action item passed forward.',
    content: `
      <p>If you use an AI notetaker on a client call, treat it as a guest that needs an introduction and a clear purpose. Tell the client what the tool will capture, ask for an affirmative yes before it starts, and offer a no-recording option without friction. Then review the draft notes yourself and share only the agreed follow-up, not a recording or full transcript by default.</p>
      <p>This workflow takes a little more care than switching on an assistant for every meeting. It also makes the useful part of AI notes—remembering decisions and next steps—less likely to create an unexpected privacy or client-trust problem.</p>

      <h2>What this guide covers</h2>
      <p>This is a practical operating guide for independent professionals and small teams, not legal advice. Product features and account settings change, so the details below were checked against public help pages on <strong>September 24, 2026</strong>. We did not test these products or inspect paid accounts. Availability, defaults, and controls can vary by plan, administrator policy, meeting platform, and product version.</p>

      <h2>Start with the minimum useful capture</h2>
      <p>Before choosing an app, ask what you actually need to remember. A project kick-off may need decisions, owners, and deadlines. A confidential discovery call may be better served by a few manual notes and a client-approved recap. A complete audio or video archive is often more information than the follow-up requires.</p>
      <p>Think of this as a <strong>capture budget</strong>: choose the least detailed record that solves the recall problem, then decide how long it is useful and who needs access. The order matters. A summary can still expose sensitive details, but a transcript or recording preserves much more raw conversation and is easier to search, forward, or misunderstand later.</p>

      <h2>What the current tools do differently</h2>
      <p>“AI notes” describes several different capture methods. A meeting app may process speech during the call without keeping a transcript; another feature may save notes to cloud storage; a third-party assistant may join as a visible participant or offer a bot-free desktop mode. Check the actual mode and sharing defaults you plan to use.</p>
      <table>
        <thead><tr><th>Option</th><th>What the documentation says</th><th>Useful check before a client call</th></tr></thead>
        <tbody>
          <tr><td><strong>Manual notes</strong></td><td>No meeting audio needs to be sent to a transcription service. You choose what to write down.</td><td>Agree what will be recorded in writing and keep the notes to decisions and actions.</td></tr>
          <tr><td><strong>Microsoft Teams Copilot</strong></td><td>Microsoft documents an “Only during the meeting” mode that can generate notes and tasks without recording or transcribing. Its help page says the prompts and responses may still be retained under an organization’s Purview policies.</td><td>Confirm the mode, organization policy, and whether you need any post-meeting recap. Without a transcript, Copilot is not available in the Recap tab afterward.</td></tr>
          <tr><td><strong>Google Meet “Take notes for me”</strong></td><td>Meeting notes are saved in the organizer’s Drive and follow the organization’s Meet retention policy. An administrator can enable a participant-consent requirement for notes, recordings, and transcripts on supported editions; Google says this setting is off by default.</td><td>Check whether the admin setting is actually enabled, who can access the document, and whether invited guests receive it. A setting existing in the admin console does not mean your account uses it.</td></tr>
          <tr><td><strong>Fathom</strong></td><td>Current documentation describes bot-free transcript-only capture as well as audio-only and bot-based audio-and-video modes. The legacy bot-based consent email has eligibility limits; same-day meetings do not trigger it, and no response does not stop capture.</td><td>Select the capture mode deliberately, ask in the meeting, and inspect attendee auto-share settings. Fathom offers “summary only” and “nothing” as alternatives to automatically sharing a recording.</td></tr>
          <tr><td><strong>Otter</strong></td><td>Its recording-permissions guide describes advance and in-meeting notices and calls for affirmative individual permission. Workspace controls for pre-meeting notifications and custom retention require admin attention; custom retention is set up through an account manager.</td><td>Check whether your workspace has those controls and what the participant sees. A pre-meeting email alone is not the same as confirming everyone agrees when the call begins.</td></tr>
        </tbody>
      </table>
      <p>Sources: <a href="https://support.microsoft.com/en-us/teams/copilot/use-copilot-without-transcribing-or-recording-a-teams-meeting-or-call">Microsoft’s Copilot no-transcription guide</a>; <a href="https://support.google.com/meet/answer/14754931?hl=en">Google Meet notes help</a> and <a href="https://workspaceupdates.googleblog.com/2026/04/require-explicit-consent-for-take-notes-with-Gemini-recordings-and-transcripts-in-Google-Meet.html">Google’s participant-consent announcement</a>; <a href="https://help.fathom.video/en/articles/294272">Fathom’s consent-email rules</a>, <a href="https://help.fathom.video/en/articles/11577345">capture modes</a>, and <a href="https://help.fathom.video/en/articles/7574785">sharing controls</a>; <a href="https://help.otter.ai/hc/en-us/articles/39339238308503-Recording-Permissions-with-Otter">Otter’s recording-permissions guide</a> and <a href="https://help.otter.ai/hc/en-us/articles/19500988656279-Set-a-custom-Data-Retention-policy">retention policy guide</a>.</p>

      <h2>A repeatable workflow for a client call</h2>
      <h3>1. Decide what is off limits</h3>
      <p>Before sending an invitation, check your contract, client instructions, workplace rules, and the sensitivity of the subject. For a call involving confidential business plans, personal data, legal advice, health information, or another sensitive topic, consider manual notes or a platform setting that does not save a transcript. If a client agreement or governing policy prohibits recording or external processing, do not add a notetaker just because the calendar integration makes it easy.</p>
      <p>Rules for recording and processing vary by location and context. A software prompt is not a legal determination. If the call crosses jurisdictions or involves regulated or privileged information, get guidance from the appropriate legal, privacy, or compliance adviser before using the tool.</p>

      <h3>2. Explain the purpose before the meeting</h3>
      <p>Give the client time to ask questions before joining. State the tool or service, why you want it, what it captures, where the notes will be stored, who can access them, whether anything is shared automatically, and when you plan to delete it. Avoid vague phrases like “AI helps us work better.” Name the concrete activity: transcription, summarization, action-item extraction, or recording.</p>
      <p><strong>Invite wording:</strong> “For accurate project notes, I’d like to use [tool] to [transcribe the call / prepare a short summary]. The notes will be stored in [location], visible to [people], and I will not share the recording or transcript. Would you be comfortable with that? We can keep the call unrecorded and I’ll send a short recap instead.”</p>

      <h3>3. Ask again before capture starts</h3>
      <p>At the start of the call, briefly identify the assistant and ask whether everyone agrees. Wait for an affirmative answer. If someone declines, pause or remove the assistant, confirm capture has stopped, and continue with manual notes or reschedule if the recording is essential. Do not make the client argue for the option that protects their privacy.</p>
      <p>This distinction is important in the product details. Google now offers an administrator-controlled explicit-consent prompt for certain Meet features, but the option is off by default. Fathom says its advance consent email can miss same-day meetings, and its older bot-based flow can still capture when a guest does not respond. Treat product notifications as useful notice mechanisms, not as proof that a particular client has agreed.</p>

      <h3>4. Choose the least detailed mode that works</h3>
      <p>If all you need is a decision list, do not keep video by default. Where the tool offers a no-recording or transcript-only setting, read what “transcript only” means for that version: it may avoid saving audio or video, while still processing and retaining text. The data life cycle matters more than the mode label. Check the provider’s current privacy and retention terms, your account’s deletion controls, and whether generated notes are automatically shared.</p>

      <h3>5. Review every client-facing fact</h3>
      <p>Use the AI output as a draft. Check names, dates, numbers, commitments, speakers, negations, and action owners against your own notes or the conversation. Pay special attention to a tentative idea the summary might turn into a promise, or a suggestion that could be misattributed to the client. If you cannot verify a detail, leave it out or ask the client to confirm.</p>
      <p>Google warns that notes may be incomplete, inaccurate, or unavailable. Microsoft likewise tells users to check AI-generated recaps. Fluent wording is not evidence that the record is correct.</p>

      <h3>6. Share a concise, permission-aware recap</h3>
      <p>Send the edited project recap through the channel you already use with the client. Keep it to decisions, open questions, owners, and dates. Do not automatically send a full transcript or recording link. Check that document permissions are restricted to intended recipients: a calendar invite or a “share with attendees” setting can include people who did not attend or do not need a copy. Fathom’s documentation, for example, says automatic sharing may go to all calendar invitees and that a recording set to “anyone with the link” remains accessible to anyone who receives that link.</p>

      <h3>7. Remove what you no longer need</h3>
      <p>Make deletion part of the workflow, not an occasional cleanup project. Set a reminder or retention rule for raw audio, video, and transcripts; keep only the final notes that your project and recordkeeping requirements call for. Check whether deletion from the meeting app also removes exports, shared files, or connected-storage copies. If a client asks to stop capture or remove a record, follow your agreed process and confirm what you can delete.</p>

      <h2>When the client says no</h2>
      <p>Respond plainly: “No problem. I’ll take notes manually and send you the decisions and next steps for confirmation.” You can keep a short agenda, pause at decision points to write them down, then send a recap and ask the client to correct it. If you are joining someone else’s meeting and an unfamiliar assistant appears, ask who controls the recording, what it captures, and who can see the result. The Associated Press’s reporting on workplace AI notetakers documents privacy and voice-data concerns and quotes experts recommending that people ask where meeting data goes, why it is stored, and when it will be deleted. The same questions are sensible due diligence for a freelancer choosing a vendor.</p>

      <h2>Practical takeaway</h2>
      <p>AI notes can help a freelancer keep projects moving, but a trustworthy workflow begins before the recording control does. Choose the minimum capture, explain it in ordinary language, obtain a clear yes, check the generated record, share a short recap with the right people, and delete the raw material when it is no longer needed. When consent is uncertain or the subject is sensitive, manual notes are a perfectly useful fallback.</p>

      <h2>Research notes and sources</h2>
      <p>We reviewed official help and product documentation from <a href="https://support.microsoft.com/en-us/teams/copilot/use-copilot-without-transcribing-or-recording-a-teams-meeting-or-call">Microsoft</a>, <a href="https://support.google.com/meet/answer/14754931?hl=en">Google Meet</a>, <a href="https://help.fathom.video/en/articles/294272">Fathom</a>, and <a href="https://help.otter.ai/hc/en-us/articles/39339238308503-Recording-Permissions-with-Otter">Otter</a>, then checked the privacy stakes against an <a href="https://www.ap.org/news-highlights/spotlights/2026/ai-notetakers-promise-easy-meeting-recaps-but-some-professionals-question-their-use/">Associated Press report</a> published July 9, 2026. This article compares documented features and workflows; it is not a hands-on product test, a security audit, or a legal opinion.</p>
    `
  }
];
