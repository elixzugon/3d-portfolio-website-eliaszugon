'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Camera, Heart, Sparkles, Video } from 'lucide-react'
import Footer from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import ParallaxSection from '@/components/parallax-section'
import { useIsMobile } from '@/hooks/use-mobile'

const heroSlides = [
  {
    id: 'pic10',
    image: '/photography/pic10.jpg',
    title: 'Stories captured in motion.',
    subtitle: 'Editorial, lifestyle, and fashion narratives with cinematic lighting.',
  },
  {
    id: 'pic13',
    image: '/photography/pic13.jpg',
    title: 'Elegance in every frame.',
    subtitle: 'Clean compositions that spotlight personality and form.',
  },
  {
    id: 'pic14',
    image: '/photography/pic14.jpg',
    title: 'Light, texture, and emotion.',
    subtitle: 'Crafting atmosphere with color, contrast, and depth.',
  },
  {
    id: 'pic2',
    image: '/photography/pic2.jpg',
    title: 'Poise and silhouette.',
    subtitle: 'Expressive posing with sculpted light and movement.',
  },
  {
    id: 'pic6',
    image: '/photography/pic6.jpg',
    title: 'Minimal, magnetic gaze.',
    subtitle: 'Clean portraits with attention to gesture and detail.',
  },
]

const services = [
  {
    title: 'Wedding Session',
    description: 'Editorial storytelling for modern couples, capturing genuine moments with refined lighting.',
    icon: Heart,
  },
  {
    title: 'Studio Shooting',
    description: 'Controlled lighting setups for portraiture, fashion campaigns, and product hero shots.',
    icon: Camera,
  },
  {
    title: 'Product Shoot',
    description: 'Clean, tactile visuals designed to showcase materials, finishes, and craft.',
    icon: Sparkles,
  },
  {
    title: 'Video Shooting',
    description: 'Short-form fashion films and motion portraits with smooth camera movement.',
    icon: Video,
  },
]

const galleryShots = [
  { id: 'pic2', image: '/photography/pic2.jpg', label: 'Editorial look' },
  { id: 'pic3', image: '/photography/pic3.jpg', label: 'Beauty portrait' },
  { id: 'pic4', image: '/photography/pic4.jpg', label: 'Studio light study' },
  { id: 'pic5', image: '/photography/pic5.jpg', label: 'Dance motion' },
  { id: 'pic6', image: '/photography/pic6.jpg', label: 'Minimal portrait' },
  { id: 'pic7', image: '/photography/pic7.jpg', label: 'Editorial duo' },
  { id: 'pic8', image: '/photography/pic8.jpg', label: 'Conceptual pose' },
  { id: 'pic9', image: '/photography/pic9.jpg', label: 'Runway energy' },
  { id: 'pic11', image: '/photography/pic11.jpg', label: 'Texture study' },
  { id: 'pic12', image: '/photography/pic12.jpg', label: 'Lens flare play' },
  { id: 'pic15', image: '/photography/pic15.jpg', label: 'Backlit profile' },
]

