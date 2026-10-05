import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://connectumlabs.com'),
  title: {
    default: 'Connectum Labs — Technology Holding Company',
    template: '%s | Connectum Labs',
  },
  description:
    'Connectum Labs Pty Ltd is a Brisbane-based technology holding company that builds and operates digital products, including AgencyOps, campaign operations software for Queensland real estate agencies, and Celestial.',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'Connectum Labs',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
