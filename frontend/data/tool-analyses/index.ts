import type { ToolAnalysis } from './types.ts';
import { hostingerAnalysis } from './hostinger.ts';
import { canvaDeep } from './canva-deep.ts';
import { framerAnalysis } from './framer.ts';
import { adobeFireflyAnalysis } from './adobe-firefly.ts';
import { leonardoAnalysis } from './leonardo-ai.ts';
import { writesonicAnalysis } from './writesonic.ts';
import { lookaAnalysis } from './looka.ts';
import { durableAnalysis } from './durable.ts';
import { uizardAnalysis } from './uizard.ts';
import { runwayAnalysis } from './runway-ml.ts';
import { khromaAnalysis } from './khroma-free.ts';
import { presentationsAiAnalysis } from './presentations-ai.ts';
import { copyAiAnalysis } from './copy-ai.ts';
import { removeBgAnalysis } from './remove-bg.ts';
import { photopeaAnalysis } from './photopea.ts';
import { squooshAnalysis } from './squoosh.ts';
import { chatgptAnalysis } from './chatgpt.ts';
import { claudeAnalysis } from './claude.ts';
import { geminiAnalysis } from './gemini.ts';
import { jasperAnalysis } from './jasper.ts';
import { grammarlyAnalysis } from './grammarly.ts';
import { quillbotAnalysis } from './quillbot.ts';
import { perplexityAnalysis } from './perplexity.ts';
import { notebooklmAnalysis } from './notebooklm.ts';
import { cursorAnalysis } from './cursor.ts';

import { githubCopilotAnalysis } from './github-copilot.ts';
import { elevenlabsAnalysis } from './elevenlabs.ts';
import { midjourneyAnalysis } from './midjourney.ts';
import { sunoAnalysis } from './suno.ts';
import { windsurfAnalysis } from './windsurf.ts';
import { heygenAnalysis } from './heygen.ts';
import { v0Analysis } from './v0.ts';
import { lovableAnalysis } from './lovable.ts';
import { synthesiaAnalysis } from './synthesia.ts';
import { descriptAnalysis } from './descript.ts';
import { ideogramAnalysis } from './ideogram.ts';
import { photoroomAnalysis } from './photoroom.ts';
import { elicitAnalysis } from './elicit.ts';
import { replitAnalysis } from './replit.ts';
import { boltAnalysis } from './bolt.ts';
import { deepseekAnalysis } from './deepseek.ts';

import { notionAiAnalysis } from './notion-ai.ts';
export const TOOL_ANALYSES: Record<string, ToolAnalysis> = {
  hostinger: hostingerAnalysis,
  'canva-pro': canvaDeep,
  framer: framerAnalysis,
  'adobe-firefly': adobeFireflyAnalysis,
  'leonardo-ai': leonardoAnalysis,
  writesonic: writesonicAnalysis,
  looka: lookaAnalysis,
  durable: durableAnalysis,
  uizard: uizardAnalysis,
  'runway-ml': runwayAnalysis,
  'khroma-free': khromaAnalysis,
  'presentations-ai': presentationsAiAnalysis,
  'copy-ai': copyAiAnalysis,
  'remove-bg': removeBgAnalysis,
  photopea: photopeaAnalysis,
  squoosh: squooshAnalysis,
  chatgpt: chatgptAnalysis,
  claude: claudeAnalysis,
  gemini: geminiAnalysis,
  jasper: jasperAnalysis,
  grammarly: grammarlyAnalysis,
  quillbot: quillbotAnalysis,
  perplexity: perplexityAnalysis,
  notebooklm: notebooklmAnalysis,
  cursor: cursorAnalysis,
  'github-copilot': githubCopilotAnalysis,
  elevenlabs: elevenlabsAnalysis,
  midjourney: midjourneyAnalysis,
  suno: sunoAnalysis,
  windsurf: windsurfAnalysis,
  heygen: heygenAnalysis,
  v0: v0Analysis,
  lovable: lovableAnalysis,
  synthesia: synthesiaAnalysis,
  descript: descriptAnalysis,
  ideogram: ideogramAnalysis,
  photoroom: photoroomAnalysis,
  elicit: elicitAnalysis,
  replit: replitAnalysis,
  bolt: boltAnalysis,
  deepseek: deepseekAnalysis,
  'notion-ai': notionAiAnalysis,
};
