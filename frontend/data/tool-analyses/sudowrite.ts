import type { ToolAnalysis } from './types.ts';

export const sudowriteAnalysis: ToolAnalysis = {
  lastVerified: '2026-10-13',
  summary:
    'Sudowrite is the premier generative AI creative writing studio purpose-built for novelists, fiction authors, screenwriters, and narrative designers. Unlike general-purpose conversational chatbots like ChatGPT or Claude that suffer from character amnesia, plot drift, and repetitive corporate prose, Sudowrite is engineered from the ground up around narrative fiction mechanics. At its core is Story Bible 2.0 (formerly Story Engine), a persistent context architecture that synchronizes worldbuilding lore, character sheets, stylistic voice models, and chapter-by-chapter outline beats directly into underlying frontier LLMs (Anthropic Claude 3.5 Sonnet, Claude Opus, OpenAI GPT-4o, and Sudowrite\'s fiction-tuned Muse models). Supported by specialized micro-editing tools—including sensory \'Describe\' (deconstructing scenes into sight, smell, taste, sound, touch, and metaphor) and voice-matching \'Rewrite\'—Sudowrite operates as an always-on creative copilot that eliminates writer\'s block and accelerates full-length manuscript production without requiring prompt engineering or API keys.',
  company: 'Sudowrite Inc. / James Yu & Amit Gupta (San Francisco, California, USA)',
  officialUrl: 'https://sudowrite.com/',
  status:
    'Active, production-grade fiction writing platform featuring Story Bible 2.0, Canvas infinite mind-mapping, Brainstorm ideation engine, My Voice style matching, and multi-model routing across Claude 3.5 Sonnet, Claude Opus, GPT-4o, and Muse.',
  targetUsers: [
    'Fiction novelists and indie authors drafting commercial series across fantasy, sci-fi, romance, mystery, thriller, and historical genres',
    'Screenwriters, playwrights, and narrative game designers structuring complex character webs, multi-POV dialogue, and dramatic beat outlines',
    'Pantsers and discovery writers battling writer\'s block who need instant sensory descriptions, unexpected plot twists, and varied prose drafts',
    'Self-publishers on Amazon KDP seeking to accelerate drafting cycles while preserving authentic author voice and meeting KDP disclosure guidelines',
    'Creative writing students and educators exploring structured story outlining, pacing refinement, and literary sensory expansion'
  ],
  problemSolved:
    'General-purpose LLMs fail at long-form fiction: after 3,000 to 5,000 words, their sliding context windows forget secondary characters, alter eye colors, break world rules, and collapse into repetitive clichés (\'a testament to\', \'a sense of dread filled the air\'). Furthermore, conversational interfaces require novelists to constantly re-paste context and write complex system prompts. Sudowrite solves this structural friction by embedding a dedicated fiction GUI. The Story Bible maintains permanent memory of characters, setting rules, and narrative arcs; the Chapter Generator expands outline beats into immersive prose; and sensory micro-tools allow surgical line editing without leaving the manuscript document.',
  howItWorks:
    'Sudowrite operates through a modular context assembly pipeline. An author begins in Story Bible by establishing a premise (Braindump), selecting tone and POV (Genre & Style), filling character dossiers (Characters), and documenting lore (Worldbuilding). As the story progresses into Outline and Chapter beats, Sudowrite dynamically constructs prompt payloads that combine relevant character bios, world rules, and preceding prose summaries before transmitting them to selected frontier models (Claude 3.5 Sonnet for rich emotional resonance, GPT-4o for rapid plot structuring, or Muse for fantasy/fiction cadence). Authors then use the \'Describe\' tool on highlighted nouns to inject sensory depth, \'Rewrite\' to adjust pacing or show-not-tell dynamics, and \'Brainstorm\' to generate character quirks or narrative complications.',
  features: [
    {
      name: 'Story Bible 2.0 (Persistent Novel Memory)',
      detail:
        'A comprehensive document-level context system that tracks Braindump premises, Genre/Style guides, Character profiles, Worldbuilding rules, and Scene Outlines, systematically eliminating character amnesia across 80,000+ word manuscripts.'
    },
    {
      name: 'Sensory Describe Engine',
      detail:
        'Highlights any noun, character action, or environment and generates rich, nuanced descriptive passages categorized across six distinct sensory vectors: Sight, Smell, Taste, Sound, Touch, and Metaphor.'
    },
    {
      name: 'Chapter Generator & Beat Expander',
      detail:
        'Translates 4 to 8 specific plot beats into cohesive 800 to 1,500 word narrative scenes, maintaining active character dialogue, atmospheric tension, and scene pacing.'
    },
    {
      name: 'Rewrite & Tone Sliders',
      detail:
        'Provides surgical in-line prose refactoring with targeted presets (Show Not Tell, Make More Descriptive, Shift POV, Add Humor) alongside custom slider controls to reshape sentence variety and tone.'
    },
    {
      name: 'Canvas Mind-Mapping & Plotting Board',
      detail:
        'An infinite visual whiteboard for mapping character relationship webs, story timelines, multi-act story structures, plot branches, and mystery clue trails.'
    },
    {
      name: 'My Voice / Style Matching Vector',
      detail:
        'Ingests 2,000+ words of previous human-authored prose to calculate stylistic vectors (cadence, vocabulary, sentence length distribution), ensuring AI-generated chapters reflect the author\'s signature literary voice.'
    },
    {
      name: 'Multi-Model Frontier Routing',
      detail:
        'Seamlessly toggles between Anthropic Claude 3.5 Sonnet, Claude Opus, OpenAI GPT-4o, and Sudowrite\'s custom Muse fiction checkpoints without managing external API keys.'
    },
    {
      name: 'Brainstorm & Twist Engine',
      detail:
        'Generates dozens of contextual suggestions for character names, magical artifacts, secret motivations, dialogue rejoinders, and unexpected third-act plot twists.'
    }
  ],
  aiAndModels:
    'Sudowrite integrates a dynamic multi-model orchestration backend. Rather than locking writers into a single LLM, it routes tasks to the best-suited model: Anthropic Claude 3.5 Sonnet and Claude Opus are leveraged for lyrical prose, nuanced dialogue, and emotional subtext; OpenAI GPT-4o provides rapid logic, outline structuring, and brainstorming; and proprietary Muse models are fine-tuned specifically on creative fiction patterns, dialogue rhythm, and genre tropes. Story Bible context injection is managed client- and server-side to maximize relevance while minimizing unnecessary token overhead.',
  inputsOutputs:
    'Inputs: Story outlines, rough notes, character descriptions, scene beats, highlighted manuscript text, or brainstorm queries. Outputs: Full chapter prose drafts, six-sense sensory descriptions, rewritten passages, character dossiers, plot outlines, and exportable .docx and Markdown manuscript files.',
  limits: [
    'Context-Heavy Credit Consumption: Sudowrite charges credits based on total tokens processed (prompt context read PLUS new words generated). Because Story Bible injects characters, world lore, and outline context with every call, generating full chapters burns 12,000 to 25,000+ credits per 1,000 words on premium models like Claude.',
    'No Rollover on Hobby and Professional Plans: Unused monthly credits expire at the end of each billing cycle on the Hobby ($10–$19/mo) and Professional ($22–$29/mo) plans. Only the Max plan ($44–$59/mo) includes 12-month credit rollover.',
    'Risk of Generic Prose Without Tight Scene Beats: If authors provide minimal or vague outline beats, AI generation defaults to generic melodrama, rushed pacing, and predictable clichés. High-quality output demands detailed beat direction.',
    'Third-Party Content Moderation Filters: Because Sudowrite routes through commercial APIs (Anthropic and OpenAI), it enforces strict safety filters. Explicit erotica, extreme horror, or graphic violence can trigger false-positive moderation flags.',
    'No Built-In Ebook Typesetting: Sudowrite is a drafting studio, not a book formatter. It does not output ready-to-publish EPUB, MOBI, or print-interior PDFs; authors must export to Vellum, Atticus, Scrivener, or Microsoft Word for final layout.'
  ],
  useCases: [
    'Full-Length Novel Drafting: Iteratively writing 60,000 to 100,000-word fiction manuscripts scene-by-scene using Story Bible and Chapter Generator.',
    'Curing Writer\'s Block: Highlighting stalled scenes and using \'Describe\' or \'Brainstorm\' to introduce fresh sensory atmosphere or surprising narrative turns.',
    'Indie Publishing Velocity: Accelerating release schedules for commercial romance, fantasy, and sci-fi series authors while maintaining character consistency.',
    'Manuscript Revision & Line Polishing: Using \'Rewrite\' presets (Show Not Tell, Sensory Richness) to upgrade dry first-draft passages into vivid prose.',
    'Series Lore & Bible Management: Centralizing character arcs, magical constraints, and timeline rules inside an accessible, search-friendly interface.'
  ],
  poorFit: [
    'High-Volume Developers & BYOK Power Users: Authors comfortable managing API keys through OpenRouter who want granular control over token costs ($1–$3 per novel) will find Novelcrafter substantially cheaper.',
    'Uncensored Dark Romance & Extreme Horror: Authors writing unrestricted dark fiction, graphic violence, or explicit erotica should choose NovelAI (Opus tier with uncensored Kayra/Clio models) or local offline LLMs.',
    'Non-Fiction, Academic, or Technical Writing: Sudowrite is explicitly optimized for creative storytelling. For research papers, non-fiction books, or citation-heavy articles, tools like Consensus, Elicit, or NotebookLM are far better choices.'
  ],
  pricing: [
    {
      name: 'Free Trial ($0)',
      detail:
        'Includes ~10,000 complimentary credits and complete access to Story Bible, Write, Rewrite, Describe, and Brainstorm without requiring a credit card.'
    },
    {
      name: 'Hobby & Student Plan ($10/mo billed annually or $19/mo billed monthly)',
      detail:
        '225,000 credits per month. Best for casual hobbyists, short story authors, and poets drafting ~15,000 to 25,000 assisted words monthly. Unused credits expire monthly.'
    },
    {
      name: 'Professional Plan ($22/mo billed annually or $29/mo billed monthly)',
      detail:
        '1,000,000 credits per month. The most popular tier for active novelists drafting full-length books (~50,000 to 80,000 words monthly depending on model choice). Unused credits expire monthly.'
    },
    {
      name: 'Max Plan ($44/mo billed annually or $59/mo billed monthly)',
      detail:
        '2,000,000 credits per month with 12-Month Credit Rollover. Designed for prolific indie authors, series writers, and seasonal novelists who draft in heavy sprints.'
    }
  ],
  integrations: [
    'Microsoft Word (.docx import and export)',
    'Markdown and rich text (.txt / .rtf) file export',
    'Anthropic Claude API (Claude 3.5 Sonnet & Claude 3 Opus integration)',
    'OpenAI GPT-4o API integration',
    'Proprietary Muse creative model network'
  ],
  developer: [
    'Hosted proprietary SaaS web application with real-time cloud sync and browser autosave',
    'No public developer REST API or webhooks; designed strictly as an end-user authoring environment',
    'Proprietary context assembling engine connecting front-end Story Bible state to remote inference clusters'
  ],
  privacy:
    'Sudowrite explicitly guarantees that user manuscripts, story bibles, character lore, and notes are NEVER used to train underlying AI foundation models. API calls made to OpenAI and Anthropic are covered by commercial enterprise terms featuring zero-data retention for model training.',
  ownership:
    'Authors retain 100% legal intellectual property ownership over all text, outlines, and character concepts created within Sudowrite. While US and international copyright offices require substantial human modification and expressive guidance to grant copyright protection on AI-assisted works, Sudowrite asserts zero claim over user stories.',
  alternatives: [
    {
      name: 'Novelcrafter',
      detail:
        'The premier Bring-Your-Own-Key (BYOK) alternative for novelists. Offers deep Codex worldbuilding, scene planning, and direct OpenRouter API connections, costing a fraction of Sudowrite for high-volume authors.'
    },
    {
      name: 'NovelAI',
      detail:
        'The top uncensored storytelling platform powered by bespoke LLMs (Kayra, Clio). Ideal for dark fiction, horror, and erotica with zero content moderation filters and unlimited text generation on its $25/mo Opus plan.'
    },
    {
      name: 'Claude 3.5 / 3.7 Sonnet (Anthropic)',
      detail:
        'The leading raw foundation model for literary prose quality, emotional resonance, and natural dialogue. Lacks Sudowrite\'s Story Bible GUI and sensory buttons, but provides superior standalone prose without subscription markups.'
    },
    {
      name: 'ChatGPT Plus (OpenAI)',
      detail:
        'A versatile general assistant capable of outlining, brainstorming, and drafting. Lacks long-form fiction continuity tools and requires repetitive re-prompting compared to Sudowrite\'s dedicated fiction workspace.'
    }
  ],
  strengths: [
    'Fiction-First User Experience: Purpose-built for storytellers, eliminating prompt engineering and technical API setups',
    'Story Bible 2.0: Effectively eliminates character amnesia and plot drift across full-length manuscripts',
    'Sensory Describe Tool: Unique six-dimension breakdown (sight, smell, taste, sound, touch, metaphor) revitalizes flat scenes',
    'Model Flexibility: Seamlessly switch between Claude 3.5 Sonnet, GPT-4o, and Muse depending on scene requirements',
    '12-Month Credit Rollover: Available on the Max plan, accommodating the natural ebb and flow of author writing sprints'
  ],
  limitations: [
    'Token Context Burn: Story Bible\'s deep context means drafting chapters burns through monthly credit caps rapidly',
    'No Rollover on Lower Plans: Credits expire monthly on Hobby and Professional tiers, penalizing authors who take writing breaks',
    'Subscription Markup: Substantially more expensive per generated word than BYOK platforms like Novelcrafter',
    'Content Moderation: Third-party safety filters can restrict edgy horror, dark romance, or explicit scenes',
    'No Typesetting: Lacks interior book formatting or EPUB/PDF compile capabilities for direct publishing'
  ],
  workflow: [
    'Input: Story Conception & Story Bible Setup: Enter your core premise in Braindump, set Genre and POV, build Character sheets with motivations and flaws, and outline Worldbuilding rules.',
    'Visual Plotting: Use Canvas to map story arcs, relationship tensions, and key narrative turning points across a visual storyboard.',
    'Scene Beat Generation: In the Outline module, generate or refine 4 to 8 specific chronological scene beats for the active chapter.',
    'Prose Generation: Open Chapter Generator, select your model (Claude 3.5 Sonnet for emotional depth, Muse for fantasy), and expand beats into a 1,000+ word first draft.',
    'Sensory Polishing: Highlight flat dialogue or setting descriptions and apply \'Describe\' or \'Rewrite\' (Show Not Tell preset) to enrich literary texture.',
    'Quality Gate: Audit manuscript for author voice consistency, verify factual continuity against Story Bible, ensure human authorship modifications satisfy Amazon KDP AI disclosure guidelines, and export as .docx for final typesetting.'
  ],
  takeaway:
    'Sudowrite is the benchmark all-in-one AI writing studio for fiction authors who want to conquer writer\'s block and draft full-length novels without learning API configurations or prompt engineering. While high-volume power authors may prefer Novelcrafter\'s pay-per-token economics, Sudowrite\'s Story Bible, sensory Describe features, and seamless Claude integration make it an unmatched creative partner for commercial fiction writers.',
  sources: [
    {
      title: 'Sudowrite Official Fiction Platform & Feature Overview',
      publisher: 'Sudowrite Inc.',
      url: 'https://sudowrite.com/',
      type: 'official'
    },
    {
      title: 'Sudowrite Pricing, Plans & Credit System Explained',
      publisher: 'Sudowrite Inc.',
      url: 'https://sudowrite.com/pricing',
      type: 'official'
    },
    {
      title: 'Sudowrite vs Novelcrafter: Comprehensive Novelist Review & Credit Burn Analysis',
      publisher: 'Writing With AI Community / AuthorFlows',
      url: 'https://authorflows.com/',
      type: 'independent'
    }
  ]
};
