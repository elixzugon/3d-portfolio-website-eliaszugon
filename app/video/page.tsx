'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ProjectGallery from '@/components/project-gallery'
import { ContactForm } from '@/components/contact-form'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

const videoItems = [
  {
    id: '1',
    title: 'Invitantion to Cosmic Factory Openning | 2025',
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
    title: 'COMO CREÉ MI PROPIA MARCA YO SOLA | XIMENA ATEM.AT & ENOVAVINTAGE',
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
    title: 'En cada clínica, cada minuto cuenta',
    description: 'Corporate video highlighting critical care response times.',
    category: 'Corporate',
    thumbnail: 'https://img.youtube.com/vi/RgvoMzEnHng/hqdefault.jpg',
    fullImage: 'https://www.youtube.com/embed/RgvoMzEnHng',
    type: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/RgvoMzEnHng',
  },
  {
    id: '10',
    title: 'Emergencias Médicas Corporate Video',
    description: 'Corporate reel for Emergencias Médicas.',
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

function Fx3Model() {
  const { scene } = useGLTF('/models/fx3.glb')
  const group = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (group.current) {
      const t = clock.getElapsedTime()
      group.current.rotation.x = t * 0.12
      group.current.rotation.y = t * 0.18
      group.current.rotation.z = t * 0.08
    }
  })

  return <primitive ref={group} object={scene} position={[0, -0.5, 0]} scale={5.4} />
}

useGLTF.preload('/models/fx3.glb')

export default function VideoPage() {
  return (
    <main className="w-full">
      <Navigation />
      <div className="pt-16 pb-12 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Header over 3D background */}
          <div className="relative -mx-4 mb-12 h-[380px] overflow-hidden md:rounded-2xl bg-background">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[6, 8, 4]} intensity={1.4} />
              <Environment preset="studio" />
              <Fx3Model />
              <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
            </Canvas>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/85" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">
                  Video Production
                </h1>
                <p className="text-foreground/70 text-lg sm:text-xl">
                  Cinematic experiences from concept to post-production. Creating compelling video content that resonates with audiences.
                </p>
              </motion.div>
            </div>
          </div>

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
