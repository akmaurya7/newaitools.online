import type { ToolAnalysis } from './types.ts';

export const chatgptAnalysis: ToolAnalysis = {
  lastVerified: '2026-09-30',
  summary: 'A general-purpose AI assistant from OpenAI for conversation, writing, research, coding, file and image analysis, image creation, and increasingly agentic workflows across the web and connected apps.',
  company: 'OpenAI',
  officialUrl: 'https://chatgpt.com/',
  status: 'Active and rapidly evolving; capabilities, models, limits, plans, and connected-app availability change regularly.',
  targetUsers: [
    'Students and individual learners',
    'Writers, researchers and knowledge workers',
    'Developers and technical teams',
    'Designers and content creators',
    'Business teams using shared workspaces and connected apps',
    'Organizations building repeatable AI-assisted workflows'
  ],
  problemSolved: 'Provides one conversational interface for generating and transforming content, reasoning over information, researching the web, analyzing files and data, creating images, coding, and orchestrating work across supported tools.',
  howItWorks: 'A user gives ChatGPT an instruction, optionally adds files, images, web-search requirements, or connected-app context, and the selected model and tools produce a response or perform an enabled workflow. The exact capabilities depend on plan, model, region, workspace settings, permissions, and current product rollout.',
  features: [
    { name: 'General chat and writing', detail: 'Brainstorming, drafting, rewriting, summarizing, studying, planning, math, coding and creative work are core use cases.' },
    { name: 'Web search', detail: 'ChatGPT can search the web for current information and provide cited sources.' },
    { name: 'Deep Research', detail: 'Deep Research creates a research plan, searches allowed web/sites/files/apps, synthesizes findings and produces a documented report with citations.' },
    { name: 'File and data analysis', detail: 'Users can upload documents, spreadsheets, presentations and other supported files for analysis, comparison, extraction and visualization.' },
    { name: 'Image creation and analysis', detail: 'ChatGPT can analyze images and create images; generated images include C2PA provenance metadata.' },
    { name: 'Projects and memory', detail: 'Projects organize related chats and files; memory and personalization can retain selected context subject to settings and plan availability.' },
    { name: 'Voice', detail: 'Voice conversations are available on supported plans and apps, with capabilities varying by account and rollout.' },
    { name: 'Connected apps', detail: 'Supported apps can provide searchable context and, where permitted, actions inside ChatGPT. Availability and permissions vary by app, plan and workspace.' },
    { name: 'Agents and Work', detail: 'ChatGPT Work and workspace agents can carry out multi-step tasks, use connected tools and run recurring workflows where the account and workspace support them.' },
    { name: 'Codex', detail: 'Codex provides coding-agent workflows for software development, with availability and limits varying by plan.' }
  ],
  aiAndModels: 'ChatGPT is a product interface that can expose multiple OpenAI models rather than a single fixed model. Current OpenAI documentation lists GPT-5.6 family models and other model options by plan; model availability and limits change over time. The API is a separate developer product and is billed independently from ChatGPT subscriptions.',
  inputsOutputs: 'Inputs can include natural-language instructions, conversation context, files, images, web sources, and context supplied through enabled apps. Outputs can include text, structured analysis, code, citations, generated images, analyzed data, and actions performed through supported connected tools.',
  limits: [
    'Message, reasoning, deep-research, file-upload and other usage limits vary by plan, model and system conditions.',
    'File uploads have a 512 MB per-file hard limit; text/document files are capped at 2M tokens per file, images at 20 MB, and spreadsheets/CSV files at approximately 50 MB.',
    'Free users currently have lower upload allowances than paid plans and may face peak-time reductions.',
    'Web and connected-app results depend on source availability, permissions, indexing and provider restrictions.',
    'AI output can contain mistakes; important factual, financial, legal, medical or production decisions require appropriate verification.',
    'Some agentic actions require user confirmation or are blocked when risk is considered too high.'
  ],
  useCases: [
    'Research briefs and source-backed investigation',
    'Blog, documentation, email and other writing workflows',
    'Learning, tutoring and study support',
    'Code generation, debugging and software-agent tasks',
    'Spreadsheet and dataset analysis',
    'Image ideation, generation and editing',
    'Meeting, document and knowledge summarization',
    'Connected-app research and workplace assistance',
    'Recurring reports and automated business workflows where Work/agents are available',
    'Prototype development and prompt-driven technical exploration'
  ],
  poorFit: [
    'Tasks that require guaranteed factual accuracy without human verification',
    'Highly regulated decisions where an AI response cannot replace qualified professional review',
    'Workflows requiring a specific third-party system that ChatGPT cannot access or whose app permissions are unavailable',
    'High-volume production inference where API economics, latency and deterministic integration requirements are better served by direct API use',
    'Sensitive workflows where the required data controls or retention settings are not available on the selected plan'
  ],
  pricing: [
    { name: 'Free', detail: 'Free tier with basic access and limited usage. Current OpenAI documentation lists web search, data analysis, file/image uploads, image creation and GPT discovery among available capabilities, subject to limits and rollout.' },
    { name: 'Go', detail: 'Consumer plan introduced globally in 2026. OpenAI lists a US price of $8/month and notes that pricing is localized in some markets; it provides expanded access compared with Free.' },
    { name: 'Plus', detail: '$20/month, billed monthly. OpenAI describes higher limits, broader model access, advanced reasoning, faster responses, voice, image generation, file analysis and Deep Research access.' },
    { name: 'Pro', detail: 'OpenAI documents Pro as a higher-usage consumer tier. The current Help Center notes a temporary pause on new sign-ups/upgrades to the $200 Pro 20X plan as of September 10, 2026, while the $100 Pro tier remains available.' },
    { name: 'Business', detail: 'OpenAI currently lists a $20/month standard seat when billed annually or $25/month monthly, plus a $100/$125 premium seat option with higher usage. Business includes a collaborative workspace, connected apps, admin controls and no training on business data by default.' },
    { name: 'Enterprise', detail: 'Custom pricing with expanded context, enterprise security/admin controls, data residency options, priority support and configurable legal/data-retention terms.' },
    { name: 'API', detail: 'API usage is separate from ChatGPT subscriptions and is billed independently according to the API pricing model.' }
  ],
  restrictions: [
    'Feature availability depends on plan, region, workspace settings, account permissions and staged rollouts.',
    'Usage limits can change as OpenAI adjusts models and capacity.',
    'Connected apps can only access information permitted by the user/provider and workspace configuration.',
    'Developer mode and full MCP write/modify support are currently limited to supported Business, Enterprise and Edu environments and are still evolving.',
    'OpenAI usage policies and applicable laws govern acceptable use.'
  ],
  quality: 'ChatGPT can produce useful structured reasoning and source-backed research, but response quality varies with the model, prompt, available evidence and tool configuration. For current claims, web search or Deep Research provides a stronger verification workflow than relying only on model memory.',
  easeOfUse: 'Low setup for ordinary chat: describe the task and iterate. More advanced workflows require choosing the right model/tool, configuring apps or permissions, managing files and understanding plan-specific limits.',
  integrations: [
    'Supported ChatGPT apps and connected services',
    'Google Workspace and Slack in supported business workflows',
    'GitHub and other developer-oriented connections where enabled',
    'Microsoft 365 and workplace tools in supported plans',
    'MCP-powered apps in supported workspaces',
    'OpenAI API and developer ecosystem as a separate integration surface'
  ],
  developer: [
    'The ChatGPT product and OpenAI API are separate surfaces with separate billing and capabilities.',
    'Connected apps can provide read/search context and, for supported apps, actions.',
    'Developer mode supports MCP-powered apps and can expose write/modify actions in supported Business, Enterprise and Edu workspaces.',
    'Workspace agents can be configured with approved apps, permissions, approval checkpoints and schedules.',
    'For application-embedded or high-volume workloads, developers should evaluate the API rather than treating a ChatGPT subscription as API access.'
  ],
  automation: 'ChatGPT supports scheduled tasks in eligible experiences and increasingly agentic workflows. Workspace agents can run recurring jobs, gather information across approved tools and take actions subject to permissions and approval controls. Availability is plan- and workspace-dependent.',
  platforms: ['Web at chatgpt.com','iOS','Android','Desktop experiences where supported','ChatGPT Work on supported plans'],
  privacy: 'Privacy depends on the selected ChatGPT plan, data controls, workspace policies and connected-app permissions. Temporary Chat is not used to create memories and is not used to train models. For Business, OpenAI states workspace data is not used to train models by default and is encrypted in transit and at rest. Connected apps retain their own provider permissions and may expose only the data the user or workspace allows.',
  ownership: 'ChatGPT can generate text, code and images, but users remain responsible for checking originality, third-party rights, licensing terms and the suitability of generated material. OpenAI terms and applicable third-party service terms govern use; generated output should not automatically be treated as free of copyright or other legal restrictions.',
  alternatives: [
    { name: 'Claude', detail: 'Alternative general-purpose assistant with strong writing, analysis and coding workflows.' },
    { name: 'Gemini', detail: 'Google assistant with multimodal capabilities and integration with Google services.' },
    { name: 'Perplexity', detail: 'Research-oriented answer engine emphasizing web retrieval and citations.' },
    { name: 'Microsoft Copilot', detail: 'Assistant closely integrated with Microsoft products and enterprise workflows.' },
    { name: 'OpenAI API', detail: 'Better fit when the requirement is direct application integration, programmatic control and usage-based API billing rather than the ChatGPT UI.' }
  ],
  strengths: [
    'Broad combination of conversation, research, coding, files, data, images and connected tools',
    'Low barrier to entry for non-technical users',
    'Strong ecosystem of models, apps and developer capabilities',
    'Deep Research provides a documented, citation-rich research workflow',
    'Projects, memory and connected apps can support longer-running workflows',
    'Business and Enterprise offerings provide administrative and privacy controls'
  ],
  limitations: [
    'Capabilities and limits change frequently across plans and model rollouts',
    'Some advanced features are unavailable in certain regions or workspaces',
    'AI responses still require verification for consequential decisions',
    'Connected-app actions introduce permission and security considerations',
    'Consumer ChatGPT subscriptions are not a substitute for API access',
    'Advanced agent workflows can require more configuration and governance than ordinary chat'
  ],
  workflow: [
    '1. Define the desired outcome and constraints before choosing a model or tool.',
    '2. For current research, enable web search or Deep Research and request citations.',
    '3. Upload source files when the task depends on private documents; explicitly state which files are authoritative.',
    '4. For coding, ask for a plan, inspect proposed changes, then test the generated code in the real environment.',
    '5. For repetitive work, consider Projects, connected apps, scheduled tasks or workspace agents where available.',
    '6. Review permissions before connecting external services, especially tools that can modify data.',
    '7. Verify important outputs against primary sources and your actual system before publishing or executing them.'
  ],
  takeaway: 'ChatGPT is best understood as a broad AI work interface rather than only a chatbot. Its main value is the combination of multiple models with search, Deep Research, files, images, coding, apps and increasingly agentic workflows. The right plan and tool configuration depend on whether the job is casual assistance, intensive individual work, team collaboration or programmatic automation.',
  sources: [
    { title: 'What is ChatGPT: FAQ', publisher: 'OpenAI Help Center', url: 'https://help.openai.com/en/articles/12677804-what-is-chatgpt-faq', type: 'official' },
    { title: 'ChatGPT Free Tier FAQ', publisher: 'OpenAI Help Center', url: 'https://help.openai.com/en/articles/9275245-using-chatgpt-s-free-tier-faq', type: 'official' },
    { title: 'What is ChatGPT Plus?', publisher: 'OpenAI Help Center', url: 'https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus', type: 'official' },
    { title: 'Introducing ChatGPT Go', publisher: 'OpenAI', url: 'https://openai.com/index/introducing-chatgpt-go/', type: 'official' },
    { title: 'Deep research in ChatGPT', publisher: 'OpenAI Help Center', url: 'https://help.openai.com/en/articles/10500283-deep-research-in-chatgpt', type: 'official' },
    { title: 'File Uploads FAQ', publisher: 'OpenAI Help Center', url: 'https://help.openai.com/en/articles/8555545-file-uploads-faq', type: 'official' },
    { title: 'Connected apps in ChatGPT', publisher: 'OpenAI Help Center', url: 'https://help.openai.com/en/articles/11487775-connected-apps-in-chatgpt', type: 'official' },
    { title: 'Developer mode and MCP apps', publisher: 'OpenAI Help Center', url: 'https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt', type: 'official' },
    { title: 'Workspace agents for business', publisher: 'OpenAI', url: 'https://openai.com/business/workspace-agents/', type: 'official' },
    { title: 'ChatGPT Business pricing', publisher: 'OpenAI', url: 'https://openai.com/business/pricing/', type: 'official' },
    { title: 'ChatGPT Business release notes', publisher: 'OpenAI Help Center', url: 'https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes', type: 'official' }
  ]
};