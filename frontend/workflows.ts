export interface WorkflowStep {
  tool: string;
  href: string;
  action: string;
  handoff: string;
  example?: string;
  output?: string;
  qualityGate?: string;
  guideUrl?: string;
  guideLabel?: string;
}

export interface Workflow {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  category: string;
  deliverable: string;
  steps: WorkflowStep[];
  notes: string[];
}

export const WORKFLOWS: Workflow[] = [
  {
    slug: 'script-to-social-video',
    title: 'Script to social video, ready to publish',
    shortTitle: 'Script → voice → video → publish',
    tagline: 'Turn one idea into a narrated, captioned short video and schedule it across your channels.',
    description: 'A practical creator workflow for short-form educational, product, and social videos. Each stage produces a file or brief you carry into the next tool; the final scheduler publishes after you upload and approve the finished video.',
    category: 'Video & Social Media',
    deliverable: 'A vertical MP4 with narration and captions, plus a scheduled social post.',
    steps: [
      { tool: 'ChatGPT', href: 'https://chatgpt.com/', action: 'Shape the idea into a concise, spoken script. Ask for a strong opening, short scene beats, on-screen visual suggestions, and a caption for the post.', handoff: 'Review the script, then copy the final narration and scene beats into your production notes.' },
      { tool: 'ElevenLabs', href: 'https://elevenlabs.io/', action: 'Paste the approved narration into Text to Speech, choose a voice, tune pacing, and generate the voiceover.', handoff: 'Listen through and download the approved audio file for your editor.', guideUrl: 'https://elevenlabs.io/docs/eleven-creative/playground/text-to-speech', guideLabel: 'ElevenLabs text-to-speech guide' },
      { tool: 'CapCut', href: 'https://www.capcut.com/', action: 'Combine the voiceover with your footage or visuals, edit to the scene beats, generate auto captions, and format the project vertically for short-form channels.', handoff: 'Correct caption names and punctuation, preview the full video, then export the final MP4.', guideUrl: 'https://www.capcut.com/tools/auto-caption-app', guideLabel: 'CapCut auto captions' },
      { tool: 'Metricool', href: 'https://metricool.com/', action: 'Upload the final MP4, add the post caption and destination channels, choose a publish time, and schedule the post.', handoff: 'Connect and authorize each account, check the platform preview, then confirm the schedule. Publishing happens from the scheduler after setup.', guideUrl: 'https://help.metricool.com/schedule-and-publish-on-youtube-gof0k', guideLabel: 'Metricool publishing guide' }
    ],
    notes: [
      'This is a guided workflow with human file handoffs: script, audio, and video are reviewed and moved between the tools. It does not claim the apps automatically pass work to one another.',
      'Auto-publishing depends on connecting an eligible account and the destination platform’s current rules. Instagram account type and certain media features can require a notification and a final manual step.'
    ]
  },
  {
    slug: 'research-to-published-article',
    title: 'Research to a reviewed, published article',
    shortTitle: 'Research → draft → optimize → publish',
    tagline: 'Move from a sourced brief to an edited article with a clear publishing handoff.',
    description: 'A research-led writing chain for teams publishing useful, search-friendly articles. The writer remains responsible for checking sources, claims, and final edits before publication.',
    category: 'Research & Writing',
    deliverable: 'A fact-checked article draft with an SEO brief and CMS-ready content.',
    steps: [
      { tool: 'Perplexity', href: 'https://www.perplexity.ai/', action: 'Explore the topic, collect primary references, and build a short outline around the questions readers need answered.', handoff: 'Save source links and separate verified facts from leads that still need checking.' },
      { tool: 'Claude', href: 'https://claude.ai/', action: 'Draft from your approved outline and source notes. Ask for clear structure and citations that point back to the supplied references.', handoff: 'Check every factual claim against the original sources; revise the draft in your editorial voice.' },
      { tool: 'Surfer', href: 'https://surferseo.com/', action: 'Use the content editor and keyword guidance to review topical coverage, headings, and on-page structure.', handoff: 'Treat optimization suggestions as editorial input, not a substitute for accuracy or readability.' },
      { tool: 'Webflow CMS', href: 'https://webflow.com/', action: 'Prepare the approved article in a CMS item, add its title, summary, slug, metadata, and reviewed media, then preview the page.', handoff: 'Check links, attribution, and mobile layout before publishing or scheduling the CMS item.' }
    ],
    notes: [
      'The research notes and draft move between tools through copied text or files; this recipe does not assume a native automatic integration.',
      'A human editor should verify sources and claims, especially for medical, legal, financial, or fast-changing subjects.'
    ]
  },
  {
    slug: 'idea-to-live-website',
    title: 'Product idea to a live marketing website',
    shortTitle: 'Idea → sitemap → design → live site',
    tagline: 'Turn a product brief into a structured site, then build and publish it with a clear review gate.',
    description: 'A lightweight website production chain for landing pages and small marketing sites. It keeps the brief, structure, visual design, implementation, and publishing review in sequence.',
    category: 'Website & App Creation',
    deliverable: 'A reviewed responsive marketing site with clear page structure and publish-ready copy.',
    steps: [
      { tool: 'ChatGPT', href: 'https://chatgpt.com/', action: 'Clarify the audience, offer, proof points, and calls to action. Generate a page brief and draft sitemap to review with stakeholders.', handoff: 'Approve the brief and sitemap before moving into design.' },
      { tool: 'Relume', href: 'https://www.relume.io/', action: 'Use the sitemap and brief to explore page sections and wireframes, then refine the structure and component direction.', handoff: 'Review the page hierarchy and export or carry the approved structure into your design or build process.' },
      { tool: 'Figma', href: 'https://www.figma.com/', action: 'Create a visual direction and responsive page layouts from the approved wireframes; document reusable styles and components.', handoff: 'Get design approval and verify the key desktop and mobile states before implementation.' },
      { tool: 'Webflow', href: 'https://webflow.com/', action: 'Build the approved layout, add interactions and CMS content if needed, then preview the site across screen sizes.', handoff: 'Connect the domain and publish only after reviewing links, forms, accessibility basics, and page metadata.' }
    ],
    notes: [
      'This is a staged production guide. Briefs, wireframes, and design decisions are reviewed and carried forward; the apps do not automatically synchronize every step.',
      'Web publishing requires an authorized project and domain setup. Keep a human review before making the site public.'
    ]
  },
  {
    slug: 'product-photo-to-store-listing',
    title: 'Phone product photo to a polished store listing',
    shortTitle: 'Phone photo → AI image → listing → storefront',
    tagline: 'Turn a real phone photo into an accurate catalog image, controlled lifestyle variants, and a reviewed product page.',
    description: 'An end-to-end e-commerce workflow for taking one real product photo, improving its presentation with AI, generating only the visual variants you need, writing listing copy from verified product facts, and publishing only after a factual and visual quality check.',
    category: 'E-commerce & Design',
    deliverable: 'A verified master product image, optional lifestyle variants, accurate listing copy, and a reviewed storefront product page.',
    steps: [
      {
        tool: 'Photoroom',
        href: 'https://www.photoroom.com/',
        action: 'Start from the real phone photo. Remove the background, correct the canvas, and create a clean master product image. Then use AI Backgrounds or Product Beautifier when a studio-style presentation is needed. Keep the original source image unchanged.',
        handoff: 'Export or save the approved master image before creating more variants. Do not continue if the product shape, color, label, proportions, or important physical details have changed.',
        example: 'Input: a phone photo of a 500 ml stainless-steel water bottle on a kitchen table. Request: clean white background, centered product, realistic soft contact shadow, no changes to the bottle itself.',
        output: 'A clean catalog/master image of the actual bottle, suitable as the reference asset for the remaining workflow.',
        qualityGate: 'Compare the master against the original photo: logo, cap, bottle shape, finish, color, and accessories must remain accurate.',
        guideUrl: 'https://help.photoroom.com/en/articles/6741465-how-to-use-ai-backgrounds',
        guideLabel: 'Photoroom AI Backgrounds guide'
      },
      {
        tool: 'Photoroom',
        href: 'https://www.photoroom.com/',
        action: 'Create one or more controlled lifestyle variants from the approved product image. Describe the environment, lighting, surface, and composition rather than asking AI to invent a replacement product. For larger catalogs, use consistent settings/templates and batch workflows where appropriate.',
        handoff: 'Select only the variants that represent a plausible customer use case. Keep the master catalog image separate from lifestyle imagery so the listing always has an accurate product reference.',
        example: 'Prompt: “Place this exact stainless-steel bottle on a bright wooden desk beside a notebook, natural morning light, realistic soft shadow, commercial e-commerce photography. Keep the bottle shape, logo, color, and cap unchanged.”',
        output: 'Two or three approved lifestyle images that show context without changing the real product.',
        qualityGate: 'Check perspective, scale, reflections, shadows, logo/label text, color, and physical geometry against the master image.',
        guideUrl: 'https://help.photoroom.com/en/articles/11161812-how-to-use-product-beautifier',
        guideLabel: 'Photoroom Product Beautifier guide'
      },
      {
        tool: 'Canva',
        href: 'https://www.canva.com/',
        action: 'Use the approved product image(s) to prepare channel-specific creative: storefront graphics, social posts, promotional banners, or ad layouts. Keep the actual product asset unchanged and add verified text separately rather than relying on AI-generated packaging or signage text.',
        handoff: 'Export the final approved image variants in the dimensions and formats required by the destination channel. Keep an uncompressed/master copy for future edits.',
        example: 'Create a 1:1 promotional graphic using the approved bottle image, headline “Stay Hydrated Anywhere”, one verified feature (“500 ml”), and a clean brand background. Do not invent specifications.',
        output: 'Channel-ready image assets with consistent branding and readable, verified copy.',
        qualityGate: 'Check crop, product visibility, text spelling, claims, logo usage, and mobile readability before export.'
      },
      {
        tool: 'Shopify Magic',
        href: 'https://www.shopify.com/magic',
        action: 'Generate a first draft of the product description from facts you supply: product type, material, dimensions/capacity, features, compatibility, use cases, variants, and approved keywords. Treat the generated text as a draft, not as a source of facts.',
        handoff: 'Edit the generated description against your product specification sheet. Remove invented benefits, specifications, compatibility claims, guarantees, or other unsupported statements before saving.',
        example: 'Input facts: “Stainless-steel bottle; 500 ml; screw cap; leak-resistant when closed; BPA-free only if verified by the manufacturer; suitable for cold beverages; available in black and silver.” Ask for a concise store description in a friendly, factual tone.',
        output: 'A readable draft description grounded in supplied product facts.',
        qualityGate: 'Every material specification and product claim must be traceable to the supplied product information or manufacturer documentation.',
        guideUrl: 'https://help.shopify.com/en/manual/products/details/product-descriptions/shopify-magic',
        guideLabel: 'Shopify Magic product description guidance'
      },
      {
        tool: 'Shopify',
        href: 'https://www.shopify.com/',
        action: 'Create or update the product record with the approved master image, selected lifestyle images, edited description, title, variants, price, inventory, shipping information, product category, and relevant metadata. Preview the complete product page before publishing.',
        handoff: 'Use the storefront preview to perform the final content, visual, mobile, and purchasing-flow checks. Publish only after every required field and asset has passed review.',
        example: 'Product page: “500 ml Stainless-Steel Bottle” with master image first, lifestyle image second, verified capacity/material details, black/silver variants, correct price and inventory, and a concise factual description.',
        output: 'A complete product page draft that is ready for publication after final QA.',
        qualityGate: 'Verify image order, product title, variants, price, inventory, shipping, description, mobile layout, links, and checkout path. Confirm the published page matches the real product.'
      }
    ],
    notes: [
      'The recommended flow is sequential: real source photo → verified master image → controlled lifestyle variants → channel creative → fact-grounded description → storefront entry → final QA.',
      'The tools do not automatically pass every asset or decision to the next product. Save/export the approved output at each handoff and carry it forward deliberately.',
      'AI-generated images can produce plausible but inaccurate product details. Treat the original photo and product specification as the source of truth.',
      "Shopify's current guidance says merchants are responsible for the accuracy of AI-generated product descriptions and should review generated content closely before publishing."
    ]
  }
];

export const lookupWorkflow = (slug: string) => WORKFLOWS.find(workflow => workflow.slug === slug);
