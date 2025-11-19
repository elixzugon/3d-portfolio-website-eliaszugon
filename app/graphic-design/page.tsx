'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ProjectGallery from '@/components/project-gallery'
import { ContactForm } from '@/components/contact-form'
import ParallaxSection from '@/components/parallax-section'

const graphicDesignItems = [
  {
    id: '1',
    title: 'Brand Identity System',
    description: 'Complete visual identity from logo design to brand guidelines. This comprehensive system ensures consistency across all touchpoints and applications.',
    category: 'branding',
    thumbnail: '/graphic-design-branding-identity.jpg',
    fullImage: '/graphic-design-branding-identity.jpg',
    type: 'image' as const,
  },
  {
    id: '2',
    title: 'Print Materials Collection',
    description: 'Professional print design including business cards, letterheads, and packaging. Each piece is carefully crafted with attention to detail and print specifications.',
    category: 'print',
    thumbnail: '/graphic-design-print-materials.jpg',
    fullImage: '/graphic-design-print-materials.jpg',
    type: 'image' as const,
  },
  {
    id: '3',
    title: 'Poster Campaign',
    description: 'Bold and compelling poster designs for marketing campaigns. These designs combine typography, imagery, and color theory to create impact.',
    category: 'marketing',
    thumbnail: '/graphic-design-poster-campaign.jpg',
    fullImage: '/graphic-design-poster-campaign.jpg',
    type: 'image' as const,
  },
  {
    id: '4',
    title: 'Publication Design',
    description: 'Magazine and editorial layout design with thoughtful typography and visual hierarchy. Creating engaging spreads that guide the reader through content.',
    category: 'editorial',
    thumbnail: '/publication-design-magazine.jpg',
    fullImage: '/publication-design-magazine.jpg',
    type: 'image' as const,
  },
]

export default function GraphicDesignPage() {
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
              Graphic Design
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl">
              Compelling visual communication across all mediums. From brand identity to print design, creating designs that stand out and communicate effectively.
            </p>
          </motion.div>

          {/* Parallax Section */}
          <ParallaxSection
            title="Featured Graphic Design"
            subtitle="Visual communication and branding solutions"
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
              items={graphicDesignItems}
              title="Featured Projects"
              description="Explore my graphic design portfolio featuring branding, print design, posters, and editorial layouts."
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
              title="Start Your Graphic Design Project"
              description="Get in touch to discuss your graphic design needs. Let's create visual solutions that make an impact."
            />
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
