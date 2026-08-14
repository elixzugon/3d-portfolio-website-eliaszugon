import Footer from '@/components/footer'

const sections = [
  {
    title: 'Information this site collects',
    body: 'When you submit the contact form, the site collects the name, email address, subject, and message you provide. The site may also process basic technical information such as IP address, browser data, device type, referring pages, and performance events through hosting and analytics providers.',
  },
  {
    title: 'How information is used',
    body: 'Contact information is used to respond to inquiries, discuss potential projects, and maintain a record of business communication. Analytics and performance information is used to understand site usage, improve reliability, and diagnose technical issues.',
  },
  {
    title: 'Service providers',
    body: 'This site may use Vercel for hosting, analytics, and performance insights, Resend for contact form email delivery, and YouTube for embedded video playback. These providers may process data under their own terms and privacy practices.',
  },
  {
    title: 'Cookies and similar technologies',
    body: 'The site does not require account cookies. Embedded services and analytics tools may use cookies or similar technologies depending on browser settings, provider behavior, and the user location.',
  },
  {
    title: 'Data retention',
    body: 'Contact messages are kept only as long as reasonably necessary to respond to the inquiry, manage business records, or comply with applicable obligations.',
  },
  {
    title: 'Your choices',
    body: 'You can request access, correction, or deletion of personal information submitted through the contact form by emailing elias.zuniga.bils@gmail.com.',
  },
  {
    title: 'Security',
    body: 'Reasonable technical safeguards are used, including HTTPS on production hosting, security headers, form validation, spam controls, and limited collection of personal information.',
  },
]

export default function PrivacyPage() {
  return (
    <main className="w-full bg-background text-foreground">
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-foreground/50">
            Legal
          </p>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
          <p className="mb-10 text-foreground/60">
            Last updated July 8, 2026. This policy explains how this portfolio website handles information from visitors and project inquiries.
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
              For privacy questions or requests, email{' '}
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
