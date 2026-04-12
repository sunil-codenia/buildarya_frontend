import React from 'react';
import Link from 'next/link';

export default function FeaturesHero() {
  return (
    <section className="pt-28 pb-16 bg-bg border-b border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <span className="text-2xs uppercase tracking-widest font-bold text-fg-subtle mb-4 block">Features</span>
          <h1 className="font-display text-4xl sm:text-5xl text-fg leading-tight mb-5">
            What Buildarya<br />
            <span className="italic text-teal-gradient">actually does</span>
          </h1>
          <p className="text-base text-fg-muted leading-relaxed mb-8 max-w-lg">
            Five core features built around the real needs of Indian construction businesses. No extras, no fluff.
          </p>
          <Link
            href="/contact"
            className="btn-accent inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold shadow-accent"
          >
            Book Free Demo
          </Link>
        </div>
      </div>
    </section>
  );
}