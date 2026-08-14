'use client'

import { motion } from 'framer-motion'
import Footer from '@/components/footer'
import ProjectGallery from '@/components/project-gallery'
import { ContactForm } from '@/components/contact-form'
import ParallaxSection from '@/components/parallax-section'

const webDevItems = [
  {
    id: '1',
    title: 'Responsive Web Design',
    description: 'Modern responsive websites that work seamlessly across all devices. Built with performance optimization and user experience as core principles.',
    category: 'frontend',
    thumbnail: '/web-development-responsive-design.jpg',
    fullImage: '/web-development-responsive-design.jpg',
    type: 'image' as const,
  },
  {
    id: '2',
    title: 'Admin Dashboard',
    description: 'Complex data management dashboard with real-time updates. Features include analytics, user management, and custom reporting capabilities.',
    category: 'fullstack',
    thumbnail: '/web-development-dashboard.jpg',
    fullImage: '/web-development-dashboard.jpg',
    type: 'image' as const,
  },
  {
    id: '3',
    title: 'E-Commerce Platform',
    description: 'Full-featured e-commerce solution with payment integration. Including product catalog, shopping cart, user authentication, and order management.',
    category: 'fullstack',
    thumbnail: '/ecommerce-web-development.jpg',
    fullImage: '/ecommerce-web-development.jpg',
    type: 'image' as const,
  },
  {
    id: '4',
    title: 'Progressive Web App',
    description: 'PWA with offline functionality and native-like experience. Built with modern frameworks and optimized for performance and accessibility.',
    category: 'frontend',
    thumbnail: '/progressive-web-app-development.jpg',
    fullImage: '/progressive-web-app-development.jpg',
    type: 'image' as const,
  },
]

export default function WebDevelopmentPage() {
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
              Web Development
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl">
              Full-stack web solutions built for performance and scalability. From concept to deployment, creating web experiences that users love.
            </p>
          </motion.div>

          {/* Parallax Section */}
          <ParallaxSection
            title="Featured Web Projects"
            subtitle="Modern web development and full-stack solutions"
            backgroundImage="/dynamic-brand-motion-graphics-background.jpg"
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
              items={webDevItems}
              title="Featured Projects"
              description="Explore my web development portfolio featuring responsive sites, dashboards, e-commerce platforms, and progressive web apps."
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
              title="Start Your Web Development Project"
              description="Get in touch to discuss your web development needs. Let's build something incredible together."
            />
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
