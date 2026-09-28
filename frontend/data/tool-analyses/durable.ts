import type { ToolAnalysis } from './types.ts';

export const durableAnalysis: ToolAnalysis = {
  lastVerified: '2026-09-28',
  summary: 'Durable is an AI business platform for small businesses and service professionals that combines fast website generation with hosting, SEO/GEO, CRM, bookings, payments, invoicing and AI agents.',
  company: 'Durable Technologies Inc.',
  officialUrl: 'https://durable.com/',
  status: 'Active. Durable currently positions the product as an all-in-one AI business platform, not only a website generator.',
  targetUsers: ['Solo founders and entrepreneurs', 'Freelancers and consultants', 'Local and service businesses', 'Small teams that want website, lead management and bookings in one system'],
  problemSolved: 'Durable reduces the setup work involved in getting a small business online and operating it. It combines website creation with customer capture, CRM, scheduling, payments, invoicing and visibility tools so a service business can avoid assembling a larger stack of separate products.',
  howItWorks: 'The current AI website flow asks for three pieces of business information and generates a functional starting site. The no-code editor then lets the owner change layouts, images, headings and fonts. From there, the same workspace can add SEO/GEO, CRM, bookings, payments, invoices and AI-agent workflows.',
  features: [
    { name: 'AI website generation', detail: 'Durable says its current generator creates a functional website after three business questions, then exposes it to a visual drag-and-drop editor.' },
    { name: 'No-code visual editing', detail: 'Users can edit text, replace images, add/remove/rearrange sections and adjust global colors, fonts and corners without writing the site from scratch.' },
    { name: 'SEO & GEO', detail: 'The platform combines conventional SEO with AI-search visibility features, including structured data, metadata optimization, directory listings, Google Business Profile connections, competitor analysis and visibility tracking.' },
    { name: 'CRM and lead handling', detail: 'Durable includes a built-in CRM for customer/lead records and paid plans add AI-assisted lead replies and automated capture workflows.' },
    { name: 'Bookings', detail: 'Service businesses can publish booking services, availability and intake questions, sync Google Calendar, and accept paid bookings on eligible plans.' },
    { name: 'Payments and invoices', detail: 'Durable provides business payments and invoicing alongside the site and CRM, with Stripe used for payment processing.' },
    { name: 'AI agents', detail: 'Current plans include agents for tasks such as blog publishing, lead responses, business questions, review-related work and visibility workflows, with plan-specific usage limits.' },
    { name: 'Custom code and embeds', detail: 'Durable remains a no-code platform but supports custom HTML/CSS/JavaScript through Embed sections and site integrations for cases the standard editor cannot cover.' },
    { name: 'Hosting and security', detail: 'Durable includes hosting, SSL, CDN delivery and stated DDoS/firewall protections rather than requiring users to manage web infrastructure separately.' }
  ],
  aiAndModels: 'Durable does not publicly document a fixed foundation-model roster or expose a general model selector for its website and business AI features. Its public materials describe AI capabilities by task—website generation, copy, chat, agents, image generation and search visibility—rather than naming a stable model/version. Treat model identity and benchmark claims as undisclosed unless Durable documents them.',
  inputsOutputs: 'Typical inputs are business name/type/location, site content, images, service details, customer/booking information and natural-language instructions. Outputs include generated website pages, copy, images, SEO metadata, business/marketing content, CRM responses and booking/payment workflows.',
  limits: [
    'The free plan uses a Durable subdomain and is limited to 5 generated images and 10 AI-chat messages per month.',
    'Launch is listed at $25/month on the current monthly pricing view, with the comparison table showing $22/month effective annual pricing; Grow is $49/month monthly and $41/month effective annual pricing.',
    'Current plan limits include 50 images/month on Launch and 500/month on Grow, with different AI-agent, lead and chat allowances by plan.',
    'Durable explicitly says it is not designed specifically for e-commerce, even though it says businesses have launched e-commerce sites on the platform.',
    'Durable does not provide extensive HTML customization; custom functionality is instead handled through supported code/embed areas.',
    'AI output can be incorrect, incomplete, misleading or outdated. Durable places responsibility for evaluating output on the customer.',
    'Third-party products can change or become unavailable, and Durable says it does not guarantee continued availability of third-party features.',
    'Stock imagery supplied through the service has separate licensing restrictions and is not owned by the customer as standalone image assets.'
  ],
  useCases: [
    'Launch a local service-business website with contact forms and lead capture.',
    'Create a consultant, coach, freelancer or agency site without starting from a blank canvas.',
    'Combine a marketing site with CRM and appointment scheduling.',
    'Accept service payments and manage invoices from the same business workspace.',
    'Improve local-search and AI-search visibility through SEO/GEO and directory management.',
    'Use AI agents for recurring marketing and lead-management tasks after the basic business setup is complete.'
  ],
  poorFit: [
    'Large, highly customized websites where developers need extensive source-code control.',
    'Complex e-commerce operations requiring a full-featured commerce platform and deep catalog/inventory workflows.',
    'Teams that require a transparent, selectable list of underlying AI models.',
    'Projects where long-term portability of the complete site implementation is more important than an integrated hosted platform.',
    'Sensitive workflows where the provider’s stated use of data for improving services and training machine-learning models is unacceptable without additional contractual controls.'
  ],
  pricing: [
    { name: 'Free', detail: '$0. Includes a Durable subdomain, SEO, secure hosting, unlimited traffic, CRM for up to 10 customers, 5 generated images/month and 10 AI-chat messages/month.' },
    { name: 'Launch', detail: '$25/month on the current monthly pricing page, or $22/month effective annual pricing. Adds custom domains, analytics, custom forms, advanced SEO/GEO, CRM, bookings, AI agents and higher AI usage.' },
    { name: 'Grow', detail: '$49/month monthly, or $41/month effective annual pricing. Adds unlimited team members, higher AI-agent limits, 500 images/month, unlimited AI chat and additional growth/visibility capabilities.' },
    { name: 'Important pricing note', detail: 'Durable’s live pricing page is the source of truth for current amounts and limits. Annual-equivalent prices are displayed separately from monthly billing prices, so the page should be rechecked before purchase.' }
  ],
  integrations: [
    'Google Calendar sync for bookings and availability.',
    'Google Business Profile connection for local-search visibility workflows.',
    'External domains and custom-domain management.',
    'Stripe for payments; Durable’s help documentation says Durable does not add an additional payment-processing fee beyond Stripe’s processing rates.',
    'Google Analytics and custom code/integrations through the website settings.',
    'Third-party widgets and services can be embedded through Durable’s Embed/custom-code sections.'
  ],
  developer: [
    'Durable is primarily a no-code hosted platform rather than a conventional developer framework.',
    'Custom HTML/CSS/JavaScript can be inserted through Embed sections and site-wide custom-code integrations.',
    'The current public product/help documentation does not expose a conventional public SDK or broad website-export API comparable to a developer-first web framework.',
    'Google Calendar, Google Business Profile, Stripe and embedded third-party services cover the main integration surface documented publicly.'
  ],
  privacy: 'Durable’s Privacy Policy was last updated October 13, 2025. It says Durable collects personal and usage data, may use collected data to train machine-learning models, and may use service providers to process data. Google Workspace API data is explicitly excluded from generalized AI/ML training under its stated Limited Use commitment. Data may be transferred internationally, including to Canada, and users can request access, correction, deletion and portability subject to the policy.',
  ownership: 'Durable’s October 2025 Terms state that customers retain ownership of Customer Data and that, between Durable and the customer, the customer owns AI Output, with Durable assigning its rights in that Output to the customer. The same terms say output may not be unique or accurate and the customer is responsible for evaluating it and ensuring it does not infringe third-party rights. Stock images have separate license restrictions and are not owned by the customer as standalone assets.',
  alternatives: [
    { name: 'Hostinger AI Website Builder', detail: 'A useful alternative when the priority is website building plus hosting and a more code-oriented AI builder path; Hostinger documents agentic website/app generation while Durable emphasizes an integrated small-business operating stack.' },
    { name: 'Framer', detail: 'More design-oriented and suitable when visual layout control and polished marketing-site design matter more than integrated CRM, bookings and invoicing.' },
    { name: 'Wix', detail: 'A broader website platform with a large app ecosystem and extensive site-management capabilities; Durable differentiates itself by tightly combining AI business setup with CRM, bookings and business operations.' },
    { name: 'WordPress', detail: 'Provides much greater ecosystem and implementation control through themes/plugins, but requires more setup and ongoing technical decisions than Durable’s hosted no-code approach.' }
  ],
  strengths: [
    'Very fast path from business description to a functioning website.',
    'Website, hosting, CRM, bookings, payments and invoices are integrated rather than requiring multiple accounts.',
    'Current SEO/GEO tooling goes beyond basic metadata and includes AI-search visibility and directory workflows.',
    'Useful fit for service businesses that want an online presence and operational tools together.',
    'No-code editor lowers the technical barrier for non-developers.'
  ],
  limitations: [
    'The platform trades low setup effort for less deep customization than developer-oriented builders.',
    'The underlying AI models are not transparently exposed as a stable public model catalog.',
    'Complex e-commerce and highly bespoke web applications are outside its core positioning.',
    'Provider and platform dependence matters because the product is a hosted SaaS system.',
    'AI-generated business copy, answers and marketing material still require human review for factual accuracy and brand fit.',
    'Privacy terms deserve careful review for businesses handling confidential information because the policy permits machine-learning training uses in general.'
  ],
  workflow: [
    '1. Define the business: provide the business type, name/location and the primary goal of the website.',
    '2. Generate the first site: let Durable create the initial structure, copy and visual direction.',
    '3. Human-review the foundation: correct business facts, services, pricing, contact details, imagery and calls to action before publishing.',
    '4. Configure operations: add CRM fields, services, booking availability, Google Calendar and payment settings where needed.',
    '5. Configure discoverability: review page titles, headings, structured data, local listings, Google Business Profile and AI-search visibility settings.',
    '6. Add automation carefully: enable appropriate agents for lead replies, content or visibility tasks and verify their outputs before relying on them for customer-facing communication.',
    '7. Test the live experience: check mobile layout, forms, booking, payments, domain, analytics and any embedded third-party widget from an actual visitor perspective.',
    '8. Revisit monthly: review leads, bookings, analytics and search visibility, then refine the site and automation rather than leaving generated content untouched.'
  ],
  takeaway: 'Durable is best understood as an AI-assisted small-business operating platform with a website at its center. Its main value is reducing the number of separate tools needed to launch and run a service business. The trade-off is that users who need deep source-level control, complex commerce or a transparent model stack will likely need a more flexible platform.',
  sources: [
    { title: 'AI Website Builder', publisher: 'Durable', url: 'https://durable.com/ai-website-builder', type: 'official' },
    { title: 'Pricing', publisher: 'Durable', url: 'https://durable.com/pricing', type: 'official' },
    { title: 'SEO & GEO', publisher: 'Durable', url: 'https://durable.com/seo-geo', type: 'official' },
    { title: 'Bookings', publisher: 'Durable', url: 'https://durable.com/bookings', type: 'official' },
    { title: 'Privacy Policy', publisher: 'Durable', url: 'https://durable.com/privacy-policy', type: 'official' },
    { title: 'Terms of Service', publisher: 'Durable', url: 'https://durable.com/terms-of-service', type: 'official' },
    { title: 'Durable’s Security Measures', publisher: 'Durable Help Center', url: 'https://help.durable.com/en/articles/11322245-durable-s-security-measures', type: 'official' },
    { title: 'Managing Bookings and Google Calendar Integration', publisher: 'Durable Help Center', url: 'https://help.durable.com/en/articles/14301472-managing-bookings-and-google-calendar-integration', type: 'official' },
    { title: 'Add and Customize an Embed Section with Custom Code', publisher: 'Durable Help Center', url: 'https://help.durable.com/en/articles/15199766-add-and-customize-an-embed-section-with-custom-code', type: 'official' },
    { title: 'Durable AI website builder review 2026', publisher: 'TechRadar', url: 'https://www.techradar.com/pro/software-services/durable', type: 'independent' }
  ],
};