export default function PhotographyPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedShot, setSelectedShot] = useState<string | null>(null)
  const [galleryPage, setGalleryPage] = useState(0)
  const isMobile = useIsMobile()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    setGalleryPage(0)
  }, [isMobile])

  const activeSlide = heroSlides[currentSlide]
  const galleryItemsPerPage = isMobile ? 4 : 8
  const totalGalleryPages = Math.max(1, Math.ceil(galleryShots.length / galleryItemsPerPage))
  const visibleShots = galleryShots.slice(
    galleryPage * galleryItemsPerPage,
    galleryPage * galleryItemsPerPage + galleryItemsPerPage
  )

  return (
    <main className="w-full bg-background text-foreground">

      {/* Hero Slideshow */}
      <section className="relative isolate overflow-hidden min-h-[460px] lg:min-h-[640px]">
        <div className="absolute inset-0">
          <AnimatePresence initial={false} mode="wait">
            {heroSlides.map(
              slide =>
                slide.id === activeSlide.id && (
                  <motion.div
                    key={slide.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        <div className="absolute inset-0 z-10 flex items-end">
          <div className="w-full max-w-6xl mx-auto px-4 lg:px-8 flex flex-col items-start gap-4 pb-4 sm:pb-8 lg:pb-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70 backdrop-blur-sm"
            >
              Photography
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)]"
            >
              {activeSlide.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 text-black font-semibold transition hover:-translate-y-0.5 hover:bg-white"
              >
                Book a session
                <ArrowRight className="h-4 w-4" />
              </a>
              <div className="flex items-center gap-2">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 w-10 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story + Services */}
      <section className="px-4 lg:px-8 py-14 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.1fr,1fr] gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-card/60 p-8"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-foreground/60 mb-3">
              I tell the story of the moment
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              A blend of cinematic light, rhythm, and form.
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              From intimate portraits to bold editorial campaigns, each shoot is designed
              to feel immersive and intentional. I work with art direction, wardrobe, and
              movement to capture scenes that feel alive, timeless, and ready for the next
              chapter.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {services.map(service => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  whileHover={{ y: -4, translateZ: 0 }}
                  className="rounded-xl border border-border bg-muted/40 p-5 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-full bg-accent/10 p-2">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Parallax Section */}
      <ParallaxSection
        title="Featured Photography"
        subtitle="Explore visual stories captured through the lens"
        backgroundImage="/photography/pic1.jpg"
        height="h-[350px]"
      />

      {/* Gallery */}
      <section className="px-2 sm:px-4 lg:px-6 py-14 bg-background">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 px-2 sm:px-0">
            <div>
              <h3 className="text-3xl font-bold text-foreground">Selected works</h3>
              <p className="text-foreground/60 mt-2">
                Hover to explore. Click to open full view.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:opacity-80"
            >
              Book a shoot
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {visibleShots.map(shot => (
              <motion.button
                key={shot.id}
                onClick={() => setSelectedShot(shot.image)}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-muted/30"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={shot.image}
                    alt={shot.label}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <p className="text-sm uppercase tracking-wide text-white/70">Series</p>
                    <p className="text-lg font-semibold">{shot.label}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 opacity-0 transition group-hover:opacity-100" />
                </div>
              </motion.button>
            ))}
          </div>

          {totalGalleryPages > 1 && (
            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setGalleryPage(prev => Math.max(prev - 1, 0))}
                  disabled={galleryPage === 0}
                  className="px-4 py-2 rounded-full border border-border bg-muted text-foreground/80 transition disabled:opacity-50 disabled:cursor-not-allowed hover:text-foreground"
                >
                  Previous
                </button>
                <button
                  onClick={() => setGalleryPage(prev => Math.min(prev + 1, totalGalleryPages - 1))}
                  disabled={galleryPage >= totalGalleryPages - 1}
                  className="px-4 py-2 rounded-full border border-border bg-muted text-foreground/80 transition disabled:opacity-50 disabled:cursor-not-allowed hover:text-foreground"
                >
                  Next
                </button>
              </div>
              <div className="flex items-center gap-2">
                {Array.from({ length: totalGalleryPages }).map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    onClick={() => setGalleryPage(index)}
                    className={`h-2 w-8 rounded-full transition-all ${
                      galleryPage === index ? 'bg-accent' : 'bg-muted border border-border'
                    }`}
                    aria-label={`Go to gallery page ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedShot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedShot(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-border bg-background"
              onClick={event => event.stopPropagation()}
            >
              <button
                onClick={() => setSelectedShot(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/60 px-3 py-1 text-sm text-white transition hover:bg-black/80"
              >
                Close
              </button>
              <img
                src={selectedShot}
                alt="Featured work"
                className="w-full h-full max-h-[92vh] max-w-[96vw] object-contain bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form */}
      <section id="contact" className="px-4 lg:px-8 pb-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <ContactForm
            title="Book a Photography Session"
            description="Share your vision, mood, and timeline, and let's craft imagery that resonates."
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
