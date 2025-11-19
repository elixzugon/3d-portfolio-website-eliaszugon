'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import ProjectGrid from '@/components/project-grid'
import InteractiveGallery from '@/components/interactive-gallery'
import ContactForm from '@/components/contact-form'
import Footer from '@/components/footer'
import HeroSkeleton from '@/components/hero-skeleton'
import ParallaxSection from '@/components/parallax-section'

// Lazy load 3D hero to avoid hydration issues
const HeroScene = dynamic(() => import('@/components/hero-scene'), {
  loading: () => <HeroSkeleton />,
  ssr: false,
})

export default function Home() {
  return (
    <main className="w-full -mt-24">
      {/* Interactive 3D Hero */}
      <Suspense fallback={<HeroSkeleton />}>
        <HeroScene />
      </Suspense>

      {/* Projects Showcase */}
      <ProjectGrid />

{/* Parallax Section before Gallery */}
      <ParallaxSection
        title="Explore Our Visual Gallery"
        subtitle="Discover our latest projects and creative work"
        backgroundVideo="/homepage-videos/humanoid.mp4"
        height="h-[380px]"
      />

      {/* Interactive Gallery and Contact Form */}
      <InteractiveGallery />
      <ContactForm compact />
      
      <Footer />
    </main>
  )
}
