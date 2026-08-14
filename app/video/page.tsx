'use client'

import { motion } from 'framer-motion'
import Footer from '@/components/footer'
import ProjectGallery from '@/components/project-gallery'
import { ContactForm } from '@/components/contact-form'
import ParallaxSection from '@/components/parallax-section'

const videoItems = [
  {
    id: '1',
    title: 'Invitation to Cosmic Factory Opening | 2025',
    description: 'A short reel inviting guests to the Cosmic Factory opening for 2025.',
    category: 'Reel',
    thumbnail: 'https://img.youtube.com/vi/I8PnM0DvWss/hqdefault.jpg',
    fullImage: 'https://www.youtube.com/embed/I8PnM0DvWss',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/I8PnM0DvWss',
  },
  {
    id: '2',
    title: 'Maxi Skirt Cosmic Review',
    description: 'Reel showcasing the Maxi Skirt review from Cosmic Factory.',
    category: 'Reel',
    thumbnail: 'https://img.youtube.com/vi/1WKcMlsob7E/hqdefault.jpg',
    fullImage: 'https://www.youtube.com/embed/1WKcMlsob7E',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/1WKcMlsob7E',
  },
  {
    id: '3',
    title: 'How to wear a Cosmic Outfit',
    description: 'Quick styling tips in a reel on wearing a Cosmic outfit.',
    category: 'Reel',
    thumbnail: 'https://img.youtube.com/vi/v9jbOChtcw0/hqdefault.jpg',
    fullImage: 'https://www.youtube.com/embed/v9jbOChtcw0',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/v9jbOChtcw0',
  },
  {
    id: '4',
    title: 'How I Built My Own Brand | Ximena Atem.at & Enovavintage',
    description: 'Podcast conversation on building a brand solo with Ximena Atem.at & Enovavintage.',
    category: 'Podcast',
    thumbnail: 'https://img.youtube.com/vi/Img-6ak6FPI/hqdefault.jpg',
    fullImage: 'https://www.youtube.com/embed/Img-6ak6FPI',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/Img-6ak6FPI',
  },
  {
    id: '5',
    title: 'Gosve Sessions EP.07',
    description: 'Live music session from Gosve Sessions.',
    category: 'Music Video',
    thumbnail: 'https://img.youtube.com/vi/d2mENSP-ZEc/hqdefault.jpg',
    fullImage: 'https://www.youtube.com/embed/d2mENSP-ZEc',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/d2mENSP-ZEc',
  },
  {
    id: '6',
    title: 'Cosmic Picnic Video',
    description: 'Reel capturing the Cosmic Picnic experience.',
    category: 'Reel',
    thumbnail: 'https://img.youtube.com/vi/1AtGj4UEkK4/hqdefault.jpg',
    fullImage: 'https://www.youtube.com/embed/1AtGj4UEkK4',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/1AtGj4UEkK4',
  },
  {
    id: '7',
    title: 'RMI | Liam Harrison Testimonial_',
    description: 'Reel testimonial from Liam Harrison for RMI.',
    category: 'Reel',
    thumbnail: 'https://img.youtube.com/vi/_IYH7tZiymY/hqdefault.jpg',
    fullImage: 'https://www.youtube.com/embed/_IYH7tZiymY',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/_IYH7tZiymY',
  },
  {
    id: '8',
    title: 'RMI | Regenerate your cartilage without surgery',
    description: 'Corporate explainer for RMI on non-surgical cartilage regeneration.',
    category: 'Corporate',
    thumbnail: 'https://img.youtube.com/vi/SAXRr3px_Ok/hqdefault.jpg',
    fullImage: 'https://www.youtube.com/embed/SAXRr3px_Ok',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/SAXRr3px_Ok',
  },
  {
    id: '9',
    title: 'Every Minute Counts in Every Clinic',
    description: 'Corporate video highlighting critical care response times.',
    category: 'Corporate',
    thumbnail: 'https://img.youtube.com/vi/RgvoMzEnHng/hqdefault.jpg',
    fullImage: 'https://www.youtube.com/embed/RgvoMzEnHng',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/RgvoMzEnHng',
  },
  {
    id: '10',
    title: 'Emergency Medical Services Corporate Video',
    description: 'Corporate reel for Emergency Medical Services.',
    category: 'Corporate',
    thumbnail: 'https://img.youtube.com/vi/1RKadV-nlAw/hqdefault.jpg',
    fullImage: 'https://www.youtube.com/embed/1RKadV-nlAw',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/1RKadV-nlAw',
  },
  {
    id: '11',
    title: 'RMI | Harmony Treatment',
    description: 'Corporate overview for RMI Harmony treatment.',
    category: 'Corporate',
    thumbnail: 'https://img.youtube.com/vi/J_X2a7AtM0I/hqdefault.jpg',
    fullImage: 'https://www.youtube.com/embed/J_X2a7AtM0I',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/J_X2a7AtM0I',
  },
  {
    id: '12',
    title: 'Grupo R&S Corporate Video',
    description: 'Corporate profile for Grupo R&S.',
    category: 'Corporate',
    thumbnail: 'https://img.youtube.com/vi/Uo8NAKzIXEA/hqdefault.jpg',
    fullImage: 'https://www.youtube.com/embed/Uo8NAKzIXEA',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/Uo8NAKzIXEA',
  },
]

export default function VideoPage() {
  return (
    <main className="w-full">
      <div className="pt-16 pb-12 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
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

          <ParallaxSection
            title="Cinematic Stories"
            subtitle="Reels, corporate videos, podcasts, and music sessions shaped for clear visual impact."
            backgroundImage="https://img.youtube.com/vi/I8PnM0DvWss/hqdefault.jpg"
            height="h-[350px]"
          />

          {/* Project Gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 mb-12"
          >
            <ProjectGallery
              items={videoItems}
              title="Featured Projects"
              description="Explore my video production portfolio featuring commercial work, product demos, motion graphics, and documentary content."
              enablePagination
              itemsPerPage={6}
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
