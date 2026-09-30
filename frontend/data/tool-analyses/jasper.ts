import type { ToolAnalysis } from './types.ts';

export const jasperAnalysis: ToolAnalysis = {
  lastVerified: '2026-09-30',
  summary: 'Jasper is a marketing-focused generative AI platform built around on-brand content, governed brand context, marketing Agents, Canvas, Grid, and business integrations rather than being a general-purpose chatbot.',
  company: 'Jasper',
  officialUrl: 'https://www.jasper.ai/',
  status: 'Active commercial marketing AI platform.',
  targetUsers: ['Marketing teams and departments','Content, brand, SEO/GEO, and campaign teams','Agencies and organizations producing content across multiple channels','Developers and operations teams integrating AI into marketing workflows'],
  problemSolved: 'Jasper aims to reduce repetitive marketing production work while keeping generated content aligned with a company\'s brand voice, knowledge, audiences, products, and style rules.',
  howItWorks: 'Jasper combines generative AI with a governed marketing context layer called Jasper IQ. Users can work in Chat, Canvas and Grid, run prebuilt or custom Agents, and connect external systems. Jasper describes its architecture as multi-model/LLM-agnostic, so the product is positioned as a marketing workflow layer rather than simply exposing one underlying model.',
  features: [
    { name: 'Canvas', detail: 'A workspace for accelerated, on-brand content creation and campaign work.' },
    { name: 'Marketing Agents', detail: 'Prebuilt and custom agent workflows can automate repeatable marketing tasks; Business adds a no-code Custom AI Agent Builder and more complex workflows.' },
    { name: 'Jasper IQ', detail: 'Governed brand context including Brand Voices, Knowledge, Audiences, style guidance, and product context.' },
    { name: 'Grid', detail: 'Systematic, scaled content execution across rows; production usage can consume credits, while a test mode provides free rows.' },
    { name: 'Research and optimization', detail: 'Business workflows include advanced tools such as Research & Optimization Agents and GEO Hub/Agent capabilities.' },
    { name: 'Extensions and integrations', detail: 'Jasper offers integrations and API-powered connections for workflows including Google Docs, Slack, Webflow, BigQuery, Google Sheets, Zapier and Make.' },
    { name: 'Visual generation/editing', detail: 'The current platform includes image-related capabilities such as background removal, text removal and image squaring alongside marketing content creation.' }
  ],
  aiAndModels: 'Jasper does not position the product around a single public foundation model. Its marketing materials emphasize multi-model interoperability/LLM-agnostic architecture and a layer of brand and workflow controls around model generation. This makes the product more comparable to a marketing AI operating layer than to a single-model chatbot.',
  inputsOutputs: 'Inputs can include briefs, prompts, brand voice, style rules, knowledge assets, audiences, products, documents and connected application data. Outputs include written marketing content, structured campaign work, research/optimization results, generated visual assets and agent workflow results.',
  limits: ['Pro is limited to one seat and includes 2 Brand Voices, 5 Knowledge assets and 3 Audiences.','Business has custom pricing and expands governance, users, customization and workflow capabilities.','API access is limited to Business plans.','Some advanced actions use a shared workspace credit pool; credits apply to API/MCP, Grid production rows, and premium tools such as Research & Optimization Agent and GEO workflows.','Jasper currently requires a payment card for the 7-day trial and an uncanceled trial rolls into the selected paid plan.','Capabilities, credit rates, model routing and integrations can change as Jasper updates the platform.'],
  useCases: ['Create on-brand campaign copy across channels','Turn governed product and brand context into repeatable marketing assets','Run SEO/GEO research and optimization workflows','Scale content production through Grid','Automate recurring marketing operations with Agents','Connect marketing generation to CMS, spreadsheets, automation tools and developer systems','Give distributed marketing teams a shared source of brand context'],
  poorFit: ['Users looking primarily for a general-purpose personal chatbot','Occasional users who do not need brand governance or marketing workflows','Teams unwilling to manage workspace permissions, credit consumption and governed knowledge','Use cases involving highly sensitive regulated information that should not be entered into the service'],
  pricing: [
    { name: 'Pro', detail: '$69/month per seat on monthly billing, or $59/month per seat when billed annually. Includes one seat, Canvas, core Agents, 2 Brand Voices, 5 Knowledge assets and 3 Audiences.' },
    { name: 'Business', detail: 'Custom pricing. Adds complex Agents, no-code custom Agent Builder, Jasper Grid, unlimited IQ customization, API access, enterprise governance, dedicated account management and support.' },
    { name: 'Free trial', detail: '7-day trial of the selected plan. Jasper currently requires a credit card; if not canceled, the trial converts to a paid subscription.' },
    { name: 'Credits', detail: 'Jasper uses a hybrid platform-plus-consumption model for Business. Credits are shared at workspace level and can be consumed by API/MCP, Grid production rows, and advanced tools such as Research & Optimization and GEO workflows.' }
  ],
  integrations: ['Google Docs','Slack','Webflow','Google Sheets','BigQuery','Zapier','Make','Claude connector marketplace','Jasper API and MCP for supported Business workflows'],
  developer: ['Jasper API is available on Business plans and is designed for integrating on-brand generation into custom CMS and other platforms.','Jasper documents API-powered integrations and MCP usage; current credit documentation says API and MCP usage are credit-consuming actions.','Business customers can use a Developer role so API customers can delegate token/documentation responsibilities without giving developers billing or role-management access.','The platform supports workflow automation through Agents and integrations rather than requiring every workflow to be built as custom code.'],
  privacy: 'Jasper says customer data is encrypted in transit and at rest and that it does not permit third parties to train their AI models with Jasper customer data. Its security materials cite SOC 2, GDPR, CCPA and ISO 27001:2022 coverage, plus SSO, SCIM, role-based permissions and security monitoring. Jasper also advises customers not to submit cardholder information, protected health information or other sensitive regulated information.',
  ownership: 'Jasper provides a commercial service and its terms and plan documentation govern use and rights. For production marketing work, users should review the current Jasper terms and any third-party model/content rights that apply to their workflow rather than assuming every generated asset is unrestricted.',
  alternatives: [
    { name: 'ChatGPT', detail: 'Broader general-purpose assistant with research, coding, files, images and agentic workflows; less narrowly centered on governed marketing production.' },
    { name: 'Claude', detail: 'Strong general assistant and coding/research platform with connectors and agents; useful when broad reasoning and document work matter more than marketing-specific governance.' },
    { name: 'Copy.ai', detail: 'Marketing and go-to-market focused platform with workflows and content generation, making it a closer category alternative.' },
    { name: 'Writer', detail: 'Enterprise-focused AI platform with strong emphasis on organizational knowledge, governance and controlled generation.' },
    { name: 'Writesonic', detail: 'Content and marketing platform oriented toward SEO/content production, useful when search-focused production is the primary need.' }
  ],
  strengths: ['Strong focus on marketing-specific workflows rather than generic chat','Brand Voice and governed knowledge can reduce repetitive context-setting','Agent, Grid and integration features support scaled production','Business tier includes enterprise governance and API capabilities','LLM-agnostic positioning can reduce dependence on one underlying model provider'],
  limitations: ['Pricing is relatively high for casual or individual users','Many of the most advanced capabilities are tied to Business/custom pricing','Credit-based premium actions make some usage less predictable than unlimited chat/content generation','The platform is optimized for marketing teams, so it can be excessive for simple writing tasks','Quality still depends on source material, brand configuration, prompts and the underlying model routing'],
  workflow: ['1. Define the campaign, audience, channel, claims and approval requirements before generating content.','2. Configure Brand Voice, Knowledge, Audiences and product context so the system has governed source material.','3. Use Chat or Canvas for exploration and first drafts; use Agents for repeatable multi-step marketing workflows.','4. Use Grid when the same structured task must be executed across many rows or assets, checking the credit impact first.','5. Connect destination systems through integrations, API or supported MCP workflows only with the permissions actually required.','6. Human-review factual claims, brand/legal requirements, citations, images and channel-specific constraints before publishing.','7. Track credit-consuming Business actions and keep approval gates around high-impact automated publishing.'],
  takeaway: 'Jasper is best understood as a marketing-focused AI production and governance platform. Its strongest differentiator is not simply text generation; it is the combination of brand context, Agents, scaled execution, integrations and enterprise controls. It makes the most sense for teams producing marketing content repeatedly and at scale, while general-purpose assistants are usually simpler for occasional individual use.',
  sources: [
    { title: 'Plans & Pricing', publisher: 'Jasper', url: 'https://www.jasper.ai/pricing', type: 'official' },
    { title: 'API Overview & Documentation', publisher: 'Jasper', url: 'https://www.jasper.ai/api', type: 'official' },
    { title: 'Free Trial', publisher: 'Jasper Help Center', url: 'https://help.jasper.ai/hc/en-us/articles/18618674196891-Free-Trial', type: 'official' },
    { title: 'Credits-Based Pricing', publisher: 'Jasper Help Center', url: 'https://help.jasper.ai/hc/en-us/articles/46644376016923-Credits-Based-Pricing', type: 'official' },
    { title: 'Jasper API', publisher: 'Jasper Help Center', url: 'https://help.jasper.ai/hc/en-us/articles/18618701173659-Jasper-s-API', type: 'official' },
    { title: 'Brand Voice', publisher: 'Jasper Help Center', url: 'https://help.jasper.ai/hc/en-us/articles/55085106001051-Brand-Voice', type: 'official' },
    { title: 'Annual Plans', publisher: 'Jasper Help Center', url: 'https://help.jasper.ai/hc/en-us/articles/55322237498651-Annual-Plans', type: 'official' },
    { title: 'Trust Center', publisher: 'Jasper', url: 'https://security.jasper.ai/', type: 'official' },
    { title: 'Safety & Security', publisher: 'Jasper', url: 'https://www.jasper.ai/security', type: 'official' },
    { title: 'August 2026 Product Update', publisher: 'Jasper', url: 'https://www.jasper.ai/blog/august-2026-product-update', type: 'official' }
  ]
};