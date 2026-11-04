import type { ToolAnalysis } from './types.ts';

export const sciteAnalysis: ToolAnalysis = {
  lastVerified: '2026-11-04',
  summary:
    'Scite (scite.ai) is an academic AI platform and next-generation citation index engineered to evaluate the reliability of scientific research through Smart Citations. Rather than treating citations as superficial tally counts, Scite uses deep-learning language models to analyze the citation context across more than 1.3 billion citation statements extracted from over 187 million scholarly articles. It classifies each citation into three transparent categories: supporting (providing corroborating evidence or replication), mentioning (referencing methodology or background), or contrasting (disputing findings, reporting failed replications, or challenging interpretations). Paired with Scite Assistant—a conversational literature review engine grounded strictly in peer-reviewed papers—and Reference Check, which scans draft manuscripts for retracted, disputed, or heavily questioned citations prior to journal submission, Scite provides researchers, PhD candidates, clinicians, and R&D teams with forensic clarity on how the scientific community truly evaluates published claims.',
  company: 'Scite LLC / Research Solutions, Inc. (Brooklyn, New York)',
  officialUrl: 'https://scite.ai/',
  status:
    'Active; commercial scholarly intelligence platform and citation analysis engine indexing 1.3+ billion citation statements, offering conversational literature review, pre-submission reference checking, and reference manager integrations.',
  targetUsers: [
    'Academic researchers and PhD candidates conducting systematic literature reviews who must verify whether seminal papers have been replicated or disputed',
    'Clinicians and medical writers evaluating drug efficacy and medical protocols who require verified, counter-evidence-aware citation context',
    'Graduate students and thesis writers who want to check their bibliography for retracted papers and errata before submitting to peer-reviewed journals',
    'Biotech and pharmaceutical R&D scientists evaluating external patents and published assays for reproducibility and independent validation',
    'Peer reviewers and journal editors auditing submitted manuscripts to ensure references are balanced and do not cite fraudulent or retracted work'
  ],
  problemSolved:
    'Eliminates the deceptive superficiality of raw citation counts and the dangerous hallucinations of generic AI chatbots in scholarly research. In traditional academic indexes like Google Scholar or Web of Science, a paper with 500 citations appears authoritative, even if 200 of those citations point out methodological flaws, failed clinical replications, or retracted data. Furthermore, generic consumer LLMs frequently invent nonexistent citations or misattribute findings. Scite solves both problems: its Smart Citations expose the exact sentence and paragraph where a paper was cited, highlighting whether peers supported or contradicted the findings. Its AI Assistant responds to natural-language research queries with direct evidence syntheses grounded strictly in indexed, peer-reviewed DOIs with full sentence-level verification.',
  howItWorks:
    'Scite partners with leading academic publishers (including Wiley, Springer Nature, IEEE, Sage, and Cambridge University Press) and ingests open-access repositories (PubMed Central, arXiv, bioRxiv) to ingest full-text scientific PDFs. An automated ingestion pipeline converts PDF layouts into structured text, identifies in-text citation markers, and isolates the surrounding citation statement (the sentence containing the reference plus immediate context). Proprietary transformer-based natural language processing models classify the author sentiment toward the cited paper as Supporting, Mentioning, or Contrasting, while recording the exact section (Introduction, Methods, Results, Discussion). When users query Scite Assistant or run Reference Check on a draft document, Scite conducts semantic vector retrieval against these verified citation statements, synthesizing evidence-backed answers with clickable links to the original full texts.',
  features: [
    {
      name: 'Smart Citations (Supporting, Mentioning, Contrasting)',
      detail:
        'Contextual citation analysis that categorizes over 1.3 billion citation statements, allowing researchers to see at a glance whether citing authors corroborated, mentioned, or disputed a paper findings.'
    },
    {
      name: 'Scite Assistant (Evidence-Grounded Conversational AI)',
      detail:
        'Conversational literature review interface that answers complex research questions strictly using indexed scholarly literature, delivering synthetic summaries with direct Smart Citation links and zero hallucinated references.'
    },
    {
      name: 'Reference Check for Draft Manuscripts',
      detail:
        'Automated pre-submission audit tool that accepts PDF or Word manuscript uploads, scans every listed reference against retraction databases, and flags disputed or retracted citations before journal submission.'
    },
    {
      name: 'Citation Statement Full-Text Search',
      detail:
        'Specialized search engine allowing researchers to query across hundreds of millions of in-text citation sentences to uncover how specific methodologies, assays, or concepts are discussed across disciplines.'
    },
    {
      name: 'Browser Extensions & Reference Manager Sync',
      detail:
        'Chrome, Firefox, and Edge extensions that overlay Smart Citation badges directly onto Google Scholar, PubMed, arXiv, and publisher websites, alongside bidirectional sync with Zotero and Mendeley libraries.'
    },
    {
      name: 'Journal, Author, and Institution Dashboards',
      detail:
        'Aggregated credibility metrics and Scite Index scores that evaluate journals and research institutions by their ratio of confirmed versus disputed publications over time.'
    }
  ],
  aiAndModels:
    'Employs customized deep transformer models (fine-tuned on annotated scientific sentence corpora) for in-text citation extraction and three-way sentiment classification (Supporting, Mentioning, Contrasting), complemented by state-of-the-art retrieval-augmented generation (RAG) LLMs for conversational synthesis within Scite Assistant.',
  inputsOutputs:
    'Inputs: Research questions, DOIs, PubMed IDs, keyword queries, PDF/Word manuscript files, and synchronized reference manager collections. Outputs: Contextual citation excerpts with section markers, supporting/contrasting badge breakdowns, structured literature synthesis answers with hyperlinked DOIs, CSV/BibTeX export metadata, and PDF Reference Check audit reports.',
  limits: [
    'Publisher Paywall Restrictions: While Scite indexes full texts from partner publishers and open-access journals, papers from non-partner subscription publishers may only display abstract or citation-snippet metadata.',
    'Nuance in Academic Sentiment Classification: NLP models may occasionally misinterpret polite scholarly disagreements, nuanced caveats, or ironic citations as simple mentions or false contrasts.',
    'Not an Automated Statistical Extractor: Unlike Elicit, Scite does not extract customized clinical trial matrices (such as sample size numbers, dosage mg, or p-value tables) into spreadsheet columns.',
    'Individual Subscription Barrier: At $20/month, continuous access can be prohibitive for independent students whose university libraries have not procured an institutional site license.'
  ],
  useCases: [
    'Systematic Literature Reviews: Rapidly screening seminal papers in biomedical, psychological, and engineering disciplines to identify contested findings and consensus shifts.',
    'Pre-Submission Bibliography Auditing: Running draft thesis or journal submissions through Reference Check to eliminate accidental citations of retracted papers or unverified preprints.',
    'Methodology Validation: Searching citation statements to evaluate whether an experimental protocol or laboratory reagent has yielded reproducible results across external labs.',
    'Grant and Patent Defense: Verifying the scientific foundation of proposed commercial technologies by analyzing independent third-party replication attempts.',
    'Rapid Scientific Fact-Checking: Utilizing Scite Assistant to answer clinical or technical inquiries with verifiable peer-reviewed paper excerpts rather than unverified search engine results.'
  ],
  poorFit: [
    'Researchers needing automated extraction of quantitative data points (e.g. sample sizes, p-values, odds ratios) into custom tabular spreadsheets (Elicit is significantly superior for quantitative matrix extraction)',
    'High-level conversational search where general web knowledge or consumer trends are required (Perplexity AI or ChatGPT are better suited for non-scholarly web queries)',
    'Students seeking free, permanent unlimited literature tools without institutional billing (Semantic Scholar or Google Scholar provide free basic citation search)',
    'Visual mapping of bibliographic co-citation networks and seed paper clusters (Connected Papers or Litmaps provide superior interactive visual graphs)'
  ],
  pricing: [
    {
      name: '7-Day Full Access Trial ($0)',
      detail:
        'Complete seven-day trial offering full access to Scite Assistant, unlimited Smart Citation views, Reference Check manuscript audits, and browser extension integrations.'
    },
    {
      name: 'Free Basic Plan ($0/month)',
      detail:
        'Permanent free account tier providing basic keyword searches, viewing limited citation snippets, accessing retraction and errata notices, and exploring public author profiles without generative AI capabilities.'
    },
    {
      name: 'Individual Monthly ($20/month billed monthly)',
      detail:
        'Standard individual researcher subscription including unlimited Scite Assistant queries, full access to 1.3B+ Smart Citation statements, unlimited Reference Check uploads, Zotero/Mendeley sync, and CSV data export.'
    },
    {
      name: 'Individual Annual ($12/month billed annually at $144/year)',
      detail:
        'Discounted annual tier saving 40% compared to monthly billing; includes all individual features, priority manuscript processing, and continuous email citation alert feeds.'
    },
    {
      name: 'Institutional & Corporate Enterprise (Custom Quote via Research Solutions)',
      detail:
        'Campus-wide IP authentication, SAML/SSO integration, Reprints Desk document delivery integration, centralized administrative usage analytics, and dedicated API access for university libraries and corporate R&D.'
    }
  ],
  integrations: [
    'Zotero: Bidirectional plugin adding Smart Citation counts and retraction status badges directly into desktop reference libraries',
    'Mendeley: Reference manager synchronization for tracking citation sentiment across personal collections',
    'Google Scholar, PubMed & arXiv: Browser extension overlays that display Smart Citation badges directly on search results',
    'Major Publisher Platforms: Integrations across Wiley, Sage, Cambridge Core, and Europe PMC pages displaying embedded Scite badges',
    'REST API: Programmatic endpoints for querying Smart Citation tallies and citation statements by DOI'
  ],
  developer: [
    'Scite REST API for querying paper metadata, citation tallies (supporting, mentioning, contrasting), and citation statements by DOI',
    'JSON-formatted citation response objects suitable for custom bibliometric pipelines and academic search interfaces',
    'Batch DOI lookup endpoints for institutional repository integration and research impact assessment'
  ],
  privacy:
    'Scite processes uploaded manuscripts and user queries under strict SOC 2 compliance standards and GDPR data protection regulations. Uploaded draft manuscripts for Reference Check are analyzed ephemerally in secure sandboxes and are never used to train public commercial AI models or made publicly accessible to third parties.',
  ownership:
    'Users retain 100% intellectual property ownership of all uploaded manuscripts, bibliographies, and search queries. Exported citation reports and BibTeX files can be freely distributed and incorporated into commercial or academic publications.',
  alternatives: [
    {
      name: 'Elicit ($12 - $49 / month)',
      detail:
        'The premier automated systematic review platform. Excels at extracting structured data points (sample size, intervention, outcomes) into customizable comparison matrices from uploaded PDFs.'
    },
    {
      name: 'Consensus ($9 - $20 / month)',
      detail:
        'Evidence-synthesis search engine featuring the automated Consensus Meter, summarizing scientific agreement into Yes/No/Mixed percentages and extracting Study Snapshots across 200M+ papers.'
    },
    {
      name: 'Semantic Scholar (Free by Allen Institute for AI)',
      detail:
        'Comprehensive free academic search engine indexing 210M+ papers with AI-generated TLDR summaries and Highly Influential Citation tracking, though lacking sentence-level sentiment classification.'
    },
    {
      name: 'Connected Papers ($0 - $5 / month)',
      detail:
        'Visual citation graph tool that maps bibliometric co-citation relationships to help researchers discover adjacent and foundational papers visually.'
    }
  ],
  strengths: [
    'Transparent Citation Sentiment: Breaks open the black box of citation counts by classifying 1.3B+ citation statements into supporting, mentioning, and contrasting evidence',
    'Pre-Submission Reference Check: Protects academic reputations by identifying retracted papers, errata, and highly contested references before manuscript submission',
    'Grounded Scite Assistant: Conversational AI syntheses anchored strictly in indexed academic literature with verifiable DOI source links and zero hallucinated citations',
    'Broad Publisher Partnerships: Direct full-text indexing agreements with Wiley, Springer Nature, IEEE, and Sage ensure high-quality sentence-level context extraction',
    'Deep Reference Manager Integration: Native Zotero and browser extension overlays embed Smart Citations directly into existing daily research workflows'
  ],
  limitations: [
    'Subscription Paywall for Full Utility: Essential features like Scite Assistant and unlimited Smart Citation views require a $20/month subscription after the 7-day trial',
    'Publisher Gaps in Non-Partner Paywalled Literature: Papers from publishers without direct indexing agreements are restricted to open-access snippets or abstract metadata',
    'Nuance Misclassification in NLP Sentiment: Complex academic hedging, polite critique, and methodological caveats can occasionally trigger false contrasting or false mentioning classifications',
    'Absence of Quantitative Table Extraction: Does not automatically parse study cohorts, p-values, or clinical dosage columns into spreadsheet matrices like Elicit',
    'Occasional PDF Parsing Glitches: Complex multi-column journal layouts or scanned legacy PDFs may result in fragmented citation sentence extraction'
  ],
  workflow: [
    '1. Research Question Formulation & Scite Assistant Inquiry: Input: Specific scientific query (e.g. Does intermittent fasting improve insulin sensitivity in non-diabetic adults?). Action: Submit the query in Scite Assistant. The platform searches across indexed peer-reviewed literature, evaluates consensus, and generates an evidence-backed summary with explicit Smart Citation indicators. Output: Structured synthesis with direct DOI links. Quality Gate: Verify that cited papers are from reputable peer-reviewed journals.',
    '2. Smart Citation Deep-Dive & Sentiment Verification: Input: Key seminal paper identified in literature review. Action: Open the paper report on Scite. Review the Smart Citation badge distribution (e.g., 85 supporting, 120 mentioning, 14 contrasting). Filter by Contrasting to examine why peer researchers disputed the original findings. Output: Clear understanding of experimental replicability and methodological critiques. Quality Gate: Read the full contrasting citation sentences to evaluate whether objections apply to your research context.',
    '3. Citation Statement Full-Text Search: Input: Experimental assay or specific reagent protocol. Action: Search Scite citation statements for mentions of the specific technique. Review how external laboratories adapted or modified the protocol in their Methods and Results sections. Output: Refined laboratory protocol backed by peer replication evidence. Quality Gate: Confirm protocol parameters across multiple independent research groups.',
    '4. Pre-Submission Manuscript Reference Check: Input: Completed manuscript draft (PDF or Word DOCX) ready for journal submission. Action: Upload file to Scite Reference Check. The automated auditor scans all cited references against global retraction databases and Scite index. Output: Diagnostic report flagging any retracted articles, expressions of concern, or heavily contested claims. Quality Gate: Replace or address any flagged citations before final submission to peer-reviewed journals.',
    '5. Reference Library Sync & Continuous Citation Alerts: Input: Curated Zotero or Mendeley collection for ongoing thesis or grant project. Action: Activate Scite Zotero plugin and configure DOI citation alerts. Scite automatically updates badge tallies and sends notifications whenever new supporting or contrasting papers are published. Output: Living, continuously audited research bibliography. Quality Gate: Review monthly alert digests for critical updates in your research domain.'
  ],
  takeaway:
    'Scite in 2026 is an essential scholarly intelligence tool for academic researchers, clinicians, and graduate students who refuse to take citation counts at face value. By pioneering Smart Citations and classifying over 1.3 billion citation statements into supporting, mentioning, and contrasting evidence, Scite provides an unprecedented forensic lens into scientific consensus and replication. While Elicit remains the superior choice for systematic data extraction into custom matrices and Consensus provides faster high-level percentage consensus meters, Scite is unmatched in citation tracking, methodology validation, and pre-submission retraction checking. For any serious researcher preparing manuscripts for peer-reviewed publication or evaluating controversial scientific claims, Scite is well worth its $20/month investment.',
  sources: [
    {
      title: 'Scite.ai Platform Overview, Smart Citations & Methodology',
      publisher: 'Scite Official Documentation',
      url: 'https://scite.ai/',
      type: 'official'
    },
    {
      title: 'Scite Assistant & Reference Check Pre-Submission Audit Guide',
      publisher: 'Scite Official Product Documentation',
      url: 'https://scite.ai/reference-check',
      type: 'official'
    },
    {
      title: 'Scite Pricing, Subscription Tiers & Institutional Access (2026)',
      publisher: 'Scite Official Pricing',
      url: 'https://scite.ai/pricing',
      type: 'official'
    },
    {
      title: 'Academic Literature Review & Systematic Screening with Elicit, Consensus, and Scite',
      publisher: 'NewAITools Deep Research Guide',
      url: 'https://www.newaitools.online/blog/ai-deep-research-source-first-workflow',
      type: 'independent'
    },
    {
      title: 'Best AI Scientific & Academic Tools Compared (2026)',
      publisher: 'NewAITools Directory Category Reviews',
      url: 'https://www.newaitools.online/category/scientific-and-academic',
      type: 'independent'
    },
    {
      title: 'Consensus AI Deep Analysis: Consensus Meter, Study Snapshots & Limits',
      publisher: 'NewAITools Tool Analysis',
      url: 'https://www.newaitools.online/tool/consensus',
      type: 'independent'
    },
    {
      title: 'Elicit Comprehensive Review: Systematic Reviews & Data Extraction',
      publisher: 'NewAITools Tool Analysis',
      url: 'https://www.newaitools.online/tool/elicit',
      type: 'independent'
    }
  ]
};
