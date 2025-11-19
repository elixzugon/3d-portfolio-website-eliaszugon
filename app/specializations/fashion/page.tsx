'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ProjectGallery from '@/components/project-gallery'
import { ContactForm } from '@/components/contact-form'
import ImmersiveGallery from '@/components/immersive-gallery'

const fashionFeaturedVideos = [
  {
    id: '1',
    title: 'Fruitopia Prelease Animation',
    description: 'Made this animation to announce the launching of Fruitopia Collection.',
    youtubeId: '1ND2z40c3sE',
    category: 'AR',
  },
  {
    id: '2',
    title: 'AR Animation | Showcasing Pixel Collection',
    description: 'AR project made to present Pixel Collection by Cosmic Factory.',
    youtubeId: '0LFeKu6IvNk',
    category: 'AR',
  },
  {
    id: '3',
    title: 'AR Animation | Cosmic Factory Funtasia Garment',
    description: 'Random AR animation made to remember a piece of the Funtasia Collection.',
    youtubeId: 'MFDj1mmzcb4',
    category: 'AR',
  },
  {
    id: '4',
    title: 'Cosmic Factory Funtasia Logo Animation',
    description: 'Cosmic Factory Logo loop animation made for CRFW.',
    youtubeId: '4pYLd2lOsE4',
    category: 'Brands',
  },
  {
    id: '5',
    title: 'Jaseth Hernández 3D Logo Animation',
    description: 'Created for the designer Jaseth Hernández, presented in his runway at Costa Rica Fashion Week 2025.',
    youtubeId: 'yuEgmFrA1GU',
    category: 'Brands',
  },
  {
    id: '6',
    title: 'Brite Boy Thrift Shop Logo Animation',
    description: 'Animated the Brite Boy logo made by Mariana Aragón.',
    youtubeId: 'j2g3txq_xGk',
    category: 'Brands',
  },
  {
    id: '7',
    title: 'Fruitopia Market Cosmic Factory',
    description: 'A Cosmic Factory Collection.',
    youtubeId: 'IUqh41Bs-nw',
    category: 'Fashion',
  },
  {
    id: '8',
    title: 'Little Shop of Horrors X Cosmic Factory',
    description: 'Animation created to promote the Cosmic Factory collaboration with Oak Productions for their theatre production of Little Shop of Horrors.',
    youtubeId: 'gca7KZo1OyU',
    category: 'Brands',
  },
  {
    id: '9',
    title: 'Funtasia Collection Digital Runway',
    description: 'Cosmic Factory presented a Digital Runway Collection at the Costa Rica Fashion Week 2024, delivering the first digital runway in the country.',
    youtubeId: '_BE3mULdawo',
    category: 'Fashion',
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

export default function FashionDesignPage() {
  return (
    <main className="w-full">
      <Navigation />
      <div className="bg-background px-4 pb-12">
        <div className="mx-auto max-w-7xl flex flex-col gap-16">
          <ImmersiveGallery />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ProjectGallery
              items={fashionGalleryItems}
              title="3D Fashion Design"
              description="Browse through some of the digital garments I made in my career as a 3D Fashion Designer."
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
          >
            <ContactForm
              title="Interested in a Fashion Design Project?"
              description="Get in touch to discuss your 3D fashion design needs. Let's bring your vision to life."
            />
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
