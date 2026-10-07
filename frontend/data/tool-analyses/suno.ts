import type { ToolAnalysis } from './types.ts';

export const sunoAnalysis: ToolAnalysis = {
  lastVerified: '2026-10-07',
  summary: 'Suno is the premier generative AI music creation platform, transforming natural language prompts and structured lyrical verses into full, radio-ready songs spanning virtually any genre in under 60 seconds. Powered by proprietary foundation audio models (v3.5 and v4), Suno orchestrates melodic composition, multi-instrumental arrangement, realistic singing vocals, dynamic song progression (verse, pre-chorus, chorus, bridge, outro), and stem separation. From content creators and indie game developers to professional songwriters seeking rapid melodic ideation, Suno democratizes music production with both one-shot complete song synthesis and timeline audio extension tools.',
  company: 'Suno, Inc.',
  officialUrl: 'https://suno.com/',
  status: 'Active, global market leader in generative AI music with over 15M creators, proprietary v3.5 and v4 high-fidelity audio engines, web and mobile creation suites, and deep lyrical structuring capabilities.',
  targetUsers: [
    'Content creators, YouTubers, streamers, and podcasters producing original, royalty-free background themes, podcast intros, and episodic soundtrack cues without copyright strikes',
    'Indie game developers, filmmakers, and digital storytellers generating dynamic adaptive soundtracks, ambient world-building audio, and character themes on a budget',
    'Songwriters, lyricists, and vocalists rapidly prototyping song concepts, testing lyrical cadence and rhyming schemes, and discovering unexpected chord progressions before studio recording',
    'Marketing teams and advertising agencies generating custom jingles, promotional campaign earworms, and short-form TikTok/Reels audio memes in minutes',
    'Hobbyists, musicians, and educators exploring songwriting theory, genre mashups, and interactive vocal generation across diverse linguistic styles'
  ],
  problemSolved: 'Traditional music production requires years of instrument training, complex Digital Audio Workstation (DAW) mastery, expensive virtual instruments, recording studio time, and licensing negotiations. Stock music libraries are saturated, generic, and still risk content copyright flags. Suno solves this by transforming natural language style tags and user-written lyrics into fully produced, cohesive songs with human-like vocals, lush instrumentation, and dynamic musical tension in under a minute, slashing production barriers and unlocking limitless songwriting exploration.',
  howItWorks: 'Suno is built on proprietary transformer-based deep audio diffusion and language models trained on diverse musical structures. When a user inputs a text description (e.g., "uplifting 80s synthwave anthem with gated reverb drums and expressive female vocals") and optional custom lyrics, Suno\'s language engine parses the rhythm, meter, and emotional valence of each line. The diffusion model synthesizes raw 44.1kHz audio in the frequency domain, generating melody, chord harmonies, rhythm tracks, and realistic synthetic vocals concurrently. Each prompt generates two alternative variations (consuming 10 credits). Users can then isolate stems (vocal vs instrumental), extend sections from any timestamp, replace lyrical segments, or adjust the persona vocal profile.',
  features: [
    {
      name: 'Flagship v4 & v3.5 Audio Engines',
      detail: 'Generates cohesive songs up to 4 minutes in a single generation with enhanced vocal fidelity, crisper percussion, broader dynamic range, and natural vocal inflection.'
    },
    {
      name: 'Custom Lyrical Metatag Control',
      detail: 'Supports structural lyric tags including [Verse], [Pre-Chorus], [Chorus], [Bridge], [Guitar Solo], [Drop], [Outro], and style markers to dictate song tempo and arrangement.'
    },
    {
      name: 'Instrumental Mode',
      detail: 'Toggle to mute vocal synthesis and produce purely instrumental orchestral tracks, lofi hip-hop beats, electronic EDM drops, or ambient cinematic score cues.'
    },
    {
      name: 'Stems Separation (Pro & Premier)',
      detail: 'Automatically decouples rendered audio into isolated Vocal and Backing Instrumental tracks, exportable into DAWs (FL Studio, Ableton Live, Logic Pro) for professional mixing and mastering.'
    },
    {
      name: 'Timeline Audio Extension',
      detail: 'Extend any generated track forwards or backwards from any timestamp, adding progressive verses, extended guitar solos, or definitive fade-out outros without losing melodic cohesion.'
    },
    {
      name: 'Audio Input & Covers',
      detail: 'Upload up to 8 minutes (Pro) or 30 minutes (Premier) of live audio, hummed melodies, or acoustic riffs to generate AI covers across alternative musical genres.'
    },
    {
      name: 'Vocal Persona Persistence',
      detail: 'Save and re-use a specific synthetic singer\'s vocal timbre, pitch range, and accent across multiple songs to establish artist branding across an entire virtual EP or album.'
    },
    {
      name: 'Web & Mobile Creative Suite',
      detail: 'Intuitive cross-platform studio with real-time waveform scrubbing, prompt remixing, public/private track toggles, and organized playlist curation.'
    }
  ],
  aiAndModels: 'Suno develops proprietary foundation audio architectures combining autoregressive language modeling with latent audio diffusion. Rather than stitching audio clips or using symbolic MIDI files, Suno\'s v3.5 and v4 models generate raw, continuous waveforms in high-resolution audio. The models are trained across massive multi-genre datasets to understand musical pacing, vocal breath intake, harmonic intervals, and genre conventions. Models run on high-performance cloud GPU clusters, with Pro and Premier tiers receiving priority GPU cluster dispatch.',
  inputsOutputs: 'Inputs: Natural language style prompts (genre, instruments, tempo, mood), custom lyrics with structural bracket tags ([Verse], [Chorus]), uploaded audio reference clips (WAV/MP3 up to 8-30 minutes), and duration flags. Outputs: Complete stereo audio files in MP3 (192-320 kbps) or lossless WAV format (Pro/Premier), separated vocal/instrumental stems, synchronized lyric text sheets, and shareable public song links.',
  limits: [
    'Free plan tracks are owned by Suno under Creative Commons non-commercial licensing; monetization on Spotify, Apple Music, and YouTube Content ID is strictly prohibited without a paid subscription',
    'No retroactive commercial rights: Upgrading to Pro does NOT confer commercial monetization rights to tracks generated while on the Free plan; songs must be generated or extended while actively subscribed to Pro/Premier',
    'No official public developer REST API: Third-party automated bots or scraping tools violate Suno\'s Terms of Service and risk account termination',
    'Fast vocal rap or dense tongue-twisters can occasionally produce slurred pronunciation, garbled phonetic syllables, or unintentional vocal artifacts',
    'Monthly subscription credits (2,500 on Pro, 10,000 on Premier) do not roll over across billing cycles; unused monthly allocations expire on renewal',
    'Legal and copyright ambiguity: Generative AI audio cannot be copyrighted under current US Copyright Office guidance without substantial human editing, and ongoing RIAA legal actions present industry licensing headwinds'
  ],
  useCases: [
    'Independent YouTube creators, Twitch streamers, and podcasters generating custom, strike-free intro themes, transition stingers, and mood-setting background music',
    'Indie game studios and interactive media producers creating adaptive soundtracks, town exploration themes, and character boss battle anthems',
    'Songwriters and lyricists auditioning melodies, exploring multi-genre arrangements, and crafting audio guide tracks for session vocalists',
    'Commercial marketing agencies generating bespoke radio jingles, TikTok challenge background tracks, and social video hooks in minutes',
    'Music producers extracting Suno vocal hooks or harmonic stems as creative sample material for further processing inside professional DAWs'
  ],
  poorFit: [
    'Audiophile studio mastering requiring pristine uncompressed multi-track stems (24+ individual instrument tracks like kick, snare, hi-hat, bass, synth, lead guitar)',
    'Production environments requiring surgical micro-tuning, exact pitch correction (Melodyne-level control), or MIDI note-level event editing',
    'Commercial projects requiring immediate legal copyright registration guarantees without human creative post-processing',
    'Programmatic enterprise SaaS platforms requiring automated server-to-server API endpoints for on-demand music generation',
    'Strict acoustic classical ensembles requiring exact orchestral sheet music adherence and authentic non-synthetic acoustic resonances'
  ],
  pricing: [
    {
      name: 'Basic Plan (Free)',
      detail: '$0/month. Includes 50 daily credits replenishing every midnight UTC (~10 songs / 5 generations per day). Non-commercial personal use only with mandatory attribution. Standard generation queue; Suno retains ownership of generated tracks.'
    },
    {
      name: 'Pro Plan',
      detail: '$10/month ($96/year billed annually at $8/mo). Includes 2,500 monthly credits (~500 songs / 250 generations), general commercial rights, priority generation queue (up to 10 simultaneous jobs), stem separation, and audio upload up to 8 minutes.'
    },
    {
      name: 'Premier Plan',
      detail: '$30/month ($288/year billed annually at $24/mo). Includes 10,000 monthly credits (~2,000 songs / 1,000 generations), commercial rights, priority generation queue, full Persona persistence, Suno Studio access, and audio upload up to 30 minutes.'
    },
    {
      name: 'Credit Top-Up Packs',
      detail: 'Available exclusively to active Pro and Premier subscribers to replenish depleted monthly allowances. Purchased top-up credits do not expire as long as a paid subscription remains active.'
    }
  ],
  integrations: [
    'Suno Web Application (suno.com)',
    'Suno iOS & Android Mobile Apps',
    'Discord Bot (legacy community interaction)',
    'DAW Export Workflow (lossless WAV and stem export for Ableton Live, FL Studio, Logic Pro, and Reaper)'
  ],
  developer: [
    'Suno does NOT currently offer an official public REST, GraphQL, or WebSocket API',
    'Automated scraping or third-party reverse-engineered API gateways violate Suno Terms of Service and will trigger permanent account suspension',
    'Developers requiring programmatic AI audio generation are advised to utilize official APIs from Stable Audio (Stability AI), ElevenLabs Music, or Loudly'
  ],
  privacy: [
    'Public by default on Free: Songs, lyrics, and prompts created on Free plans appear in public community explore feeds and search results',
    'Privacy controls available on Pro and Premier: Paid subscribers can set songs to Unlisted or Private to prevent public showcase visibility',
    'User prompts and generation interactions may be used by Suno for internal telemetry and future model training in accordance with privacy policies'
  ],
  ownership: [
    'Free Plan outputs are owned entirely by Suno; users receive a non-commercial, personal-use license and cannot monetize tracks on Spotify or YouTube',
    'Pro and Premier subscribers own all rights to the audio files created during an active subscription, with perpetual commercial rights covering streaming, sync licensing, and monetization',
    'Perpetual commercial protection: Tracks generated while an active Pro or Premier subscription was in place retain commercial rights even if the subscription is later canceled',
    'No retroactive ownership: Upgrading to Pro does not grant commercial rights to songs created on the Free tier prior to subscribing'
  ],
  alternatives: [
    {
      name: 'Udio',
      detail: 'Chief competitor renowned for superior vocal clarity and rich organic instrument textures (rock, jazz, soul), though requiring a more fragmented chunk-by-chunk extension workflow.'
    },
    {
      name: 'ElevenLabs Music',
      detail: 'Emerging audio intelligence platform focused on hyper-expressive vocal synthesis and deep developer API integrations for real-time applications.'
    },
    {
      name: 'Beatoven.ai',
      detail: 'Creator-centric AI music platform designed for video editors and podcasters, generating mood-based instrumental background tracks with granular stem editing.'
    },
    {
      name: 'Stable Audio 2.0 (by Stability AI)',
      detail: 'Diffusion-based stereo audio model capable of generating up to 3-minute tracks and sound effects with full audio-to-audio style transfer and commercial API access.'
    },
    {
      name: 'Soundraw',
      detail: 'Customizable royalty-free AI music generator where users modify tempo, intro length, and instrument drops without full synthetic singing vocals.'
    }
  ],
  strengths: [
    'Complete Song Synthesis: Generates complete, radio-style 2- to 4-minute songs with intro, verses, chorus, and outro in a single one-shot prompt',
    'Superior Lyric Phrasing & Cadence: Masterfully adapts to complex rhymes, rap delivery, syncopation, and multilingual lyrical accents',
    'Clear Commercial Rights for Subscribers: Pro ($10/mo) provides affordable perpetual commercial rights for Spotify and YouTube streaming monetization',
    'Stem Separation & Timeline Extensions: High-utility production tools for isolating vocals and continuing tracks seamlessly',
    'Addictive Speed & User Interface: Lightning-fast 30-second generations enable effortless musical ideation and prototyping'
  ],
  limitations: [
    'Metallic Audio Artifacts: Certain acoustic genres (acoustic folk, jazz, classical piano) can suffer from compressed high frequencies and artificial sheen',
    'Free Tier Commercial Ban: Strict prohibition against monetizing songs made on the Free plan, with zero retroactive upgrades',
    'No Official Developer API: Hinders programmatic music generation inside third-party SaaS apps or automated game development pipelines',
    'Limited Stem Granularity: Separates only into vocal vs instrumental tracks; cannot isolate individual drum kit, bass guitar, or piano stems',
    'Legal Cloud: Industry pushback and RIAA copyright litigation introduce future regulatory and licensing uncertainties'
  ],
  workflow: [
    '1. Account Setup & Commercial Tier Verification: Navigate to suno.com and create an account. For any song intended for commercial distribution (Spotify, YouTube, video games, client ads), subscribe to the Pro ($10/mo) or Premier ($30/mo) plan before generating tracks to ensure full commercial ownership rights.',
    '2. Song Concept & Lyrical Architecture: Switch to "Custom Mode" in the Suno interface. Draft or paste custom lyrics, organizing them with structural bracket tags: [Intro], [Verse 1], [Pre-Chorus], [Chorus], [Verse 2], [Guitar Solo], [Bridge], [Chorus], and [Outro]. Specify musical styles in the Style field (e.g., "Modern Alt-Rock, punchy bass, crunchy overdriven guitars, melodic female vocals, 135 bpm").',
    '3. Dual-Variation Generation & Listening Review: Click "Create" to consume 10 credits and produce two distinct song variations within 30-45 seconds. Listen on studio headphones or reference monitors to evaluate melodic catchiness, vocal clarity, dynamic progression, and tempo consistency.',
    '4. Inpainting, Extensions & Persona Selection: If a verse needs refinement, use "Replace Section" or "Extend" from a specific timestamp to develop longer progressions or dramatic outros. If the vocalist timbre is exceptional, save the profile as a "Persona" to reuse across subsequent tracks.',
    '5. Stem Separation, Mastering & DAW Export: Select "Get Stems" to decouple the vocal track from the instrumental backing. Download the high-resolution audio files (WAV). Import the stems into a DAW (Logic Pro, Ableton, FL Studio) to apply EQ, de-essing, stereo widening, and final limiting before distribution to streaming platforms or video sync.'
  ],
  takeaway: 'Suno AI represents the benchmark in generative AI music in 2026, making radio-caliber songwriting accessible to anyone with an internet connection. While professional audio engineers will note the high-frequency compression artifacts in acoustic genres and the lack of an official developer API limits programmatic SaaS builders, Suno\'s astonishing songwriting intuition, dynamic lyrical flow, stem separation, and affordable $10/mo commercial licensing make it an essential creative accelerator for creators, game developers, lyricists, and digital marketers worldwide.',
  sources: [
    {
      title: 'Suno Official Documentation & Knowledge Base',
      publisher: 'Suno',
      url: 'https://help.suno.com/',
      type: 'official'
    },
    {
      title: 'Suno Pricing, Subscription Plans & Credit Quotas',
      publisher: 'Suno',
      url: 'https://suno.com/pricing',
      type: 'official'
    },
    {
      title: 'Suno Terms of Service & Commercial Rights Policy',
      publisher: 'Suno',
      url: 'https://suno.com/terms',
      type: 'official'
    },
    {
      title: 'Reddit r/SunoAI & r/audiomusic Production Benchmarks & Workflow Guides',
      publisher: 'Reddit Communities',
      url: 'https://www.reddit.com/r/SunoAI/',
      type: 'independent'
    }
  ]
};
