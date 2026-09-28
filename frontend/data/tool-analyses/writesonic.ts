import type { ToolAnalysis } from './types.ts';

export const writesonicAnalysis: ToolAnalysis = {
  lastVerified: '2026-09-28',
  summary: 'Writesonic has evolved from a general AI copywriting suite into a broader AI-search visibility and content platform. It still includes AI Article Writer, AI Content Agent, Chatsonic and editing tools, while its current positioning centers on creating content, measuring how brands appear in AI answer engines, and acting on visibility gaps.',
  company: 'Writesonic, Inc.',
  officialUrl: 'https://writesonic.com/',
  status: 'Active. The current platform combines AI visibility monitoring, content/SEO workflows, AI agents, AI Article Writer and integrations. Older documentation still describes legacy writing tools, so feature names and plan access should be checked against the current product UI.',
  targetUsers: ['Marketing teams and agencies', 'SEO/GEO and content practitioners', 'Founders and brand-content teams', 'Developers and operations teams using APIs, webhooks or MCP'],
  problemSolved: 'Writesonic combines marketing-content production with measurement of whether a brand or website is being discovered and cited by AI answer engines, so teams can move from generation to measurement and optimization in one platform.',
  howItWorks: 'AI Article Writer can research and assemble long-form content with configurable SEO-oriented elements. The AI Content Agent loads brand and author guidance, selects a format, researches sources, drafts content, runs a second-expert review and applies brand polishing. The visibility platform separately tracks AI-platform presence and surfaces content and technical actions.',
  features: [
    { name: 'AI Article Writer', detail: 'Article Writer 6 supports tone customization, internal linking, source citations, cover-image generation, FAQs, calls to action and keyword research. Access varies by plan.' },
    { name: 'AI Content Agent', detail: 'Creates LinkedIn posts, sales emails, X threads, ads, newsletters, whitepapers, product pages, case studies and other formats using brand/author context, research, expert writing, second-expert review and brand polish.' },
    { name: 'AI visibility tracking', detail: 'Tracks brand visibility across supported AI answer engines and exposes metrics such as visibility, citation share, share of voice and sentiment in the API examples.' },
    { name: 'Action Center', detail: 'Prioritizes AI-visibility opportunities using impact, confidence and effort, including new content, page refreshes, schema/FAQ work and technical crawl issues.' },
    { name: 'AI Document Editor', detail: 'A Google Docs-style workspace with AI writing, rewriting, SEO optimization, plagiarism checking and multilingual support.' },
    { name: 'Chatsonic', detail: 'Conversational AI with web search, memory and multilingual capabilities; current access to models, file analysis and marketing integrations varies by plan.' }
  ],
  aiAndModels: 'Writesonic does not use one fixed model for the whole platform. Its May 2026 privacy policy says AI features can use Writesonic-developed models plus providers including OpenAI, Anthropic, Microsoft Azure OpenAI, Azure-hosted Anthropic models, custom models on Azure/AWS, Stability AI, OpenRouter and Google Cloud. The provider can vary by capability, performance, cost, region and availability.',
  inputsOutputs: 'Depending on the feature, inputs include prompts, briefs, URLs, keywords, brand rules, files, queries, tracked websites and agent instructions. Outputs include articles, rewrites, social posts, ads, sales copy, research-backed content, visibility reports and optimization recommendations. Article Writer 6 supports source links/footnotes, internal links, FAQs, cover images and calls to action.',
  limits: [
    'Feature access and quotas depend on plan; current pricing lists different article quotas and visibility capabilities by tier.',
    'The product has evolved quickly, so older tutorials and pricing pages may describe legacy experiences.',
    'Writesonic explicitly warns that AI outputs can be inaccurate, incomplete or misleading and should be independently reviewed.',
    'Model availability is dynamic and may vary by capability, performance, cost, region and provider availability.',
    'Advanced integrations, agents, APIs and analytics can require higher plans or separate API usage.',
    'Terms restrict using the service to develop or improve a competing product/service/AI model and restrict unlawful, infringing and certain high-risk uses.',
    'API access requires an activated API key and the relevant endpoint documentation.'
  ],
  useCases: [
    'Create SEO-oriented articles with research, citations, internal links, FAQs and calls to action.',
    'Turn a brand brief into repeatable social, email, ad and product-marketing content.',
    'Rewrite or improve existing copy while preserving desired style and audience.',
    'Track how a brand appears in supported AI platforms such as ChatGPT, Gemini and Google AI Overviews.',
    'Find AI-visibility gaps and prioritize content or technical actions.',
    'Connect visibility data to CMS, analytics, CDN, reporting or internal systems through integrations and APIs.'
  ],
  poorFit: [
    'Users who only need a minimal chatbot or simple free writing assistant.',
    'Projects requiring one fixed foundation model with complete inference control.',
    'Sensitive workflows where the exact provider, region or retention configuration must be selected independently per request.',
    'Users expecting every historical Writesonic tutorial or plan to match the current product.',
    'High-stakes publishing where AI output would be used without human fact, rights and editorial review.'
  ],
  pricing: [
    { name: 'Starter', detail: 'Current pricing lists $79/month and includes AI visibility tracking, content/SEO capabilities and 15 articles per month.' },
    { name: 'Basic', detail: 'Current pricing lists $199/month with higher article capacity and broader visibility/content capabilities.' },
    { name: 'Growth', detail: 'Current pricing lists $399/month with 50 articles per month and expanded platform capabilities.' },
    { name: 'Enterprise', detail: 'Custom pricing for larger organizations and broader platform/organizational requirements.' },
    { name: 'Free trial', detail: 'Current product pages advertise a 7-day free trial. Exact included features should be confirmed at signup because offers can change.' },
    { name: 'Pricing warning', detail: 'Older indexed material still shows historical $10–$20 writing plans. Those figures do not describe the current primary platform pricing used here.' }
  ],
  integrations: [
    'WordPress, Sanity, Contentful, Contentstack and Drupal for content workflows.',
    'Google Search Console, Google Search, Google Keyword Planner, Ahrefs, Google Analytics and Looker Studio.',
    'Vercel, Cloudflare, Fastly, Akamai, Google Cloud CDN and Amazon CloudFront.',
    'ChatGPT, Claude, Claude Code and Codex through current MCP capabilities.',
    'Zapier for no-code automation across connected applications.'
  ],
  developer: [
    'API access is activated from the Writesonic API dashboard; official documentation warns not to commit API keys to public repositories.',
    'Current integrations documentation describes REST endpoints and webhooks for visibility data, fixes, CMS and reporting workflows.',
    'The API example exposes visibility score, citation share, share of voice and sentiment for a date range and market.',
    'MCP lets AI assistants query live visibility data and return reports, charts and breakdowns.',
    'Chatsonic has a documented API workflow with web search and memory capabilities.'
  ],
  privacy: 'Writesonic’s privacy policy, last updated May 13, 2026, says AI inputs are sent to the relevant model provider to generate outputs. It says Writesonic does not use Customer Data to train or fine-tune general-purpose/foundation/large-language models, while allowing de-identified inputs, outputs and usage data to operate, secure, debug, evaluate and improve the service. Customer data may be processed in the US and other countries. Writesonic states it is SOC 2 Type 2 audited.',
  ownership: 'The Terms define inputs and outputs as Customer Data and make the customer responsible for lawful use and third-party rights. Writesonic receives a license to process inputs as necessary to provide/support the service. Its no-training commitment applies to Customer Data unless a customer expressly opts into a separate program, while de-identified data may still be used for service improvement. Commercial publication therefore still needs human factual, rights and brand review.',
  alternatives: [
    { name: 'Jasper', detail: 'Strong for brand-focused marketing content. Writesonic is more differentiated when content production and AI-search visibility monitoring are needed together.' },
    { name: 'Copy.ai', detail: 'Useful for marketing and go-to-market workflows; Writesonic adds AI-search visibility measurement and optimization.' },
    { name: 'ChatGPT / Claude', detail: 'Better when you want a flexible general assistant or direct model ecosystem access; Writesonic adds marketing, SEO, visibility and publishing workflows.' },
    { name: 'Surfer', detail: 'More narrowly focused on SEO optimization; Writesonic extends into AI-search visibility, content agents, monitoring and integrations.' }
  ],
  strengths: [
    'Connects content creation with measurement of visibility in AI answer engines.',
    'Supports many marketing formats through specialized content workflows.',
    'Exposes REST API, webhooks, MCP and many native integrations.',
    'Documents its model-provider architecture and privacy commitments clearly.',
    'Current Content Agent includes research, second-expert review and brand-polish stages.'
  ],
  limitations: [
    'More complex and expensive than a simple AI writer, especially at current platform pricing.',
    'Rapid product evolution makes older reviews and tutorials unreliable for plan decisions.',
    'Model abstraction reduces direct control over the foundation model handling a task.',
    'Generated marketing content still needs fact, editorial and rights review.',
    'Advanced automation and visibility capabilities can require higher plans or API usage.'
  ],
  workflow: [
    '1. Define the outcome: article, campaign asset, content refresh or AI-search visibility problem.',
    '2. Load brand voice, audience, banned phrases and examples before generation.',
    '3. For long-form content, provide target intent and authoritative sources; use citations, internal links and FAQs where appropriate.',
    '4. Review for factual accuracy, originality, search intent and brand voice; treat generated claims as drafts.',
    '5. Publish through a connected CMS or your normal editorial workflow after human approval.',
    '6. For AI-search optimization, track supported answer engines, inspect visibility/citation gaps and prioritize high-impact actions.',
    '7. If automating, connect API/webhooks/MCP/native integrations and monitor the workflow before enabling unattended publishing.'
  ],
  takeaway: 'Writesonic is no longer best understood as only an AI copywriter. In September 2026, its strongest positioning is an AI-search visibility and content platform combining generation, SEO/GEO research, monitoring, agents and integrations. Choose it when your marketing workflow needs both content production and measurement/action around AI search; choose a simpler writer or general assistant when that broader platform is unnecessary.',
  sources: [
    { title: 'Writesonic pricing', publisher: 'Writesonic', url: 'https://writesonic.com/pricing', type: 'official' },
    { title: 'AI Content Agent', publisher: 'Writesonic', url: 'https://writesonic.com/ai-content-agent', type: 'official' },
    { title: 'AI Visibility Action Center', publisher: 'Writesonic', url: 'https://writesonic.com/ai-visibility-action-center', type: 'official' },
    { title: 'Integrations, REST API, webhooks and MCP', publisher: 'Writesonic', url: 'https://writesonic.com/integrations', type: 'official' },
    { title: 'AI Article Writer overview', publisher: 'Writesonic Documentation', url: 'https://docs.writesonic.com/docs/ai-article-writer', type: 'official' },
    { title: 'AI Document Editor', publisher: 'Writesonic Documentation', url: 'https://docs.writesonic.com/docs/ai-document-editor', type: 'official' },
    { title: 'Privacy Policy', publisher: 'Writesonic Legal', url: 'https://writesonic.com/legal/privacy-policy', type: 'official' },
    { title: 'Terms of Service', publisher: 'Writesonic Legal', url: 'https://writesonic.com/legal/terms', type: 'official' },
    { title: 'Writesonic reviews and pricing context', publisher: 'Capterra', url: 'https://www.capterra.com/p/219972/Writesonic/', type: 'independent' }
  ]
};