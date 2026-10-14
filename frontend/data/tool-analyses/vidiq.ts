import type { ToolAnalysis } from './types.ts';

export const vidiqAnalysis: ToolAnalysis = {
  "lastVerified": "2026-10-14",
  "summary": "vidIQ is one of the longest-standing YouTube audience growth and video optimization suites, combining real-time competitive analytics, YouTube Data API telemetry, and generative AI assistance to help creators navigate the algorithmic landscape. Established as a browser extension and web workspace, vidIQ tracks live Views Per Hour (VPH), discovers trending keyword breakout queries, performs channel audits, and automates ideation through its LLM-powered AI Coach, title generators, and Daily Ideas engine. While vidIQ was historically celebrated for its proprietary \"100/100 SEO Score\", experienced creators and YouTube growth strategists recognize that modern recommendation algorithms prioritize viewer satisfaction, Click-Through Rate (CTR), and Average View Duration (AVD) over traditional video tags and keyword stuffing. Today, vidIQ serves best as a competitive intelligence radar and ideation sounding board rather than an algorithmic magic bullet, empowering creators to spot viral outlier videos and content gaps in their niche before production begins.",
  "company": "vidIQ Inc.",
  "officialUrl": "https://vidiq.com/",
  "status": "Freemium cloud platform and browser extension with a permanent Free tier (150 monthly AI credits, 3 daily ideas), Pro tier (~$7.50–$10/mo), Boost tier ($39/mo or $199/yr with 2,000 AI credits), Max tier ($39/mo billed annually at $468/yr with 6,000 AI credits), and personalized 1-on-1 human coaching packages.",
  "targetUsers": [
    "Solo YouTube creators and vloggers looking to validate video concepts and titles against real-time search volume and competitor view velocity before filming",
    "Video marketing agencies and enterprise brand channels managing multi-channel publishing schedules and tracking niche market share benchmarks",
    "Gaming, tech, and tutorial creators who depend on search discovery, breakout topics, and evergreen search traffic to sustain back-catalog views",
    "Social media managers and digital creators repurposing long-form YouTube catalog assets into high-engagement YouTube Shorts and TikTok concepts",
    "Emerging YouTubers seeking structured channel audit checklists to diagnose CTR bottlenecks, audience drop-off points, and metadata deficiencies"
  ],
  "problemSolved": "Eliminates the guesswork of YouTube content strategy by replacing blind brainstorming with live competitor view velocity (VPH), search demand forecasting, automated metadata generation, and historical performance tracking across millions of channels.",
  "howItWorks": "vidIQ integrates directly into YouTube and the creator's browser via an authorized YouTube Data API v3 OAuth handshake and Chrome/Firefox browser extension. As users browse YouTube, vidIQ injects real-time telemetry panels showing video tags, competitor views per hour (VPH), historical view trajectories, and search volume estimates. On its web platform, vidIQ's proprietary prediction models combine channel analytics with real-time YouTube trend data to supply personalized Daily Ideas, generate audience-matched titles, and run AI Coach conversations designed to optimize hooks, descriptions, and packaging.",
  "features": [
    {
      "name": "Real-Time Views Per Hour (VPH) & Velocity Tracker",
      "detail": "Displays real-time view velocity directly on video cards across YouTube, allowing creators to instantly spot breakout competitor videos and trending topics before they peak."
    },
    {
      "name": "AI Coach & Generative Ideation Workspace",
      "detail": "A custom-prompted conversational AI assistant trained on your channel's historical metrics, top-performing videos, and niche competitors to brainstorm video angles, script hooks, and content schedules."
    },
    {
      "name": "Daily Ideas with Prediction Scores",
      "detail": "Delivers personalized video concepts every 24 hours categorized by algorithmic potential (Very High, High, Medium) based on your subscribers' viewing habits and search velocity."
    },
    {
      "name": "Competitor Outlier Tracking & Benchmark Alerts",
      "detail": "Monitors up to 20 rival channels to identify outlier videos that achieve 3x to 10x the creator's average view count, revealing repeatable format and title formulas."
    },
    {
      "name": "YouTube Search Keyword & Volume Inspector",
      "detail": "Provides estimated search volume, competition scores, related breakout queries, and search intent indicators for YouTube search queries to inform evergreen tutorial packaging."
    },
    {
      "name": "AI Title, Description & Thumbnail Concept Generator",
      "detail": "Generates click-worthy, curiosity-gap title variations and structured description copy with automated timestamps, social links, and chapter markers."
    },
    {
      "name": "Channel Audit & Retention Checklist",
      "detail": "Conducts automated audits of your top videos, identifying which content formats drive peak subscriber conversion, optimal end-screen placements, and recurring drop-off patterns."
    },
    {
      "name": "Shorts Clipping & Repurposing Engine",
      "detail": "Analyzes long-form YouTube uploads to identify viral-potential highlights, extracting vertical short-form clips complete with automated captions and dynamic pacing."
    }
  ],
  "aiAndModels": "Powered by proprietary vidIQ predictive neural networks trained on billions of public YouTube video data points and viewer retention signals, combined with fine-tuned large language models (LLMs) specialized in YouTube title heuristics, curiosity hooks, and SEO metadata synthesis.",
  "inputsOutputs": "Inputs: YouTube channel authentication via Google OAuth, seed keywords, video topic prompts, competitor channel URLs, and draft scripts. Outputs: Real-time VPH competitive scorecards, predictive Daily Ideas, AI-generated title/description variants, keyword difficulty scores, and vertical Short clips.",
  "limits": [
    "The 100/100 SEO Score fallacy: YouTube's modern recommendation engine is driven primarily by viewer satisfaction, CTR, and Average View Duration (AVD); optimizing for 100/100 tag scores provides virtually zero algorithmic advantage in 2026.",
    "Generic AI title templates: Without tailored steering, vidIQ's AI title generator can default to sensationalist or repetitive formulaic phrasing that fatigues long-term human subscribers.",
    "Strict monthly AI credit caps: Generative operations (AI Coach conversations, AI thumbnail generations, and short clippers) deduct from non-rollover monthly credit pools (150 on Free, 2,000 on Boost) that exhaust rapidly during intense production cycles.",
    "Aggressive renewal and cancellation friction: Subscriptions renew automatically, and users frequently cite confusing cancellation pathways and restrictive downgrade terms on community forums."
  ],
  "useCases": [
    "Pre-production topic validation: Discovering high-velocity outlier videos among competitors to model successful formats and validate audience demand before investing in filming",
    "Evergreen tutorial keyword optimization: Identifying low-competition, high-search-intent queries for educational, coding, and software walkthrough channels targeting steady search traffic",
    "Title and hook A/B ideation: Generating dozens of emotional trigger and curiosity-gap title angles to match with custom thumbnail packaging prior to video publishing",
    "Competitor intelligence monitoring: Setting real-time VPH threshold alerts on rival channels to capitalize on sudden industry breaking news and viral controversies",
    "YouTube Shorts content pipeline: Rapidly clipping key comedic or instructional moments from long-form podcasts and live streams for multi-platform distribution"
  ],
  "poorFit": [
    "Creators expecting automated algorithmic virality: vidIQ provides competitive diagnostic data; it cannot compensate for poor storytelling, bad audio quality, boring pacing, or uninspired presentation",
    "High-end cinematic documentary filmmakers: Channels targeting prestige film audiences where sensational YouTube-style SEO titles and high-contrast thumbnails damage brand reputation",
    "Creators who only need basic YouTube analytics: The native, free YouTube Studio dashboard provides superior retention graphs, traffic source breakdowns, and returning viewer metrics without third-party fees"
  ],
  "pricing": [
    {
      "name": "Free Tier",
      "detail": "$0/month. Includes 150 monthly AI credits, 3 Daily Ideas per day, basic browser extension telemetry (video tags, basic VPH snapshot), and standard keyword search previews."
    },
    {
      "name": "Pro Plan",
      "detail": "$7.50 to $10/month (billed monthly or annually). 1,000 AI credits/month, 10 Daily Ideas per day, historical performance analysis, tracking for up to 5 competitors, and expanded keyword metrics."
    },
    {
      "name": "Boost Plan (Most Popular)",
      "detail": "$39/month (or $199/year, equivalent to ~$16.58/month). 2,000 AI credits/month for 1 channel, 50 personalized Daily Ideas with view prediction scores, deep-thinking AI Coach mode, bulk SEO tools, competitor tracking up to 20 channels, and AI thumbnail generation."
    },
    {
      "name": "Max Plan",
      "detail": "$39/month billed annually ($468/year). 6,000 AI credits/month, 50 Daily Ideas, Max Mode AI with 5x deeper strategic analysis and 3x more conversational turns, up to 11 hours of short clipping, and top-up credit availability."
    },
    {
      "name": "Credit Consumption & Overage Mechanics",
      "detail": "AI operations draw from pooled monthly credits: Title/description generation = ~5–10 credits; AI Coach queries = ~10–25 credits; AI thumbnail creation = ~20–50 credits; Video clipping = ~100+ credits. Credits do not roll over between billing cycles."
    }
  ],
  "integrations": [
    "YouTube Studio (in-browser injected overlays, tag management, and description templates)",
    "Google Chrome, Mozilla Firefox & Microsoft Edge extensions for seamless in-page YouTube analytics",
    "Google Account / YouTube Data API v3 (certified secure OAuth 2.0 handshake)",
    "Discord & Webhook community alerts for competitor milestone notifications",
    "Canva & Photoshop (external thumbnail design integration workflows)"
  ],
  "developer": [
    "YouTube Data API v3 authenticated integration layer compliant with Google Developer policies",
    "RESTful backend architecture processing real-time video metadata and velocity telemetry",
    "Secure OAuth 2.0 token management ensuring minimal necessary channel permission scopes",
    "Proprietary trend detection algorithms executing continuous anomaly detection across millions of public video feeds"
  ],
  "privacy": "vidIQ is an officially certified YouTube and Google Developer Partner. Authentication operates strictly via Google OAuth 2.0; vidIQ never sees or stores your Google password. vidIQ requests channel permissions to read analytics, view subscriber metrics, and write video metadata (titles, descriptions, tags) when bulk editing is requested. Channels with strict corporate confidentiality policies should review granted API scopes in Google Account Security settings.",
  "ownership": "All video content, titles, descriptions, scripts, and media generated through vidIQ remain 100% creator intellectual property. vidIQ claims zero ownership or copyright over video assets or channel metadata created using its tools.",
  "alternatives": [
    {
      "name": "TubeBuddy",
      "detail": "The primary direct competitor to vidIQ. TubeBuddy offers superior native thumbnail A/B testing and bulk processing features, but vidIQ provides a sleeker modern UI, stronger real-time VPH velocity tools, and a more integrated AI Coach."
    },
    {
      "name": "1of10",
      "detail": "A specialized competitive research platform focusing purely on finding viral outlier videos, packaging concepts, and thumbnail formulas across YouTube niches without SEO tag bloat."
    },
    {
      "name": "OpusClip",
      "detail": "A dedicated generative AI video clipping tool that repurposes long-form video podcasts and streams into virally formatted vertical Shorts with dynamic captions, often surpassing vidIQ's built-in clipping engine in visual polish."
    },
    {
      "name": "Native YouTube Studio + Claude/ChatGPT",
      "detail": "A completely free workflow pairing YouTube Studio's built-in audience retention graphs and search terms with customized prompts in Claude 3.5 Sonnet or ChatGPT for title and script ideation."
    }
  ],
  "strengths": [
    "Invaluable Views Per Hour (VPH) velocity overlay directly on YouTube search and browse pages for immediate competitor outlier detection",
    "Comprehensive channel audit tool that clearly highlights top-performing playlists, subscriber conversion leaders, and underperforming video formats",
    "Generative AI Coach trained directly on your channel's niche data and audience history for context-aware brainstorming",
    "Generous free browser extension providing essential competitor tags and velocity metrics without requiring credit card registration",
    "Daily Ideas engine providing continuous creative inspiration with view prediction confidence ratings"
  ],
  "limitations": [
    "Heavily promotes outdated \"100/100 SEO\" checklists that can mislead novice creators into prioritizing tags over viewer satisfaction and watch time",
    "AI title recommendations can feel repetitive or sensationalized, requiring significant human editing to maintain creator authenticity",
    "AI credits on paid plans (even Boost at $39/mo) can be exhausted rapidly if running multiple clipping and coaching sessions",
    "Frequent upsells across the browser extension interface can create a cluttered user experience"
  ],
  "workflow": [
    "Niche Outlier & Competitor VPH Detection: Input: Target niche keyword or rival channel handle in your category. Action: Inspect competitor channels using the vidIQ Chrome extension and filter videos by Views Per Hour (VPH) to isolate outlier uploads performing at 3x to 10x the channel's baseline. Output: A shortlist of proven video concepts and structural formats actively gaining algorithmic traction. Quality Gate: Verify that outlier videos were published within the last 30 to 90 days and possess strong viewer comments rather than temporary external traffic spikes.",
    "Keyword Demand & Search Intent Forecasting: Input: Selected topic concept (e.g. Next.js 15 vs Remix 2026). Action: Query the vidIQ Keyword Inspector to measure YouTube monthly search volume, competition density, and related rising breakout terms. Output: Primary target keyword phrase and 3–5 long-tail semantic supporting terms. Quality Gate: Ensure the overall Keyword Score balances acceptable search demand against realistic competition for your current channel authority.",
    "Audience-First Packaging & AI Title Synthesis: Input: Core video thesis and target keyword phrase. Action: Run the topic through vidIQ AI Title Generator and prompt the AI Coach to formulate curiosity-gap, high-CTR variations that prioritize emotional stakes over robotic keyword stuffing. Output: 5 distinct title candidates testing curiosity, contrast, and direct benefit. Quality Gate: Evaluate titles against human readability: Would an interested human click this, or does it read like search-engine spam?",
    "Thumbnail Visual Concept & CTR Heatmap Audit: Input: Title candidates and video premise. Action: Use vidIQ's AI thumbnail concept generator and inspect the visual framing of top-ranking competitor thumbnails to craft a complementary, non-redundant visual story. Output: A high-contrast thumbnail composition that visually answers or escalates the question posed in the title. Quality Gate: Review the thumbnail at small mobile resolution (150x84px) to ensure focal points and text remain instantly legible.",
    "Post-Publish Velocity Tracking & Retention Diagnosis: Input: Published video URL in YouTube Studio. Action: Monitor vidIQ real-time velocity metrics for the first 24 to 72 hours, tracking initial VPH spikes, Impressions CTR, and Average Percentage Viewed (APV) against your 30-day channel average. Output: Algorithmic performance diagnosis and end-screen conversion audit. Quality Gate: If CTR falls below 4% after 500 impressions, immediately deploy alternate title and thumbnail variations from Step 3 without altering the underlying video file."
  ],
  "takeaway": "vidIQ remains a powerful competitive radar for YouTube creators when utilized with realistic algorithmic expectations. Its Views Per Hour (VPH) velocity metrics, competitor outlier tracking, and channel audit summaries provide immense clarity during pre-production ideation. However, creators must avoid the common pitfall of obsessing over arbitrary \"100/100 SEO scores\" or relying blindly on unedited AI title suggestions. The free browser extension delivers exceptional value for competitive research, while serious creators will benefit from the Boost or Max tiers specifically for deep competitor tracking and workflow automation. Pair vidIQ's market intelligence with compelling storytelling and genuine viewer empathy for the highest return on investment.",
  "sources": [
    {
      "title": "vidIQ Official Platform & Pricing Specifications",
      "publisher": "vidIQ Inc.",
      "url": "https://vidiq.com/",
      "type": "official"
    },
    {
      "title": "YouTube Creator Academy: How the YouTube Recommendation Algorithm Operates",
      "publisher": "YouTube / Google",
      "url": "https://www.youtube.com/creators/",
      "type": "official"
    },
    {
      "title": "r/NewTubers and r/PartneredYoutube Community Consensus: vidIQ in Modern YouTube SEO",
      "publisher": "Reddit Creator Communities",
      "url": "https://www.reddit.com/r/NewTubers/",
      "type": "independent"
    },
    {
      "title": "YouTube Data API v3 Terms of Service and Application Verification",
      "publisher": "Google Developers",
      "url": "https://developers.google.com/youtube/v3",
      "type": "official"
    }
  ]
};
