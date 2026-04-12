'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

export default function CtaSection() {
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
      { threshold: 0.2 }
    );
    document.querySelectorAll('.cta-animate')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="py-20 pt-12 bg-bg-alt border-t border-border relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="cta-animate rounded-3xl bg-primary relative overflow-hidden p-12 md:p-16 text-center opacity-100"
          style={{ animation: 'animationIn 0.8s ease-out 0.1s both' }}
        >
          {/* Noise overlay */}
          <div className="absolute inset-0 noise-overlay opacity-[0.04] pointer-events-none" />

          {/* Background circles */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/5" />

          <div className="relative z-10">
            <span className="text-2xs uppercase tracking-widest font-bold text-white/50 mb-4 block">Get Started</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-5 leading-tight">
              Get Started with<br />
              <span className="italic">Buildarya</span>
            </h2>
            <p className="text-white/65 text-base max-w-md mx-auto mb-8 leading-relaxed">
              Book a free demo and see how Buildarya can help you manage your construction work better.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-accent inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold shadow-accent hover:shadow-lg transition-all duration-200"
              >
                Book Free Demo
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold border border-white/25 text-white hover:bg-white/10 transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}