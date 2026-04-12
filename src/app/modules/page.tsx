import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ModulesHero from './components/ModulesHero';
import ModulesGrid from './components/ModulesGrid';

export const metadata: Metadata = {
  title: 'Modules — Buildarya Construction Management Platform',
  description: 'Discover Buildarya\'s 7 modules: site management, expense tracking, material inventory, document storage, team management, reporting, and more for construction businesses.',
  openGraph: {
    title: 'Modules — Buildarya',
    description: 'Seven modules covering all areas of construction site management and operations.',
    url: '/modules',
    type: 'website',
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 1200,
        height: 630,
        alt: 'Buildarya modules for construction management platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modules — Buildarya',
    description: 'Seven modules for construction site management.',
    images: ['/assets/images/app_logo.png'],
  },
  alternates: {
    canonical: '/modules',
  },
};

export default function ModulesPage() {
  return (
    <main className="relative overflow-x-hidden bg-bg">
      <Header />
      <ModulesHero />
      <ModulesGrid />
      <Footer />
    </main>
  );
}