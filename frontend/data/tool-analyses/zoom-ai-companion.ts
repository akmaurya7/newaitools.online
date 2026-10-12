import type { ToolAnalysis } from './types.ts';

export const zoomAiCompanionAnalysis: ToolAnalysis = {
  lastVerified: '2026-10-12',
  summary:
    'Zoom AI Companion (formerly Zoom IQ) is an enterprise-grade generative AI assistant deeply woven into the Zoom Workplace productivity ecosystem. Available at no additional licensing cost for all paid Zoom Workplace accounts (starting at $13.33/user/month), AI Companion eliminates meeting transcription costs and administrative overload for businesses, educators, and distributed teams. Powered by Zoom\'s proprietary federated AI architecture—which dynamically routes queries across frontier LLMs from OpenAI (GPT-4o), Anthropic (Claude 3.5 Sonnet), Meta (Llama), and Zoom\'s custom low-latency speech models—AI Companion provides instant live meeting queries ("Catch me up", "Was my name mentioned?"), automated multi-language meeting summaries, timestamped chapter breakdowns, actionable task assignments, Team Chat thread synthesis, and Zoom Phone voicemail prioritization without requiring third-party bot attendees.',
  company: 'Zoom Video Communications, Inc. (San Jose, CA)',
  officialUrl: 'https://www.zoom.com/en/ai-assistant/',
  status:
    'Active; deeply integrated AI productivity assistant across Zoom Workplace; included at no extra cost for paid Zoom accounts; features AI Companion 2.0 with persistent side-panel conversational search, live meeting catch-up, smart recording chapters, automated action items, Zoom Phone summaries, and zero customer data model training.',
  targetUsers: [
    'Corporate Managers, Team Leads, and Project Managers running high-frequency Zoom calls who need automated meeting recaps, assignable action items, and topic chapters without paying $10-$30/user/month for standalone transcription bots',
    'Executive Assistants and Operations Leaders managing cross-departmental communications who rely on Zoom Team Chat summarization, email drafting, and meeting scheduling assistants',
    'Customer Success and Sales Professionals conducting client discovery and QBRs who need instant recall ("What objections did the client raise in the first 10 minutes?") without distracting live typing',
    'Educators, Academic Instructors, and Workshop Facilitators conducting remote lectures who need clean student-accessible smart recordings and lecture chaptering',
    'IT Administrators and Enterprise Security Officers seeking an enterprise-compliant, SOC 2 / HIPAA / GDPR verified AI meeting assistant that guarantees zero customer data training and eliminates unauthorized third-party bot ingress'
  ],
  problemSolved:
    'Knowledge workers waste countless hours manually jotting down notes during video conferences, drafting recap emails, and parsing through hour-long meeting recordings to find specific deliverables. Furthermore, organizations adopting third-party AI transcription bots face mounting per-seat software costs ($10 to $34/user/mo), security review headaches, awkward bot interruptions in client calls, and compliance liabilities regarding recording consent and model training. Zoom AI Companion solves these dilemmas by embedding native, zero-bot generative AI capabilities directly inside the video client, phone system, and chat threads at zero additional cost for licensed Zoom Workplace users.',
  howItWorks:
    'Zoom AI Companion operates directly within the native Zoom desktop, web, and mobile clients without dispatching external bot avatars into the participant gallery. Leveraging a federated AI model approach, the platform dynamically evaluates task parameters (such as low-latency live queries vs. deep post-meeting synthesis) and orchestrates processing across OpenAI GPT models, Anthropic Claude, open weights, and Zoom\'s proprietary speech recognition models. In real time, users can open the AI Companion panel to discreetly ask questions like "Summarize what was discussed before I joined" or "What action items were assigned to engineering?". Once the meeting concludes, AI Companion automatically formats a structured summary, categorizes takeaways, segments cloud recordings into clickable smart chapters with speaker talk-time analytics, and distributes recaps via email, Team Chat, or Zoom Docs.',
  features: [
    {
      name: 'In-Meeting Live Assistant ("Catch Me Up" & Q&A)',
      detail:
        'Allows late attendees or distracted participants to privately ask the side-panel AI questions such as "What did Sarah say about the Q3 budget?", "Was my name mentioned?", or "Has a decision been made?", delivering real-time answers without interrupting the live discussion.'
    },
    {
      name: 'Automated Post-Meeting Summaries & Next Steps',
      detail:
        'Instantly synthesizes full-length discussions into clear, structured executive overviews, thematic bullet points, and assignable action item checklists distributed automatically via email or Zoom Team Chat.'
    },
    {
      name: 'Smart Cloud Recording & Dynamic Chaptering',
      detail:
        'Splits video recordings into logical, timestamped chapters, highlights pivotal moments, tracks speaker talk-time ratios, and generates automated transcripts with multi-speaker diarization across 36+ languages.'
    },
    {
      name: 'AI Companion 2.0 Persistent Side-Panel Search',
      detail:
        'A unified conversational assistant accessible across Zoom Workplace that contextualizes queries by retrieving information across past meetings, chat threads, Zoom Docs, and connected Microsoft 365 or Google Workspace calendars.'
    },
    {
      name: 'Zoom Phone AI Call Recaps & Voicemail Prioritization',
      detail:
        'Summarizes recorded phone conversations, extracts key next steps, and analyzes incoming voicemails to surface urgent tasks and sentiment tags directly within the Zoom Phone client.'
    },
    {
      name: 'Team Chat Thread Summarization & Message Compose',
      detail:
        'Summarizes lengthy, multi-message chat channels and provides prompt-based drafting to rephrase announcements, adjust tone (formal, friendly, concise), and generate rapid replies.'
    },
    {
      name: 'Zoom Docs & Whiteboard Idea Generation',
      detail:
        'Populates collaborative documents, tables, and whiteboard mind maps directly from meeting transcripts, converting brainstorming conversations into structured project execution plans.'
    },
    {
      name: 'Search-Snippet FAQ: Is Zoom AI Companion really free, or do you have to pay extra?',
      detail:
        'Zoom AI Companion is included at no additional licensing cost for all paid Zoom Workplace accounts (such as Workplace Pro at $13.33-$15.99/user/month and Workplace Business at $18.33-$21.99/user/month). Free basic accounts receive a light trial quota (capped at 3 meeting summaries and 20 AI queries per month). Unlike standalone tools like Otter.ai ($10-$20/mo) or Fathom ($19-$32/mo), organizations already paying for Zoom Workplace licenses do not pay an extra per-seat add-on fee for core AI Companion features.'
    },
    {
      name: 'Search-Snippet FAQ: How does Zoom AI Companion compare to Otter.ai, Fathom, and Fireflies in 2026?',
      detail:
        'Zoom AI Companion provides unmatched cost efficiency ($0 add-on cost for Zoom paid users) and native, zero-bot participant UX within Zoom. However, Otter.ai, Fathom, and Fireflies.ai hold distinct advantages for cross-platform workflows: they can send autonomous bots into Google Meet and Microsoft Teams, integrate bidirectionally with CRMs (Salesforce, HubSpot) to populate custom deal fields, and provide specialized revenue intelligence analytics. Zoom AI Companion is ideal for Zoom-centric teams seeking to consolidate software spend, while Fathom and Fireflies remain superior for multi-platform sales and agency teams.'
    },
    {
      name: 'Search-Snippet FAQ: Does Zoom train AI models on customer audio, video, or meeting content?',
      detail:
        'No. Zoom\'s official Terms of Service (Section 10.2) explicitly state that Zoom does NOT use customer audio, video, chat, screen-sharing, or communication-like content to train Zoom or third-party artificial intelligence models. Transcripts and summaries are processed securely under enterprise zero-data-retention agreements.'
    },
    {
      name: 'Search-Snippet FAQ: Can Zoom AI Companion join Google Meet or Microsoft Teams calls?',
      detail:
        'By default, native Zoom AI Companion operates strictly within Zoom Meetings, Zoom Phone, and Zoom Team Chat. It does not send external recording bots to other video platforms on standard tiers. Organizations requiring cross-platform meeting capture across Google Meet and Microsoft Teams either purchase Zoom\'s custom AI agent add-on or utilize dedicated external meeting assistants like Fathom or Fireflies.'
    },
    {
      name: 'Search-Snippet FAQ: How do administrators enable Zoom AI Companion for their organization?',
      detail:
        'Account owners or administrators must sign in to the Zoom Web Portal, navigate to "Account Management" > "Account Settings", select the "AI Companion" tab, and toggle on "Meeting Summary", "In-Meeting Questions", and other desired modules. Admins can lock settings at the account, group, or user level and configure automated disclaimer banners to notify participants that AI features are active.'
    }
  ],
  aiAndModels:
    'Zoom employs a proprietary federated AI architecture. Rather than relying on a single foundation model, Zoom dynamically selects the most efficient, low-latency, and cost-effective engine for each specific task. This includes OpenAI models (GPT-4o, GPT-4o-mini), Anthropic Claude (Claude 3.5 Sonnet), open-source large language models (such as Meta Llama), and Zoom\'s custom proprietary speech-to-text and NLP models running on private enterprise infrastructure. All third-party model interactions execute under strict zero-data-retention enterprise agreements guaranteeing that customer data is never used for model training.',
  inputsOutputs:
    'Inputs: Live meeting audio streams, multi-speaker voice signals, real-time in-meeting chat, Zoom Phone audio calls and voicemails, Team Chat message threads, and user-prompted side-panel queries. Outputs: Real-time in-meeting Q&A responses, structured post-call executive summaries, itemized next-step checklists, timestamped video chapters, speaker talk-time ratios, draft chat and email responses, and synthesized Zoom Docs tables.',
  limits: [
    'Platform Lock-in: Native AI Companion operates strictly within Zoom Workplace meetings, chat, phone, and docs; cannot record Google Meet or Microsoft Teams sessions natively without external add-ons',
    'Admin Enablement Dependency: Often disabled by default in enterprise or educational accounts, requiring IT administrator intervention in the Zoom web portal before end users can activate it',
    'Shared Microphone Diarization: In physical conference rooms using a single room mic (without Zoom Rooms Smart Gallery hardware), speaker diarization struggles to attribute individual voices accurately',
    'Free Plan Quotas: Basic (free) Zoom accounts are capped at 3 meeting summaries and 20 AI queries per month, requiring a licensed paid host for full functionality',
    'High-Compute Avatar Limits: Generative AI avatar clips and advanced multi-agent workflows consume metered Zoom AI Credits beyond base allocations'
  ],
  useCases: [
    'Enterprise Meeting Recaps: Automatically generating and distributing executive summaries and action items across 100+ weekly internal team syncs',
    'Discreet In-Meeting Catch-Up: Enabling late arrivals to ask "Catch me up" privately in the side panel without halting meeting momentum or interrupting executive presentations',
    'Customer Success Check-ins: Generating structured bullet points of client feedback, bug reports, and SLA commitments immediately after client onboarding calls',
    'Team Chat Triage: Summarizing 50+ unread messages in high-velocity Slack/Team Chat channels into three actionable bullet points',
    'Webinar & Training Segmentation: Automatically partitioning 60-minute training webinars into searchable, clickable smart chapters with speaker breakdown metrics'
  ],
  poorFit: [
    'Multi-Platform Teams: Organizations whose external clients frequently mandate Google Meet, Microsoft Teams, or Webex calls and require a single universal recording bot',
    'Complex CRM Sales Pipelines: Enterprise sales teams needing automatic two-way mapping of meeting variables directly into custom Salesforce/HubSpot deal stages (where Fathom or Gong excel)',
    'Air-Gapped or Offline Environments: Sensitive defense or legal teams requiring strictly on-premise, offline audio transcription without cloud API routing'
  ],
  pricing: [
    {
      name: 'Zoom Basic (Free Tier Trial)',
      detail:
        '$0/month; limited trial access including up to 3 AI meeting summaries per month, 20 in-meeting AI queries, and 3 AI Doc generations; standard 40-minute meeting limit applies.'
    },
    {
      name: 'Workplace Pro (Full AI Companion Included)',
      detail:
        '$13.33/user/month (billed annually) or $15.99/user/month (billed monthly); includes full unlimited Zoom AI Companion access (unlimited meeting summaries, in-meeting Q&A, smart recording chapters, Team Chat drafting, and 5 GB cloud storage per license).'
    },
    {
      name: 'Workplace Business',
      detail:
        '$18.33/user/month (billed annually) or $21.99/user/month (billed monthly); 10-seat minimum; includes full AI Companion suite, company branding, single sign-on (SSO), managed domains, and admin control policies.'
    },
    {
      name: 'Workplace Enterprise',
      detail:
        'Custom enterprise quote; includes unlimited cloud storage, dedicated customer success manager, executive meeting intelligence, and enterprise-grade DLP compliance policies.'
    },
    {
      name: 'Custom AI Add-on / ZoomMate (Optional)',
      detail:
        '$12.00-$20.00/user/month; designed for cross-platform agentic search, custom agent building, and integration with third-party enterprise tools.'
    }
  ],
  integrations: [
    'Zoom Workplace ecosystem (Meetings, Team Chat, Phone, Whiteboard, Docs, Mail, Calendar, Clips)',
    'Microsoft 365 (Outlook Calendar, OneDrive, Word)',
    'Google Workspace (Google Calendar, Gmail, Google Drive)',
    'Salesforce (meeting recording links and basic call logging)',
    'HubSpot (call logging and calendar synchronization)',
    'Slack (Zoom integration bot for meeting launching and summary posting)',
    'Zapier (trigger actions based on completed Zoom cloud recordings)'
  ],
  developer: [
    'Zoom Video Communications, Inc. (NASDAQ: ZM)',
    'Zoom Developer Platform: REST APIs, Webhooks, and Client SDKs (Meeting SDK, Chatbot API)',
    'Webhook events for meeting summary completion: \'meeting.summary_completed\'',
    'AI Companion API endpoints available for enterprise custom agent orchestration'
  ],
  privacy:
    'SOC 2 Type II certified, ISO/IEC 27001 certified, GDPR compliant, and HIPAA compliant with signed Business Associate Agreement (BAA) on Healthcare accounts. Zoom\'s Terms of Service explicitly mandate that customer audio, video, chat, screen shares, and attachments are NEVER used to train Zoom or third-party AI foundation models. In-meeting AI requests execute with enterprise end-to-end transport encryption, and admin policies allow disabling AI features across specific sub-accounts or sensitive meeting rooms.',
  ownership:
    'Customers retain 100% intellectual property ownership of all meeting recordings, transcripts, summaries, and generated text. Zoom asserts no proprietary rights or derivative copyrights over customer communications.',
  alternatives: [
    {
      name: 'Fathom AI',
      detail:
        'Top-rated AI meeting assistant offering a 100% free individual tier with unlimited recordings across Zoom, Google Meet, and Microsoft Teams; superior automated CRM deal syncing into HubSpot/Salesforce on paid tiers.'
    },
    {
      name: 'Otter.ai',
      detail:
        'Established AI transcription pioneer with real-time live transcription and shared collaborative notes across Zoom, Meet, and Teams; capped at 300 free monthly minutes (30 min/call).'
    },
    {
      name: 'Fireflies.ai',
      detail:
        'Comprehensive conversation intelligence platform supporting 40+ languages, multi-platform bot capture, extensive CRM automation, and soundbite sharing starting at $10/seat/month.'
    },
    {
      name: 'Granola AI',
      detail:
        'Mac-native, human-in-the-loop AI meeting notepad that enhances user-typed notes with contextual transcript audio, operating without visible bot avatars.'
    }
  ],
  strengths: [
    'Zero Additional Cost: Fully included with paid Zoom Workplace plans ($13.33/mo Pro), eliminating separate $10-$30/mo transcription tool subscriptions',
    'Native Zero-Bot Experience: Operates directly inside Zoom without distracting, unwelcome third-party bot attendees in client meetings',
    'Real-Time In-Meeting Assistance: Private side-panel queries ("Catch me up", "Was my name mentioned?") provide instant clarity during live calls',
    'Broad Workplace Integration: Extends beyond video calls into Zoom Phone call summaries, voicemail prioritization, Team Chat drafting, and Zoom Docs',
    'Strict Enterprise Privacy: Zero customer communication data training policy verified under enterprise SOC 2 and HIPAA frameworks',
    'Smart Recording Chaptering: Automatically splits cloud recordings into timestamped chapters with speaker talk-time analytics'
  ],
  limitations: [
    'Zoom Platform Dependency: Cannot natively join or summarize Google Meet or Microsoft Teams calls without external add-on configurations',
    'Requires Admin Enablement: Frequently inactive until account administrators manually enable the feature toggle in the Zoom web admin portal',
    'Conference Room Voice Attribution: Speaker diarization degrades in physical meeting rooms using a single omnidirectional microphone',
    'Restricted Free Tier: Basic free users receive only 3 summaries and 20 queries monthly unless joining a licensed host\'s meeting'
  ],
  workflow: [
    'Step 1: Admin Activation & Policy Configuration -> The account administrator signs in to the Zoom Web Portal, navigates to Account Settings > AI Companion, and enables Meeting Summary and In-Meeting Questions with automated disclaimer banners.',
    'Step 2: Meeting Initiation & AI Verification -> The host starts the Zoom meeting and confirms the AI Companion icon is active in the control toolbar; participants receive an unobtrusive visual notification.',
    'Step 3: Real-Time In-Meeting Queries -> During the call, any participant can click the AI Companion icon to privately ask "Catch me up" or "What did John say about deliverables?" without interrupting speakers.',
    'Step 4: Automated Post-Meeting Synthesis -> Upon meeting termination, Zoom\'s federated models process audio transcripts, generating structured executive summaries, key takeaways, and action items in under 60 seconds.',
    'Step 5: Cloud Distribution & Smart Chapters -> Summaries are automatically dispatched to the host\'s email and designated Zoom Team Chat channels, while cloud recordings are segmented into clickable chapters with speaker metrics.',
    'Step 6: Quality Gate & CRM Integration -> The host reviews generated action items, verifies task assignments, and exports summaries into Zoom Docs, project management boards, or CRM contact notes.'
  ],
  takeaway:
    'Zoom AI Companion is the ultimate value-multiplier for organizations already utilizing Zoom Workplace. By bundling robust, multi-model generative AI capabilities—including live in-meeting Q&A, automated summaries, smart chapters, and Phone/Chat synthesis—directly into standard paid accounts at $0 extra cost, Zoom effectively renders expensive standalone transcription bots redundant for Zoom-centric teams. While multi-platform agencies and deep CRM sales pipelines still benefit from specialized tools like Fathom or Fireflies, Zoom AI Companion delivers the smoothest, most cost-effective meeting intelligence experience on the market today.',
  sources: [
    {
      title: 'Zoom AI Companion Official Overview & Feature Guide',
      publisher: 'Zoom Video Communications',
      url: 'https://www.zoom.com/en/ai-assistant/',
      type: 'official'
    },
    {
      title: 'Zoom AI Companion Getting Started & Admin Enablement Guide',
      publisher: 'Zoom Support Center',
      url: 'https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0058019',
      type: 'official'
    },
    {
      title: 'Zoom Customer Data Privacy Policy & Model Training Terms (Section 10.2)',
      publisher: 'Zoom Legal & Trust Center',
      url: 'https://www.zoom.com/en/trust/privacy/',
      type: 'official'
    },
    {
      title: 'Zoom AI Companion 2.0 Review & Competitive Breakdown',
      publisher: 'UC Today Enterprise Communications',
      url: 'https://www.uctoday.com/collaboration/video-conferencing/zoom-ai-companion-review/',
      type: 'independent'
    }
  ]
};
