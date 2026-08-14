'use client'

import { motion } from 'framer-motion'
import Footer from '@/components/footer'
import ProjectGallery from '@/components/project-gallery'
import { ContactForm } from '@/components/contact-form'
import ParallaxSection from '@/components/parallax-section'

const motionVideoPath = (fileName: string) => `/motiongraphics/${fileName}`
const featuredMotionYoutubeId = 'gAKPrPHfKRc'
const featuredMotionEmbedUrl = `https://www.youtube.com/embed/${featuredMotionYoutubeId}`
const featuredMotionThumbnail = `https://img.youtube.com/vi/${featuredMotionYoutubeId}/hqdefault.jpg`

const localMotionGraphicsItems = [
  {
    id: '1',
    title: 'Reel Animacion Secrets Halloween 2025',
    description: 'Vertical Halloween reel with campaign graphics, animated reveals, and social pacing.',
    category: 'campaign motion',
    fileName: 'reel-animacion-secrets-halloween-2025.mp4',
  },
  {
    id: '2',
    title: 'Reel Euphoria Fade Out',
    description: 'Fashion and lifestyle reel using transition timing, atmosphere, and a polished fade-out treatment.',
    category: 'fashion motion',
    fileName: 'reel-euphoria-fade-out.mp4',
  },
  {
    id: '3',
    title: 'Siku Anim Cuts 1',
    description: 'Motion edit with product-style cuts, clean staging, and fast visual changes.',
    category: '3d motion',
    fileName: 'siku-anim-cuts-1.mp4',
  },
  {
    id: '4',
    title: 'Video Outfits Amanda 2',
    description: 'Second fashion motion piece for Amanda outfits, built for short-form viewing and outfit emphasis.',
    category: 'fashion motion',
    fileName: 'video-outfits-amanda-2.mp4',
  },
  {
    id: '5',
    title: 'Video Revo 360',
    description: '360-style visual animation for Revo, focused on dimensional movement and product presentation.',
    category: '3d motion',
    fileName: 'video-revo-360.mp4',
  },
  {
    id: '6',
    title: 'Caso PCMA',
    description: 'Case-study style motion piece built to communicate process, results, and context in a compact format.',
    category: 'explainer',
    fileName: 'caso-pcma.mp4',
  },
  {
    id: '7',
    title: 'Equifax Anim con Audio',
    description: 'Motion piece with audio-driven timing for a corporate communication asset.',
    category: 'brand motion',
    fileName: 'equifax-anim-con-audio.mp4',
  },
  {
    id: '8',
    title: 'Planeta Ambulancia',
    description: 'Animated communication piece using illustrative motion and a clear narrative structure.',
    category: 'explainer',
    fileName: 'planeta-ambulancia.mp4',
  },
  {
    id: '9',
    title: 'General Fixed',
    description: 'General-purpose motion edit combining branded graphics, animated elements, and campaign pacing.',
    category: 'brand motion',
    fileName: 'general-fixed.mp4',
  },
  {
    id: '10',
    title: 'Breakdown Revo 360 Teaser',
    description: 'Teaser edit showing motion layers, pacing, and the construction of a 360 visual sequence.',
    category: '3d motion',
    fileName: 'breakdown-revo-360-teaser.mp4',
  },
  {
    id: '11',
    title: 'Animacion Promo Halloween V1',
    description: 'Promotional Halloween animation with fast cuts, seasonal graphics, and a strong campaign hook.',
    category: 'campaign motion',
    fileName: 'animacion-promo-halloween-v1.mp4',
  },
  {
    id: '12',
    title: 'Amanda Outfits',
    description: 'Fashion motion edit focused on outfit transitions, visual pacing, and social-first delivery.',
    category: 'fashion motion',
    fileName: 'amanda-outfits.mp4',
  },
  {
    id: '13',
    title: 'Affiliation Animation',
    description: 'Informational animation for affiliation messaging, designed to make service details feel clear and dynamic.',
    category: 'explainer',
    fileName: 'animacion-afiliacion.mp4',
  },
  {
    id: '14',
    title: "Father's Day Animation",
    description: "Campaign animation created for a Father's Day message with a warm promotional tone.",
    category: 'campaign motion',
    fileName: 'animacion-dia-del-padre.mp4',
  },
  {
    id: '15',
    title: 'Marcas',
    description: 'Brand-focused animation sequence designed to present multiple identities with clean movement.',
    category: 'brand motion',
    fileName: 'marcas.mp4',
  },
  {
    id: '16',
    title: 'Marketing no falla',
    description: 'Social motion asset with direct messaging, energetic timing, and a marketing-oriented edit.',
    category: 'social motion',
    fileName: 'marketing-no-falla.mp4',
  },
  {
    id: '17',
    title: 'Video PNGs',
    description: 'Graphic animation sequence using layered PNG assets, compositing, and kinetic layout changes.',
    category: 'brand motion',
    fileName: 'video-pngs.mp4',
  },
].map(({ fileName, ...item }) => {
  const videoUrl = motionVideoPath(fileName)

  return {
    ...item,
    thumbnail: videoUrl,
    fullImage: videoUrl,
    type: 'video' as const,
    videoUrl,
  }
})

const motionGraphicsItems = [
  {
    id: 'opening-animation-mounjaro',
    title: 'Opening Animation: Mounjaro',
    description: 'Opening animation designed for a 20 x 3 meter panoramic LED screen. Its ultra-wide composition reflects the original venue format, so the piece may appear unusually stretched when viewed in a standard video frame.',
    category: 'brand motion',
    thumbnail: featuredMotionThumbnail,
    fullImage: featuredMotionThumbnail,
    type: 'video' as const,
    videoUrl: featuredMotionEmbedUrl,
  },
  ...localMotionGraphicsItems,
]

export default function MotionGraphicsPage() {
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
                Motion Graphics
              </h1>
              <p className="text-foreground/60 text-lg max-w-2xl">
                Logo animations, campaign loops, visual systems, and short-form motion pieces designed for brands, fashion launches, and digital storytelling.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mt-12">
          <ParallaxSection
            title="Motion Built for Campaigns"
            subtitle="Short-form visuals with rhythm, brand clarity, and dimensional impact."
            backgroundVideo="/motiongraphics/breakdown-revo-360-teaser.mp4"
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
                items={motionGraphicsItems}
                title="Featured Motion Projects"
                description="A focused selection of motion graphics work, including logo reveals, campaign animations, and digital runway visuals."
                enablePagination
                itemsPerPage={6}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4"
            >
              <ContactForm
                title="Start a Motion Graphics Project"
                description="Share the brand, format, and delivery needs for your motion project. I can help shape the concept, animation direction, and final assets."
              />
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
