import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ventures',
  description: 'Connectum Labs operates AgencyOps, campaign operations software for Queensland real estate agencies, and Celestial, an AI astrology app.',
}

const ventures = [
  {
    number: '01',
    tag: 'B2B Software · Real Estate',
    name: 'AgencyOps',
    tagline: 'Every campaign, appointment to settlement, on one board.',
    description:
      'AgencyOps is campaign operations software for Queensland real estate agencies. It tracks what each listing is waiting on — AML verification, Form 2, marketing payment, tenant consents — drafts vendor updates from the campaign\'s actual state, runs open home schedules, and keeps contract dates through to settlement.',
    status: 'Pilot',
    href: '/ventures/agencyops',
    external: false,
    features: ['Prep & launch gates', 'Vendor updates', 'Open home runs', 'Contract milestones'],
  },
  {
    number: '02',
    tag: 'Consumer App · AI',
    name: 'Celestial',
    tagline: 'Astrology, reimagined with AI.',
    description:
      'Celestial is an AI-powered astrology application that delivers personalised birth chart readings, daily transit insights, and cosmic guidance. Built on pyswisseph for precision ephemeris calculation and Claude AI for nuanced interpretation, Celestial bridges ancient astrological tradition with modern large-language-model technology.',
    status: 'Beta',
    href: '/ventures/celestial',
    external: false,
    features: ['Birth chart readings', 'Transit insights', 'AI-powered interpretation', 'Personalised guidance'],
  },
]

export default function VenturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Ventures"
        title="Products we build and operate."
        subtitle="Each venture is independently branded, serves its own market, and is backed by Connectum Labs infrastructure."
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 space-y-6">
          {ventures.map((v) => (
            <article key={v.name} className="border border-rule hover:border-accent/30 transition-colors">
              <div className="grid md:grid-cols-[auto_1fr_auto] gap-0">
                {/* Number */}
                <div className="hidden md:flex items-start justify-center px-8 pt-10 border-r border-rule">
                  <span className="font-mono text-[0.65rem] tracking-[0.18em] text-mid">{v.number}</span>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-accent">{v.tag}</span>
                    <span className={`font-mono text-[0.6rem] tracking-[0.12em] uppercase px-2 py-0.5 rounded-full ${
                      v.status === 'Beta' || v.status === 'Pilot'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-emerald-100 text-emerald-700'
                    }`}>
                      {v.status}
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl font-medium text-ink mb-1">{v.name}</h2>
                  <p className="text-mid text-sm italic font-light mb-4">{v.tagline}</p>
                  <p className="text-mid font-light leading-relaxed text-sm max-w-2xl mb-6">{v.description}</p>
                  <ul className="flex flex-wrap gap-2">
                    {v.features.map((f) => (
                      <li
                        key={f}
                        className="font-mono text-[0.62rem] tracking-[0.08em] uppercase bg-rule/60 text-mono px-2.5 py-1 rounded"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex items-end md:items-start justify-end md:justify-center p-8 border-t md:border-t-0 md:border-l border-rule">
                  {v.external ? (
                    <a
                      href={v.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs py-2.5 whitespace-nowrap"
                    >
                      Visit site ↗
                    </a>
                  ) : (
                    <Link href={v.href} className="btn-primary text-xs py-2.5 whitespace-nowrap">
                      Learn more →
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
