import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import TrustLine from './components/TrustLine';
import ProblemSolution from './components/ProblemSolution';
import FeaturesSection from './components/FeaturesSection';
import ModulesSection from './components/ModulesSection';
import HowItWorks from './components/HowItWorks';
import PricingSection from './components/PricingSection';
import CtaSection from './components/CtaSection';

export const metadata: Metadata = {
  title: 'Buildarya — Construction Management for Indian Contractors',
  description: 'Buildarya helps Indian contractors manage sites, expenses, materials, and documents in one simple, reliable system built for daily construction operations.',
  openGraph: {
    title: 'Buildarya — Construction Management',
    description: 'Manage sites, expenses, materials, and documents in one simple system.',
    url: '/homepage',
    type: 'website',
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 1200,
        height: 630,
        alt: 'Buildarya construction management platform logo and interface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buildarya — Construction Management',
    description: 'Manage sites, expenses, materials, and documents in one simple system.',
    images: ['/assets/images/app_logo.png'],
  },
  alternates: {
    canonical: '/homepage',
  },
};

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden bg-bg">
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
      <HeroSection />
      <TrustLine />
      <ProblemSolution />
      <FeaturesSection />
      <ModulesSection />
      <HowItWorks />
      <PricingSection />
      <CtaSection />
      <Footer />
    </main>
  );
}