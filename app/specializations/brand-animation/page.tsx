'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ProjectGallery from '@/components/project-gallery'
import { ContactForm } from '@/components/contact-form'
import ParallexSection from '@/components/parallax-section'

const brandAnimationItems = [
  {
    id: '1',
    title: 'Fruitopia AR Clip',
    category: 'Fashion',
    thumbnail: '/3d-fashion-design-media/fruitopia clip.2436.Still004.jpg',
    fullImage: '/3d-fashion-design-media/fruitopia clip.2436.Still004.jpg',
    type: 'image' as const,
  },
  {
    id: '2',
    title: 'Jaseth Logo Reveal',
    category: 'Brands',
    thumbnail: '/3d-fashion-design-media/jaseth logo png.webp',
    fullImage: '/3d-fashion-design-media/jaseth logo png.webp',
    type: 'image' as const,
  },
  {
    id: '3',
    title: 'Chromatic Logo Loop',
    category: 'Brands',
    thumbnail: '/3d-fashion-design-media/3D-LOGO-MATTE-1.webp',
    fullImage: '/3d-fashion-design-media/3D-LOGO-MATTE-1.webp',
    type: 'image' as const,
  },
  {
    id: '4',
    title: 'Campaign Frame 0069',
    category: 'Commercial',
    thumbnail: '/3d-fashion-design-media/0069-1024x576.png',
    fullImage: '/3d-fashion-design-media/0069-1024x576.png',
    type: 'image' as const,
  },
  {
    id: '5',
    title: 'Campaign Frame 0212',
    category: 'Commercial',
    thumbnail: '/3d-fashion-design-media/0212-1024x722.png',
    fullImage: '/3d-fashion-design-media/0212-1024x722.png',
    type: 'image' as const,
  },
  {
    id: '6',
    title: 'Brand Loop',
    category: 'Brands',
    thumbnail: '/3d-fashion-design-media/jaseth logo png.webp',
    fullImage: '/3d-fashion-design-media/jaseth logo png.webp',
    type: 'image' as const,
  },
]

export default function BrandAnimationPage() {
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
              3D Animation For Brands
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl">
              Professional brand animations and promotional videos. Transform your brand message with captivating 3D animations that engage and inspire your audience.
            </p>
          </motion.div>

          {/* Parallax Section */}
          <ParallexSection
            title="Featured Brand Animations"
            subtitle="Transform your brand with captivating 3D animations"
            backgroundVideo="/3d-fashion-design-media/Jaseth.mp4"
            height="h-[350px]"
          />

          {/* Project Gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <ProjectGallery
              items={brandAnimationItems}
              title="Featured Projects"
              description="Explore our collection of brand animations, from logo animations to full commercial campaigns."
              disableFilters
              enablePagination
              itemsPerPage={6}
              hideCategoryBadge
            />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4"
          >
            <ContactForm
              title="Ready to Elevate Your Brand?"
              description="Let's discuss your brand animation project. Contact us to explore how we can bring your vision to life."
            />
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
