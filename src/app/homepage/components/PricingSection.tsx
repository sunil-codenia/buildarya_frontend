'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: '₹999',
    period: '/month',
    desc: 'Basic features for small teams just getting started.',
    features: [
      'Up to 3 construction sites',
      'Expense tracking',
      'Basic material records',
      'Document storage (5 GB)',
      'Up to 5 users',
      'Email support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '₹2,499',
    period: '/month',
    desc: 'Most useful features for regular day-to-day site management.',
    features: [
      'Up to 10 construction sites',
      'Full expense management',
      'Material purchase & stock',
      'Document storage (25 GB)',
      'Up to 20 users',
      'Billing module',
      'Priority support',
    ],
    cta: 'Book Free Demo',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Pro',
    price: '₹4,999',
    period: '/month',
    desc: 'For larger teams needing full access to all modules.',
    features: [
      'Unlimited construction sites',
      'All modules included',
      'Machinery tracking',
      'Document storage (100 GB)',
      'Unlimited users',
      'Dedicated account manager',
      'Custom onboarding',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
];

export default function PricingSection() {
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
    document.querySelectorAll('.price-animate')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="pricing" className="py-20 pt-12 bg-bg relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="price-animate text-center mb-14 opacity-100"
          style={{ animation: 'animationIn 0.7s ease-out 0.1s both' }}
        >
          <span className="text-2xs uppercase tracking-widest font-bold text-fg-subtle mb-3 block">Pricing</span>
          <h2 className="font-display text-3xl sm:text-4xl text-fg mb-4">Simple, transparent pricing</h2>
          <p className="text-sm text-fg-muted max-w-md mx-auto">
            All plans include a free demo and setup assistance. No hidden charges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans?.map((plan, i) => (
            <div
              key={plan?.name}
              className={`price-animate relative rounded-3xl p-7 flex flex-col opacity-100 ${
                plan?.highlight
                  ? 'bg-primary text-white shadow-teal border-2 border-primary'
                  : 'bg-bg-alt border border-border hover:shadow-card transition-shadow duration-200'
              }`}
              style={{ animation: `animationIn 0.7s ease-out ${0.15 + i * 0.1}s both` }}
            >
              {plan?.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-fg text-2xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {plan?.badge}
                </span>
              )}

              <div className="mb-6">
                <h3 className={`font-display text-xl font-semibold mb-1 ${plan?.highlight ? 'text-white' : 'text-fg'}`}>
                  {plan?.name}
                </h3>
                <p className={`text-xs leading-relaxed mb-4 ${plan?.highlight ? 'text-white/70' : 'text-fg-muted'}`}>
                  {plan?.desc}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold font-display ${plan?.highlight ? 'text-white' : 'text-fg'}`}>
                    {plan?.price}
                  </span>
                  <span className={`text-sm ${plan?.highlight ? 'text-white/60' : 'text-fg-muted'}`}>
                    {plan?.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan?.features?.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`mt-0.5 flex-shrink-0 ${plan?.highlight ? 'text-accent' : 'text-primary'}`}>
                      <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className={`text-sm ${plan?.highlight ? 'text-white/85' : 'text-fg-muted'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  plan?.highlight
                    ? 'btn-accent shadow-accent'
                    : 'border border-border hover:border-primary/40 hover:bg-primary/5 text-fg'
                }`}
              >
                {plan?.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-fg-muted mt-8">
          Contact us for a demo and setup assistance —{' '}
          <Link href="/contact" className="text-primary font-medium hover:underline">
            hello@buildarya.in
          </Link>
        </p>
      </div>
    </section>
  );
}