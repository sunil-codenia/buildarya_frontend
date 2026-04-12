'use client';
import React, { useState } from 'react';

const faqs = [
  {
    q: 'Is there a free trial?',
    a: 'We offer a free demo session where we walk you through the system. Contact us to book your demo — no credit card required.',
  },
  {
    q: 'Can I change my plan later?',
    a: 'Yes. You can upgrade or downgrade your plan at any time. Changes take effect from the next billing cycle.',
  },
  {
    q: 'How many users can I add?',
    a: 'Starter allows up to 5 users, Growth up to 20 users, and Pro allows unlimited users across all your sites.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. Your data is stored securely and only accessible to users you authorize. We do not share your data with third parties.',
  },
  {
    q: 'Do you offer setup assistance?',
    a: 'Yes. All plans include basic setup assistance. Pro plan includes a dedicated account manager for onboarding and ongoing support.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept UPI, net banking, and card payments. Invoices are provided for all transactions.',
  },
];

export default function PricingFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 pt-4 bg-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-2xs uppercase tracking-widest font-bold text-fg-subtle mb-3 block">FAQ</span>
          <h2 className="font-display text-3xl text-fg">Common questions</h2>
        </div>
        <div className="space-y-3">
          {faqs?.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-bg-alt overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-sm font-semibold text-fg">{faq?.q}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`flex-shrink-0 text-fg-muted transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-fg-muted leading-relaxed">{faq?.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}