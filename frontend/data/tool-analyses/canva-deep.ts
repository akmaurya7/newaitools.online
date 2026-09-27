import type { ToolAnalysis } from './types.ts';
import { canvaFeatures, canvaUseCases, canvaPoorFit } from './canva-research.ts';
import { canvaPricing } from './canva-pricing.ts';
import { canvaOverview } from './canva-overview.ts';

export const canvaDeep: ToolAnalysis = {
  ...canvaOverview,
  summary: 'Canva combines visual editing, templates, AI-assisted creation, collaboration and publishing in one workspace. Canva AI 2.0 adds conversational and agentic creation with editable layered output.',
  targetUsers: ['Individuals creating visual content.', 'Designers and marketers.', 'Teams creating branded content.', 'Developers building Canva integrations.'],
  problemSolved: 'Canva reduces the number of separate tools needed to move from a creative brief to finished visual communication.',
  howItWorks: 'Start from a template or blank design, then use conversational AI for generation and editing. AI 2.0 is designed to understand a brief and create editable layered output.',
  features: canvaFeatures,
  aiAndModels: 'Canva describes the Canva Design Model as a foundation model built for creativity. Some AI products also use technology partners. Canva does not publish a complete model-by-feature mapping.',
  inputsOutputs: 'Inputs include prompts, designs, uploaded media, brand assets and connected information. Outputs include designs, presentations, documents, images, video, websites, interactive experiences and Sheets.',
  limits: ['AI usage is allowance-based and tiered.', 'Some AI products are not available everywhere.', 'AI output is not guaranteed accurate or unique.', 'Some connected-data features are currently read-only.', 'Advanced developer capabilities can require paid plans.'],
  useCases: canvaUseCases,
  poorFit: canvaPoorFit,
  pricing: canvaPricing,
  integrations: ['AI connectors for workplace tools.', 'Canva app ecosystem.', 'Publishing integrations.', 'Canva Developers SDK, REST APIs and MCP.', 'Template and Autofill automation.'],
  developer: ['Canva Developers SDK.', 'REST APIs for platform integrations.', 'MCP for AI assistant workflows.', 'OAuth authentication and per-user permissions.', 'Documented operation rate limits.'],
  privacy: 'Canva AI terms describe privacy settings and sharing with technology partners when needed to provide an AI feature.',
  ownership: 'Users are responsible for rights in inputs and for complying with applicable terms for outputs. Canva states that AI outputs may not be unique.',
  alternatives: [{ name: 'Adobe Express / Firefly', detail: 'Strong alternative for Adobe ecosystem workflows.' }, { name: 'Figma', detail: 'Better fit when product UI and design systems are the main focus.' }, { name: 'Photoshop', detail: 'Better fit for deep image editing and pixel-level control.' }, { name: 'Microsoft Designer', detail: 'Useful for Microsoft-centric visual creation.' }],
  strengths: ['AI is embedded in a mature editor.', 'Broad creative formats.', 'Strong brand and collaboration workflow.', 'Developer integrations extend Canva into other products.'],
  limitations: ['Less direct model control.', 'AI allowance consumption can be difficult to forecast.', 'Some newer AI capabilities are rolling out progressively.', 'Commercial use requires checking content licences and terms.'],
  workflow: ['1. Define audience, channel and brand rules.', '2. Give Canva AI a concrete brief and source material.', '3. Generate and inspect the editable result.', '4. Use conversational edits for broad changes and manual editing for precision.', '5. Verify permissions for connected data.', '6. Use templates and developer APIs for repeatable automation.', '7. Check licensing, accessibility and output requirements before publishing.'],
  takeaway: 'Canva is strongest when AI is part of a complete creative workflow. Its current direction combines agentic creation with editing, brand management, collaboration, publishing and developer integrations.',
  sources: [
    { title: 'Canva AI 2.0', publisher: 'Canva Newsroom', url: 'https://www.canva.com/newsroom/news/canva-create-2026-ai/', type: 'official' },
    { title: 'Canva pricing', publisher: 'Canva', url: 'https://www.canva.com/en_gb/pricing/', type: 'official' },
    { title: 'AI Product Terms', publisher: 'Canva Legal', url: 'https://www.canva.com/policies/ai-product-terms/', type: 'official' },
    { title: 'Terms of Use', publisher: 'Canva Legal', url: 'https://www.canva.com/policies/terms-of-use/', type: 'official' },
    { title: 'Canva Developers SDK', publisher: 'Canva Developers', url: 'https://www.canva.dev/docs/apps/', type: 'official' },
    { title: 'Canva MCP', publisher: 'Canva Developers', url: 'https://www.canva.dev/docs/apps/mcp/', type: 'official' }
  ]
};
