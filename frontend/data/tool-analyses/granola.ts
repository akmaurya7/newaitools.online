import type { ToolAnalysis } from './types.ts';

export const granolaAnalysis: ToolAnalysis = {
  lastVerified: '2026-10-12',
  summary:
    'Granola (granola.ai) is an AI-powered meeting notepad designed for professionals who want accurate, customized meeting notes without subjecting clients or colleagues to intrusive calendar bots. Founded by Chris Pedregal and Sam Stephenson, Granola reimagines meeting productivity around a "human-in-the-loop" philosophy: instead of relying on a generic virtual attendee (like OtterPilot or Fred) to join video calls and dump walls of unedited transcript text, Granola runs quietly on macOS and Windows to record system audio directly from your speakers and microphone. During calls, users type their own quick shorthand bullets and high-priority takeaways. Once the conversation concludes, Granola combines your handwritten notes with the raw audio transcript, employing frontier reasoning models (Anthropic Claude 3.5 Sonnet and OpenAI GPT-4o) to expand, refine, and structure comprehensive summaries that preserve your original intent and personal voice. With native integrations for Notion, Slack, HubSpot, Salesforce, and developer Model Context Protocol (MCP) endpoints, Granola turns ephemeral conversations into actionable, organized team assets.',
  company: 'Granola AI, Inc. (London & San Francisco)',
  officialUrl: 'https://granola.ai/',
  status:
    'Active; hyper-growth AI meeting notepad and desktop audio transcription platform for macOS, Windows, and iOS; features bot-free audio capture, dual-stream transcript-to-note alignment, Claude 3.5 Sonnet synthesis, native CRM/Notion integration, and Model Context Protocol (MCP) support.',
  targetUsers: [
    'Founders, Executives, and Product Managers conducting back-to-back customer discovery, 1-on-1s, and sprint planning who want clean, actionable recaps without awkward bot attendees',
    'Account Executives and Sales Leaders pitching enterprise prospects who need instant CRM synchronization into HubSpot or Salesforce while maintaining rapport without intimidating clients',
    'Designers, Researchers, and Consultants who write personal shorthand notes during interviews and need AI to flesh out quotes, context, and decisions automatically',
    'Engineering Managers and Tech Leads tracking architectural debates, cross-functional dependencies, and action items across Google Meet, Zoom, and Microsoft Teams',
    'AI Developers and Knowledge Workers who want to bridge meeting intelligence into external LLM workflows using Granola’s Model Context Protocol (MCP) server'
  ],
  problemSolved:
    'Traditional AI meeting assistants suffer from two major flaws: social friction and cognitive disconnect. Sending a visible bot into a high-stakes client call or intimate 1-on-1 often creates distrust, triggers corporate compliance bans, or makes clients hesitant to speak freely. Furthermore, standard AI bots generate passive, 10-page verbatim transcripts that bury key decisions under conversational fluff. Granola solves this by capturing system audio directly at the operating system level—ensuring zero bots join your call—and pairing the audio context directly with your rough handwritten notes. This produces concise, high-signal meeting briefs that mirror what you actually found important.',
  howItWorks:
    'Granola operates as a lightweight desktop application running on macOS or Windows. When a meeting begins (whether on Zoom, Google Meet, Microsoft Teams, Slack Huddle, or in-person), Granola captures crystal-clear audio from both your input microphone and your computer output speakers using virtual audio drivers. During the discussion, you use Granola’s minimalist text editor to type rough bullets, action items, or quick impressions. When the call ends, Granola transcribes the recording using high-accuracy speech models, maps spoken timestamps directly to your typed notes, and dispatches the context to frontier models like Claude 3.5 Sonnet. The AI enhances your notes, fills in forgotten details, generates clean action item tables, and immediately discards the raw audio file to guarantee strict data privacy.',
  features: [
    {
      name: 'Bot-Free Desktop Audio Capture',
      detail:
        'Captures crystal-clear conversation audio directly from your local microphone and system speaker output on macOS and Windows, completely eliminating the need for visible bot attendees to join your Zoom, Google Meet, or Microsoft Teams calls.'
    },
    {
      name: 'Human-in-the-Loop Bullet Enrichment',
      detail:
        'Combines your rough, real-time handwritten shorthand notes with full meeting audio transcripts, using frontier reasoning LLMs to expand context, correct acronyms, and generate executive-grade summaries that reflect your personal priorities.'
    },
    {
      name: 'Granola AI Chat & Cross-Meeting Knowledge Retrieval',
      detail:
        'Provides an interactive conversational assistant to query past discussions across weeks or months of meetings, instantly drafting follow-up emails, comparing client feedback, or summarizing recurring project blockers.'
    },
    {
      name: 'Native CRM & Knowledge Base Integrations',
      detail:
        'Pushes structured summaries, key objections, and task assignments directly into Notion pages, Slack channels, HubSpot deals, Salesforce accounts, Affinity, Attio, and Zapier automated pipelines.'
    },
    {
      name: 'Model Context Protocol (MCP) & Developer Integration',
      detail:
        'Supports Anthropic’s open Model Context Protocol (MCP), allowing developers to connect meeting notes directly as contextual tools in Claude Desktop, Cursor, and custom agentic coding workflows.'
    },
    {
      name: 'Zero-Retention Audio Privacy Architecture',
      detail:
        'Processes spoken conversation streams in temporary volatile memory and deletes raw audio files immediately after transcription completes, ensuring sensitive business conversations are never archived as audio recordings.'
    },
    {
      name: 'Customizable Meeting Templates & Personas',
      detail:
        'Allows teams to build and standardize custom note formats tailored for customer discovery, quarterly business reviews (QBRs), candidate hiring interviews, engineering retrospectives, and 1-on-1 feedback sessions.'
    },
    {
      name: 'Search-Snippet FAQ: Is Granola AI free to use, and what are the exact free tier limitations?',
      detail:
        'Yes, Granola offers a permanent Free (Basic) tier ($0/month) that includes unlimited meeting recording and transcription, bot-free desktop audio capture on macOS and Windows, AI-enhanced notes with custom templates, and Granola AI Chat. The key limitation is that your searchable meeting history is capped at a rolling 30-day window (older notes remain securely stored on servers but cannot be accessed until you upgrade to the Business plan at $14/user/month or $10/user/month billed annually). The Free tier also excludes direct CRM/Notion integrations and advanced reasoning models.'
    },
    {
      name: 'Search-Snippet FAQ: How does Granola capture audio without sending an annoying bot to my meetings?',
      detail:
        'Granola operates as a native desktop application on macOS and Windows that intercepts audio at the operating system level. It captures both your microphone input and your computer’s speaker output simultaneously using system audio permissions. Because the audio is ingested locally from your hardware, no virtual bot participant (such as OtterPilot or Fred) ever enters the conference room on Zoom, Google Meet, Microsoft Teams, or Webex. This prevents meeting awkwardness, avoids IT administrative firewalls, and keeps client calls completely organic.'
    },
    {
      name: 'Search-Snippet FAQ: Granola vs Otter.ai vs Fireflies.ai: Which AI meeting tool should you choose in 2026?',
      detail:
        'Choose Granola if you want an unobtrusive personal notepad where you jot quick thoughts that AI cleans up without sending a visible bot into client calls. Choose Otter.ai if your priority is real-time live transcription with simultaneous multi-user highlighting, mobile audio recording for university lectures, and searchable audio playback to hear exact quotes. Choose Fireflies.ai if you manage a sales organization requiring automated calendar bot joining, deep CRM integration (Salesforce/HubSpot), conversation analytics (talk-time ratio, sentiment), and transcription across 100+ languages.'
    },
    {
      name: 'Search-Snippet FAQ: Is Granola AI secure, and does it store or train models on my meeting conversations?',
      detail:
        'Granola enforces strict enterprise-grade privacy safeguards. The platform deletes all raw audio files immediately after speech-to-text processing is complete. Third-party model providers (Anthropic Claude and OpenAI) are bound by enterprise business agreements strictly forbidding them from training foundation models on your meeting text or audio data. Granola is SOC 2 Type 2 certified, GDPR compliant, stores data encrypted in transit and at rest on AWS US infrastructure, and allows enterprise administrators to enforce org-wide AI training opt-outs.'
    },
    {
      name: 'Search-Snippet FAQ: Does Granola support Windows, iOS, and integrations with Notion and Slack?',
      detail:
        'Yes. Granola provides fully supported native desktop applications for macOS and Windows, alongside an iOS mobile companion app for taking in-person meeting notes on the go. On the Business plan ($14/user/month), Granola connects natively with Notion, Slack, HubSpot, Salesforce, Affinity, Attio, and Zapier, and provides a built-in Model Context Protocol (MCP) server so AI developers can query meeting context from Cursor or Claude Code.'
    }
  ],
  aiAndModels:
    'Granola orchestrates a multi-model architecture. High-accuracy transcription is powered by optimized Whisper-derived speech-to-text models that handle diverse accents and multi-speaker overlapping dialogue. For context synthesis, note structuring, and semantic chat, Granola leverages Anthropic Claude 3.5 Sonnet and OpenAI GPT-4o, using prompt engineering tuned to respect the user’s handwritten bullet hierarchy without inserting fabricated corporate jargon or conversational fluff.',
  inputsOutputs:
    'Inputs: System audio from computer speakers, local microphone audio streams, user-typed Markdown bullets, meeting calendar metadata (attendee names, meeting titles from Google Calendar and Microsoft Outlook), and custom note template prompts. Outputs: Formatted Markdown meeting notes, categorized action item checklists with assigned owners, executive decision briefs, Notion workspace pages, Slack notifications, HubSpot/Salesforce CRM timeline entries, and Model Context Protocol (MCP) context payloads.',
  limits: [
    '30-Day History Access on Free Tier: While free users can record unlimited meetings, notes older than 30 days are locked and require an upgrade to Business ($14/month) to view or search.',
    'Desktop Client Requirement: Because audio capture happens locally at the operating system level, Granola must run on macOS or Windows; it cannot passively record meetings unattended in the cloud if your computer is asleep or off.',
    'Zero Stored Audio Playback: Because Granola deletes raw audio files immediately after transcription to preserve privacy, you cannot click text to listen back to original audio snippets (unlike Otter.ai or Fathom).',
    'Legal and Consent Responsibility on Host: Since no bot announces itself in the call, users in two-party consent jurisdictions are ethically and legally responsible for informing attendees that the call is being transcribed.',
    'Context Window Truncation on Marathon Calls: In continuous multi-hour sessions exceeding 2.5 to 3 hours, lengthy transcripts can occasionally cause LLM synthesis to condense or overlook secondary discussions from the first hour.'
  ],
  useCases: [
    'Client-Facing Pitches & Agency Discovery: Capturing critical client requirements, scope changes, and budget considerations without intimidating prospects with an intrusive recording bot',
    'Weekly Engineering Standups & Sprint Planning: Keeping engineering leads focused on architectural debate while Granola extracts action items, blockers, and ticket requirements',
    'Customer Research & User Interviews: Synthesizing user feedback, usability friction points, and feature requests while allowing the researcher to actively engage with the participant',
    'Executive 1-on-1s & Mentorship Sessions: Documenting career development goals, feedback, and mutual commitments with complete confidentiality and zero social awkwardness'
  ],
  poorFit: [
    'High-Volume Contact Centers & Support Desks requiring automated call distribution (ACD) monitoring, live agent compliance whispering, and supervisor barge-in tools',
    'Legal Depositions & Courtroom Hearings requiring certified, verbatim court reporting with permanent time-stamped audio/video archives for evidentiary submission',
    'Hands-Off Executives Wanting Unattended Meeting Coverage: If you skip a meeting, Granola cannot record it for you because it relies on local hardware audio capture rather than a cloud calendar bot',
    'Strict Air-Gapped or On-Premise Installations: Granola utilizes secure cloud endpoints for LLM synthesis and cannot run entirely disconnected from internet connectivity'
  ],
  pricing: [
    {
      name: 'Basic Plan ($0/month)',
      detail:
        '$0/month (Free Forever). Unlimited meetings and audio transcriptions, bot-free desktop recording (macOS, Windows, iOS), AI-enhanced notes with user bullet points, Granola AI Chat (Auto model), customizable note templates, and shared folders. Limited to a rolling 30-day accessible note history.'
    },
    {
      name: 'Business Plan ($14/user/month)',
      detail:
        '$14/user/month ($10/user/month billed annually at $120/year). Unlimited accessible meeting history and searchable archive, access to advanced AI models (Claude 3.5 Sonnet / reasoning modes), native integrations (Notion, Slack, HubSpot, Salesforce, Affinity, Attio, Zapier), Model Context Protocol (MCP) server integration, Granola API access, team shared folders, cross-meeting intelligence queries, and centralized team billing.'
    },
    {
      name: 'Enterprise Plan ($35/user/month)',
      detail:
        '$35/user/month (billed annually with custom contracts). Everything in Business, plus SAML Single Sign-On (SSO), organization-wide AI training opt-out enabled by default, SOC 2 Type 2 compliance audit report, enterprise shared folder discovery, team usage analytics, priority technical support, and a dedicated customer success manager.'
    },
    {
      name: 'Student & Startup Programs',
      detail:
        'Granola offers a dedicated Student Pack granting 12 months of free Business tier access to verified college and university students, as well as specialized discount programs for early-stage startups and nonprofit organizations.'
    }
  ],
  integrations: [
    'Notion (Automatic export of formatted meeting notes and action items into team workspaces)',
    'Slack (Pushing meeting briefs and assigned tasks directly into designated project channels)',
    'HubSpot CRM (Syncing meeting notes, follow-up items, and deal context into contact timelines)',
    'Salesforce (Automated opportunity and account activity logging from sales conversations)',
    'Affinity & Attio (Syncing relationship intelligence and investor meeting notes into modern CRMs)',
    'Model Context Protocol (MCP) (Direct context feeding into Claude Desktop, Cursor, and developer tools)',
    'Google Calendar & Microsoft Outlook (One-click calendar synchronization and meeting title linking)',
    'Zapier (Building automated multi-app triggers and document distribution workflows)'
  ],
  developer: [
    'Model Context Protocol (MCP) Server: Exposes local meeting notes as structured tools for Claude Desktop and Cursor agentic workflows',
    'Granola REST API: Query historical meetings, fetch structured summaries, and trigger programmatic note creation on paid plans',
    'Native Markdown Export: Export notes with clean semantic headers, checklists, and bulleted hierarchies with a single keyboard shortcut',
    'Webhook Integration: Trigger downstream automations upon meeting conclusion via Zapier or custom HTTP endpoints'
  ],
  privacy:
    'Granola implements industry-leading privacy and data protection standards. Raw audio streams are processed in real time and permanently deleted immediately after speech transcription completes. Enterprise agreements with foundation model providers (Anthropic and OpenAI) strictly prohibit customer meeting data from being used for AI training. Granola maintains SOC 2 Type 2 certification, full GDPR compliance, and encrypts all stored transcripts and notes both in transit (TLS 1.3) and at rest (AES-256) on AWS US infrastructure. Organization-wide model training opt-outs are standard on Enterprise tiers.',
  ownership:
    'Users and organizations retain 100% intellectual property ownership of all typed notes, audio transcripts, synthesized meeting summaries, and custom templates created within Granola. No proprietary platform lock-in exists; users can export their entire archive in standard Markdown or JSON formats at any time.',
  alternatives: [
    {
      name: 'Otter.ai',
      detail:
        'The pioneer of AI meeting transcription, featuring an autonomous OtterPilot bot that joins calls, generates live synchronized transcripts, and allows users to listen back to original audio recordings from $16.99/user/month.'
    },
    {
      name: 'Fireflies.ai',
      detail:
        'An enterprise conversational intelligence platform using an automated calendar bot (Fred) that syncs call recaps into CRMs, tracks sentiment and speaker talk time, and supports 100+ languages from $18/user/month.'
    },
    {
      name: 'Fathom',
      detail:
        'A popular meeting assistant for Zoom, Google Meet, and Teams that offers generous free AI summaries, video clip sharing, and automated CRM logging for sales reps from $19/user/month for team features.'
    },
    {
      name: 'Notion AI',
      detail:
        'A comprehensive connected workspace AI that can summarize meetings and draft documents directly inside your existing Notion databases, starting at $10/user/month add-on.'
    },
    {
      name: 'Supernormal',
      detail:
        'A meeting intelligence tool focused on automated notes for Google Meet and Zoom with customizable templates and multi-language support, starting from $15/user/month.'
    }
  ],
  strengths: [
    'Zero Bot Intrusiveness: Operates silently via local OS desktop audio capture without sending awkward virtual attendees into your video calls',
    'Human-in-the-Loop Synthesis: Blends your actual typed thoughts with spoken context, creating notes that reflect what you actually prioritized',
    'Permanent Audio Deletion: Protects client confidentiality by discarding raw audio recordings immediately after transcription',
    'Generous Free Tier: Unlimited meeting recordings and AI summaries with no monthly transcription hour caps on the Basic plan',
    'Developer-Friendly MCP Integration: Natively bridges meeting context into Claude Desktop, Cursor, and modern AI development environments'
  ],
  limitations: [
    '30-Day Rolling History on Free Tier: Notes older than 30 days are locked behind the $14/month Business subscription',
    'Requires Local Desktop App: Cannot passively record meetings in the cloud if your computer is powered off or disconnected',
    'No Audio Playback Scrubbing: Because audio is discarded for privacy, users cannot click a word to re-listen to the spoken audio snippet',
    'Host Must Ensure Two-Party Consent: Without a bot announcing recording status, the user is personally responsible for meeting disclosure',
    'Less Comprehensive Sales Analytics: Lacks deep conversational analytics (like talk-to-listen ratios and competitor mention tracking) found in Gong or Fireflies'
  ],
  workflow: [
    '1. Pre-Meeting Template Setup & Calendar Linking: Connect Granola to your Google Calendar or Microsoft Outlook account. Select or create a standardized note template (e.g., "Client Discovery Call", "Sprint Retrospective", or "1-on-1 Feedback") with pre-structured headers such as Key Takeaways, Action Items, and Next Steps.',
    '2. Silent Local Audio Capture: Launch your video call on Zoom, Google Meet, Microsoft Teams, or Slack. Start Granola’s desktop recorder on macOS or Windows. Granola quietly captures system speaker output and microphone audio locally without sending an intrusive bot attendee into the meeting.',
    '3. Real-Time Shorthand Note Taking: During the conversation, type quick bullet points, technical terms, decision points, and rough reminders into Granola’s minimalist editor. Granola timestamps each typed note to align with the spoken conversation.',
    '4. Frontier LLM Synthesis & Quality Review: When the meeting concludes, click "Finish". Granola dispatches the speech transcript and your typed bullets to Anthropic Claude 3.5 Sonnet. The model expands your notes, resolves technical jargon, formats a structured action item table, and immediately wipes the raw audio recording from memory.',
    '5. One-Click Knowledge Distribution & CRM Sync: Review the generated summary in Granola, make any minor refinements, and click export. Automatically sync the recap into your Notion workspace, post a notification to a dedicated Slack channel, update contact timelines in HubSpot or Salesforce, or query the meeting context via Model Context Protocol (MCP) in Cursor.',
    '6. Cross-Linking & Ecosystem Synergies: Connect this meeting capture workflow with our /workflow/research-to-published-article process, explore related productivity software in /category/meetings-and-communication, compare alternatives in /tool/otter and /tool/fireflies, and review client communication guidelines in /blog/ai-notes-client-calls-consent-first.'
  ],
  takeaway:
    'Granola is the gold-standard AI meeting notepad for professionals who refuse to compromise on social etiquette, client rapport, or data privacy. By rejecting invasive calendar bots in favor of local desktop audio capture and human-in-the-loop AI synthesis, Granola ensures your notes capture what you actually care about—without subjecting your clients to corporate surveillance anxiety. For founders, product managers, sales executives, and developers seeking clean, high-signal meeting documentation with seamless Notion, CRM, and MCP integrations, Granola is an indispensable daily productivity asset.',
  sources: [
    {
      title: 'Granola AI Official Platform & Bot-Free Meeting Notepad',
      publisher: 'Granola AI',
      url: 'https://granola.ai/',
      type: 'official'
    },
    {
      title: 'Granola Pricing, Business Tier Features & Student Pack (2026)',
      publisher: 'Granola AI Pricing Portal',
      url: 'https://granola.ai/pricing',
      type: 'official'
    },
    {
      title: 'Granola Security, Privacy Policy & Zero-Retention Audio Architecture',
      publisher: 'Granola AI Security Center',
      url: 'https://granola.ai/security',
      type: 'official'
    },
    {
      title: 'Reddit r/ProductivityApps & r/SaaS Community Discussion: Granola vs Otter vs Fireflies',
      publisher: 'Reddit Productivity Community Consensus',
      url: 'https://www.reddit.com/r/ProductivityApps/',
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
