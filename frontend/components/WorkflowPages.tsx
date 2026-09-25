import React from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Check, Clock3, Layers3, ShieldCheck, Sparkles } from 'lucide-react';
import { WORKFLOWS, type Workflow } from '../workflows.ts';
import { useSEO } from '../hooks/useSEO.ts';

const BrandMark: React.FC<{ inverse?: boolean }> = ({ inverse = false }) => (
  <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${inverse ? 'bg-white/10 text-orange-200' : 'bg-[#f6eee8] text-accent'}`}><Sparkles size={19} /></span>
);

export const WorkflowDirectory: React.FC = () => {
  useSEO({
    title: 'AI Workflows: Script to Video, Research & More | newaitools',
    description: 'Follow practical AI workflows from idea to finished work, including script to video, research to article, website creation, and e-commerce.',
    keywords: ['AI workflows', 'AI toolchains', 'creator workflow', 'AI tools'],
    canonical: 'https://newaitools.online/workflows',
    breadcrumbs: [{ name: 'Home', url: 'https://newaitools.online/' }, { name: 'Workflows', url: 'https://newaitools.online/workflows' }]
  });

  return <main className="min-h-[70vh] bg-[#f8f7f4]">
    <section className="relative overflow-hidden border-b border-ink/[0.08] bg-[#201d1a] text-white">
      <div className="pointer-events-none absolute -right-24 -top-32 h-[28rem] w-[28rem] rounded-full bg-orange-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 left-1/3 h-[28rem] w-[28rem] rounded-full bg-emerald-300/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <a href="/" className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition hover:text-white"><ArrowLeft size={16} /> Back to discovery</a>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div><p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-orange-200"><Layers3 size={14} /> Practical toolchains</p>
            <h1 className="max-w-3xl font-serif text-5xl leading-[1.04] sm:text-6xl md:text-7xl">A tool is a start.<br /><span className="text-orange-200">A workflow gets it done.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 md:text-lg">See how useful AI tools fit together, step by step. Every chain shows what to make, how to hand it off, and where a person should review the result.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-7"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-300/10 text-emerald-200"><ShieldCheck size={19} /></span><p className="text-sm font-bold">Built around real handoffs</p></div><p className="mt-4 text-sm leading-6 text-white/60">These guides distinguish between moving work yourself and features a product documents, such as caption generation or scheduled publishing.</p><div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-white/40"><Check size={14} className="text-emerald-200" /> Review stays in the loop</div></div>
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">Choose an outcome</p><h2 className="font-serif text-3xl text-ink md:text-4xl">Guided workflows</h2></div><p className="max-w-md text-sm leading-6 text-ink/55">Four starting points across content, publishing, web production, and e-commerce.</p></div>
      <div className="grid gap-5 md:grid-cols-2">{WORKFLOWS.map((workflow, index) => <WorkflowCard key={workflow.slug} workflow={workflow} index={index} />)}</div>
      <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-ink/[0.08] bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Need one tool at a time?</p><h3 className="mt-2 font-serif text-2xl text-ink">Browse the full directory</h3><p className="mt-2 text-sm text-ink/55">Search products or start with one of 32 categories.</p></div><a href="/tools" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-accent">Explore AI tools <ArrowRight size={16} /></a></div>
    </section>
  </main>;
};

const WorkflowCard: React.FC<{ workflow: Workflow; index: number }> = ({ workflow, index }) => <a href={`/workflow/${workflow.slug}`} className="group rounded-3xl border border-ink/[0.08] bg-white p-6 shadow-[0_3px_16px_rgba(26,23,20,0.03)] transition duration-200 hover:-translate-y-1 hover:border-accent/20 hover:shadow-[0_18px_45px_rgba(26,23,20,0.09)] sm:p-7">
  <div className="flex items-start justify-between gap-4"><div><p className="text-[11px] font-bold uppercase tracking-[0.15em] text-accent">{workflow.category}</p><h3 className="mt-2 font-serif text-2xl leading-tight text-ink sm:text-[1.7rem]">{workflow.title}</h3></div><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f6eee8] text-sm font-bold text-accent">{String(index + 1).padStart(2, '0')}</span></div>
  <p className="mt-4 text-sm leading-6 text-ink/60">{workflow.tagline}</p>
  <div className="mt-6 flex flex-wrap items-center gap-2">{workflow.steps.map((step, i) => <React.Fragment key={step.tool}><span className="rounded-lg bg-[#f8f7f4] px-2.5 py-1.5 text-xs font-semibold text-ink/70">{step.tool}</span>{i < workflow.steps.length - 1 && <ArrowRight size={13} className="text-ink/25" />}</React.Fragment>)}</div>
  <div className="mt-6 flex items-center justify-between border-t border-ink/[0.07] pt-5"><span className="inline-flex items-center gap-2 text-xs font-medium text-ink/45"><Clock3 size={14} /> {workflow.steps.length} steps</span><span className="inline-flex items-center gap-2 text-sm font-bold text-ink transition group-hover:text-accent">Open workflow <ArrowUpRight size={16} /></span></div>
</a>;

export const WorkflowDetail: React.FC<{ workflow: Workflow }> = ({ workflow }) => {
  useSEO({
    title: `${workflow.title} | AI Workflow | newaitools`,
    description: workflow.tagline,
    keywords: ['AI workflow', workflow.category, ...workflow.steps.map(step => step.tool)],
    canonical: `https://newaitools.online/workflow/${workflow.slug}`,
    breadcrumbs: [{ name: 'Home', url: 'https://newaitools.online/' }, { name: 'Workflows', url: 'https://newaitools.online/workflows' }, { name: workflow.shortTitle, url: `https://newaitools.online/workflow/${workflow.slug}` }]
  });

  return <main className="min-h-[70vh] bg-[#f8f7f4] pb-16">
    <section className="bg-[#201d1a] text-white"><div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <a href="/workflows" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition hover:text-white"><ArrowLeft size={16} /> All workflows</a>
      <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-orange-200">{workflow.category} · {workflow.steps.length} steps</p><h1 className="max-w-4xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">{workflow.title}</h1><p className="mt-5 max-w-2xl text-base leading-7 text-white/65">{workflow.description}</p></div><div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5"><p className="text-xs font-bold uppercase tracking-[0.15em] text-white/40">What you’ll finish with</p><p className="mt-3 text-base font-semibold leading-6 text-white">{workflow.deliverable}</p></div></div>
    </div></section>
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:py-14 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-8">
      <div><div className="mb-7"><p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">The chain</p><h2 className="font-serif text-3xl text-ink">Make it, review it, hand it off</h2></div>
        <ol className="relative space-y-4 before:absolute before:bottom-12 before:left-[21px] before:top-8 before:w-px before:bg-ink/10">{workflow.steps.map((step, index) => <li key={step.tool} className="relative grid grid-cols-[44px_minmax(0,1fr)] gap-4"><span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl border border-ink/10 bg-white text-sm font-bold text-accent shadow-sm">{String(index + 1).padStart(2, '0')}</span><article className="rounded-2xl border border-ink/[0.08] bg-white p-5 shadow-[0_3px_16px_rgba(26,23,20,0.025)] sm:p-6"><div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-[0.15em] text-ink/40">Step {index + 1}</p><h3 className="mt-1 font-serif text-2xl text-ink">{step.tool}</h3></div><a href={step.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-ink/10 px-3 py-2 text-xs font-bold text-ink transition hover:border-accent/25 hover:text-accent">Visit tool <ArrowUpRight size={14} /></a></div><p className="mt-4 text-sm leading-6 text-ink/70">{step.action}</p>{step.example && <div className="mt-4 rounded-xl border border-accent/10 bg-[#fffaf2] p-4"><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-accent">Example</p><p className="mt-1.5 text-sm leading-6 text-ink/65">{step.example}</p></div>}{step.output && <div className="mt-4 rounded-xl bg-[#eef4ee] p-4"><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-800/70">Output</p><p className="mt-1.5 text-sm leading-6 text-ink/65">{step.output}</p></div>}<div className="mt-4 rounded-xl bg-[#f8f7f4] p-4"><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-accent">Handoff</p><p className="mt-1.5 text-sm leading-6 text-ink/65">{step.handoff}</p></div>{step.qualityGate && <div className="mt-4 rounded-xl border border-emerald-900/10 bg-[#f4f8f4] p-4"><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-800/70">Quality gate</p><p className="mt-1.5 text-sm leading-6 text-ink/65">{step.qualityGate}</p></div>}{step.guideUrl && <a href={step.guideUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline">{step.guideLabel || 'Product guide'} <ArrowUpRight size={13} /></a>}</article></li>)}</ol>
      </div>
      <aside className="space-y-4 lg:pt-[4.1rem]"><div className="rounded-2xl border border-ink/[0.08] bg-white p-5"><div className="flex items-center gap-3"><BrandMark /><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-ink/40">Keep in mind</p><h3 className="font-serif text-xl text-ink">Human checkpoints</h3></div></div><ul className="mt-5 space-y-3">{workflow.notes.map((note, index) => <li key={index} className="flex gap-2.5 text-sm leading-6 text-ink/60"><Check size={15} className="mt-1 shrink-0 text-emerald-700" />{note}</li>)}</ul></div>
        <div className="rounded-2xl bg-[#e9efe9] p-5"><p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-900/60">Explore the tools</p><p className="mt-2 text-sm leading-6 text-emerald-950/70">Find alternatives and related products in the directory.</p><a href="/tools" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-950">Browse all tools <ArrowRight size={15} /></a></div>
        <a href="/workflows" className="flex items-center justify-between rounded-2xl border border-ink/10 bg-white p-4 text-sm font-semibold text-ink/70 transition hover:text-accent"><span className="flex items-center gap-2"><ArrowDown size={15} /> Choose another workflow</span><ArrowRight size={15} /></a>
      </aside>
    </section>
  </main>;
};
