import './globals.css';
export const metadata = {
  metadataBase: new URL('https://www.richardslaw.ca'),
  title: { default: 'Richards + Company | Edmonton Real Estate & Business Lawyers', template: '%s | Richards + Company' },
  description: 'Practical legal counsel for real estate, corporate and commercial matters, and wills and estates. Richards + Company serves Edmonton and clients across Alberta and Canada.',
  applicationName: 'Richards + Company',
  keywords: ['Edmonton lawyers', 'Edmonton real estate lawyer', 'Alberta business law', 'wills and estates Edmonton', 'commercial real estate lawyer'],
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'en_CA', url: '/', siteName: 'Richards + Company', title: 'Richards + Company — Clear counsel. Confident next steps.', description: 'Edmonton lawyers for real estate, business and estate planning.', images: [{ url: '/opengraph-image' }] },
  twitter: { card: 'summary_large_image', title: 'Richards + Company | Edmonton Lawyers', description: 'Practical legal advice for real estate, business and estate planning.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
};

const legalService = { '@context': 'https://schema.org', '@type': 'LegalService', name: 'Richards + Company', url: 'https://www.richardslaw.ca/', telephone: '+1-780-436-8554', email: 'office@richardslaw.ca', address: { '@type': 'PostalAddress', streetAddress: 'Suite 302, 1524 - 91 Street S.W.', addressLocality: 'Edmonton', addressRegion: 'AB', postalCode: 'T6X 1M5', addressCountry: 'CA' }, areaServed: [{ '@type': 'City', name: 'Edmonton' }, { '@type': 'AdministrativeArea', name: 'Alberta' }], priceRange: '$$', knowsAbout: ['Real estate law', 'Corporate law', 'Commercial law', 'Wills and estates'] };

export default function RootLayout({ children }) {
  return <html lang="en-CA"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalService) }} /></body></html>;
}
