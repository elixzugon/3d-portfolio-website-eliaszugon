'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const projects3D = [
  {
    id: 1,
    title: '3D Fashion Design',
    description: 'Stunning digital fashion collections and wearable 3D designs with realistic materials and animations',
    category: 'Fashion Design',
    video: '/homepage-videos/blokecambionumeros.mp4',
    route: '/specializations/fashion',
  },
  {
    id: 2,
    title: '3D Animation For Brands',
    description: 'Professional brand animations, promotional videos, and animated storytelling for commercial use',
    category: 'Brand Animation',
    video: '/homepage-videos/loopluna.mp4',
    route: '/specializations/brand-animation',
  },
  {
    id: 3,
    title: 'Augmented Reality',
    description: 'Interactive AR experiences and immersive digital overlays for real-world environments',
    category: 'AR Experience',
    video: '/homepage-videos/fruitopiaAR.mp4',
    route: '/specializations/augmented-reality',
  },
  {
    id: 4,
    title: 'Product Animation',
    description: 'Dynamic product demonstrations and 3D visualization animations for e-commerce and marketing',
    category: 'Product Animation',
    video: '/homepage-videos/bodegalamp.mp4',
    route: '/specializations/product-animation',
  },
]

export default function ProjectGrid() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            3D Specializations
          </h2>
          <p className="text-foreground/60 text-lg">
            Exploring the intersection of creativity, technology, and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects3D.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={project.route}>
                <div className="relative overflow-hidden rounded-xl bg-muted border border-border hover:border-accent/50 transition-all duration-300">
                  {/* Image */}
{/* Media: video o imagen */}
<div className="relative w-full h-64 overflow-hidden">
  {project.video ? (
    <video
      src={project.video}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata" // no descarga todo de una vez
    />
  ) : (
    <img
      src={project.image || "/placeholder.svg"}
      alt={project.title}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
    />
  )}

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
</div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-foreground/60 text-sm line-clamp-2">
                      {project.description}
                    </p>

                    <div className="mt-4 inline-flex items-center text-accent text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Learn More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/projects"
            className="inline-block px-8 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
