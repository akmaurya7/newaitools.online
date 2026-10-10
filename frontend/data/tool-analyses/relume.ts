import type { ToolAnalysis } from './types.ts';

export const relumeAnalysis: ToolAnalysis = {
  lastVerified: '2026-10-10',
  summary:
    'Relume is an industry-leading AI-powered website architecture, interactive wireframing, and component design platform engineered to help web designers, Webflow developers, UX agencies, and product teams slash the time required to plan and launch marketing websites by 80% to 90%. Founded in 2021 by Dan Anisse and Zsolt Kocsmarszky in Sydney, Australia, Relume disrupted web design by combining prompt-driven AI information architecture (IA) with an expansive library of over 1,000 production-ready, responsive UI components built on Finsweet\'s industry-standard Client-First CSS naming convention. Rather than attempting unstructured, hallucinated HTML code generation, Relume acts as an intelligent visual orchestrator: it transforms simple text prompts, brand briefs, or existing website URLs into comprehensive multi-page sitemaps and high-fidelity wireframes that can be instantly synced or copy-pasted into Figma, Webflow, and React/Tailwind codebases. By providing a common architectural foundation that bridges early client discovery, visual wireframing, and front-end engineering, Relume eliminates blank-canvas paralysis, eliminates client scope creep, and establishes itself as an indispensable design accelerator for the modern digital creator economy.',
  company: 'Relume Technologies Pty Ltd (Sydney, Australia)',
  officialUrl: 'https://www.relume.ai/',
  status:
    'Active; global SaaS design platform and component library serving over 500,000 web designers, Webflow developers, freelance agencies, and venture-backed design teams worldwide.',
  targetUsers: [
    'Webflow developers and visual engineers who need clean, standardized, responsive layouts conforming to Finsweet\'s Client-First framework without manually configuring classes and containers from scratch',
    'UX/UI designers and product teams in Figma who want to rapidly assemble wireframes, validate user flows, and transition prototypes to clients without getting bogged down in low-level layout drafting',
    'Digital agencies and freelance studios managing high-velocity client engagements who require rapid sitemap validation, wireframe approvals, and structured copy before initiating custom styling',
    'Full-stack developers and indie hackers building marketing landing pages who want to export clean React and Tailwind CSS components or leverage the Relume Library Model Context Protocol (MCP) in Claude',
    'Startup founders and marketing leads who need to visualize new product positioning, outline multi-page website navigation, and generate initial UX copy drafts in minutes rather than weeks'
  ],
  problemSolved:
    'Designing marketing websites traditionally suffers from severe structural friction: teams waste dozens of hours drafting manual sitemaps in Miro or FigJam, struggle with blank-canvas wireframing, debate page flows with indecisive clients, and then recreate layouts in Figma before rebuilding them yet again in Webflow or React. This disjointed pipeline frequently leads to scope creep, mismatched class structures, broken responsive breakpoints, and blown project budgets. Conversely, pure-play AI website generators (like raw prompt-to-HTML tools) produce fragile, non-standard code that professional developers cannot easily maintain or customize. Relume solves this systemic problem by combining AI reasoning with human-crafted component discipline. In under 60 seconds, Relume\'s AI Sitemap Builder ingests a project brief to generate a logical information architecture tree, outlines page-by-page section hierarchies, populates them with context-aware copywriting, and maps each section to a standardized, responsive component from its 1,000+ UI library. Teams can validate wireframes with stakeholders early, make structural iterations instantly, and export pixel-perfect, Client-First layouts directly into Figma, Webflow, or React, compressing multi-week discovery phases into single-afternoon design sprints.',
  howItWorks:
    'Relume operates through a multi-stage structural synthesis and layout orchestration pipeline: First, when a user inputs a natural language prompt, project brief, or reference URL, Relume\'s AI engine (leveraging OpenAI GPT-4o and Anthropic Claude models) analyzes the brand positioning, core audience, value proposition, and user journey to generate a complete visual sitemap. This sitemap establishes page hierarchies, navigational menus, and page-specific section outlines (Hero, Social Proof, Feature Grid, Pricing Matrix, FAQ, and CTA blocks). Second, the AI Wireframe Generator translates every mapped section into an interactive, low-fidelity wireframe by matching the section intent against Relume\'s repository of 1,000+ pre-built, accessible UI components. Third, the system generates context-specific UX microcopy and headlines tailored to the client\'s industry, providing an immediate working draft rather than generic Lorem Ipsum. Fourth, designers and developers can customize sections within the Relume visual canvas, swapping component variations (e.g., alternating between a 3-column card grid and an interactive tabbed layout) with a single click. Finally, Relume enables frictionless cross-platform export: users can push the wireframes directly into Figma via the official Relume Figma Plugin, copy-paste layouts into Webflow using the Relume Chrome Extension with automatic Client-First class syncing, export JSX/Tailwind code for React applications, or connect AI coding assistants directly via the Relume Library MCP server.',
  features: [
    {
      name: 'AI Sitemap Builder & Information Architecture Generator',
      detail:
        'Converts natural-language prompts, existing website URLs, or uploaded project documents into comprehensive, multi-page visual sitemaps with page descriptions, navigation flows, and custom section breakdowns in seconds.'
    },
    {
      name: 'AI Wireframe Builder with Contextual Copywriting',
      detail:
        'Transforms structural sitemaps into responsive, low-fidelity page wireframes populated with industry-relevant headlines, body copy, and CTA text, eliminating placeholder filler and accelerating client sign-off.'
    },
    {
      name: '1,000+ Production-Ready Client-First Component Library',
      detail:
        'Provides an extensive design system of accessible, responsive UI blocks across headers, feature sections, testimonial sliders, pricing tables, and footers, strictly adhering to Finsweet\'s Client-First CSS convention.'
    },
    {
      name: 'Direct Figma & Webflow Ecosystem Sync',
      detail:
        'Enables 1-click clipboard pasting into Webflow with synchronized class names and SVG icons via the Chrome Extension, alongside native auto-layout vector component syncing in Figma.'
    },
    {
      name: 'Relume Library MCP Server (Model Context Protocol)',
      detail:
        'Allows AI coding assistants (including Claude Desktop, Cursor, and custom agent workflows) to directly query, inspect, and incorporate Relume\'s React and Tailwind component library inside local code editors.'
    },
    {
      name: 'Relume Publish & Zero-Configuration Hosting',
      detail:
        'Offers direct hosting capabilities for rapid landing page deployment with custom domains, free SSL certificates, built-in forms, SEO metadata management, and clean white-label delivery.'
    },
    {
      name: 'Interactive Section Swapper & Component Variation Engine',
      detail:
        'Permits instant visual iteration inside the canvas by browsing alternative layout variations for any wireframe block without losing contextual copy or page positioning.'
    },
    {
      name: 'Multi-User Team Workspaces & Live Client Commenting',
      detail:
        'Supports collaborative real-time editing, shared company component libraries, permission management, and interactive client feedback directly on wireframe layouts.'
    }
  ],
  aiAndModels:
    'Relume employs a proprietary layout-matching algorithm coupled with state-of-the-art foundation language models, primarily OpenAI GPT-4o and Anthropic Claude 3.5 Sonnet. Rather than prompting models to generate arbitrary visual code from scratch, Relume uses LLMs strictly for high-level semantic reasoning: extracting information architecture from briefs, identifying optimal user journeys, writing context-specific marketing copy, and selecting the most appropriate UI layout archetype from Relume\'s curated, human-engineered component catalog. This structured hybrid approach guarantees 100% syntactical validity, responsive perfection, and strict adherence to semantic HTML without the visual drift or code bloat typical of unstructured generative website tools.',
  inputsOutputs:
    'Inputs: Natural-language project descriptions, company URLs, brand briefing notes, user persona parameters, sitemap structural adjustments, and custom section prompt instructions. Outputs: Visual multi-page website sitemaps (viewable online or exportable as PNG/PDF), interactive responsive low-fidelity wireframes, fully auto-layout native Figma components, production-ready Webflow DOM elements with Finsweet Client-First CSS classes, clean React JSX and Tailwind CSS code snippets, and structured component context via Model Context Protocol (MCP).',
  limits: [
    'Not a Turnkey Visual Theme: Relume generates structural wireframes and unstyled layout components; it does not generate full color palettes, brand typography, 3D graphics, or final production styling, requiring designers to apply visual skins in Figma or Webflow.',
    'Figma-to-Webflow Plugin Translation Bugs: Exporting from Relume into Figma and then attempting to use the Figma-to-Webflow plugin can break auto-layouts or introduce redundant CSS classes; industry best practice is pasting wireframes directly from Relume into Webflow and skinning them natively.',
    'Requires Understanding of CSS & Client-First: Beginners without foundational knowledge of the CSS box model, flexbox, grid, and Finsweet\'s class naming rules can easily create class clutter when modifying exported Webflow layouts.',
    'Static Layout Orientation: Relume excels at structural marketing pages and landing page layouts; it does not automatically configure dynamic Webflow CMS collections, database relationships, or complex user authentication flows.',
    'Free Plan Project Restraints: The Free tier is strictly limited to 1 project and 1 page with read-only Figma export links, requiring paid subscriptions for multi-page export and Webflow integration.'
  ],
  useCases: [
    'Client Discovery & Rapid Information Architecture Validation: Pitching prospective clients with complete, interactive multi-page sitemaps and wireframes within 24 hours of receiving an initial project RFP',
    'Webflow Development Acceleration for Digital Agencies: Pasting pre-built Client-First components directly into Webflow projects to bypass days of repetitive layout assembly and focus exclusively on custom interactions',
    'Figma Wireframing & UX Prototyping: Assembling desktop and mobile wireframes in Figma using native auto-layouts to iterate navigation flows and secure stakeholder approvals before high-fidelity visual design',
    'Component-Driven React & Tailwind Front-End Engineering: Utilizing the Relume component library and Relume MCP server in Claude or Cursor to scaffold responsive marketing landing pages in modern web apps',
    'Marketing Campaign & Landing Page Experimentation: Brainstorming fresh conversion funnels, testing new headline positioning, and spinning up dedicated landing pages with Relume Publish hosting',
    'Design System Standardization Across Distributed Teams: Establishing a shared organizational component baseline across junior designers and senior developers to maintain class naming and structural consistency'
  ],
  poorFit: [
    'Complete non-technical novices seeking a 1-click turnkey website builder with automated hosting and zero CSS learning curve (Wix, Squarespace, or Hostinger AI are better suited)',
    'Complex SaaS web applications requiring deep dynamic state management, custom database schemas, and authenticated backend workflows (tools like Supabase, Bolt.new, or Lovable are required)',
    'Experimental, non-standard digital art projects and bespokeWebGL portfolios where conventional grid-based component structures feel constraining',
    'Low-volume creators who only build a personal portfolio once every few years and cannot justify an ongoing $18-$40/month software subscription'
  ],
  pricing: [
    {
      name: 'Free Plan ($0 / Month)',
      detail:
        'Ideal for exploring the tool and testing AI sitemapping. Includes 1 project, up to 1 page, Figma-only export via read-only share links, access to 30 starter Webflow and React components, 1,000+ Figma components, and standard AI capacity (1 basic site outline per month).'
    },
    {
      name: 'Starter Plan ($18 / Month billed annually or $26 / Month billed monthly)',
      detail:
        'Designed for solo freelancers and independent creators. Includes 1 active project, up to 5 pages per project, full export to Figma, Webflow, and React/Tailwind, access to the complete 1,000+ component library across all frameworks, design system export to Claude, and commenting features.'
    },
    {
      name: 'Pro Plan ($40 / Month billed annually or $58 / Month billed monthly)',
      detail:
        'The flagship plan for active freelance designers, Webflow developers, and design studios. Includes unlimited projects, unlimited pages, full multi-framework export, up to 20x AI generation capacity, premium AI model access, advanced image generation in wireframes, and the Webflow Chrome Extension with Class Sync.'
    },
    {
      name: 'Team Plan ($36 / Seat / Month billed annually, minimum 3 seats)',
      detail:
        'Engineered for agency teams and growing studios. Includes all Pro features, unlimited projects and pages, centralized billing, team-wide component sharing, workspace permission controls, and account-wide generation usage analytics.'
    },
    {
      name: 'Relume Publish Hosting ($0 - $12 / Site / Month)',
      detail:
        'Direct live hosting addon. Free tier hosts on a *.relumesite.ai subdomain up to 1,500 monthly page views with Relume branding. Launch tier ($12/site/month billed annually at $144/year) provides custom domain connection, free SSL, 6,000 monthly page views, 100% white-label branding, and unlimited form submissions.'
    }
  ],
  integrations: [
    'Webflow: Native clipboard copy-paste integration and official Chrome Extension with automated Finsweet Client-First CSS class synchronization and SVG icon conversion',
    'Figma: Official Relume Figma Plugin providing instant vector wireframe import, auto-layout compatibility, and typography system mapping',
    'React & Tailwind CSS: Direct code export for frontend engineers seeking accessible, responsive component JSX and utility classes',
    'Claude Desktop & AI Coding Agents: Native Relume Library Model Context Protocol (MCP) server enabling Claude and Cursor to query and generate Relume components directly in local IDEs',
    'Finsweet Client-First: 100% structural alignment with the web industry\'s most popular CSS style guide and class-naming methodology',
    'Google Chrome: Dedicated browser extension for seamless one-click component transfer directly into the Webflow Designer canvas'
  ],
  developer: [
    'Relume Library MCP Server: Open protocol implementation allowing LLMs to inspect component metadata, retrieve JSX code, and assemble production-grade front-end layouts',
    'Finsweet Client-First Class Architecture: Clean, semantic CSS naming convention preventing stylesheet conflicts and ensuring maintainable codebases',
    'JSON Sitemap & IA Export: Programmatic export of website tree structures for integration with custom headless CMS platforms and content planning tools',
    'Tailwind CSS Utility Code: Clean, modular React component templates with fully customizable responsive Tailwind classes'
  ],
  privacy:
    'Relume adheres to rigorous enterprise data protection standards. All data in transit is encrypted using TLS 1.3, and customer project data is stored with AES-256 encryption at rest. The platform is compliant with GDPR and SOC 2 Type II compliance frameworks. Relume maintains a strict zero-training policy: customer project briefs, proprietary sitemaps, custom component modifications, and client data are never used to train public AI foundation models.',
  ownership:
    'Users retain 100% full intellectual property ownership, copyright, and commercial rights over all generated sitemaps, wireframes, custom copy, and exported code. Components from the Relume Library can be used across unlimited personal and commercial client websites without licensing fees or ongoing royalty obligations.',
  alternatives: [
    {
      name: 'Webflow ($14 - $39+ / Month)',
      detail:
        'The premier visual web development platform. While Relume is the structural planning and wireframing engine, Webflow is the visual development canvas where Relume layouts are styled, animated, connected to CMS collections, and published to production.'
    },
    {
      name: 'Framer ($5 - $30+ / Month)',
      detail:
        'A powerful visual website builder with native AI design generation and high-fidelity animations. Framer focuses on rapid visual publishing without strict class architecture, making it faster for non-developers but less modular than Relume\'s Client-First Webflow workflow.'
    },
    {
      name: 'Figma AI ($12 - $75+ / Month)',
      detail:
        'The industry-standard collaborative interface design software. Figma AI introduces generative wireframes and layout tools, serving as the visual destination where Relume wireframes are transformed into high-fidelity branded design mockups.'
    },
    {
      name: 'v0 by Vercel (Free - $20+ / Month)',
      detail:
        'Generative AI interface tool focused on developer-first React and Tailwind code generation. v0 excels at dynamic application UI components, whereas Relume focuses on complete marketing website information architecture and Webflow deployment.'
    },
    {
      name: 'Bolt.new (Free - $20+ / Month)',
      detail:
        'Browser-based full-stack AI development environment capable of running Node.js and full-stack web applications in WebContainers, catering to interactive web apps rather than marketing site wireframing.'
    }
  ],
  strengths: [
    'Revolutionary Time Savings: Cuts the website discovery, sitemapping, and wireframing phase from 2-3 weeks down to a single afternoon for agencies and freelancers',
    'Strict Client-First CSS Discipline: Eliminates messy, unstructured AI code by generating clean, maintainable layouts that Webflow developers can inspect and customize with confidence',
    'Expansive 1,000+ Component System: Enormous variety of production-ready sections ensuring layouts look professional and well-proportioned across desktop, tablet, and mobile',
    'Frictionless Webflow & Figma Export: Direct 1-click clipboard transfer into Webflow via Chrome Extension and native auto-layout importing in Figma',
    'Groundbreaking MCP Integration: Pioneered the Relume Library Model Context Protocol server, connecting AI coding agents directly to standardized UI blocks in Claude and Cursor'
  ],
  limitations: [
    'Structural Wireframe Focus: Generates low-fidelity black-and-white wireframes; requires manual visual design, typography styling, and branding in Figma or Webflow',
    'Figma-to-Webflow Translation Quirks: Exporting from Figma into Webflow can cause layout discrepancies; directly pasting into Webflow remains the recommended path',
    'Requires CSS Box Model Proficiency: Modifying exported layouts without understanding flexbox and Client-First class structures can result in stylesheet bloat',
    'No Automated Dynamic CMS Setup: CMS collections, dynamic multi-reference fields, and blog archives must be configured manually inside Webflow',
    'Restricted Free Tier: Free plan is limited to 1 project and 1 page with read-only Figma sharing, requiring paid plans for professional agency deliverables'
  ],
  workflow: [
    '1. Project Brief Ingestion & AI Information Architecture Discovery: Input: Client discovery notes, target audience personas, value propositions, and core service offerings. Action: Open Relume AI Sitemap Builder, enter the project brief, and specify required page counts and target geography. The AI generates a multi-page sitemap tree detailing navigation menus, page relationships, and section-by-section content blocks. Output: Interactive visual sitemap outlining the entire website structure. Quality Gate: Review navigation flow with stakeholders to confirm all client business goals and user conversion funnels are represented.',
    '2. Page Wireframing & Section Archetype Optimization: Input: Approved visual sitemap. Action: Navigate to individual page wireframes within Relume. Inspect AI-selected section archetypes (Hero, Value Pillars, Metrics Grid, Testimonials, FAQ) and review generated UX copywriting. Use the Section Swapper to test alternative layout variations from the 1,000+ component library. Output: Responsive, low-fidelity page wireframes with context-aware microcopy across desktop and mobile breakpoints. Quality Gate: Ensure headline hierarchy follows semantic H1 > H2 > H3 standards and messaging directly addresses customer pain points.',
    '3. Stakeholder Collaboration & Wireframe Approval: Input: Assembled multi-page wireframes. Action: Generate an interactive Relume share link and invite clients and team members to review the wireframes. Collect contextual comments, revise section sequencing, and finalize copy before touching visual design software. Output: Signed-off wireframe prototype locked against scope creep. Quality Gate: Secure formal stakeholder approval on structural layouts and content before initiating high-fidelity styling.',
    '4. Direct Export to Webflow & Figma Vector Synchronization: Input: Approved Relume wireframes. Action: For visual design teams, import wireframes into Figma using the official Relume Figma Plugin to establish auto-layouts and typography scales. For visual development teams, use the Relume Chrome Extension to copy components directly from the web canvas and paste them into the Webflow Designer, letting the extension automatically synchronize Finsweet Client-First CSS classes and SVGs. Output: Fully functional, responsive Webflow layout structure or native Figma vector wireframe. Quality Gate: Verify that Webflow navigator hierarchy reflects clean semantic tags and all auto-layout constraints are intact.',
    '5. Client-First Visual Skinning & CMS Architecture: Input: Synchronized Webflow project structure. Action: Apply brand styling (color tokens, custom typography, button states, photography, and micro-interactions) according to Client-First class conventions. Build dynamic Webflow CMS collections for case studies, blogs, and team directories, linking them to Relume wireframe grids. Output: Polished, production-ready marketing website optimized for high performance and accessibility. Quality Gate: Run Lighthouse and Webflow audit to verify 95+ performance scores and complete responsive fidelity.',
    '6. Cross-Platform Directory Ecosystem Synergy: Maximize your digital agency and web creation workflow across the newaitools.online ecosystem: explore leading site generation platforms in /category/website-and-app-creation, master advanced visual development in /tool/webflow, streamline UI/UX prototyping in /tool/figma-ai, explore rapid publishing alternatives in /tool/framer, supercharge full-stack React code generation in /tool/v0 and /tool/bolt, build automated multi-agent design pipelines via /workflows, and discover proven web design strategies in /blog.'
  ],
  takeaway:
    'Relume is the premier structural accelerator for the modern web design and Webflow ecosystem. By combining generative AI information architecture with the discipline of Finsweet\'s 1,000+ Client-First component library, Relume bridges the historically painful gap between client discovery, wireframing, and production development. It does not replace the nuanced artistry of professional designers or the technical craft of Webflow developers; rather, it eliminates the tedious, non-billable hours spent constructing basic layouts from scratch. For web design agencies, freelance studios, and digital creators looking to ship higher-margin client projects in record time, Relume is an indispensable competitive advantage in 2026.',
  sources: [
    {
      title: 'Relume Official AI Site Builder, Sitemap Generator & Component Library Documentation',
      publisher: 'Relume Official Documentation',
      url: 'https://www.relume.ai/',
      type: 'official'
    },
    {
      title: 'Relume 2026 Pricing Plans, AI Generation Capacities & Hosting Tiers',
      publisher: 'Relume Official Pricing Portal',
      url: 'https://www.relume.ai/pricing',
      type: 'official'
    },
    {
      title: 'Relume Security, SOC 2 Compliance & Data Privacy Guidelines',
      publisher: 'Relume Trust Center',
      url: 'https://www.relume.ai/privacy-policy',
      type: 'official'
    },
    {
      title: 'Reddit r/webflow Community Review: Relume AI Wireframing, Client-First Class Architecture & Figma Sync',
      publisher: 'Reddit r/webflow Community Discussion',
      url: 'https://www.reddit.com/r/webflow/',
      type: 'independent'
    },
    {
      title: 'Best AI Website & App Creation Tools Directory (2026)',
      publisher: 'NewAITools Directory Category Reviews',
      url: 'https://www.newaitools.online/category/website-and-app-creation',
      type: 'independent'
    },
    {
      title: 'Webflow vs Framer vs Relume: The Modern No-Code Web Design Stack',
      publisher: 'NewAITools Directory Analysis',
      url: 'https://www.newaitools.online/tool/webflow',
      type: 'independent'
    }
  ]
};
