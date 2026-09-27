import type { ToolAnalysis } from './types.ts';
import { hostingerAnalysis } from './hostinger.ts';

export const TOOL_ANALYSES: Record<string, ToolAnalysis> = {
  hostinger: hostingerAnalysis,
};
