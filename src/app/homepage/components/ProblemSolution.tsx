'use client';
import React, { useEffect } from 'react';

const problems = [
  { icon: '📱', text: 'Data scattered across WhatsApp groups and Excel sheets', detail: 'No single place to find what you need.' },
  { icon: '💸', text: 'Difficult to track daily site expenses accurately', detail: 'Cash flows out, records get lost.' },
  { icon: '👁', text: 'No real-time visibility into site progress', detail: 'You find out about issues too late.' },
  { icon: '📝', text: 'Manual record keeping wastes time and creates errors', detail: 'Same data entered in multiple places.' },
];

export default function ProblemSolution() {
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
    document.querySelectorAll('.ps-animate')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="py-20 bg-bg relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Problem column */}
          <div
            className="ps-animate opacity-100"
            style={{ animation: 'animationIn 0.8s ease-out 0.1s both' }}
          >
            <span className="text-2xs uppercase tracking-widest font-bold text-fg-subtle mb-4 block">The Problem</span>
            <h2 className="font-display text-3xl sm:text-4xl text-fg leading-tight mb-8">
              Common Challenges in<br />
              <span className="italic text-fg-muted">Construction Management</span>
            </h2>

            <div className="space-y-4">
              {problems?.map((p, i) => (
                <div
                  key={i}
                  className="ps-animate flex gap-4 p-4 rounded-2xl border border-border bg-bg-alt hover:border-primary/20 hover:shadow-soft transition-all duration-200 opacity-100"
                  style={{ animation: `animationIn 0.6s ease-out ${0.2 + i * 0.08}s both` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-bg-surface flex items-center justify-center flex-shrink-0 text-lg">
                    {p?.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-fg mb-0.5">{p?.text}</p>
                    <p className="text-xs text-fg-muted">{p?.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution column */}
          <div
            className="ps-animate opacity-100 lg:pt-12"
            style={{ animation: 'animationIn 0.8s ease-out 0.25s both' }}
          >
            <span className="text-2xs uppercase tracking-widest font-bold text-primary mb-4 block">The Solution</span>
            <h2 className="font-display text-3xl sm:text-4xl text-fg leading-tight mb-6">
              How Buildarya<br />
              <span className="italic text-teal-gradient">Helps</span>
            </h2>
            <p className="text-base text-fg-muted leading-relaxed mb-8 border-l-2 border-primary/30 pl-4">
              Buildarya brings your site data, expenses, materials, and documents into one system — making it easier to manage and track your operations every day.
            </p>

            {/* Solution visual card */}
            <div className="rounded-3xl border border-primary/15 bg-primary/5 p-6 space-y-3">
              {[
                { label: 'Site expenses', status: 'Tracked daily', color: 'bg-primary' },
                { label: 'Material usage', status: 'Logged on purchase', color: 'bg-primary-light' },
                { label: 'Documents', status: 'Organized & searchable', color: 'bg-accent' },
                { label: 'Team activity', status: 'Visible per site', color: 'bg-primary' },
              ]?.map((item) => (
                <div key={item?.label} className="flex items-center justify-between py-2 border-b border-primary/10 last:border-0">
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${item?.color}`} />
                    <span className="text-sm font-medium text-fg">{item?.label}</span>
                  </div>
                  <span className="text-xs text-primary font-semibold bg-primary/10 px-2.5 py-1 rounded-full">
                    {item?.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}