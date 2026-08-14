'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/footer'
import { ContactForm } from '@/components/contact-form'

const headlineStats = [
  { label: 'Years crafting visuals', value: '10+' },
  { label: 'Roles blended', value: 'Video - 3D - Motion Graphics - UX Design - Web Development' },
  { label: 'Based in', value: 'San Jose, Costa Rica' },
]

const competencies = [
  'CGI & 3D animation',
  'Motion graphics & visual storytelling',
  'Entrepreneurial mindset',
  'Cross-disciplinary collaboration',
  'Bilingual communication',
  'Project delivery under deadlines',
  'Adaptability & innovation trends',
  'Creative problem-solving',
]

const tools = [
  { title: 'Editing & Post', items: ['Premiere Pro', 'DaVinci Resolve', 'Lightroom', 'Audition'] },
  { title: 'Motion & Design', items: ['After Effects', 'Illustrator', 'Photoshop', 'Figma'] },
  { title: '3D & Interactive', items: ['Blender', 'Clo3D', 'Unreal Engine'] },
  { title: 'Tech & Ops', items: ['Asana', 'Jira', 'Office365'] },
]

const experience = [
  {
    role: 'Video Specialist & Motion Designer',
    company: 'RMI Health',
    period: '2024 - 2025',
    bullets: [
      'Produced testimonial, educational, and commercial video content to drive engagement.',
      'Crafted marketing-ready visuals that improved sales and commerce communication.',
    ],
  },
  {
    role: 'Multimedia Designer | Video Editor',
    company: 'Wagner & Carter',
    period: '2023 - 2024',
    bullets: [
      'Shot and edited multimedia content for clients across diverse industries.',
      'Designed assets and landing experiences supporting digital campaigns.',
    ],
  },
  {
    role: 'Co-Founder | 3D Fashion & CGI Designer',
    company: 'Cosmic Factory',
    period: '2020 - Present',
    bullets: [
      'Designed 3D garments and digital fashion collections with technical precision and creative direction.',
      'Built immersive runway experiences including Costa Rica Fashion Week "Funtasia - Digital Runway".',
    ],
  },
  {
    role: 'Video Specialist | 3D & Motion Designer | Multimedia Creator',
    company: 'Freelance',
    period: '2015 - Present',
    bullets: [
      'Developed AR visuals, 3D animation, and motion graphics for activations and campaigns.',
      'Delivered branding, web solutions, and multimedia content across industries.',
    ],
  },
]

const education = [
  {
    degree: 'Licentiate in Informatics & Multimedia Technology (UX emphasis)',
    place: 'University of Costa Rica',
    period: 'In progress',
  },
  {
    degree: 'BA in Informatics & Multimedia Technology',
    place: 'University of Costa Rica',
    period: '2024',
  },
]

const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'Advanced' },
]

