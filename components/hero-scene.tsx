'use client'

import { useEffect, useState } from 'react'

import { getVideoPosterUrl } from '@/lib/media'

const HERO_VIDEO_SRC = '/homepage-videos/bodegalamp.mp4'

export default function HeroScene() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const videoTranslateY = Math.min(scrollY * 0.275, 120)
  const contentTranslateY = Math.min(scrollY * 0.15, 72)
  const contentOpacity = Math.max(1 - scrollY / 900, 0.55)

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <video
          src={HERO_VIDEO_SRC}
          poster={getVideoPosterUrl(HERO_VIDEO_SRC)}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute top-1/2 left-1/2 h-[114%] w-[114%] max-w-none object-cover will-change-transform"
          style={{
            transform: `translate(-50%, calc(-50% + ${videoTranslateY}px)) scale(1.06)`,
          }}
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_45%),linear-gradient(to_bottom,rgba(0,0,0,0.12),rgba(0,0,0,0.65))]" />
      </div>

      <div
        className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl items-end px-6 pb-20 sm:items-center sm:pb-24 lg:px-10 will-change-transform"
        style={{
          transform: `translateY(${contentTranslateY}px)`,
          opacity: contentOpacity,
        }}
      >
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/75 sm:text-sm">
            Welcome to the Elias Zugon universe
          </p>
          <h1 className="text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
            Explore 3D fashion visuals, augmented reality, motion design, and cinematic brand work.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Browse the portfolio or jump straight into projects built for brands, campaigns, and digital experiences.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90 sm:text-base"
            >
              Explore Projects
            </a>
            <a
              href="/specializations/fashion"
              className="rounded-full border border-white/55 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15 sm:text-base"
            >
              View Specializations
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/75">
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
