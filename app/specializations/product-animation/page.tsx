'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ProjectGallery from '@/components/project-gallery'
import { ContactForm } from '@/components/contact-form'
import ParallaxSection from '@/components/parallax-section'

const productItems = [
  {
    id: '1',
    title: '360° Product Visualization',
    category: 'visualization',
    thumbnail: '/product-animation-3d-ecommerce-showcase.jpg',
    fullImage: '/product-animation-3d-ecommerce-showcase.jpg',
    type: 'image' as const,
  },
  {
    id: '2',
    title: 'E-commerce Product Demo',
    category: 'ecommerce',
    thumbnail: '/placeholder.svg?height=400&width=600',
    fullImage: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '3',
    title: 'Product Feature Showcase',
    category: 'marketing',
    thumbnail: '/placeholder.svg?height=400&width=600',
    fullImage: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '4',
    title: 'Industrial Product Design',
    category: 'visualization',
    thumbnail: '/placeholder.svg?height=400&width=600',
    fullImage: '/placeholder.svg?height=800&width=1200',
    type: 'image' as const,
  },
  {
    id: '5',
    title: 'Luxury Product Animation',
    category: 'marketing',
    thumbnail: '/placeholder.svg?height=400&width=600',
    fullImage: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '6',
    title: 'Interactive Product Model',
    category: 'ecommerce',
    thumbnail: '/placeholder.svg?height=400&width=600',
    fullImage: '/placeholder.svg?height=800&width=1200',
    type: 'image' as const,
  },
]

export default function ProductAnimationPage() {
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
              Product Animation
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl">
              Dynamic product demonstrations and 3D visualizations for e-commerce and marketing. Showcase your products in stunning detail with immersive animations.
            </p>
          </motion.div>

          {/* Parallax Section */}
          <ParallaxSection
            title="Featured Product Animations"
            subtitle="Showcase your products with stunning 3D visualizations"
            backgroundImage="/product-showcase-3d-luxury-background.jpg"
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
              items={productItems}
              title="Featured Projects"
              description="Explore our collection of product animations, from 360° visualizations to feature-focused demonstrations."
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
              title="Showcase Your Products with 3D Animation"
              description="Let's create stunning product animations that drive conversions. Get in touch to discuss your project."
            />
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
