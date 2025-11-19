'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

import { useIsMobile } from '@/hooks/use-mobile'

interface GalleryItem {
  id: string
  title: string
  description: string
  category: string
  thumbnail: string
  fullImage: string
  type: 'image' | 'video'
  videoUrl?: string
}

interface ProjectGalleryProps {
  items: GalleryItem[]
  title?: string
  description?: string
  disableFilters?: boolean
  enablePagination?: boolean
  itemsPerPage?: number
  hideCategoryBadge?: boolean
}

export default function ProjectGallery({
  items,
  title,
  description,
  disableFilters,
  enablePagination,
  itemsPerPage,
  hideCategoryBadge,
}: ProjectGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [filter, setFilter] = useState<string>('all')
  const [currentPage, setCurrentPage] = useState(0)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const isMobile = useIsMobile()

  const categories = useMemo(() => {
    const availableCategories = items
      .map(item => item.category)
      .filter((category): category is string => Boolean(category))
    return ['all', ...new Set(availableCategories)]
  }, [items])
  const showFilters = !disableFilters && categories.length > 1
  const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter)

  const baseItemsPerPage = Math.max(1, itemsPerPage ?? (isMobile ? 2 : 6))
  const shouldPaginate = !!enablePagination && filteredItems.length > baseItemsPerPage
  const resolvedItemsPerPage = shouldPaginate ? baseItemsPerPage : filteredItems.length || 1
  const totalPages = shouldPaginate ? Math.ceil(filteredItems.length / resolvedItemsPerPage) : 1

  useEffect(() => {
    if (!isMobile) {
      setMobileFiltersOpen(false)
    }
  }, [isMobile])

  useEffect(() => {
    setCurrentPage(0)
  }, [filter, resolvedItemsPerPage, shouldPaginate])

  useEffect(() => {
    setCurrentPage(prev => Math.min(prev, Math.max(0, totalPages - 1)))
  }, [totalPages])

  const pageStart = currentPage * resolvedItemsPerPage
  const paginatedItems = shouldPaginate
    ? filteredItems.slice(pageStart, pageStart + resolvedItemsPerPage)
    : filteredItems

  const handlePrev = () => setCurrentPage(prev => Math.max(prev - 1, 0))
  const handleNext = () => setCurrentPage(prev => Math.min(prev + 1, totalPages - 1))

  return (
    <div className="w-full py-12">
      {title && (
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">{title}</h2>
          {description && <p className="text-foreground/60 text-lg max-w-2xl">{description}</p>}
        </div>
      )}

      {showFilters && (
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
                      {categories.map(category => (
                        <button
                          key={category}
                          onClick={() => {
                            setFilter(category)
                            setMobileFiltersOpen(false)
                          }}
                          className={`px-4 py-2 rounded-lg font-medium transition-all capitalize ${
                            filter === category
                              ? 'bg-accent text-accent-foreground'
                              : 'bg-muted border border-border text-foreground/70 hover:text-foreground'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all capitalize ${
                    filter === category
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-muted border border-border text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {paginatedItems.map(item => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg bg-muted aspect-video">
                <motion.img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors group-hover:bg-black/50">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    {!hideCategoryBadge && item.category && (
                      <p className="text-sm text-white/80 capitalize">{item.category}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

  {shouldPaginate && (
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="px-4 py-2 rounded-lg border border-border bg-muted text-foreground/80 transition-colors disabled:cursor-not-allowed disabled:opacity-50 hover:text-foreground"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage >= totalPages - 1}
              className="px-4 py-2 rounded-lg border border-border bg-muted text-foreground/80 transition-colors disabled:cursor-not-allowed disabled:opacity-50 hover:text-foreground"
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
      )}

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={event => event.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-lg bg-card"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 rounded-lg bg-background/80 p-2 transition-colors hover:bg-background"
              >
                <X className="h-6 w-6 text-foreground" />
              </button>
              <div className="aspect-video bg-background">
                {selectedItem.type === 'video' && selectedItem.videoUrl ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={selectedItem.videoUrl}
                    title={selectedItem.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={selectedItem.fullImage || '/placeholder.svg'}
                    alt={selectedItem.title}
                    className="h-full w-full object-contain"
                  />
                )}
              </div>
              <div className="bg-card p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{selectedItem.title}</h3>
                {!hideCategoryBadge && (
                  <p className="mb-4 text-foreground/60 capitalize">{selectedItem.category}</p>
                )}
                <p className="text-base leading-relaxed text-foreground">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
