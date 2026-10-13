import type { ToolAnalysis } from './types.ts';

export const consensusAnalysis: ToolAnalysis = {
  lastVerified: '2026-10-13',
  summary: 'Consensus is a specialized academic AI search engine and evidence-synthesis platform designed to settle research hypotheses, evaluate scientific debates, and draft rigorous literature reviews grounded exclusively in over 200 million peer-reviewed papers. Powered by Semantic Scholar and PubMed academic indexing combined with custom LLM extraction models, Consensus eliminates the dangerous hallucinations common to consumer chatbots by tying every claim directly to verifiable DOI citations. Its signature Consensus Meter quantifies scientific sentiment across clinical trials and meta-analyses into actionable Yes/No/Mixed percentages, while automated Study Snapshots extract crucial parameters—including sample sizes, study designs (such as Double-Blind RCTs vs. animal models), and SJR journal rankings—before researchers open a single PDF.',
  company: 'Consensus NLP, Inc. (Boston, Massachusetts, USA)',
  officialUrl: 'https://consensus.app/',
  status: 'Active, production-grade academic research engine featuring the Consensus Meter 2.0, Deep Reviews synthesis pipeline, AI Copilot chat, and Model Context Protocol (MCP) integrations.',
  targetUsers: [
    'PhD candidates, graduate researchers, and academic faculty framing literature reviews, verifying research gaps, and drafting grant proposals',
    'Clinicians, medical writers, and healthcare professionals evaluating clinical efficacy, drug interactions, and evidence-based treatment guidelines',
    'Biotech, pharmaceutical, and corporate R&D analysts requiring rapid evidence triangulation across peer-reviewed clinical trials',
    'Science journalists, policy analysts, and content strategists fact-checking scientific claims against primary literature rather than secondary media articles'
  ],
  problemSolved: 'General-purpose AI chatbots like standard ChatGPT or Claude regularly invent non-existent paper titles, author lists, and fake DOIs. Simultaneously, traditional academic databases like Google Scholar or PubMed present dense keyword lists requiring dozens of hours of manual abstract skimming without synthesizing consensus. Consensus solves both issues by extracting findings exclusively from indexed peer-reviewed papers, classifying study designs (RCTs, systematic reviews, observational), calculating statistical consensus, and synthesizing structured answers with verifiable parenthetical citations.',
  howItWorks: 'When a researcher enters a natural-language query or testable hypothesis (e.g., \'Does creatine improve cognitive function in sleep-deprived adults?\'), Consensus parses the semantic intent and queries its academic index of 200M+ papers. It ranks candidate studies based on relevance, citation velocity, and journal prestige (SCImago Journal Rank). Next, specialized fine-tuned language models analyze each abstract and full-text snippet to classify the study\'s stance (Yes / No / Mixed) and extract key metadata (methodology, sample size, outcome metrics). The Consensus Meter aggregates these stances into a visual percentage distribution, while the AI Copilot synthesizes a concise, citation-backed summary paragraph.',
  features: [
    {
      name: 'Consensus Meter 2.0',
      detail: 'Analyzes the top scientific papers answering a directional question and visualizes the degree of agreement across the literature (e.g., 78% Yes, 14% Possibly, 8% No), contextualized by study quality tiers.'
    },
    {
      name: 'Deep Reviews Generator',
      detail: 'An automated literature synthesis engine that aggregates dozens of relevant studies into a structured, cited research briefing categorized by thematic sub-findings and methodology types.'
    },
    {
      name: 'Study Snapshots & Metadata Extraction',
      detail: 'Automatically extracts study design badges (Meta-Analysis, Systematic Review, Double-Blind RCT, Cohort Study, Animal/In-Vitro), sample size (n), dosage regimens, and primary outcome metrics directly from papers.'
    },
    {
      name: 'Quality & Rigor Filtering',
      detail: 'Enables precise filtering by Human-only participants, publication date brackets, study methodologies, and top-tier journal quartiles (SJR Q1 to Q4).'
    },
    {
      name: 'Interactive Paper Copilot',
      detail: 'Enables interactive multi-turn dialogue with retrieved literature to probe methodologies, clarify statistical discrepancies, and extract comparative tables.'
    },
    {
      name: 'Direct Citation & Reference Export',
      detail: 'Generates one-click reference exports formatted in APA, MLA, Chicago, or Harvard styles, alongside downloadable BibTeX, RIS, and CSV datasets compatible with Zotero, Mendeley, and EndNote.'
    }
  ],
  aiAndModels: 'Consensus employs a hybrid retrieval-augmented generation (RAG) architecture combining dense vector embeddings over Semantic Scholar and Crossref databases with fine-tuned transformer classifiers and frontier LLMs (GPT-4o and specialized scientific summarization checkpoints). Crucially, the retrieval mechanism enforces strict grounding: the model is structurally restricted from outputting any statement that cannot be mapped to an exact, retrieved peer-reviewed abstract or full-text snippet.',
  inputsOutputs: 'Inputs: Natural-language research questions, hypothesis statements, keywords, or boolean academic search strings. Outputs: Quantified consensus meters, cited syntheses, structured study cards with extracted sample sizes/designs, downloadable BibTeX/RIS bibliographies, and structured CSV research matrices.',
  limits: [
    'Abstract-Heavy Extraction: While Consensus indexes full-text papers through open-access repositories (Unpaywall, PubMed Central), closed-access paywalled articles are often summarized solely based on their published abstracts.',
    'Risk of Nuance Flattening: Categorizing complex scientific debates into rigid \'Yes / No / Mixed\' categories can obscure critical nuances such as dosage thresholds, patient subgroup variations, or conflicting outcome definitions.',
    'Not a Replacement for Full-Text Methodology Audits: Consensus accelerates literature screening, but cannot verify whether an individual study suffered from selective outcome reporting, p-hacking, or unblinded observer bias.',
    'Limited Qualitative & Humanities Depth: The algorithmic stance classification works exceptionally well for empirical, biomedical, and quantitative social sciences, but is less effective for exploratory humanities or philosophical inquiries.'
  ],
  useCases: [
    'Introduction & Background Scoping: Rapidly surveying whether a scientific hypothesis is broadly accepted, actively debated, or disproven prior to drafting a paper or grant application.',
    'Clinical Evidence Verification: Checking peer-reviewed human RCT data on nutritional interventions, pharmacotherapy side effects, and clinical protocols.',
    'Systematic Literature Screening: Pre-filtering hundreds of candidate papers by sample size, human-only cohorts, and Q1 journal rankings to build literature review bibliographies.',
    'Journalistic Fact-Checking: Triangulating controversial health or technological claims against primary scientific consensus rather than secondary press releases.'
  ],
  poorFit: [
    'Deep Tabular PDF Extraction: When you need to upload 50 custom proprietary PDFs and extract bespoke multi-column variables into a spreadsheet (Elicit is significantly better suited for custom PDF extraction matrices).',
    'Smart Citation Context Analysis: When you need to analyze whether citing papers confirm or dispute a specific seminal paper\'s methodology over time (Scite.ai provides superior Smart Citation sentiment graphs).',
    'General Conversational Coding or Brainstorming: For non-academic queries, general web news, or creative writing, general-purpose LLMs or Perplexity are more appropriate.'
  ],
  pricing: [
    {
      name: 'Free Plan ($0/month)',
      detail: 'Unlimited basic academic paper searches, 10 Pro AI messages per month, up to 3 Deep Reviews per month, standard study design filters, and reference exports.'
    },
    {
      name: 'Pro Plan ($12/month billed annually or $20/month billed monthly)',
      detail: 'Unlimited Pro messages and AI Copilot queries, unlimited Consensus Meter and Study Snapshots, 15 Deep Reviews per month, advanced study filters (RCTs, human cohorts, Q1 journals), and 500 API & MCP uses per month.'
    },
    {
      name: 'Deep Plan ($45/month billed annually or $65/month billed monthly)',
      detail: 'Designed for intensive clinical and systematic reviewers: includes all Pro features, 200 Deep Reviews per month, and 2,000 API & MCP uses per month.'
    },
    {
      name: 'Academic & Student Discount (Up to 40% Off)',
      detail: 'Verified students, educators, and non-profit academic researchers with valid .edu credentials receive up to 40% off Pro and Deep annual subscriptions.'
    }
  ],
  integrations: [
    'Semantic Scholar Academic Graph (200M+ publication records)',
    'PubMed Central & Crossref metadata indexes',
    'Zotero, Mendeley, and EndNote reference manager exports (BibTeX & RIS)',
    'OpenAI ChatGPT Store (Official Consensus Custom GPT)',
    'Model Context Protocol (MCP) and REST API endpoints for agentic research workflows'
  ],
  developer: [
    'Consensus API providing programmatic endpoints for academic search and cited syntheses',
    'Model Context Protocol (MCP) server support allowing autonomous AI agents to query peer-reviewed scientific literature',
    'Structured JSON output support for literature retrieval pipelines'
  ],
  privacy: 'Consensus does not sell user research queries or uploaded personal data to third-party data brokers. Academic queries are logged to optimize search relevance and system performance. Enterprise and institutional tiers offer dedicated data privacy boundaries and SOC-2 Type II compliant infrastructure.',
  ownership: 'Users maintain full ownership over their synthesized literature reviews, notes, and search collections. Extracted paper metadata, abstracts, and DOIs remain subject to the respective publishers\' and open-access copyright licenses (e.g., CC-BY, Elsevier, Springer Nature, Wiley).',
  alternatives: [
    {
      name: 'Elicit',
      detail: 'The benchmark platform for systematic literature reviews and custom PDF tabular data extraction. Stronger for uploading your own papers and extracting custom columns, whereas Consensus is faster for hypothesis validation and consensus scoring.'
    },
    {
      name: 'Scite.ai',
      detail: 'Specializes in \'Smart Citations\', classifying citation contexts into supporting, mentioning, or contrasting evidence. Scite is ideal for citation tracking, while Consensus excels in initial question answering and consensus meters.'
    },
    {
      name: 'Semantic Scholar',
      detail: 'The underlying free, non-profit academic search engine provided by the Allen Institute for AI. Offers immense coverage and the Semantic Reader, but lacks automated generative consensus meters and conversational deep reviews.'
    },
    {
      name: 'Perplexity AI (Academic Focus)',
      detail: 'A general-purpose conversational answer engine with an Academic focus toggle. Great for broad multidisciplinary overviews, but lacks Consensus\'s granular study design classification (RCTs, sample size, SJR journal quartiles).'
    }
  ],
  strengths: [
    'Zero AI citation hallucination: Every single statement is tethered directly to indexed peer-reviewed DOIs',
    'Consensus Meter provides an instant, quantified pulse of scientific agreement across competing studies',
    'Granular methodological filters for study type (Double-Blind RCTs, Meta-Analyses) and sample sizes',
    'Modern, intuitive user experience that makes academic research accessible without Boolean query mastery',
    'Generous academic discount (up to 40% off) for graduate students and faculty'
  ],
  limitations: [
    'Abstract bias: Articles behind commercial paywalls are evaluated primarily on abstracts rather than full text',
    'Consensus Meter can risk over-simplifying nuanced medical or sociological debates into binary buckets',
    'Lacks granular multi-column tabular data extraction for user-uploaded custom PDFs compared to Elicit',
    'Free tier is capped at 10 Pro AI messages per month, necessitating a paid subscription for heavy researchers'
  ],
  workflow: [
    'Input: Formulate a clear, testable directional question (e.g., \'Does intermittent fasting reduce systemic inflammation in adults?\') or an academic keyword string.',
    'Search & Filter: Apply filters for \'Human Studies\', \'Randomized Controlled Trials\', and \'SJR Q1 Journals\' to isolate high-rigor evidence.',
    'Consensus Assessment: Inspect the Consensus Meter to gauge the literature balance (e.g., 82% Yes, 11% Possibly, 7% No) and study quality markers.',
    'Deep Review Synthesis: Run the Deep Review tool to generate a thematic multi-study summary with inline parenthetical DOI citations.',
    'Quality Gate: Audit the primary cited DOIs, verify full-text methodologies for sample size and confounding variables, and export the bibliography into Zotero via BibTeX.'
  ],
  takeaway: 'Consensus is an indispensable evidence-synthesis platform for researchers, students, and clinicians who need rapid, hallucination-free scientific validation. While it does not replace deep reading of full-text methodologies, its Consensus Meter and study quality badges save countless hours during literature scoping and grant preparation.',
  sources: [
    {
      title: 'Consensus Official Product Platform & Research Engine',
      publisher: 'Consensus NLP, Inc.',
      url: 'https://consensus.app/',
      type: 'official'
    },
    {
      title: 'Consensus Pricing, Plans & Academic Access Guidelines',
      publisher: 'Consensus NLP, Inc.',
      url: 'https://consensus.app/pricing',
      type: 'official'
    },
    {
      title: 'Consensus Research Workflows & Evaluation Guide',
      publisher: 'Researcher.life / Academic Subreddit Consensus Review',
      url: 'https://researcher.life/',
      type: 'independent'
    }
  ]
};
