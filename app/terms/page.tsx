import Footer from '@/components/footer'

const sections = [
  {
    title: 'Use of the site',
    body: 'This website is provided as a portfolio and professional contact point. You may browse the site, view project materials, and submit legitimate project inquiries through the contact form.',
  },
  {
    title: 'Portfolio content',
    body: 'Unless otherwise stated, images, videos, 3D visuals, written content, and project presentation materials on this site are owned by Elias Zugon or used as portfolio work with relevant project context. Do not copy, redistribute, sell, or reuse portfolio materials without written permission.',
  },
  {
    title: 'Third-party content',
    body: 'Some videos, embeds, or project references may be hosted by third-party services such as YouTube. Those services are governed by their own terms and privacy practices.',
  },
  {
    title: 'Project inquiries',
    body: 'Submitting a contact form does not create a client relationship, guarantee availability, or establish a project agreement. Project scope, deliverables, timeline, ownership, and fees must be agreed separately in writing.',
  },
  {
    title: 'No warranties',
    body: 'The site is provided as available. Reasonable effort is made to keep information accurate and accessible, but no warranty is made that the site will be uninterrupted, error-free, or suitable for every purpose.',
  },
  {
    title: 'Limitation of liability',
    body: 'To the fullest extent allowed by applicable law, Elias Zugon is not responsible for indirect, incidental, or consequential damages related to use of this website.',
  },
]

export default function TermsPage() {
  return (
    <main className="w-full bg-background text-foreground">
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-foreground/50">
            Legal
          </p>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Terms of Use</h1>
          <p className="mb-10 text-foreground/60">
            Last updated July 8, 2026. By using this website, you agree to these terms.
          </p>

          <div className="space-y-8">
            {sections.map(section => (
              <section key={section.title} className="rounded-lg border border-border bg-card/60 p-6">
                <h2 className="mb-3 text-xl font-semibold">{section.title}</h2>
                <p className="leading-relaxed text-foreground/70">{section.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-border bg-muted/40 p-6">
            <h2 className="mb-3 text-xl font-semibold">Contact</h2>
            <p className="leading-relaxed text-foreground/70">
              Questions about these terms can be sent to{' '}
              <a className="text-accent hover:underline" href="mailto:elias.zuniga.bils@gmail.com">
                elias.zuniga.bils@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
