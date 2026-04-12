import React from 'react';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Buildarya — Construction Management for Indian Contractors',
  description: 'Buildarya helps Indian contractors manage sites, expenses, materials, and documents in one simple, reliable system built for daily construction operations.',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
  openGraph: {
    title: 'Buildarya — Construction Management',
    description: 'Manage sites, expenses, materials, and documents in one simple system.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'Buildarya',
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 1200,
        height: 630,
        alt: 'Buildarya construction management platform logo and interface',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buildarya — Construction Management',
    description: 'Manage sites, expenses, materials, and documents in one simple system.',
    images: ['/assets/images/app_logo.png'],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        {gaId && gaId !== 'G_XXXXXXXXXX' && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `,
              }}
            />
          </>
        )}
        {/* Placeholder notice for developer */}
        {(!gaId || gaId === 'G_XXXXXXXXXX') && (
          <Script
            id="ga-placeholder-notice"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                console.warn('⚠️ Google Analytics: Measurement ID not configured. Replace G_XXXXXXXXXX in .env with your actual GA4 Measurement ID.');
              `,
            }}
          />
        )}
</head>
      <body>
        {children}
      </body>
    </html>
  );
}