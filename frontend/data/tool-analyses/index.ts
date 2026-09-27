import type { ToolAnalysis } from './types.ts';
import { hostingerAnalysis } from './hostinger.ts';
import { canvaDeep } from './canva-deep.ts';

export const TOOL_ANALYSES: Record<string, ToolAnalysis> = {
  hostinger: hostingerAnalysis,
  'canva-pro': canvaDeep,
};
