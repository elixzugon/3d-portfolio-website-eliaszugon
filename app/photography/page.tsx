'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ProjectGallery from '@/components/project-gallery'
import { ContactForm } from '@/components/contact-form'
import ParallaxSection from '@/components/parallax-section'

const photographyItems = [
  {
    id: '1',
    title: 'Urban Landscapes',
    description: 'Capturing the essence of city life through dynamic composition and lighting. This series explores the geometric patterns and energy of urban environments, showcasing architecture and street scenes.',
    category: 'landscapes',
    thumbnail: '/urban-city-photography-landscape.jpg',
    fullImage: '/urban-city-photography-landscape.jpg',
    type: 'image' as const,
  },
  {
    id: '2',
    title: 'Nature Chronicles',
    description: 'Breathtaking moments from nature and wildlife photography. Each image tells a story of wildlife behavior, seasonal changes, and the raw beauty of natural landscapes.',
    category: 'nature',
    thumbnail: '/nature-wildlife-photography-landscape.jpg',
    fullImage: '/nature-wildlife-photography-landscape.jpg',
    type: 'image' as const,
  },
  {
    id: '3',
    title: 'Portrait Stories',
    description: 'Human stories told through intimate portrait photography. These portraits capture personality, emotion, and character through careful lighting and composition.',
    category: 'portraits',
    thumbnail: '/professional-portrait.png',
    fullImage: '/professional-portrait.png',
    type: 'image' as const,
  },
  {
    id: '4',
    title: 'Architectural Details',
    description: 'The intersection of design and photography in architectural spaces. This collection highlights structural elements, materials, and the interplay of light and shadow.',
    category: 'architecture',
    thumbnail: '/modern-architecture.png',
    fullImage: '/modern-architecture.png',
    type: 'image' as const,
  },
]

export default function PhotographyPage() {
  return (
    <main className="w-full">
      <Navigation />
      <div className="pt-16 pb-12 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">
              Photography
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl">
              Visual storytelling through the lens. Exploring light, composition, and moments that matter through compelling imagery.
            </p>
          </motion.div>

          {/* Parallax Section */}
          <ParallaxSection
            title="Featured Photography"
            subtitle="Explore visual stories captured through the lens"
            backgroundImage="/abstract-3d-creative-background.jpg"
            height="h-[350px]"
          />

          {/* Project Gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <ProjectGallery
              items={photographyItems}
              title="Featured Projects"
              description="Browse through my photography collection spanning landscapes, nature, portraits, and architecture."
            />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-4"
          >
            <ContactForm
              title="Book a Photography Session"
              description="Get in touch to discuss your photography project. Let's create beautiful visual stories together."
            />
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
