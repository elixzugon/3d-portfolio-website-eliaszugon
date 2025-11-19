'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ProjectGallery from '@/components/project-gallery'
import { ContactForm } from '@/components/contact-form'
import ParallaxSection from '@/components/parallax-section'

const arItems = [
  {
    id: '1',
    title: 'Interactive AR Experience',
    category: 'interactive',
    thumbnail: '/augmented-reality-3d-interactive-experience.jpg',
    fullImage: '/augmented-reality-3d-interactive-experience.jpg',
    type: 'image' as const,
  },
  {
    id: '2',
    title: 'Virtual Try-On Demo',
    category: 'retail',
    thumbnail: '/ar-virtual-try-on-augmented-reality.jpg',
    fullImage: '/ar-virtual-try-on-augmented-reality.jpg',
    type: 'image' as const,
  },
  {
    id: '3',
    title: 'Product Placement AR',
    category: 'product',
    thumbnail: '/ar-product-placement-augmented-reality.jpg',
    fullImage: '/ar-product-placement-augmented-reality.jpg',
    type: 'image' as const,
  },
  {
    id: '4',
    title: 'Educational AR Module',
    category: 'education',
    thumbnail: '/ar-educational-augmented-reality-learning.jpg',
    fullImage: '/ar-educational-augmented-reality-learning.jpg',
    type: 'image' as const,
  },
  {
    id: '5',
    title: 'AR Furniture Visualizer',
    category: 'retail',
    thumbnail: '/ar-furniture-room-visualization.jpg',
    fullImage: '/ar-furniture-room-visualization.jpg',
    type: 'image' as const,
  },
  {
    id: '6',
    title: 'Immersive Brand Experience',
    category: 'interactive',
    thumbnail: '/ar-immersive-brand-experience.jpg',
    fullImage: '/ar-immersive-brand-experience.jpg',
    type: 'image' as const,
  },
]

export default function AugmentedRealityPage() {
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
              Augmented Reality
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl">
              Interactive AR experiences and immersive digital overlays. Push the boundaries of what's possible when digital meets reality.
            </p>
          </motion.div>

          {/* Parallax Section */}
          <ParallaxSection
            title="Featured AR Experiences"
            subtitle="Immersive digital experiences blending reality and imagination"
            backgroundImage="/augmented-reality-futuristic-background.jpg"
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
              items={arItems}
              title="Featured Projects"
              description="Explore our collection of augmented reality experiences, from virtual try-ons to immersive brand activations."
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
              title="Bring Your Vision to Augmented Reality"
              description="Let's discuss your AR project. Contact us to explore how we can create immersive experiences for your brand."
            />
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
