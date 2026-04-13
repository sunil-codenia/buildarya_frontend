import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — Buildarya',
  description: 'Our privacy policy explains how we collect, use, and protect your information when you use Buildarya.',
};

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen bg-bg overflow-x-hidden">
      {/* Grid overlay */}
      <div className="grid-overlay hidden lg:flex" aria-hidden="true">
        <div className="grid-inner">
          <div className="grid-line-v" />
          <div className="grid-line-v" />
          <div className="grid-line-v" />
          <div className="grid-line-v" />
        </div>
      </div>

      <Header />

      {/* Hero Header */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Abstract background element */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-8 animate-on-scroll opacity-100" style={{ animation: 'fadeIn 0.6s ease-out forwards' }}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
              Legal Documentation
            </span>
            <div className="h-px w-8 bg-border" />
            <span className="text-fg-subtle text-xs font-medium">Updated April 13, 2026</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl text-fg mb-8 leading-[1.1] tracking-tight">
            Privacy <span className="text-teal-gradient italic">Policy</span>
          </h1>

          <p className="text-xl text-fg-muted max-w-2xl leading-relaxed border-l-2 border-primary/20 pl-6">
            We value your trust. This policy outlines how Buildarya handles your data with transparency, security, and respect for your privacy.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-bg-alt/50 backdrop-blur-sm border-y border-border">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-20">

            {/* 1. Introduction */}
            <article className="group">
              <div className="flex items-start gap-6">
                <span className="font-display text-4xl text-primary/20 group-hover:text-primary/40 transition-colors shrink-0 pt-1">01</span>
                <div>
                  <h2 className="font-display text-2xl text-fg mb-6 group-hover:translate-x-1 transition-transform inline-block">Introduction</h2>
                  <div className="text-fg-muted leading-relaxed space-y-4 text-lg">
                    <p>
                      Welcome to Buildarya. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at <a href="mailto:privacy@buildarya.in" className="text-primary hover:underline font-medium">privacy@buildarya.in</a>.
                    </p>
                    <p>
                      In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* 2. Information We Collect */}
            <article className="group">
              <div className="flex items-start gap-6">
                <span className="font-display text-4xl text-primary/20 group-hover:text-primary/40 transition-colors shrink-0 pt-1">02</span>
                <div>
                  <h2 className="font-display text-2xl text-fg mb-6 group-hover:translate-x-1 transition-transform inline-block">Information We Collect</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                    <div className="p-6 rounded-2xl bg-bg border border-border hover:shadow-soft transition-all duration-300">
                      <h3 className="font-bold text-fg mb-3 text-sm uppercase tracking-wider">Account Data</h3>
                      <p className="text-fg-muted text-sm leading-relaxed">
                        Name, professional email, phone number, and company credentials used for authentication and service delivery.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-bg border border-border hover:shadow-soft transition-all duration-300">
                      <h3 className="font-bold text-fg mb-3 text-sm uppercase tracking-wider">Operational Data</h3>
                      <p className="text-fg-muted text-sm leading-relaxed">
                        Site locations, material logs, expense records, and project documentation uploaded to the Buildarya platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* 3. Data Protection */}
            <article className="group">
              <div className="flex items-start gap-6">
                <span className="font-display text-4xl text-primary/20 group-hover:text-primary/40 transition-colors shrink-0 pt-1">03</span>
                <div>
                  <h2 className="font-display text-2xl text-fg mb-6 group-hover:translate-x-1 transition-transform inline-block">Protection & Security</h2>
                  <div className="relative p-8 rounded-3xl bg-primary/5 border border-primary/10 overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                    <p className="text-fg-muted text-lg leading-relaxed relative z-10">
                      We implement a variety of security measures to maintain the safety of your personal information. Your data is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.
                    </p>
                    <div className="mt-8 flex gap-4 relative z-10">
                      <div className="flex items-center gap-2 text-xs font-semibold text-primary px-3 py-1.5 rounded-full bg-primary/10">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        AES-256 Encryption
                      </div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-primary px-3 py-1.5 rounded-full bg-primary/10">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        SSL/TLS Secured
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* 4. Contact Block */}
            <article className="relative p-12 rounded-[2.5rem] bg-fg overflow-hidden text-center">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="grid-overlay flex h-full w-full">
                  <div className="grid-inner flex h-full w-full justify-around">
                    <div className="w-px h-full bg-white/20" />
                    <div className="w-px h-full bg-white/20" />
                    <div className="w-px h-full bg-white/20" />
                  </div>
                </div>
              </div>

              <h2 className="font-display text-3xl text-white mb-6 relative z-10">Questions regarding your privacy?</h2>
              <p className="text-white/60 mb-10 max-w-md mx-auto relative z-10">
                Our support team is available to help you understand how your data is managed on our platform.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                <a href="mailto:privacy@buildarya.in" className="btn-accent px-8 py-4 rounded-2xl text-sm font-bold hover:shadow-lg transition-all duration-300">
                  Contact Privacy Team
                </a>
                <a href="/contact" className="px-8 py-4 rounded-2xl text-sm font-bold border border-white/20 text-white hover:bg-white/5 transition-colors">
                  General Support
                </a>
              </div>
            </article>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
