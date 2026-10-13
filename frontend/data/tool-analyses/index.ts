import { consensusAnalysis } from './consensus.ts';
import { tripoAnalysis } from './tripo.ts';
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
import { gammaAnalysis } from './gamma.ts';
import { n8nAnalysis } from './n8n.ts';
import { klingAiAnalysis } from './kling-ai.ts';
import { zapierAnalysis } from './zapier.ts';
import { makeAnalysis } from './make.ts';
import { claudeCodeAnalysis } from './claude-code.ts';

import { mistralAnalysis } from './mistral.ts';
import { crewAiAnalysis } from './crew-ai.ts';
import { juliusAnalysis } from './julius.ts';
import { clayAnalysis } from './clay.ts';
import { apolloAnalysis } from './apollo.ts';
import { deeplAnalysis } from './deepl.ts';
import { opusclipAnalysis } from './opusclip.ts';
import { pikaAnalysis } from './pika.ts';
import { udioAnalysis } from './udio.ts';
import { lumaAnalysis } from './luma.ts';
import { webflowAnalysis } from './webflow.ts';
import { soraAnalysis } from './sora.ts';
import { figmaAiAnalysis } from './figma-ai.ts';
import { microsoftCopilotAnalysis } from './microsoft-copilot.ts';
import { semrushAnalysis } from './semrush.ts';
import { ahrefsAnalysis } from './ahrefs.ts';
import { surferAnalysis } from './surfer.ts';
import { clearscopeAnalysis } from './clearscope.ts';
import { fraseAnalysis } from './frase.ts';
import { relumeAnalysis } from './relume.ts';
import { otterAnalysis } from './otter.ts';
import { capcutAnalysis } from './capcut.ts';
import { firefliesAnalysis } from './fireflies.ts';
import { stableDiffusionAnalysis } from './stable-diffusion.ts';
import { llamaAnalysis } from './llama.ts';
import { autogenAnalysis } from './autogen.ts';
import { qwenAnalysis } from './qwen.ts';
import { beautifulAiAnalysis } from './beautiful-ai.ts';
import { chatgptDeepResearchAnalysis } from './chatgpt-deep-research.ts';
import { geminiDeepResearchAnalysis } from './gemini-deep-research.ts';
import { amazonQAnalysis } from './amazon-q.ts';
import { dIdAnalysis } from './d-id.ts';
import { tavusAnalysis } from './tavus.ts';

import { intercomAnalysis } from './intercom.ts';
import { meshyAnalysis } from './meshy.ts';
import { granolaAnalysis } from './granola.ts';
import { hubspotAnalysis } from './hubspot.ts';

import { krispAnalysis } from './krisp.ts';
import { fathomAnalysis } from './fathom.ts';
import { zoomAiCompanionAnalysis } from './zoom-ai-companion.ts';
import { shopifyMagicAnalysis } from './shopify-magic.ts';
import { wixAnalysis } from './wix.ts';

import { powerBiAnalysis } from './power-bi.ts';
import { playhtAnalysis } from './playht.ts';
import { copilotStudioAnalysis } from './copilot-studio.ts';
import { gleanAnalysis } from './glean.ts';
import { relevanceAiAnalysis } from './relevance-ai.ts';
export const TOOL_ANALYSES: Record<string, ToolAnalysis> = {
  consensus: consensusAnalysis,
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
  gamma: gammaAnalysis,
  n8n: n8nAnalysis,
  'kling-ai': klingAiAnalysis,
  zapier: zapierAnalysis,
  make: makeAnalysis,
  'claude-code': claudeCodeAnalysis,
  mistral: mistralAnalysis,
  'crew-ai': crewAiAnalysis,
  julius: juliusAnalysis,
  clay: clayAnalysis,
  apollo: apolloAnalysis,
  deepl: deeplAnalysis,
  opusclip: opusclipAnalysis,
  pika: pikaAnalysis,
  udio: udioAnalysis,
  luma: lumaAnalysis,
  webflow: webflowAnalysis,
  sora: soraAnalysis,
  'figma-ai': figmaAiAnalysis,
  'microsoft-copilot': microsoftCopilotAnalysis,
  semrush: semrushAnalysis,
  ahrefs: ahrefsAnalysis,
  surfer: surferAnalysis,
  clearscope: clearscopeAnalysis,
  frase: fraseAnalysis,
  relume: relumeAnalysis,
  otter: otterAnalysis,
  capcut: capcutAnalysis,
  fireflies: firefliesAnalysis,
  'stable-diffusion': stableDiffusionAnalysis,
  llama: llamaAnalysis,
  autogen: autogenAnalysis,
  qwen: qwenAnalysis,
  'beautiful-ai': beautifulAiAnalysis,
  'chatgpt-deep-research': chatgptDeepResearchAnalysis,
  'gemini-deep-research': geminiDeepResearchAnalysis,
  'amazon-q': amazonQAnalysis,
  'd-id': dIdAnalysis,
  tavus: tavusAnalysis,
  intercom: intercomAnalysis,
  meshy: meshyAnalysis,
  granola: granolaAnalysis,
  hubspot: hubspotAnalysis,
  krisp: krispAnalysis,
  fathom: fathomAnalysis,
  'zoom-ai-companion': zoomAiCompanionAnalysis,
  'shopify-magic': shopifyMagicAnalysis,
  wix: wixAnalysis,
  'power-bi': powerBiAnalysis,
  playht: playhtAnalysis,
  'copilot-studio': copilotStudioAnalysis,
  glean: gleanAnalysis,
  'relevance-ai': relevanceAiAnalysis,
  tripo: tripoAnalysis,
};
