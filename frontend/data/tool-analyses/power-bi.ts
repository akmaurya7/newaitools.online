import type { ToolAnalysis } from './types.ts';

export const powerBiAnalysis: ToolAnalysis = {
  lastVerified: '2026-10-12',
  summary: 'Microsoft Power BI Copilot is an enterprise-grade generative AI analytics assistant natively embedded within Microsoft Fabric and the Power BI ecosystem. Powered by advanced Azure OpenAI foundation models (primarily GPT-4o) and tightly coupled with Microsoft OneLake, Power BI Copilot enables business intelligence developers, data analysts, and non-technical decision-makers to interact with governed semantic models through natural language. Rather than manually authoring complex DAX (Data Analysis Expressions) formulas, writing boilerplate visual layouts, or manually extracting weekly performance highlights, users can prompt Copilot to scaffold comprehensive multi-visual report pages, synthesize time-intelligence measures, generate dynamic narrative summary cards, and query underlying tabular models conversantly. What sets Power BI Copilot apart from generic LLM chat interfaces is semantic model grounding: queries and calculations are strictly bound to curated table relationships, pre-calculated measures, and column definitions within the tabular model, eliminating the mathematical hallucinations typical of standard chatbots. However, adopting Power BI Copilot requires navigating severe financial and operational prerequisites: the underlying workspace must be backed by a paid Microsoft Fabric capacity of at least F64 (~$5,000/month pay-as-you-go) or legacy Power BI Premium P1 capacity, completely excluding small teams on standard Pro ($10/user/month) or Premium Per User ($20/user/month) tiers unless sponsored by enterprise capacity. Furthermore, Copilot is strictly a multiplier on data quality—if underlying data models suffer from flawed relationships, ambiguous column headers, or missing synonyms, Copilot will generate hallucinated or misleading calculations.',
  company: 'Microsoft Corporation',
  officialUrl: 'https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-introduction',
  status: 'Commercial, globally available in Microsoft Fabric capacity (F64+) and Microsoft 365 Copilot environments, supporting natural language report generation, DAX formula authoring, semantic model Q&A, and executive narrative summaries.',
  targetUsers: [
    'Enterprise business intelligence developers and data engineers accelerating dashboard scaffolding and rapid DAX formula prototyping',
    'Departmental data analysts in finance, sales, and operations querying complex star schemas without manual matrix report construction',
    'C-suite executives and business leaders requiring automated, natural-language narrative summaries of KPI variances across weekly trading cycles',
    'Citizen data analysts in Microsoft 365 environments exploring curated corporate datasets inside Teams, Excel, and PowerPoint',
    'Data governance and IT compliance officers managing central Azure OpenAI boundaries with enterprise role-based access control (RBAC)'
  ],
  problemSolved: 'Solves the dual bottleneck of enterprise business intelligence: the severe backlog of ad-hoc report requests overwhelming BI teams, and the steep mathematical learning curve of DAX (Data Analysis Expressions) for business analysts. In traditional BI workflows, creating a production-grade dashboard takes days of calculating time-intelligence measures (YoY, MoM, rolling averages), aligning visual canvases, and configuring cross-filters. Non-technical users waiting on answers either abandon the query or export unvetted CSVs into fragile local spreadsheets. Power BI Copilot resolves this by democratizing report creation and insight discovery through natural language while preserving enterprise data governance, row-level security (RLS), and single-source-of-truth semantic models.',
  howItWorks: 'Power BI Copilot operates through a four-stage enterprise semantic orchestration pipeline: (1) Semantic Model Grounding & Schema Indexing: When a user initiates a Copilot interaction in Power BI Desktop or Service, Copilot inspects the active semantic model\'s schema—including table names, foreign key relationships, column descriptions, and existing DAX measures. It indexes synonyms and metadata without ingesting raw underlying database rows. (2) Prompt Translation & Azure OpenAI Routing: The user\'s natural language prompt (e.g., \'Create a page analyzing customer acquisition cost trends against quarterly revenue by sales region\') is augmented with schema metadata and transmitted to dedicated, enterprise-isolated Azure OpenAI Service endpoints. (3) Code & Visual JSON Synthesis: Azure OpenAI generates structured responses—such as exact DAX calculation formulas or declarative JSON visual specifications defining chart types, axis bindings, and filter contexts. (4) Client-Side Canvas Rendering & Narrative Generation: Power BI interprets the generated JSON payload, dynamically rendering interactive charts, KPI scorecards, and narrative text blocks on the visual canvas. The user can interactively refine, restyle, or audit the underlying DAX calculations with full code transparency.',
  features: [
    {
      name: 'Conversational Report Page Scaffolding',
      detail: 'Generates complete, multi-visual report pages from natural language prompts, automatically selecting appropriate chart types (line, clustered bar, waterfall, KPI cards) and binding them to relevant semantic model fields.'
    },
    {
      name: 'Natural Language DAX Measure Generation & Explanation',
      detail: 'Writes complex Data Analysis Expressions (DAX) from conversational requests in the DAX Query View, while providing step-by-step logic explanations for existing calculations.'
    },
    {
      name: 'Automated Smart Narrative & Executive Summaries',
      detail: 'Creates dynamic, responsive executive narrative visual cards that synthesize key business takeaways, variance drivers, and anomaly highlights, updating automatically upon filter adjustments.'
    },
    {
      name: 'Semantic Model Q&A with Visual Handoff',
      detail: 'Allows report consumers to ask natural language questions in the Copilot pane, returning immediate numerical answers backed by interactive mini-charts and source citations.'
    },
    {
      name: 'Fabric Copilot Cross-Workload Integration',
      detail: 'Integrates natively across the entire Microsoft Fabric suite, extending AI assistance into Data Factory pipelines, Lakehouse Spark notebooks, and Data Warehouse SQL queries.'
    },
    {
      name: 'Automated Synonym & Metadata Enrichment',
      detail: 'Scans tabular models to suggest business synonyms and friendly column descriptions, continually improving Q&A accuracy and organizational discoverability.'
    },
    {
      name: 'Mobile & Teams Embedded Analytics',
      detail: 'Surfaces Copilot insights directly within Microsoft Teams chats, Outlook emails, and Power BI Mobile apps without requiring users to navigate complex desktop interfaces.'
    },
    {
      name: 'Enterprise Tenant Admin Governance Controls',
      detail: 'Provides granular administrative switches within the Fabric Admin Portal to regulate Azure OpenAI geographic data processing boundaries and user access groups.'
    }
  ],
  aiAndModels: 'Power BI Copilot is powered by Microsoft Azure OpenAI Service, utilizing specialized deployments of OpenAI GPT-4o alongside proprietary Microsoft code and query translation models. Crucially, all model inference operates within Microsoft\'s commercial enterprise data boundary. Prompts, tabular schema metadata, and generated outputs are protected under Microsoft enterprise commitments: customer data is never sent to public OpenAI endpoints, is not cached or stored outside the customer tenant session, and is never used to train or fine-tune public foundation AI models.',
  inputsOutputs: 'Inputs: Natural language prompt queries, enterprise semantic models (Import, DirectQuery, and Direct Lake modes on OneLake), table schema relationships, predefined DAX measures, column synonyms, and cross-report filter parameters. Outputs: Interactive Power BI report pages with pre-configured charts, validated DAX formulas and calculation items, formatted executive narrative text blocks, structured tabular query results, and shareable insight cards for Microsoft 365 applications.',
  limits: [
    'Mandatory Microsoft Fabric F64 / Premium Capacity: Copilot requires workspaces backed by at least an F64 capacity (~$5,000/month pay-as-you-go) or legacy P1 capacity; Pro ($10/mo) and Premium Per User ($20/mo) licenses cannot access Copilot independently.',
    'Strict Dependency on Star Schema Modeling: If underlying semantic models have poorly named columns, ambiguous relationships, or circular dependencies, Copilot produces inaccurate or completely hallucinated DAX measures.',
    'No Autonomous Power Query M-Code Pipeline Authoring: Copilot cannot automatically build, refactor, or debug complex data ingestion and ETL transformation steps in Power Query.',
    'Limited Custom Visual & Complex Format Styling: Generated visuals adhere to default canvas themes and standard visuals; bespoke corporate branding, advanced conditional formatting, and micro-alignments require manual human fine-tuning.',
    'Geographic Azure OpenAI Tenant Constraints: Organizations with strict local data sovereignty rules must enable cross-geo processing switches in the Fabric Admin Portal if Azure OpenAI is not deployed in their local Azure region.',
    'Capacity Unit (CU) Consumption & Throttling: Heavy concurrent Copilot usage burns through shared Fabric Capacity Units, potentially slowing background data refreshes or causing temporary Copilot request rate limiting during peak usage.'
  ],
  useCases: [
    'Enterprise Executive Dashboard Scaffolding: Rapidly generating baseline operational dashboards for quarterly financial performance, supply chain logistics, and customer retention',
    'Self-Service Analytical Q&A for Non-Technical Stakeholders: Enabling department managers in HR, sales, and marketing to ask ad-hoc performance questions without opening support tickets',
    'DAX Learning & Rapid Query Prototyping: Helping junior data analysts craft complex time-intelligence calculations (YoY growth, cumulative year-to-date, moving averages) with explainable code',
    'Automated Executive Narrative Generation: Injecting dynamic commentary cards into recurring weekly reports that highlight top revenue drivers and margin risks for board decks',
    'Semantic Model Auditing & Documentation: Generating descriptive business metadata and natural language synonyms across hundreds of tabular model columns to streamline corporate governance'
  ],
  poorFit: [
    'Small businesses, solo freelancers, and boutique agencies operating exclusively on standard Power BI Pro ($10/user/month) or PPU licenses without Fabric F64 capacity',
    'Raw, unmodeled Excel spreadsheets or flat CSV dumps lacking dimensional star schema relationships and defined business metrics',
    'Air-gapped on-premise deployments using Power BI Report Server, which lacks cloud Azure OpenAI connectivity',
    'Teams expecting 100% autonomous business intelligence without human data validation and mathematical auditing'
  ],
  pricing: [
    {
      name: 'Power BI Pro License ($10 / User / Month)',
      detail: '$10/user/month (included in Microsoft 365 E5). Enables report authoring, sharing, and dashboard collaboration. However, Pro licenses alone provide ZERO access to Power BI Copilot features unless the report workspace is hosted on an F64+ capacity.'
    },
    {
      name: 'Power BI Premium Per User / PPU ($20 / User / Month)',
      detail: '$20/user/month. Unlocks advanced paginated reports, larger semantic models (up to 100 GB), and faster refresh rates, but DOES NOT include Microsoft Fabric Copilot capacity.'
    },
    {
      name: 'Microsoft Fabric Capacity F64 (Minimum for Copilot: ~$5,000 / Month)',
      detail: 'F64 Capacity (64 Capacity Units / CUs). Priced at ~$6.80/hour pay-as-you-go (~$4,995/month) or ~$4,166/month with a 1-year Azure reservation. This is the mandatory minimum capacity required to unlock Copilot in Power BI, Data Factory, and Fabric workloads.'
    },
    {
      name: 'Microsoft Fabric Scaled Capacities (F128, F256, F512 up to F2048)',
      detail: 'Enterprise capacities scaling up to 2,048 CUs for large organizations supporting hundreds of concurrent analytical workloads and intensive Copilot inference jobs.'
    },
    {
      name: 'Microsoft 365 Copilot Add-On ($30 / User / Month)',
      detail: '$30/user/month billed annually. Extends Power BI metric Q&A into Microsoft Teams, Word, and Excel, but still relies on the underlying semantic model residing in an active Fabric F64+ capacity.'
    },
    {
      name: 'Fabric Capacity Unit (CU) Consumption Dynamics',
      detail: 'Copilot queries consume Fabric Capacity Units alongside scheduled dataset refreshes and Direct Lake queries. Organizations must monitor the Fabric Capacity Metrics App to prevent capacity overage throttling.'
    }
  ],
  integrations: [
    'Microsoft Fabric Unified Architecture (OneLake, Lakehouse, Data Warehouse, Real-Time Analytics)',
    'Azure Cloud Data Services (Azure Synapse Analytics, Azure SQL Database, Azure Databricks, ADLS Gen2)',
    'Cloud Data Warehouses (Snowflake, Google BigQuery, Amazon Redshift, Databricks Unity Catalog)',
    'Enterprise ERP & CRM Platforms (Salesforce, SAP HANA, Dynamics 365, Oracle Cloud)',
    'Microsoft 365 Productivity Suite (Microsoft Teams, Excel, PowerPoint, SharePoint, Viva Insights)',
    'Developer Ecosystem & Tools (DAX Studio, Tabular Editor 3, Visual Studio Code, Git Integration via PBIP format)'
  ],
  developer: [
    'DAX Query View with Natural Language Prompting: Write, evaluate, and test DAX queries interactively with AI-assisted code generation inside Power BI Desktop',
    'Fabric Git Integration & CI/CD Pipelines: Version-control Power BI Project (.pbip) files and semantic model BIM/TMDL code with Azure DevOps or GitHub',
    'Tabular Model Definition Language (TMDL): Full programmatic access to semantic model definitions, allowing automated script deployment of AI-suggested synonyms and measures',
    'Semantic Link in Fabric Python Notebooks: Bridge Power BI semantic models directly into PySpark and pandas dataframes for advanced data science modeling',
    'REST APIs and PowerShell cmdlets: Automate Fabric capacity scaling, workspace assignment, and tenant administration settings programmatically',
    'Custom Visual SDK: Build bespoke TypeScript/D3 visualizations that interact seamlessly with native report filters and Copilot narrative summaries'
  ],
  privacy: 'Microsoft Power BI Copilot adheres to enterprise-grade cloud compliance frameworks including GDPR, ISO 27001, SOC 1/2/3, HIPAA BAA, and FedRAMP High. Customer prompt queries, tabular metadata, and generated insights are strictly confined to the organization\'s Microsoft 365 / Azure compliance boundary. Microsoft explicitly guarantees that customer corporate data is never shared with third parties, is encrypted in transit via TLS 1.3 and at rest with AES-256 (with customer-managed key support via Azure Key Vault), and is strictly never utilized to train public foundation models.',
  ownership: 'Customers retain 100% intellectual property ownership, copyright, and commercial control over all datasets, semantic models, DAX measures, visual layouts, and executive reports generated through Power BI Copilot. Microsoft asserts zero ownership claims, licensing restrictions, or royalty requirements over customer-created analytical assets.',
  alternatives: [
    {
      name: 'Tableau AI / Einstein Copilot for Tableau',
      detail: 'Salesforce\'s flagship AI business intelligence platform ($150-$250/user/month on Tableau+ tiers). Offers automated metric digest summaries via Tableau Pulse and conversational chart creation. Provides superior ad-hoc visual formatting flexibility, but requires premium Salesforce cloud licensing.'
    },
    {
      name: 'Julius AI',
      detail: 'Conversational computational analytics platform running in-browser Python/R Docker sandboxes ($20-$45/month). Outstanding for solo analysts performing exploratory data analysis, statistical regression, and Plotly charts without requiring enterprise data warehouse infrastructure.'
    },
    {
      name: 'ThoughtSpot Sage',
      detail: 'Search-native AI analytics platform engineered for natural language querying over cloud data warehouses ($95+/user/month). Excels at non-technical ad-hoc self-service search on Snowflake and BigQuery, but lacks Power BI\'s canvas-style dashboard layout authoring.'
    },
    {
      name: 'Qlik Answers & Generative AI',
      detail: 'Associative analytics engine enhanced with generative AI for structured and unstructured data exploration. Strong for complex associative logic, but possesses a smaller global developer ecosystem than Microsoft Fabric.'
    },
    {
      name: 'Rows.com / AI Modern Spreadsheets',
      detail: 'Cloud-first collaborative spreadsheet incorporating built-in LLM formulas and SaaS connectors (Freemium to $59/mo). Excellent for lightweight financial models and quick marketing reporting, but unsuitable for multi-million row enterprise data warehouses.'
    }
  ],
  strengths: [
    'Strict Semantic Model Grounding: Eliminates statistical hallucinations by anchoring all queries and visual calculations to verified tabular models and pre-built DAX measures.',
    'Deep Microsoft Fabric & OneLake Ecosystem Synergy: Seamlessly connects data engineering, data warehousing, and business intelligence in a unified SaaS architecture.',
    'Instant Dashboard Scaffolding: Generates complete, functional multi-chart report pages in seconds, dramatically reducing initial developer setup time.',
    'Native DAX Synthesis & Logic Explanations: Helps analysts write and understand intricate time-intelligence formulas directly within the DAX Query View.',
    'Enterprise Governance & Purview Integration: Inherits enterprise security classifications, sensitivity labels, and row-level security (RLS) automatically.'
  ],
  limitations: [
    'Prohibitive Minimum Financial Barrier: Demands a Fabric F64 capacity (~$5,000/month minimum), making it completely inaccessible to small teams and budget-constrained startups.',
    'Strict Garbage-In, Garbage-Out Dependency: Produces misleading metrics if the semantic model has ambiguous naming conventions or broken star schema relationships.',
    'No Autonomous Power Query ETL Construction: Cannot automatically clean, transform, or build data pipelines in Power Query without manual engineering.',
    'Rigid Initial Visual Formatting: Generated report pages look generic and routinely require manual color palette adjustments and typography alignment.',
    'Geographic Azure OpenAI Routing Hurdles: May require tenant admin cross-geo approval if Azure OpenAI instances are not co-located in the primary Fabric data region.'
  ],
  workflow: [
    '1. Star Schema Hardening & Semantic Model Enrichment: Input: Enterprise ERP and sales database tables in Microsoft Fabric OneLake or Azure SQL. Action: Ensure a strict dimensional star schema is configured in Power BI Desktop (fact tables connected to dimension tables with 1-to-many relationships). Rename cryptic database columns to user-friendly terms (e.g., change \'CUST_LTV_VAL\' to \'Customer Lifetime Value\'). Add explicit descriptions and synonyms in Model View for core measures (Revenue, Gross Margin, Churn Rate). Quality Gate: Open DAX Studio or Tabular Editor to confirm zero bidirectional circular relationships and verify that all key business measures calculate deterministically.',
    '2. Fabric Capacity Allocation & Tenant Admin Provisioning: Input: Active Microsoft Fabric tenant and Azure subscription. Action: Navigate to the Microsoft Fabric Admin Portal. Verify that the target workspace is assigned to an active Fabric F64 capacity (or P1 Premium capacity). In Tenant Settings, toggle \'Users can use Copilot and other features powered by Azure OpenAI\' to Enabled. If Azure OpenAI is located in an adjacent cloud region, enable \'Data sent to Azure OpenAI can be processed outside your capacity\'s geographic region\'. Quality Gate: Check the Fabric Capacity Metrics app to verify that Capacity Units (CUs) are active and healthy with zero compute throttling.',
    '3. Conversational Report Page Scaffolding: Input: Enriched semantic model published to the Fabric workspace. Action: Open Power BI Desktop or Service, launch the Copilot pane, and prompt: \'Create a high-level executive sales performance page showing quarterly revenue trends, top 10 products by gross margin, and regional revenue breakdown with interactive slicers for fiscal year\'. Copilot synthesizes visual JSON and renders a multi-chart layout. Quality Gate: Audit generated visuals against known source numbers to confirm appropriate aggregations (SUM vs AVERAGE) and ensure slicers filter cross-visuals correctly.',
    '4. DAX Measure Formulation & Logic Verification: Input: Need for specialized time-intelligence calculations (e.g., Year-over-Year Sales Growth with leap-year adjustments). Action: Open the DAX Query View in Power BI Desktop. Prompt Copilot: \'Write a DAX measure calculating Year-over-Year Sales Growth percentage, handling division by zero gracefully using the DIVIDE function\'. Review the synthesized DAX syntax and explanation provided by Copilot. Quality Gate: Execute the DAX query directly in the query view, comparing output values against manual benchmark calculations to verify zero logic drift.',
    '5. Executive Narrative Synthesis & Secure Distribution: Input: Finalized multi-page operational report. Action: Add a Smart Narrative visual powered by Copilot to the executive overview page. Prompt Copilot: \'Summarize the primary drivers of margin expansion this quarter in 3 concise bullet points with percentage changes\'. Configure Row-Level Security (RLS) roles and publish the report to the production Fabric app workspace. Distribute via Microsoft Teams tabs and automated PowerPoint executive exports. Quality Gate: Test report access under different user security roles to confirm that Row-Level Security restricts underlying data visibility while preserving narrative coherence.'
  ],
  takeaway: 'Microsoft Power BI Copilot marks a transformative milestone for enterprise business intelligence, fundamentally redefining how organizations author dashboards and explore tabular data. By grounding generative AI within structured, governed semantic models, Microsoft eliminates the mathematical inaccuracies that plague general-purpose chatbots. However, Copilot is neither an excuse for poor data modeling nor a budget-friendly toy: it requires rigorous star schema discipline and demands a substantial enterprise investment in Microsoft Fabric F64 capacity (~$5,000/month). For enterprise organizations already invested in the Microsoft data cloud, Power BI Copilot delivers tremendous productivity gains; smaller teams, however, will find superior ROI in specialized tools like Julius AI or native Power BI Pro workflows until Microsoft democratizes capacity access.',
  sources: [
    {
      title: 'Overview of Copilot for Power BI & Fabric Architecture',
      publisher: 'Microsoft Learn',
      url: 'https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-introduction',
      type: 'official'
    },
    {
      title: 'Microsoft Fabric Capacity Pricing, Sizing & SKU Requirements (F64+)',
      publisher: 'Microsoft Fabric Documentation',
      url: 'https://azure.microsoft.com/en-us/pricing/details/microsoft-fabric/',
      type: 'official'
    },
    {
      title: 'Privacy, Security, and Responsible AI in Power BI Copilot',
      publisher: 'Microsoft Learn Trust & Compliance',
      url: 'https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-privacy-security',
      type: 'official'
    },
    {
      title: 'Power BI Community & Reddit r/PowerBI: Real-World Fabric F64 Costs, DAX Accuracy & User Sentiment',
      publisher: 'Reddit r/PowerBI Community Analysis',
      url: 'https://www.reddit.com/r/PowerBI/',
      type: 'independent'
    },
    {
      title: 'Gartner Magic Quadrant for Analytics and Business Intelligence Platforms',
      publisher: 'Gartner Research',
      url: 'https://www.gartner.com/en/documents/magic-quadrant-analytics-business-intelligence-platforms',
      type: 'independent'
    }
  ]
};
