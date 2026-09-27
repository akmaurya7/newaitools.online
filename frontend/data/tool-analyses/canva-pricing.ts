import { TOOLS } from '../data/data.ts';
TOOLS.find(tool => tool.id === 'canva-pro')!.analysisId = 'canva-pro';

export const canvaPricing = [
  { name: 'Free', detail: 'Current UK pricing page lists a free plan for one person with 5GB storage and up to 20 Standard or Premium AI uses.' },
  { name: 'Pro', detail: 'Current UK pricing page lists an individual paid plan with premium content, 100GB storage, 5 Brand Kits and higher AI access. AI Pass is optional.' },
  { name: 'Business', detail: 'Current UK pricing page lists a paid team plan with stronger team/admin and brand controls, 500GB storage and higher AI access.' },
  { name: 'Enterprise', detail: 'Contact-sales pricing with enterprise security, SSO and SCIM, custom apps, larger brand controls and enterprise support.' },
  { name: 'AI allowance', detail: 'Usage is not a simple prompt count. Standard, Premium and Ultra tiers consume a shared allowance at different rates and complex tasks can consume more.' },
  { name: 'AI Pass', detail: 'Optional recurring add-on for Pro and Business that provides a larger AI allowance.' }
];
