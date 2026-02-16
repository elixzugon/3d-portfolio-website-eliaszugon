'use client'

import HeroScene from '@/components/hero-scene'
import ProjectGrid from '@/components/project-grid'
import InteractiveGallery from '@/components/interactive-gallery'
import ContactForm from '@/components/contact-form'
import Footer from '@/components/footer'
import ParallaxSection from '@/components/parallax-section'

export default function Home() {
  return (
    <main className="w-full -mt-24">
      {/* Fullscreen hero */}
      <HeroScene />

      {/* Projects Showcase */}
      <ProjectGrid />

      {/* Parallax Section before Gallery */}
      <ParallaxSection
        title="Step Into the Immersive 3D Gallery"
        subtitle="Watch the garments in motion—jump to the Fashion immersive gallery to explore every look."
        backgroundVideo="/homepage-videos/humanoid.mp4"
        height="h-[380px]"
      >
        <div className="mt-6 flex justify-center">
          <a
            href="/specializations/fashion"
            className="inline-flex rounded-lg bg-accent px-6 py-3 text-accent-foreground font-medium hover:opacity-90 transition-opacity"
          >
            View the Immersive Gallery
          </a>
        </div>
      </ParallaxSection>

      {/* Interactive Gallery and Contact Form */}
      <InteractiveGallery />
      <ContactForm compact />
      
      <Footer />
    </main>
  )
}
