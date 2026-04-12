import { WithContext, Organization, WebPage, SoftwareApplication } from 'schema-dts';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const organizationSchema: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Buildarya',
  url: baseUrl,
  logo: `${baseUrl}/assets/images/app_logo.png`,
  description: 'Construction management platform for Indian contractors',
  sameAs: [],
};

export const webPageSchema: WithContext<WebPage> = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Buildarya — Construction Management for Indian Contractors',
  url: baseUrl,
  description: 'Buildarya helps Indian contractors manage sites, expenses, materials, and documents in one simple, reliable system.',
  publisher: {
    '@type': 'Organization',
    name: 'Buildarya',
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/assets/images/app_logo.png`,
    },
  },
};

export const softwareApplicationSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Buildarya',
  description: 'Construction management platform for Indian contractors to manage sites, expenses, materials, and documents.',
  url: baseUrl,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
  },
};
