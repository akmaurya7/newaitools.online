import type { ToolAnalysis } from './types.ts';

export const grammarlyAnalysis: ToolAnalysis = {
  lastVerified: '2026-09-30',
  summary: 'Grammarly is an AI writing and communication platform that combines real-time writing assistance, generative rewriting, AI chat, research-oriented agents, authorship tracking, and the broader Superhuman Go agent ecosystem across the apps where people work.',
  company: 'Superhuman (formerly Grammarly)',
  officialUrl: 'https://www.grammarly.com/',
  status: 'Active commercial AI writing and productivity platform. Grammarly became part of the Superhuman suite after the company rebranded as Superhuman in 2025; the Grammarly product and brand remain active.',
  targetUsers: [
    'Students, educators, and individual writers',
    'Professionals writing email, documents, messages, proposals, and presentations',
    'Marketing, communications, sales, and customer-facing teams',
    'Organizations that need writing quality, brand consistency, AI governance, and authorship visibility'
  ],
  problemSolved: 'Grammarly reduces the friction between drafting and polished communication by detecting writing problems in context, suggesting clearer alternatives, generating or rewriting text, adapting tone, and increasingly helping users research, reason about, and act on writing-related tasks without repeatedly copying text between applications.',
  howItWorks: 'Grammarly operates through browser extensions, desktop applications, mobile apps, its web/editor surfaces, and newer docs and Superhuman Go experiences. The writing assistant analyzes active text and context to provide corrections and suggestions; generative features can accept prompts and selected text to draft, rewrite, summarize, or ideate. Superhuman Go adds proactive agents and connectors that can use surrounding work context and authorized connected-app data. Grammarly does not expose one public foundation model as its defining product; the user experience is the governed communication layer around multiple AI capabilities and service providers.',
  features: [
    { name: 'Real-time writing assistance', detail: 'Grammar, spelling, punctuation, clarity, word choice, tone, and other contextual suggestions appear while users write in supported applications.' },
    { name: 'Generative AI and paragraph rewrites', detail: 'Users can compose, rewrite, ideate, reply, and change selected text through prompts or suggested transformations. Pro includes full-sentence rewrites and tone controls.' },
    { name: 'AI Chat', detail: 'A conversational surface for asking questions, generating ideas, improving writing, summarizing, and clarifying information. The current AI Chat experience can also accept files and use web search.' },
    { name: 'Grammarly agent and docs', detail: 'Grammarly docs provides an AI writing surface where agents can review a document and suggest improvements. Available agents include Grammarly, Paraphraser, Humanizer, Reader Reactions, AI Grader, Citation Finder, AI Detector, and Plagiarism Checker, with availability varying by plan.' },
    { name: 'Superhuman Go', detail: 'A proactive AI assistant available through supported Grammarly surfaces that can use specialized agents and connectors to help with tasks across apps, tabs, and work context.' },
    { name: 'Authorship', detail: 'Tracks the source and evolution of text in supported Google Docs, Microsoft Word, and Grammarly docs workflows, including distinctions among typed, pasted, AI-generated, and AI-rephrased text where supported.' },
    { name: 'Tone, voice, and personalization', detail: 'Users can adjust tone and create voice references so generated or rewritten text better matches their communication style. Enterprise workflows can also apply brand and style guidance.' },
    { name: 'Translation', detail: 'Grammarly offers inline translation and writing support across more than 20 languages, with availability varying by feature and plan.' },
    { name: 'AI detection and plagiarism checks', detail: 'Paid experiences can inspect text for likely AI-generated patterns and plagiarism, with citations and reporting workflows available in supported surfaces.' },
    { name: 'Team and enterprise controls', detail: 'Pro and enterprise-oriented offerings add shared style guidance, brand tones, permissions, analytics, confidential mode, and data-loss-prevention capabilities depending on the plan.' }
  ],
  aiAndModels: 'Grammarly is not primarily sold as a single-model chatbot. Its product combines proprietary writing algorithms and generative AI with external model/service providers where needed. Grammarly says vetted LLM service providers may process information used for generative AI features, but it does not allow those providers to train their models on Grammarly user content. The product focus is therefore on contextual writing assistance, workflow integration, personalization, governance, and agents rather than exposing a single named foundation model.',
  inputsOutputs: 'Inputs can include typed or pasted text, selected passages, prompts, documents, writing goals, tone preferences, voice samples, and—when enabled—context from connected apps or files. Outputs include inline corrections, rewrites, generated passages, summaries, ideas, tone adjustments, reader-reaction feedback, citations, AI/authorship reports, and actions or information returned by connected agents.',
  limits: [
    'The Free plan currently includes 100 generative AI prompts; Pro includes 2,000 monthly AI prompts. Limits and feature availability vary by product surface and plan.',
    'Some advanced agents and docs controls are restricted to Pro/Plus or organization plans purchased through sales. Enterprise administrators can control which agents members can use.',
    'The Superhuman Go ecosystem and connectors depend on supported platforms, enabled permissions, and the availability of individual agents/connectors.',
    'Authorship availability and tracking behavior differ between Google Docs, Microsoft Word, and Grammarly docs.',
    'AI Detector and plagiarism features are paid or plan-dependent and should not be treated as infallible proof of authorship or misconduct.',
    'Product availability, language support, prompt allowances, agents, and connected apps can change as Grammarly/Superhuman updates the platform.'
  ],
  useCases: [
    'Polish professional email, reports, proposals, and everyday communication',
    'Draft and rewrite marketing, sales, support, and customer-facing copy',
    'Adapt tone and wording for different audiences while retaining the author’s intent',
    'Brainstorm, outline, summarize, and clarify ideas through AI Chat',
    'Review a document with specialized agents before sending or publishing',
    'Check likely AI-generated text, plagiarism, and authorship evidence in supported educational/editorial workflows',
    'Maintain consistent style and brand voice across teams',
    'Use connected agents to bring research, scheduling, files, and other workflow actions closer to the writing surface'
  ],
  poorFit: [
    'Users who only need occasional grammar checking and do not want an always-available writing layer',
    'Tasks requiring guaranteed factual correctness without human verification; writing quality does not make generated claims automatically true',
    'Highly sensitive workflows where the organization has not approved cloud processing or connected-app access',
    'Teams that need a pure developer API/model platform rather than an end-user communication product',
    'Academic decisions based solely on AI-detector scores; detection systems can produce false positives and should be treated as signals, not definitive proof'
  ],
  pricing: [
    { name: 'Free', detail: '$0. Includes core writing assistance, writing tone visibility, and 100 generative AI prompts according to the current Grammarly pricing page.' },
    { name: 'Pro', detail: '$30/member/month on monthly billing, or $144/member/year ($12 average per month) on annual billing. Current Pro materials list advanced rewrites, tone adjustment, on-brand writing, and 2,000 AI prompts per month. Pro supports individuals or teams and replaces the former Grammarly Business plan for web purchases.' },
    { name: 'Enterprise', detail: 'Custom pricing. Current Grammarly materials describe proactive AI across apps and tabs, unlimited members, dedicated support, granular roles/permissions, confidential mode, data-loss prevention, and unlimited generative AI prompts through the enterprise offering.' },
    { name: 'Legacy mobile Premium', detail: 'Users who subscribed through the App Store or Google Play may still have the Grammarly Premium plan. Grammarly says Premium remains available through those stores and includes core writing features plus 1,000 monthly generative AI prompts.' },
    { name: 'Superhuman suite', detail: 'The wider Superhuman suite has separate plan economics. Grammarly Pro access is included with the annual Superhuman suite Pro plan, while monthly Superhuman suite subscribers can add Grammarly Pro for an additional fee; users should check the current checkout because suite and product pricing can change.' }
  ],
  integrations: [
    'Chrome and Edge browser extensions',
    'Grammarly for Windows and Mac',
    'Android and iOS',
    'Google Docs',
    'Microsoft Word',
    'Gmail',
    'Microsoft Outlook',
    'Slack',
    'Salesforce',
    'Microsoft PowerPoint',
    'LinkedIn',
    'Microsoft Teams',
    'Google Sheets',
    'Zendesk',
    'Jira',
    'Superhuman Go connectors and partner agents such as Box and Gamma'
  ],
  developer: [
    'Grammarly is primarily an end-user productivity platform rather than a general-purpose public LLM API. Developer access and integrations depend on the specific Grammarly/Superhuman program and product surface.',
    'The company has introduced a Superhuman Agents SDK in closed developer beta as part of its agent ecosystem, so agent extensibility is an emerging platform capability rather than a broadly open API equivalent to a foundation-model provider.',
    'For organizations, integrations are commonly configured through supported applications, browser/desktop surfaces, admin controls, and Superhuman Go connectors rather than by embedding a raw model.',
    'Connected-app agents can receive permissions to read information or take actions in services such as Gmail, Google Calendar, Jira and partner applications; organizations should apply least-privilege permissions and review each connector.'
  ],
  privacy: 'Grammarly says it cannot access text unless a Grammarly product is active or an enabled AI feature needs additional context. It states that it does not sell or monetize user content. Its privacy materials say data is protected with controls including TLS in transit, AES-256 at rest, logical tenant separation, and restricted employee access. Grammarly also says vetted LLM service providers may process information needed to provide generative AI features and that those providers are not allowed to train their models on user content. Users can turn off Product Improvement and Training; when disabled, user content is not used for those purposes, although non-content statistics may still be processed. Grammarly reports SOC 2 Type 1/2, ISO 27001/27017/27018, GDPR, CCPA and HIPAA-related compliance, with HIPAA processing requiring an appropriate Enterprise BAA.',
  ownership: 'Grammarly states that users own what they write. Nevertheless, generated text, third-party sources, AI-detection results, connected-app data, and content submitted to external services can have separate legal or contractual implications. For commercial or regulated use, review the current Grammarly/Superhuman terms, privacy documentation, applicable third-party service terms, and organizational policy before relying on generated or connected content.',
  alternatives: [
    { name: 'ChatGPT', detail: 'Broader general-purpose assistant with web research, files, coding, images, voice, agents, and connected apps; stronger when the task goes beyond writing assistance.' },
    { name: 'Claude', detail: 'General AI assistant with strong document, reasoning, coding, research, and connector capabilities; often a better fit for long-form knowledge work.' },
    { name: 'Microsoft Editor / Copilot', detail: 'Natural alternative for organizations already standardized on Microsoft 365, especially where writing assistance is closely tied to Word, Outlook, Teams, and Copilot.' },
    { name: 'QuillBot', detail: 'Focused on paraphrasing, summarization, grammar, and writing transformation, often useful when rewriting is the main requirement.' },
    { name: 'LanguageTool', detail: 'Grammar and style alternative with broad multilingual support and a more traditional proofreading orientation.' }
  ],
  strengths: [
    'Works directly inside many applications instead of requiring copy/paste into a separate chatbot',
    'Strong real-time grammar, clarity, tone, and rewriting workflow',
    'Generative AI is layered onto an established writing assistant rather than replacing it with chat alone',
    'Large integration footprint across workplace communication tools',
    'Authorship and governance features are valuable for education and organizations that need visibility into how text was produced',
    'Superhuman Go expands Grammarly from writing correction toward proactive, connected AI work'
  ],
  limitations: [
    'The strongest capabilities are increasingly distributed across different Grammarly, docs, and Superhuman Go surfaces, which can make the product model harder to understand',
    'Pro pricing is high compared with basic proofreading alternatives',
    'Generative AI prompt allowances and plan-specific agents introduce usage constraints',
    'Connected agents require careful permission and privacy review',
    'AI-generated claims and rewrites still require human fact-checking and judgment',
    'AI detection should not be treated as definitive evidence of authorship'
  ],
  workflow: [
    '1. Install the appropriate Grammarly extension/app for the places where you write and decide which sensitive applications or fields should be excluded.',
    '2. Set language, tone, voice, and—if working for a team—brand/style guidance before relying on generated text at scale.',
    '3. Draft normally and use real-time suggestions for grammar, clarity, concision, and tone rather than accepting every recommendation blindly.',
    '4. Use generative AI for specific tasks such as outlining, rewriting, summarizing, brainstorming, or drafting a response; give it audience, purpose, and constraints.',
    '5. For longer documents, use docs and the appropriate agents to review the whole document and surface issues such as clarity, reader reaction, citations, AI signals, or plagiarism.',
    '6. When using Superhuman Go connectors, authorize only the applications and actions required for the task and verify sensitive outputs before an agent acts.',
    '7. Fact-check generated claims, links, citations, numbers, and policy-sensitive language before publication or sending.',
    '8. For education or regulated environments, configure product-improvement, training, retention, admin, and agent-access controls to match the organization’s policy.'
  ],
  takeaway: 'Grammarly is best understood as an always-available communication layer rather than just a grammar checker. Its differentiator is the combination of contextual writing assistance, generative rewriting, broad application coverage, authorship/governance features, and the newer Superhuman Go agent ecosystem. It is especially compelling for people who write continuously across many workplace applications; users who mainly need deep research, coding, or open-ended reasoning may get more value from a general AI assistant.',
  sources: [
    { title: 'Grammarly Pro', publisher: 'Grammarly', url: 'https://www.grammarly.com/pro', type: 'official' },
    { title: 'How much does Grammarly Pro cost?', publisher: 'Grammarly Support', url: 'https://support.grammarly.com/hc/en-us/articles/115000090011-How-much-does-Grammarly-Pro-cost', type: 'official' },
    { title: 'Introducing the Superhuman suite', publisher: 'Grammarly Support', url: 'https://support.grammarly.com/hc/en-us/articles/40709437438733-Introducing-the-Superhuman-suite', type: 'official' },
    { title: 'Introducing generative AI assistance', publisher: 'Grammarly Support', url: 'https://support.grammarly.com/hc/en-us/articles/14528857014285-Introducing-generative-AI-assistance', type: 'official' },
    { title: 'About Superhuman Go agents and connectors', publisher: 'Grammarly Support', url: 'https://support.grammarly.com/hc/en-us/articles/40642362241293-About-Superhuman-Go-agents-and-connectors', type: 'official' },
    { title: 'Introducing Authorship', publisher: 'Grammarly Support', url: 'https://support.grammarly.com/hc/en-us/articles/29548735595405-Introducing-Authorship', type: 'official' },
    { title: 'AI Detector user guide', publisher: 'Grammarly Support', url: 'https://support.grammarly.com/hc/en-us/articles/28936304999949-AI-Detector-user-guide', type: 'official' },
    { title: 'Privacy and security FAQs', publisher: 'Grammarly Support', url: 'https://support.grammarly.com/hc/en-us/articles/20916119474829-Privacy-and-security-FAQs', type: 'official' },
    { title: 'Product Improvement and Training Control', publisher: 'Grammarly Support', url: 'https://support.grammarly.com/hc/en-us/articles/25555503115277-Product-Improvement-and-Training-Control', type: 'official' },
    { title: 'User Trust Center', publisher: 'Grammarly', url: 'https://www.grammarly.com/trust', type: 'official' },
    { title: 'Superhuman launches agent-specific attribution with Grammarly Authorship update', publisher: 'Grammarly', url: 'https://www.grammarly.com/blog/company/superhuman-authorship-docs/', type: 'official' },
    { title: 'Superhuman Go scales agent ecosystem', publisher: 'Grammarly', url: 'https://www.grammarly.com/blog/company/superhuman-go-new-partner-agents/', type: 'official' }
  ]
};
