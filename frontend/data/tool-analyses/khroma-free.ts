import type { ToolAnalysis } from './types.ts';

export const khromaAnalysis: ToolAnalysis = {
  lastVerified: '2026-09-28',
  summary:
    'Khroma is a browser-based AI color discovery tool that learns a user’s color preferences and generates personalized combinations for exploration, search and saving.',
  company: 'Khroma / George Hastings',
  officialUrl: 'https://www.khroma.co/',
  status: 'Active web tool; the public product emphasizes personalized color discovery rather than a broad design suite.',
  targetUsers: [
    'Brand and graphic designers exploring a visual direction',
    'UI/UX designers looking for color combinations',
    'Illustrators and visual artists with an established color taste',
    'Developers who need inspiration before defining a production palette',
    'Students and non-designers who want guided color exploration',
  ],
  problemSolved:
    'Khroma reduces the blank-page problem in color selection by learning which colors a person likes and using that preference model to generate large numbers of related combinations instead of starting from generic random palettes.',
  howItWorks:
    'The user first selects colors to train Khroma’s personalized algorithm. Khroma describes the system as a neural-network-powered algorithm that learns liked colors and blocks disliked ones. It then generates combinations that can be browsed in several visual contexts, searched by color properties, and saved for later reference.',
  features: [
    {
      name: 'Personalized color training',
      detail:
        'Khroma learns from the colors the user selects during its initial training process, making the generator preference-driven rather than purely random.',
    },
    {
      name: 'Limitless palette discovery',
      detail:
        'The product presents an effectively continuous stream of generated combinations for exploration, which is useful when the goal is to discover directions rather than choose from a fixed preset library.',
    },
    {
      name: 'Contextual previews',
      detail:
        'Generated colors can be viewed as palettes, typography, gradients and custom images, helping users judge a combination in more realistic visual contexts than isolated swatches.',
    },
    {
      name: 'Color search and filtering',
      detail:
        'Khroma supports searching/filtering by hue, tint, value, color, hex and RGB values, which is useful when a project already has one anchor color.',
    },
    {
      name: 'Saved collections',
      detail:
        'Users can save favorite combinations into a personal collection and return to the combinations that fit a project or visual style.',
    },
    {
      name: 'Color implementation details',
      detail:
        'The product exposes color names, hexadecimal values, RGB values and CSS code for generated colors, making manual transfer into a design or development environment straightforward.',
    },
    {
      name: 'Accessibility signal',
      detail:
        'Khroma displays a WCAG accessibility rating for color pairs. Treat this as an aid to evaluation rather than a substitute for checking the complete interface and all relevant text sizes and states.',
    },
  ],
  aiAndModels:
    'Khroma publicly describes its technology as a neural-network-powered personalized algorithm. The product also says the system learned from thousands of popular human-made palettes found across the internet. Khroma does not publicly expose a foundation-model name, model selector, model version, API model ID or benchmark suite, so those details should not be assumed.',
  inputsOutputs:
    'The main input is the user’s color preference selections during training, followed by optional search/filter criteria such as hue, tint, value, hex or RGB values. Outputs are color combinations presented as palettes, typography, gradients or image contexts, plus color metadata such as names, hex, RGB, CSS code and WCAG accessibility information.',
  limits: [
    'The initial personalization step adds setup time before the generator becomes useful for a specific taste profile.',
    'Personalization can reinforce the user’s existing aesthetic, so it is less suitable when the goal is deliberately to explore a style far outside their normal preferences.',
    'Khroma is specialized in color discovery rather than a full brand-design, illustration, layout or design-system workflow.',
    'The public product does not document a foundation-model selector, API, webhook system or enterprise automation layer.',
    'Independent 2026 reviews report no native Figma/Adobe workflow and manual copying of color values as a practical integration limitation; treat this as independent evidence rather than an official product guarantee.',
    'Generated palettes still require human review for semantic roles, accessibility across the whole interface, brand meaning and production consistency.',
  ],
  useCases: [
    'Finding a personal starting palette for a new visual project',
    'Exploring brand-color directions before building a formal design system',
    'Finding secondary or accent colors around an existing brand color',
    'Exploring UI color combinations and contrast candidates',
    'Generating visual references for moodboards and creative direction',
    'Finding alternative color directions when a project feels visually repetitive',
  ],
  poorFit: [
    'Teams that need a complete collaborative design-system platform rather than color discovery',
    'Projects that require automated synchronization with design files or development repositories',
    'Workflows needing deterministic brand tokens, semantic naming and governance out of the box',
    'Users who want immediate palettes without spending time training a preference model',
    'Production accessibility sign-off where every state and component must be formally audited',
  ],
  pricing: [
    {
      name: 'Free',
      detail:
        'Khroma’s public site presents the tool as a free browser experience and does not publish a paid plan or credit system. Independent 2026 reviews also report full access without a paid tier. Because pricing can change, the provider site should remain the final check.',
    },
    {
      name: 'Usage model',
      detail:
        'The public product page describes limitless palette discovery and an unlimited saved collection rather than a metered generation-credit system.',
    },
  ],
  integrations: [
    'Browser-based workflow; open Khroma directly and work with generated color values.',
    'Manual transfer through displayed hex, RGB and CSS values into design or development tools.',
    'No official Figma, Adobe, Sketch, webhook or automation integration is documented on the public product page reviewed for this analysis.',
  ],
  developer: [
    'Khroma exposes CSS color values and standard color representations that can be copied into code manually.',
    'No public official API or SDK documentation was found during this research pass.',
    'No official webhook, agent or CI/CD integration was identified in the current public product material.',
    'For production design systems, treat Khroma as an inspiration/discovery stage and move the selected colors into the team’s governed token system.',
  ],
  privacy:
    'Khroma is a browser-based service, but the current public homepage does not provide enough detailed information to make strong claims about retention, training use, hosting regions, deletion controls or enterprise security. Users should avoid treating the tool as an enterprise-governed repository for sensitive design information unless the provider’s current legal/privacy material confirms the required controls.',
  ownership:
    'Khroma’s public product material reviewed here focuses on color generation and does not provide a detailed current commercial-license policy for generated palettes. Colors themselves are not equivalent to copyrighted artwork, but brand, trademark, accessibility and contractual requirements can still apply to a production palette. For commercial brand work, document the final palette and verify any project-specific rights requirements rather than relying on the fact that the tool is free.',
  alternatives: [
    {
      name: 'Coolors',
      detail:
        'Better when you want rapid palette iteration and a broader ecosystem around palette creation and export. Khroma’s differentiator is stronger personalization around the user’s taste.',
    },
    {
      name: 'Adobe Color',
      detail:
        'Better suited to users already working in Adobe’s creative ecosystem and to workflows centered on established color-theory and creative-library features. Khroma is more focused on personal AI discovery.',
    },
    {
      name: 'Huemint',
      detail:
        'Useful when you want algorithmic color suggestions oriented around branding, UI or graphic applications. Khroma is more explicitly trained around an individual’s preferences.',
    },
    {
      name: 'Color Hunt',
      detail:
        'Useful for browsing curated palette inspiration rather than training a personalized generator. It can complement Khroma when human-curated references are more useful than AI personalization.',
    },
  ],
  strengths: [
    'Personalization is the core differentiator: the generator adapts to the user’s selected taste.',
    'The contextual previews make it easier to judge colors as part of a visual composition.',
    'Search by hue, tint, value, hex and RGB is useful when a project already has an anchor color.',
    'Color metadata and WCAG ratings reduce some of the friction between discovery and implementation.',
    'The public product is lightweight and focused instead of trying to replace a complete design application.',
    'The free access model makes it easy to add Khroma as an exploration step in a larger workflow.',
  ],
  limitations: [
    'It is a color-discovery specialist, not a complete branding or design-system tool.',
    'Initial training takes effort and the quality of personalization depends on the preference signal supplied.',
    'The personalization can narrow exploration toward familiar tastes instead of deliberately challenging them.',
    'There is limited public technical disclosure about the underlying model and no documented model-selection interface.',
    'Independent testing reports manual handoff rather than native design-tool integrations.',
    'A visually attractive pair is not automatically a complete accessible, semantic or production-ready color system.',
  ],
  workflow: [
    'Start by defining the project context: brand, product UI, campaign, illustration or another visual purpose.',
    'Train Khroma with colors that genuinely represent the desired aesthetic instead of selecting colors at random.',
    'Browse generated combinations in palette, typography, gradient and image contexts to eliminate colors that only look good as isolated swatches.',
    'Use search and filters when you already have an anchor color or need a particular hue/value direction.',
    'Save the strongest combinations into the collection and narrow them to a small number of candidates.',
    'Copy the selected hex/RGB/CSS values into the actual design environment and assign semantic roles such as primary, surface, text, accent and status.',
    'Run a full accessibility check across real components, text sizes, states and light/dark contexts; do not treat the Khroma WCAG indicator as final approval.',
    'Document the final palette in the project’s design-token or brand-guideline system so production teams are not dependent on a browser history or personal collection.',
  ],
  takeaway:
    'Khroma is most useful as a personalized color-ideation layer. Its value is not that it replaces a designer or creates a complete brand system; it quickly turns personal color taste into a large, searchable field of combinations and lets you judge them in context. Use it early, then move the chosen colors into a proper design system and verify accessibility and brand requirements before shipping.',
  sources: [
    {
      title: 'Khroma — AI Color Tool for Designers',
      publisher: 'Khroma',
      url: 'https://www.khroma.co/',
      type: 'official',
    },
    {
      title: 'Khroma review 2026',
      publisher: 'TechBothQ',
      url: 'https://techbothq.com/khroma-review/',
      type: 'independent',
    },
    {
      title: 'Khroma for Designers: AI Color Tool That Learns Your Taste',
      publisher: 'Hack Design',
      url: 'https://www.hackdesign.org/toolkit/khroma/',
      type: 'independent',
    },
    {
      title: 'AI Color Palette Generators for Non-Designers',
      publisher: 'Toolkit Creators',
      url: 'https://toolkitcreators.com/guides/ai-color-palette-generators',
      type: 'independent',
    },
    {
      title: 'AI Color Palette Tools: What They Get Wrong',
      publisher: 'Coloristic',
      url: 'https://coloristic.org/blog/ai-color-palette-tools-reviewed/',
      type: 'independent',
    },
  ],
};
