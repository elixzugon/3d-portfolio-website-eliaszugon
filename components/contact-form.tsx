'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ContactFormProps {
  title?: string
  description?: string
  compact?: boolean
}

function ContactFormComponent({
  title = 'Get In Touch',
  description = "Have a project in mind? I'd love to hear about it. Let's create something amazing together.",
  compact = false,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '',
    consent: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target
    const { name, value } = target

    if (target instanceof HTMLInputElement && target.type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: target.checked }))
      return
    }

    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error ?? 'Something went wrong. Please try again.')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '', website: '', consent: false })

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    } catch (err) {
      console.error(err)
      setError(err instanceof Error ? err.message : 'Failed to send your message.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className={`px-4 ${compact ? 'pt-16 pb-4' : 'pt-20 pb-10'} bg-background`}
    >
      <div className="max-w-2xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-foreground/60 text-lg">
            {description}
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Name and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength={100}
                autoComplete="name"
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                maxLength={254}
                autoComplete="email"
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              maxLength={160}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
              placeholder="Project inquiry"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              maxLength={4000}
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <label className="flex items-start gap-3 text-left text-sm leading-relaxed text-foreground/70">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="mt-1 h-4 w-4 rounded border-border bg-muted accent-accent"
            />
            <span>
              I agree that my information will be used to respond to this inquiry, as described in the{' '}
              <Link href="/privacy" className="text-accent hover:underline">
                Privacy Policy
              </Link>
              .
            </span>
          </label>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading || submitted}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
          </motion.button>

          {/* Success Message */}
          <AnimatedSuccessMessage show={submitted} />
          <AnimatedErrorMessage message={error} />
        </motion.form>
      </div>
    </section>
  )
}

function AnimatedSuccessMessage({ show }: { show: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : -10 }}
      aria-live="polite"
      className="p-4 rounded-lg bg-accent/20 border border-accent/50 text-accent"
    >
      Thank you! Your message has been received. I'll get back to you soon.
    </motion.div>
  )
}

function AnimatedErrorMessage({ message }: { message: string | null }) {
  if (!message) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      role="alert"
      className="p-4 rounded-lg bg-red-500/10 border border-red-500/40 text-red-400"
    >
      {message}
    </motion.div>
  )
}

export const ContactForm = ContactFormComponent
export default ContactFormComponent
