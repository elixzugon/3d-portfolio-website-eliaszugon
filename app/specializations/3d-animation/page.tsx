'use client'

import { motion } from 'framer-motion'
import Footer from '@/components/footer'
import ProjectGallery from '@/components/project-gallery'
import { ContactForm } from '@/components/contact-form'
import ParallaxSection from '@/components/parallax-section'

const animationItems = [
  {
    id: '1',
    title: 'Cosmic Casino Animation',
    description: 'Featured 3D animation piece with casino-inspired visuals and polished campaign pacing.',
    category: '3D Animation',
    thumbnail: '/product-animation/COSMIC%20CASINO%20ANIMATION.mp4',
    fullImage: '/product-animation/COSMIC%20CASINO%20ANIMATION.mp4',
    type: 'video' as const,
    videoUrl: '/product-animation/COSMIC%20CASINO%20ANIMATION.mp4',
  },
  {
    id: '2',
    title: 'Bodega Design Lamp Animation',
    description: '3D product animation for a design lamp.',
    category: '3D Animation',
    thumbnail: '/homepage-videos/bodegalamp.mp4',
    fullImage: '/homepage-videos/bodegalamp.mp4',
    type: 'video' as const,
    videoUrl: '/homepage-videos/bodegalamp.mp4',
  },
  {
    id: '3',
    title: 'Coleccion Princesa del Cosmos 1 WITH SFX',
    description: '3D fashion animation with sound design for the Princesa del Cosmos collection.',
    category: '3D Animation',
    thumbnail: '/product-animation/Colecci%C3%B3n%20Princesa%20del%20Cosmos%201%20WITH%20SFX.mp4',
    fullImage: '/product-animation/Colecci%C3%B3n%20Princesa%20del%20Cosmos%201%20WITH%20SFX.mp4',
    type: 'video' as const,
    videoUrl: '/product-animation/Colecci%C3%B3n%20Princesa%20del%20Cosmos%201%20WITH%20SFX.mp4',
  },
  {
    id: '4',
    title: 'Ajedrez',
    description: '3D animation piece built around graphic rhythm, cuts, and a concise social format.',
    category: '3D Animation',
    thumbnail: '/motiongraphics/ajedrez.mp4',
    fullImage: '/motiongraphics/ajedrez.mp4',
    type: 'video' as const,
    videoUrl: '/motiongraphics/ajedrez.mp4',
    thumbnailTime: 'middle' as const,
  },
  {
    id: '5',
    title: 'Cosmic Factory Funtasia Logo Animation',
    description: 'Cosmic Factory logo loop animation made for CRFW.',
    category: '3D Animation',
    thumbnail: 'https://img.youtube.com/vi/4pYLd2lOsE4/hqdefault.jpg',
    fullImage: 'https://img.youtube.com/vi/4pYLd2lOsE4/hqdefault.jpg',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/4pYLd2lOsE4',
  },
  {
    id: '6',
    title: 'Jaseth Hernandez Logo Animation',
    category: '3D Animation',
    thumbnail: '/3d-fashion-design-media/jaseth logo png.webp',
    fullImage: '/3d-fashion-design-media/jaseth logo png.webp',
    type: 'image' as const,
  },
  {
    id: '7',
    title: 'JH Logo Explosion',
    category: '3D Animation',
    thumbnail: '/3d-fashion-design-media/3D-LOGO-MATTE-1.webp',
    fullImage: '/3d-fashion-design-media/3D-LOGO-MATTE-1.webp',
    type: 'image' as const,
  },
  {
    id: '8',
    title: 'Brite Boy Logo Animation',
    category: '3D Animation',
    thumbnail: 'https://img.youtube.com/vi/j2g3txq_xGk/hqdefault.jpg',
    fullImage: 'https://img.youtube.com/vi/j2g3txq_xGk/hqdefault.jpg',
    type: 'image' as const,
  },
  {
    id: '9',
    title: 'The Regenerative Medicine Institute Logo Animation',
    category: '3D Animation',
    thumbnail: '/3d-fashion-design-media/0069-1024x576.png',
    fullImage: '/3d-fashion-design-media/0069-1024x576.png',
    type: 'image' as const,
  },
  {
    id: '10',
    title: 'Grupo R&S Logo Animation',
    category: '3D Animation',
    thumbnail: '/3d-fashion-design-media/0212-1024x722.png',
    fullImage: '/3d-fashion-design-media/0212-1024x722.png',
    type: 'image' as const,
  },
  {
    id: '11',
    title: 'Little Shop of Horrors X Cosmic Factory',
    description: 'Animation created to promote the Cosmic Factory collaboration with Oak Productions.',
    category: '3D Animation',
    thumbnail: 'https://img.youtube.com/vi/gca7KZo1OyU/hqdefault.jpg',
    fullImage: 'https://img.youtube.com/vi/gca7KZo1OyU/hqdefault.jpg',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/gca7KZo1OyU',
  },
  {
    id: '12',
    title: 'Olivia Advent Calendar',
    category: '3D Animation',
    thumbnail: 'https://img.youtube.com/vi/rLwHgVjrT8w/hqdefault.jpg',
    fullImage: 'https://img.youtube.com/vi/rLwHgVjrT8w/hqdefault.jpg',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/rLwHgVjrT8w',
  },
]

export default function ThreeDAnimationPage() {
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
                3D Animation
              </h1>
              <p className="text-foreground/60 text-lg max-w-2xl">
                A focused selection of dimensional animation work, including logo reveals, product visuals,
                commercial graphics, and short-form 3D pieces.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mt-12">
          <ParallaxSection
            title="Dimensional Motion"
            subtitle="General 3D animation for brands, products, campaigns, and visual systems."
            backgroundVideo="/product-animation/COSMIC%20CASINO%20ANIMATION.mp4"
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
                items={animationItems}
                title="Featured Projects"
                description="Combined 3D animation work across brand, product, commercial, and social formats."
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
                title="Start a 3D Animation Project"
                description="Share the brand, product, or campaign you want to animate. I can help shape the concept, motion direction, and final assets."
              />
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