export default function AboutPage() {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    experience: false,
    education: false,
    languages: false,
    tools: false,
    competencies: false,
  })

  const toggleSection = (key: string) => {
    setOpenSections(prev => {
      const isOpen = prev[key]
      const nextState = Object.keys(prev).reduce(
        (acc, current) => ({ ...acc, [current]: current === key ? !isOpen : false }),
        {} as Record<string, boolean>
      )

      if (!isOpen) {
        requestAnimationFrame(() => {
          sectionRefs.current[key]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      }

      return nextState
    })
  }

  const renderToolBadge = (name: string) => {
    const initials = name
      .split(' ')
      .map(part => part[0])
      .join('')
      .slice(0, 3)
      .toUpperCase()

    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/25 px-3 py-1 text-xs text-white">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-[11px] font-semibold text-white">
          {initials}
        </span>
        {name}
      </span>
    )
  }

  return (
    <main className="w-full bg-background text-foreground">
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-black/40">
        <div className="relative max-w-6xl mx-auto px-4 lg:px-8 pt-14 pb-12 lg:pb-20">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-md drop-shadow-2xl"
            >
              <div className="relative overflow-hidden rounded-[24px] border border-white/15 bg-white/5 backdrop-blur-sm shadow-xl">
                <img
                  src="/aboutme/yo.jpg"
                  alt="Elias Zuniga"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent lg:hidden" />
                <div className="absolute inset-0 flex items-end lg:hidden p-5">
                  <div className="space-y-3 text-white">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[11px] uppercase tracking-[0.25em] backdrop-blur">
                      About Me
                    </div>
                    <h1 className="text-3xl font-bold leading-tight">Elias Zuniga Gonzalez</h1>
                    <p className="text-sm text-white/85">
                      Video Specialist, 3D Animator, and Motion Designer crafting immersive visual stories that merge CGI,
                      motion graphics, and interactive media.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="mailto:elias.zuniga.bils@gmail.com"
                        className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-semibold hover:-translate-y-0.5 transition"
                      >
                        Get in touch
                      </a>
                      <a
                        href="https://www.eliaszugon.com"
                        className="inline-flex items-center gap-2 rounded-full border border-white/50 px-4 py-2 text-sm text-white/90 hover:border-white hover:text-white transition"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View portfolio
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="hidden lg:block flex-1 space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/80 backdrop-blur">
                About Me
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
                Elias Zuniga Gonzalez
              </h1>
              <p className="text-lg text-white/80 max-w-2xl">
                Video Specialist, 3D Animator, and Motion Designer crafting immersive visual stories that merge CGI,
                motion graphics, and interactive media.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:elias.zuniga.bils@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 font-semibold hover:-translate-y-0.5 transition"
                >
                  Get in touch
                </a>
                <a
                  href="https://www.eliaszugon.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-white/90 hover:border-white hover:text-white transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  View portfolio
                </a>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                {headlineStats.map(stat => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80 backdrop-blur-sm"
                  >
                    <p className="text-sm uppercase tracking-wide text-white/60">{stat.label}</p>
                    <p className="text-xl font-semibold text-white mt-2">{stat.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-8 py-8 lg:py-10 bg-background">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr,0.9fr] gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-card/70 p-8 shadow-lg"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-foreground/60 mb-3">
              Profile
            </p>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Creative Multimedia Designer Focused on CGI and Motion.
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              With foundations in Informatics and Multimedia Technology with a UX emphasis, I combine a user-centric
              mindset with technical craft to deliver cinematic visuals, interactive experiences, and story-driven
              content. I work at the intersection of creativity and technology, collaborating across disciplines to
              ship polished work under real deadlines.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto space-y-4">
          {[
            { key: 'experience', title: 'Experience', content: (
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <motion.div
                    key={item.company}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                    className="rounded-xl border border-border bg-muted/30 p-5"
                  >
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                        <p className="text-accent font-medium">{item.company}</p>
                      </div>
                      <p className="text-sm text-foreground/60">{item.period}</p>
                    </div>
                    <ul className="mt-3 space-y-2 text-foreground/70 text-sm leading-relaxed">
                      {item.bullets.map(bullet => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            )},
            { key: 'competencies', title: 'Key Competencies', content: (
              <div className="flex flex-wrap gap-2">
                {competencies.map(item => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full bg-accent/10 px-4 py-2 text-sm text-accent border border-accent/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )},
            { key: 'education', title: 'Education', content: (
              <div className="space-y-4">
                {education.map(item => (
                  <div key={item.degree} className="rounded-xl border border-border bg-muted/30 p-4">
                    <p className="text-sm font-semibold text-foreground">{item.degree}</p>
                    <p className="text-sm text-foreground/70">{item.place}</p>
                    <p className="text-xs text-foreground/50">{item.period}</p>
                  </div>
                ))}
              </div>
            )},
            { key: 'languages', title: 'Languages', content: (
              <div className="flex flex-wrap gap-3">
                {languages.map(lang => (
                  <span
                    key={lang.name}
                    className="inline-flex items-center gap-2 rounded-full bg-muted/40 px-4 py-2 text-sm text-foreground"
                  >
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    {lang.name} - {lang.level}
                  </span>
                ))}
              </div>
            )},
            { key: 'tools', title: 'Tools & Software', content: (
              <div className="space-y-4">
                {tools.map(tool => (
                  <div key={tool.title} className="rounded-xl border border-border bg-muted/30 p-4">
                    <p className="text-sm font-semibold text-foreground mb-2">{tool.title}</p>
                    <div className="flex flex-wrap gap-2">
                      {tool.items.map(item => (
                        <span key={item}>
                          {renderToolBadge(item)}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )},
          ].map(section => (
            <div
              key={section.key}
              ref={el => {
                sectionRefs.current[section.key] = el
              }}
              className="rounded-2xl border border-border bg-card/70 shadow-lg overflow-hidden scroll-mt-24"
            >
              <button
                onClick={() => toggleSection(section.key)}
                className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left text-lg font-semibold text-foreground hover:bg-card/60 transition"
              >
                <span>{section.title}</span>
                <span className="text-accent">{openSections[section.key] ? '-' : '+'}</span>
              </button>
              {openSections[section.key] && (
                <div className="px-5 sm:px-6 pb-6">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <ContactForm
            title="Let's create something bold"
            description="Share your idea, timeline, and goals - I'll design visuals and motion that elevate your story."
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
