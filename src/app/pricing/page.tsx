import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingHero from './components/PricingHero';
import PricingPlans from './components/PricingPlans';
import PricingFaq from './components/PricingFaq';

export const metadata: Metadata = {
  title: 'Pricing — Buildarya Construction Management',
  description: 'Simple, transparent pricing for Buildarya. Three plans for construction teams of any size. All plans include free demo and setup assistance.',
  openGraph: {
    title: 'Pricing — Buildarya',
    description: 'Simple pricing with no surprises. Three plans for any team size.',
    url: '/pricing',
    type: 'website',
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 1200,
        height: 630,
        alt: 'Buildarya pricing plans for construction management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — Buildarya',
    description: 'Simple pricing with no surprises.',
    images: ['/assets/images/app_logo.png'],
  },
  alternates: {
    canonical: '/pricing',
  },
};

export default function PricingPage() {
  return (
    <main className="relative overflow-x-hidden bg-bg">
      <Header />
      <PricingHero />
      <PricingPlans />
      <PricingFaq />
      <Footer />
    </main>
  );
}