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
    title: 'Olivia Advent Calendar',
    category: '',
    thumbnail: 'https://img.youtube.com/vi/rLwHgVjrT8w/hqdefault.jpg',
    fullImage: 'https://img.youtube.com/vi/rLwHgVjrT8w/hqdefault.jpg',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/rLwHgVjrT8w',
  },
  {
    id: '2',
    title: 'Bodega Design Lamp Animation',
    category: '',
    thumbnail: 'https://img.youtube.com/vi/lHIfwrUb1B4/hqdefault.jpg',
    fullImage: 'https://img.youtube.com/vi/lHIfwrUb1B4/hqdefault.jpg',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/lHIfwrUb1B4',
  },
]

export default function ProductAnimationPage() {
  return (
    <main className="w-full">
      <Navigation />
      <div className="pt-16 pb-12 bg-background">
        <div className="px-4">
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
                Dynamic product demonstrations and 3D visualizations for e-commerce and marketing. Showcase your
                products in stunning detail with immersive animations.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Parallax Section */}
        <div className="mt-12">
          <ParallaxSection
            title="Featured Product Animations"
            subtitle="Showcase your products with stunning 3D visualizations"
            backgroundVideo="/product-animation/bodegalamp.mp4"
            height="h-[350px]"
          />
        </div>

        <div className="px-4">
          <div className="max-w-7xl mx-auto">
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
                description="Explore our collection of product animations, from 360-degree visualizations to feature-focused demonstrations."
                disableFilters
                enablePagination
                itemsPerPage={Math.min(6, productItems.length)}
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
                title="Showcase Your Products with 3D Animation"
                description="Let's create stunning product animations that drive conversions. Get in touch to discuss your project."
              />
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
