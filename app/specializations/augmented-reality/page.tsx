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
    title: 'Fruitopia Prelease Animation',
    category: '',
    thumbnail: 'https://img.youtube.com/vi/1ND2z40c3sE/hqdefault.jpg',
    fullImage: 'https://img.youtube.com/vi/1ND2z40c3sE/hqdefault.jpg',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/1ND2z40c3sE',
  },
  {
    id: '2',
    title: 'AR Animation | Showcasing Pixel Collection',
    category: '',
    thumbnail: 'https://img.youtube.com/vi/0LFeKu6IvNk/hqdefault.jpg',
    fullImage: 'https://img.youtube.com/vi/0LFeKu6IvNk/hqdefault.jpg',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/0LFeKu6IvNk',
  },
  {
    id: '3',
    title: 'AR Animation | Cosmic Factory Funtasia Garment',
    category: '',
    thumbnail: 'https://img.youtube.com/vi/MFDj1mmzcb4/hqdefault.jpg',
    fullImage: 'https://img.youtube.com/vi/MFDj1mmzcb4/hqdefault.jpg',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/MFDj1mmzcb4',
  },
  {
    id: '4',
    title: 'AR Cosmic Dress at Rohrmoser',
    category: '',
    thumbnail: 'https://img.youtube.com/vi/wTJ4O6G6pkU/hqdefault.jpg',
    fullImage: 'https://img.youtube.com/vi/wTJ4O6G6pkU/hqdefault.jpg',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/wTJ4O6G6pkU',
  },
]

export default function AugmentedRealityPage() {
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
                Augmented Reality
              </h1>
              <p className="text-foreground/60 text-lg max-w-2xl">
                Interactive AR experiences and immersive digital overlays. Push the boundaries of what's possible when digital meets reality.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Parallax Section */}
        <div className="mt-12">
          <ParallaxSection
            title="Immersive AR Worlds"
            subtitle="Blend digital artifacts with physical spaces through interactive storytelling."
            backgroundVideo="/augmented-reality-media/fruitopiaAR.mp4"
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
                items={arItems}
                title="Featured Projects"
                description="Explore our collection of augmented reality experiences, from virtual try-ons to immersive brand activations."
                disableFilters
                enablePagination
                itemsPerPage={Math.min(6, arItems.length)}
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
                title="Bring Your Vision to Augmented Reality"
                description="Let's discuss your AR project. Contact us to explore how we can create immersive experiences for your brand."
              />
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
