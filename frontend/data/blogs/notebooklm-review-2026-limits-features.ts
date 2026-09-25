import { BlogPost } from '../../data';

export const notebooklm_review_2026_limits_features: BlogPost = {
  id: 'notebooklm-review-2026-limits-features',
  slug: 'notebooklm-review-2026-limits-features',
  category: 'Guide',
  title: 'Gemini Notebook (NotebookLM): Features, Limits, and Workflow in 2026',
  excerpt: 'A current, documentation-based guide to Gemini Notebook, the renamed NotebookLM, covering source limits, compute usage, research outputs, and a source-first workflow.',
  author: 'newaitools Editorial',
  publishDate: '2026-09-25',
  modifiedDate: '2026-09-25',
  readTime: 10,
  tags: ['Gemini Notebook', 'NotebookLM', 'AI research', 'Google AI', 'research workflow'],
  featured: false,
  ogImage: '/blog/images/notebooklm-review-2026.jpg',
  ogImageAlt: 'Editorial illustration of Gemini Notebook organizing research sources and generating evidence-based outputs',
  content: `<section class="prose-article">
  <h1>Gemini Notebook (NotebookLM): Features, Limits, and Workflow in 2026</h1>

  <p><strong>NotebookLM is now called Gemini Notebook, but it remains a standalone research product.</strong> Google announced the rename on July 16, 2026 and described Gemini Notebook as a research tool that can work across the Gemini ecosystem. Google has also been rolling out a secure cloud computer for notebooks, which can execute code for supported accounts and enable deeper source-grounded analysis. This guide focuses on the current product behavior documented by Google, not on a hands-on benchmark.</p>

  <p>The most useful way to evaluate Gemini Notebook is as a source-grounded research workspace. It can organize supplied sources, answer questions with citations, and generate formats such as Audio Overviews and Slide Decks. Its current usage model is compute-based, so limits depend on factors such as prompt complexity, chat length, source count, model or feature use, and account access.</p>

  <div class="takeaway-panel">
    <h2>Key Takeaways</h2>
    <ul>
      <li><strong>The name changed, not the core identity:</strong> Google renamed NotebookLM to Gemini Notebook in July 2026 and continues to position it as a standalone research tool.</li>
      <li><strong>Source size is large:</strong> Google's current help documentation lists up to 500,000 words per source or 200 MB for local uploads, with 50 sources per notebook on the free tier.</li>
      <li><strong>Usage is compute-based:</strong> Starting September 2, 2026, Gemini Notebook limits account for prompt complexity, chat length, source count, model or feature use, and refresh every five hours until the applicable weekly limit is reached.</li>
      <li><strong>Outputs go beyond chat:</strong> Google documents Audio Overviews, Slide Decks, Infographics, and Video Overviews, with availability varying by feature and account.</li>
      <li><strong>Verification still matters:</strong> Google says responses include citations, but its own research guidance acknowledges that generated material can contain inaccuracies. Treat citations as a path to the source, then check the relevant evidence.</li>
    </ul>
  </div>

  <h2>What changed from NotebookLM to Gemini Notebook?</h2>
  <p>Google announced the rename on July 16, 2026. The company described the product as the same standalone experience, expanded across the Google ecosystem, and introduced a secure cloud computer that can write and execute code for supported accounts. Google said the capability was available to Google AI Ultra users and eligible Workspace customers at announcement time, with broader rollout planned for Pro users on the web.</p>
  <p>That matters because the product is no longer best understood as a simple document chat interface. The current direction is a research environment where supplied evidence, analysis tools, and generated outputs are combined in one notebook.</p>

  <h2>Current source and usage limits</h2>
  <p>Google's current help documentation lists a <strong>500,000-word limit per source or 200 MB for local uploads</strong>. Google also documents a 50-source limit per notebook for free users and 100 notebooks per user. Supported source types include material such as Google Docs, Slides, Drive PDFs, web URLs, public YouTube content, ePub files, and other supported imports.</p>
  <p>The important change in September 2026 is how feature usage is measured. Google says Gemini Notebook now uses compute-based limits. The amount available for a user depends on prompt complexity, chat length, number of sources, models and features used, and related account factors. The quota refreshes every five hours until the applicable weekly limit is reached.</p>

  <div class="overflow-x-auto rounded-lg border border-ink/10">
    <table class="min-w-[640px]">
      <thead><tr><th>Current documented item</th><th>What Google currently says</th><th>Why it matters</th></tr></thead>
      <tbody>
        <tr><td>Product name</td><td>Gemini Notebook, formerly NotebookLM</td><td>Use both names in search and legacy references.</td></tr>
        <tr><td>Words per source</td><td>Up to 500,000 words</td><td>Large reports can fit inside one source.</td></tr>
        <tr><td>Local upload size</td><td>Up to 200 MB</td><td>Useful for large documents and data files.</td></tr>
        <tr><td>Free sources per notebook</td><td>50</td><td>Enough to build a focused research set without mixing unrelated material.</td></tr>
        <tr><td>Free notebooks</td><td>100</td><td>Lets you separate research projects.</td></tr>
        <tr><td>Usage model</td><td>Compute-based; refreshes every five hours until the weekly limit applies</td><td>Complex research tasks consume more capacity than simple interactions.</td></tr>
      </tbody>
    </table>
  </div>

  <h2>How the current research workflow works</h2>
  <p>Gemini Notebook is most useful when you define the source set before asking for polished output. A clean workflow is: collect the sources, verify that the correct material is imported, ask focused questions, inspect citations, and only then generate a final summary or deliverable.</p>

  <figure class="research-figure" aria-labelledby="gemini-notebook-flow-caption">
    <svg viewBox="0 0 900 190" role="img" aria-labelledby="gemini-notebook-flow-title gemini-notebook-flow-desc">
      <title id="gemini-notebook-flow-title">Gemini Notebook source-first workflow</title>
      <desc id="gemini-notebook-flow-desc">Five stages from source collection to question, cited answer, verification, and final research output.</desc>
      <line x1="165" y1="82" x2="205" y2="82" stroke="currentColor" stroke-width="2" opacity="0.22"/>
      <line x1="335" y1="82" x2="375" y2="82" stroke="currentColor" stroke-width="2" opacity="0.22"/>
      <line x1="505" y1="82" x2="545" y2="82" stroke="currentColor" stroke-width="2" opacity="0.22"/>
      <line x1="675" y1="82" x2="715" y2="82" stroke="currentColor" stroke-width="2" opacity="0.22"/>
      <g fill="currentColor">
        <rect x="10" y="40" width="155" height="84" rx="14" opacity="0.07"/>
        <rect x="180" y="40" width="155" height="84" rx="14" opacity="0.1"/>
        <rect x="350" y="40" width="155" height="84" rx="14" opacity="0.13"/>
        <rect x="520" y="40" width="155" height="84" rx="14" opacity="0.16"/>
        <rect x="690" y="40" width="155" height="84" rx="14" opacity="0.2"/>
      </g>
      <g fill="currentColor" font-family="system-ui, sans-serif" text-anchor="middle">
        <text x="87" y="69" font-size="14" font-weight="700">1. Collect</text>
        <text x="87" y="91" font-size="12">Import source set</text>
        <text x="257" y="69" font-size="14" font-weight="700">2. Ask</text>
        <text x="257" y="91" font-size="12">Focused questions</text>
        <text x="427" y="69" font-size="14" font-weight="700">3. Cite</text>
        <text x="427" y="91" font-size="12">Inspect evidence</text>
        <text x="597" y="69" font-size="14" font-weight="700">4. Verify</text>
        <text x="597" y="91" font-size="12">Check source context</text>
        <text x="767" y="69" font-size="14" font-weight="700">5. Output</text>
        <text x="767" y="91" font-size="12">Brief, audio, slides</text>
        <text x="450" y="166" font-size="11" opacity="0.45">The notebook organizes evidence; verification determines whether the final claim is usable.</text>
      </g>
    </svg>
    <figcaption id="gemini-notebook-flow-caption">A source-first workflow keeps generated output attached to the evidence set that should support it.</figcaption>
  </figure>

  <h2>Audio Overviews, Slide Decks, Infographics, and Video Overviews</h2>
  <p>Google has expanded NotebookLM's output formats beyond text. Its 2026 product updates describe Audio Overviews, Slide Decks, Infographics, and Video Overviews as ways to turn the same source-grounded notebook into different deliverables. The useful distinction is that these are presentation formats layered over a source set, not replacements for the underlying evidence.</p>
  <p>For example, a research team can keep a set of policy documents in one notebook, ask a focused question, inspect the cited answer, and then generate a presentation for a meeting. The output is easier to consume, but the source set remains the place to verify what was actually established.</p>

  <h2>What the secure cloud computer adds</h2>
  <p>Google's July 2026 announcement says every notebook is beginning to receive a secure cloud computer that lets Gemini Notebook write and execute code natively. At launch, Google said this was available to Google AI Ultra users and certain Workspace customers, with additional rollout planned. This can support analysis tasks that benefit from computation, but availability depends on account and plan.</p>
  <p>For a research workflow, treat the cloud-computer feature as an analysis layer. Start with the documents and define the question, then use computation when the task genuinely requires calculations or structured data processing. Keep the source set and the analytical assumptions visible to the reviewer.</p>

  <h2>How to keep Gemini Notebook research auditable</h2>
  <ol class="workflow-steps">
    <li><strong>1. Define the research question.</strong> Input: a decision or research question. Action: write exactly what you need to establish. Example: "Compare the revenue guidance in these three company filings." Expected output: a short question with explicit entities and dates. Quality gate: another person can tell what would count as an answer.</li>
    <li><strong>2. Build the notebook source set.</strong> Input: original documents, URLs, PDFs, or other supported sources. Action: import only the material relevant to the question. Example: three filings plus the relevant investor presentation. Expected output: a bounded notebook. Quality gate: every source is identifiable and relevant.</li>
    <li><strong>3. Ask for a cited answer before a polished summary.</strong> Input: one focused question. Action: ask Gemini Notebook to compare the sources and keep citations visible. Example: "List each company's stated revenue guidance and cite the source passage." Expected output: a comparison with citations. Quality gate: the cited passages actually contain the stated figures or wording.</li>
    <li><strong>4. Challenge the result.</strong> Input: the cited answer. Action: ask which claims are uncertain, conflicting, or dependent on assumptions. Example: "Which conclusions depend on management commentary rather than reported results?" Expected output: an uncertainty list. Quality gate: unresolved claims stay marked unresolved.</li>
    <li><strong>5. Generate the handoff.</strong> Input: the verified evidence map. Action: generate the final brief, Audio Overview, Slide Deck, or other useful output. Example: create a one-page summary with an appendix of source links. Expected output: a deliverable that can be reviewed without replaying the entire chat. Quality gate: every consequential claim can be traced back to the notebook source set.</li>
  </ol>

  <h2>Where Gemini Notebook fits</h2>
  <p>Gemini Notebook is a strong fit when the work begins with a defined source set and the output needs to preserve a visible relationship between evidence and synthesis. It is less useful to treat the notebook as a generic answer engine and ignore the documents that make it distinctive.</p>
  <p>Browse the <a href="/category/research-and-knowledge">Research &amp; Knowledge directory</a> for related research tools. For broader web research, pair the notebook with our <a href="/blog/ai-deep-research-source-first-workflow">AI deep research guide</a>. The distinction is simple: Gemini Notebook organizes a bounded source set, while a broader deep-research workflow may start by discovering the evidence itself.</p>
  <p>For a separate trust-first workflow, see our <a href="/blog/ai-notes-client-calls-consent-first">consent-first AI meeting notes guide</a>. The same principle applies here: define the source boundary before the model produces a polished deliverable.</p>

  <h2>Common mistakes</h2>
  <h3>Importing too much unrelated material</h3>
  <p>A large notebook is not automatically a better notebook. Keep the source set focused enough that each source has a clear relationship to the research question.</p>
  <h3>Assuming a citation means the claim is correct</h3>
  <p>A citation gives you a path to evidence. Open the source and check the context, especially for numbers, qualifications, and claims that could change a decision.</p>
  <h3>Mixing source-grounded work with unsupported assumptions</h3>
  <p>Mark assumptions separately. If a statement is an inference rather than a direct source fact, label it as an inference.</p>
  <h3>Ignoring current account limits</h3>
  <p>Google says Gemini Notebook limits and access can change based on plan, account, testing, and availability. Check the current help page before planning a high-volume research process.</p>

  <h2>Frequently asked questions</h2>
  <h3>Is NotebookLM now called Gemini Notebook?</h3>
  <p>Yes. Google announced the rename on July 16, 2026. The company described it as the same standalone product with broader integration into the Google ecosystem.</p>
  <h3>How large can a source be?</h3>
  <p>Google's current help documentation lists up to 500,000 words per source or 200 MB for local uploads. Limits may vary by source type and account.</p>
  <h3>How does Gemini Notebook usage work now?</h3>
  <p>Since September 2, 2026, Google says usage is compute-based and considers factors such as prompt complexity, chat length, source count, models, and features. The quota refreshes every five hours until the applicable weekly limit is reached.</p>
  <h3>Can Gemini Notebook generate presentations or audio?</h3>
  <p>Yes. Google documents outputs including Audio Overviews, Slide Decks, Infographics, and Video Overviews, with availability depending on the feature and account.</p>

  <h2>Official references</h2>
  <p>Current documentation and product updates reviewed on September 25, 2026: <a href="https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/" target="_blank" rel="noreferrer">Google: NotebookLM is now Gemini Notebook</a>, <a href="https://blog.google/innovation-and-ai/products/gemini-notebook/new-flexible-usage-limits/" target="_blank" rel="noreferrer">Google: flexible usage limits</a>, <a href="https://support.google.com/gemininotebook/answer/17670842?hl=en" target="_blank" rel="noreferrer">Google Help: manage Gemini Notebook usage limits</a>, <a href="https://support.google.com/gemininotebook/answer/16269187?hl=en" target="_blank" rel="noreferrer">Google Help: Gemini Notebook FAQs and source limits</a>, and <a href="https://blog.google/innovation-and-ai/products/notebooklm/better-research-notebooklm/" target="_blank" rel="noreferrer">Google: do better research with NotebookLM</a>. This is a documentation-based guide, not a hands-on product test.</p>
</section>`
};
