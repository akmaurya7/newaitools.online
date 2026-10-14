import type { ToolAnalysis } from './types.ts';

export const novelaiAnalysis: ToolAnalysis = {
  "lastVerified": "2026-10-14",
  "summary": "NovelAI is the premier privacy-first, uncensored creative writing studio and visual storytelling platform engineered specifically for novelists, narrative worldbuilders, and interactive fiction authors. Founded by Anlatan Inc., NovelAI was developed as an uncompromising answer to the heavy moralizing, corporate censorship filters, and data-harvesting practices of mainstream commercial AI providers like OpenAI and Anthropic. At its architectural core are proprietary fine-tuned narrative language models�headlined by Erato (a custom 70B parameter Meta-Llama 3 creative fiction fine-tune), Kayra (NovelAI's flagship 13B parameter NAILM architecture), and the experimental Xialong (355B parameter GLM architecture)�paired with an advanced cascading Lorebook memory system that eliminates character amnesia across long manuscripts. Operating on an interactive prose continuation paradigm rather than sterile conversational prompting, NovelAI co-writes sentence-by-sentence or scene-by-scene, adapting to the author's exact cadence, rhythm, and syntax. Combined with client-side zero-knowledge AES-256 encryption that guarantees complete manuscript privacy and NovelAI Diffusion V3 (an anime- and fantasy-tuned SDXL image generator), the platform provides an unconstrained creative sandbox for authors tackling dark fantasy, grimdark thrillers, mature romance, and complex speculative worldbuilding.",
  "company": "Anlatan Inc. / Kurumuz & Core Team (Wilmington, Delaware, USA)",
  "officialUrl": "https://novelai.net/",
  "status": "Active, production-grade creative storytelling and character art generation platform featuring uncensored narrative models (Erato 70B, Kayra 13B, Xialong 355B preview), cascading Lorebook vector memory, and NovelAI Diffusion V3.",
  "targetUsers": [
    "Fiction authors and indie novelists writing dark fantasy, horror, grimdark sci-fi, and mature romance who require 100% uncensored creative freedom without moralizing chatbot refusals",
    "Discovery writers and pantsers seeking an interactive, sentence-by-sentence prose co-writer that matches authorial style, formatting, and dialogue cadence",
    "Speculative fiction worldbuilders managing intricate magic systems, multi-faction geopolitical lore, and massive character rosters via persistent Lorebooks",
    "Privacy-conscious authors who refuse cloud data harvesting and require client-side zero-knowledge AES-256 encryption for their unpublished intellectual property",
    "Interactive roleplayers and visual novel developers pairing dynamic text generation with custom character art and concept portraits via NovelAI Diffusion V3"
  ],
  "problemSolved": "Mainstream foundation models (ChatGPT, Claude, Gemini) are heavily constrained by corporate RLHF safety guardrails that constantly trigger false-positive refusals on legitimate dramatic conflict, graphic battle scenes, psychological horror, and mature romantic intimacy. Furthermore, standard chatbots suffer from catastrophic narrative amnesia, forget secondary characters after a few thousand tokens, and routinely log user prompts to remote servers for model training. NovelAI solves these core fiction dilemmas through three foundational pillars: (1) zero content censorship on user manuscripts, (2) complete client-side AES-256 encryption ensuring zero server-side story logging, and (3) a sophisticated Lorebook and Memory architecture that dynamically injects relevant character traits, setting rules, and narrative constraints into context windows up to 28,672 tokens.",
  "howItWorks": "Unlike conversational chatbots that produce detached summary responses to questions, NovelAI operates as a true token-continuation copilot. An author inputs opening narrative lines into the document editor. NovelAI's context assembler dynamically evaluates the document: it reads the preceding prose, pulls active memory entries (Author's Note, Memory box, and regex-triggered Lorebook entries based on mentioned keywords), and structures the prompt payload according to user-selected sampler presets (adjusting Temperature, Min-P, Top-K, and Repetition Penalties). When the author presses Send or hits the hotkey, the underlying model (Erato 70B or Kayra 13B) seamlessly appends the next clause, dialogue beat, or paragraph, matching the established narrative perspective, tense, and stylistic voice. Users can also train custom AI modules using Anlas tokens or switch over to NovelAI Diffusion V3 to render character portraits directly matching story descriptions.",
  "features": [
    {
      "name": "Erato (70B Llama 3) & Kayra (13B) In-House Fiction Models",
      "detail": "Bespoke narrative models trained exclusively on literary fiction, complex dialogue, and creative prose. Erato (available on Opus) delivers high literary nuance and structural complexity, while Kayra (available on all paid tiers) offers fast, responsive, and highly malleable prose continuation."
    },
    {
      "name": "Dynamic Cascading Lorebook & Regex Memory Triggering",
      "detail": "A comprehensive worldbuilding database that automatically injects character dossiers, faction lore, and magic rules into the active AI context window whenever specified keyword triggers, search keys, or regex conditions appear in the recent text."
    },
    {
      "name": "Client-Side Zero-Knowledge AES-256 Encryption",
      "detail": "Every story, lorebook entry, and author note is encrypted in the user's browser before being transmitted to Anlatan's servers. Even NovelAI system engineers and database administrators have zero technical ability to read user manuscripts."
    },
    {
      "name": "NovelAI Diffusion V3 (SDXL Creative Visual Suite)",
      "detail": "An integrated generative image studio powered by custom-tuned SDXL models, specializing in stylized anime, graphic novel aesthetics, character concept art, and high-fidelity fantasy illustrations with negative prompt controls."
    },
    {
      "name": "Advanced Sampler Controls & Community Presets",
      "detail": "Full authorial control over model inference hyperparameters, including Min-P, Top-K, Top-P, Temperature, Tail Free Sampling, Repetition Penalty, and Phrase Repetition sliders to eliminate repetitive loops and fine-tune prose variability."
    },
    {
      "name": "Author's Note & Context Placement Engine",
      "detail": "A dedicated steering panel that injects stylistic instructions (e.g., [ Style: atmospheric, gritty, fast-paced; Genre: Cyberpunk Noir ]) into the context window at precise token depths without contaminating the visible manuscript text."
    },
    {
      "name": "Text Adventure Mode & Branching Scenarios",
      "detail": "An interactive gaming mode that transforms storytelling into a text RPG, allowing authors to play through branching story scenarios using Do, Say, and Story action commands."
    },
    {
      "name": "Custom AI Module Fine-Tuning",
      "detail": "Enables authors to upload their own writing samples, historical texts, or specific genre corpora to train custom LoRA-style modules using Anlas tokens, permanently teaching the AI unique authorial cadences."
    }
  ],
  "aiAndModels": "NovelAI develops and hosts its own proprietary AI models on dedicated compute clusters. For text generation, its flagship models include Erato (a custom 70B parameter fine-tune built upon Meta-Llama 3, exclusive to the Opus tier), Kayra (a 13B parameter bespoke NAILM transformer trained on high-grade literature, available across Tablet, Scroll, and Opus), Xialong (an experimental 355B parameter GLM-based architecture in preview testing), and legacy Clio (3B). For visual generation, it deploys NovelAI Diffusion V3, an extensively fine-tuned SDXL model tailored for expressive character art, anime aesthetics, and fantasy worldbuilding.",
  "inputsOutputs": "Inputs: Plain text, rich prose drafts, Markdown outlines, .story file packages, Lorebook JSON dictionaries, image prompts, and custom training corpora (.txt). Outputs: Seamless narrative prose continuations, dynamic character dialogue, branchable story scenarios, high-resolution PNG/WEBP illustrations (with embedded generation metadata), and downloadable AES-256 encrypted story backups.",
  "limits": [
    "Not an Automated One-Click Book Generator: Unlike Sudowrite's Story Bible or Claude's macro outline-to-chapter generators, NovelAI is engineered as an interactive co-writer. Authors cannot simply paste a 3-bullet outline and expect an 80,000-word novel without active sentence-by-sentence steering and line editing.",
    "Steep Hyperparameter Learning Curve: Getting the best output requires understanding sampler configurations (Min-P, Repetition Penalty, Context Budgeting). Inexperienced users who rely on unoptimized default presets frequently complain of repetitive phrasing or wandering logic.",
    "Erato Context Limit Capped at 8,192 Tokens: Because Erato is derived from the base Llama 3 70B foundation, its active context window is constrained to 8,192 tokens on Opus (compared to Kayra's 28,672 tokens), requiring authors to maintain strict Lorebook hygiene to prevent amnesia.",
    "Subscription Anlas Expiration on Billing Reset: Monthly subscription Anlas allowances (1,000 on Tablet/Scroll, 10,000 on Opus) do not roll over past the 30-day billing cycle; they refresh back to the baseline tier quota unless supplementary paid Anlas is purchased.",
    "No Native Book Typesetting or EPUB Formatting: NovelAI is an authoring and generation studio, not a book publishing formatter. Authors must export manuscripts to Word, Scrivener, Vellum, or Atticus for interior layout, table of contents generation, and EPUB/MOBI compilation."
  ],
  "useCases": [
    "Uncensored Fiction Drafting: Writing full-length dark fantasy, psychological horror, post-apocalyptic survival, and mature romance novels free from corporate moralizing and content filter bans.",
    "Sentence-by-Sentence Creative Co-Writing: Discovery writers brainstorming dialogue turns, descriptive scenery, and narrative action in real time with an AI that mimics their unique literary voice.",
    "Complex Lore & Worldbuilding Management: Maintaining persistent multi-generational fantasy worlds where character bios, magical limits, and kingdom histories automatically trigger during writing sprints.",
    "Visual Character Design & Scene Mockups: Using NovelAI Diffusion V3 to generate detailed visual concept art, character reference sheets, and cover illustration concepts alongside written chapters.",
    "Interactive Roleplay & Text Adventures: Playing and authoring branching narrative scenarios where the AI responds to user choices with atmospheric world reactions and unpredictable plot twists."
  ],
  "poorFit": [
    "Corporate Copywriters & Marketing Teams: Professionals seeking SEO blog posts, corporate press releases, LinkedIn thought leadership, or landing page copy will find NovelAI completely ill-suited compared to Jasper, Copy.ai, or ChatGPT.",
    "Non-Fiction, Academic, and Technical Writers: Authors requiring factual citations, research synthesis, mathematical calculations, or code execution should use NotebookLM, Consensus, Perplexity, or Claude.",
    "Passive One-Click Authors: Writers seeking an automated tool to transform a brief premise into an entire finished manuscript with zero human involvement will be frustrated by NovelAI's active co-writing design."
  ],
  "pricing": [
    {
      "name": "Paper Tier (Free Trial - $0)",
      "detail": "Provides 50 complimentary text generation actions, 30 free image generations, access to standard models, and basic 2,048 token memory to test the platform before subscribing."
    },
    {
      "name": "Tablet Tier ($10/month)",
      "detail": "Unlimited text generations using Kayra (13B) and Clio (3B) models. Includes 8,192 tokens of context memory (~32,000 characters), 150 tokens per generation action, and 1,000 monthly subscription Anlas for image generation and module training."
    },
    {
      "name": "Scroll Tier ($15/month)",
      "detail": "Unlimited text generations using Kayra and Clio with an expanded 12,288 token context memory window (~49,000 characters), 150 tokens per generation action, and 1,000 monthly subscription Anlas."
    },
    {
      "name": "Opus Tier ($25/month - Flagship Plan)",
      "detail": "The definitive tier for serious authors: Unlimited text generations across ALL models, including flagship Erato (Llama 3 70B), Kayra (13B), and experimental Xialong (355B). Massive 28,672 token context window (~114,000 characters on Kayra; 8k on Erato), 250 tokens per generation action, 10,000 monthly subscription Anlas, and UNLIMITED free image generations (normal size <= 1024x1024, <= 28 steps)."
    }
  ],
  "integrations": [
    "Progressive Web App (PWA) installable across Windows, macOS, Linux, iOS, and Android",
    "Local browser storage with client-side zero-knowledge AES-256 encrypted cloud backup",
    "JSON Lorebook and scenario file import and export compatibility",
    "SillyTavern and third-party frontend integration via official NovelAI API bearer tokens",
    "NovelAI Diffusion V3 image generator with embedded prompt metadata in PNG/WEBP files"
  ],
  "developer": [
    "Official REST API endpoints for text completion, tokenization, and image generation",
    "Bearer token authentication with granular API key management inside user account settings",
    "Fine-grained sampler parameter control (Min-P, Top-K, Temperature, Presence/Frequency Penalties, Logit Bias)",
    "Custom AI Module fine-tuning pipeline allowing user-trained LoRA weights on specific authorial datasets"
  ],
  "privacy": "NovelAI enforces the strongest privacy standard in the generative AI industry: client-side zero-knowledge AES-256 encryption. All manuscripts, story documents, lorebook entries, and author notes are encrypted in the user's browser prior to cloud transmission. Anlatan servers do not log or store unencrypted story text, and user writing is strictly NEVER harvested or used to train future AI foundation models.",
  "ownership": "Authors retain 100% full intellectual property and commercial copyright ownership over all text, narratives, and images generated within NovelAI. Anlatan asserts zero claim, license, or royalty demands over user creations.",
  "alternatives": [
    {
      "name": "Sudowrite",
      "detail": "The top alternative for authors who prefer structured macro planning (Story Bible, outline-to-chapter generation, and sensory Describe buttons). However, Sudowrite enforces strict third-party commercial content filters and charges significantly more via token credit limits."
    },
    {
      "name": "Novelcrafter",
      "detail": "A comprehensive Bring-Your-Own-Key (BYOK) novel planning and drafting interface. Offers sophisticated worldbuilding codexes and direct connections to OpenRouter models (Claude 3.5 Sonnet, Llama 3.3 70B, DeepSeek V3) at raw token costs."
    },
    {
      "name": "Claude 3.7 Sonnet (Anthropic)",
      "detail": "The premier general-purpose foundation model for complex dialogue and literary prose nuance. While offering superior raw intellect, it lacks dedicated fiction interfaces, enforces corporate content moderation, and offers no persistent Lorebook system."
    },
    {
      "name": "ChatGPT Plus (OpenAI)",
      "detail": "A versatile brainstorming and outlining assistant powered by GPT-4o. Useful for worldbuilding ideation, but suffers from repetitive prose clich�s, corporate censorship refusals, and lack of long-form manuscript memory."
    }
  ],
  "strengths": [
    "Zero Censorship & Complete Creative Freedom: Enables writers to explore dark fantasy, mature romance, graphic horror, and moral ambiguity without preachy refusal flags",
    "Client-Side Zero-Knowledge Encryption: Unmatched data privacy protecting unpublished intellectual property through AES-256 encryption before cloud transmission",
    "Literary-Tuned Models (Erato 70B & Kayra 13B): In-house LLMs trained specifically on narrative mechanics, dynamic dialogue, and atmospheric prose continuation",
    "Opus Tier Value: Unlimited text generations and unlimited standard-resolution image generations for a flat $25/month fee, eliminating per-word anxiety",
    "Cascading Lorebook Vector Architecture: Highly granular keyword and regex triggering dynamically feeds relevant character lore into active context windows"
  ],
  "limitations": [
    "Steep Learning Curve: Requires fine-tuning sampler sliders (Min-P, repetition penalties) and mastering Lorebook keys to achieve consistent high-grade output",
    "No Automated Chapter Generation: Functions as an interactive co-writer; cannot automatically generate complete multi-thousand-word chapters from brief outlines",
    "Erato Context Capped at 8,192 Tokens: The 70B flagship model has a smaller context limit than Kayra (28,672 tokens), necessitating disciplined Lorebook pruning",
    "Subscription Anlas Expiry: Unused monthly subscription Anlas resets upon billing cycle renewal rather than rolling over continuously",
    "No Interior Book Typesetting: Lacks native tools for compiling and formatting manuscripts into distribution-ready EPUB, PDF, or print interiors"
  ],
  "workflow": [
    "Input: Premise Framing & Lorebook Architecture: Create a new story project, define the narrative POV and tense, and populate the Lorebook with character sheets, faction motivations, setting rules, and custom regex keyword triggers.",
    "Stylistic Direction: In the Author's Note panel, set your bracketed stylistic guidance (e.g., [ Genre: Dark Fantasy; Style: Gritty, sensory, atmospheric; Pacing: Tense ]) and configure the Memory box with active scene objectives.",
    "Sampler Selection: Select your model (Erato 70B for maximum prose nuance on Opus, or Kayra 13B for agile pacing) and activate a verified community sampler preset (e.g., Pro Writer Min-P 0.05 with calibrated repetition penalties).",
    "Prose Co-Writing & Steering: Draft opening scene lines, hit the Send trigger to allow the model to append the next narrative beats, and alternate between writing and editing to guide character dialogue and plot progression.",
    "Visual Concept Art Generation: Switch to NovelAI Diffusion V3, paste character tags and scene descriptions, and generate visual character portraits or setting concept art to embed within your project.",
    "Quality Gate: Review generated text for authorial voice consistency, verify that Lorebook context was properly retrieved without contradictions, audit for repetitive phrasing loops, and export the manuscript as a clean Markdown or .docx document for final book typesetting."
  ],
  "takeaway": "NovelAI is the undisputed champion of private, uncensored creative fiction co-writing. For indie novelists, dark romance writers, and speculative worldbuilders frustrated by the sanitized guardrails of corporate chatbots or the expensive credit meters of Sudowrite, NovelAI's flat-rate Opus tier ($25/mo), custom literary models (Erato 70B and Kayra 13B), and zero-knowledge AES-256 encryption offer an unmatched creative sanctuary.",
  "sources": [
    {
      "title": "NovelAI Official Creative AI Studio & Model Documentation",
      "publisher": "Anlatan Inc.",
      "url": "https://novelai.net/",
      "type": "official"
    },
    {
      "title": "NovelAI Subscription Tiers, Memory Limits & Anlas Pricing Structure",
      "publisher": "Anlatan Inc.",
      "url": "https://novelai.net/pricing",
      "type": "official"
    },
    {
      "title": "NovelAI vs Sudowrite: Comprehensive Fiction Author Review, Privacy & Model Benchmark",
      "publisher": "Independent AI Writing Community (r/NovelAI & WritingWithAI)",
      "url": "https://arcanumrpgs.com/",
      "type": "independent"
    }
  ]
};
