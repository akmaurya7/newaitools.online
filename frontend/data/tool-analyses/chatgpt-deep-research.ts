import type { ToolAnalysis } from './types.ts';

export const chatgptDeepResearchAnalysis: ToolAnalysis = {
  lastVerified: '2026-10-11',
  summary:
    'ChatGPT Deep Research is OpenAI\'s autonomous, multi-step research agent designed to perform exhaustive internet investigations, synthesize hundreds of web pages, and produce comprehensive, multi-page intelligence reports with verified inline citations. Unlike standard conversational AI models or basic search-augmented chat tools that retrieve two or three search snippets and generate a brief 400-word answer, Deep Research operates as an independent research assistant powered by OpenAI\'s frontier reasoning models (including specialized adaptations of the o3 model family). When assigned a complex brief, Deep Research autonomously decomposes the objective into multi-stage search queries, browses dozens of live websites, parses technical documentation and PDFs, executes Python code in sandboxed environments for quantitative calculations, cross-validates conflicting claims across independent sources, and synthesizes 10-to-30-page structured research dossiers in 5 to 25 minutes. Available natively within the ChatGPT web and mobile applications for ChatGPT Pro ($200/month) subscribers and with structured monthly quotas for ChatGPT Plus ($20/month) and Team users, Deep Research represents a fundamental architectural transition from interactive chatbots to autonomous knowledge-work agents.',
  company: 'OpenAI, Inc. (San Francisco, California, USA)',
  officialUrl: 'https://chatgpt.com/',
  status:
    'Active production research agent deployed globally across ChatGPT Pro, Plus, Team, and Enterprise tiers. Integrates autonomous web browsing, PDF ingestion, Python code execution, and recursive query expansion.',
  targetUsers: [
    'Investment analysts, private equity associates, and venture capitalists conducting market sizing, competitive landscapes, regulatory filings audits, and technical due diligence',
    'Corporate strategy leads, management consultants, and product executives needing comprehensive 15-to-25-page briefing dossiers on emerging industry shifts, vendor matrices, and supply chain bottlenecks',
    'Technology leads, software architects, and engineering managers evaluating complex enterprise software stacks, cloud infrastructure pricing models, and open-source framework tradeoffs',
    'Academic researchers, policy analysts, and investigative journalists requiring multi-source literature reviews, statistical data cross-referencing, and verifiable source provenance',
    'Founders, solo entrepreneurs, and product marketers synthesizing customer personas, competitor feature gaps, and go-to-market strategies without dedicated analyst teams'
  ],
  problemSolved:
    'Solves the exhausting "40-tab browser fatigue" and manual synthesis bottleneck that knowledge workers face every day. Traditional web research requires hours of manually crafting search queries, navigating SEO-bloated listicles, dodging paywalls, downloading dense 50-page PDF reports, reconciling contradictory statistics across conflicting studies, and manually formatting notes into an executive memo. Standard AI search engines (like basic Perplexity or Google AI Overviews) provide quick 2-minute surface-level summaries but lack the recursive depth required for high-stakes decision-making. ChatGPT Deep Research eliminates this friction by taking full operational ownership of the investigation: it plans a multi-pronged search trajectory, clicks into primary sources, analyzes raw tables and charts, re-queries when initial results are ambiguous, cross-checks numerical metrics, and structures the findings into an authoritative, publication-ready dossier with clickable citations.',
  howItWorks:
    'Deep Research executes a recursive agentic loop driven by test-time compute reasoning models: 1. Scope Formulation: Upon receiving a prompt, the agent analyzes the brief and, if necessary, poses interactive clarifying questions to establish geographic bounds, timeframes, target formats, and exclusions. 2. Autonomous Decomposition: The reasoning engine splits the primary inquiry into 5 to 15 sub-hypotheses and initiates parallel web searches. 3. Deep Browsing & Ingestion: Using a headless browser sandbox, the agent navigates beyond surface search snippets, loading full webpage DOMs, following internal links, downloading PDFs, and extracting tables. 4. Code Execution & Computation: For financial filings, statistical models, or raw datasets, it spins up an isolated Python interpreter to perform arithmetic validations, CAGR projections, or percentage changes. 5. Cross-Verification & Pruning: The model evaluates source authority, flags sponsored content or SEO spam, cross-references conflicting facts across multiple domains, and discards unverified claims. 6. Dossier Synthesis: It formats the final output into an exhaustive markdown document featuring executive summaries, thematic deep dives, comparison matrices, limitation disclosures, and numbered footnotes mapped directly to original web URLs.',
  features: [
    {
      name: 'Autonomous Multi-Hop Web Traversal',
      detail:
        'Recursively navigates live websites, follows secondary citations, and explores multiple hyperlink layers to uncover obscure technical documentation, whitepapers, and primary institutional sources rather than relying on surface search snippets.'
    },
    {
      name: 'Recursive Query Planning & Sub-Hypothesis Testing',
      detail:
        'Deconstructs broad research inquiries into dozens of targeted semantic search vectors, systematically exploring market drivers, risks, competitive threats, and regulatory constraints before synthesizing conclusions.'
    },
    {
      name: 'Sandboxed Python Interpreter & Quantitative Verification',
      detail:
        'Executes Python scripts in an isolated compute environment to calculate financial ratios, CAGR metrics, statistical significance, and currency conversions directly from retrieved datasets without hallucination.'
    },
    {
      name: 'Deep Ingestion of Complex Multi-Page PDFs',
      detail:
        'Extracts, parses, and cross-references data from uploaded enterprise PDFs or web-hosted documents (such as SEC 10-K filings, clinical trial reports, and academic preprints) alongside live open-web data.'
    },
    {
      name: 'Comprehensive 10-to-30-Page Structured Dossiers',
      detail:
        'Generates expansive, boardroom-ready markdown documents with detailed narrative sections, hierarchical headings, structured comparison tables, risk matrices, and actionable recommendations.'
    },
    {
      name: 'Verifiable Inline Source Citations',
      detail:
        'Every factual claim, statistic, and quote is tagged with direct, clickable footnote links to authoritative primary sources, enabling rapid verification and eliminating ambiguous source hallucination.'
    },
    {
      name: 'Pre-Flight Interactive Scope Clarification',
      detail:
        'Before consuming heavy compute budgets, the agent prompts users with targeted clarifying options to establish specific time horizons, target enterprise categories, and geographic focus.'
    },
    {
      name: 'Exportable Markdown & Multi-Device Sync',
      detail:
        'Allows one-click sharing, markdown copying, and reading across ChatGPT Web, macOS, Windows, iOS, and Android applications with synchronized research history.'
    }
  ],
  aiAndModels:
    'Powered by specialized agentic reasoning models derived from OpenAI\'s o3 and o1 model series, fine-tuned specifically for prolonged test-time compute, autonomous web navigation, tool invocation, and factual grounding. Rather than producing instantaneous token streams, the model spends significant inference-time compute generating hidden internal chains of thought to plan search sequences, evaluate the credibility of retrieved HTML content, identify knowledge gaps, and dynamically alter its investigation course. Python tool environments allow deterministic mathematical verification, while reinforcement learning from human and expert feedback (RLHF) enforces rigorous journalistic neutral tone, citation precision, and adherence to source evidence.',
  inputsOutputs:
    'Inputs: Natural language research prompts, custom instructions, uploaded PDF documents, spreadsheets (CSV/XLSX), text files, image references, and seed URLs. Outputs: Comprehensive markdown reports ranging from 2,000 to 12,000+ words, executive summaries, structured comparison tables, key risk evaluations, quantitative data models, and hyperlinked inline citations to external web domains.',
  limits: [
    'Execution Latency: Deep research runs require significant compute time, typically taking between 5 to 25 minutes depending on query complexity and document volume, making it unsuitable for instant conversational queries.',
    'Monthly Usage Quotas: Free tier users have no access; Plus users ($20/mo) receive a capped allotment (typically 10 to 25 runs per month subject to server capacity); only Pro tier ($200/mo) users receive high-volume access (up to 100-250 runs/mo).',
    'Paywalls & Bot Protection: The agent cannot bypass hard subscription paywalls (e.g., Financial Times, Bloomberg Terminal, paywalled IEEE/Nature articles) or aggressive Cloudflare/CAPTCHA challenges, occasionally falling back to secondary open citations.',
    'No Mid-Run Interactive Steering: Once an autonomous research task is initialized, users cannot guide, pause, or redirect the agent mid-investigation; corrections require running a follow-up refinement query.',
    'Private Intranet & Database Isolation: Out-of-the-box Deep Research operates exclusively on public web data and uploaded user files; it cannot access private internal enterprise SQL databases, Notion workspaces, or Jira instances without custom enterprise connectors.'
  ],
  useCases: [
    'Competitive Intelligence & Market Sizing: Compiling 20-page dossiers on competitor feature releases, pricing tier shifts, enterprise contract terms, and market share estimates.',
    'Technical Architecture & Vendor Due Diligence: Evaluating open-source vs. proprietary infrastructure (e.g., Kubernetes vs. serverless edge, vector database performance benchmarks) with sourced benchmarks.',
    'Investment & M&A Due Diligence: Auditing industry tailwinds, customer concentration risks, regulatory scrutiny, and historical valuation multiples for target companies.',
    'Academic Literature & Policy Synthesis: Reviewing clinical findings, environmental regulatory frameworks, and legislative histories across diverse international jurisdictions.',
    'Product Requirement & Go-To-Market Scoping: Synthesizing real-world user complaints from forums (Reddit, Hacker News, G2) into structured feature roadmaps and positioning briefs.'
  ],
  poorFit: [
    'Instantaneous Conversational Q&A: Basic definitions, quick coding syntax lookups, or casual chat where sub-second response times are needed (standard GPT-4o or Claude 3.5 is far superior).',
    'Breaking Real-Time News (Minutes Old): Rapidly developing crises or minute-by-minute breaking financial news where indexing latency and agent deliberation take too long.',
    'Private Enterprise Data Audits: Analyzing confidential company databases or internal code repositories without public documentation (requires local RAG or dedicated enterprise tooling).',
    'Interactive Creative Brainstorming: Iterative copy editing, roleplay, or brainstorming where immediate back-and-forth conversational steering is essential.'
  ],
  pricing: [
    {
      name: 'Free Tier ($0/month)',
      detail:
        'Does not include access to ChatGPT Deep Research. Free users have access to standard GPT-4o with basic web browsing capabilities (1-2 search queries per prompt).'
    },
    {
      name: 'ChatGPT Plus ($20/month)',
      detail:
        'Includes capped monthly access to Deep Research (typically 10 to 25 deep research runs per month, subject to compute demand), alongside standard access to GPT-4o, o1, and advanced data analysis.'
    },
    {
      name: 'ChatGPT Pro ($200/month)',
      detail:
        'Designed for intensive professional researchers and power users. Includes high-capacity/unrestricted Deep Research access (up to 100-250 runs per month), priority compute allocation, unrestricted o1/o3 reasoning model access, and expanded compute limits.'
    },
    {
      name: 'ChatGPT Team ($25 to $30/user/month)',
      detail:
        'Billed annually at $25/seat/month or monthly at $30/seat/month. Provides shared workspace admin controls, pooled Deep Research allocations, and an explicit contractual guarantee that workspace data is never used for model training.'
    },
    {
      name: 'ChatGPT Enterprise & Edu (Custom Pricing)',
      detail:
        'Enterprise-grade contract with dedicated high-quota Deep Research capacity, unlimited high-speed reasoning models, 128k context windows, SOC 2 Type II compliance, SSO, domain verification, and custom admin analytics.'
    }
  ],
  integrations: [
    'ChatGPT Web Application (Chrome, Edge, Safari, Firefox)',
    'ChatGPT Native Desktop Apps for macOS and Windows',
    'ChatGPT Mobile Applications for iOS and Android',
    'Export formats: Direct Markdown copy, HTML, and formatted PDF print',
    'Cloud Drive & Document Upload (Google Drive, Microsoft OneDrive, local PDF/CSV ingestion)',
    'ChatGPT Custom Projects & Workspace Shared Libraries'
  ],
  developer: [
    'OpenAI Platform API roadmap for autonomous agent search endpoints and function-calling integration',
    'Headless browser execution framework compatible with sandboxed enterprise tool harnesses',
    'Integration with LangChain, LlamaIndex, and AutoGen through structured JSON schema extraction',
    'Support for automated document processing pipelines and secondary LLM verification loops'
  ],
  privacy:
    'Data governance depends on the user subscription tier. For individual Free and Plus accounts, user prompts and uploaded documents may be used for model training unless the user explicitly disables "Improve the model for everyone" in Data Controls settings. For ChatGPT Pro, Team, Enterprise, and Edu accounts, OpenAI enforces strict contractual zero-retention data privacy: customer inputs, research briefs, uploaded files, and generated research dossiers are never used to train OpenAI foundation models. Enterprise tiers include SOC 2 Type II compliance, encryption in transit (TLS 1.3) and at rest (AES-256), and dedicated regional data residency agreements.',
  ownership:
    'Users retain full intellectual property ownership, copyright, and commercial exploitation rights to the research dossiers, summaries, tables, and narrative text generated by ChatGPT Deep Research under OpenAI\'s Terms of Service. Users are responsible for verifying that quoted third-party text, excerpts, and copyrighted data referenced in inline footnotes comply with fair use and attribution guidelines.',
  alternatives: [
    {
      name: 'Perplexity Pro (Deep Research Mode)',
      detail:
        'Priced at $20/month with Sonar Reasoning Pro and DeepSeek R1 models. Executes web research in 2 to 5 minutes with excellent live search index freshness. While faster and highly reliable for academic lookups, Perplexity\'s reports are typically shorter (3 to 7 pages) compared to OpenAI\'s exhaustive 20-page dossiers.'
    },
    {
      name: 'Google Gemini Deep Research (Advanced)',
      detail:
        'Included in the $20/month Google One AI Premium plan powered by Gemini 2.0 Thinking. Leverages Google\'s unmatched search index and 2-million-token context window with native Google Docs integration. Excels at broad multi-source synthesis, though slightly less relentless in multi-hop browser click-throughs than OpenAI.'
    },
    {
      name: 'Claude 3.7 Sonnet / Research Workflows (Anthropic)',
      detail:
        'Anthropic\'s flagship hybrid reasoning model offers unparalleled nuance, qualitative depth, and artifact generation. However, it requires third-party search agent harnesses (or developer-configured MCP tools) to autonomously browse the live open web across dozens of sites.'
    },
    {
      name: 'Elicit & Consensus (Academic Research)',
      detail:
        'Specialized scientific research platforms indexing 200M+ peer-reviewed papers with structured clinical study matrices and DOI extraction. Superior for biomedical and academic meta-analyses, but lacking ChatGPT\'s broad commercial, financial, and market intelligence scraping capabilities.'
    }
  ],
  strengths: [
    'Unrivaled Autonomous Tenacity: Executes 30 to 60+ targeted web searches per investigation, clicking deeply into primary sites rather than summarizing top Google snippets.',
    'Exhaustive, Boardroom-Ready Dossiers: Generates structured, highly articulated 15-to-30-page research documents that save 6 to 10 hours of manual analyst labor.',
    'Sandboxed Code Execution: Uses isolated Python instances to calculate financial ratios, CAGR metrics, and statistical trends directly from retrieved data tables.',
    'Factual Grounding with Verifiable Footnotes: Numbered inline citations link directly to primary URLs, enabling instant fact-checking and auditability.',
    'Interactive Scope Refinement: Intelligently asks clarifying questions before execution to tailor geographic bounds, industry sectors, and document formats.'
  ],
  limitations: [
    'High Turnaround Latency: Typical queries take 5 to 20 minutes to complete, requiring asynchronous background execution rather than instant interactive responses.',
    'Steep Price Barrier for Unlimited Usage: Heavy daily researchers require the $200/month Pro tier, as Plus tier accounts are constrained by monthly run limits.',
    'Paywall and Anti-Scraping Roadblocks: Cannot access subscription-locked archives (FT, Bloomberg, WSJ) or sites with aggressive CAPTCHA challenges.',
    'No Mid-Flight Course Correction: Users cannot pause, reprioritize, or inject new constraints once the autonomous investigation loop has been launched.',
    'Vulnerability to Secondary SEO Aggregators: In niche commercial queries with sparse primary documentation, the agent can occasionally cite secondary review sites.'
  ],
  workflow: [
    'Phase 1: Formulate the Research Brief (Input): Craft a comprehensive, multi-faceted prompt defining research objectives, target market segments, required analytical dimensions (pricing, compliance, tech stack), historical timeframe (e.g., 2024–2026), and expected output format.',
    'Phase 2: Scope Clarification & Hypothesis Lock (Action): Review the agent\'s initial clarification questions, confirm boundaries (such as North America vs. APAC, enterprise vs. SMB), and authorize the automated research trajectory.',
    'Phase 3: Autonomous Web Traversal & Computation (Action): Deep Research explores dozens of live domains, parses downloaded PDFs, executes Python data calculations, and cross-references source metrics in the background (5–20 minutes).',
    'Phase 4: Audit Citations & Verification Gate (Quality Gate): Inspect key financial metrics, market share percentages, and controversial claims against the hyperlinked primary source URLs in the footnotes to ensure no misinterpretations occurred.',
    'Phase 5: Synthesis, Formatting & Distribution (Output): Export the finalized markdown dossier into Google Docs, Notion, or internal executive briefing decks for executive stakeholder presentation.'
  ],
  takeaway:
    'ChatGPT Deep Research marks the decisive inflection point where generative AI graduates from conversational chat to an autonomous junior research analyst. By combining test-time compute reasoning, recursive multi-hop browsing, PDF ingestion, and sandboxed code execution, it automates the most time-consuming 80% of market, competitive, and technical research. While the 10-to-20-minute latency and $200/month Pro pricing for heavy users require deliberate workflow planning, its ability to deliver verifiable, boardroom-ready intelligence dossiers makes it an indispensable productivity multiplier for consultants, analysts, founders, and tech executives in 2026.',
  sources: [
    {
      title: 'Introducing Deep Research in ChatGPT',
      publisher: 'OpenAI Official Blog',
      url: 'https://openai.com/index/introducing-deep-research/',
      type: 'official'
    },
    {
      title: 'ChatGPT Pricing, Plans and Pro Features',
      publisher: 'OpenAI Pricing Directory',
      url: 'https://openai.com/chatgpt/pricing/',
      type: 'official'
    },
    {
      title: 'OpenAI Enterprise Privacy, Security & Data Protection Charter',
      publisher: 'OpenAI Trust Portal',
      url: 'https://openai.com/enterprise-privacy/',
      type: 'official'
    },
    {
      title: 'Independent Benchmark: Deep Research Agents vs. Perplexity and Gemini',
      publisher: 'Artificial Intelligence Market Research Review',
      url: 'https://www.newaitools.online/blog/ai-search-engines-2026',
      type: 'independent'
    }
  ]
};
