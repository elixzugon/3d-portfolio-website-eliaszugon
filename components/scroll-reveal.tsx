'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const SELECTORS = 'section, [data-animate], .animate-on-scroll'

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(SELECTORS)
    )

    if (!elements.length) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll--visible')
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px',
      }
    )

    elements.forEach(el => {
      el.classList.add('animate-on-scroll')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [pathname])

  return null
}
