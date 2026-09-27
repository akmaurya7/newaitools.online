import type { ToolAnalysis } from './types.ts';

export const canvaAnalysis: ToolAnalysis = {
  lastVerified: '2026-09-27',
  summary: 'Canva AI deep analysis.',
  company: 'Canva',
  officialUrl: 'https://www.canva.com/',
  status: 'Active.',
  targetUsers: ['Designers', 'Marketers', 'Teams'],
  problemSolved: 'Create visual communication faster.',
  howItWorks: 'Canva combines visual editing with AI-assisted generation and editing.',
  features: [{ name: 'Canva AI', detail: 'Conversational and agentic creative assistance.' }],
  aiAndModels: 'Canva describes its Canva Design Model; exact model mapping is not fully public.',
  inputsOutputs: 'Prompts, designs and media can produce editable visual outputs.',
  limits: ['AI usage is allowance-based.'],
  useCases: ['Social graphics', 'Presentations', 'Marketing assets'],
  poorFit: ['Low-level professional rendering workflows'],
  pricing: [{ name: 'Free', detail: 'Current pricing page lists a free plan.' }, { name: 'Pro', detail: 'Paid individual plan.' }, { name: 'Business', detail: 'Paid team plan.' }, { name: 'Enterprise', detail: 'Contact sales.' }],
  integrations: ['AI connectors', 'REST APIs', 'MCP'],
  developer: ['Canva Developers SDK', 'REST APIs', 'MCP'],
  privacy: 'Canva AI terms describe privacy settings and possible sharing with technology partners.',
  ownership: 'Users are responsible for rights in inputs and outputs are subject to applicable Canva terms.',
  alternatives: [{ name: 'Adobe Express / Firefly', detail: 'Alternative creative ecosystem.' }, { name: 'Figma', detail: 'Alternative for product UI/UX.' }],
  strengths: ['Integrated AI and visual editing.', 'Broad creative formats.'],
  limitations: ['AI allowance complexity.', 'Less direct model control.'],
  workflow: ['Define the goal.', 'Generate and refine.', 'Review rights and accuracy.', 'Publish or export.'],
  takeaway: 'Canva is strongest as an end-to-end visual communication workspace where AI is integrated with editing, brand management and publishing.',
  sources: [
    { title: 'Canva AI 2.0', publisher: 'Canva Newsroom', url: 'https://www.canva.com/newsroom/news/canva-create-2026-ai/', type: 'official' },
    { title: 'Canva pricing', publisher: 'Canva', url: 'https://www.canva.com/en_gb/pricing/', type: 'official' },
    { title: 'AI Product Terms', publisher: 'Canva Legal', url: 'https://www.canva.com/policies/ai-product-terms/', type: 'official' },
    { title: 'Canva Developers SDK', publisher: 'Canva Developers', url: 'https://www.canva.dev/docs/apps/', type: 'official' }
  ]
};
