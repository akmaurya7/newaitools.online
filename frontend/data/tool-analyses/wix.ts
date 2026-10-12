import type { ToolAnalysis } from './types.ts';

export const wixAnalysis: ToolAnalysis = {
  lastVerified: '2026-10-12',
  summary: 'Wix AI (officially the Wix AI Website Builder and Wix Studio AI suite) represents one of the most mature, end-to-end generative website creation platforms on the market. Unlike lightweight AI landing page toys that generate static, throwaway HTML without backends, Wix AI builds on top of Wix\'s two-decade-old infrastructure—marrying conversational prompt-driven design with enterprise-grade business management. From a single natural-language dialogue, Wix AI orchestrates full multi-page site structures, generates tailored copywriting, composes bespoke visual palettes, provisions dynamic database collections, and automatically configures native transactional engines like Wix Stores, Wix Bookings, and Wix Events. For design agencies and developers, Wix Studio AI takes this further by offering responsive layout generation that automatically writes responsive CSS rules across breakpoints with a single click, alongside an AI coding assistant inside Velo for full-stack JavaScript customization. Operating on a freemium model with premium plans ranging from $17 to $159 per month, Wix AI solves the single biggest bottleneck in web design: blank-canvas paralysis. However, creators must navigate strict commercial trade-offs: total platform lock-in with zero source code export, heavy DOM footprint requiring deliberate performance tuning for mobile Core Web Vitals, and noticeable renewal price jumps after initial annual discounts.',
  company: 'Wix.com Ltd.',
  officialUrl: 'https://www.wix.com/ai-website-builder',
  status: 'Active, globally deployed, and continuously updated with Wix Studio responsive AI and Aria agent capabilities.',
  targetUsers: [
    'Small business owners and solo entrepreneurs needing an all-in-one transactional web presence without coding',
    'Freelancers and digital agencies delivering client websites with rapid turnaround via Wix Studio',
    'Service professionals, consultants, and clinics requiring integrated appointment scheduling and client intake',
    'Boutique e-commerce merchants seeking unified inventory, shipping, and automated sales tax management',
    'Marketing teams scaffolding landing pages, event registration hubs, and lead generation campaigns'
  ],
  problemSolved: 'Eliminates the weeks-long, multi-tool friction of building a modern business website. Instead of hiring separate copywriters, graphic designers, and front-end developers—or gluing together separate CMS, booking, and payment plugins—Wix AI converses with users to establish business goals, generating a complete, functional website equipped with transactional backends in under 10 minutes.',
  howItWorks: 'Users engage in a conversational onboarding chat where the AI asks targeted questions regarding business type, niche, services offered, brand voice, and aesthetic style. The engine synthesizes these inputs, selecting optimal page hierarchies, generating tailored textual copy, curating visual media, and pre-installing relevant operational apps (such as appointment schedulers or shopping carts). Once the initial draft is generated, the user seamlessly transitions into the visual drag-and-drop Wix Editor (or Wix Studio for advanced CSS control), where sections, palettes, typography, and code can be granularly customized or regenerated via in-editor AI assistants.',
  features: [
    {
      name: 'Conversational Site Generator',
      detail: 'An interactive AI interview wizard that turns natural language intent into a fully structured, responsive, multi-page website complete with custom navigation, contact forms, and starter copy.'
    },
    {
      name: 'Wix Studio Responsive AI',
      detail: 'Agency-grade tool that scans desktop layouts and automatically calculates complex flexbox, CSS grid, and percentage-based responsive rules across mobile, tablet, and widescreen breakpoints with a single click.'
    },
    {
      name: 'In-Editor AI Section Creator',
      detail: 'Allows creators to describe specific page modules (e.g., \'A 3-column pricing table with monthly/annual toggle and badge highlighting the recommended plan\') and generates styled, editable sections on the fly.'
    },
    {
      name: 'AI Copywriter & Tone Calibrator',
      detail: 'Embedded text generation utility capable of drafting compelling headlines, product descriptions, blog posts, and about pages tailored to specific brand tones, from formal corporate to playful startup.'
    },
    {
      name: 'AI Image Studio & Background Manipulator',
      detail: 'Integrates text-to-image generation, automated background removal, subject cutouts, and image enhancement directly within the media manager without requiring external software.'
    },
    {
      name: 'AI-Powered SEO Setup Checklist',
      detail: 'Analyzes site niche and location to generate custom keyword strategies, optimized title tags, meta descriptions, canonical URLs, and structured data schema to maximize Google search indexing speed.'
    },
    {
      name: 'Velo AI Code Assistant',
      detail: 'Developer-oriented conversational coding co-pilot integrated into the Velo IDE that writes clean JavaScript for custom animations, backend database hooks, third-party API fetches, and data transforms.'
    },
    {
      name: 'Native Business Application Scaffolding',
      detail: 'Automatically configures turnkey business modules during AI site generation, including Wix Stores (e-commerce), Wix Bookings (scheduling), Wix Restaurants, and Wix Events.'
    },
    {
      name: 'Aria AI Operational Agent',
      detail: 'An administrative assistant inside the Wix dashboard that surfaces business analytics, provides automated troubleshooting, suggests marketing automations, and executes operational store tasks.'
    },
    {
      name: 'Multi-Language AI Localization',
      detail: 'Translates entire sites into multiple languages while preserving layout integrity, typography hierarchy, and locale-specific metadata for international organic traffic.'
    }
  ],
  aiAndModels: 'Wix employs a hybrid multimodal AI architecture combining proprietary layout recommendation engines trained on tens of millions of live Wix websites with external state-of-the-art foundation models. Text and code generation leverage fine-tuned OpenAI GPT-4o models calibrated for conversion copywriting, SEO relevance, and Velo JavaScript conventions. Image generation and enhancement tap into custom-tuned diffusion models and specialized computer vision pipelines for precise object boundary detection and background removal.',
  inputsOutputs: 'Accepts natural-language prompts, business category descriptions, brand style preferences, target demographic parameters, and existing logo/media files. Outputs complete multi-page responsive websites, editable CSS grid layouts, dynamic database collections, search-optimized meta tags, transactional payment flows, and downloadable customer analytics reports.',
  limits: [
    'Absolute Vendor Lock-in: Wix does not provide code export functionality; sites cannot be downloaded as raw HTML/React or hosted on external clouds like Vercel, Netlify, or AWS.',
    'DOM Heaviness & Core Web Vitals: Because the drag-and-drop engine injects substantial client-side JavaScript, unoptimized sites with heavy media can struggle on mobile Google PageSpeed Insights without aggressive manual tuning.',
    'Generic First Draft Syndrome: While the initial AI structure is technically sound, raw generated copy and image selections often feel templated and require hands-on editorial refining to stand out.',
    'Steep Renewal Pricing: Promotional discounts for annual plans (often 50% off during introductory promos) revert to full sticker prices upon annual renewal, surprising budget-conscious site owners.',
    'Free Plan Commercial Restrictions: The free tier is strictly non-commercial, imposing a permanent Wix top-banner ad, a 500 MB storage cap, an unbranded subdomain, and no payment gateway integration.'
  ],
  useCases: [
    'Rapid Scaffolding for Local Service Businesses: Landscaping, dental clinics, salons, and consultants launching appointment booking and review hubs within hours.',
    'DTC Boutique E-commerce Stores: Solo merchants launching curated product catalogs with integrated payment processing, shipping rules, and abandoned cart automations.',
    'Freelance Client Site Delivery via Wix Studio: Web agencies leveraging Responsive AI to compress desktop-to-mobile responsive styling from 8 hours down to 15 minutes.',
    'Event & Conference Landing Portals: Rapidly assembling promotional landing pages featuring countdown timers, ticket purchasing, speaker bios, and RSVP automation.',
    'Professional Portfolios & Resume Sites: Photographers, architects, and copywriters generating visual showcase galleries with integrated client inquiry forms.',
    'Content Marketing & Niche Authority Blogs: Publishers building structured blog layouts with category filters, newsletter subscription popups, and automated social sharing.'
  ],
  poorFit: [
    'High-Throughput Custom Web Applications: SaaS platforms, complex social networks, or multi-tenant portals requiring custom backend frameworks (Node/Go/Python) and relational SQL databases.',
    'Full Code Ownership Purists: Engineering teams requiring Git-managed repositories, CI/CD deployment pipelines, and zero platform dependencies.',
    'Performance-Critical Headless Publishing: Media giants whose monetization relies strictly on sub-second mobile page loads and custom CDN edge rendering.',
    'Budget-Constrained Stores Expecting Zero Recurring Costs: Businesses unable to maintain ongoing $17 to $39/month hosting and maintenance fees once free trials expire.'
  ],
  pricing: [
    {
      name: 'Free Plan ($0/month)',
      detail: '$0/month. Includes full access to the conversational AI website builder, 500 MB storage, and 500 MB bandwidth. Sites carry prominent Wix advertising banners, operate on a Wix subdomain (username.wixsite.com), and cannot process online transactions.'
    },
    {
      name: 'Light Plan ($17/month billed annually)',
      detail: '$17/month (standard US annual rate). Removes Wix advertising, provides a free custom domain for 1 year, 2 GB storage, and 2 collaborator seats. Ideal for personal portfolios, CVs, and informational brochure sites without online payment needs.'
    },
    {
      name: 'Core Plan ($29/month billed annually)',
      detail: '$29/month. The entry-level commercial tier. Unlocks online payments, basic e-commerce (up to 50,000 products), 50 GB storage, 5 collaborator seats, and automated appointment scheduling via Wix Bookings.'
    },
    {
      name: 'Business Plan ($39/month billed annually)',
      detail: '$39/month. Tailored for scaling e-commerce brands. Includes 100 GB storage, 10 collaborator seats, automated sales tax calculation (Avalara integration), multi-currency pricing, customer loyalty programs, and advanced marketing automations.'
    },
    {
      name: 'Business Elite Plan ($159/month billed annually)',
      detail: '$159/month. High-capacity enterprise tier offering unlimited storage, up to 100 team collaborator seats, advanced custom analytics reports, developer access to Wix Headless, and priority VIP customer care.'
    },
    {
      name: 'Wix Studio Plans for Agencies ($19 - $159/month)',
      detail: 'Tailored for agencies and freelance designers. Studio Standard ($19/mo, 10 GB), Studio Plus ($32/mo, 50 GB), and Studio Elite ($159/mo, unlimited) feature full access to Responsive AI layout engines, reusable design libraries, and multi-client workspaces.'
    },
    {
      name: 'Total Cost of Ownership & Renewal Considerations',
      detail: 'Wix frequently runs 50% promotional discounts for first-time annual subscriptions. Merchants should budget for standard full renewals (~$204/yr for Light, ~$348/yr for Core, ~$468/yr for Business), plus standard custom domain renewals ($15-$20/yr) after year one.'
    }
  ],
  integrations: [
    'Wix App Market (over 500 third-party extensions for marketing, accounting, and CRM)',
    'Payment Gateways (Wix Payments, Stripe, PayPal, Square, Klarna, Afterpay, Apple Pay)',
    'Google Workspace, Google Analytics 4, Google Search Console, and Google Tag Manager',
    'Meta Pixel, TikTok Pixel, Pinterest Tag, and LinkedIn Insight Tag',
    'Mailchimp, Klaviyo, HubSpot, and Zapier for automated lead routing',
    'Print-on-demand fulfillment partners (Printful, Printify)',
    'Avalara automated sales tax compliance and QuickBooks accounting integration'
  ],
  developer: [
    'Velo by Wix: Full-stack JavaScript development platform with built-in serverless runtime and visual IDE',
    'Wix Studio Advanced CSS: Granular control over custom CSS classes, custom CSS variables, and bespoke keyframe animations',
    'Wix Headless APIs: REST and GraphQL SDKs to use Wix business logic (Stores, Bookings, Members) with custom Next.js/Remix frontends',
    'Velo AI Code Assistant: Natural language JavaScript generation for frontend UI interactions and backend events',
    'Custom Database Collections: Create structured dynamic schemas with relational references, permissions, and webhook hooks'
  ],
  privacy: 'Wix maintains rigorous global data compliance standards, including GDPR, CCPA/CPRA, and LGPD compliance, holding ISO 27001, ISO 27017, ISO 27018, and SOC 2 Type II enterprise certifications. End-user business information, visitor interactions, and transaction records processed via Wix AI are strictly segmented and not utilized to train third-party public foundation models.',
  ownership: 'Site owners maintain 100% intellectual property rights over their domain name, branded graphic assets, product databases, client lists, and text content published on the platform. However, the underlying proprietary Wix CMS code, templates, and serverless hosting architecture remain proprietary licensed SaaS, meaning the codebase cannot be exported or migrated independently.',
  alternatives: [
    {
      name: 'Framer AI',
      detail: 'A design-first visual web builder featuring generative layout prompts and rapid visual prototyping ($10-$30/month). Framer produces slicker modern animations and superior canvas flexibility, but lacks Wix\'s out-of-the-box native business backends like integrated booking schedules, enterprise invoicing, and POS.'
    },
    {
      name: 'Hostinger AI Builder',
      detail: 'An ultra-budget-friendly AI site builder bundled with shared web hosting ($2.99-$3.99/month introductory). Hostinger provides rapid AI generation and unbeatable pricing, but offers a significantly simpler feature set, fewer third-party integrations, and limited scaling capabilities compared to Wix.'
    },
    {
      name: 'Squarespace Blueprint AI',
      detail: 'The primary direct competitor in curated lifestyle and portfolio design ($16-$52/month). Squarespace provides tighter typographic guardrails and cleaner default templates, but Wix AI offers greater unstructured layout freedom, a superior app market, and more advanced agency tooling via Wix Studio.'
    },
    {
      name: 'Webflow AI',
      detail: 'The premier visual development platform for professional engineers and web designers ($14-$39/month). Webflow provides clean semantic HTML/CSS code export, CMS collections, and maximum performance, but has a steep learning curve and lacks Wix\'s turnkey conversational setup.'
    },
    {
      name: 'Durable AI',
      detail: 'A speed-focused 30-second AI website builder designed for solopreneurs ($12-$20/month). Durable excels at instantaneous single-page generation with integrated CRM and invoicing, but lacks the deep design customization, multi-page complexity, and vast app ecosystem of Wix.'
    }
  ],
  strengths: [
    'Unbeatable All-in-One Business Backend: Generates not just visual pages, but pre-configured booking calendars, e-commerce checkouts, and customer contact pipelines.',
    'Studio Responsive AI: Solves the most tedious problem in web design by automatically calculating fluid responsive CSS across every breakpoint.',
    'Drag-and-Drop Post-Generation Freedom: Zero code constraints; users can freely reposition, restyle, and tweak any element on the visual canvas after AI scaffolding.',
    'Rich Velo Developer Extensibility: Full JavaScript API access allows technical teams to build custom logic on top of AI-generated pages.',
    'Comprehensive Free Tier: Allows complete site construction and experimentation without entering credit card details.'
  ],
  limitations: [
    'Zero Code Export: Extreme platform dependency; if you outgrow Wix, the site cannot be packaged into a Git repository or self-hosted.',
    'Client-Side Script Bloat: Mobile PageSpeed scores require vigilant asset optimization due to Wix\'s heavy JavaScript runtime layer.',
    'AI Text Requires Manual Editing: Initial copy can sound generic and promotional without specific merchant guidance and revision.',
    'Aggressive Annual Renewal Price Increases: Introductory discounts expire, causing recurring operational costs to double or triple after year one.',
    'Steep Learning Curve in Wix Studio: While standard Wix AI is effortless, mastering the full Studio workspace with responsive CSS logic takes considerable practice.'
  ],
  workflow: [
    '1. Conversational Scoping & Brand Prompting: Input: Business name, industry category, core value proposition, location, and aesthetic mood (e.g., \'Modern minimalist ceramic studio in Austin offering in-person pottery workshops and handmade tableware\'). Action: Initiate the Wix AI onboarding wizard, answer interactive refinement questions regarding needed pages (Shop, Workshop Bookings, About, Contact), and review suggested color palettes and typography pairings. Quality Gate: Ensure exact business goals and service types are specified during the chat to guarantee relevant functional modules (Bookings vs Stores) are automatically provisioned.',
    '2. Structural Review & AI Section Expansion: Input: Generated multi-page site draft. Action: Review the global site navigation, header layout, and footer. Use the in-editor \'Generate Section\' AI tool to inject specialized content modules, such as a customer testimonial carousel or a 3-tier workshop pricing table. Quality Gate: Verify that header CTA buttons link directly to conversion targets (e.g., /book-online or /shop) rather than placeholder anchors.',
    '3. Copy Customization & Media Optimization: Input: Specific business policies, product specs, and authentic studio photography. Action: Select generated text blocks and use the AI Copywriter to refine tone, replacing generic marketing adjectives with actual materials and workshop schedules. Upload authentic brand imagery into the Media Manager and utilize the AI Background Remover to isolate product photos for clean transparent catalog thumbnails. Quality Gate: Manually proofread all copy to confirm that fabricated services or inaccurate pricing generated by the LLM are eliminated.',
    '4. Operational App Configuration & Payment Setup: Input: Service catalog, appointment availability, pricing tiers, and merchant banking credentials. Action: Access Wix Bookings and Wix Stores from the dashboard, set service durations, define staff calendars, configure domestic/international shipping rules, and connect Wix Payments or Stripe. Quality Gate: Conduct a live end-to-end sandbox checkout and test booking appointment to confirm email notifications and payment webhooks fire accurately.',
    '5. Responsive Breakpoint QA, SEO Checklist & Custom Domain Launch: Input: Target keywords, custom domain name, and social share assets. Action: Open the Wix Studio Responsive AI tool to automatically optimize layouts across tablet and mobile viewports. Execute the 3-step Wix SEO Setup Checklist to generate meta titles, descriptions, and structured business schema. Finally, upgrade to a Core or Business plan, connect the custom domain, verify SSL certificate provisioning, and submit the sitemap to Google Search Console. Quality Gate: Audit the mobile site on PageSpeed Insights and physical mobile devices to confirm zero horizontal scroll overflow and touch-friendly tap targets.'
  ],
  takeaway: 'Wix AI delivers the ideal compromise between instantaneous AI website scaffolding and deep, long-term business operational capability. Unlike ephemeral landing page generators that leave creators stranded without backends, Wix AI builds directly upon a proven ecosystem of native booking systems, payment gateways, and CRM tools. While agencies and developers must accept platform lock-in and carefully manage mobile script performance, Wix AI is the most reliable, complete website creation solution for small businesses and non-technical founders seeking an operational web presence in 2026.',
  sources: [
    {
      title: 'Wix AI Website Builder Official Overview',
      publisher: 'Wix.com',
      url: 'https://www.wix.com/ai-website-builder',
      type: 'official'
    },
    {
      title: 'Wix Studio AI & Responsive CSS Generation',
      publisher: 'Wix Studio',
      url: 'https://www.wix.com/studio/ai',
      type: 'official'
    },
    {
      title: 'Wix Website Builder Pricing & Plans 2026',
      publisher: 'Wix Help Center',
      url: 'https://support.wix.com/en/article/wix-pricing-plans-overview',
      type: 'official'
    },
    {
      title: 'Wix AI Website Builder In-Depth Review & Performance Benchmarks',
      publisher: 'Website Builder Expert',
      url: 'https://www.websitebuilderexpert.com/website-builders/wix-ai-review/',
      type: 'independent'
    },
    {
      title: 'Wix Studio vs Framer vs Webflow: Modern Responsive Web Tools Compared',
      publisher: 'TechRadar Pro',
      url: 'https://www.techradar.com/pro/best-website-builder',
      type: 'independent'
    }
  ]
};
