import type { ToolAnalysis } from './types.ts';
import { TOOLS } from '../data.ts';
import { hostingerAnalysis } from './hostinger.ts';
import { canvaDeep } from './canva-deep.ts';

TOOLS.find(tool => tool.id === 'canva-pro')!.analysisId = 'canva-pro';

export const TOOL_ANALYSES: Record<string, ToolAnalysis> = {
  hostinger: hostingerAnalysis,
  'canva-pro': canvaDeep,
};