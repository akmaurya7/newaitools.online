import type { ToolAnalysis } from './types.ts';

export const hostingerAnalysis: ToolAnalysis = {
  lastVerified: '2026-09-27',
  summary:
    'Hostinger AI Builder is now an all-in-one website and browser-based web-app builder that combines a visual/manual builder with an agentic, prompt-driven development mode and managed hosting. The important distinction is that the agentic mode can generate the application code, file structure and backend, rather than only arranging a landing page.',
  company: 'Hostinger',
  officialUrl: 'https://www.hostinger.com/ai-builder',
  status:
    'Active and expanding. Hostinger’s current documentation covers both Manual and Agentic modes, integrated backend capabilities, Integrated AI, code editing/export, third-party API integrations and ongoing feature updates.',
  targetUsers: [
    'Beginners and small businesses that want a website without managing a traditional development stack.',
    'Solopreneurs and makers building browser-based tools such as planners, trackers, calculators and internal utilities.',
    'Developers who want AI to accelerate scaffolding, UI work and backend implementation while retaining access to code.',
  ],
  problemSolved:
    'It reduces the setup work normally required to turn a website or small web-app idea into a hosted product: choosing a stack, creating the initial UI, wiring common backend behavior, connecting services and publishing. It is less about replacing an engineering team and more about compressing the first implementation cycle into a conversational workflow.',
  howItWorks:
    'In Agentic mode, you describe the desired site or web app in natural language, optionally attach visual references, and iterate through chat. Hostinger says the agent generates code, file structure and backend functionality. The editor then exposes preview, visual editing, code and optional data views, so you can test and refine the generated project before publishing. Manual mode remains available for simpler drag-and-edit website work.',
  features: [
    {
      name: 'Manual + Agentic modes',
      detail:
        'Manual mode emphasizes visual editing of text, images and sections. Agentic mode is conversational and can build both websites and functional browser-based web apps.',
    },
    {
      name: 'Generated frontend and backend',
      detail:
        'The current Agentic workflow can generate application code, project structure and backend behavior. New projects can use Hostinger’s integrated backend for users, data, forms, email and file handling.',
    },
    {
      name: 'Visual refinement',
      detail:
        'Select & edit lets you target page elements directly and either edit them manually or ask AI to change the selected elements. Hostinger recommends visual editing for straightforward text and image changes.',
    },
    {
      name: 'Integrated AI inside projects',
      detail:
        'Integrated AI can add text and image generation/analysis capabilities to projects without requiring a separate OpenAI or Gemini account. Hostinger says text-to-text, text+image-to-text, text-to-text+image and text+image-to-text+image combinations are supported.',
    },
    {
      name: 'Hosting and publishing',
      detail:
        'The builder is tied to Hostinger hosting, domains and publishing, so the build-to-live workflow is handled inside the same platform rather than requiring a separate deployment service.',
    },
    {
      name: 'Code editor and export',
      detail:
        'Agentic projects expose a code editor and can be exported as a Node.js project using React and Vite. Export is useful for manual development or moving the frontend/logic elsewhere, but exported projects cannot be imported back into AI Builder for continued prompting.',
    },
    {
      name: 'Commerce and business integrations',
      detail:
        'Hostinger documents Stripe payments, ecommerce, Google AdSense, Mailchimp, Zapier and generic third-party APIs. Agentic mode can generate the backend code needed to call external APIs and keep credentials server-side.',
    },
  ],
  aiAndModels:
    'Hostinger does not present Agentic mode as a user-facing model-selection console. The product documentation describes a probabilistic AI system and says the platform automatically handles the AI layer. For Integrated AI, Hostinger documents text generation with cost-efficient models and image generation using Banana image-generation models; it also says users who want a specific external provider/model must bring that provider account and API key themselves. The exact underlying models for the core coding agent are not publicly specified in the current documentation reviewed here, so this page does not infer a model name.',
  inputsOutputs:
    'Primary inputs are natural-language prompts, optional voice-to-text, and visual references such as screenshots/images. Hostinger’s web-app guide also documents attaching PDFs as project references. Agentic visual references support JPEG, PNG, GIF, WebP, AVIF and ICO, with a maximum of 10 images per session and 15 MB per image. Outputs are hosted websites and browser-based web apps, including generated frontend code, backend logic and data functionality where enabled.',
  limits: [
    'Native iOS and Android applications are not currently supported; the target is websites and browser-based web apps.',
    'Hostinger explicitly lists 3D games, browser extensions, trading applications and banking applications as unsupported Agentic-mode use cases.',
    'The Agentic environment is not a conventional file-server environment: FTP, SFTP, SSH, File Manager, cron jobs and some traditional hosting controls are not available inside the builder environment.',
    'Direct GitHub code import is not supported in the Agentic environment.',
    'AI credit consumption is dynamic rather than a fixed cost per message. Complex code generation can consume materially more credits, and Select & edit changes can also consume credits.',
    'Changing the automatically selected technology stack can introduce compatibility issues, according to Hostinger.',
    'AI output is probabilistic: the same request can produce different results, and the agent can sometimes make broader changes than requested. Generated functionality still needs testing and review.',
    'An active eligible Hostinger hosting plan is required to create, publish and retain an AI Builder project; VPS hosting is not compatible with AI Builder.',
  ],
  useCases: [
    'Business and service websites with contact, lead-capture and marketing pages.',
    'Portfolios, event sites, booking-style experiences and membership-oriented sites.',
    'Small ecommerce projects and subscription flows using supported integrations such as Stripe.',
    'Browser-based internal tools such as project trackers, calculators, planners, dashboards and lightweight CRM-style utilities.',
    'AI-powered micro-tools that combine text and/or image input with generated responses.',
    'Rapid prototypes where getting a working hosted version matters more than designing every architectural detail by hand.',
  ],
  poorFit: [
    'Native mobile products that must ship through the App Store or Google Play.',
    'Systems that require unrestricted SSH/FTP access, custom server processes, cron-heavy infrastructure or low-level hosting control.',
    'Banking, trading or other high-risk systems where generated code and security controls require specialist engineering and formal review.',
    'Teams that need a mature Git-based import/development workflow inside the builder itself.',
    'Projects where exact, repeatable control over every implementation detail is more important than speed of generation.',
  ],
  pricing: [
    {
      name: 'Premium',
      detail:
        'Current US pricing page: $2.99/month equivalent on a 48-month upfront term ($143.52 total), renewing at $10.99/month. Includes up to 3 websites and 5 AI credits for website/app creation as shown on the current pricing page.',
    },
    {
      name: 'Unlimited',
      detail:
        'Current US pricing page: $3.99/month equivalent on a 48-month upfront term ($191.52 total), renewing at $16.99/month. Includes unlimited websites and 15 AI credits for website/app creation.',
    },
    {
      name: 'Cloud Startup',
      detail:
        'Current US pricing page: $7.99/month equivalent on a 48-month upfront term ($383.52 total), renewing at $25.99/month. Includes unlimited websites and 15 AI credits for website/app creation, plus higher hosting capacity.',
    },
    {
      name: 'India pricing',
      detail:
        'The India pricing page currently shows ₹149/month, ₹249/month and ₹599/month equivalent promotional rates for Premium, Unlimited and Cloud Startup respectively on 48-month upfront terms, with renewals shown as ₹449, ₹649 and ₹1,599/month. Prices and promotions are regional and can change.',
    },
    {
      name: 'Credits',
      detail:
        'AI Builder credits are dynamic: usage depends on the resources required by a request. Hostinger documents fractional deductions and says simple requests can consume less than one credit while heavier code generation can consume more. Additional AI credits can be topped up.',
    },
  ],
  integrations: [
    'Stripe for payments and subscriptions, including webhook-based flows.',
    'Google AdSense, Google Analytics and other marketing/analytics integrations documented by Hostinger.',
    'Mailchimp and Zapier through the integration workflow.',
    'Generic third-party REST/API services by supplying the provider documentation, credentials and desired behavior to the agent.',
    'Integrated backend for authentication, data storage, forms, email and uploaded files on newly configured projects.',
  ],
  developer: [
    'Default Agentic output is a Node.js backend with React and Vite on the frontend; Hostinger says you can request other technologies, but changing the default stack may create compatibility issues.',
    'A built-in code editor exposes most of the project code for technical users.',
    'Paid Agentic plans can export the generated code. Hostinger currently describes the export as a Node.js/React/Vite project.',
    'Custom API integrations are possible through generated backend routes and server-side environment variables.',
    'Hostinger documents Stripe webhooks and Express API routes for server-side event handling.',
    'There is no claim in the reviewed documentation of a conventional public Hostinger AI Builder SDK or a general-purpose API for remotely controlling the builder itself; this page therefore does not list one.',
  ],
  privacy:
    'Hostinger’s AI Builder Special Terms treat user inputs and generated outputs as Customer Content and state that customers retain ownership rights to their input/output to the extent permitted by law. The terms also state that Hostinger may process that content under its agreement and that users are responsible for legal, privacy and intellectual-property compliance. For AI Builder specifically, the reviewed material does not justify a blanket claim that every project input is private from all processing, so sensitive data should be handled according to the applicable Hostinger agreement, DPA and privacy documentation.',
  ownership:
    'Hostinger says paid AI Builder customers retain ownership rights in their input and output to the extent permitted by applicable law, and its pricing FAQ says paid Agentic users can download their code. The Special Terms explicitly warn that generated output is not guaranteed to be unique, original or free of third-party IP claims. In practice, commercial use still requires human review of generated code, images, text, trademarks and any supplied reference material.',
  alternatives: [
    {
      name: 'Wix AI',
      detail:
        'A comparable hosted AI website platform with a broader visual/business ecosystem. TechRadar’s comparison notes that Wix has deeper design customization and business tooling, while Hostinger emphasizes speed, hosting and lower introductory pricing.',
    },
    {
      name: 'Webflow',
      detail:
        'Better suited when design-system control and visual web development depth are central. Hostinger is more tightly coupled to its AI generation and hosting workflow.',
    },
    {
      name: 'Lovable / Replit',
      detail:
        'More developer-oriented choices for prompt-to-app workflows and iterative software development. Hostinger’s differentiator is the combined website builder, hosting, domain and managed publishing environment.',
    },
    {
      name: 'WordPress',
      detail:
        'A larger ecosystem when plugin choice, portability and CMS extensibility matter. Hostinger AI Builder is more opinionated and integrated, trading some infrastructure freedom for a simpler build-and-publish path.',
    },
  ],
  strengths: [
    'One workflow can cover idea → generated site/app → hosting → domain → publishing.',
    'Agentic mode goes beyond static page generation into code, backend and data-backed web applications.',
    'Visual editing and code editing give non-technical and technical users different ways to refine the same project.',
    'Third-party APIs and payment workflows are documented rather than being purely theoretical.',
    'Current documentation is unusually explicit about unsupported project types and technical boundaries.',
  ],
  limitations: [
    'The builder is opinionated and not a substitute for unrestricted server infrastructure or a conventional Git/SSH development environment.',
    'Dynamic AI credits make cost forecasting less predictable than a simple fixed request quota.',
    'Generated code and behavior require testing because Hostinger documents probabilistic output and possible overreach.',
    'The exact core coding-model provider/model is not publicly identified in the documentation reviewed for this profile.',
    'Export improves portability but breaks the prompt-driven editing loop: exported code cannot be re-imported into AI Builder for continued prompting.',
  ],
  workflow: [
    '1. Define the smallest useful version: audience, pages/screens, key data, authentication needs and the one workflow the app must perform correctly.',
    '2. Start in Agentic mode with a structured prompt and attach a wireframe, screenshot or content reference when visual fidelity matters.',
    '3. Let the builder generate the first working version, then test the real interactions rather than judging only the preview screenshots.',
    '4. Use Select & edit for small visual/text changes; use focused prompts for behavior or architecture changes instead of asking for many unrelated changes at once.',
    '5. Add integrations one at a time. Keep API keys and payment secrets in server-side environment variables, then test webhooks and failure paths before going live.',
    '6. Review generated code, authentication, authorization, validation, error handling and privacy behavior before exposing real customer data.',
    '7. Publish only after checking mobile behavior, domain configuration, forms, payments and the complete happy/error paths. Export the code if you need an external development or backup path.',
  ],
  takeaway:
    'Hostinger AI Builder is most useful when the goal is to get a credible website or small-to-medium browser-based web app from idea to hosted deployment quickly. Its current Agentic mode is materially more capable than a simple AI landing-page generator, but its managed environment, dynamic credits and documented technical boundaries mean it should be treated as an opinionated application-building platform rather than a replacement for unrestricted cloud infrastructure or a full engineering workflow.',
  sources: [
    {
      title: 'Hostinger AI Builder — product page',
      publisher: 'Hostinger',
      url: 'https://www.hostinger.com/ai-builder',
      type: 'official',
    },
    {
      title: 'Hostinger AI Builder — Agentic mode overview',
      publisher: 'Hostinger Support',
      url: 'https://www.hostinger.com/support/hostinger-ai-builder-agentic-mode-product-overview/',
      type: 'official',
    },
    {
      title: 'Hostinger AI Builder — pricing',
      publisher: 'Hostinger',
      url: 'https://www.hostinger.com/ai-builder/pricing',
      type: 'official',
    },
    {
      title: 'Hostinger AI Builder — technical specifications and limitations',
      publisher: 'Hostinger Support',
      url: 'https://www.hostinger.com/support/hostinger-ai-builder-agentic-mode-technical-specifications/',
      type: 'official',
    },
    {
      title: 'Hostinger AI Builder — integrated AI',
      publisher: 'Hostinger Support',
      url: 'https://www.hostinger.com/support/integrated-ai-in-hostinger-ai-builder-agentic-mode/',
      type: 'official',
    },
    {
      title: 'Hostinger AI Builder — third-party API integration',
      publisher: 'Hostinger Support',
      url: 'https://www.hostinger.com/support/how-to-integrate-a-third-party-api-into-your-hostinger-ai-builder-agentic-mode-website/',
      type: 'official',
    },
    {
      title: 'Hostinger AI Builder — export code',
      publisher: 'Hostinger Support',
      url: 'https://www.hostinger.com/support/10771345-hostinger-ai-builder-agentic-mode-how-to-export-code/',
      type: 'official',
    },
    {
      title: 'Hostinger AI Builder — Special Terms',
      publisher: 'Hostinger Legal',
      url: 'https://www.hostinger.com/legal/special-terms',
      type: 'official',
    },
    {
      title: 'Wix AI vs Hostinger AI Builder',
      publisher: 'TechRadar',
      url: 'https://www.techradar.com/pro/website-building/wix-ai-vs-hostinger-ai-builder',
      type: 'independent',
    },
  ],
};
