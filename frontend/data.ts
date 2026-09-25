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
  },
  {
    id: 'ai-coding-agents-pr-first-workflow-small-teams',
    slug: 'ai-coding-agents-pr-first-workflow-small-teams',
    category: 'Tutorial',
    title: 'AI Coding Agents for Small Teams: A PR-First Workflow That Keeps Humans in Control',
    excerpt: 'A practical way to use coding agents for scoped repository work while keeping access, testing, review, and merging visible to the team.',
    author: 'newaitools Editorial',
    publishDate: '2026-09-24',
    readTime: 9,
    tags: ['AI coding agents', 'software development', 'code review', 'developer productivity', 'security'],
    ogImage: '/blog/images/ai-coding-agents-pr-first.png',
    ogImageAlt: 'Editorial illustration of AI-generated code changes passing through a human review gate before reaching a protected repository branch.',
    content: `
      <p>If an AI coding agent can edit files, run commands, and open a pull request, the tempting workflow is to give it a large task and check the result at the end. For a small team, that is usually the wrong boundary.</p>
      <p>A better default is <strong>PR first, merge later</strong>: write a narrow task, give the agent only the repository context it needs, let it work on an isolated branch or sandbox, run the normal checks, and review the diff as you would review a contribution from a new teammate. You get a useful speed boost without turning the default branch into an experiment.</p>
      <p>This guide explains how that workflow maps to the current capabilities documented for GitHub Copilot cloud agent, Cursor, and Claude Code. The product details below were checked on <strong>September 24, 2026</strong>. We did not run hands-on tests or make a claim about which agent writes the best code.</p>

      <h2>Key takeaways</h2>
      <ul>
        <li><strong>Make the pull request the safety boundary.</strong> Agents can prepare changes; a person decides whether they belong in the product.</li>
        <li><strong>Start with a small, testable task.</strong> “Update the checkout flow” is a project. “Add validation for this input and cover these three cases” is an agent-sized request.</li>
        <li><strong>Choose the execution surface deliberately.</strong> Cloud agents, IDE agents, and local sandboxes expose different controls and different failure modes.</li>
        <li><strong>Review the diff, not the agent’s confidence.</strong> A passing test suite is evidence about the tests that ran, not proof that the change is correct.</li>
        <li><strong>Keep secrets, deployment credentials, and production access outside the session.</strong> A repository agent should not need broad access to do ordinary feature work.</li>
      </ul>

      <h2>Why a PR-first workflow is the useful middle ground</h2>
      <p>Small teams often have two bad options: use an agent so cautiously that it only answers questions, or let it make broad changes and rely on a hurried final glance. A pull request creates a more useful middle layer. The agent can research, edit, test, and explain its work; the team can inspect the exact files, checks, and assumptions before merging.</p>
      <p>That structure also matches the guardrails vendors are documenting. GitHub says its cloud agent works in an ephemeral, firewalled environment, creates changes on a branch, and cannot push directly to the default branch. GitHub also says an agent-created pull request still needs human review and merge approval. Those are product controls, not a replacement for your repository’s own branch protection, tests, or review standards.</p>
      <p>Independent research points in the same direction. A 2026 study of more than 33,000 agent-authored pull requests found that security-related agent PRs had lower merge rates and longer review latency than non-security PRs. A separate study found that reviewer engagement was the strongest correlation with successful integration, while larger changes and force pushes were associated with lower merge likelihood. The implication is practical: <strong>the quality of the collaboration loop matters as much as the agent’s ability to produce code.</strong></p>

      <h2>What the current tools actually give you</h2>
      <p>The names overlap, but the working model is different. Use the option that matches where you want the review to happen.</p>
      <div class="overflow-x-auto rounded-lg border border-ink/10"><table class="min-w-[640px]">
        <thead><tr><th>Execution surface</th><th>Best fit</th><th>Documented controls</th><th>Important caveat</th></tr></thead>
        <tbody>
          <tr><td><strong>GitHub Copilot cloud agent</strong></td><td>Issue-to-PR maintenance and small feature work</td><td>Ephemeral environment, firewall, branch restriction, human merge</td><td>Requires the right plan and repository enablement; workflow runs may need approval</td></tr>
          <tr><td><strong>Cursor agent</strong></td><td>Interactive work inside an editor</td><td><code>.cursorignore</code>, approval for terminal commands, limited default network access</td><td>File edits can save immediately; run modes are best-effort guardrails</td></tr>
          <tr><td><strong>Claude Code</strong></td><td>Terminal-led work with configurable permissions</td><td>Permission modes plus filesystem and network sandboxing</td><td>Bypass-style autonomy should be reserved for a genuinely isolated environment</td></tr>
        </tbody>
      </table></div>
      <p>GitHub documents an issue and pull-request workflow for its cloud agent and says it can create a branch, run tests, and request review. Cursor’s security documentation says reading files does not require approval, sensitive actions can require approval, and <code>.cursorignore</code> can block access to selected files. Anthropic describes Claude Code’s sandbox as two boundaries—filesystem and network isolation—and says its web sessions run in isolated cloud sandboxes without git credentials or signing keys inside the environment.</p>
      <p>These descriptions tell you what a product says it can constrain. They do not tell you that every repository is safe to hand to an agent. Your own secrets, CI configuration, dependency scripts, prompt-injection risks, and branch rules still matter.</p>

      <h2>The six-step workflow for a small team</h2>

      <h3>1. Turn the request into a bounded task</h3>
      <p>Give the agent a task with a visible finish line. Include the files or subsystem it may touch, the behavior that must not change, the checks to run, and the shape of the expected output. If you cannot explain how a reviewer will verify the result, the task is probably too broad.</p>
      <p>A useful task brief can be as short as:</p>
      <pre><code>Goal: Add server-side validation for the newsletter signup form.
Context: Keep the existing response shape and error copy.
Allowed: Form handler, validation helper, and focused tests.
Do not change: Authentication, deployment files, or database schema.
Validation: Run the form tests and the full unit test command.
Done when: Invalid addresses are rejected and valid submissions behave as before.
Output: Summarize changed files, checks run, and any remaining uncertainty.</code></pre>

      <h3>2. Put the agent on a branch or in a sandbox</h3>
      <p>Do not make the default branch the agent’s scratch space. For a hosted workflow, confirm the provider’s branch and repository limits. For local work, use a clean branch or worktree. If the agent needs to run project commands, make sure those commands cannot see unrelated credentials, personal files, or production tokens.</p>
      <p>This is also where you decide whether the task belongs in an agent at all. A small UI refactor may be appropriate. A change involving payment authorization, production infrastructure, secret rotation, or regulated data may need a more controlled process and a human-led implementation.</p>

      <h3>3. Give it repository context, not unrestricted authority</h3>
      <p>Repository instructions are useful when they describe conventions the reviewer actually expects: supported runtime versions, test commands, directory ownership, accessibility requirements, and files that must not be edited. They are not a substitute for operating-system permissions or a sandbox.</p>
      <p>Use ignore files, permission rules, workspace trust, and repository settings where the tool supports them. Keep the scope narrow. A prompt that says “use any files and commands needed” may save a few minutes while making the review boundary much harder to reason about.</p>

      <h3>4. Ask for a plan before implementation when the task is ambiguous</h3>
      <p>For a multi-file change, ask the agent to inspect the repository and propose a plan first. Check whether it identified the right entry points, tests, and non-goals. Then let it implement only after the plan is clear. This separates misunderstanding from execution, which is cheaper to correct.</p>

      <h3>5. Require evidence in the pull request</h3>
      <p>The agent’s final message should not be “done.” Ask for a concise summary of changed files, commands run, test results, assumptions, and known limitations. In the pull request, look for a small diff, focused tests, and a description that a teammate can understand without replaying the session.</p>
      <p>Review generated code at the same risk points you would review human code: authentication and authorization, input handling, error paths, data exposure, dependency changes, migrations, shell commands, workflow files, and anything that changes defaults. Let automated checks catch repetition; let a person decide whether the behavior belongs in the system.</p>

      <h3>6. Merge only after the loop converges</h3>
      <p>Use review comments to ask for specific changes rather than repeatedly re-prompting the agent with a larger goal. Stop when the diff is understandable, checks are green, and the remaining uncertainty is acceptable. If the agent keeps widening the change, rewriting unrelated files, or producing verbose explanations without resolving the review point, close the loop and take the task back.</p>

      <h2>Which setup should you choose?</h2>
      <div class="overflow-x-auto rounded-lg border border-ink/10"><table class="min-w-[640px]">
        <thead><tr><th>If your priority is...</th><th>Start with...</th><th>Why</th></tr></thead>
        <tbody>
          <tr><td>Async maintenance from an issue</td><td>GitHub Copilot cloud agent</td><td>The documented flow is already organized around a branch, pull request, checks, and review.</td></tr>
          <tr><td>Fast, interactive iteration in an editor</td><td>Cursor</td><td>You can keep a developer in the loop while using file exclusions and command approvals.</td></tr>
          <tr><td>Terminal control and explicit sandboxing</td><td>Claude Code</td><td>Permission modes and filesystem/network boundaries make the execution model visible.</td></tr>
          <tr><td>Highly sensitive or irreversible work</td><td>Human-led implementation first</td><td>Do not confuse an agent’s safety setting with a compliance decision or a production change-control process.</td></tr>
        </tbody>
      </table></div>
      <p>For a team already using the <a href="/category/coding-and-development">coding and development tool directory</a>, the practical choice is less about picking a universal winner and more about matching the task to the review surface. Browse the <a href="/tool/github-copilot">GitHub Copilot</a>, <a href="/tool/cursor">Cursor</a>, and <a href="/tool/claude-code">Claude Code</a> entries for the current directory links, then verify the provider’s own documentation before enabling a new capability.</p>

      <h2>Three limits to plan for</h2>
      <h3>Guardrails are layers, not magic</h3>
      <p>Permissions, branch restrictions, network controls, and code scanning reduce the blast radius. They do not make prompt injection, malicious dependencies, or a misunderstood requirement disappear. Treat an agent as an untrusted contributor with useful tools, not as a trusted employee with implicit context.</p>

      <h3>Tests measure the checks you wrote</h3>
      <p>An agent can make the existing test suite pass while preserving a bug the suite does not cover. For behavior changes, add or inspect tests that express the actual requirement. For security-sensitive work, review the threat model and the diff directly.</p>

      <h3>Product controls change</h3>
      <p>Plan availability, permission defaults, model routing, privacy settings, and cloud-agent behavior can change by product version, account, workspace, or administrator policy. Check the current documentation and your own organization settings before relying on a control described in an older guide.</p>

      <h2>Our recommendation based on the evidence</h2>
      <p>For most small teams, begin with low-risk maintenance tasks and a strict PR-first loop. Keep the task narrow, isolate the session, require checks, review the actual diff, and make the human merge the last meaningful decision. The agent can be ambitious inside that loop; the repository boundary should not be.</p>
      <p>If the team cannot answer what the agent could read, what it could change, what commands it could run, where credentials live, and who approves the merge, it is not ready for a more autonomous setup. That is not an argument against coding agents. It is the operating discipline that makes them useful.</p>

      <h2>Research notes and sources</h2>
      <p>We reviewed official documentation from <a href="https://docs.github.com/en/copilot/concepts/agents/about-github-agentic-workflows">GitHub Agentic Workflows</a>, <a href="https://docs.github.com/en/copilot/responsible-use/agents">GitHub’s Copilot Agents safety overview</a>, <a href="https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/overview">GitHub’s cloud-agent guide</a>, <a href="https://prod.cursor.com/docs/agent/security">Cursor’s Agent Security documentation</a>, and Anthropic’s <a href="https://www.anthropic.com/engineering/claude-code-sandboxing">Claude Code sandboxing explanation</a>. We also reviewed two independent 2026 studies of agent-authored pull requests: <a href="https://arxiv.org/abs/2601.00477">Security in the Age of AI Teammates</a> and <a href="https://arxiv.org/abs/2602.19441">When AI Teammates Meet Code Review</a>. This is a documentation-based workflow guide, not a hands-on product test, security audit, or guarantee of code quality.</p>
    `
  },
  {
    id: 'ai-deep-research-source-first-workflow',
    slug: 'ai-deep-research-source-first-workflow',
    category: 'Guide',
    title: 'AI Deep Research for Work: A Source-First Workflow That Holds Up',
    excerpt: 'How freelancers, marketers, and small teams can use AI research tools to build a useful brief without confusing citations with proof.',
    author: 'newaitools Editorial',
    publishDate: '2026-09-25',
    readTime: 9,
    tags: ['AI research', 'deep research', 'source verification', 'ChatGPT', 'Gemini', 'Perplexity', 'freelancers'],
    ogImage: '/blog/images/ai-deep-research-source-first.png',
    ogImageAlt: 'Editorial illustration of a researcher checking several source streams before passing a verified summary into a concise research brief.',
    content: `
      <p><strong>Use AI deep research when the question needs several sources, not when you only need one current fact.</strong> The useful workflow is to define the decision you are trying to make, set a source policy, let the tool build a draft map of the evidence, and then verify the claims that matter in the original documents.</p>
      <p>ChatGPT Deep Research, Gemini Deep Research, and Perplexity Pro Search all promise some version of multi-source synthesis with links. The important difference is not which product sounds most thorough. It is <strong>how much control you have over sources, how clearly the research trail is exposed, and how easily you can turn the result into a brief someone else can audit.</strong></p>
      <p>This guide is for freelancers, marketers, researchers, and small teams who need a defensible starting brief without spending an afternoon copying search results into a document. Product details below were checked against public documentation on <strong>September 25, 2026</strong>. We did not run hands-on product tests, compare answer quality on a fixed benchmark, or inspect paid accounts.</p>

      <h2>Key takeaways</h2>
      <ul>
        <li><strong>A citation is a trail, not a warranty.</strong> Open the source and check whether it actually supports the sentence you plan to repeat.</li>
        <li><strong>Choose the research surface by the handoff.</strong> ChatGPT emphasizes source controls and downloadable reports; Gemini is strongest when the work belongs with Google Search, Drive, Gmail, or NotebookLM; Perplexity keeps the answer-and-links loop compact.</li>
        <li><strong>Ask for an evidence map before polished prose.</strong> Separate facts, interpretation, disagreement, and unanswered questions before asking for a final brief.</li>
        <li><strong>Verify the claims that can change a decision.</strong> Prices, policies, product limits, medical or legal claims, and numbers deserve a direct check against a primary source.</li>
        <li><strong>Record freshness and scope.</strong> A brief should say what was checked, when it was checked, which sources were included, and what the tool could not establish.</li>
      </ul>

      <h2>What “deep research” changes—and what it does not</h2>
      <p>Ordinary search is good for a quick lookup. A deep-research mode is designed for a question that requires a plan, several searches, source reading, and a synthesized report. OpenAI describes Deep Research as a tool for multi-step questions and says a report includes citations or source links, a source list, activity history, and export options. Google’s help documentation says Gemini creates a research plan that you can edit before it starts, while Perplexity describes Pro Search as a multi-search process that synthesizes sources and shows how it approached the question.</p>
      <p>Those are meaningful workflow improvements. They can reduce the mechanical work of finding, opening, and grouping material. They do not turn a generated paragraph into verified evidence. The model still decides which passages to emphasize, may miss a relevant source, and can write a conclusion that is more confident than the underlying material.</p>
      <p>The right mental model is <strong>research assistant plus triage layer</strong>. Let the system widen the search and reveal a useful structure. Keep the final judgment, source check, and wording of consequential claims with a person.</p>

      <h2>How the current research tools differ</h2>
      <p>The table below describes documented workflow controls, not a quality ranking. Features can vary by plan, region, account, workspace, and product version.</p>
      <div class="overflow-x-auto rounded-lg border border-ink/10"><table class="min-w-[760px]">
        <thead><tr><th>Tool</th><th>Documented source controls</th><th>Useful handoff</th><th>Best fit</th></tr></thead>
        <tbody>
          <tr><td><strong>ChatGPT Deep Research</strong></td><td>Public web, uploaded files, and supported connected apps. You can restrict research to specific sites or prioritize them while allowing broader search.</td><td>Citations, source list, activity history, table of contents, and downloads in Markdown, Word, or PDF.</td><td>A brief that needs an explicit research trail or a controlled source list.</td></tr>
          <tr><td><strong>Gemini Deep Research</strong></td><td>Google Search is included by default; you can add Gmail, Drive, uploaded files, and NotebookLM notebooks where available. The plan can be edited before research starts.</td><td>Share the report, export to Google Docs, or copy the contents. Some higher-tier reports can add visuals.</td><td>Research that already lives in Google Workspace or a NotebookLM source set.</td></tr>
          <tr><td><strong>Perplexity Pro Search</strong></td><td>Multiple search modes include Web, Academic, Finance, and Files. The documentation says it searches across sources and provides direct links.</td><td>A compact answer with linked sources and follow-up questions in the same session.</td><td>Fast source discovery, landscape scans, and a quick first pass before deeper verification.</td></tr>
        </tbody>
      </table></div>
      <p>For a closer look at the directory entries, see the <a href="/tool/chatgpt">ChatGPT</a>, <a href="/tool/gemini">Gemini</a>, and <a href="/tool/perplexity">Perplexity</a> pages, then confirm current access and limits in the providers’ own documentation. A directory description is a starting point, not a substitute for account-specific terms.</p>

      <h2>A source-first workflow for a useful research brief</h2>
      <h3>1. Start with a decision, not a topic</h3>
      <p>“Research AI video tools” is a topic. “Choose a tool for a two-person marketing team that needs captioned social clips, shared review, and predictable export” is a decision. The second version gives the research a stopping point and makes irrelevant information easier to reject.</p>
      <p>Write down the audience, the decision, the date by which the answer must be current, and the two or three constraints that would change the recommendation. If you cannot say what the brief will help someone decide, the prompt is still too broad.</p>

      <h3>2. Set a source policy before the tool searches</h3>
      <p>Tell the tool what counts as strong evidence for the question. For product research, that might mean official pricing, support, security, and API documentation first, followed by independent reporting for real-world limitations. For market research, it could mean government data, company filings, trade organizations, and named research firms. For academic questions, specify the databases or journals you trust.</p>
      <p>Also name what should be treated cautiously: affiliate roundups, undated listicles, anonymous claims, and pages that repeat one another without linking to an original source. The point is not to ban useful leads. It is to stop a convenient source from silently becoming the foundation of the brief.</p>

      <h3>3. Ask for a research plan and an evidence map</h3>
      <p>Before asking for polished copy, request a plan with the questions it will answer, the source types it will seek, and the criteria it will use to compare evidence. Then ask for a compact evidence map with one row per important claim:</p>
      <blockquote><p><strong>Claim:</strong> What the brief may say.<br><strong>Source:</strong> Original page or document.<br><strong>Evidence:</strong> The passage, number, or table that supports it.<br><strong>Freshness:</strong> Publication or last-updated date, plus date checked.<br><strong>Status:</strong> Verified, partial, disputed, or still open.<br><strong>Use:</strong> Keep, qualify, or omit.</p></blockquote>
      <p>This separates retrieval from judgment. It also makes the final brief easier for a colleague to review: they can inspect the few claims that drive the recommendation instead of rereading every search result.</p>

      <h3>4. Follow links back to the original source</h3>
      <p>Do not stop at the citation label. Open the linked page, confirm that it is the right document, and check the surrounding context. A product page may describe a feature but not its plan restriction. A study abstract may support a narrow result but not the broader sentence an AI summary has written around it. A news article may report a claim while the primary filing or announcement contains the qualification.</p>
      <p>For fast-moving subjects, record the date checked next to every time-sensitive fact. A source can be genuine and still be stale for the question you are answering.</p>

      <h3>5. Ask the tool to show disagreement</h3>
      <p>A smooth consensus is not automatically a good research result. Ask for claims that sources disagree about, evidence that is missing, and conclusions that depend on an assumption. If every source says the same thing, check whether they are all quoting one original announcement.</p>
      <p>This is especially important for recommendations. The best option for a freelancer may not be the best option for an enterprise team, and a documented feature may still be awkward in a particular workflow. Ask for the consequence of each difference, not just a longer list of features.</p>

      <h3>6. Produce the brief last</h3>
      <p>Only after the evidence map is usable should you ask for a one-page brief. Give it a fixed shape: answer first, evidence behind the answer, meaningful trade-offs, open questions, and a short list of links. Keep the original source list with the brief. If the result will guide a purchase, policy, health decision, legal decision, or public claim, add a human review step before anyone acts on it.</p>

      <h2>Why citations still need a human check</h2>
      <p>Independent research gives a useful reason for this discipline. A <a href="https://www.nature.com/articles/s41586-025-10072-4">Nature study of retrieval-augmented systems for scientific literature</a> found that retrieval generally improved performance over relying on model memory, but also reported fabricated or unsupported citations in several model setups. The study is about scientific literature, not a current consumer-product leaderboard, so its numbers should not be copied into a general accuracy claim. Its practical lesson is broader: retrieval helps, but citation presence and citation support are separate questions.</p>
      <p>A 2026 paper in <a href="https://proceedings.mlr.press/v318/kakimov26a.html">Proceedings of Machine Learning Research</a> proposes auditing not only which documents are cited, but also where those documents came from. Its case study of Google AI Overviews found evidence that AI-generated documents were cited more frequently than human-authored documents in the tested setting. Another 2026 preprint, <a href="https://arxiv.org/abs/2605.23684">Synthetic Sources?</a>, reported evidence of AI-generated sources appearing among citations across four generative search engines. These are research findings with their own methods and limits, not proof that every answer from a particular tool is unreliable. They are a good argument for checking provenance instead of treating a linked answer as self-authenticating.</p>
      <p>The practical rule is simple: <strong>the more a claim matters, the closer you should get to the source that created it.</strong> Use AI to find and organize evidence. Use the original document to decide whether the evidence supports your wording.</p>

      <h2>Which setup should you choose?</h2>
      <div class="overflow-x-auto rounded-lg border border-ink/10"><table class="min-w-[660px]">
        <thead><tr><th>If you care most about...</th><th>Start with...</th><th>Why</th></tr></thead>
        <tbody>
          <tr><td>A controlled list of domains and a downloadable audit trail</td><td>ChatGPT Deep Research</td><td>Its documented site controls, sources section, activity history, and report exports match that handoff.</td></tr>
          <tr><td>Research grounded in Drive, Gmail, or NotebookLM</td><td>Gemini Deep Research</td><td>Its source picker and Google Workspace connections fit work already stored in that ecosystem.</td></tr>
          <tr><td>A fast scan of a new topic with linked leads</td><td>Perplexity Pro Search</td><td>Its search modes and compact answer-plus-links loop are suited to discovery before verification.</td></tr>
          <tr><td>A sensitive, high-consequence decision</td><td>Human-led research with AI assistance</td><td>Use the tool to widen the search, but keep source selection, interpretation, and sign-off with a qualified person.</td></tr>
        </tbody>
      </table></div>
      <p>There is no need to force one tool into every stage. A sensible workflow can use one system for discovery, a focused source set for verification, and a document or spreadsheet as the review record. The decision should follow the evidence handoff, not the product label.</p>

      <h2>Limits to plan for</h2>
      <p><strong>Access is not uniform.</strong> OpenAI, Google, and Perplexity all document differences tied to plans, regions, workspace settings, model access, or usage limits. A feature visible in a help article may not be available in your account.</p>
      <p><strong>Connected sources create a responsibility boundary.</strong> Adding Drive, Gmail, SharePoint, uploaded files, or other private material can make research more relevant, but you still need to check permissions, retention, sharing, and whether the final brief contains information the recipient should not see.</p>
      <p><strong>A polished report can hide uncertainty.</strong> Keep disputed claims and missing evidence visible. If the source does not settle the question, the correct output may be “not established yet,” followed by what would resolve it.</p>

      <h2>Our recommendation based on the evidence</h2>
      <p>For most professional research, start with the tool whose source controls and output format match the person who will review the work. Then use a source-first brief: define the decision, specify acceptable sources, inspect the plan, maintain an evidence map, verify consequential claims, and preserve the links and check date.</p>
      <p>That workflow is modest by design. It does not promise that deep research will find everything or that citations will always be right. It gives a small team something more valuable: a research result that can be questioned, updated, and handed to another person without asking them to trust a black box.</p>

      <h2>Research notes and sources</h2>
      <p>We reviewed current public documentation from <a href="https://help.openai.com/en/articles/10500283-deep-research-in-chatgpt">OpenAI’s Deep Research help page</a>, <a href="https://support.google.com/gemini/answer/15719111?hl=en">Google’s Gemini Deep Research help page</a>, and <a href="https://www.perplexity.ai/help-center/en/articles/10352903-what-is-pro-search">Perplexity’s Pro Search documentation</a> on September 25, 2026. We also reviewed independent work from <a href="https://www.nature.com/articles/s41586-025-10072-4">Nature</a>, <a href="https://proceedings.mlr.press/v318/kakimov26a.html">Proceedings of Machine Learning Research</a>, and the <a href="https://arxiv.org/abs/2605.23684">Synthetic Sources?</a> preprint. This article compares documented workflows and research evidence; it is not a hands-on product test, a benchmark, a security audit, or legal, medical, or financial advice.</p>
    `
  }
];
