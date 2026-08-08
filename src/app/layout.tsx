import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UK Global Talent Visa Advisory | GeoTalent',
  description: 'GeoTalent offers strategic advisory for UK Global Talent Visa applications.',
  metadataBase: new URL('https://www.geatalent.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'UK Global Talent Visa Advisory | GeoTalent',
    description: 'Strategic advisory for UK Global Talent Visa applications.',
    url: '/',
    siteName: 'GeoTalent',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK Global Talent Visa Advisory | GeoTalent',
    description: 'Strategic advisory for UK Global Talent Visa applications.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,500;1,400&display=swap" rel="stylesheet" />
        </head>
        <body className="antialiased">
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
