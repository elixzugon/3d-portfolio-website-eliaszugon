'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ContactForm } from '@/components/contact-form'

export default function AboutPage() {
  const skills = [
    { category: '3D Software', items: ['Blender', 'Cinema 4D', 'Substance 3D', 'ZBrush'] },
    { category: 'Design Tools', items: ['Figma', 'Adobe Creative Suite', 'Sketch', 'UI Kit'] },
    { category: 'Web Technologies', items: ['React', 'Next.js', 'TypeScript', 'Three.js'] },
    { category: 'Video/Animation', items: ['After Effects', 'Premiere Pro', 'DaVinci Resolve', 'Motion'] },
  ]

  const experience = [
    {
      role: 'Creative Director',
      company: 'Creative Studio',
      period: '2022 - Present',
      description: 'Leading creative projects and mentoring a team of designers and developers.',
    },
    {
      role: '3D Designer & Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Specialized in 3D animation, web design, and interactive experiences.',
    },
    {
      role: 'Freelance Creator',
      company: 'Self-Employed',
      period: '2018 - 2020',
      description: 'Building a diverse portfolio across multiple creative disciplines.',
    },
  ]

  return (
    <main className="w-full">
      <Navigation />
      <div className="pt-16 pb-12 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">
              About Me
            </h1>
            <p className="text-foreground/60 text-lg leading-relaxed max-w-3xl">
              I'm a creative professional passionate about bringing ideas to life through design and technology. 
              With expertise spanning 3D design, web development, video production, and graphic design, I create 
              immersive digital experiences that captivate and engage audiences.
            </p>
          </motion.div>

          {/* Story Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16 pt-12 border-t border-border"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">My Story</h2>
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                My journey in creative design began with a passion for visual storytelling and a desire to push 
                the boundaries of digital creativity. Over the years, I've developed expertise across multiple 
                disciplines, allowing me to approach projects from unique perspectives.
              </p>
              <p>
                I believe that great design is not just about aesthetics, but about solving problems and creating 
                meaningful experiences. Each project is an opportunity to explore new possibilities and deliver 
                solutions that exceed expectations.
              </p>
              <p>
                When I'm not creating, you can find me exploring new technologies, attending design conferences, 
                or collaborating with fellow creators on innovative projects.
              </p>
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16 pt-12 border-t border-border"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-6 rounded-lg bg-muted border border-border"
                >
                  <h3 className="text-lg font-bold text-accent mb-4">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((item) => (
                      <li key={item} className="text-foreground/70 flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16 pt-12 border-t border-border"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8">Experience</h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="border-l-2 border-accent pl-6"
                >
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-accent font-medium">{exp.company}</p>
                  <p className="text-foreground/60 text-sm mb-2">{exp.period}</p>
                  <p className="text-foreground/70">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact CTA */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-4 pt-12 border-t border-border"
          >
            <ContactForm
              title="Let's Work Together"
              description="I'm always excited about new projects and collaborations. Get in touch to discuss how we can create something amazing together."
            />
          </motion.section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
