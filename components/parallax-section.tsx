'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

import { getVideoPosterUrl } from '@/lib/media'

interface ParallaxSectionProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  backgroundVideo?: string
  height?: string
  children?: React.ReactNode
}

export default function ParallaxSection({
  title,
  subtitle,
  backgroundImage = '/abstract-3d-creative-background.jpg',
  backgroundVideo,
  height = 'h-[500px]',
  children,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <div
      ref={ref}
      className={`relative w-full overflow-hidden ${height} flex items-center justify-center`}
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full overflow-hidden"
      >
        {backgroundVideo ? (
          <video
            src={backgroundVideo}
            poster={getVideoPosterUrl(backgroundVideo)}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
          />
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
              backgroundAttachment: 'fixed',
            }}
          />
        )}
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-white/80">{subtitle}</p>
          )}
        </motion.div>

        {children}
      </div>
    </div>
  )
}
