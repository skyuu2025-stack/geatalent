import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UK Global Talent Visa Advisory & Endorsement Services | GeoTalent UK',
  description: 'GeoTalent UK offers strategic advisory for UK Global Talent Visa applications, endorsement documentation, and portfolio curation across Digital Technology, Arts, Culture, and Fashion.',
  keywords: 'UK Global Talent Visa, Global Talent Visa UK, Endorsement Application, Fashion Talent Visa UK, Tech Nation Endorsement, GeoTalent UK, US EB1A Visa, NIW Advisory',
  metadataBase: new URL('https://www.geatalent.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'UK Global Talent Visa Advisory & Endorsement Services | GeoTalent UK',
    description: 'GeoTalent UK offers strategic advisory for UK Global Talent Visa applications and portfolio curation.',
    url: '/',
    siteName: 'GeoTalent UK',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GeoTalent UK - Strategic Visa Advisory',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK Global Talent Visa Advisory & Endorsement Services | GeoTalent UK',
    description: 'Strategic advisory for UK Global Talent Visa applications.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "GeoTalent UK",
    "url": "https://www.geatalent.uk/",
    "logo": "https://www.geatalent.uk/logo.png",
    "image": "https://www.geatalent.uk/og-image.jpg",
    "description": "Specialized advisory and portfolio curation services for UK Global Talent Visa applicants.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "GB"
    },
    "areaServed": ["GB", "US", "HK", "VN"],
    "knowsAbout": ["UK Global Talent Visa", "US EB-1A Visa", "Portfolio Curation"]
  };

  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,500;1,400&display=swap" rel="stylesheet" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </head>
        <body className="antialiased">
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
