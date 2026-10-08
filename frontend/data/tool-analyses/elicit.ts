import type { ToolAnalysis } from './types.ts';

export const elicitAnalysis: ToolAnalysis = {
  "lastVerified": "2026-10-08",
  "summary": "Elicit is the gold-standard AI research assistant and automated systematic literature review platform, engineered specifically to eliminate hundreds of hours of manual paper screening, evidence synthesis, and tabular data extraction for academic researchers, PhD candidates, clinicians, and corporate R&D scientists. Built atop a corpus of over 138 million open-access academic publications indexed through Semantic Scholar and PubMed, Elicit transforms natural-language research questions into structured, multi-dimensional evidence matrices. Rather than hallucinating or summarizing generic web text like standard consumer LLMs, Elicit grounds every single output in peer-reviewed scientific literature, extracting exact study methodologies, participant sample sizes, dosages, primary outcomes, and critical statistical limitations directly from full texts and abstracts. With native support for custom PDF batch ingestion, multi-column data extraction routines, and Zotero/BibTeX export pipelines, Elicit bridges the gap between raw scientific papers and publication-ready evidence synthesis.",
  "company": "Elicit Research, Inc. (formerly Ought)",
  "officialUrl": "https://elicit.com/",
  "status": "Active, high-growth academic AI research engine and literature synthesis platform featuring a web-based research studio, custom PDF extraction engine, automated Research Reports, and reference manager integrations.",
  "targetUsers": [
    "PhD candidates, graduate scholars, and postdoctoral fellows conducting comprehensive literature reviews, dissertation scoping, and qualifying exam syntheses",
    "Clinical researchers, epidemiologists, and medical professionals screening trials according to PICOS (Population, Intervention, Comparison, Outcome, Study Design) frameworks",
    "Meta-analysts and systematic review authors seeking rapid title/abstract screening, inclusion/exclusion filtering, and tabular extraction across dozens of studies",
    "Corporate R&D strategists, pharmaceutical analysts, and policy researchers requiring grounded empirical evidence rather than speculative AI chatbot summaries",
    "Undergraduate and master's students seeking credible academic citations, methodology breakdowns, and paper discovery beyond traditional keyword queries"
  ],
  "problemSolved": "Traditional academic literature reviews are notoriously grueling, fragmented, and time-intensive. Scholars typically spend weeks bouncing between Google Scholar, PubMed, and Web of Science, reading dozens of dense 30-page PDFs just to determine whether a study used a randomized controlled trial, how many human participants were enrolled, or what dose of a compound was administered. Generic chatbots like ChatGPT frequently invent phantom citations with fabricated DOIs (hallucinations) or strip away crucial methodological nuance. Elicit eliminates this friction by automating structural evidence extraction: researchers enter a research question or upload their own collection of PDFs, and Elicit automatically populates a customizable comparison matrix with verified data columns (e.g. population demographics, intervention specifics, main findings, funding sources, and author-acknowledged limitations), complete with clickable in-line citations linked directly to exact paper snippets.",
  "howItWorks": "Elicit architecture combines semantic embedding retrieval over the Semantic Scholar academic graph with high-reasoning language models fine-tuned specifically for scientific parsing and information extraction. When a user enters a query, Elicit decomposes the prompt into semantic sub-queries to retrieve the most methodologically relevant papers rather than mere keyword matches. For each paper, specialized extraction models read the abstract and accessible full-text sections, pinpointing specific experimental variables (e.g. \"What was the sample size?\" or \"What was the control group?\"). Users can upload their own proprietary or paywalled PDFs (up to 100+ papers per batch), and Elicit executes multi-column extraction across the entire private corpus. Research Reports and Research Agent modes take this further by iteratively searching, cross-referencing citations, identifying conflicting evidence, and drafting continuous narrative literature summaries grounded in peer-reviewed sources.",
  "features": [
    {
      "name": "Semantic Paper Discovery & Semantic Graph Search",
      "detail": "Searches across 138M+ academic publications using natural language understanding rather than rigid Boolean syntax, finding conceptually aligned papers even when authors use different terminology."
    },
    {
      "name": "Customizable Multi-Column Evidence Matrix",
      "detail": "Extracts critical structural parameters into a side-by-side comparison table, including sample size, study design, dosage, participant demographics, primary findings, and potential limitations."
    },
    {
      "name": "Direct Full-Text PDF Upload & Private Extraction",
      "detail": "Ingest your own PDF files (from institutional access, internal laboratory data, or preprints) to extract structured columns and synthesize findings across private collections."
    },
    {
      "name": "Autonomous Research Reports & Research Agent",
      "detail": "Executes multi-step autonomous research cycles: decomposes complex scientific inquiries, queries multiple databases, synthesizes contradictory findings, and compiles structured evidence memos with in-line DOIs."
    },
    {
      "name": "Systematic Review Screening & Inclusion Workflows",
      "detail": "Screen and filter thousands of retrieved papers against custom inclusion and exclusion criteria, dramatically accelerating the early stages of systematic literature reviews."
    },
    {
      "name": "Zero-Hallucination Grounding with In-Text Snippets",
      "detail": "Every extracted cell and summary claim is paired with a direct modal quote and page reference from the original paper, enabling one-click factual verification."
    },
    {
      "name": "Custom Column Creation via Natural Language Prompts",
      "detail": "Define bespoke extraction prompts (e.g. \"What animal model was used?\", \"Did authors control for socioeconomic status?\", \"What was the statistical p-value?\") applied uniformly across all papers."
    },
    {
      "name": "Reference Manager Integration (Zotero, BibTeX, RIS)",
      "detail": "Seamlessly export synthesis tables, extracted metadata, and vetted citation libraries directly into Zotero, Mendeley, EndNote, CSV spreadsheets, and LaTeX BibTeX files."
    },
    {
      "name": "Figure & Graph Extraction (Scale & Enterprise)",
      "detail": "Parses complex multi-panel scientific charts, plots, and figures within full-text papers to summarize quantitative trendlines and statistical distributions."
    },
    {
      "name": "Team Workspaces & Shared Project Libraries",
      "detail": "Collaborate with co-authors, laboratory teams, and research groups in pooled workspaces with shared extraction templates, shared PDF libraries, and consolidated credit usage."
    }
  ],
  "aiAndModels": "Elicit utilizes a hybrid model architecture combining dense vector embeddings for semantic literature retrieval with specialized, fine-tuned language models (including optimized variants of Claude and GPT-4 tailored for scientific reasoning and named-entity extraction). The retrieval pipeline queries Semantic Scholar API and open-access repositories (PubMed Central, arXiv, bioRxiv, ChemRxiv), applying reranking algorithms trained to prioritize empirical rigor, high-citation relevance, and publication recency. Unlike general-purpose web LLMs, Elicit models are constrained by strict grounded-generation protocols: if a requested variable is absent from the paper text, the model returns \"Not specified\" or \"Unknown\" rather than speculating.",
  "inputsOutputs": "Inputs: Natural-language research queries (e.g. \"Effects of intermittent fasting on insulin resistance in type 2 diabetic adults\"), specific DOI numbers, paper URLs, or batch PDF uploads (up to 20 to 100+ files per session depending on plan). Outputs: Dynamic interactive evidence tables, extracted structured data matrices exportable as CSV/RIS/BibTeX, structured markdown Research Reports with hyperlinked in-line DOIs, and synthesized paragraph answers with source citations.",
  "limits": [
    "Paywalled Full-Text Blindspot: While Elicit searches 138M+ papers via open metadata and abstracts, it cannot automatically bypass institutional paywalls (Elsevier, IEEE, Springer Nature, Wiley). For paywalled studies without open preprints, extraction is restricted to the abstract unless the user manually uploads the institutional PDF",
    "Credit & Monthly Quota Burn Rate: Multi-column extraction across large batches of papers consumes usage quota rapidly; running complex 15-column extractions on 50 uploaded PDFs can quickly exhaust entry-level plan limits, requiring careful credit budgeting",
    "Nuance Stripping & Context Misinterpretation: Although Elicit does not hallucinate false papers, its AI extraction can occasionally pull secondary findings out of context (e.g. highlighting a subgroup correlation as the overall primary endpoint or missing caveats noted in the discussion section)",
    "Not a Certified Replacement for PRISMA/Cochrane Screening: While exceptional for scoping and preliminary screening, Elicit does not replace dedicated dual-blinded systematic review platforms (like Covidence or Rayyan) required for formal Cochrane-standard clinical trial registration",
    "Disciplinary Skew toward Biomedical & Empirical Sciences: Elicit extraction excels in quantitative and experimental fields (medicine, psychology, economics, biology), but struggles with interpretive humanities, speculative philosophy, or archival historical analysis where variables cannot be neatly tabularized",
    "Limited Graph and Image Extraction on Lower Tiers: Automated extraction of data directly from charts, survival curves, and statistical forest plots is restricted to high-tier Scale ($169/mo) and Enterprise plans"
  ],
  "useCases": [
    "Academic Literature Scoping: Rapidly mapping out the current empirical landscape for grant proposals, thesis introductions, and peer-reviewed journal submissions in hours instead of weeks",
    "Clinical PICOS Extraction: Structuring biomedical trial literature into standardized columns (Patient Cohort, Intervention Protocol, Comparison Control, Primary Outcome, Adverse Effects)",
    "Dissertation Methodology Auditing: Comparing methodologies across 30+ papers to determine standard sample sizes, assay concentrations, or psychometric survey instruments utilized in the field",
    "Corporate R&D Landscape Intelligence: Auditing competitor patent literature, clinical trial disclosures, and emerging chemical or software paradigms for product development teams",
    "Evidence-Based Policy & Healthcare Briefs: Synthesizing real-world clinical consensus on controversial treatments or nutritional interventions with cited statistical confidence"
  ],
  "poorFit": [
    "Pure humanities and literary criticism scholars analyzing figurative poetry, historical rhetoric, or qualitative philosophy that resists tabular variable decomposition",
    "Undergraduate students seeking an essay writer to draft full essays from scratch (Elicit is an evidence extraction and research tool, not a content generation ghostwriter)",
    "Researchers conducting formal Cochrane-standard meta-analyses who require strict dual-blinded screening, Cohen's Kappa inter-rater reliability calculations, and PRISMA 2020 protocol audits without manual checks",
    "Casual web searchers looking for broad consumer news, recipe ideas, or celebrity gossip (better served by Google, Perplexity, or standard ChatGPT)"
  ],
  "pricing": [
    {
      "name": "Basic Plan (Free - $0/month)",
      "detail": "$0/month. Unlimited searches across 138M+ papers, unlimited paper chat for open-access papers, up to 2 custom columns per table, 2 Research Reports per month, and reference manager integration."
    },
    {
      "name": "Plus Plan ($12/month or $11/month billed annually [$132/year])",
      "detail": "$12/mo ($11/mo billed annually). Designed for graduate students and independent scholars. Includes up to 5 custom columns per extraction table, ~50 PDF full-text uploads per month, higher accuracy synthesis mode, and exports to CSV, RIS, and BibTeX."
    },
    {
      "name": "Pro Plan ($75/month or $49/month billed annually [$588/year])",
      "detail": "$75/mo ($49/mo billed annually; academic discounts often ~$39/mo). The standard for active researchers and systematic review authors. Screen up to 5,000 papers per project, extract up to 20 custom columns simultaneously, up to 200 PDF uploads per month, priority customer support, high-accuracy synthesis routines, and automated Research Reports (up to ~144/year)."
    },
    {
      "name": "Scale Plan ($169/user/month billed annually [$2,028/year])",
      "detail": "$169/user/mo billed annually. Designed for research labs and biotech teams. Includes 5x Pro usage quotas, up to 30 custom columns per table, automated data extraction directly from paper figures and charts, shared team PDF libraries, pooled organization usage, and an administrative console."
    },
    {
      "name": "Enterprise Plan (Custom Institutional Quote)",
      "detail": "Custom institutional and enterprise pricing. Screen 40,000+ papers, extract up to 40 columns per table, custom PRISMA-compliant reporting, Single Sign-On (SSO/SAML), custom data connectors, HIPAA/FERPA compliant zero-retention agreements, and dedicated customer success management."
    }
  ],
  "integrations": [
    "Zotero Integration (direct two-way collection syncing and automated library export)",
    "BibTeX & LaTeX (.bib citation exports for Overleaf and scientific typesetting)",
    "Mendeley & EndNote (.ris format compatibility for reference management)",
    "CSV & Excel (.csv tabular data export for statistical analysis in R, Python, and SPSS)",
    "Semantic Scholar Graph (real-time indexing of 138M+ open-access preprints and journals)",
    "PubMed & PubMed Central (native biomedical paper retrieval and MeSH term linking)"
  ],
  "developer": [
    "Semantic graph query endpoints for automated academic literature discovery",
    "Custom extraction pipelines for batch PDF processing in institutional enterprise environments",
    "REST API access available on custom Enterprise agreements for automated R&D pipelines",
    "Webhook notifications for literature tracking and new paper alert triggers"
  ],
  "privacy": "Elicit adheres to strict scientific research privacy standards. User uploaded PDFs and proprietary laboratory data are processed over TLS 1.3 encrypted connections and stored using AES-256 encryption. User research queries and uploaded documents on paid tiers (Plus, Pro, Scale, Enterprise) are never sold, shared publicly, or used to train public foundational AI models. Enterprise contracts feature explicit Zero-Data-Retention (ZDR) clauses and SOC 2 Type II compliance guarantees.",
  "ownership": "Users maintain 100% full intellectual property ownership over all synthesized reports, extracted data tables, and custom analysis outputs generated through Elicit. Extracted CSV spreadsheets and markdown Research Reports can be published, cited in academic dissertations, included in grant proposals, or deployed in commercial R&D documentation without licensing restrictions.",
  "alternatives": [
    {
      "name": "Consensus",
      "detail": "An AI search engine for scientific research known for its \"Consensus Meter\", which categorizes whether papers agree, disagree, or report mixed findings on specific questions. While faster for quick yes/no empirical consensus, it offers less granular multi-column tabular extraction and fewer custom PDF batch capabilities than Elicit. Freemium; premium from $8.99/month."
    },
    {
      "name": "Scite.ai",
      "detail": "Focuses on \"Smart Citations\", showing how a paper was cited by subsequent literature and whether citing authors supported, disputed, or merely mentioned the findings. Unbeatable for checking whether a study has been debunked or replicated, but less focused on automated multi-column evidence table generation. Subscriptions from $15 to $20/month."
    },
    {
      "name": "Semantic Scholar",
      "detail": "The Allen Institute for AI's free academic search engine that provides the underlying database for Elicit. Offers AI-generated TLDR summaries, citation graphs, and influence metrics completely free, but lacks Elicit's customizable multi-column extraction tables, custom PDF uploads, and autonomous research reports."
    },
    {
      "name": "Google NotebookLM",
      "detail": "Google's personalized AI research notebook grounded in your own uploaded sources (up to 50 documents, PDFs, or web links). Exceptional for conversational question-answering, podcast audio overviews, and synthesizing personal notes, but lacks a global 138M+ academic database search and structured comparison matrix generation. Free."
    }
  ],
  "strengths": [
    "Unrivaled Structured Extraction: Converts messy scientific literature into pristine, multi-variable comparison tables with custom user-defined prompts",
    "Verifiable Zero-Hallucination Citations: Every single extracted value and summary sentence is directly hyperlinked to a verifiable quote modal from the original paper",
    "Private PDF Batch Processing: Seamlessly extract data from your own paywalled institutional PDFs or unpublished laboratory manuscripts without exposing data publicly",
    "Substantial Time Savings: Reduces the time required for preliminary literature reviews, scoping searches, and PICOS table construction from weeks to an afternoon",
    "Native Zotero and BibTeX Export: Effortlessly fits into existing academic writing pipelines (Overleaf, LaTeX, Word) without requiring manual re-entry"
  ],
  "limitations": [
    "Abstract-Only Processing on Paywalled Literature: Cannot read full text behind publisher paywalls unless the user provides the PDF, occasionally leading to incomplete extraction columns",
    "Aggressive Credit & Quota Burn: Running extensive multi-column extractions across large paper sets exhausts monthly allocations rapidly on entry tiers",
    "Occasional Context Oversimplification: High-level summaries may miss subtle experimental qualifications, such as secondary endpoint status or atypical cohort demographics",
    "Not Formally Validated for Cochrane Reviews: Lacks the dual-blind screening and inter-rater statistical auditing tools required by formal medical systematic review protocols"
  ],
  "workflow": [
    "1. Research Question Formulation & Semantic Retrieval: Input: A clearly scoped empirical research inquiry (e.g. \"What is the efficacy of cognitive behavioral therapy for insomnia in elderly adults with mild cognitive impairment?\"). Action: Enter the prompt into Elicit Search mode. Elicit decomposes the query, searches 138M+ papers via Semantic Scholar and PubMed, and retrieves the top 30-50 most methodologically aligned publications. Output: A ranked list of empirical papers with publication dates, journal names, citation counts, and one-line TLDR summaries. Quality Gate: Review the top 10 titles to confirm that the retrieved studies match the target clinical population and intervention parameters.",
    "2. Methodological Screening & PICOS Column Customization: Input: The initial corpus of candidate papers. Action: Add structured extraction columns to the comparison table: \"Study Design\", \"Sample Size\", \"Participant Age Range\", \"Intervention Duration\", \"Primary Outcome Metric\", and \"Reported Limitations\". Elicit processes the papers and populates each column with precise data extracted directly from the text. Output: A comprehensive, multi-variable evidence matrix displaying side-by-side study comparisons. Quality Gate: Click into 3-4 extracted cells across different papers to inspect the highlighted quote modal, verifying that extracted numbers match the paper's primary trial data rather than background citations.",
    "3. Private PDF Batch Ingestion for Paywalled Studies: Input: High-impact paywalled papers downloaded through institutional library access (e.g. ScienceDirect, Springer, Wiley) that only displayed abstract data during initial retrieval. Action: Click \"Upload PDFs\" in Elicit, drag and drop the full-text PDF files into the active project, and trigger column extraction across the uploaded batch. Output: Full-text extraction updating previously empty columns with detailed dosage regimens, control group details, and statistical significance values. Quality Gate: Ensure that complex data tables or multi-panel charts were parsed accurately and that no missing variable errors persist.",
    "4. Autonomous Synthesis Memo & Conflict Identification: Input: The filtered, populated evidence matrix of 20-30 validated studies. Action: Engage Elicit \"Generate Research Report\" or \"Synthesize Findings\" mode. The AI analyzes consensus across the table, groups studies by methodological rigor, highlights conflicting results (e.g. why Study A found significant improvement while Study B showed null results), and drafts a coherent literature summary with in-line citations. Output: A publication-ready synthesis memo organizing key empirical findings, methodological gaps, and future research directions. Quality Gate: Audit all conflicting claims against the raw source papers to confirm that discrepancies stem from dosage/cohort variations rather than AI synthesis artifacts.",
    "5. Reference Manager Export & Publication Pipeline Sync: Input: Finalized evidence table and verified citation library. Action: Export the matrix as a formatted CSV spreadsheet for supplementary material inclusion, and export the citation collection as a .bib or .ris file directly into Zotero or Mendeley. Output: Standardized reference files ready for immediate citation inside Overleaf (LaTeX) or Microsoft Word. Quality Gate: Open the exported .bib file in your reference manager to ensure all DOIs, author names, publication years, and journal titles formatted without character corruption."
  ],
  "takeaway": "Elicit is the indispensable intelligence tool for serious researchers, PhD scholars, and clinical investigators who refuse to gamble with AI hallucinations. While casual students can get by with basic search engines and high-level synthesizers like Consensus, Elicit's ability to ingest full-text PDFs, construct custom multi-column data extraction matrices, and link every single claim to an exact verifiable text snippet saves weeks of tedious manual data entry and sets the gold standard for evidence-based research acceleration.",
  "sources": [
    {
      "title": "Elicit: The AI Research Assistant Official Platform",
      "publisher": "Elicit Research, Inc.",
      "url": "https://elicit.com/",
      "type": "official"
    },
    {
      "title": "Elicit Pricing, Systematic Review Features & Usage Tiers",
      "publisher": "Elicit Research, Inc.",
      "url": "https://elicit.com/pricing",
      "type": "official"
    },
    {
      "title": "Academic Literature Review & Systematic Screening with Elicit, Consensus, and Scite",
      "publisher": "Reddit r/PhD & r/academia Community Research Discussions",
      "url": "https://www.reddit.com/r/PhD/",
      "type": "independent"
    },
    {
      "title": "Evaluating AI-Assisted Literature Review Tools in Academic and Medical Workflows",
      "publisher": "University Libraries Digital Research Guide",
      "url": "https://guides.uflib.ufl.edu/ai_tools",
      "type": "independent"
    }
  ]
};
