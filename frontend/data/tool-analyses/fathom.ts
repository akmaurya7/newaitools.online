import type { ToolAnalysis } from './types.ts';

export const fathomAnalysis: ToolAnalysis = {
  lastVerified: '2026-10-12',
  summary:
    'Fathom (fathom.video) is a top-rated AI meeting assistant, video call recorder, and conversation intelligence platform engineered specifically for client-facing professionals, sales teams, agencies, and cross-functional teams using Zoom, Google Meet, and Microsoft Teams. Founded by Richard White, Fathom eliminated the tedious friction of manual meeting note-taking by offering an extraordinarily generous Free plan featuring unlimited video recording, permanent cloud storage, and full transcription across 38+ languages. During live calls, users can click to bookmark critical moments or drop timestamped markers. Within 30 seconds of meeting completion, Fathom delivers structured, human-readable AI summaries, categorized action items, and shareable video highlight snippets. On paid team tiers, Fathom transforms into a revenue intelligence engine with automated two-way CRM sync (Salesforce, HubSpot, Close), automated deal field population, global call search, team coaching scorecards, and the conversational "Ask Fathom" AI assistant.',
  company: 'Fathom Video, Inc. (San Francisco, CA)',
  officialUrl: 'https://fathom.video/',
  status:
    'Active; market-leading AI meeting assistant and video call intelligence platform for Zoom, Google Meet, and Microsoft Teams; features 100% free individual tier with unlimited recordings, 38-language transcription, 1-click bookmarks, automated CRM deal sync, and "Ask Fathom" cross-meeting AI retrieval.',
  targetUsers: [
    'Account Executives, SDRs, and Sales Leaders conducting prospect discovery, product demos, and contract negotiations who need automated CRM logging and deal field sync',
    'Agency Founders, Freelancers, and Consultants conducting client onboarding and strategy sessions who need clear action items and shareable video clips without monthly transcription caps',
    'Customer Success and Support Managers documenting client health checks, onboarding milestones, and feature requests with searchable video transcripts',
    'Product Managers and UX Researchers recording user interviews who need timestamped video snippets to embed directly into Notion, Jira, or Productboard',
    'Engineering Managers, Tech Leads, and Founders conducting sprint retrospectives, architectural reviews, and 1-on-1s without missing key commitments or technical nuances'
  ],
  problemSolved:
    'Professionals spend hours every week split between actively listening to meeting participants and frantically typing messy bullet points. Traditional recording setups generate massive, unwieldy video files that no one ever watches and 25-page verbatim transcripts that bury actionable commitments under conversational banter. Furthermore, revenue and agency teams frequently lose critical deal intelligence due to manual CRM data entry fatigue. Fathom solves these problems by capturing video and audio, transcribing multi-speaker dialogue with high precision, and producing structured, high-signal summaries with assigned action items in under 30 seconds. For sales teams, it automatically updates CRM contact records and custom deal fields, eliminating hours of administrative drudgery.',
  howItWorks:
    'Fathom connects seamlessly with Google Calendar or Microsoft 365 and integrates directly with Zoom (via native Zoom App), Google Meet, and Microsoft Teams (via an automated recording bot). During a call, users can click "Bookmark" or press keyboard hotkeys to flag high-priority moments, customer objections, or agreement points. Immediately when the call concludes, Fathom transcribes the conversation across 38+ languages using specialized speech-to-text models, attributes dialogue via speaker diarization, and applies frontier LLMs (Anthropic Claude and OpenAI GPT models) to extract concise takeaways and next steps. Users can share password-protected video snippets, search across transcripts using "Ask Fathom", or auto-sync summaries directly into HubSpot, Salesforce, Close, Notion, Slack, or Google Docs.',
  features: [
    {
      name: 'Instant AI Call Summaries & Action Items',
      detail:
        'Generates comprehensive, formatted meeting recaps and assigned task checklists within 30 seconds of call completion, eliminating manual recap drafting and post-call email fatigue.'
    },
    {
      name: 'One-Click Live Moment Bookmarking & Video Clips',
      detail:
        'Allows participants to click a single button or press a hotkey during live calls to bookmark pivotal discussion points, creating instant, shareable timestamped video snippets.'
    },
    {
      name: 'Ask Fathom Conversational Call Search',
      detail:
        'An interactive conversational AI assistant that queries individual meetings or cross-meeting libraries to answer complex questions, compare customer feedback, or draft tailored follow-up emails.'
    },
    {
      name: 'Automated CRM Sync & Custom Field Updates',
      detail:
        'Syncs meeting summaries, action items, and call recordings directly to contacts, accounts, and opportunities in HubSpot, Salesforce, and Close, with automatic population of custom deal fields.'
    },
    {
      name: 'Multi-Speaker Diarization Across 38+ Languages',
      detail:
        'Accurately separates and identifies individual speakers with high-precision speech-to-text transcription supporting 38 global languages and diverse regional accents.'
    },
    {
      name: 'Centralized Team Call Library & Shared Playlists',
      detail:
        'Organizes organization-wide meeting recordings into searchable team folders, allowing sales managers to curate onboarding playlists of stellar demo calls and objection-handling clips.'
    },
    {
      name: 'Conversation Intelligence & Coaching Metrics',
      detail:
        'Provides actionable analytics including talk-time percentage, monologue length, sentiment trends, and keyword alerts to assist sales coaching and customer experience audits.'
    },
    {
      name: 'Search-Snippet FAQ: Is Fathom AI really free forever, and what are the exact free plan limits?',
      detail:
        'Yes, Fathom offers a genuinely free individual plan with no expiration date and no monthly meeting caps. The Free plan includes 100% unlimited meeting recording, unlimited video storage, and unlimited transcription across 38 languages for Zoom, Google Meet, and Microsoft Teams calls. It includes standard AI call summaries and allows up to 5 Advanced AI summaries per month. Paid tiers (Premium at $16-$20/mo, Team at $15-$19/seat/mo, and Business at $25-$34/seat/mo) are only required for unlimited Advanced AI summaries, automated CRM deal syncing, centralized team libraries, and coaching analytics.'
    },
    {
      name: 'Search-Snippet FAQ: How does Fathom compare to Otter.ai, Fireflies.ai, and Granola in 2026?',
      detail:
        'Fathom stands out for its unmatched free individual tier, clean structured summaries, timestamped video clip sharing, and deep CRM deal field syncing. Otter.ai is preferred by users needing real-time live transcription viewing, mobile app in-person recording, and audio playback scrubbing, but Otter enforces tight free limits (300 mins/month) and produces wordier transcripts. Fireflies.ai specializes in calendar automation across 100+ languages and audio-only workflows, whereas Fathom captures full video. Granola differs fundamentally by capturing local desktop audio without sending any bot into your calls, ideal for private 1-on-1s where bot presence is undesirable.'
    },
    {
      name: 'Search-Snippet FAQ: How does Fathom record meetings, and does a visible bot have to join your calls?',
      detail:
        'On Google Meet and Microsoft Teams, Fathom sends a visible recording bot (named "Fathom Notetaker") into your conference room to capture video and audio streams. On Zoom, Fathom can run as an integrated native Zoom App that captures audio/video directly through Zoom APIs, offering a more seamless experience. Fathom also provides audio notifications and visual banners to satisfy legal two-party consent requirements across all jurisdictions.'
    },
    {
      name: 'Search-Snippet FAQ: Does Fathom sync notes and update deal fields in HubSpot and Salesforce automatically?',
      detail:
        'Yes. On the Business plan ($25-$34/seat/month), Fathom provides automated, bidirectional CRM synchronization with HubSpot, Salesforce, and Close. Beyond simply pasting meeting transcripts into contact notes, Fathom uses AI to extract specific deal metrics, customer budget, competitor mentions, and next steps, and maps them directly into custom CRM properties and deal pipelines post-call without manual intervention.'
    },
    {
      name: 'Search-Snippet FAQ: Is Fathom AI secure, SOC 2 / HIPAA compliant, and does it train models on your calls?',
      detail:
        'Fathom enforces rigorous enterprise security standards. It is SOC 2 Type 2 certified, GDPR compliant, and offers HIPAA compliance with signed Business Associate Agreements (BAA) on Enterprise tiers. All data is encrypted using TLS 1.3 in transit and AES-256 at rest on AWS infrastructure. Crucially, Fathom has strict enterprise agreements with foundation model providers (OpenAI and Anthropic) prohibiting them from using customer call transcripts or audio recordings to train public foundation models.'
    }
  ],
  aiAndModels:
    'Fathom orchestrates a sophisticated multi-stage AI pipeline. Initial speech-to-text audio processing is handled by high-accuracy, customized Whisper speech models optimized for multi-speaker conversational dialogue, technical vocabulary, and accent resilience across 38+ languages. For semantic extraction, meeting structuring, and the conversational "Ask Fathom" intelligence assistant, Fathom utilizes frontier LLMs including Anthropic Claude 3.5 Sonnet and OpenAI GPT-4o. Proprietary prompt chains parse dialogue into logical agenda segments, separate casual chitchat from commercial commitments, and format structured action items with explicit owner attribution.',
  inputsOutputs:
    'Inputs: Live video and multi-channel audio streams from Zoom, Google Meet, and Microsoft Teams; Google Calendar and Microsoft 365 meeting metadata; real-time user click bookmarks and tags; custom team prompt templates. Outputs: Structured Markdown and rich-text meeting summaries; categorized action item checklists; searchable full-text multi-speaker transcripts; timestamped shareable MP4 video snippets; synchronized HubSpot, Salesforce, and Close CRM deal updates; Notion pages; Slack channel updates; and Google Docs exports.',
  limits: [
    'Visible Bot Presence on Meet & Teams: Fathom requires an automated attendee bot to enter Google Meet and Microsoft Teams calls, which can cause social friction in sensitive client meetings where bots are frowned upon.',
    'Advanced Summary Quota on Free Tier: While standard recording and transcription are unlimited on the Free plan, users are capped at 5 Advanced AI summaries per month unless they upgrade to Premium ($16-$20/mo) or Team ($15-$19/seat/mo).',
    'Advanced CRM Deal Field Sync Behind Business Paywall: Automatic population of custom HubSpot and Salesforce deal properties requires the Business tier ($25-$34/seat/month with a 2-seat minimum requirement).',
    'Limited Standalone Mobile In-Person Recording: Fathom is architected specifically around web conferencing platforms (Zoom, Meet, Teams); it lacks the robust standalone in-person lecture or offline mobile audio ingestion of mobile-first tools like Otter.ai.',
    'Two-Party Consent Host Liability: Because Fathom records video and audio, meeting hosts in two-party consent jurisdictions must ensure all participants are formally aware and agree to recording.'
  ],
  useCases: [
    'Sales Discovery & Demo Calls: Capturing prospect requirements, pricing objections, and buying criteria while auto-syncing notes and updating deal stages in HubSpot or Salesforce',
    'Client Strategy & Agency Check-ins: Generating concise executive summaries and timestamped task checklists for clients immediately following project review sessions',
    'User Research & Customer Interviews: Bookmarking key friction points and usability reactions to create quick video highlight reels for product design teams and stakeholders',
    'Engineering Standups & Sprint Retrospectives: Keeping engineering leads fully engaged in technical debates while Fathom logs architectural decisions, dependencies, and sprint tasks',
    'Candidate Hiring Interviews: Documenting candidate responses and interview impressions to share standardized feedback across hiring committees'
  ],
  poorFit: [
    'High-Volume Inbound Call Centers requiring automated telephonic call distribution (ACD) monitoring, live agent call whispering, and telephony PBX hardware integrations',
    'Legal Courtroom Depositions & Arbitrations requiring certified, court-admissible verbatim court reporting and official chain-of-custody stenography archives',
    'Private Executive 1-on-1s where attendees object to external recording bots joining the conference room (where local capture tools like Granola are superior)',
    'Air-Gapped or Completely Disconnected Environments requiring on-premise speech recognition and local LLM processing without internet connectivity'
  ],
  pricing: [
    {
      name: 'Free Plan ($0/forever)',
      detail:
        '$0/month (Free Forever for individuals). 100% unlimited meeting recordings, unlimited cloud video storage, unlimited transcription across 38 languages for Zoom, Google Meet, and Microsoft Teams. Includes standard AI summaries and up to 5 Advanced AI summaries per month, 1-click bookmarks, and shareable video clips.'
    },
    {
      name: 'Premium Plan ($16/user/month billed annually or $20/month billed monthly)',
      detail:
        'Designed for solo professionals and consultants. Unlimited Advanced AI summaries, AI action item generation, automated post-meeting follow-up email drafts, the "Ask Fathom" AI assistant for personal calls, custom bot naming, and removal of Fathom branding banners. 1 user minimum.'
    },
    {
      name: 'Team Plan ($15/seat/month billed annually or $19/seat/month billed monthly)',
      detail:
        'Designed for collaborative teams (2-seat minimum). Everything in Premium, plus centralized team call library, shared folders, cross-meeting organization search, team playlists, shared video snippets, team comments, and custom keyword alerts.'
    },
    {
      name: 'Business Plan ($25/seat/month billed annually or $34/seat/month billed monthly)',
      detail:
        'Designed for high-performance sales and customer-facing teams (2-seat minimum). Everything in Team, plus unlimited CRM sync (Salesforce, HubSpot, Close) without domain limits, CRM custom field sync (auto-populating deal values and next steps post-call), Deal View pipeline tracking, conversation intelligence metrics (talk-time ratio, coaching scorecards), and custom AI summary templates.'
    },
    {
      name: 'Enterprise Plan (Custom Quote)',
      detail:
        'Custom enterprise pricing for large organizations. Everything in Business, plus SAML Single Sign-On (SSO), SCIM user provisioning, organization-wide data retention and auto-deletion policies, HIPAA compliance with a signed Business Associate Agreement (BAA), and a dedicated Customer Success Manager.'
    }
  ],
  integrations: [
    'Zoom (Native Zoom App integration and cloud recording integration)',
    'Google Meet (Automated bot capture and Google Calendar synchronization)',
    'Microsoft Teams (Automated bot capture and Microsoft 365 Outlook calendar sync)',
    'HubSpot CRM (Two-way contact note logging, call recording linking, and custom deal property population)',
    'Salesforce (Automated lead, contact, opportunity, and account activity logging with field mapping)',
    'Close CRM (Seamless sales activity logging and call recording attachment)',
    'Notion (Exporting structured meeting notes and task databases into team workspaces)',
    'Slack (Publishing meeting summaries and action items into designated project channels)',
    'Asana (Transforming AI-detected action items directly into assigned project tasks)',
    'Google Docs & Gmail (One-click export of summaries and automated post-call follow-up email drafts)',
    'Zapier & Make (Custom automated triggers to connect meeting data across 5,000+ web applications)'
  ],
  developer: [
    'Fathom REST API: Programmatically retrieve meeting transcripts, AI summaries, attendee metadata, and video recording URLs',
    'Webhook Triggers: Stream call completion events, action item payloads, and bookmark timestamps into internal backend pipelines',
    'Embeddable Video Player: Embed timestamped video highlight clips into internal company portals, Notion documents, or web apps',
    'Multi-Format Data Export: One-click export of transcripts and summaries into Markdown, PDF, CSV, and raw JSON formats'
  ],
  privacy:
    'Fathom maintains rigorous enterprise privacy and data governance standards. The platform is SOC 2 Type 2 certified and fully GDPR compliant. On Enterprise plans, Fathom signs Business Associate Agreements (BAA) to support HIPAA-regulated healthcare environments. All meeting audio, video, and text data is encrypted using TLS 1.3 in transit and AES-256 at rest on Amazon Web Services (AWS) data centers located in the United States. Enterprise agreements with foundation model providers (Anthropic and OpenAI) strictly ensure customer data is processed in isolated volatile memory and never utilized to train public foundation models.',
  ownership:
    'Users and corporate organizations retain 100% intellectual property ownership of all recorded videos, audio files, transcribed text, synthesized summaries, and team playlists created within Fathom. No proprietary platform lock-in exists; users can download their full MP4 video files, raw audio, and structured Markdown notes at any time.',
  alternatives: [
    {
      name: 'Otter.ai',
      detail:
        'The established transcription pioneer featuring real-time live transcript viewing, mobile app in-person recording, and audio playback scrubbing, starting from $16.99/user/month.'
    },
    {
      name: 'Fireflies.ai',
      detail:
        'An enterprise-grade conversation intelligence tool featuring an automated calendar bot (Fred), transcription across 100+ languages, and deep CRM sync from $18/user/month.'
    },
    {
      name: 'Granola',
      detail:
        'A minimalist, bot-free desktop meeting notepad for macOS and Windows that enhances user-typed bullets with system audio transcripts using Claude 3.5 Sonnet from $14/user/month.'
    },
    {
      name: 'Krisp',
      detail:
        'An on-device AI voice clarity and meeting assistant offering bidirectional noise cancellation, accent localization, and bot-free meeting transcription from $16/user/month.'
    },
    {
      name: 'Zoom AI Companion',
      detail:
        'Zoom built-in AI meeting summarizer included at no additional cost with paid Zoom Workplace plans, offering meeting recaps and chat summaries directly in the Zoom ecosystem.'
    }
  ],
  strengths: [
    'Unbeatable Free Tier: Unlimited meeting recordings, unlimited cloud storage, and unlimited transcription across 38 languages with zero forced expiration',
    'Actionable, Fluff-Free Summaries: Produces clear, concise takeaways and assigned action items that eliminate the need to read dense 20-page transcripts',
    'One-Click Live Moment Bookmarks: Empowers users to flag key quotes or objections during calls to produce instant timestamped video clips',
    'Automated CRM Deal Sync: Business plan automatically populates custom HubSpot and Salesforce deal fields, saving sales reps hours of manual data entry',
    'Enterprise-Grade Security: SOC 2 Type 2 certified and HIPAA compliant with signed BAA for enterprise and healthcare organizations'
  ],
  limitations: [
    'Visible Recording Bot on Meet & Teams: Requires an automated bot attendee to join Google Meet and Microsoft Teams calls, which may cause hesitation in confidential meetings',
    'Advanced Summary Quota on Free Tier: Standard summaries are unlimited, but users receive only 5 Advanced AI summaries per month on the Free plan',
    'High-End CRM Automation Gated Behind Business Plan: Automated field sync requires the Business plan ($25-$34/seat/mo) with a 2-seat minimum requirement',
    'Web-Conferencing Centric: Not optimized for standalone offline in-person recording or mobile lectures compared to mobile-first tools like Otter.ai',
    'Consent Management Overhead: Hosts must actively disclose recording to comply with multi-party consent wiretapping laws'
  ],
  workflow: [
    '1. Pre-Meeting Calendar Integration & Configuration: Connect Fathom with Google Calendar or Microsoft 365 Outlook. Configure recording preferences, choose whether the Fathom notetaker bot joins automatically for internal vs external meetings, and customize AI summary templates with required deal fields.',
    '2. Live Call Capture & Real-Time Bookmarking: Launch your video meeting on Zoom, Google Meet, or Microsoft Teams. When key milestones occur such as a client budget disclosure, technical objection, or contract deadline, click the Fathom Bookmark button or hit the keyboard hotkey to capture the exact timestamp.',
    '3. Instant Multi-Speaker Transcription & AI Synthesis: When the host ends the call, Fathom automatically processes the audio and video streams. Within 30 seconds, optimized Whisper models generate a 38-language transcript while Claude 3.5 Sonnet and GPT-4o synthesize the conversation into structured takeaways and action items.',
    '4. Post-Call Quality Review & Clip Editing: Access the meeting dashboard to review the summary, verify assigned tasks, and create 30-second shareable video highlight clips of pivotal moments to embed into client follow-up emails or internal project briefs.',
    '5. Automated CRM Sync & Multi-App Distribution: On the Business tier, Fathom automatically syncs the meeting brief to matching contacts in HubSpot or Salesforce, maps key data points into custom deal fields, and posts a notification into your designated Slack project channel.',
    '6. Cross-Linking & Ecosystem Synergies: Connect this meeting intelligence workflow with our /workflow/research-to-published-article framework, explore related communication software in /category/meetings-and-communication, compare alternatives in /tool/otter, /tool/fireflies, /tool/granola, and /tool/krisp, and review professional recording disclosure protocols in /blog/ai-notes-client-calls-consent-first.'
  ],
  takeaway:
    'Fathom is the gold-standard AI meeting assistant for client-facing professionals, sales reps, consultants, and agencies who demand accurate notes, actionable task lists, and shareable video clips without prohibitive software costs. With an extraordinarily generous Free plan offering unlimited recording and transcription across 38 languages, paired with enterprise-grade automated CRM sync and conversation intelligence on Business tiers, Fathom eliminates post-meeting admin fatigue and empowers teams to stay 100% focused on their clients.',
  sources: [
    {
      title: 'Fathom AI Video Notetaker & Meeting Assistant Official Platform',
      publisher: 'Fathom Video, Inc.',
      url: 'https://fathom.video/',
      type: 'official'
    },
    {
      title: 'Fathom Pricing, Free Plan Features & Business Tier Breakdown (2026)',
      publisher: 'Fathom Video Pricing Portal',
      url: 'https://fathom.video/pricing',
      type: 'official'
    },
    {
      title: 'Fathom Security Architecture, SOC 2 Type 2 & HIPAA Compliance',
      publisher: 'Fathom Video Trust Center',
      url: 'https://fathom.video/security',
      type: 'official'
    },
    {
      title: 'Reddit r/sales & r/productivity Community Discussion: Fathom vs Otter in 2026',
      publisher: 'Reddit Community Consensus',
      url: 'https://www.reddit.com/r/sales/',
      type: 'independent'
    },
    {
      title: 'Meetings & Communication AI Tools Directory (2026)',
      publisher: 'NewAITools Directory Category Reviews',
      url: 'https://www.newaitools.online/category/meetings-and-communication',
      type: 'independent'
    },
    {
      title: 'AI Meeting Notes: A Consent-First Workflow for Client Calls (2026)',
      publisher: 'NewAITools Editorial Guide',
      url: 'https://www.newaitools.online/blog/ai-notes-client-calls-consent-first',
      type: 'independent'
    }
  ]
};
