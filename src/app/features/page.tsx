import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturesHero from './components/FeaturesHero';
import FeaturesDetail from './components/FeaturesDetail';

export const metadata: Metadata = {
  title: 'Features — Buildarya Construction Management',
  description: 'Explore Buildarya\'s five core features: site tracking, expense management, material inventory, document storage, and team collaboration for Indian construction businesses.',
  openGraph: {
    title: 'Features — Buildarya',
    description: 'Five core features built for construction site management and daily operations.',
    url: '/features',
    type: 'website',
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 1200,
        height: 630,
        alt: 'Buildarya features overview for construction management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Features — Buildarya',
    description: 'Five core features built for construction site management.',
    images: ['/assets/images/app_logo.png'],
  },
  alternates: {
    canonical: '/features',
  },
};

export default function FeaturesPage() {
  return (
    <main className="relative overflow-x-hidden bg-bg">
      <Header />
      <FeaturesHero />
      <FeaturesDetail />
      <Footer />
    </main>
  );
}