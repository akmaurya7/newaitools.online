export interface ToolAnalysisFeature {
  name: string;
  detail: string;
}

export interface ToolAnalysisSource {
  title: string;
  publisher: string;
  url: string;
  type: 'official' | 'independent';
}

export interface ToolAnalysis {
  lastVerified: string;
  summary: string;
  company: string;
  officialUrl: string;
  status: string;
  targetUsers: string[];
  problemSolved: string;
  howItWorks: string;
  features: ToolAnalysisFeature[];
  aiAndModels: string;
  inputsOutputs: string;
  limits: string[];
  useCases: string[];
  poorFit: string[];
  pricing: ToolAnalysisFeature[];
  integrations: string[];
  developer: string[];
  privacy: string;
  ownership: string;
  alternatives: ToolAnalysisFeature[];
  strengths: string[];
  limitations: string[];
  workflow: string[];
  takeaway: string;
  sources: ToolAnalysisSource[];
}
