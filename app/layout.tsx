import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navigation from '@/components/navigation'
import { SpeedInsights } from '@vercel/speed-insights/next'
import ScrollReveal from '@/components/scroll-reveal'

const _geist = Geist({ subsets: ['latin'] });
const _geistMono = Geist_Mono({ subsets: ['latin'] });
const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.eliaszugon.com')

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: 'Elias Zugon Portfolio',
  title: {
    default: 'Elias Zugon | 3D, Motion Graphics, AR, Video & Creative Technology',
    template: '%s | Elias Zugon',
  },
  description: 'Portfolio of Elias Zugon, a multimedia designer creating 3D fashion visuals, motion graphics, augmented reality, video production, and interactive brand experiences.',
  keywords: [
    'Elias Zugon',
    '3D animation',
    'motion graphics',
    'augmented reality',
    'video production',
    '3D fashion design',
    'multimedia designer',
    'creative technology',
  ],
  authors: [{ name: 'Elias Zugon', url: siteUrl }],
  creator: 'Elias Zugon',
  publisher: 'Elias Zugon',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Elias Zugon Portfolio',
    title: 'Elias Zugon | 3D, Motion Graphics, AR, Video & Creative Technology',
    description: 'Explore 3D fashion visuals, motion graphics, augmented reality, video production, and interactive brand experiences.',
    images: [
      {
        url: '/abstract-3d-creative-portfolio-background.jpg',
        width: 1200,
        height: 630,
        alt: 'Elias Zugon creative portfolio preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elias Zugon | 3D, Motion Graphics, AR, Video & Creative Technology',
    description: 'Explore 3D fashion visuals, motion graphics, augmented reality, video production, and interactive brand experiences.',
    images: ['/abstract-3d-creative-portfolio-background.jpg'],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: '/icons/eliaszugon.png',
        type: 'image/png',
      },
    ],
    apple: '/icons/eliaszugon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased bg-background text-foreground`}>
        <Navigation />
        <ScrollReveal />
        <div className="min-h-screen">
          {children}
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
