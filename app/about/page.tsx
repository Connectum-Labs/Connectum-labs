import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Connectum Labs Pty Ltd is a Brisbane-based technology holding company building and operating software ventures powered by artificial intelligence.',
}

const details = [
  { label: 'Legal entity',   value: 'Connectum Labs Pty Ltd' },
  { label: 'Structure',      value: 'Proprietary Limited Company' },
  { label: 'Jurisdiction',   value: 'Queensland, Australia' },
  { label: 'Headquarters',   value: 'Brisbane, QLD' },
  { label: 'Registration',   value: 'ASIC-registered, ABN held' },
  { label: 'Focus',          value: 'Technology · AI · Digital Products' },
]

const values = [
  {
    heading: 'Build with intention.',
    body: "Every product we ship starts with a genuine problem. We don't build for the sake of building — we build because there's a real gap worth filling.",
  },
  {
    heading: 'Small teams, high leverage.',
    body: 'We operate lean. Modern AI tooling allows a small, focused team to produce software that once required much larger organisations.',
  },
  {
    heading: 'Sustainable by design.',
    body: "Revenue-focused from day one. We're not chasing growth-at-all-costs — we're building businesses that can stand on their own.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>A technology company built for the <em className="italic font-normal text-accent">long term</em>.</>}
        subtitle="We build and operate digital products that earn their place in the world — thoughtfully designed, carefully constructed, and sustainably run."
      />

      {/* ── Mission ── */}
      <section className="py-20 border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16">
          <div>
            <p className="section-label">What we do</p>
            <h2 className="font-serif text-3xl font-medium leading-[1.15] tracking-[-0.015em] text-ink">
              We hold, build, and operate software ventures.
            </h2>
          </div>
          <div className="space-y-5 text-mid font-light leading-relaxed">
            <p>
              Connectum Labs is a technology holding company headquartered in Brisbane, Queensland. We
              identify opportunities where software and artificial intelligence can remove real operational work,
              then build focused software products to address them.
            </p>
            <p>
              Rather than building one monolithic product, we operate a portfolio of independent ventures —
              each with its own brand, market, and commercial model — unified by shared engineering
              infrastructure and operational discipline from the parent entity.
            </p>
            <p>
              Currently we operate two ventures: <strong className="text-ink font-medium">AgencyOps</strong>,
              campaign operations software for Queensland real estate agencies, and{' '}
              <strong className="text-ink font-medium">Celestial</strong>, an AI-powered astrology application.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 border-b border-rule">
        <div className="mx-auto max-w-6xl px-6">
          <p className="section-label">How we operate</p>
          <div className="grid md:grid-cols-3 gap-px bg-rule border border-rule">
            {values.map((v) => (
              <div key={v.heading} className="bg-paper p-8 hover:bg-white/60 transition-colors">
                <h3 className="font-serif text-xl font-medium text-ink mb-3 leading-snug">{v.heading}</h3>
                <p className="text-sm text-mid font-light leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client work ── */}
      <section className="py-20 border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label">Client work</p>
            <h2 className="font-serif text-3xl font-medium leading-[1.15] tracking-[-0.015em] text-ink">
              Alongside our ventures.
            </h2>
          </div>
          <div className="border border-rule p-6">
            <p className="text-ink text-sm font-medium">Website rebuild for a Brisbane wellbeing practice</p>
            <p className="text-mid font-light text-xs mt-1">In progress</p>
          </div>
        </div>
      </section>

      {/* ── Legal / Stripe block ── */}
      <section className="py-20 border-b border-rule">
        <div className="mx-auto max-w-6xl px-6">
          <p className="section-label">Company details</p>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <h2 className="font-serif text-3xl font-medium leading-[1.15] tracking-[-0.015em] text-ink">
              Registered &amp; operating in Australia.
            </h2>
            <div className="divide-y divide-rule border border-rule">
              {details.map(({ label, value }) => (
                <div key={label} className="flex items-start justify-between px-5 py-3.5">
                  <span className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-mid w-36 shrink-0">{label}</span>
                  <span className="text-sm text-ink font-light text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl font-medium text-ink mb-1">Interested in working together?</h2>
            <p className="text-mid font-light text-sm">We're open to partnerships, licensing, and collaboration.</p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">Get in touch →</Link>
        </div>
      </section>
    </>
  )
}
