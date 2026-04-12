'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

const modulesData = [
  {
    name: 'Sites & Users',
    tag: 'Core',
    desc: 'Add construction sites, assign users, and control who can access what. Keep each site\'s data separate.',
    capabilities: [
      'Create and manage multiple site profiles',
      'Add team members with roles',
      'Control site-level access permissions',
      'View all sites from one dashboard',
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M3 21h18M3 7v1M21 7v1M9 21V7M15 21V7M3 7h18M3 3h18v4H3V3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: 'primary',
  },
  {
    name: 'Expenses',
    tag: 'Finance',
    desc: 'Record all site costs — labour, materials, transport, and miscellaneous. Keep daily records accurate.',
    capabilities: [
      'Daily expense logging per site',
      'Categorize by cost type',
      'Attach receipts and notes',
      'View expense summaries and history',
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: 'accent',
  },
  {
    name: 'Material Purchase',
    tag: 'Procurement',
    desc: 'Log purchase orders, vendor details, and material receipts. Know what you ordered and what arrived.',
    capabilities: [
      'Record purchase orders per site',
      'Track vendor details and history',
      'Log material receipt confirmation',
      'View purchase history and costs',
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: 'primary',
  },
  {
    name: 'Stock Management',
    tag: 'Inventory',
    desc: 'Track material inventory at each site. See what is available, what has been used, and what needs to be reordered.',
    capabilities: [
      'View current stock levels per site',
      'Log material consumption',
      'Track transfers between sites',
      'Identify low stock situations',
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: 'accent',
  },
  {
    name: 'Billing',
    tag: 'Finance',
    desc: 'Create and manage client bills tied to site progress and completed work. Keep billing records organized.',
    capabilities: [
      'Create bills linked to specific sites',
      'Track billing status (draft, sent, paid)',
      'Record payment receipts',
      'View billing history per client',
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: 'primary',
  },
  {
    name: 'Machinery',
    tag: 'Equipment',
    desc: 'Log machinery usage, track rental costs, and maintain basic equipment records for your sites.',
    capabilities: [
      'Record machinery assigned to each site',
      'Log daily usage hours',
      'Track rental costs per machine',
      'Maintain basic maintenance notes',
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: 'accent',
  },
  {
    name: 'Documents',
    tag: 'Records',
    desc: 'Attach and organize drawings, approvals, contracts, and reports per site. Access them from any device.',
    capabilities: [
      'Upload files per site or project',
      'Organize by category and date',
      'Access documents from mobile or desktop',
      'Share documents with team members',
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: 'primary',
  },
];

export default function ModulesGrid() {
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
    document.querySelectorAll('.mg-animate')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="py-16 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modulesData?.map((mod, i) => (
            <div
              key={mod?.name}
              className="mg-animate rounded-3xl border border-border bg-bg-alt p-7 hover:shadow-card hover:border-primary/20 transition-all duration-200 flex flex-col opacity-100"
              style={{ animation: `animationIn 0.65s ease-out ${0.1 + i * 0.07}s both` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                mod?.color === 'accent' ?'bg-accent/10 text-accent-dark' :'bg-primary/10 text-primary'
              }`}>
                {mod?.icon}
              </div>

              {/* Tag + Title */}
              <span className="text-2xs uppercase tracking-widest font-bold text-fg-subtle mb-2 block">
                {mod?.tag}
              </span>
              <h2 className="font-display text-xl font-semibold text-fg mb-3">{mod?.name}</h2>
              <p className="text-sm text-fg-muted leading-relaxed mb-6">{mod?.desc}</p>

              {/* Capabilities */}
              <ul className="space-y-2.5 flex-1 mb-6">
                {mod?.capabilities?.map((cap) => (
                  <li key={cap} className="flex items-start gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className={`mt-0.5 flex-shrink-0 ${mod?.color === 'accent' ? 'text-accent-dark' : 'text-primary'}`}>
                      <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-xs text-fg-muted">{cap}</span>
                  </li>
                ))}
              </ul>

              <div className={`h-0.5 w-12 rounded-full ${mod?.color === 'accent' ? 'bg-accent' : 'bg-primary'}`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-fg-muted mb-5">
            Want to see all modules in action? Book a free demo.
          </p>
          <Link
            href="/contact"
            className="btn-accent inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold shadow-accent"
          >
            Book Free Demo
          </Link>
        </div>
      </div>
    </section>
  );
}