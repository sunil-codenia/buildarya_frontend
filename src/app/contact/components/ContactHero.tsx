import React from 'react';

export default function ContactHero() {
  return (
    <section className="pt-28 pb-12 bg-bg border-b border-border relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-xl">
          <span className="text-2xs uppercase tracking-widest font-bold text-fg-subtle mb-4 block">Contact</span>
          <h1 className="font-display text-4xl sm:text-5xl text-fg leading-tight mb-4">
            Book a free demo<br />
            <span className="italic text-teal-gradient">or get in touch</span>
          </h1>
          <p className="text-base text-fg-muted leading-relaxed max-w-md">
            We will walk you through Buildarya and help you decide if it is the right fit for your construction business.
          </p>
        </div>
      </div>
    </section>
  );
}