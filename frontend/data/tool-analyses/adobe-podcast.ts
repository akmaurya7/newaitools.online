import type { ToolAnalysis } from './types.ts';

export const adobePodcastAnalysis: ToolAnalysis = {
  lastVerified: '2026-10-13',
  summary: 'Adobe Podcast (formerly Project Shasta) is an AI-powered web-based audio recording, dialogue restoration, and transcript-driven editing suite engineered by Adobe Inc. Centered around its acclaimed neural "Enhance Speech" engine and "Mic Check" diagnostic utility, the platform transforms low-fidelity, reverb-drenched voice recordings captured on smartphones, laptop microphones, or untreated home offices into crisp, studio-grade broadcast dialogue with a single click. Powered by proprietary deep acoustic foundation models trained on thousands of hours of professional broadcast speech, Adobe Podcast distinguishes itself from legacy spectral noise gates by performing generative vocal resynthesis—reconstructing clipped phonemes and restoring natural harmonic frequency bodies while aggressively suppressing HVAC hum, traffic roar, and acoustic room reflections. In addition to standalone web processing, Adobe integrates this core engine natively inside Adobe Premiere Pro Essential Sound, creating a frictionless bridge between fast browser-based cleanup and professional non-linear video editing. The service operates on a freemium model: a generous free web tier provides 1 hour of daily audio enhancement (capped at 30 minutes and 500 MB per file at fixed 100% strength), while Adobe Express Premium ($9.99/month or included in Creative Cloud All Apps) unlocks 4 hours of daily processing, up to 2-hour file durations, 1 GB file sizes, direct MP4/MOV video upload support, batch queues, and a crucial variable enhancement strength slider (0%–100%) that mitigates robotic or metallic artifacts on cleaner recordings.',
  company: 'Adobe Inc.',
  officialUrl: 'https://podcast.adobe.com/',
  status: 'Freemium web application and audio restoration platform with free web tier (1 hr/day, 30 min/file limit, audio only) and Adobe Express Premium tier ($9.99/mo or $99.99/yr, 4 hrs/day, 2 hr/file limit, video MP4/MOV support, strength slider, bulk upload). Also natively bundled in Adobe Premiere Pro and Creative Cloud All Apps.',
  targetUsers: [
    'Solo podcasters, remote interviewers, and indie broadcasters recording guests over Zoom, Google Meet, or phone lines without acoustic treatment',
    'YouTube, TikTok, and Instagram video creators needing rapid speech cleanup for outdoor vlog dialogue, phone audio, and camera B-roll',
    'Corporate communications leads, executive speechwriters, and webinars producers salvaging noisy virtual all-hands and employee townhall recordings',
    'E-learning curriculum developers, online course educators, and instructional designers standardizing voice clarity across multi-instructor lecture modules',
    'Audiobook narrators and voiceover artists performing preliminary room noise cleanup and microphone gain validation before final DAW mastering'
  ],
  problemSolved: 'Solves the perennial "bad room and cheap mic" bottleneck that ruins otherwise compelling spoken-word content. In traditional audio engineering, removing heavy room reverberation (flutter echo from drywall, concrete, or glass) and persistent ambient noise (HVAC blowers, PC fans, city traffic) requires complex multiband downward expanders, spectral de-noise plugins (e.g., iZotope RX), and painstaking manual EQ notch filtering—often resulting in a thin, watery, or phase-distorted vocal track. Adobe Podcast eliminates this specialized engineering barrier by deploying a generative speech neural network that extracts vocal formants, strips the room impulse response, and resynthesizes clean vocal harmonics, making consumer earbuds sound remarkably close to a $400 Shure SM7B in a treated vocal booth.',
  howItWorks: 'Adobe Podcast operates through a four-stage neural speech restoration and timeline editing pipeline: (1) Acoustic Feature Ingestion & Pre-Flight Diagnostics: Users upload uncompressed or lossy audio (or capture multi-track audio directly in the browser Studio). The Mic Check utility analyzes input gain, signal-to-noise ratio, distance to microphone, and acoustic reflection levels to provide actionable visual positioning guidance. (2) Mel-Spectrogram Decomposition & Generative Resynthesis: The Enhance Speech neural network, trained via Adobe Sensei deep learning architecture, analyzes the input audio spectrogram. Rather than simply applying subtractive filtering, the model predicts clean speech phonemes and regenerates lost fundamental frequencies and vocal formant harmonics that were masked by noise or smeared by room reflections. (3) Adaptive De-Reverberation & Ambience Blending: The system isolates and discards the room reverberation tail. In the Premium and Premiere Pro implementations, an adjustable strength slider (0% to 100%) performs wet/dry interpolation, allowing creators to retain subtle ambient room tone so the speaker does not sound artificially isolated or sterile. (4) Cloud Rendering & Waveform Assembly: The processed audio is rendered into high-fidelity 48kHz / 16-bit uncompressed WAV or 320kbps MP3 files. In the web Studio, an automated speech-to-text model syncs the waveform to an editable transcript, enabling creators to cut audio filler words and rearrange segments simply by highlighting and deleting text.',
  features: [
    {
      name: 'AI Enhance Speech (v1 & v2 Engine)',
      detail: 'State-of-the-art neural dialogue enhancement that eradicates background noise, HVAC hum, traffic, and cavernous room echo while reconstructing clean vocal harmonics and rich proximity effect.'
    },
    {
      name: 'Mic Check Diagnostic Utility',
      detail: 'Free browser-based acoustic diagnostic tool that listens to test microphone input and analyzes gain levels, distance from microphone, and room reverberation, providing real-time visual feedback to optimize physical mic setup before recording.'
    },
    {
      name: 'Web-Based Multitrack Studio',
      detail: 'Cloud-hosted recording studio allowing remote interviewers to send a shareable browser link to co-hosts or guests, recording individual pristine 48kHz WAV audio tracks locally on each participant machine to eliminate VoIP compression artifacts.'
    },
    {
      name: 'Transcript-Driven Text Editing',
      detail: 'Automatic speech-to-text engine that generates a word-for-word transcript directly aligned with the audio timeline, enabling creators to delete stumbles, filler words, or whole paragraphs simply by deleting text like a word processor.'
    },
    {
      name: 'Adjustable Enhancement Strength Slider (Premium / Premiere Pro)',
      detail: 'Precision wet/dry blend slider (0% to 100%) that lets editors calibrate the exact degree of AI processing, preventing the dreaded robotic or lisping artifacts on cleaner voice tracks.'
    },
    {
      name: 'Direct Video Dialogue Enhancement (MP4 / MOV)',
      detail: 'Premium feature enabling creators to upload video files directly, enhancing the embedded dialogue track in the cloud without requiring manual audio de-muxing and re-syncing in external video editors.'
    },
    {
      name: 'Batch Processing & Priority Queue',
      detail: 'Multi-file bulk uploader in the Premium plan that allows creators to queue up dozens of podcast segments or video clips simultaneously for background cloud enhancement.'
    },
    {
      name: 'Royalty-Free Music & Sound FX Library',
      detail: 'Integrated library of curated podcast intro/outro music beds, stagers, and sound effects that automatically duck beneath dialogue tracks in the Studio timeline.'
    }
  ],
  aiAndModels: 'Adobe Podcast runs on proprietary generative acoustic deep learning foundation models developed by Adobe Research under the Adobe Sensei and Adobe Firefly AI umbrellas. Unlike conventional DSP (digital signal processing) filters that rely on spectral gates and dynamic phase subtraction, the Enhance Speech model utilizes a multi-layer convolutional and recurrent neural network trained on over 50,000 hours of multi-accented speech recorded across professional broadcast condenser microphones and deliberately degraded using real-world impulse response convolutions (e.g., tiled kitchens, echoey basements, noisy cafes, street traffic). The model performs acoustic super-resolution and phoneme reconstruction: it identifies the primary speaker\'s pitch contour, formant trajectories, and vocal fold harmonics, synthesizing missing frequency components while completely decoupling speech from transient background noise and room decay.',
  inputsOutputs: 'Supported input formats: MP3, WAV, FLAC, AAC, M4A, OGG, and (under Premium) MP4, MOV, and MPEG video containers. Maximum input file size: 500 MB (Free) or 1 GB (Premium). Maximum single file duration: 30 minutes (Free) or 2 hours (Premium). Supported output formats: Lossless 48kHz / 16-bit or 24-bit uncompressed WAV, high-bitrate MP3 (320kbps), and timecode-aligned WebVTT / SRT subtitle files. Exported tracks integrate seamlessly into digital audio workstations (Adobe Audition, Reaper, Logic Pro) and NLEs (Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve).',
  limits: [
    'Free Tier Daily Quota: Strictly capped at 1 total hour of audio enhancement per rolling 24-hour window, resetting daily.',
    'Free Tier Single-File Duration Cap: Audio files cannot exceed 30 minutes in length; longer podcast episodes must be split manually into multiple segments before upload.',
    'Free Tier File Size Cap: Maximum 500 MB per file upload on the free plan (expanded to 1 GB on Premium).',
    'Audio-Only Restriction on Free Plan: Direct video uploads (MP4, MOV) require an active Adobe Express Premium or Creative Cloud subscription; free users must manually extract audio via FFmpeg or Audacity prior to upload.',
    'Fixed 100% Strength on Free Web Version: The free browser tool does not expose the variable strength slider, forcing full neural processing which can introduce metallic sibilance or robotic timbre on already decent recordings.',
    'Suppression of Emotional Vocal Nuances: The generative model frequently misinterprets soft chuckles, whispers, emotional sighs, and laughter as background noise, muting or garbling non-verbal vocal expressions.',
    'Cross-Talk and Simultaneous Speech Hallucinations: When two speakers speak simultaneously over a single microphone track, the model struggles with speaker separation, occasionally synthesizing garbled or phaser-distorted hybrid vocal artifacts.',
    'No Third-Party VST/AU Plugin Support: The web-based Studio editor is strictly a lightweight text-based arranger and cannot host third-party VST3/AU audio plugins, multi-band parametric equalizers, or sidechain compressors.'
  ],
  useCases: [
    'Salvaging Untreated Remote Guest Interviews: Enhancing remote podcast guests dialed in via smartphone speakerphones or cheap Bluetooth earbuds from resonant living rooms into broadcast-ready condenser microphone clarity.',
    'Cleaning On-Location Vlog Dialogue: Uploading windy or ambient-heavy outdoor video audio to instantly isolate creator voices over traffic, construction hum, or air conditioning fans.',
    'Corporate All-Hands & Webinar Post-Production: Cleaning up mumbled laptop audio from corporate Zoom or Microsoft Teams recordings to publish polished, professional internal communication videos.',
    'Rapid Multi-Track Remote Podcast Recording: Using the browser-based Studio to record remote hosts and guests simultaneously, capturing isolated uncompressed 48kHz audio streams with automated cloud backup.',
    'Instructional Video & Course Standardization: Equalizing and de-reverberating multi-lesson course material recorded by different guest instructors across varying home acoustics to deliver a unified, premium listening experience.'
  ],
  poorFit: [
    'High-End Studio Condenser Recordings: Audio already recorded in professionally treated acoustic booths using high-end microphones (Neumann U87, Shure SM7B); applying Enhance Speech at 100% will degrade natural high-frequency air and introduce artificial phase shift.',
    'Multi-Speaker Heated Debates on a Single Track: Panel discussions or debates recorded on a single omnidirectional microphone where speakers frequently interrupt or speak over one another, leading to phoneme garbling.',
    'Vocal Music, Singing, and Hip-Hop Tracking: Musical vocal performances requiring vibrato, falsetto, melodic pitch modulation, and intentional acoustic room reverb; Enhance Speech treats natural musical resonance as room noise and strips it.',
    'Ambient Field Recordings and Environmental Soundscapes: Audio projects (nature documentaries, ASMR, video game environmental sound design) where background environmental texture is an essential artistic component rather than unwanted noise.'
  ],
  pricing: [
    {
      name: 'Free Web Plan',
      detail: '$0/month. Includes 1 hour total daily Enhance Speech processing, 30-minute max duration per file, 500 MB max file size, audio-only input formats (MP3, WAV, AAC, FLAC), and full access to the browser Mic Check diagnostic utility.'
    },
    {
      name: 'Adobe Express Premium (Podcast Premium)',
      detail: '$9.99/month or $99.99/year. Unlocks 4 hours total daily Enhance Speech processing, up to 2 hours per file, 1 GB file size limit, direct audio and video file uploads (MP4, MOV), adjustable enhancement strength slider (0% to 100%), bulk/batch processing queue, and access to premium Adobe Express creative tools and templates.'
    },
    {
      name: 'Adobe Creative Cloud All Apps Bundle',
      detail: '$59.99 to $89.99/month (depending on promotional or regional pricing). Includes unlimited native Enhance Speech inside Adobe Premiere Pro (using local GPU acceleration and real-time playback), Adobe Audition, Adobe Express Premium, and 20+ desktop creative apps.'
    },
    {
      name: 'Adobe Creative Cloud for Enterprise / Teams',
      detail: 'Custom enterprise seat licensing providing centralized admin management, SSO/SAML 2.0 integration, shared cloud project storage, enterprise-grade data security commitments, and priority cloud rendering bandwidth.'
    }
  ],
  integrations: [
    'Adobe Premiere Pro (native Enhance Speech integration within Essential Sound panel with real-time slider control)',
    'Adobe Audition (professional DAW round-trip audio restoration)',
    'Adobe Express (direct cloud video editing and social graphic packaging)',
    'Web Browsers (Google Chrome, Apple Safari, Microsoft Edge, Mozilla Firefox)',
    'Third-party cloud storage and NLEs via WAV/MP3 export (Final Cut Pro, DaVinci Resolve, Logic Pro)'
  ],
  developer: [
    'Cloud-hosted web infrastructure with WebAssembly browser audio capture',
    'Adobe Creative Cloud unified authentication and cloud document synchronization',
    'Local GPU/NPU acceleration hooks when utilizing the Premiere Pro desktop speech restoration engine',
    'W3C Web Audio API integration for real-time browser-based microphone spectrum monitoring'
  ],
  privacy: 'Operates under the enterprise Adobe General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA) privacy compliance frameworks. Audio uploaded to the free web tool is transmitted via TLS 1.3 encrypted connections and stored temporarily in Adobe cloud servers for processing. Adobe specifies that enterprise and Creative Cloud content is not used to train generative AI foundation models without explicit organizational consent. Users can delete uploaded audio assets and project timelines at any time from their Adobe account dashboard.',
  ownership: 'Creators retain 100% full legal copyright, commercial ownership, and intellectual property rights over all original audio recordings, enhanced voice files, and edited media produced through Adobe Podcast. Adobe asserts zero ownership claims or royalty obligations on generated speech assets.',
  alternatives: [
    {
      name: 'Descript (Studio Sound)',
      detail: 'All-in-one AI audio/video editor featuring text-based editing, multi-track recording, and "Studio Sound" neural enhancement. While Descript offers deeper multi-track video editing and automated filler word removal, its free tier is limited to 1 hour of transcription per month and Studio Sound requires a paid plan ($12–$24/mo) for uncompressed export.'
    },
    {
      name: 'Krisp',
      detail: 'Real-time bidirectional AI noise cancellation and voice clarity software running as a virtual audio driver during live calls (Zoom, Teams, Discord). Excellent for live meetings and eliminating dog barking or typing in real time, but lacks post-production generative voice resynthesis, de-reverberation, and timeline editing.'
    },
    {
      name: 'ElevenLabs (Voice Isolator)',
      detail: 'Enterprise-grade neural voice extraction API and web tool capable of separating dialogue from extremely loud background music, explosions, and street noise. Offers superior performance on aggressive sound effects and movie dialogue, but charges per character/token and lacks recording studio or text-based editing workflows.'
    },
    {
      name: 'iZotope RX (Voice De-noise & De-reverb)',
      detail: 'The industry-standard professional desktop audio restoration plugin suite used by Hollywood post-production studios. Offers surgical spectral editing, zero AI voice hallucinations, and total parameter control, but requires a steep learning curve, a dedicated DAW, and perpetual license costs ($399–$1,199).'
    },
    {
      name: 'DaVinci Resolve Studio (Voice Isolation)',
      detail: 'Built-in neural voice isolation in DaVinci Resolve Studio ($295 perpetual license) powered by the DaVinci Neural Engine. Delivers pristine real-time GPU-accelerated dialogue cleanup directly on the video timeline without subscription fees or cloud upload wait times.'
    }
  ],
  strengths: [
    'Unrivaled Acoustic De-Reverberation: Effectively eliminates harsh room flutter echo and cavernous reflections from untreated drywall or concrete rooms where traditional noise gates fail.',
    'Generative Phoneme Reconstruction: Rebuilds missing vocal body and chest resonance lost to poor microphone capsules, creating a warm, authoritative broadcast condenser sound.',
    'Zero-Barrier Browser Access: Requires no local software installation, heavyweight DAW setup, or powerful GPU hardware—accessible on any Chromebook, Mac, or Windows laptop.',
    'Valuable Free Tier: Provides 1 full hour of daily processing time and free access to the Mic Check tool without requiring credit card registration.',
    'Mic Check Acoustic Coach: Educates non-technical creators on optimal microphone positioning, distance, and gain staging before hitting record, preventing bad audio at the source.',
    'Seamless Premiere Pro Workflow: Native integration within Premiere Pro Essential Sound panel allows video editors to apply Enhance Speech non-destructively with local GPU acceleration and variable intensity.'
  ],
  limitations: [
    'Robotic and Sibilant Artifacts at 100% Strength: Generative resynthesis can introduce metallic "lisps", phase flanging, and unnatural digital artifacts when applied at full intensity to audio that is already moderately clean.',
    'Suppression of Spontaneous Human Emotion: Often treats laughter, chuckles, quiet sighs, and whispered inflections as unwanted noise, resulting in unnatural dialogue gaps or muffled chuckles.',
    'Strict Daily Time Limits: 1 hour/day on Free and 4 hours/day on Premium restricts full-season batch podcast mastering or long-form documentary dialogue restoration without splitting files.',
    'Cloud Processing Queue Latency: Peak creator usage hours can lead to server queue delays, requiring several minutes to process 30-minute audio files over the web.',
    'Inability to Isolate Overlapping Speakers: Cross-talk during lively arguments or simultaneous interruptions confuses the model, leading to garbled hybrid vocal artifacts.',
    'No Direct Video Support on Free Plan: Video creators on the free plan must manually demux and extract audio from MP4 files before uploading, adding friction to daily social video workflows.'
  ],
  workflow: [
    '1. Pre-Flight Acoustic Diagnostics with Mic Check: Input: Physical recording environment and microphone setup (USB mic, lavalier, or smartphone). Action: Navigate to podcast.adobe.com/miccheck. Speak test phrases at your planned speaking distance. Observe the diagnostic meter evaluating gain volume, distance to mic, and room reverberation. Adjust physical mic gain, move closer (3–6 inches), or reposition away from bare walls until the utility confirms "Your setup sounds great." Quality Gate: Verify that input signal shows zero red clipping distortion and background room echo is visually reported in the green optimal zone.',
    '2. Remote Session Capture in Multitrack Studio: Input: Remote host and guest participant browser links. Action: Create a new Studio session in Adobe Podcast. Send the unique invitation link to remote guests. Verify that each participant selects their calibrated microphone in the browser settings. Hit Record. The studio records each participant local uncompressed 48kHz audio directly in their browser cache and automatically uploads tracks in the background. Quality Gate: Ensure both audio waveforms display continuous signal with no dropped packets or Wi-Fi degradation artifacts.',
    '3. Transcript-Based Rough Cut & Filler Word Pruning: Input: Raw multitrack session recording or uploaded audio file. Action: Open the recorded session in the web Studio timeline. Review the automatically generated speech-to-text transcript. Highlight and delete awkward pauses, false starts, and filler words ("um", "uh", "like"). The underlying audio waveform cuts automatically at exact word boundaries. Quality Gate: Play back dialogue transitions to ensure cuts sound natural without clipping word beginnings or trailing consonants.',
    '4. AI Speech Enhancement & Strength Calibration: Input: Edited dialogue tracks or imported external audio/video file. Action: Enable Enhance Speech. On the Premium web tier or Premiere Pro Essential Sound panel, calibrate the Enhancement Strength slider between 15% and 35% for clean recordings, or 40% to 65% for heavy room reverberation. (Avoid 100% unless salvaging unusable emergency phone audio). For advanced DAW workflows, run parallel processing: maintain raw audio on Track 1 and enhanced audio on Track 2, blending 30% original room body to retain natural vocal warmth. Quality Gate: Listen through reference studio headphones to verify complete absence of metallic robotic sibilance, lisping, or muffled laughter.',
    '5. Broadcast Mastering, Loudness Normalization & Multi-Platform Export: Input: Final cleaned and edited dialogue timeline. Action: Apply subtle loudness normalization (-16 LUFS for stereo podcast syndication, -14 LUFS for YouTube video, or -19 LUFS for mono distribution). Select export format: uncompressed 48kHz / 24-bit WAV for master archival, high-bitrate 320kbps MP3 for podcast RSS distribution, or synchronized WebVTT subtitles. Download the master bundle. Quality Gate: Run audio through a loudness meter to confirm compliance with Apple Podcasts and Spotify broadcast loudness standards with true peak below -1.0 dBTP.'
  ],
  takeaway: 'Adobe Podcast (Enhance Speech) remains the undisputed gold standard for fast, zero-effort dialogue restoration in 2026, rescuing audio that would have otherwise been deemed completely unusable. For solo creators, podcasters, and video editors without acoustic vocal booths or sound engineering expertise, the free web tier is an indispensable tool that instantly transforms budget mics and resonant rooms into broadcast-ready audio. However, creators must treat Enhance Speech as a surgical tool rather than an automatic magic button: running the model at 100% strength risks stripping emotional warmth and introducing robotic metallic artifacts. By upgrading to Adobe Express Premium ($9.99/mo) or leveraging Premiere Pro to access the variable strength slider (dialed to 15%–35%) or blending parallel audio tracks, creators achieve the ideal sweet spot: crystal-clear, professional speech with authentic human presence.',
  sources: [
    {
      title: 'Adobe Podcast Official AI Audio Recording & Enhance Speech Suite',
      publisher: 'Adobe Inc.',
      url: 'https://podcast.adobe.com/',
      type: 'official'
    },
    {
      title: 'Adobe Express Premium Plans, Pricing, and Podcast Feature Entitlements',
      publisher: 'Adobe Express Official Pricing',
      url: 'https://www.adobe.com/express/pricing',
      type: 'official'
    },
    {
      title: 'Adobe Premiere Pro Essential Sound AI Dialogue Enhancement Documentation',
      publisher: 'Adobe Creative Cloud Help',
      url: 'https://helpx.adobe.com/premiere-pro/using/essential-sound-panel.html',
      type: 'official'
    },
    {
      title: 'Reddit r/audiopost & r/premiere: Real-World Enhance Speech v1 vs v2 Artifact Analysis and Strength Calibration',
      publisher: 'Reddit Audio Engineering Community Benchmarks',
      url: 'https://www.reddit.com/r/audiopost/',
      type: 'independent'
    },
    {
      title: 'Dialogue Restoration Shootout: Adobe Podcast Enhance Speech vs Descript Studio Sound vs ElevenLabs Voice Isolator',
      publisher: 'Sound Guys & Independent Audio Creator Testing',
      url: 'https://www.soundguys.com/',
      type: 'independent'
    }
  ]
};
