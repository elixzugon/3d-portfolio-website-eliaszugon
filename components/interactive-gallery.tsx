'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { useIsMobile } from '@/hooks/use-mobile'

const galleryImages = [
  {
    id: 1,
    src: '/homepage-gallery-images/1.jpg',
    alt: '1',
    category: 'Fashion',
  },
  {
    id: 2,
    src: '/homepage-gallery-images/2.jpg',
    alt: '3D Fashion Design',
    category: 'Fashion',
  },
  {
    id: 3,
    src: '/homepage-gallery-images/3.jpg',
    alt: '3D Product Animation',
    category: 'Music Video',
  },
  {
    id: 4,
    src: '/homepage-gallery-images/4.jpg',
    alt: '3D AR Experience',
    category: 'Brands',
  },
  {
    id: 5,
    src: '/homepage-gallery-images/5.jpg',
    alt: '3D Brand Animation',
    category: 'Brands',
  },
  {
    id: 6,
    src: '/homepage-gallery-images/6.jpg',
    alt: '3D Creative Visual',
    category: 'Fashion',
  },
  {
    id: 7,
    src: '/homepage-gallery-images/7.jpg',
    alt: '3D Creative Visual',
    category: 'Fashion',
  },
    {
    id: 8,
    src: '/homepage-gallery-images/8.jpg',
    alt: '3D Creative Visual',
    category: 'AR',
  },
    {
    id: 9,
    src: '/homepage-gallery-images/9.jpg',
    alt: '3D Creative Visual',
    category: 'Fashion',
  },
    {
    id: 10,
    src: '/homepage-gallery-images/10.jpg',
    alt: '3D Creative Visual',
    category: 'AR',
  },
    {
    id: 11,
    src: '/homepage-gallery-images/11.jpg',
    alt: '3D Creative Visual',
    category: 'Music Video',
  },
    {
    id: 12,
    src: '/homepage-gallery-images/12.jpg',
    alt: '3D Creative Visual',
    category: 'Fashion',
  },
    {
    id: 13,
    src: '/homepage-gallery-images/13.jpg',
    alt: '3D Creative Visual',
    category: 'Fashion',
  },
    {
    id: 14,
    src: '/homepage-gallery-images/14.png',
    alt: '3D Creative Visual',
    category: 'Brands',
  },
    {
    id: 15,
    src: '/homepage-gallery-images/15.png',
    alt: '3D Creative Visual',
    category: 'Brands',
  },
    {
    id: 16,
    src: '/homepage-gallery-images/16.png',
    alt: '3D Creative Visual',
    category: 'Fashion',
  },
    {
    id: 17,
    src: '/homepage-gallery-images/17.png',
    alt: '3D Creative Visual',
    category: 'Product',
  },
    {
    id: 18,
    src: '/homepage-gallery-images/18.png',
    alt: '3D Creative Visual',
    category: 'Product',
  },
  
]

export default function InteractiveGallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>('All')
  const [currentPage, setCurrentPage] = useState(0)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const isMobile = useIsMobile()

  const categoryOrder = ['Fashion', 'Music Video', 'Brands', 'Products', 'AR'] as const
  const categories = ['All', ...categoryOrder.filter(cat => galleryImages.some(img => img.category === cat))]
  const filteredImages = filter === 'All' ? galleryImages : galleryImages.filter(img => img.category === filter)
  const imagesPerPage = isMobile ? 2 : 6
  const totalPages = Math.max(1, Math.ceil(filteredImages.length / imagesPerPage))

  useEffect(() => {
    setCurrentPage(0)
  }, [filter, imagesPerPage])

  useEffect(() => {
    setCurrentPage(prev => Math.min(prev, Math.max(0, totalPages - 1)))
  }, [totalPages])

  useEffect(() => {
    if (!isMobile) {
      setMobileFiltersOpen(false)
    }
  }, [isMobile])

  const handleFilterChange = (cat: string) => {
    setFilter(cat)
    if (isMobile) {
      setMobileFiltersOpen(false)
    }
  }

  const pageStart = currentPage * imagesPerPage
  const paginatedImages = filteredImages.slice(pageStart, pageStart + imagesPerPage)
  const handlePrev = () => setCurrentPage(prev => Math.max(prev - 1, 0))
  const handleNext = () => setCurrentPage(prev => Math.min(prev + 1, totalPages - 1))

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Explore a curated selection of 3D works, animations, and creative projects
          </p>
        </div>

        {/* Filter buttons */}
        <div className="mb-12 flex flex-col items-center">
          {isMobile ? (
            <div className="w-full max-w-sm">
              <button
                onClick={() => setMobileFiltersOpen(prev => !prev)}
                className={`w-full rounded-lg border px-4 py-2 font-medium transition-colors ${
                  mobileFiltersOpen
                    ? 'border-accent/70 bg-accent text-accent-foreground'
                    : 'border-border bg-muted text-foreground hover:text-foreground/80'
                }`}
              >
                Filter
              </button>
              <AnimatePresence>
                {mobileFiltersOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-3 overflow-hidden rounded-lg border border-border bg-background/60 p-3"
                  >
                    <div className="flex flex-wrap justify-center gap-3">
                      {categories.map(cat => (
                        <button
                          key={cat}
                          onClick={() => handleFilterChange(cat)}
                          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                            filter === cat
                              ? 'bg-accent text-accent-foreground'
                              : 'bg-muted border border-border text-foreground/70 hover:text-foreground'
                          }`}
                        >
                          {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleFilterChange(cat)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    filter === cat
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-muted border border-border text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Gallery grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {paginatedImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setSelectedId(image.id)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg h-56 bg-muted border border-border hover:border-accent/50 transition-all duration-300">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <p className="text-foreground/80 text-xs font-medium">{image.category}</p>
                      <p className="text-foreground text-sm font-semibold">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="px-4 py-2 rounded-lg border border-border bg-muted text-foreground/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:text-foreground"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage >= totalPages - 1}
              className="px-4 py-2 rounded-lg border border-border bg-muted text-foreground/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:text-foreground"
            >
              Next
            </button>
          </div>
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                aria-label={`Go to gallery page ${index + 1}`}
                className={`h-2 w-8 rounded-full transition-all ${
                  currentPage === index ? 'bg-accent' : 'bg-muted border border-border'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={e => e.stopPropagation()}
                className="relative max-w-4xl w-full"
              >
                <img
                  src={galleryImages.find(img => img.id === selectedId)?.src || "/placeholder.svg"}
                  alt="Gallery lightbox"
                  className="w-full rounded-lg"
                />
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-background/80 hover:bg-background text-foreground transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
