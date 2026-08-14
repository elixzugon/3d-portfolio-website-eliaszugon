'use client'

import { motion } from 'framer-motion'
import Footer from '@/components/footer'
import ProjectGallery from '@/components/project-gallery'
import { ContactForm } from '@/components/contact-form'
import ParallaxSection from '@/components/parallax-section'

const fashionFeaturedVideos = [
  {
    id: '1',
    title: 'Fruitopia Market Cosmic Factory',
    description: 'A Cosmic Factory Collection.',
    youtubeId: 'IUqh41Bs-nw',
    category: '3D Fashion',
  },
  {
    id: '2',
    title: 'AR Animation | Cosmic Factory Funtasia Garment',
    description: 'AR fashion animation made to revisit a piece from the Funtasia Collection.',
    youtubeId: 'MFDj1mmzcb4',
    category: '3D Fashion',
  },
  {
    id: '3',
    title: 'AR Animation | Showcasing Pixel Collection',
    description: 'AR project made to present Pixel Collection by Cosmic Factory.',
    youtubeId: '0LFeKu6IvNk',
    category: '3D Fashion',
  },
  {
    id: '4',
    title: 'Funtasia Collection Digital Runway',
    description: 'Cosmic Factory presented a Digital Runway Collection at the Costa Rica Fashion Week 2024, delivering the first digital runway in the country.',
    youtubeId: '_BE3mULdawo',
    category: '3D Fashion',
  },
]

const fashionGalleryItems = fashionFeaturedVideos.map(video => ({
  id: video.id,
  title: video.title,
  description: video.description,
  category: video.category,
  thumbnail: `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`,
  fullImage: `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`,
  type: 'video' as const,
  videoUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
}))

const fashionItems = [
  ...fashionGalleryItems,
  {
    id: '5',
    title: 'Bloke Cambio Numeros',
    description: '3D fashion animation piece for Cosmic Factory.',
    category: '3D Fashion',
    thumbnail: '/homepage-videos/blokecambionumeros.mp4',
    fullImage: '/homepage-videos/blokecambionumeros.mp4',
    type: 'video' as const,
    videoUrl: '/homepage-videos/blokecambionumeros.mp4',
  },
]

export default function FashionDesignPage() {
  return (
    <main className="w-full">
      <div className="pt-16 pb-12 bg-background">
        <div className="px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">
                3D Fashion Design
              </h1>
              <p className="text-foreground/60 text-lg max-w-2xl">
                Digital garment work for collections, runways, and fashion campaigns.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mt-12">
          <ParallaxSection
            title="Digital Garments"
            subtitle="Fashion collections built for campaigns, runways, and immersive visual storytelling."
            backgroundImage="https://img.youtube.com/vi/IUqh41Bs-nw/maxresdefault.jpg"
            height="h-[350px]"
          />
        </div>

        <div className="px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12"
            >
              <ProjectGallery
                items={fashionItems}
                title="Featured Projects"
                description="Browse through selected digital garments and fashion animations."
                disableFilters
                enablePagination
                itemsPerPage={6}
                hideCategoryBadge
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4"
            >
              <ContactForm
                title="Interested in a Fashion Design Project?"
                description="Get in touch to discuss your 3D fashion design needs. Let's bring your vision to life."
              />
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
