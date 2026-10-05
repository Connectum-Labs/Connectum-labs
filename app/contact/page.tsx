import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Connectum Labs for partnership enquiries, venture information, or general correspondence.',
}

const contactDetails = [
  { label: 'Entity',    value: 'Connectum Labs Pty Ltd' },
  { label: 'Location',  value: 'Brisbane, Queensland, Australia' },
  { label: 'Email',     value: 'hello@connectumlabs.com', href: 'mailto:hello@connectumlabs.com' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk."
        subtitle="Partnership enquiries, venture information, or general correspondence — we'd love to hear from you."
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16">
          {/* Details */}
          <div>
            <p className="section-label">Details</p>
            <div className="space-y-5 mb-10">
              {contactDetails.map(({ label, value, href }) => (
                <div key={label}>
                  <p className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-mid mb-1">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-accent text-sm hover:underline"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-ink text-sm">{value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="border border-rule p-6">
              <p className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-mid mb-3">Response time</p>
              <p className="text-ink text-sm font-light leading-relaxed">
                We typically respond to enquiries within 1–2 business days. For urgent matters, email us directly
                at{' '}
                <a href="mailto:hello@connectumlabs.com" className="text-accent hover:underline">
                  hello@connectumlabs.com
                </a>.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <p className="section-label">Send a message</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
