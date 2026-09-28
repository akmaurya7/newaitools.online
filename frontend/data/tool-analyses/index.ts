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
};
