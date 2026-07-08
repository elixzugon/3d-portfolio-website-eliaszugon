'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [is3DOpen, setIs3DOpen] = useState(false)

  const navItems = [
    { href: '/projects', label: 'All Projects' },
    { href: '/photography', label: 'Photography' },
    { href: '/video', label: 'Video' },
    { href: '/motion-graphics', label: 'Motion Graphics' },
    { href: '/design', label: 'UX Design', hidden: true },
    { href: '/graphic-design', label: 'Graphic Design', hidden: true },
    { href: '/web-development', label: 'Web Development', hidden: true },
    { href: '/about', label: 'About Me' },
  ]

  const specializations = [
    { href: '/specializations/fashion', label: '3D Fashion Design' },
    { href: '/specializations/brand-animation', label: '3D Animation For Brands' },
    { href: '/specializations/augmented-reality', label: 'Augmented Reality' },
    { href: '/specializations/product-animation', label: 'Product Animation' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 font-bold text-xl text-accent">
            <div className="w-10 h-10 bg-accent/10 rounded flex items-center justify-center text-accent text-sm font-bold hover:bg-accent/20 transition-colors">
              {/* Replace this with your PNG logo */}
              <img 
                src="/icons/eliaszugon.png" 
                alt="Portfolio" 
                className="w-full h-full object-contain p-1"
              />
            </div>
            <span className="hidden sm:inline"></span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="relative group">
              <button className="px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 text-foreground/70 hover:text-foreground hover:bg-muted">
                3D Projects
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                {specializations.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-4 py-2 text-sm text-foreground/70 hover:text-accent hover:bg-muted transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {navItems.filter(item => !item.hidden).map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                  pathname === href
                    ? 'bg-accent/20 text-accent'
                    : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                )}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop Contact CTA */}
          <Link
            href="/#contact"
            className="hidden md:block px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Contact
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => setIs3DOpen(!is3DOpen)}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted transition-colors flex items-center justify-between"
              >
                3D Projects
                <svg
                  className={`w-4 h-4 transition-transform ${is3DOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              
              {is3DOpen && (
                <div className="pl-4 space-y-1">
                  {specializations.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => {
                        setIsOpen(false)
                        setIs3DOpen(false)
                      }}
                      className="block px-3 py-2 rounded-lg text-sm text-foreground/70 hover:text-accent hover:bg-muted transition-colors"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}

              {navItems.filter(item => !item.hidden).map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'block px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                    pathname === href
                      ? 'bg-accent/20 text-accent'
                      : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                  )}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-left px-3 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
