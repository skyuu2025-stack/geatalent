import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

export const metadata = {
  title: 'GEATALENT | Global Talent & AI Intelligence',
  description: 'Premium UK Global Talent pathways, creative portfolios, and AI intelligence tools.',
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
          {/* 引入 Inter 和 Playfair Display 核心字体 */}
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
