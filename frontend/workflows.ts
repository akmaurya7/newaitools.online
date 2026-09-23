export interface WorkflowStep {
  tool: string;
  href: string;
  action: string;
  handoff: string;
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
    title: 'Product photo to a polished store listing',
    shortTitle: 'Product photo → listing → storefront',
    tagline: 'Prepare a product image and listing copy, then review the complete page in your store.',
    description: 'A practical e-commerce workflow for improving product presentation while preserving accurate product details and a trustworthy listing.',
    category: 'E-commerce & Design',
    deliverable: 'A reviewed product image and product page draft ready for the storefront.',
    steps: [
      { tool: 'Adobe Firefly', href: 'https://firefly.adobe.com/', action: 'Prepare or edit a product image, for example by refining a background or creating supporting campaign imagery that fits your product.', handoff: 'Inspect the image closely to ensure the product itself remains represented accurately and export the approved asset.' },
      { tool: 'Shopify Magic', href: 'https://www.shopify.com/magic', action: 'Draft a product description from accurate product facts such as materials, dimensions, compatibility, and intended use.', handoff: 'Correct all generated details and remove any unsupported claims before saving.' , guideUrl: 'https://help.shopify.com/en/manual/products/details/product-descriptions/shopify-magic', guideLabel: 'Shopify product description guidance' },
      { tool: 'Shopify', href: 'https://www.shopify.com/', action: 'Add the approved image and edited description to the product record. Complete price, inventory, shipping, variants, and product metadata.', handoff: 'Preview the page on mobile and desktop, verify product facts and purchasing details, then publish the listing.' }
    ],
    notes: [
      'Move the approved image and copy into the store yourself; these steps do not imply automatic transfer between separate products.',
      'AI-generated product copy and media should be reviewed for factual accuracy and faithful product representation before publishing.'
    ]
  }
];

export const lookupWorkflow = (slug: string) => WORKFLOWS.find(workflow => workflow.slug === slug);
