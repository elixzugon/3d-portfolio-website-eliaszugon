'use client'

import Link from 'next/link'
import { Mail, Linkedin, Instagram, Github } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-muted border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-foreground">Portfolio</h3>
            <p className="text-foreground/60 text-sm">
              Crafting immersive 3D experiences and cutting-edge digital solutions.
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                Home
              </Link>
              <Link href="/specializations/fashion" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                3D Fashion Design
              </Link>
              <Link href="/specializations/augmented-reality" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                Augmented Reality
              </Link>
              <Link href="/specializations/3d-animation" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                3D Animation
              </Link>
              <Link href="/projects" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                All Projects
              </Link>
              <Link href="/motion-graphics" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                Motion Graphics
              </Link>
              <Link href="/privacy" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                Terms of Use
              </Link>
              <Link href="/accessibility" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                Accessibility
              </Link>
            </nav>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              <a
                href="mailto:elias.zuniga.bils@gmail.com"
                aria-label="Email"
                className="text-foreground/60 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/eliaszugon/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-foreground/60 hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/eliaszugon/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-foreground/60 hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/elixzugon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-foreground/60 hover:text-accent transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/40 text-sm">
            &copy; {currentYear} All rights reserved. Crafted with creativity and innovation.
          </p>
          <p className="text-foreground/40 text-sm">
            Designed & Developed by eliaszugon.com
          </p>
        </div>
      </div>
    </footer>
  )
}
