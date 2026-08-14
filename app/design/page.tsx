'use client'

import { motion } from 'framer-motion'
import Footer from '@/components/footer'
import ProjectGallery from '@/components/project-gallery'
import { ContactForm } from '@/components/contact-form'
import ParallaxSection from '@/components/parallax-section'

const designItems = [
  {
    id: '1',
    title: 'E-Commerce Platform Redesign',
    description: 'Modernizing user experience with cutting-edge design patterns. This redesign focused on improving conversion rates through intuitive navigation and visual hierarchy.',
    category: 'web',
    thumbnail: '/e-commerce-website-ui-design.jpg',
    fullImage: '/e-commerce-website-ui-design.jpg',
    type: 'image' as const,
  },
  {
    id: '2',
    title: 'Mobile App Experience',
    description: 'Intuitive mobile interfaces focused on user delight. Each interaction is carefully crafted to provide smooth navigation and engaging feedback.',
    category: 'mobile',
    thumbnail: '/mobile-app-ui-design-interface.jpg',
    fullImage: '/mobile-app-ui-design-interface.jpg',
    type: 'image' as const,
  },
  {
    id: '3',
    title: 'Design System',
    description: 'Comprehensive design system for enterprise applications. This system ensures consistency across products while maintaining flexibility for unique use cases.',
    category: 'systems',
    thumbnail: '/design-system-components.png',
    fullImage: '/design-system-components.png',
    type: 'image' as const,
  },
  {
    id: '4',
    title: 'SaaS Dashboard',
    description: 'Complex data visualization and dashboard design. Transforming data into actionable insights through thoughtful information architecture and visual clarity.',
    category: 'web',
    thumbnail: '/saas-dashboard-design.jpg',
    fullImage: '/saas-dashboard-design.jpg',
    type: 'image' as const,
  },
]

export default function DesignPage() {
  return (
    <main className="w-full">
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
              UX Design
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl">
              Human-centered design that solves real problems. Creating beautiful and functional digital experiences that users love.
            </p>
          </motion.div>

          {/* Parallax Section */}
          <ParallaxSection
            title="Featured Designs"
            subtitle="User experience and interface design"
            backgroundImage="/abstract-3d-creative-portfolio-background.jpg"
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
              items={designItems}
              title="Featured Projects"
              description="Explore my UX design portfolio spanning web apps, mobile interfaces, design systems, and data visualization."
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
              title="Discuss Your UX Design Project"
              description="Get in touch to discuss your design needs. Let's create intuitive, beautiful digital experiences together."
            />
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
