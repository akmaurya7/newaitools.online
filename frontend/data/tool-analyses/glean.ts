import type { ToolAnalysis } from './types.ts';

export const gleanAnalysis: ToolAnalysis = {
  lastVerified: '2026-10-13',
  summary: 'Glean is the category-defining enterprise Work AI platform and universal workplace search engine engineered to connect, index, and reason across all distributed corporate SaaS repositories. Founded by former Google distinguished search engineer Arvind Jain, Glean addresses enterprise knowledge fragmentation by building a unified Enterprise Knowledge Graph spanning over 250+ enterprise integrations—including Google Workspace, Microsoft 365, Slack, Jira, Confluence, GitHub, Salesforce, Notion, and Zendesk. Unlike generic LLM chatbots that lack organizational context or hallucinate corporate facts, Glean pairs state-of-the-art foundation models (such as GPT-4o and Claude 3.5 Sonnet) with deep hybrid search (sparse lexical BM25 combined with dense semantic neural embeddings) and real-time Access Control List (ACL) permission passthrough. This guarantees that employees receive verified, hallucination-resistant answers with inline document citations, without ever exposing confidential payroll, board decks, or restricted HR documentation to unauthorized team members. Beyond search, Glean provides an extensible Work AI ecosystem featuring conversational assistants, workplace shortcuts ("Go Links"), no-code Glean Apps, and multi-step autonomous Glean Agents that automate complex cross-tool operational workflows. However, adopting Glean requires navigating a strictly sales-led enterprise procurement process: pricing starts at $45 to $75+ per user/month with a mandatory 100-seat minimum commitment ($50,000 to $60,000+ baseline annual contract value), alongside consumption-based FlexCredits for high-frequency reasoning and agent executions.',
  company: 'Glean Technologies, Inc.',
  officialUrl: 'https://www.glean.com/',
  status: 'Commercial, generally available worldwide for mid-market and global enterprise organizations, featuring the unified Work AI platform, Enterprise Search, Glean Chat, Glean Apps, autonomous Glean Agents, and over 250 native enterprise connectors across cloud and on-premises SaaS applications.',
  targetUsers: [
    'Enterprise CIOs, CTOs, and IT directors seeking unified knowledge retrieval and zero-trust data governance across heterogeneous, multi-vendor SaaS tech stacks',
    'Knowledge workers, product managers, and software engineers searching for past PRDs, architectural decision records (ADRs), Slack threads, Jira tickets, and GitHub pull requests',
    'Customer support, solutions engineering, and sales teams retrieving troubleshooting playbooks, historical Zendesk tickets, and sales enablement collateral in real time',
    'Compliance, legal, risk, and security officers requiring strict role-based access control (RBAC), continuous permission synchronization, and SOC 2 Type II / HIPAA compliance',
    'Operations, HR, and business process automation leads deploying no-code internal AI micro-apps and multi-step autonomous workflows across corporate tools'
  ],
  problemSolved: 'Modern enterprises suffer from acute knowledge fragmentation: critical company knowledge is siloed across dozens of disconnected SaaS tools—product specs in Google Drive or Confluence, operational discussions in Slack or Microsoft Teams, codebase decisions in GitHub, customer histories in Salesforce, and technical issues in Jira. As a result, knowledge workers waste an estimated 20% to 30% of their workweek hunting for files, asking colleagues repetitive questions, or duplicating existing work. Generic consumer AI chatbots fail in enterprise environments because they cannot access internal corporate data, routinely hallucinate, and present severe data privacy and leak risks. Furthermore, attempting to build in-house enterprise Retrieval-Augmented Generation (RAG) pipelines leads to massive engineering overhead, connector API maintenance debt, and catastrophic permission failures. Glean resolves this by providing a turnkey, out-of-the-box enterprise search and intelligence layer that continuously indexes 250+ SaaS tools, mirrors granular document ACLs in real time, and synthesizes cited, accurate answers tailored to each employee\'s role and organizational identity.',
  howItWorks: 'Glean operates on a multi-stage enterprise retrieval and generative reasoning architecture. First, native enterprise connectors continuously crawl connected data sources (Google Drive, SharePoint, Slack, Jira, GitHub, Salesforce) via secure webhooks and incremental API polling, extracting text, rich formatting, metadata, and document Access Control Lists (ACLs). Second, Glean constructs a proprietary Enterprise Knowledge Graph: it maps relationships between documents, employees, project channels, teams, and activity signals (such as who created a file, who reads it frequently, and which team owns the initiative). Third, when a user submits a query via the browser extension, web portal, or Slack bot, Glean executes hybrid search combining BM25 keyword matching with dense semantic vector embeddings, re-ranked by personalized graph signals. Fourth, Glean enforces strict identity passthrough: search results and LLM context windows only include documents that the specific authenticated user is explicitly authorized to view in the underlying source system. Finally, Glean orchestrates top-tier foundation models (such as GPT-4o or Claude 3.5 Sonnet) within its secure tenant boundary to synthesize concise, answer-first responses accompanied by interactive inline source citations.',
  features: [
    {
      name: 'Enterprise Knowledge Graph & Deep Personalization',
      detail: 'Continuously maps semantic relationships between corporate documents, people, departments, projects, and collaboration signals to deliver highly personalized, role-relevant search results and proactive recommendations.'
    },
    {
      name: 'Turnkey Multi-SaaS Connectors (250+ Integrations)',
      detail: 'Provides pre-engineered, zero-maintenance connectors across major enterprise tools including Google Workspace, Microsoft 365, Slack, Jira, Confluence, GitHub, Salesforce, Notion, Zendesk, and Figma with automated schema ingestion.'
    },
    {
      name: 'Real-Time ACL & Zero-Leak Permission Mirroring',
      detail: 'Natively synchronizes and enforces document-level and channel-level access permissions from source applications in real time, guaranteeing that unauthorized employees never see private documents or synthesized excerpts.'
    },
    {
      name: 'Glean Chat & Conversational Work Assistant',
      detail: 'An enterprise-grade conversational AI assistant grounded entirely in company data, capable of synthesizing cross-tool insights, summarizing complex multi-page documents, and answering domain-specific operational questions.'
    },
    {
      name: 'Glean Apps & No-Code Agent Builder',
      detail: 'Enables business teams to create custom AI assistants and autonomous workflows with natural language instructions, integrating multi-step data retrieval, form inputs, and transactional triggers across enterprise systems.'
    },
    {
      name: 'Universal Browser Extension & Workplace Shortcuts ("Go Links")',
      detail: 'Overlays Glean search directly onto the browser new-tab page and search bar, incorporating enterprise Go Links (e.g., "go/benefits", "go/roadmap") for instant, company-wide shortcut navigation.'
    },
    {
      name: 'Deep Code & Developer Intelligence',
      detail: 'Indexes code repositories, commits, pull requests, and documentation across GitHub and GitLab, enabling software engineers to trace function implementations, architectural decisions, and repository ownership.'
    }
  ],
  aiAndModels: 'Glean utilizes a flexible multi-LLM orchestration architecture hosted within enterprise compliance boundaries. The platform dynamically routes conversational queries and synthesis tasks across premier foundation models, primarily leveraging OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, and specialized proprietary semantic embedding and re-ranking models fine-tuned on corporate enterprise search data. Glean operates under a strict zero-data-retention and zero-training guarantee: customer queries, internal documents, metadata, and conversational histories are never used to train third-party foundation models. For organizations with stringent compliance mandates, Glean offers Bring Your Own Cloud (BYOC) single-tenant deployments on Google Cloud Platform (GCP), Amazon Web Services (AWS), or Microsoft Azure, allowing vector databases and LLM inference endpoints to reside entirely inside the customer\'s own cloud perimeter.',
  inputsOutputs: 'Inputs: Natural language search queries, conversational chat prompts, enterprise documents (PDF, DOCX, XLSX, PPTX, TXT, Markdown, code files), structured records from CRMs and ERPs, and automated webhook triggers. Outputs: Synthesized natural language answers with verifiable inline citations, ranked file and document link lists, structured data tables, personalized user activity feeds, custom AI app responses, and automated multi-tool operational actions.',
  limits: [
    '100-Seat Minimum & High Financial Entry Barrier: Glean enforces a strict 100-seat minimum requirement with annual contract commits starting at $50,000 to $60,000+, effectively putting the tool out of reach for small startups and teams under 50-100 staff.',
    'Initial Ingestion & Graph Hydration Time: Ingesting multi-terabyte corporate document repositories across hundreds of employees can take anywhere from several days to two weeks for full historical indexing and graph building.',
    'Third-Party API Rate Limiting: Connector indexing freshness is bound by external API rate limits (e.g., Slack Enterprise Grid export limits or Atlassian Jira REST API thresholds), which can occasionally introduce sync lag on rapidly updated threads.',
    'Search Indexer First, Autonomous Action Second: While Glean Agents and Apps are expanding into automated workflows, Glean remains fundamentally an enterprise search and retrieval platform; deep transactional data-writing across complex legacy systems requires custom API scripting.',
    'Per-Seat Cost Inefficiency for Peripheral Workers: Because enterprise contracts are negotiated on a per-seat model, companies pay full price ($45 to $75/user/month) for frontline or casual employees who may only execute a handful of searches per month.',
    'FlexCredits Depletion on Complex Multi-Agent Loops: Heavy autonomous agent executions, custom API calls, and premium model reasoning consume shared enterprise FlexCredits, requiring usage governance to avoid mid-contract pool depletion.'
  ],
  useCases: [
    'Cross-Departmental Knowledge Discovery & Employee Onboarding: Accelerating new hire ramp time by allowing new employees to instantly query company policies, technical architecture, team structures, and past project documentation.',
    'Engineering Incident Post-Mortem & Architecture Retrospectives: Enabling software engineers to search historical Slack outage discussions, Jira bug post-mortems, and GitHub pull requests to diagnose recurring technical debt.',
    'Sales Proposal & RFP Response Automation: Assisting account executives and solutions engineers in assembling complex RFP answers grounded in verified security whitepapers, past client proposals, and product roadmaps.',
    'Customer Support & Helpdesk Ticket Deflection: Surfacing verified resolution steps from resolved Zendesk tickets, internal Confluence runbooks, and engineering Slack channels directly to tier-1 and tier-2 support agents.',
    'Executive Decision Intelligence & Cross-Tool Context Gathering: Providing leadership with instant summaries of active strategic initiatives by synthesizing updates across Salesforce pipeline reports, Jira sprints, and Google Docs.'
  ],
  poorFit: [
    'Startups and Small Businesses Under 50-100 Employees: Teams with limited SaaS footprint or modest operating budgets cannot justify the $50k+ annual contract minimum; lightweight tools like Notion AI or Perplexity Enterprise are far more cost-effective.',
    'Pure Single-Vendor Homogeneous Environments: Organizations operating 100% inside Microsoft 365 with zero external SaaS sprawl will find native Microsoft 365 Copilot ($30/user/month) more economically integrated into Word, Teams, and PowerPoint.',
    'Consumer-Facing Public Website Search: Glean is strictly an internal enterprise workplace intelligence tool designed for authenticated corporate staff; it cannot be embedded as a public-facing e-commerce or customer site search bar.',
    'Organizations with Highly Fragmented, Non-API Legacy On-Premises File Shares: Companies storing critical knowledge on unindexed on-premise shared network drives without modern APIs or structured metadata will face challenging, custom onboarding implementations.'
  ],
  pricing: [
    {
      name: 'Glean Enterprise Core Search License',
      detail: '$45 to $50 per user/month (billed annually, ~$540 to $600 per user/year). Includes universal search across 250+ connectors, basic Enterprise Knowledge Graph, browser extension, and Go Links navigation.'
    },
    {
      name: 'Glean Work AI & Autonomous Agents Add-On',
      detail: '+$15 to $25 per user/month add-on (~$60 to $75+ per user/month combined). Adds Glean Chat, enterprise RAG synthesis with GPT-4o/Claude 3.5 Sonnet, Glean Apps builder, and autonomous agent orchestration.'
    },
    {
      name: 'High-Volume Enterprise Tier (500–1,000+ Seats)',
      detail: '$25 to $35 per user/month (billed annually). Volume-discounted pricing for large enterprises committing to company-wide multi-thousand seat rollouts.'
    },
    {
      name: 'Glean Enterprise FlexCredits (Consumption Tier)',
      detail: 'Base seats include an allocation of complex reasoning queries (e.g., 100 deep reasoning turns/user/week). Intensive autonomous agent runs and high-volume custom API calls draw down from a pooled enterprise FlexCredits bucket.'
    },
    {
      name: 'Implementation, Pilot PoC & Customer Success Fees',
      detail: 'Enterprise Proof of Concept (PoC) pilots typically range from $15,000 to $50,000 (often credited toward the annual contract upon signing). Single-tenant BYOC cloud infrastructure hosting adds $2,000 to $10,000/month in cloud compute.'
    }
  ],
  integrations: [
    'Google Workspace (Google Drive, Gmail, Docs, Sheets, Slides, Calendar)',
    'Microsoft 365 (SharePoint, OneDrive, Microsoft Teams, Outlook, Word, Excel)',
    'Slack (Enterprise Grid, Public/Private Channels, Direct Messages with strict ACL)',
    'Atlassian Suite (Jira Software, Confluence, Jira Service Management, Trello)',
    'Salesforce (CRM Leads, Accounts, Opportunities, Contacts, Support Cases)',
    'GitHub & GitLab (Code Repositories, Pull Requests, Commits, Issues)',
    'Notion, Coda, Guru, and Confluence Wiki',
    'Zendesk, ServiceNow, Freshdesk, and Intercom'
  ],
  developer: [
    'Glean REST Client API & Webhook Ingestion SDKs for custom internal data sources and intranets',
    'Glean Apps & Agent Builder API endpoints for triggering custom conversational workflows programmatically',
    'Automated SCIM 2.0 and SAML 2.0 user lifecycle and group management via Okta, Microsoft Entra ID, and OneLogin',
    'Custom Data Source Push & Pull Connectors for indexing on-premise databases and proprietary document stores',
    'Terraform and CloudFormation deployment automation templates for Bring Your Own Cloud (BYOC) infrastructure'
  ],
  privacy: 'Glean adheres to rigorous enterprise-grade security and data compliance standards. The platform is certified for SOC 2 Type II, SOC 3, ISO 27001, HIPAA, and GDPR compliance. All data in transit is encrypted using TLS 1.3, and all data at rest is encrypted using AES-256 with optional Customer-Managed Encryption Keys (CMEK). Glean guarantees that customer corporate data, employee search queries, and conversational transcripts are strictly segregated within single-tenant logical or physical boundaries and are never used to train foundational AI models. Enterprise administrators maintain comprehensive audit logging and real-time visibility into all search queries and data access events.',
  ownership: 'Customers retain complete, exclusive legal ownership and intellectual property rights over all corporate data, ingested files, document metadata, custom app configurations, and search logs indexed by Glean. Glean claims no ownership or rights over customer content.',
  alternatives: [
    {
      name: 'Microsoft 365 Copilot',
      detail: 'Microsoft\'s native workplace assistant ($30/user/month). Offers deep, unparalleled integration into Word, PowerPoint, Excel, and Teams, but struggles with third-party multi-vendor SaaS tools like Google Drive, Jira, and GitHub.'
    },
    {
      name: 'Perplexity Enterprise Pro',
      detail: 'A web-first conversational search engine ($40/user/month) with internal file search capabilities, excellent for external market research and cited web discovery but lacking Glean\'s 250+ automated enterprise ACL connectors.'
    },
    {
      name: 'Coveo Relevance Generative Answering',
      detail: 'An enterprise search and generative answering platform tailored heavily toward external customer-facing commerce, service portals, and enterprise website search, rather than cross-SaaS internal employee productivity.'
    },
    {
      name: 'Guru / Notion AI',
      detail: 'Knowledge management platforms with integrated AI search and verification features ($10 to $20/user/month), ideal for small-to-midsize teams centralizing wiki content but lacking deep multi-system semantic graph indexing.'
    }
  ],
  strengths: [
    'Unrivaled Multi-SaaS Connectivity: Over 250 turnkey connectors allow enterprises to unite Google Drive, Slack, SharePoint, Jira, and GitHub under a single unified search bar.',
    'Flawless Real-Time ACL & Permission Mirroring: Strict identity passthrough ensures employees only retrieve content they are explicitly permitted to view in source systems, eliminating data leakage.',
    'High Accuracy & Semantic Relevance: Combining sparse BM25 keyword matching with dense neural embeddings and the Enterprise Knowledge Graph yields vastly superior relevance over native SaaS search bars.',
    'Extensible Work AI & Agent Ecosystem: Goes beyond static search to provide conversational synthesis, customizable Glean Apps, and multi-step autonomous workflows.',
    'Flexible Deployment Options (SaaS or BYOC): Available as a fully managed multi-tenant SaaS or single-tenant Bring Your Own Cloud (BYOC) deployment in AWS, GCP, or Azure for strict data residency.',
    'Seamless User Experience & Go Links: The intuitive browser extension and Go Links shortlinks integrate naturally into daily employee habits without requiring disruptive workflow changes.'
  ],
  limitations: [
    'Prohibitive Minimum Pricing for Small Teams: The 100-seat minimum and $50k+ baseline annual commitment exclude early-stage startups and small organizations.',
    'Complex Implementation & Ingestion Latencies: Initial enterprise crawling, entity resolution, and knowledge graph hydration can require days to weeks of coordination with IT admins.',
    'API Rate Limit Dependencies: Data sync freshness is inherently tied to third-party vendor API rate limits and webhook delivery guarantees.',
    'Seat-Based Inefficiency: Organizations pay uniform per-seat pricing regardless of whether an employee is a daily power user or an occasional searcher.',
    'Limited Deep Write Actions: Primarily built as a read-and-retrieval engine; executing automated mutations or transactional updates across legacy backends still requires custom integration work.',
    'FlexCredits Management Overhead: Heavy usage of autonomous agent reasoning and multi-step LLM chains draws down consumption credits, necessitating proactive budget oversight.'
  ],
  workflow: [
    'Phase 1: Enterprise Identity & Connector Provisioning - IT administrators configure SAML 2.0 / SCIM single sign-on (Okta, Entra ID) and authorize native OAuth2 connectors across Google Workspace, Slack, Jira, and Microsoft 365 with strict admin scopes.',
    'Phase 2: Historical Crawling & Knowledge Graph Hydration - Glean ingests historical corporate documentation, resolves author entities, maps channel relationships, and verifies document-level Access Control Lists (ACLs) across all repositories.',
    'Phase 3: Security & Permission Verification Gate - Security and compliance leads audit permission enforcement in a staging environment to verify that restricted HR, payroll, and executive folders remain completely inaccessible to unprivileged staff.',
    'Phase 4: Browser Extension & Go Links Rollout - Deploy the Glean Chrome/Edge browser extension via Google Workspace Admin or Intune to make Glean the default new-tab page and enable workplace "go/" shortcuts.',
    'Phase 5: Departmental Glean Apps & Agent Configuration - Business analysts build customized Glean Apps (e.g., IT Helpdesk Bot, Sales RFP Assistant) with tailored system prompts, data source filters, and automated webhook actions.',
    'Phase 6: Usage Monitoring & Knowledge Hygiene - Operations leaders review the Glean Analytics dashboard to identify knowledge gaps, trending search queries, unused documentation, and team search adoption.'
  ],
  takeaway: 'Glean is the undisputed gold standard for enterprise workplace search and cross-SaaS intelligence. By uniting fragmented corporate knowledge across Google Drive, Slack, SharePoint, Jira, and GitHub under a unified, permission-aware Enterprise Knowledge Graph, Glean resolves the single greatest operational bottleneck in modern digital companies: finding verified information quickly. Its real-time ACL passthrough guarantees enterprise data security without sacrificing conversational generative power. While the $50k+ entry price and 100-seat minimum make it impractical for early-stage startups, for mid-market and global enterprise organizations grappling with tool sprawl, Glean delivers an extraordinary return on investment by recapturing hours of lost employee productivity every week.',
  sources: [
    {
      title: 'Glean Work AI Platform Architecture & Enterprise Search Documentation',
      publisher: 'Glean Official Product Documentation',
      url: 'https://www.glean.com/product/enterprise-search',
      type: 'official'
    },
    {
      title: 'Enterprise Security, Compliance & Permission Governance in Glean',
      publisher: 'Glean Trust & Security Center',
      url: 'https://www.glean.com/security',
      type: 'official'
    },
    {
      title: 'Glean Enterprise Flex Pricing & Licensing Architecture',
      publisher: 'Glean Product Announcement & Commercial Terms',
      url: 'https://www.glean.com/blog/enterprise-flex',
      type: 'official'
    },
    {
      title: 'r/sysadmin & r/ITManagers Enterprise Review: Real-World Glean Deployment, Pricing & ACL Performance',
      publisher: 'Reddit Enterprise IT Community Analysis',
      url: 'https://www.reddit.com/r/sysadmin/',
      type: 'independent'
    },
    {
      title: 'Gartner Market Guide for Enterprise Search & Workplace Knowledge Discovery',
      publisher: 'Gartner Research',
      url: 'https://www.gartner.com/en/documents/market-guide-enterprise-search',
      type: 'independent'
    }
  ]
};
