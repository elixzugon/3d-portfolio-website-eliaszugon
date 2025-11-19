'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ProjectGallery from '@/components/project-gallery'
import { ContactForm } from '@/components/contact-form'
import ParallaxSection from '@/components/parallax-section'

const videoItems = [
  {
    id: '1',
    title: 'Brand Storytelling',
    description: 'Cinematic videos that tell compelling brand stories. This project combines narrative, visual effects, and sound design to create an emotional connection with the audience.',
    category: 'commercial',
    thumbnail: '/cinematic-video-production.png',
    fullImage: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '2',
    title: 'Product Demos',
    description: 'Dynamic product showcases with professional editing. These videos highlight product features with smooth transitions, color grading, and engaging pacing.',
    category: 'product',
    thumbnail: '/product-video-demonstration.jpg',
    fullImage: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '3',
    title: 'Motion Graphics',
    description: 'Creative motion design and animated explainers. Using kinetic typography, shape animation, and visual effects to communicate complex ideas clearly.',
    category: 'motion',
    thumbnail: '/abstract-motion-graphics.png',
    fullImage: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '4',
    title: 'Documentary Style',
    description: 'Real stories captured with authentic documentary techniques. Raw footage, natural sound design, and thoughtful editing to create impactful narratives.',
    category: 'documentary',
    thumbnail: '/documentary-style-video.png',
    fullImage: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
]

export default function VideoPage() {
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
              Video Production
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl">
              Cinematic experiences from concept to post-production. Creating compelling video content that resonates with audiences.
            </p>
          </motion.div>

          {/* Parallax Section */}
          <ParallaxSection
            title="Featured Videos"
            subtitle="Cinematic production and motion design"
            backgroundImage="/dynamic-brand-motion-graphics-background.jpg"
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
              items={videoItems}
              title="Featured Projects"
              description="Explore my video production portfolio featuring commercial work, product demos, motion graphics, and documentary content."
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
              title="Start Your Video Production Project"
              description="Get in touch to discuss your video production needs. From concept to delivery, let's create something amazing."
            />
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
