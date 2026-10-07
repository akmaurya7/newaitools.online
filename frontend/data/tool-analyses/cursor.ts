import type { ToolAnalysis } from './types.ts';

export const cursorAnalysis: ToolAnalysis = {
  lastVerified: '2026-10-07',
  summary: 'Cursor is an AI-first code editor and agentic development environment built by Anysphere as a high-performance fork of Visual Studio Code. It transforms software development from manual syntax typing into guided intent engineering through predictive multi-line autocomplete (Cursor Tab), multi-file agentic editing with terminal feedback (Composer), deep semantic codebase indexing (@codebase), dynamic model routing (Auto Mode), and Model Context Protocol (MCP) server integrations.',
  company: 'Anysphere, Inc.',
  officialUrl: 'https://cursor.com/',
  status: 'Active, high-growth AI development environment and enterprise agentic coding platform.',
  targetUsers: [
    'Full-stack engineers and backend/frontend developers building complex web, mobile, and cloud software',
    'AI engineers and data scientists prototyping machine learning pipelines, agents, and data scripts',
    'Technical leads and software architects conducting multi-file refactoring, debugging, and codebase audits',
    'Indie hackers, startup founders, and agency developers maximizing shipping velocity and product iteration',
    'Engineering organizations seeking enterprise-grade security, Privacy Mode enforcement, and SAML SSO'
  ],
  problemSolved: 'Cursor eliminates the friction and cognitive fragmentation of traditional software development. While standard coding assistants merely suggest single tokens or lines within an isolated file, Cursor indexes the entire repository, tracks cross-file symbol relationships, predicts multi-line edits before you type, and coordinates multi-file modifications in Composer while validating execution directly in your terminal.',
  howItWorks: 'Cursor operates as a native fork of VS Code, embedding an intelligent AI layer directly into the editor architecture. It continuously computes AST-aware embeddings and semantic indexes over your workspace (@codebase). Its Cursor Tab engine uses custom low-latency models to predict subsequent cursor movements and multi-line code diffs. For broader architectural tasks, Composer coordinates an agentic loop that generates multi-file diffs, executes terminal commands (like npm test or cargo check), detects compilation errors, and autonomously fixes issues before asking for review. Developers can route queries dynamically via Auto Mode or choose specific frontier models such as Claude 3.7 Sonnet, GPT-4o, GPT-5, Gemini 2.0 Pro, or DeepSeek.',
  features: [
    {
      name: 'Cursor Tab (Predictive Autocomplete)',
      detail: 'Next-generation autocomplete powered by custom low-latency models that predict entire multi-line blocks and anticipate cursor navigation across recent edits.'
    },
    {
      name: 'Composer (Multi-File Agentic Loop)',
      detail: 'A dedicated agentic workspace that can create, modify, and refactor code across dozens of files simultaneously, running terminal commands to verify changes.'
    },
    {
      name: 'Semantic Codebase Indexing (@codebase)',
      detail: 'AST-aware repository indexing and vector embeddings that allow developers to query architectural relationships, find references, and understand dependencies across massive codebases.'
    },
    {
      name: 'Contextual Mentions (@Files, @Docs, @Git, @Web)',
      detail: 'Precision prompt controls enabling developers to reference specific files, folders, git diffs, third-party library documentation, or live web search queries directly into chat.'
    },
    {
      name: 'Auto Mode & Smart Model Routing',
      detail: 'An intelligent routing engine that dynamically chooses between fast first-party models and heavy frontier LLMs based on prompt complexity, preserving user credit allowances.'
    },
    {
      name: 'Model Context Protocol (MCP) Integration',
      detail: 'Native support for MCP client connections, allowing Cursor agents to interact with local databases, GitHub APIs, Docker instances, and internal developer tools.'
    },
    {
      name: 'Bugbot & Automated PR Reviews',
      detail: 'Agentic CI/CD tool that scans pull requests for subtle runtime bugs, memory leaks, and architectural antipatterns before code merges.'
    },
    {
      name: 'Modular Rules for AI (.cursorrules & .cursor/rules)',
      detail: 'Project-level governance files that enforce custom code styles, architectural constraints, preferred libraries, and linting standards across all AI generations.'
    },
    {
      name: 'Background Cloud Agents',
      detail: 'Cloud-hosted execution sandboxes that autonomously resolve issue tickets, run test suites, and draft PRs asynchronously without interrupting local editor focus.'
    },
    {
      name: 'Seamless VS Code Parity',
      detail: 'One-click import for all VS Code extensions, themes, keybindings, settings, and workspace configurations with zero migration overhead.'
    }
  ],
  aiAndModels: 'Cursor uses a dual-pool model structure. The first-party Cursor Models pool powers low-latency tasks like Cursor Tab and Composer fast loops. The Other Models pool gives developers direct access to leading frontier models including Claude 3.7 Sonnet, Claude 3.5 Sonnet, Claude Opus, GPT-4o, GPT-5, Gemini 2.0 Pro/Flash, and DeepSeek V3/R1. Users can enable Auto Mode for automatic cost-effective routing or supply their own API keys (BYOK) for OpenAI, Anthropic, or Google.',
  inputsOutputs: 'Inputs include natural-language developer instructions, highlighted code selections, repository files, git diffs, terminal error logs, and connected MCP data sources. Outputs include multi-file code diffs, inline code completions, synthesized architectural explanations, shell commands, pull request reviews, and bug diagnoses.',
  limits: [
    'Hobby plan provides limited fast requests per month and basic Tab completions; heavy usage requires upgrading to paid tiers.',
    'Pro plan includes unlimited Cursor Tab and Auto Mode, plus a /month included credit pool for frontier models; intensive multi-turn agent loops can consume credits rapidly and switch to usage-based billing.',
    'Extremely large monorepos with hundreds of thousands of files require strategic indexing and .cursorignore rules to prevent token saturation.',
    'Autonomous agent loops in Composer can occasionally hallucinate subtle logic regressions if code diffs and terminal build logs are not verified by the developer.',
    'As a VS Code fork, upstream VS Code minor core updates and proprietary Microsoft Marketplace extensions may experience minor delivery delays.'
  ],
  useCases: [
    'Refactoring legacy codebases across dozens of interconnected modules and files simultaneously',
    'Accelerating greenfield application development from natural language architecture descriptions',
    'Diagnosing and fixing complex runtime errors, failing test suites, and build scripts using Composer terminal feedback',
    'Navigating and onboarding onto large unfamiliar repositories using @codebase semantic search',
    'Enforcing organizational coding standards and framework patterns using .cursorrules and .cursor/rules',
    'Connecting local PostgreSQL/SQLite databases and REST APIs via MCP servers for contextual schema-aware coding',
    'Reviewing GitHub pull requests automatically with Bugbot to catch logic errors before staging',
    'Generating unit, integration, and end-to-end test suites grounded in real repository implementations'
  ],
  poorFit: [
    'Engineering teams strictly mandated to use JetBrains IDEs (IntelliJ, PyCharm, WebStorm) who cannot switch to a VS Code-based environment',
    'Strictly air-gapped or offline development environments that prohibit any external cloud model network calls',
    'Workflows requiring 100% deterministic code output without developer code review or automated test gates',
    'Solo hobbyists seeking entirely free, unmetered frontier LLM usage without subscription or API token costs',
    'Teams with enterprise policies that prohibit using third-party forks of open-source editors'
  ],
  pricing: [
    {
      name: 'Hobby (Free)',
      detail: '/month. Basic Cursor Tab completions, limited agent requests per month, and a 14-day free trial of Pro features.'
    },
    {
      name: 'Start (India)',
      detail: '₹649/month (incl. taxes). Regional tier providing Cursor Models pool (Composer), Cloud Agents, MCPs, hooks, and iOS companion app access.'
    },
    {
      name: 'Pro',
      detail: '/month (/month billed annually). Unlimited Cursor Tab completions, unlimited Auto Mode,  included usage credit allowance for frontier models (Claude/GPT), extended agent usage, MCP servers, and background cloud agents. Optional pay-as-you-go overage.'
    },
    {
      name: 'Pro+',
      detail: '/month. Includes all Pro capabilities with 3x the frontier model usage/credit allowance, designed for daily heavy agent and multi-file editing.'
    },
    {
      name: 'Ultra',
      detail: '/month. 20x standard Pro model credit pool, top-tier priority compute queue, and early access to experimental agentic features.'
    },
    {
      name: 'Teams Standard',
      detail: '/user/month (/user/month billed annually). Everything in Pro plus centralized seat billing, organization-wide Privacy Mode enforcement, shared team rules/MCPs, SAML 2.0 / OIDC SSO, and usage analytics.'
    },
    {
      name: 'Teams Premium',
      detail: '/user/month (/user/month billed annually). Everything in Teams Standard with 5x higher agent limits per seat for continuous automated engineering.'
    },
    {
      name: 'Enterprise',
      detail: 'Custom pricing. Pooled team-wide model usage, SCIM provisioning, role-based access controls (RBAC), custom security controls, comprehensive audit logs, and dedicated SLAs.'
    }
  ],
  integrations: [
    'Full VS Code Marketplace extensions and custom themes',
    'Git, GitHub, and GitLab for version control and pull request reviews',
    'Integrated terminal shells (Bash, Zsh, PowerShell, Fish)',
    'Model Context Protocol (MCP) clients connecting to databases, APIs, and CLI tools',
    'Docker and containerized development workflows',
    'Cloud-based background agents and sandboxes',
    'Cursor mobile companion app for iOS'
  ],
  developer: [
    'Extensible via standard VS Code extension APIs and custom LSP (Language Server Protocol) servers',
    'Native Model Context Protocol (MCP) support for exposing custom developer tools, database connections, and external APIs to the AI agent',
    'Custom project governance using .cursorrules and modular .cursor/rules/*.mdc configuration files',
    'Bring Your Own Key (BYOK) support for direct OpenAI, Anthropic, and Google API keys',
    'Integrated terminal execution allowing the AI to run build commands, linters, package managers, and automated tests'
  ],
  privacy: 'Cursor provides a dedicated Privacy Mode across all tiers. When Privacy Mode is enabled, user codebases, prompts, and file context are processed strictly in transient server memory and are never saved to disk or used to train AI foundation models. Teams and Enterprise plans can enforce Privacy Mode organization-wide so individual members cannot disable it. Cursor is SOC 2 Type II certified and supports SAML 2.0 / OIDC Single Sign-On, encrypted data transmission (TLS 1.3), and granular enterprise audit logging.',
  ownership: 'Users and their organizations retain 100% intellectual property ownership of all code, documentation, and files created or modified with Cursor. Anysphere claims no copyright, intellectual property rights, or licensing royalties over customer code. All code generated by frontier models or Cursor models is commercially usable under standard software copyright laws.',
  alternatives: [
    {
      name: 'Windsurf (Codeium)',
      detail: 'AI-first IDE featuring the Cascade agentic loop, deep terminal feedback, and generous subscription value, competing directly with Cursor on multi-file agentic flow.'
    },
    {
      name: 'GitHub Copilot',
      detail: 'Standard coding assistant integrated across JetBrains, VS Code, and Visual Studio, offering strong enterprise IP indemnity and deep GitHub integration but less autonomous multi-file refactoring.'
    },
    {
      name: 'Claude Code',
      detail: 'Anthropic’s terminal-native coding agent designed for command-line developers who prefer repository-level autonomous planning and implementation outside of a GUI IDE.'
    },
    {
      name: 'Lovable & v0',
      detail: 'Prompt-driven full-stack web application generators optimized for rapid visual prototyping and complete app scaffolding rather than daily software engineering in an existing codebase.'
    }
  ],
  strengths: [
    'Cursor Tab delivers the most accurate predictive multi-line autocomplete and cursor navigation in the industry',
    'Composer provides seamless multi-file editing with integrated terminal command execution and error auto-repair',
    'Codebase-wide semantic indexing (@codebase) enables deep architectural understanding across large repositories',
    'Flexible model selection across Claude 3.7 Sonnet, GPT-5, Gemini, and DeepSeek with intelligent Auto Mode routing',
    'Zero-friction migration from VS Code with full extension, theme, and keybinding compatibility',
    'Robust enterprise security with zero-data-retention Privacy Mode and SOC 2 Type II compliance'
  ],
  limitations: [
    'Frontier model credit allowances can deplete rapidly during complex multi-turn Composer agent sessions',
    'Autonomous multi-file modifications require vigilant human review to prevent accidental code regressions or helper deletions',
    'Being an independent VS Code fork means minor delays when syncing with newly released upstream VS Code core updates',
    'High subscription costs for top-tier individual and team plans (-/month) compared to basic coding plugins',
    'Monorepos with hundreds of thousands of files require manual context filtering to avoid prompt token bottlenecks'
  ],
  workflow: [
    'Open the repository in Cursor and allow the semantic indexing engine to complete codebase vectorization.',
    'Create or customize .cursorrules or .cursor/rules/*.mdc to specify project architecture, naming conventions, and testing requirements.',
    'Use Cursor Tab for instantaneous, predictive multi-line completions during routine implementation.',
    'Trigger Composer (Cmd/Ctrl + I) for complex multi-file features or refactoring, referencing key modules with @Files or @codebase.',
    'Allow Composer to execute build commands (e.g. npm test or cargo check) in the integrated terminal to automatically catch and fix compiler errors.',
    'Inspect the staged inline visual diffs carefully, accept verified changes, and run Bugbot on the resulting pull request before merging.'
  ],
  takeaway: 'Cursor has earned its position as the premier AI-first IDE by rethinking the development workflow around whole-codebase intelligence rather than simple line-by-line autocompletion. For professional developers, startups, and agile engineering teams, the combination of Cursor Tab, Composer agent loops, and deep @codebase indexing delivers unmatched shipping speed. While heavy agent loops demand disciplined credit management and diligent diff verification, Cursor represents the current benchmark for agentic software engineering in 2026.',
  sources: [
    {
      title: 'Cursor Official Product Overview & Download',
      publisher: 'Cursor (Anysphere)',
      url: 'https://cursor.com/',
      type: 'official'
    },
    {
      title: 'Cursor Pricing, Plans & Usage Tiers',
      publisher: 'Cursor Pricing',
      url: 'https://cursor.com/pricing',
      type: 'official'
    },
    {
      title: 'Cursor Technical Documentation & Features Guide',
      publisher: 'Cursor Docs',
      url: 'https://docs.cursor.com/',
      type: 'official'
    },
    {
      title: 'Cursor Security, Privacy Mode & Data Handling',
      publisher: 'Cursor Security',
      url: 'https://cursor.com/security',
      type: 'official'
    },
    {
      title: 'Cursor Rules & Configuration Guide',
      publisher: 'Cursor Documentation',
      url: 'https://docs.cursor.com/context/rules-for-ai',
      type: 'official'
    },
    {
      title: 'Developer Sentiment & IDE Comparison: Cursor vs Windsurf vs Copilot',
      publisher: 'Reddit r/webdev & Developer Community Consensus',
      url: 'https://www.reddit.com/r/webdev/',
      type: 'independent'
    }
  ]
};
