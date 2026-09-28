import React from 'react';
import { ArrowRight, Check, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import type { ToolAnalysis } from '../data/tool-analyses/types.ts';

const Card: React.FC<{ eyebrow: string; title: string; children: React.ReactNode }> = ({ eyebrow, title, children }) => (
  <section className="rounded-2xl border border-ink/[0.08] bg-white p-6 sm:p-8">
    <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{eyebrow}</p>
    <h2 className="mt-2 font-serif text-2xl text-ink">{title}</h2>
    <div className="mt-4">{children}</div>
  </section>
);

const Bullets: React.FC<{ items: string[]; icon?: 'check' | 'shield' }> = ({ items, icon = 'check' }) => (
  <ul className="space-y-3">
    {items.map(item => (
      <li key={item} className="flex gap-3 text-sm leading-6 text-ink/70">
        {icon === 'shield' ? <ShieldCheck size={17} className="mt-0.5 shrink-0 text-accent" /> : <Check size={17} className="mt-0.5 shrink-0 text-accent" />}
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const FeatureList: React.FC<{ items: { name: string; detail: string }[] }> = ({ items }) => (
  <div className="divide-y divide-ink/[0.08]">
    {items.map(item => (
      <div key={item.name} className="py-4 first:pt-0 last:pb-0">
        <h3 className="text-sm font-bold text-ink">{item.name}</h3>
        <p className="mt-1 text-sm leading-6 text-ink/70">{item.detail}</p>
      </div>
    ))}
  </div>
);

const Sources: React.FC<{ analysis: ToolAnalysis }> = ({ analysis }) => (
  <Card eyebrow="13 · Research trail" title="Sources checked">
    <p className="mb-5 text-sm leading-6 text-ink/70">
      Research verified on {analysis.lastVerified}. Official documentation is used for product capabilities, limits, pricing, legal terms and technical details; the independent source is used only for comparison context.
    </p>
    <div className="space-y-3">
      {analysis.sources.map(source => (
        <a
          key={source.url}
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start justify-between gap-4 rounded-xl border border-ink/[0.08] p-4 transition hover:border-accent/25 hover:bg-[#f8f7f4]"
        >
          <span>
            <span className="block text-sm font-semibold text-ink">{source.title}</span>
            <span className="mt-1 block text-xs text-ink/70">{source.publisher} · {source.type === 'official' ? 'Official source' : 'Independent source'}</span>
          </span>
          <ExternalLink size={15} className="mt-0.5 shrink-0 text-ink/30 transition group-hover:text-accent" />
        </a>
      ))}
    </div>
  </Card>
);

export const ToolAnalysisSections: React.FC<{ analysis: ToolAnalysis }> = ({ analysis }) => (
  <div className="space-y-6">
    <Card eyebrow="01 · Research snapshot" title="What is it, and what does it solve?">
      <p className="text-sm leading-7 text-ink/70">{analysis.summary}</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-[#f8f7f4] p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-ink/70">Company</p>
          <p className="mt-1 text-sm font-semibold text-ink">{analysis.company}</p>
        </div>
        <div className="rounded-xl bg-[#f8f7f4] p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-ink/70">Status</p>
          <p className="mt-1 text-sm font-semibold text-ink">{analysis.status}</p>
        </div>
      </div>
      <p className="mt-5 text-sm leading-7 text-ink/70">{analysis.problemSolved}</p>
      <a href={analysis.officialUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline">
        Official product page <ExternalLink size={14} />
      </a>
    </Card>

    <Card eyebrow="02 · Audience" title="Who is it a good fit for?">
      <Bullets items={analysis.targetUsers} />
      <h3 className="mt-7 mb-3 text-sm font-bold text-ink">Less suitable when</h3>
      <Bullets items={analysis.poorFit} icon="shield" />
    </Card>

    <Card eyebrow="03 · How it works" title="From prompt to published product">
      <p className="text-sm leading-7 text-ink/70">{analysis.howItWorks}</p>
      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {['Describe', 'Generate', 'Test + publish'].map((step, index) => (
          <div key={step} className="rounded-xl border border-ink/[0.08] p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">0{index + 1}</span>
            <p className="mt-1 text-sm font-semibold text-ink">{step}</p>
          </div>
        ))}
      </div>
    </Card>

    <Card eyebrow="04 · Core capabilities" title="What you can actually do">
      <FeatureList items={analysis.features} />
    </Card>

    <Card eyebrow="05 · AI layer" title="Models, inputs and outputs">
      <div className="space-y-5">
        <div>
          <h3 className="text-sm font-bold text-ink">AI model/provider visibility</h3>
          <p className="mt-1 text-sm leading-6 text-ink/70">{analysis.aiAndModels}</p>
        </div>
        <div>
          <h3 className="text-sm font-bold text-ink">Inputs and outputs</h3>
          <p className="mt-1 text-sm leading-6 text-ink/70">{analysis.inputsOutputs}</p>
        </div>
      </div>
    </Card>

    <Card eyebrow="06 · Limits" title="Important constraints before you build">
      <Bullets items={analysis.limits} icon="shield" />
    </Card>

    <Card eyebrow="07 · Use cases" title="Practical projects it can support">
      <Bullets items={analysis.useCases} />
    </Card>

    <Card eyebrow="08 · Cost" title="Current pricing and usage">
      <FeatureList items={analysis.pricing} />
    </Card>

    <Card eyebrow="09 · Integrations + developer use" title="How far can you take it technically?">
      <h3 className="text-sm font-bold text-ink">Integrations</h3>
      <div className="mt-3"><Bullets items={analysis.integrations} /></div>
      <h3 className="mt-7 text-sm font-bold text-ink">Developer capabilities</h3>
      <div className="mt-3"><Bullets items={analysis.developer} /></div>
    </Card>

    <Card eyebrow="10 · Privacy + ownership" title="Data, security and commercial use">
      <div className="space-y-5">
        <div>
          <h3 className="flex items-center gap-2 text-sm font-bold text-ink"><ShieldCheck size={16} className="text-accent" /> Privacy and data handling</h3>
          <p className="mt-2 text-sm leading-7 text-ink/70">{analysis.privacy}</p>
        </div>
        <div className="border-t border-ink/[0.08] pt-5">
          <h3 className="text-sm font-bold text-ink">Ownership and copyright</h3>
          <p className="mt-2 text-sm leading-7 text-ink/70">{analysis.ownership}</p>
        </div>
      </div>
    </Card>

    <Card eyebrow="11 · Alternatives" title="What else should you compare?">
      <FeatureList items={analysis.alternatives} />
    </Card>

    <Card eyebrow="12 · Practical assessment" title="Strengths, limitations and a realistic workflow">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-sm font-bold text-ink">Strengths</h3>
          <div className="mt-3"><Bullets items={analysis.strengths} /></div>
        </div>
        <div>
          <h3 className="text-sm font-bold text-ink">Limitations</h3>
          <div className="mt-3"><Bullets items={analysis.limitations} icon="shield" /></div>
        </div>
      </div>
      <div className="mt-7 rounded-2xl bg-[#f8f7f4] p-5">
        <h3 className="flex items-center gap-2 text-sm font-bold text-ink"><Sparkles size={16} className="text-accent" /> Suggested end-to-end workflow</h3>
        <ol className="mt-4 space-y-3">
          {analysis.workflow.map(step => <li key={step} className="text-sm leading-6 text-ink/70">{step}</li>)}
        </ol>
      </div>
    </Card>

    <section className="rounded-2xl bg-[#201d1a] p-6 text-white sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-300">Practical takeaway</p>
      <h2 className="mt-2 font-serif text-2xl">When this tool makes sense</h2>
      <p className="mt-4 text-sm leading-7 text-white/70">{analysis.takeaway}</p>
      <a href={analysis.officialUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-ink transition hover:bg-orange-100">
        Visit {analysis.company} <ArrowRight size={15} />
      </a>
    </section>

    <Sources analysis={analysis} />
  </div>
);
