import type { ToolAnalysis } from './types.ts';

export const harveyAnalysis: ToolAnalysis = {
  lastVerified: '2026-10-14',
  summary: 'Harvey AI is the preeminent enterprise generative AI platform engineered exclusively for elite global law firms, corporate legal operations, institutional accounting consultancies, and private equity transaction teams. Backed by the OpenAI Startup Fund, Sequoia Capital, and Kleiner Perkins, Harvey combines frontier foundation LLMs (including custom OpenAI GPT-4o fine-tunes and Harvey\'s proprietary in-house "Tenet" long-horizon reasoning model) with institutional document management systems to automate high-stakes legal workflows. Unlike generic consumer AI assistants, Harvey is architected around three foundational pillars: Assistant (an agentic legal copilot for drafting, complex statutory queries, and litigation memo synthesis), Vault (an enterprise data room and knowledge repository supporting contextual semantic search across massive discovery productions and transaction files), and Workflows (a multi-step automated execution engine for batch contract redlining, lease abstraction, regulatory gap analysis, and M&A due diligence). By grounding generations directly in a firm\'s historical work product, negotiated clauses, and house style guides, Harvey enables transactional and litigation attorneys to complete initial 70–80% drafting passes in minutes rather than days. However, access to Harvey is strictly gated behind an enterprise-only, sales-led procurement process. The platform requires annual non-disclosure agreements, minimum commitments of 20 to 25 seats, and standard baseline contract floors ranging from $240,000 to $360,000 annually ($1,000 to $1,200 per user per month), plus $10,000 to $50,000 in onboarding and implementation fees. Furthermore, while Harvey excels at transactional drafting and portfolio-scale document analysis, it is not a standalone replacement for verified primary law citators (like Thomson Reuters KeyCite or LexisNexis Shepard\'s), meaning practicing attorneys must maintain active human verification over all extracted citations and statutory cross-references.',
  company: 'Harvey AI (Counsel AI Corporation)',
  officialUrl: 'https://www.harvey.ai/',
  status: 'Enterprise commercial SaaS operating strictly on annual contracts with mandatory 20–25 seat minimums. No public self-serve portal or free trial; access requires enterprise sales procurement, customized security audits, and dedicated onboarding.',
  targetUsers: [
    'Am Law 100/200 and Magic Circle global law firms conducting high-volume transactional drafting, M&A due diligence, and multi-jurisdictional litigation preparation',
    'Fortune 500 Corporate Legal Operations and General Counsel teams managing contract lifecycles, compliance audits, and commercial vendor redlines',
    'Big Four accounting and professional services firms automating multi-country tax compliance memos, regulatory gap analyses, and transfer pricing reviews',
    'Private equity and venture capital investment counsel auditing portfolio company disclosure schedules, employment agreements, and IP licensing chains',
    'Specialized boutique law practices with large institutional transaction volumes and six-figure dedicated legal tech budgets'
  ],
  problemSolved: 'Solves the catastrophic efficiency bottleneck and liability risk facing modern legal practitioners: handling exponential document volumes without compromising professional precision or violating client confidentiality. General-purpose consumer AI models (like ChatGPT or basic Claude) pose severe risks under ABA Model Rule 1.6 (Confidentiality of Information) regarding third-party data retention, generic tone, and hallucinated case citations. Traditional legal research platforms, meanwhile, remain search-oriented rather than generative workhorses. Harvey solves this by delivering an enterprise-isolated AI environment with zero data training retention, direct integration into firm Document Management Systems (iManage, NetDocuments), and domain-adapted agentic models trained to draft, redline, and analyze documents according to institutional precedent.',
  howItWorks: 'Harvey operates through a three-stage legal intelligence architecture: (1) Knowledge Grounding & Vault Ingestion: Law firms connect enterprise repositories (iManage, NetDocuments, SharePoint, or transactional virtual data rooms) to Harvey Vault. The platform semantically indexes millions of pages of negotiated agreements, firm briefs, and partner-approved templates with strict ethical-wall role permissions. (2) Dual-Engine Agentic Reasoning: User queries and workflow tasks are processed by a hybrid model ensemble. High-level transactional drafting and client communications route through customized OpenAI GPT-4o legal models, while complex, long-horizon multi-step document audits route through "Tenet"?"Harvey\'s proprietary in-house model trained via reinforcement learning across thousands of lawyer-graded simulated legal environments. (3) Structured Workflows & Human-in-the-Loop Review: For complex tasks like 200-contract due diligence sweeps or 10-K regulatory comparisons, Harvey Workflows executes chained extraction steps, highlighting critical risk terms in structured tabular matrices with clickable line-by-line source page citations for partner verification.',
  features: [
    {
      name: 'Harvey Assistant (Conversational Legal Copilot)',
      detail: 'An interactive conversational workspace for drafting motions, synthesizing client advisory memos, summarizing depositions, comparing competing legal positions, and generating cross-jurisdictional research outlines with hyperlinked source citations.'
    },
    {
      name: 'Harvey Vault (Secure Enterprise Data Room & Knowledge Layer)',
      detail: 'A centralized repository engineered for massive litigation productions and M&A data rooms. Features Agentic Vault Search that inspects unstructured document collections based on semantic context, conceptual themes, and metadata without requiring exact keyword syntax.'
    },
    {
      name: 'Workflows & Custom Workflow Builder',
      detail: 'A graphical multi-step orchestration engine that automates recurring legal procedures, including automated contract redlining against firm playbooks, lease abstraction, regulatory disclosure gap analysis, and batch due diligence sweeps.'
    },
    {
      name: 'Precedent-Grounded Drafting & Style Matching',
      detail: 'Directly analyzes a firm\'s approved historical deal documents, filings, and style guidelines to draft new contracts and clauses matching the firm\'s proprietary language conventions, formatting preferences, and risk tolerances.'
    },
    {
      name: 'Harvey Tenet Long-Horizon Reasoning Model',
      detail: 'Proprietary in-house foundation model engineered specifically for complex, multi-hour legal agent loops, offering enhanced reasoning over hundreds of contract pages at lower latency and zero external API vendor lock-in.'
    },
    {
      name: 'Ethical Walls & Granular RBAC Permissions',
      detail: 'Maintains enterprise-grade ethical barriers, client matter segregation, and strict role-based access controls ensuring attorneys only access documents and AI insights permitted under active engagement agreements.'
    },
    {
      name: 'LexisNexis & Primary Legal Content Integration',
      detail: 'Strategic enterprise data partnerships enabling seamless cross-referencing against primary statutes, administrative codes, and secondary legal treatises within the Harvey drafting interface.'
    },
    {
      name: 'Audit-Ready Source Citations & Verification Pins',
      detail: 'Every extracted clause, risk score, and factual claim generated by Harvey is anchored to exact document pages, paragraphs, and timestamps, allowing associates to verify claims with a single click.'
    }
  ],
  aiAndModels: 'Harvey operates an advanced multi-model legal orchestration architecture. Rather than relying on a single third-party LLM, Harvey routes tasks through an intelligent ensemble: (1) OpenAI Frontier Models: Co-developed with the OpenAI Startup Fund, Harvey utilizes specialized fine-tuned versions of GPT-4o optimized for legal reasoning, statutory interpretation, and document generation. (2) Harvey Tenet: Harvey\'s proprietary in-house foundation model post-trained specifically on legal reasoning tasks using asynchronous reinforcement learning (GSPO) over thousands of lawyer-graded simulated workflows, engineered for multi-hour autonomous agentic tasks over vast context windows. (3) Strict Enterprise Security: All inference runs on dedicated Azure and AWS enterprise enclaves with contractual Zero Data Retention (ZDR) guarantees?"prompts, uploaded deal documents, and partner queries are never used to train or refine commercial foundation models.',
  inputsOutputs: 'Inputs: Complex legal documents (PDF, DOCX, scanned TIFFs, ZIP archives of virtual data rooms), iManage/NetDocuments matter IDs, regulatory filings (SEC 10-K, 10-Q, 8-K), deposition transcripts, contract redline playbooks, and natural language attorney prompts. Outputs: Structured contract comparison matrices, clause-by-clause redlined Word documents (tracked changes), comprehensive due diligence summary spreadsheets, client advisory memorandums, deposition cross-examination outlines, and tabular risk evaluations with pinned page-level citations.',
  limits: [
    'Strict Enterprise Procurement Barrier: Harvey does not offer individual or boutique subscriptions. Small firms and solo attorneys cannot purchase self-service access, with sales teams strictly enforcing 20–25 minimum user seats.',
    'Prohibitive Minimum Financial Commitment: Baseline annual contracts start at $240,000 to $360,000 USD (plus $10,000 to $50,000 in onboarding and setup fees), placing the software out of reach for non-institutional budgets.',
    'Lack of Authoritative Primary Law Citators: Harvey is a drafting, synthesis, and workflow platform, not a primary legal citator like KeyCite (Westlaw) or Shepard\'s (LexisNexis); practitioners cannot rely on it to definitively confirm whether a precedent remains good law.',
    'Mandatory Line-by-Line Human Verification: Despite fine-tuned legal training, Harvey can still suffer from subtle context hallucination, missed carve-out clauses, or jurisdiction-specific misinterpretations, requiring certified attorney oversight under professional responsibility rules.',
    'Integration Dependency on Firm Infrastructure: Full realization of Harvey\'s precedent-matching capability requires high-quality, pre-organized document management systems (iManage, NetDocuments); firms with fragmented, poorly labeled legacy archives experience degraded search performance.',
    'Black-Box Agentic Execution: While Workflow outputs provide source citations, attorneys have limited visibility into intermediate prompt scaffolding and token temperature settings compared to open developer environments.'
  ],
  useCases: [
    'M&A Contract Due Diligence & Portfolio Sweeps: Ingesting 500+ vendor agreements, customer contracts, and licensing deeds in a transaction data room to extract change-of-control clauses, non-competes, liability caps, and termination penalties into an executive diligence table',
    'Playbook-Guided Contract Review & Redlining: Uploading third-party Master Services Agreements (MSAs) or NDAs and automatically generating standard redlines with tracked changes conforming to the corporation\'s approved fallback positions',
    'Litigation Discovery Analysis & Deposition Synthesis: Uploading multi-day deposition transcripts and evidentiary exhibits to generate timeline chronologies, witness contradiction tables, and cross-examination outlines',
    'Regulatory Gap & Compliance Audits: Comparing corporate governance policies or multi-state operational contracts against newly enacted statutory frameworks (such as EU AI Act, GDPR, or state privacy laws) to identify non-compliant clauses',
    'Complex Client Advisory Memorandum Drafting: Synthesizing statutory precedents, contractual definitions, and client factual summaries into structured first-draft legal memos matching partner-level writing conventions'
  ],
  poorFit: [
    'Solo practitioners and small boutique law firms with fewer than 20 attorneys or legal tech budgets under $250,000/year (better served by Spellbook, Robin AI, or Claude Team)',
    'Lawyers seeking definitive, authoritative primary legal research citators to Shepardize or KeyCite appellate caselaw (who must rely on Lexis+ AI or Thomson Reuters CoCounsel/Westlaw Precision)',
    'Consumers, small business owners, or non-lawyers seeking automated legal advice or self-service legal document generators (such as LegalZoom or Rocket Lawyer)',
    'Marketing teams or general copywriters seeking general-purpose blog or social content generation (better served by Writesonic, Jasper, or ChatGPT Plus)'
  ],
  pricing: [
    {
      name: 'Base Enterprise User Seat (~$1,000 – $1,200 / User / Month)',
      detail: 'Standard platform license quoted at approximately $1,000 to $1,200 per user per month ($12,000 to $14,400 annually per seat). Enforces a mandatory minimum threshold of 20 to 25 seats, establishing an annual contract floor of $240,000 to $360,000 USD billed annually.'
    },
    {
      name: 'Content-Bundled Legal Research Seat (~$2,000 – $2,400 / User / Month)',
      detail: 'Enterprise seat tier bundled with integrated primary legal content partnerships (such as LexisNexis commercial legal databases), quoted around $2,000 to $2,400 per user per month ($24,000 to $28,800 annually per seat).'
    },
    {
      name: 'Am Law 100 Volume Enterprise Deployment ($100 – $400 / User / Month)',
      detail: 'Firm-wide or enterprise-wide deployments exceeding 100 to 500+ licensed seats receive substantial volume discounts, bringing effective per-seat costs down to approximately $100 to $400 per user per month under comprehensive multi-year enterprise commitments.'
    },
    {
      name: 'Mandatory Implementation & Onboarding Package ($10,000 – $50,000 One-Time)',
      detail: 'Compulsory onboarding and technical deployment fee covering single sign-on (SAML SSO) setup, Document Management System (iManage, NetDocuments) connector configuration, custom playbook ingestion, and attorney training sessions.'
    },
    {
      name: 'Enterprise Contract Terms & Minimums',
      detail: 'Strict 12-month minimum contract term billed annually upfront under strict mutual non-disclosure agreements. No self-service credit purchases, no monthly billing, and zero public free trials.'
    }
  ],
  integrations: [
    'Enterprise Document Management Systems (iManage Work 10, NetDocuments, OpenText, SharePoint, Box Enterprise)',
    'Virtual Data Rooms & Diligence Repositories (Intralinks, Datasite, Firmex, SecureDocs)',
    'Office Productivity Suites (Microsoft 365, Word Add-in for tracked-changes redlining, Outlook, Microsoft Teams)',
    'Identity & Access Management (Okta, Microsoft Entra ID / Azure AD, Ping Identity, SAML 2.0 SSO, SCIM User Provisioning)',
    'Legal Research Treatises & Data Providers (LexisNexis, vLex, official state and federal judicial dockets)',
    'Enterprise Cloud Infrastructure (Microsoft Azure Private Tenancy, Amazon Web Services GovCloud/Commercial Enclaves)'
  ],
  developer: [
    'Enterprise REST API for Headless Workflow Execution: Programmatically submit bulk contract portfolios, trigger batch extraction routines, and retrieve structured JSON payloads into internal matter management systems',
    'Custom DMS & Virtual Data Room Connectors: Bi-directional synchronization pipelines connecting Harvey Vault directly to on-premise or cloud-hosted iManage and NetDocuments repositories',
    'Automated JSON Schema & Tabular Output Formatting: Define strict schema validation models ensuring contract review results map seamlessly into corporate relational databases, ERP systems, or contract lifecycle management (CLM) platforms',
    'Granular Audit Trail & Logging Telemetry: Export detailed audit event logs (SIEM integration) documenting user queries, accessed matter IDs, prompt timestamps, and export actions for compliance verification',
    'Role-Based API Token Scoping: Generate API credentials restricted to specific practice groups, offices, or client billing codes with strict execution rate limits',
    'Custom Fine-Tuning Playbook Pipelines: Ingest partner-approved clause playbooks and redlining standards into specialized workflow execution nodes'
  ],
  privacy: 'Harvey adheres to the most stringent data protection, privacy, and confidentiality standards in the legal industry, specifically architected to satisfy ABA Model Rule 1.6 and international regulatory equivalents. Harvey is SOC 2 Type II certified, ISO 27001 certified, and HIPAA compliant. All client matter data is encrypted in transit using TLS 1.3 and at rest with AES-256 encryption within dedicated, isolated cloud tenant environments. Harvey contractually guarantees Zero Data Retention for model training: under no circumstances are client communications, uploaded briefs, transactional agreements, or user prompts used to train, retrain, or improve commercial foundation AI models.',
  ownership: 'Law firms and enterprise corporate clients retain complete, exclusive intellectual property ownership and copyright over all uploaded documents, ingested precedent databases, system playbooks, and generated legal work product (including drafted briefs, redlines, and diligence matrices). Harvey asserts zero ownership, licensing, or commercial claims over client materials or outputs.',
  alternatives: [
    {
      name: 'Thomson Reuters CoCounsel (formerly Casetext)',
      detail: 'The foremost direct competitor to Harvey in legal AI, powered by GPT-4o and deeply integrated with Thomson Reuters\' Westlaw Precision and KeyCite citator. CoCounsel provides unmatched authoritative primary case law research and citator validation that Harvey lacks, with lower seat minimums and transparent subscription tiers suitable for mid-market firms.'
    },
    {
      name: 'Lexis+ AI / Lexis Protégé',
      detail: 'LexisNexis\' native generative legal intelligence platform. Fully integrated with Shepard\'s Citations and Matthew Bender treatises, offering reliable primary law validation, contract drafting, and litigation analysis backed by Lexis\' proprietary primary legal corpus.'
    },
    {
      name: 'Spellbook',
      detail: 'A specialized contract drafting and review tool built directly into Microsoft Word, tailored specifically for transactional attorneys and corporate counsel. Offers accessible self-service and team pricing ($149–$299/seat/month) with zero 20-seat minimums, making it the top alternative for solo lawyers and boutique transactional practices.'
    },
    {
      name: 'Robin AI',
      detail: 'An enterprise contract review and redlining platform built on Anthropic Claude models and backed by an in-house legal team for human-in-the-loop verification. Excels at high-speed vendor contract triage and procurement redlining with hybrid software-plus-managed-review pricing.'
    },
    {
      name: 'Claude Enterprise / ChatGPT Enterprise (Direct Frontier LLMs)',
      detail: 'General-purpose frontier models with enterprise privacy agreements (SOC 2, zero data retention). Significantly cheaper ($30–$60/user/month) than Harvey, but lacks native DMS connectors, pre-built legal workflows, automated redlining tables, and curated legal knowledge stores.'
    }
  ],
  strengths: [
    'Unrivaled Institutional Adoption & Brand Prestige: Backed by OpenAI, Sequoia, and Kleiner Perkins, Harvey is trusted by premier Am Law 100 firms (Allen & Overy / A&O Shearman) and PwC, providing immediate stakeholder credibility.',
    'Tenet Long-Horizon Legal Model: Proprietary in-house reasoning model tailored for multi-hour document tasks, reducing reliance on third-party API rate limits and token costs.',
    'Harvey Vault & Precedent Grounding: Integrates deeply into enterprise DMS repositories to draft according to the firm\'s negotiated language and standards rather than generic AI prose.',
    'Powerful Multi-Step Workflow Automation: Chains complex due diligence, regulatory gap analysis, and lease abstraction tasks into structured, client-ready spreadsheets.',
    'Enterprise-Grade Security & ABA 1.6 Compliance: Guaranteed zero data retention for training, dedicated cloud enclaves, and rigorous ethical-wall permissions.'
  ],
  limitations: [
    'Extreme Financial & Seat Minimum Barriers: 20–25 seat minimums and $240,000+ entry floors lock out solo practitioners and small-to-midsize law firms entirely.',
    'No Native Primary Law Citator: Lacks an authoritative citator (like KeyCite or Shepard\'s) to confirm whether referenced precedents remain good law or have been overturned.',
    'Closed Sales Procurement Process: Requires high-friction enterprise sales cycles, custom NDA negotiations, and extensive onboarding with zero self-service experimentation.',
    'DMS Hygiene Dependency: Performance heavily depends on the organization and quality of the firm\'s internal document repository; disorganized precedents yield noisy results.',
    'Risk of Over-Reliance by Junior Associates: Requires continuous cultural enforcement to ensure associates thoroughly verify extracted citations and clauses rather than accepting outputs uncritically.'
  ],
  workflow: [
    '1. Data Room Ingestion & Matter Provisioning: Input: 120 commercial agreements (PDF and DOCX vendor contracts, customer MSAs, IP licensing deeds) uploaded to an M&A virtual data room, accompanied by the target company\'s disclosure schedule. Action: The lead associate provisions a new secure matter workspace in Harvey Vault, applies ethical-wall permissions restricted to the deal team, and uploads the documents. Harvey automatically optical-character-recognizes (OCR) scanned pages, strips metadata noise, and indexes document embeddings into a dedicated project vector space. Quality Gate: Review the Vault ingestion report to verify that 100% of files parsed cleanly without OCR failures or password-lock skips.',
    '2. Due Diligence Playbook Configuration: Input: The acquirer\'s approved Due Diligence Playbook defining 12 target review parameters (Change of Control triggers, Most Favored Nation clauses, Uncapped Liability provisions, Non-Solicitation terms, Governing Law, and Assignment restrictions). Action: The associate selects Harvey Workflows and configures a batch extraction template. For each parameter, the associate specifies the analytical question, required output format (Yes/No with excerpted text), and severity ranking criteria (High/Medium/Low risk). Quality Gate: Run a dry-run test across 3 sample contracts to confirm that Harvey accurately tags non-standard indemnity thresholds and correctly identifies ambiguous change-of-control definitions.',
    '3. Autonomous Batch Execution & Risk Matrix Synthesis: Input: Configured workflow template and the 120-document Vault collection. Action: Trigger the automated batch run in Harvey Workflows. Utilizing the Tenet and GPT-4o legal models, Harvey evaluates every agreement in parallel, extracting relevant clauses, summarizing business risks, and compiling findings into a unified, interactive due diligence spreadsheet. Each matrix cell contains a pinned hyperlink linking directly to the exact page and paragraph of the source contract. Quality Gate: Inspect the progress telemetry to verify zero API timeout errors across the 120-contract portfolio.',
    '4. Line-by-Line Citation & Clause Verification: Input: Synthesized 120-row due diligence risk matrix. Action: Junior and senior associates conduct a focused verification pass. Clicking through high-risk flagged items (such as ambiguous IP assignment language or $10M+ uncapped indemnities), the attorneys verify that Harvey\'s extracted excerpts reflect the governing contract language and check for any countervailing amendment schedules. Quality Gate: Ensure 100% of high-risk flagged clauses have been confirmed by a licensed attorney, adjusting Harvey\'s drafted notes where contextual business nuance requires refinement.',
    '5. Executive Deliverable Export & Client Presentation: Input: Attorney-verified due diligence matrix and executive risk summary. Action: Export the finalized deliverable from Harvey into an audit-ready Microsoft Excel workbook and a partner-formatted Word summary memorandum with tracked changes. Harvey generates an executive summary highlighting the top 5 deal-contingent contractual risks for the acquiring company\'s investment committee. Quality Gate: Partner review confirming that the final memo adheres to the firm\'s professional standards and accurately reflects transaction deal thresholds before formal client delivery.'
  ],
  takeaway: 'Harvey AI represents the gold standard in enterprise legal artificial intelligence, delivering unmatched workflow automation, DMS precedent integration, and due diligence capabilities for Am Law 100 firms and Fortune 500 legal departments. Its dual-model engine?"combining OpenAI\'s legal fine-tunes with Harvey\'s in-house Tenet reasoning model?"empowers large teams to tackle massive document portfolios with unprecedented speed. However, potential buyers must recognize its rigid market boundaries: with minimum contract floors of $240,000+ per year and a mandatory 20–25 seat threshold, Harvey is strictly an institutional investment, completely out of reach for small firms and solo attorneys who are better served by Spellbook, Robin AI, or CoCounsel. Furthermore, because Harvey does not feature a primary legal citator like KeyCite or Shepard\'s, it must be deployed as a force multiplier for drafting and due diligence rather than an autonomous replacement for verified legal judgment.',
  sources: [
    {
      title: 'Harvey AI: Enterprise Legal Platform Overview & Architecture',
      publisher: 'Harvey AI Official Site',
      url: 'https://www.harvey.ai/',
      type: 'official'
    },
    {
      title: 'OpenAI Startup Fund: Partnering with Harvey to Transform Legal AI',
      publisher: 'OpenAI Official Blog',
      url: 'https://openai.com/index/harvey/',
      type: 'official'
    },
    {
      title: 'Harvey AI Procurement, Real Per-Seat Costs, and Minimum Enterprise Contracts',
      publisher: 'The LawGPT Legal Tech Market Analysis',
      url: 'https://thelawgpt.com/harvey-ai-pricing/',
      type: 'independent'
    },
    {
      title: 'Reddit r/legaltech & r/lawfirm: In-Depth Attorney Reviews, Strengths, and Wrapper Debates',
      publisher: 'Reddit Legal Tech Discussions',
      url: 'https://www.reddit.com/r/legaltech/',
      type: 'independent'
    },
    {
      title: 'Legal AI Platform Comparison: Harvey vs CoCounsel vs Lexis+ AI',
      publisher: 'DreamLegal Intelligence Review',
      url: 'https://dreamlegal.in/blog/harvey-ai-review/',
      type: 'independent'
    }
  ]
};
