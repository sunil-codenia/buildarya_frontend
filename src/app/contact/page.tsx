import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact — Book a Free Demo with Buildarya',
  description: 'Get in touch with Buildarya. Book a free demo and let us walk you through how our construction management platform works for your business.',
  openGraph: {
    title: 'Contact — Buildarya',
    description: 'Book a free demo or get in touch with our team.',
    url: '/contact',
    type: 'website',
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 1200,
        height: 630,
        alt: 'Buildarya contact page for booking a free demo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact — Buildarya',
    description: 'Book a free demo or get in touch.',
    images: ['/assets/images/app_logo.png'],
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="relative overflow-x-hidden bg-bg">
      <Header />
      <ContactHero />
      <section className="py-16 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}