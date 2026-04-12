'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: '₹999',
    period: '/month',
    tagline: 'For small teams getting started',
    desc: 'Basic features to begin managing your construction work digitally.',
    features: [
      { text: 'Up to 3 construction sites', included: true },
      { text: 'Expense tracking', included: true },
      { text: 'Basic material records', included: true },
      { text: 'Document storage (5 GB)', included: true },
      { text: 'Up to 5 users', included: true },
      { text: 'Stock management module', included: false },
      { text: 'Billing module', included: false },
      { text: 'Machinery tracking', included: false },
      { text: 'Dedicated account manager', included: false },
    ],
    cta: 'Get Started',
    ctaHref: '/contact',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '₹2,499',
    period: '/month',
    tagline: 'Most popular for regular use',
    desc: 'The most useful set of features for day-to-day site management.',
    features: [
      { text: 'Up to 10 construction sites', included: true },
      { text: 'Full expense management', included: true },
      { text: 'Material purchase & stock', included: true },
      { text: 'Document storage (25 GB)', included: true },
      { text: 'Up to 20 users', included: true },
      { text: 'Stock management module', included: true },
      { text: 'Billing module', included: true },
      { text: 'Machinery tracking', included: false },
      { text: 'Dedicated account manager', included: false },
    ],
    cta: 'Book Free Demo',
    ctaHref: '/contact',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Pro',
    price: '₹4,999',
    period: '/month',
    tagline: 'For larger teams and full usage',
    desc: 'Complete access to all modules for larger construction businesses.',
    features: [
      { text: 'Unlimited construction sites', included: true },
      { text: 'Full expense management', included: true },
      { text: 'Material purchase & stock', included: true },
      { text: 'Document storage (100 GB)', included: true },
      { text: 'Unlimited users', included: true },
      { text: 'Stock management module', included: true },
      { text: 'Billing module', included: true },
      { text: 'Machinery tracking', included: true },
      { text: 'Dedicated account manager', included: true },
    ],
    cta: 'Contact Sales',
    ctaHref: '/contact',
    highlight: false,
  },
];

export default function PricingPlans() {
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
    document.querySelectorAll('.pp-animate')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="py-16 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans?.map((plan, i) => (
            <div
              key={plan?.name}
              className={`pp-animate relative rounded-3xl p-7 flex flex-col opacity-100 ${
                plan?.highlight
                  ? 'bg-primary shadow-teal border-2 border-primary'
                  : 'bg-bg-alt border border-border hover:shadow-card transition-shadow duration-200'
              }`}
              style={{ animation: `animationIn 0.7s ease-out ${0.1 + i * 0.1}s both` }}
            >
              {plan?.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-fg text-2xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-accent">
                  {plan?.badge}
                </span>
              )}

              {/* Header */}
              <div className="mb-6 pb-6 border-b border-white/10" style={{ borderColor: plan?.highlight ? 'rgba(255,255,255,0.12)' : undefined }}>
                <h2 className={`font-display text-xl font-semibold mb-1 ${plan?.highlight ? 'text-white' : 'text-fg'}`}>
                  {plan?.name}
                </h2>
                <p className={`text-xs mb-4 ${plan?.highlight ? 'text-white/60' : 'text-fg-subtle'}`}>
                  {plan?.tagline}
                </p>
                <div className="flex items-baseline gap-1.5">
                  <span className={`text-4xl font-bold font-display ${plan?.highlight ? 'text-white' : 'text-fg'}`}>
                    {plan?.price}
                  </span>
                  <span className={`text-sm ${plan?.highlight ? 'text-white/55' : 'text-fg-muted'}`}>{plan?.period}</span>
                </div>
                <p className={`text-xs mt-2 leading-relaxed ${plan?.highlight ? 'text-white/65' : 'text-fg-muted'}`}>
                  {plan?.desc}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-7">
                {plan?.features?.map((f) => (
                  <li key={f?.text} className={`flex items-center gap-2.5 ${!f?.included ? 'opacity-40' : ''}`}>
                    {f?.included ? (
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className={plan?.highlight ? 'text-accent' : 'text-primary'}>
                        <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="text-fg-subtle">
                        <path d="M4 8h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    )}
                    <span className={`text-sm ${plan?.highlight ? 'text-white/80' : 'text-fg-muted'}`}>{f?.text}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan?.ctaHref}
                className={`text-center py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
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

        {/* Note */}
        <div className="text-center p-6 rounded-2xl bg-bg-alt border border-border">
          <p className="text-sm text-fg-muted">
            <span className="font-semibold text-fg">Need help choosing?</span> Contact us for a demo and setup assistance.{' '}
            <Link href="/contact" className="text-primary font-medium hover:underline">
              hello@buildarya.in
            </Link>
            {' '}or call{' '}
            <a href="tel:+919876543210" className="text-primary font-medium hover:underline">+91 98765 43210</a>
          </p>
        </div>
      </div>
    </section>
  );
}