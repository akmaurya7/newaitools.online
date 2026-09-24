import React, { useState } from 'react';
import { ArrowUpRight, Menu, Sparkles, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const links = [
    { href: '/tools', label: 'Tools' },
    { href: '/workflows', label: 'Workflows' },
    { href: '/categories', label: 'Categories' },
    { href: '/blog', label: 'Blog' }
  ];

  return <header className="sticky top-0 z-50 border-b border-ink/[0.08] bg-[#f8f7f4]/90 backdrop-blur-xl">
    <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <a href="/" className="group flex items-center gap-2.5" aria-label="newaitools home">
        <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-white transition group-hover:bg-accent"><Sparkles size={17} /><span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full border-2 border-[#f8f7f4] bg-emerald-400" /></span>
        <span className="font-sans text-[21px] font-extrabold leading-none tracking-[-0.075em] text-ink"><span>newai</span><span className="text-accent">tools</span></span>
      </a>
      <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
        {links.map(link => <a key={link.href} href={link.href} className="text-sm font-semibold text-ink/60 transition hover:text-accent">{link.label}</a>)}
        <a href="/categories" className="inline-flex items-center gap-2 rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-accent">Find a tool <ArrowUpRight size={15} /></a>
      </nav>
      <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/10 text-ink md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label={isMobileMenuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={isMobileMenuOpen}>{isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}</button>
    </div>
    {isMobileMenuOpen && <nav className="border-t border-ink/10 bg-white px-4 py-3 md:hidden" aria-label="Mobile navigation">{links.map(link => <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block rounded-lg px-3 py-3 text-sm font-semibold text-ink/70 hover:bg-[#f8f7f4] hover:text-accent">{link.label}</a>)}<a href="/categories" onClick={() => setIsMobileMenuOpen(false)} className="mt-2 block rounded-xl bg-ink px-4 py-3 text-center text-sm font-semibold text-white">Browse categories</a></nav>}
  </header>;
};
