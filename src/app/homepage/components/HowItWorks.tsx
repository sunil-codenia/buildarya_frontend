'use client';
import React, { useEffect } from 'react';

const steps = [
  {
    num: '01',
    title: 'Add your sites and basic details',
    desc: 'Create your construction sites, add team members, and set up access. Takes about 10 minutes.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 4v16m8-8H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Start tracking expenses, materials, and work',
    desc: 'Log daily expenses, record material purchases, upload documents, and manage your team — all from one place.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'View reports and manage everything in one place',
    desc: 'See summaries for each site, review expense records, check material usage, and keep your data organized.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
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
    document.querySelectorAll('.hiw-animate')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="py-20 pt-12 bg-bg-alt border-t border-border relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="hiw-animate text-center mb-14 opacity-100"
          style={{ animation: 'animationIn 0.7s ease-out 0.1s both' }}
        >
          <span className="text-2xs uppercase tracking-widest font-bold text-fg-subtle mb-3 block">How It Works</span>
          <h2 className="font-display text-3xl sm:text-4xl text-fg">
            Get started in three steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-border z-0" />

          {steps?.map((step, i) => (
            <div
              key={step?.num}
              className="hiw-animate relative z-10 opacity-100"
              style={{ animation: `animationIn 0.7s ease-out ${0.15 + i * 0.12}s both` }}
            >
              {/* Step number + icon */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-card ${
                  i === 1 ? 'bg-primary text-white' : 'bg-bg border border-border text-primary'
                }`}>
                  {step?.icon}
                </div>
                <span className="text-3xl font-display font-bold text-border">{step?.num}</span>
              </div>
              <div className="text-center px-4">
                <h3 className="font-semibold text-base text-fg mb-3 leading-snug">{step?.title}</h3>
                <p className="text-sm text-fg-muted leading-relaxed">{step?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}