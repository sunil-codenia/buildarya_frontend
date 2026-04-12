import React from 'react';

export default function PricingHero() {
  return (
    <section className="pt-28 pb-14 bg-bg border-b border-border text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/4 rounded-full -translate-y-1/2 pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <span className="text-2xs uppercase tracking-widest font-bold text-fg-subtle mb-4 block">Pricing</span>
        <h1 className="font-display text-4xl sm:text-5xl text-fg leading-tight mb-5">
          Simple pricing,<br />
          <span className="italic text-teal-gradient">no surprises</span>
        </h1>
        <p className="text-base text-fg-muted leading-relaxed max-w-md mx-auto">
          Three plans to match your team size. All plans include a free demo and setup assistance.
        </p>
      </div>
    </section>
  );
}