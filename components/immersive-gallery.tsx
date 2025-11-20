'use client'

import { useEffect, useMemo, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { AnimatePresence, motion } from 'framer-motion'
import { Environment, Html, OrbitControls, useGLTF } from '@react-three/drei'

import { useIsMobile } from '@/hooks/use-mobile'

type SceneModelType =
  | 'ramen'
  | 'crfw13'
  | 'rosauravestido'
  | 'sombreroflorfuntasia'
  | 'lechuga'
  | 'crfw16'
  | 'pomodoro'
  | 'jasethpuffer2'

interface ImmersiveScene {
  id: string
  title: string
  description: string
  category: string
  modelType: SceneModelType
  accent: string
}

const immersiveScenes: ImmersiveScene[] = [
  {
    id: 'ramen',
    title: 'Ramen Combo Set',
    description: 'A Fruitopia Collection set for Cosmic Factory',
    category: 'Fruitopia',
    modelType: 'ramen',
    accent: '#22d3ee',
  },
  {
    id: 'crfw13',
    title: 'Florévia del Infinito',
    description: 'Special dress made for Costa Rica Fashion Week 2024 Runway by Cosmic Factory',
    category: 'Funtasia',
    modelType: 'crfw13',
    accent: '#a855f7',
  },
  {
    id: 'rosauravestido',
    title: 'Rosaura Dress',
    description: 'Dress from a Cosmic Factory flash collection',
    category: 'Flashes',
    modelType: 'rosauravestido',
    accent: '#f43f5e',
  },
  {
    id: 'sombreroflorfuntasia',
    title: 'Alien Flower Hat',
    description: 'An extraordinary hat made for Costa Rica Fashion Week 2024 Runway by Cosmic Factory',
    category: 'Funtasia',
    modelType: 'sombreroflorfuntasia',
    accent: '#22c55e',
  },
  {
    id: 'lechuga',
    title: 'Lechuga Dress',
    description: 'A Fruitopia Collection dress for Cosmic Factory',
    category: 'Fruitopia',
    modelType: 'lechuga',
    accent: '#84cc16',
  },
  {
    id: 'crfw16',
    title: 'Burbuja Obsidiana',
    description: 'Special set made for Costa Rica Fashion Week 2024 Runway by Cosmic Factory',
    category: 'Funtasia',
    modelType: 'crfw16',
    accent: '#0ea5e9',
  },
  {
    id: 'pomodoro',
    title: 'Pomodoro Dress',
    description: 'A Fruitopia Collection dress for Cosmic Factory',
    category: 'Fruitopia',
    modelType: 'pomodoro',
    accent: '#f97316',
  },
  {
    id: 'jasethpuffer2',
    title: 'JH Puffer Jacket 2 | DTMF',
    description: 'A design made by Jaseth Hernández and 3D modeled by me',
    category: 'DTMF',
    modelType: 'jasethpuffer2',
    accent: '#c084fc',
  },
]

const MODEL_CONFIG: Record<SceneModelType, { url: string; position: [number, number, number]; scale: number }> = {
  ramen: { url: '/models/blokejortsramencombo.glb', position: [0, 0, 0], scale: 3 },
  crfw13: { url: '/models/crfw13.glb', position: [0, 0, 0], scale: 3 },
  rosauravestido: { url: '/models/rosauravestido.glb', position: [0, 0, 0], scale: 3 },
  sombreroflorfuntasia: { url: '/models/sombreroflorfuntasia.glb', position: [0, 0, 0], scale: 3 },
  lechuga: { url: '/models/vestidolechuga.glb', position: [0, 0, 0], scale: 3 },
  crfw16: { url: '/models/crfw16.glb', position: [0, 0, 0], scale: 3 },
  pomodoro: { url: '/models/vestidopomodoro.glb', position: [0, 0, 0], scale: 3 },
  jasethpuffer2: { url: '/models/jasethpuffer2.glb', position: [0, 0, 0], scale: 3 },
}

Object.values(MODEL_CONFIG).forEach(config => {
  if (config.url) useGLTF.preload(config.url)
})

function SceneModel({ type }: { type: SceneModelType }) {
  const config = MODEL_CONFIG[type]
  const { scene } = useGLTF(config.url)
  return <primitive object={scene} position={config.position} scale={config.scale} />
}

export default function ImmersiveGallery() {
  const [filter, setFilter] = useState<'All' | ImmersiveScene['category']>('All')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [fullscreenScene, setFullscreenScene] = useState<ImmersiveScene | null>(null)
  const isMobile = useIsMobile()

  const categories = useMemo(
    () => ['All', ...new Set(immersiveScenes.map(scene => scene.category))],
    []
  )
  const filteredScenes =
    filter === 'All' ? immersiveScenes : immersiveScenes.filter(scene => scene.category === filter)

  const scenesPerPage = isMobile ? 1 : 2
  const totalPages = Math.max(1, Math.ceil(filteredScenes.length / scenesPerPage))
  const pageStart = currentPage * scenesPerPage
  const paginatedScenes = filteredScenes.slice(pageStart, pageStart + scenesPerPage)

  useEffect(() => {
    if (!isMobile) {
      setMobileFiltersOpen(false)
    }
  }, [isMobile])

  useEffect(() => {
    setCurrentPage(0)
  }, [filter, scenesPerPage])

  useEffect(() => {
    setCurrentPage(prev => Math.min(prev, Math.max(0, totalPages - 1)))
  }, [totalPages])

  const handleFilterChange = (category: typeof filter) => {
    setFilter(category)
    if (isMobile) {
      setMobileFiltersOpen(false)
    }
  }

  const handlePrev = () => setCurrentPage(prev => Math.max(prev - 1, 0))
  const handleNext = () => setCurrentPage(prev => Math.min(prev + 1, totalPages - 1))

  return (
    <section className="py-16">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-foreground/50">Immersive Gallery</p>
        <h2 className="mb-4 text-4xl font-bold text-foreground">Interactive Garment Scenes</h2>
        <p className="text-foreground/60">
          Explore five hero garments across Cosmic Factory universes. Each scene is powered by live 3D so you can
          rotate, zoom, and observe material stories in depth.
        </p>
      </div>

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
                        onClick={() => handleFilterChange(cat as typeof filter)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                          filter === cat
                            ? 'bg-accent text-accent-foreground'
                            : 'bg-muted border border-border text-foreground/70 hover:text-foreground'
                        }`}
                      >
                        {cat}
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
                onClick={() => handleFilterChange(cat as typeof filter)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === cat
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-muted border border-border text-foreground/70 hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {paginatedScenes.map(scene => (
          <motion.div
            key={scene.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-border bg-muted/40"
          >
            <div className="relative h-80 bg-background/60">
              <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color={scene.accent} />
                <pointLight position={[-10, -5, -5]} intensity={0.8} color="#ffffff" />
                <Environment preset="studio" />
                <SceneModel type={scene.modelType} />
                <OrbitControls enablePan={false} enableZoom enableRotate autoRotate autoRotateSpeed={1.2} />
                <Html position={[0, -2.6, 0]} distanceFactor={2} center>
                  <p className="pointer-events-none select-none text-xs text-foreground/50">
                    Drag to rotate — scroll to zoom
                  </p>
                </Html>
              </Canvas>
              <button
                onClick={() => setFullscreenScene(scene)}
                className="absolute top-4 right-4 rounded-lg border border-border bg-background/80 px-3 py-1 text-sm font-medium text-foreground transition-colors hover:bg-background"
              >
                Full screen
              </button>
            </div>
            <div className="p-6">
              <span
                className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold"
                style={{ backgroundColor: `${scene.accent}20`, color: scene.accent }}
              >
                {scene.category}
              </span>
              <h3 className="mb-2 text-2xl font-semibold text-foreground">{scene.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/60">{scene.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

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
              aria-label={`Go to immersive gallery page ${index + 1}`}
              className={`h-2 w-8 rounded-full transition-all ${
                currentPage === index ? 'bg-accent' : 'bg-muted border border-border'
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {fullscreenScene && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreenScene(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={event => event.stopPropagation()}
              className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-border bg-muted/60"
            >
              <button
                onClick={() => setFullscreenScene(null)}
                className="absolute top-4 right-4 z-10 rounded-lg border border-border bg-background/80 px-3 py-1 text-sm font-medium text-foreground transition-colors hover:bg-background"
              >
                Close
              </button>
              <div className="h-[70vh] min-h-[400px] bg-background">
                <Canvas camera={{ position: [0, 0, 6], fov: 38 }}>
                  <ambientLight intensity={0.6} />
                  <pointLight position={[10, 10, 10]} intensity={1.8} color={fullscreenScene.accent} />
                  <pointLight position={[-15, -10, -5]} intensity={0.8} color="#ffffff" />
                  <Environment preset="apartment" />
                  <SceneModel type={fullscreenScene.modelType} />
                  <OrbitControls enablePan={false} enableZoom enableRotate autoRotate autoRotateSpeed={1} />
                  <Html position={[0, -2.8, 0]} distanceFactor={2} center>
                    <p className="pointer-events-none select-none text-xs text-foreground/50">
                      Drag to rotate — scroll to zoom
                    </p>
                  </Html>
                </Canvas>
              </div>
              <div className="grid gap-3 p-6 text-center">
                <span
                  className="mx-auto inline-block rounded-full px-4 py-1 text-xs font-semibold"
                  style={{ backgroundColor: `${fullscreenScene.accent}20`, color: fullscreenScene.accent }}
                >
                  {fullscreenScene.category}
                </span>
                <h3 className="text-3xl font-bold text-foreground">{fullscreenScene.title}</h3>
                <p className="text-base leading-relaxed text-foreground/70">{fullscreenScene.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
