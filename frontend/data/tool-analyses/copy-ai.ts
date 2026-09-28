import type { ToolAnalysis } from './types.ts';

export const copyAiAnalysis: ToolAnalysis = {
  lastVerified: '2026-09-28',
  summary: 'Copy.ai has expanded from an AI copywriting tool into a broader GTM AI platform. Its current product combines model-agnostic Chat, reusable Workflows, constrained Agents, Tables, Infobase and Brand Voice for sales and marketing operations.',
  company: 'Copy.ai',
  officialUrl: 'https://www.copy.ai/',
  status: 'Active. The current product positioning is centered on GTM AI, workflow automation, content and sales operations rather than only standalone copy generation.',
  targetUsers: ['Marketing teams and agencies', 'Sales and SDR teams', 'Revenue operations teams', 'Content and brand teams', 'GTM leaders and enterprise teams', 'Developers automating workflows through APIs and integrations'],
  problemSolved: 'Copy.ai is designed to reduce repetitive GTM work by turning research, content creation, lead processing, enrichment and other repeatable business processes into reusable AI workflows that connect to existing systems.',
  howItWorks: 'Users can chat with multiple model providers for one-off tasks, then codify successful processes as Workflows. Workflows combine AI Actions, integrations, data and optional constrained Agents; Infobase and Brand Voice supply reusable company context and style. The resulting workflow can be run repeatedly or triggered from connected systems.',
  features: [
    { name: 'AI Chat', detail: 'A general workspace that currently exposes OpenAI, Anthropic and Gemini models for one-off GTM tasks.' },
    { name: 'Workflows', detail: 'Multi-step AI processes that codify repeatable business playbooks, combining research, generation, transformations, integrations and logic.' },
    { name: 'AI Actions', detail: 'Prebuilt workflow actions can write, extract information, search the web, scrape URLs, translate, analyze SEO content, update Salesforce and perform many other operations.' },
    { name: 'Constrained Agents', detail: 'Agentic Actions make goal-oriented micro-decisions inside workflows while allowing configurable constraints and guardrails.' },
    { name: 'Infobase + Brand Voice', detail: 'Store company/product context and brand guidance once, then reference it in generation so outputs are more consistent.' },
    { name: 'Tables', detail: 'A queryable data layer intended to consolidate information from disparate sources and power AI automation.' },
    { name: 'GTM use cases', detail: 'Current positioning includes prospecting, content creation, inbound lead processing, ABM, translation/localization and deal coaching/forecasting.' }
  ],
  aiAndModels: 'Copy.ai describes itself as model-agnostic. Its current Chat page exposes OpenAI, Anthropic and Gemini models, while the platform describes using the best-suited model for different workflows. The public product pages do not provide a complete fixed mapping from every Workflow/Action to a specific underlying model, so individual providers should not be inferred beyond what Copy.ai documents.',
  inputsOutputs: 'Inputs vary by workflow and can include prompts, text, documents, URLs, web research, CRM records, brand information, product data and structured fields. Outputs can include marketing copy, sales messages, research, enriched records, classifications, summaries, workflow results and updates pushed into connected systems.',
  limits: [
    'Workflow cost depends on the number and complexity of actions and content; Copy.ai measures this with Workflow credits.',
    'Current self-serve pricing is substantially different from older Copy.ai pricing pages and reviews, so historical $49/$249 plan references should not be treated as current.',
    'The current pricing page shows Chat at $29/month monthly or $24/month when billed annually, while larger Growth, Expansion and Scale tiers are priced for teams and include workflow-credit allocations.',
    'Enterprise features such as API access, bulk workflow runs, 20+ technical integrations, unlimited customizable workflows and designated support are part of the Enterprise offering.',
    'AI outputs can still be wrong or incomplete; workflows that affect CRM records, customer communications or publishing should have validation and appropriate human oversight.',
    'Infobase and brand context improve consistency but do not guarantee factual correctness.',
    'Some integrations and workflow capabilities are plan-dependent and may consume credits based on execution complexity.'
  ],
  useCases: [
    'Research accounts and contacts and generate personalized sales outreach.',
    'Automate inbound lead enrichment, qualification, scoring and follow-up.',
    'Create SEO, thought-leadership, product and campaign content from repeatable playbooks.',
    'Generate sales enablement assets and personalize outreach at scale.',
    'Connect conversational intelligence and CRM data to deal coaching or opportunity analysis.',
    'Translate and localize marketing content across supported languages.',
    'Build scheduled or event-triggered workflows that pass results into Slack, Teams, CRM, CMS and other systems.'
  ],
  poorFit: [
    'A user who only wants the cheapest simple AI writer or chatbot.',
    'Teams needing direct, low-level control over one fixed foundation model and its inference parameters.',
    'High-stakes automated publishing or CRM mutation with no review, monitoring or rollback path.',
    'Projects where workflow credit consumption cannot be estimated or controlled.',
    'Sensitive data workflows where the organization has not reviewed Copy.ai and relevant third-party provider terms, retention and contractual controls.'
  ],
  pricing: [
    { name: 'Chat', detail: 'Current official pricing lists 5 seats, unlimited words in Chat, unlimited Chat projects and access to OpenAI, Anthropic and Gemini models at $29/month billed monthly or $24/month when billed annually.' },
    { name: 'Growth', detail: 'Current official pricing lists 75 seats, unlimited Chat words and 20,000 Workflow credits/month at $1,000/month, billed annually at $12,000.' },
    { name: 'Expansion', detail: 'Current official pricing lists 150 seats and 45,000 Workflow credits/month at $2,000/month, billed annually at $24,000.' },
    { name: 'Scale', detail: 'Current official pricing lists 200 seats and 75,000 Workflow credits/month at $3,000/month, billed annually at $36,000.' },
    { name: 'Enterprise', detail: 'Custom pricing with guided implementation, API access and bulk Workflow runs, 20+ technical integrations, unlimited customizable Workflows, designated support and enterprise-grade security protocols.' },
    { name: 'Workflow credits', detail: 'A credit represents computational work used by a Workflow. The amount consumed varies with workflow complexity, content and actions; Copy.ai exposes the credits used for a run.' }
  ],
  integrations: [
    'Copy.ai currently advertises 2,000+ integrations and highlights Salesforce, HubSpot, Gong, Zapier, Outreach and Salesloft.',
    'CRM workflows can connect Salesforce and HubSpot for enrichment, scoring, routing and synchronization.',
    'Zapier can trigger Copy.ai Workflows and can trigger downstream actions when a Workflow run completes.',
    'Productivity and publishing workflows can connect tools such as Google Workspace, Notion, Coda and CMS systems.',
    'Slack and Microsoft Teams can receive workflow outputs, alerts, summaries and action items.'
  ],
  developer: [
    'Enterprise pricing explicitly includes API access and bulk Workflow runs.',
    'Copy.ai documents Workflow APIs and workspace API keys for integrations such as Zapier.',
    'Zapier supports a Run Workflow action and a Completed Workflow Run trigger; workflow runs fail when the workspace reaches its credit limit.',
    'Copy.ai Workflows can be triggered by events in connected systems, enabling CRM, scheduling and operational automation.',
    'AI Actions are designed as reusable building blocks inside workflows; Copy.ai currently says custom AI Actions are not yet available.',
    'Agentic Actions add bounded AI decision-making inside workflows rather than exposing an unrestricted autonomous agent.'
  ],
  privacy: 'Copy.ai advertises SOC 2 Type II compliance, GDPR-related controls and says it does not train its models on customer data. Its current security page says prompts and creative inputs are not shared with other customers and that Copy.ai does not sell user data. The public Privacy Notice says the service processes prompts, uploaded files and other content, may use third-party service providers, and can transfer personal data internationally. Organizations should review the current privacy notice, contractual terms and applicable provider/subprocessor arrangements before sending regulated or highly sensitive information.',
  ownership: 'Copy.ai is intended for commercial GTM work, but users remain responsible for the material they submit and for rights and accuracy of generated outputs. The practical commercial-use rule is to review factual claims, third-party material, trademarks, confidential information and regulated content before publication or automated customer-facing use. Do not treat AI generation as a substitute for legal or editorial review.',
  alternatives: [
    { name: 'Jasper', detail: 'A strong alternative for brand-focused marketing content; Copy.ai is more differentiated when GTM workflow automation and connected sales operations are central.' },
    { name: 'Writesonic', detail: 'Strong when content creation is combined with SEO and AI-search visibility measurement; Copy.ai is more centered on GTM workflows, sales and operations automation.' },
    { name: 'ChatGPT / Claude / Gemini', detail: 'Better for general-purpose assistance and direct model ecosystems; Copy.ai adds reusable GTM workflows, actions, integrations and organizational context.' },
    { name: 'Zapier + an AI model', detail: 'More modular for teams that want to assemble their own automation stack; Copy.ai provides a more purpose-built GTM workflow layer.' }
  ],
  strengths: [
    'Strong shift from one-off writing to repeatable GTM process automation.',
    'Model-agnostic positioning reduces dependence on a single LLM provider.',
    'Workflow Actions, integrations and constrained Agents can connect AI decisions to real business systems.',
    'Infobase and Brand Voice provide reusable organizational context.',
    'Broad integration ecosystem and enterprise API/bulk-run options.',
    'G2 review data has historically rated Copy.ai highly for ease of use and setup, although current product scope is broader than many older reviews.'
  ],
  limitations: [
    'Current pricing is much more enterprise/GTM-oriented than the historical image of Copy.ai as a low-cost copywriter.',
    'Credit-based workflow pricing makes cost depend on workflow complexity and usage.',
    'Rapid product repositioning means older tutorials, reviews and plan comparisons can be stale.',
    'Model abstraction gives less direct model-level control than using a model provider directly.',
    'Workflow automation can amplify bad inputs or bad business rules, so guardrails, testing and monitoring matter.',
    'Some enterprise/API capabilities require higher-tier or custom commercial arrangements.'
  ],
  workflow: [
    '1. Pick one repetitive GTM process with a measurable outcome, such as inbound lead qualification or account research.',
    '2. Gather the inputs, rules, examples and approved brand guidance; store reusable context in Infobase and Brand Voice where appropriate.',
    '3. Prototype the process in Chat, then convert the repeatable sequence into a Workflow using the required AI Actions and integrations.',
    '4. Add constrained Agentic Actions only where adaptive decisions are useful, and define explicit guardrails and failure paths.',
    '5. Test with representative positive, negative and edge-case records before connecting production systems.',
    '6. Measure Workflow credit consumption and output quality, then tune prompts, actions and model selection.',
    '7. Connect triggers and downstream actions through native integrations, Zapier or the API; keep human approval for consequential customer-facing or CRM-changing steps.',
    '8. Review logs/results periodically and maintain the workflow as source systems, policies and models change.'
  ],
  takeaway: 'Copy.ai is now better evaluated as a GTM automation platform than as a standalone copywriter. It makes the most sense when a sales, marketing or RevOps team wants to codify repeatable processes, connect AI to business systems and reuse company context. For simple copy generation, a general AI assistant or lower-cost writing tool may be more economical.',
  sources: [
    { title: 'Copy.ai homepage / GTM AI platform', publisher: 'Copy.ai', url: 'https://www.copy.ai/', type: 'official' },
    { title: 'Copy.ai pricing', publisher: 'Copy.ai', url: 'https://www.copy.ai/prices', type: 'official' },
    { title: 'Content Agents and GTM platform', publisher: 'Copy.ai', url: 'https://www.copy.ai/agents', type: 'official' },
    { title: 'Copy Agents / Agentic Actions', publisher: 'Copy.ai', url: 'https://www.copy.ai/platform/copy-agents', type: 'official' },
    { title: 'AI Actions', publisher: 'Copy.ai', url: 'https://www.copy.ai/ai-actions', type: 'official' },
    { title: 'Infobase', publisher: 'Copy.ai', url: 'https://www.copy.ai/features/infobase', type: 'official' },
    { title: 'Security and data-use commitments', publisher: 'Copy.ai', url: 'https://www.copy.ai/security', type: 'official' },
    { title: 'Privacy Notice', publisher: 'Copy.ai', url: 'https://www.copy.ai/privacy-notice', type: 'official' },
    { title: 'GTM Systems Integrations', publisher: 'Copy.ai', url: 'https://www.copy.ai/use-cases/gtm-systems-integrations', type: 'official' },
    { title: 'Copy.ai + Zapier integration', publisher: 'Copy.ai', url: 'https://www.copy.ai/blog/copy-ai-and-zapier-integration', type: 'official' },
    { title: 'Copy.ai vs alternatives / review data', publisher: 'G2', url: 'https://www.g2.com/products/copy-ai-copy-ai/competitors/alternatives', type: 'independent' }
  ]
};
