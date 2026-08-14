import Footer from '@/components/footer'

const sections = [
  {
    title: 'Commitment',
    body: 'This site aims to provide an accessible portfolio experience for visitors using keyboards, screen readers, touch devices, and modern browsers.',
  },
  {
    title: 'Current accessibility measures',
    body: 'The site uses semantic page structure, descriptive labels, visible focus styles, responsive layouts, text alternatives for key images, reduced personal data collection, and clear contact paths.',
  },
  {
    title: 'Known limitations',
    body: 'Some portfolio media includes complex motion, 3D scenes, and embedded video. These experiences may not be fully equivalent across all assistive technologies, but core project information is also presented as text.',
  },
  {
    title: 'Feedback',
    body: 'If you experience an accessibility barrier, please email the page URL, browser or device details, and a short description of the issue so it can be reviewed.',
  },
]

export default function AccessibilityPage() {
  return (
    <main className="w-full bg-background text-foreground">
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-foreground/50">
            Accessibility
          </p>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Accessibility Statement</h1>
          <p className="mb-10 text-foreground/60">
            Last updated July 8, 2026. Accessibility is reviewed as part of ongoing site maintenance.
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
            <h2 className="mb-3 text-xl font-semibold">Accessibility contact</h2>
            <p className="leading-relaxed text-foreground/70">
              Email accessibility feedback to{' '}
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
