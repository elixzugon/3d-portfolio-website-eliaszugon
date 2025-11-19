import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navigation from '@/components/navigation'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'eliaszugon',
  description: 'Explore innovative 3D projects, photography, video production, and UX design work',
  generator: 'v0.app',
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
        <div className="pt-24 min-h-screen">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
