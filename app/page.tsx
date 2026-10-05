import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Connectum Labs — Technology Holding Company',
  description:
    'Connectum Labs Pty Ltd is a Brisbane-based technology holding company that builds and operates digital products including AgencyOps, campaign operations software for Queensland real estate agencies, and Celestial.',
}

const ventures = [
  {
    tag: 'B2B Software · Real Estate',
    icon: '▦',
    name: 'AgencyOps',
    description:
      'Campaign operations software for Queensland real estate agencies. Tracks every listing from appointment to settlement — AML, Form 2, marketing, open homes, vendor updates and contract dates — on one board.',
    href: '/ventures/agencyops',
    external: false,
    cta: 'Learn more',
  },
  {
    tag: 'Consumer App · AI',
    icon: '✦',
    name: 'Celestial',
    description:
      'An AI-powered astrology application delivering personalised birth chart readings, transit insights, and cosmic guidance — where classical astrological tradition meets modern large-language-model technology.',
    href: '/ventures/celestial',
    external: false,
    cta: 'Learn more',
  },
]

const credibilityItems = [
  { label: 'Entity',       value: 'Connectum Labs Pty Ltd' },
  { label: 'Type',         value: 'Technology Holding Company' },
  { label: 'Incorporated', value: 'Queensland, Australia' },
  { label: 'Active since', value: '2025' },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-24 md:py-36 border-b border-rule">
        <div
          className="pointer-events-none absolute -top-40 -right-60 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(26,77,62,0.07) 0%, transparent 70%)' }}
        />
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow mb-6">Technology Holding Company · Brisbane, Australia</p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.07] tracking-[-0.025em] text-ink max-w-4xl mb-7">
            Building <em className="italic text-accent not-italic font-normal">digital products</em>{' '}
            that connect ideas to people.
          </h1>
          <p className="text-lg md:text-xl text-mid font-light leading-relaxed max-w-lg mb-10">
            Connectum Labs acquires, builds, and operates technology ventures at the intersection of
            artificial intelligence, business software and consumer apps.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/ventures" className="btn-primary">
              Our ventures →
            </Link>
            <Link href="/about" className="btn-outline">
              About us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Credibility strip ── */}
      <section className="border-b border-rule bg-white/40">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {credibilityItems.map(({ label, value }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className="font-mono text-[0.62rem] tracking-[0.14em] uppercase text-mid">{label}</span>
                <span className="font-mono text-[0.62rem] tracking-[0.04em] text-ink">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ventures ── */}
      <section className="py-20 md:py-28 border-b border-rule">
        <div className="mx-auto max-w-6xl px-6">
          <p className="section-label">Our ventures</p>
          <div
            className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-rule border border-rule"
          >
            {ventures.map((v) => (
              <div key={v.name} className="p-8 md:p-10 flex flex-col gap-4 hover:bg-white/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: v.name === 'Celestial' ? '#e8f0ec' : '#ede8e0' }}
                  >
                    {v.icon}
                  </div>
                  <span className="font-mono text-[0.62rem] tracking-[0.14em] uppercase text-accent">
                    {v.tag}
                  </span>
                </div>
                <h2 className="font-serif text-2xl font-medium text-ink">{v.name}</h2>
                <p className="text-mid text-sm font-light leading-relaxed flex-1">{v.description}</p>
                {v.external ? (
                  <a
                    href={v.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-2.5 transition-all"
                  >
                    {v.cta} ↗
                  </a>
                ) : (
                  <Link
                    href={v.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-2.5 transition-all"
                  >
                    {v.cta} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About strip ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label">About</p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium leading-[1.15] tracking-[-0.015em] text-ink">
              A studio for purposeful software.
            </h2>
          </div>
          <div>
            <p className="text-mid font-light leading-relaxed mb-4">
              We're a small, focused holding company based in Brisbane, Queensland. Each venture we operate
              is independently branded and serves its own market — backed by shared infrastructure, engineering
              expertise, and commercial discipline from the Connectum Labs parent entity.
            </p>
            <p className="text-mid font-light leading-relaxed mb-7">
              Our approach is intentional: build things that solve real problems, distribute them efficiently,
              and operate them sustainably.
            </p>
            <Link href="/about" className="btn-outline text-sm">
              Read more about us →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
