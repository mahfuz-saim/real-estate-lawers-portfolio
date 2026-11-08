import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Feehan Law Office | Wills, Estates & Real Estate Law | Edmonton, Alberta",
  description:
    "Feehan Law Office — trusted Edmonton lawyers specializing in wills, estate planning, probate, powers of attorney, personal directives, and real estate transactions. Serving Alberta since 1994. Free initial consultation.",
  keywords: [
    "Edmonton lawyer",
    "estate planning Edmonton",
    "wills lawyer Alberta",
    "probate lawyer Edmonton",
    "real estate lawyer Edmonton",
    "powers of attorney Alberta",
    "personal directives Edmonton",
    "Feehan Law Office",
    "Matthew Feehan lawyer",
  ],
  authors: [{ name: "Feehan Law Office" }],
  openGraph: {
    title: "Feehan Law Office | Wills, Estates & Real Estate Law",
    description:
      "Trusted Edmonton lawyers specializing in wills, estate planning, probate, and real estate. Serving Alberta since 1994.",
    url: "https://matthewfeehan.ca",
    siteName: "Feehan Law Office",
    locale: "en_CA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://matthewfeehan.ca",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Feehan Law Office",
              description:
                "Trusted Edmonton lawyers specializing in wills, estate planning, probate, powers of attorney, personal directives, and real estate transactions.",
              url: "https://matthewfeehan.ca",
              telephone: "(780) 424-6430",
              email: "matthewfeehan@shaw.ca",
              address: {
                "@type": "PostalAddress",
                streetAddress: "10160 - 118 Street NW",
                addressLocality: "Edmonton",
                addressRegion: "AB",
                postalCode: "T5K 1Y4",
                addressCountry: "CA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 53.5461,
                longitude: -113.4938,
              },
              areaServed: {
                "@type": "Province",
                name: "Alberta",
              },
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "17:00",
                },
              ],
              founder: {
                "@type": "Person",
                name: "Matthew F. Feehan",
                jobTitle: "Barrister & Solicitor",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
