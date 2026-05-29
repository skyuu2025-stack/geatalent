import './globals.css'
export const metadata = {
  title: 'GEATALENT.UK | Global Talent & AI Intelligence',
  description: 'Premium UK Global Talent pathways and AI tools.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
