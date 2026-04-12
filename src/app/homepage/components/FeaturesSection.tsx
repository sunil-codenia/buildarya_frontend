'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

const features = [
  {
    id: 'expense',
    title: 'Expense Management',
    desc: 'Track and manage daily site expenses in one place. Record cash payments, vendor bills, and labour costs without losing track.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tag: 'Finance',
    span: 'col-span-1 md:col-span-2',
    accent: 'bg-primary/8',
    large: true,
  },
  {
    id: 'material',
    title: 'Material Tracking',
    desc: 'Monitor purchase and usage of materials across sites. Know what was ordered, received, and consumed.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tag: 'Inventory',
    span: 'col-span-1',
    accent: 'bg-accent/8',
    large: false,
  },
  {
    id: 'site',
    title: 'Site & Team Management',
    desc: 'Manage multiple construction sites and your workforce from a single dashboard.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tag: 'Operations',
    span: 'col-span-1',
    accent: 'bg-primary/8',
    large: false,
  },
  {
    id: 'docs',
    title: 'Document Management',
    desc: 'Store and organize project documents, contracts, approvals, and permits for easy access anytime.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tag: 'Documents',
    span: 'col-span-1',
    accent: 'bg-accent/8',
    large: false,
  },
  {
    id: 'org',
    title: 'Smart Organization',
    desc: 'The system helps you structure your data so you can find what you need quickly and keep records consistent.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 6h16M4 10h16M4 14h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tag: 'System',
    span: 'col-span-1',
    accent: 'bg-primary/8',
    large: false,
  },
];

export default function FeaturesSection() {
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
    document.querySelectorAll('.feat-animate')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 pt-12 bg-bg-alt relative z-10 rounded-t-5xl border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="feat-animate flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 opacity-100"
          style={{ animation: 'animationIn 0.7s ease-out 0.1s both' }}
        >
          <div>
            <span className="text-2xs uppercase tracking-widest font-bold text-fg-subtle mb-3 block">Features</span>
            <h2 className="font-display text-3xl sm:text-4xl text-fg leading-tight">
              Everything you need to<br />
              <span className="italic text-teal-gradient">run your sites</span>
            </h2>
          </div>
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary border-b border-primary/40 pb-0.5 hover:border-primary transition-colors self-start md:self-auto"
          >
            All Features
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>

        {/* Bento grid — 3 cols
            Row 1: [Expense col-span-2] + [Material col-span-1] = 3 ✓
            Row 2: [Site col-span-1] + [Docs col-span-1] + [Org col-span-1] = 3 ✓
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Expense — large */}
          <div
            className="feat-animate sm:col-span-2 rounded-3xl border border-border bg-bg p-7 hover:shadow-card hover:border-primary/20 transition-all duration-300 relative overflow-hidden group opacity-100"
            style={{ animation: 'animationIn 0.7s ease-out 0.15s both' }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500" />
            <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5">
              {features?.[0]?.icon}
            </div>
            <span className="text-2xs uppercase tracking-widest font-bold text-fg-subtle mb-2 block">{features?.[0]?.tag}</span>
            <h3 className="font-display text-xl font-semibold text-fg mb-3">{features?.[0]?.title}</h3>
            <p className="text-sm text-fg-muted leading-relaxed max-w-sm">{features?.[0]?.desc}</p>
          </div>

          {/* Material */}
          <div
            className="feat-animate rounded-3xl border border-border bg-bg p-7 hover:shadow-card hover:border-accent/30 transition-all duration-300 group opacity-100"
            style={{ animation: 'animationIn 0.7s ease-out 0.22s both' }}
          >
            <div className="w-11 h-11 rounded-2xl bg-accent/10 flex items-center justify-center text-accent-dark mb-5">
              {features?.[1]?.icon}
            </div>
            <span className="text-2xs uppercase tracking-widest font-bold text-fg-subtle mb-2 block">{features?.[1]?.tag}</span>
            <h3 className="font-display text-lg font-semibold text-fg mb-3">{features?.[1]?.title}</h3>
            <p className="text-sm text-fg-muted leading-relaxed">{features?.[1]?.desc}</p>
          </div>

          {/* Site */}
          <div
            className="feat-animate rounded-3xl border border-border bg-bg p-7 hover:shadow-card hover:border-primary/20 transition-all duration-300 opacity-100"
            style={{ animation: 'animationIn 0.7s ease-out 0.28s both' }}
          >
            <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5">
              {features?.[2]?.icon}
            </div>
            <span className="text-2xs uppercase tracking-widest font-bold text-fg-subtle mb-2 block">{features?.[2]?.tag}</span>
            <h3 className="font-display text-lg font-semibold text-fg mb-3">{features?.[2]?.title}</h3>
            <p className="text-sm text-fg-muted leading-relaxed">{features?.[2]?.desc}</p>
          </div>

          {/* Docs */}
          <div
            className="feat-animate rounded-3xl border border-border bg-bg p-7 hover:shadow-card hover:border-accent/30 transition-all duration-300 opacity-100"
            style={{ animation: 'animationIn 0.7s ease-out 0.34s both' }}
          >
            <div className="w-11 h-11 rounded-2xl bg-accent/10 flex items-center justify-center text-accent-dark mb-5">
              {features?.[3]?.icon}
            </div>
            <span className="text-2xs uppercase tracking-widest font-bold text-fg-subtle mb-2 block">{features?.[3]?.tag}</span>
            <h3 className="font-display text-lg font-semibold text-fg mb-3">{features?.[3]?.title}</h3>
            <p className="text-sm text-fg-muted leading-relaxed">{features?.[3]?.desc}</p>
          </div>

          {/* Smart Org */}
          <div
            className="feat-animate rounded-3xl border border-border bg-primary text-white p-7 hover:shadow-teal transition-all duration-300 relative overflow-hidden opacity-100"
            style={{ animation: 'animationIn 0.7s ease-out 0.4s both' }}
          >
            <div className="absolute inset-0 noise-overlay opacity-[0.05] pointer-events-none" />
            <div className="w-11 h-11 rounded-2xl bg-white/15 flex items-center justify-center mb-5 text-white">
              {features?.[4]?.icon}
            </div>
            <span className="text-2xs uppercase tracking-widest font-bold text-white/50 mb-2 block">{features?.[4]?.tag}</span>
            <h3 className="font-display text-lg font-semibold text-white mb-3">{features?.[4]?.title}</h3>
            <p className="text-sm text-white/70 leading-relaxed">{features?.[4]?.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}