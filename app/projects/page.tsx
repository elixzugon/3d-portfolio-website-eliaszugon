'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { useEffect, useState } from 'react'
import { useIsMobile } from '@/hooks/use-mobile'

interface YouTubeProject {
  id: string
  title: string
  description: string
  youtubeId: string
  category: string
  date: string
}

const youtubeProjects: YouTubeProject[] = [
  {
    id: '1',
    title: 'Fruitopia Prelease Animation',
    description: 'Made this animation to announce the launching of Fruitopia Collection.',
    youtubeId: '1ND2z40c3sE',
    category: 'AR',
    date: '2025',
  },
  {
    id: '2',
    title: 'AR Animation | Showcasing Pixel Collection',
    description: 'AR project made to present Pixel Collection by Cosmic Factory.',
    youtubeId: '0LFeKu6IvNk',
    category: 'AR',
    date: '2024',
  },
  {
    id: '3',
    title: 'AR Animation | Cosmic Factory Funtasia Garment',
    description: 'Random AR animation made to remember a piece of the Funtasia Collection.',
    youtubeId: 'MFDj1mmzcb4',
    category: 'AR',
    date: '2024',
  },
  {
    id: '4',
    title: 'Cosmic Factory Funtasia Logo Animation',
    description: 'Cosmic Factory Logo loop animation made for CRFW.',
    youtubeId: '4pYLd2lOsE4',
    category: 'Brands',
    date: '2024',
  },
  {
    id: '5',
    title: 'Jaseth Hernández 3D Logo Animation',
    description: 'Created for the designer Jaseth Hernández, presented in his runway at Costa Rica Fashion Week 2025',
    youtubeId: 'yuEgmFrA1GU',
    category: 'Brands',
    date: '2025',
  },
  {
    id: '6',
    title: 'Brite Boy Thrift Shop Logo Animation',
    description: 'Animated the Brite Boy logo made by Mariana Aragón.',
    youtubeId: 'j2g3txq_xGk',
    category: 'Brands',
    date: '2025',
  },
  {
    id: '7',
    title: 'Fruitopia Market Cosmic Factory',
    description: 'A Cosmic Factory Collection.',
    youtubeId: 'IUqh41Bs-nw',
    category: 'Fashion',
    date: '2024-07',
  },
  {
    id: '8',
    title: 'Little Shop of Horrors X Cosmic Factory',
    description: 'Animation created to promote the Cosmic Factory collaboration with Oak Productions for their theatre production of Little Shop of Horrors.',
    youtubeId: 'gca7KZo1OyU',
    category: 'Brands',
    date: '2025',
  },
  {
    id: '9',
    title: 'Funtasia Collection Digital Runway',
    description: 'Cosmic Factory presented a Digital Runway Collection at the Costa Rica Fashion Week 2024, were they rocked with the first Digital Runway ever presented in the country.',
    youtubeId: '_BE3mULdawo',
    category: 'Fashion',
    date: '2025',
  },
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [filteredProjects, setFilteredProjects] = useState<YouTubeProject[]>(youtubeProjects)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [columns, setColumns] = useState(1)
  const isMobile = useIsMobile()
  const rowsPerPage = 2

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(youtubeProjects)
    } else {
      setFilteredProjects(youtubeProjects.filter(p => p.category === selectedCategory))
    }
  }, [selectedCategory])

  const categories = ['all', ...new Set(youtubeProjects.map(p => p.category))]

  useEffect(() => {
    if (!isMobile) {
      setMobileFiltersOpen(false)
    }
  }, [isMobile])

  useEffect(() => {
    const calculateColumns = () => {
      if (typeof window === 'undefined') return 1
      if (window.innerWidth >= 1024) return 3
      if (window.innerWidth >= 768) return 2
      return 1
    }

    const updateColumns = () => setColumns(calculateColumns())
    updateColumns()
    window.addEventListener('resize', updateColumns)
    return () => window.removeEventListener('resize', updateColumns)
  }, [])

  const cardsPerPage = rowsPerPage * columns

  useEffect(() => {
    setCurrentPage(0)
  }, [selectedCategory, cardsPerPage])

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / cardsPerPage))

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat)
    if (isMobile) {
      setMobileFiltersOpen(false)
    }
  }

  useEffect(() => {
    setCurrentPage(prev => Math.min(prev, Math.max(0, totalPages - 1)))
  }, [totalPages])

  const pageStart = currentPage * cardsPerPage
  const paginatedProjects = filteredProjects.slice(pageStart, pageStart + cardsPerPage)
  const handlePrevPage = () => setCurrentPage(prev => Math.max(prev - 1, 0))
  const handleNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages - 1))

  return (
    <main className="w-full">
      <Navigation />
      <div className="pt-20 pb-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">
                All Projects
              </h1>
              <p className="text-foreground/60 text-lg max-w-2xl">
                A comprehensive collection of 3D animations and creative projects uploaded to YouTube. Explore my work across different categories and styles.
              </p>
            </motion.div>
          </div>

          {/* Filter buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12 flex flex-col items-center"
          >
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
                            onClick={() => handleCategoryChange(cat)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                              selectedCategory === cat
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
              <div className="flex flex-wrap gap-3">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === cat
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-muted border border-border text-foreground/70 hover:text-foreground'
                    }`}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Videos Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {paginatedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group flex flex-col"
              >
                <div className="relative overflow-hidden rounded-xl bg-muted border border-border hover:border-accent/50 transition-all duration-300 flex-1">
                  {/* YouTube Embed */}
                  <div
                    className="relative w-full overflow-hidden rounded-t-xl bg-black"
                    style={{ paddingBottom: '51.75%' }}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${project.youtubeId}`}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 mb-3 rounded-full bg-accent/20 text-accent text-xs font-medium">
                      {project.category}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-foreground/60 text-sm line-clamp-2 mb-3">
                      {project.description}
                    </p>
                    <p className="text-foreground/40 text-xs">
                      {new Date(project.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className="px-4 py-2 rounded-lg border border-border bg-muted text-foreground/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:text-foreground"
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
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
                  aria-label={`Go to page ${index + 1}`}
                  className={`h-2 w-8 rounded-full transition-all ${
                    currentPage === index ? 'bg-accent' : 'bg-muted border border-border'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}


