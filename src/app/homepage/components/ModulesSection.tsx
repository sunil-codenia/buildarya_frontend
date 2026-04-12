'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

const modules = [
  {
    name: 'Sites & Users',
    desc: 'Add construction sites, assign users, and control who can access what.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 21h18M3 7v1M21 7v1M9 21V7M15 21V7M3 7h18M3 3h18v4H3V3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    span: 'col-span-1',
  },
  {
    name: 'Expenses',
    desc: 'Record all site costs — labour, materials, transport, and miscellaneous.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    span: 'col-span-1',
  },
  {
    name: 'Material Purchase',
    desc: 'Log purchase orders, vendor details, and material receipts in one place.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    span: 'col-span-1 md:col-span-2',
  },
  {
    name: 'Stock Management',
    desc: 'Track material inventory at each site — what is available and what has been used.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    span: 'col-span-1',
  },
  {
    name: 'Billing',
    desc: 'Create and manage client bills tied to site progress and completed work.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    span: 'col-span-1',
  },
  {
    name: 'Machinery',
    desc: 'Log machinery usage, track rental costs, and maintain equipment records.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    span: 'col-span-1',
  },
  {
    name: 'Documents',
    desc: 'Attach and organize drawings, approvals, contracts, and reports per site.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    span: 'col-span-1',
  },
];

export default function ModulesSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.mod-animate')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="modules" className="py-20 pt-12 bg-bg relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="mod-animate flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 opacity-100"
          style={{ animation: 'animationIn 0.7s ease-out 0.1s both' }}
        >
          <div>
            <span className="text-2xs uppercase tracking-widest font-bold text-fg-subtle mb-3 block">Modules</span>
            <h2 className="font-display text-3xl sm:text-4xl text-fg leading-tight">
              Every module you need<br />
              <span className="italic text-teal-gradient">for the site</span>
            </h2>
          </div>
          <Link
            href="/modules"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary border-b border-primary/40 pb-0.5 hover:border-primary transition-colors self-start md:self-auto"
          >
            All Modules
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>

        {/*
          Bento grid — 4 cols
          Row 1: Sites col-1 + Expenses col-1 + Material Purchase col-2 = 4 ✓
          Row 2: Stock col-1 + Billing col-1 + Machinery col-1 + Documents col-1 = 4 ✓
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Sites & Users — col-span-1 */}
          <div
            className="mod-animate rounded-2xl border border-border bg-bg-alt p-6 hover:shadow-card hover:border-primary/20 transition-all duration-200 opacity-100"
            style={{ animation: 'animationIn 0.6s ease-out 0.15s both' }}
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
              {modules?.[0]?.icon}
            </div>
            <h3 className="font-semibold text-sm text-fg mb-2">{modules?.[0]?.name}</h3>
            <p className="text-xs text-fg-muted leading-relaxed">{modules?.[0]?.desc}</p>
          </div>

          {/* Expenses — col-span-1 */}
          <div
            className="mod-animate rounded-2xl border border-border bg-bg-alt p-6 hover:shadow-card hover:border-primary/20 transition-all duration-200 opacity-100"
            style={{ animation: 'animationIn 0.6s ease-out 0.2s both' }}
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent-dark flex items-center justify-center mb-4">
              {modules?.[1]?.icon}
            </div>
            <h3 className="font-semibold text-sm text-fg mb-2">{modules?.[1]?.name}</h3>
            <p className="text-xs text-fg-muted leading-relaxed">{modules?.[1]?.desc}</p>
          </div>

          {/* Material Purchase — col-span-2 */}
          <div
            className="mod-animate sm:col-span-2 rounded-2xl border border-border bg-primary/5 border-primary/15 p-6 hover:shadow-teal hover:border-primary/30 transition-all duration-200 opacity-100"
            style={{ animation: 'animationIn 0.6s ease-out 0.25s both' }}
          >
            <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-4">
              {modules?.[2]?.icon}
            </div>
            <h3 className="font-semibold text-sm text-fg mb-2">{modules?.[2]?.name}</h3>
            <p className="text-xs text-fg-muted leading-relaxed">{modules?.[2]?.desc}</p>
          </div>

          {/* Stock Management — col-span-1 */}
          <div
            className="mod-animate rounded-2xl border border-border bg-bg-alt p-6 hover:shadow-card hover:border-primary/20 transition-all duration-200 opacity-100"
            style={{ animation: 'animationIn 0.6s ease-out 0.3s both' }}
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
              {modules?.[3]?.icon}
            </div>
            <h3 className="font-semibold text-sm text-fg mb-2">{modules?.[3]?.name}</h3>
            <p className="text-xs text-fg-muted leading-relaxed">{modules?.[3]?.desc}</p>
          </div>

          {/* Billing — col-span-1 */}
          <div
            className="mod-animate rounded-2xl border border-border bg-bg-alt p-6 hover:shadow-card hover:border-accent/30 transition-all duration-200 opacity-100"
            style={{ animation: 'animationIn 0.6s ease-out 0.35s both' }}
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent-dark flex items-center justify-center mb-4">
              {modules?.[4]?.icon}
            </div>
            <h3 className="font-semibold text-sm text-fg mb-2">{modules?.[4]?.name}</h3>
            <p className="text-xs text-fg-muted leading-relaxed">{modules?.[4]?.desc}</p>
          </div>

          {/* Machinery — col-span-1 */}
          <div
            className="mod-animate rounded-2xl border border-border bg-bg-alt p-6 hover:shadow-card hover:border-primary/20 transition-all duration-200 opacity-100"
            style={{ animation: 'animationIn 0.6s ease-out 0.4s both' }}
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
              {modules?.[5]?.icon}
            </div>
            <h3 className="font-semibold text-sm text-fg mb-2">{modules?.[5]?.name}</h3>
            <p className="text-xs text-fg-muted leading-relaxed">{modules?.[5]?.desc}</p>
          </div>

          {/* Documents — col-span-1 */}
          <div
            className="mod-animate rounded-2xl border border-border bg-bg-alt p-6 hover:shadow-card hover:border-primary/20 transition-all duration-200 opacity-100"
            style={{ animation: 'animationIn 0.6s ease-out 0.45s both' }}
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
              {modules?.[6]?.icon}
            </div>
            <h3 className="font-semibold text-sm text-fg mb-2">{modules?.[6]?.name}</h3>
            <p className="text-xs text-fg-muted leading-relaxed">{modules?.[6]?.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}