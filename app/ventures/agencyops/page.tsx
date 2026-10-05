import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'AgencyOps — Campaign Operations Software for Queensland Real Estate Agencies',
  description:
    'AgencyOps is campaign operations and compliance-tracking software for Queensland real estate agencies. It tracks every listing from appointment to settlement: AML, Form 2, marketing, open homes, vendor updates and contract dates.',
  alternates: { canonical: '/ventures/agencyops' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AgencyOps',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'Campaign operations and compliance-tracking software for Queensland residential real estate agencies: listing prep gates (AML verification, Form 2, marketing paid), vendor update drafting, open home run sheets and contract milestone tracking.',
  areaServed: { '@type': 'State', name: 'Queensland' },
  audience: { '@type': 'BusinessAudience', audienceType: 'Residential real estate agencies and campaign managers' },
  publisher: { '@type': 'Organization', name: 'Connectum Labs Pty Ltd', url: 'https://connectumlabs.com' },
}

type Gate = 'ok' | 'wait' | 'none'
const board: { address: string; note: string; gates: [Gate, string][] }[] = [
  { address: '12 Banksia Crescent', note: 'Week 3, two offers', gates: [['ok', 'Done'], ['ok', 'Done'], ['ok', 'Done'], ['ok', 'Live']] },
  { address: '7 Lomandra Street',   note: 'Prep, photos Thursday', gates: [['ok', 'Done'], ['ok', 'Done'], ['wait', 'Sent'], ['none', '—']] },
  { address: '31 Grevillea Road',   note: 'Prep, new appointment', gates: [['wait', 'Asked'], ['none', '—'], ['none', '—'], ['none', '—']] },
]

const gateClass: Record<Gate, string> = {
  ok:   'gate-ok bg-accent border-accent text-paper',
  wait: 'bg-amber-50 border-amber-500 text-amber-800',
  none: 'bg-paper border-rule text-mid',
}

const handles = [
  {
    title: 'Prep and launch gates',
    description:
      'AML verification, Form 2, marketing payment and tenant consents, recorded per listing. You see what each campaign is waiting on before it can book photos, go live or open the door.',
  },
  {
    title: 'Vendor updates',
    description:
      "Weekly messages drafted from the campaign's actual state: enquiry, open home numbers, feedback. Your team reviews and sends; nothing goes out on its own.",
  },
  {
    title: 'Open homes and runs',
    description:
      'Times, access, keys and lockboxes per property, with confirmation status for tenanted homes and run sheets generated for each staff member.',
  },
  {
    title: 'Contract to settlement',
    description:
      'Finance, building and pest, and settlement dates as indicative chase dates, plus buyer-side AML due dates now that agencies are reporting entities.',
  },
]

const steps = [
  { title: 'A conversation', description: 'Twenty minutes on how your campaigns run today and where the time goes.' },
  { title: 'A walkthrough', description: 'A board loaded with sample campaigns, set up to match the way your office works.' },
  { title: 'A trial on your listings', description: 'A handful of current campaigns on a private board, with outbound messaging switched off until you decide.' },
]

export default function AgencyOpsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        eyebrow="Venture · Real estate software"
        title="Every campaign, appointment to settlement, on one board."
        subtitle="AgencyOps is campaign operations software for Queensland real estate agencies. It tracks what each listing is waiting on, drafts the vendor updates, and keeps the dates your team usually holds in spreadsheets and heads."
      />

      {/* ── Board ── */}
      <section className="py-20 border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-4 text-mid font-light leading-relaxed">
            <p>
              The work between a signed Form 6 and a settled sale is mostly chasing: documents, payments, tenants,
              photographers, solicitors. AgencyOps holds that state in one place, so nothing depends on one
              person&apos;s memory.
            </p>
            <p>
              It was built around how a working Queensland campaign manager actually runs listings, mapping every
              message, gate and date in her week, so the next person in the role inherits the process on day one.
            </p>
            <div className="pt-3">
              <Link href="/contact?subject=agencyops" className="btn-primary">Book a 20-minute walkthrough →</Link>
            </div>
          </div>

          <div
            className="bg-white border border-rule rounded-lg px-3.5 sm:px-5 pt-5 pb-2 min-w-0"
            role="img"
            aria-label="Example campaign board. Three sample listings, each showing which of four gates (AML, Form 2, Marketing paid, Live) are cleared or pending."
          >
            <div className="grid grid-cols-[minmax(0,1fr)_repeat(4,2.75rem)] sm:grid-cols-[minmax(0,1fr)_repeat(4,4.2rem)] gap-1 sm:gap-1.5 text-xs text-mid font-medium pb-2.5 border-b border-rule">
              <span>Listing</span>
              <span className="text-center">AML</span>
              <span className="text-center">Form 2</span>
              <span className="text-center">Paid</span>
              <span className="text-center">Live</span>
            </div>
            {board.map((row) => (
              <div
                key={row.address}
                className="grid grid-cols-[minmax(0,1fr)_repeat(4,2.75rem)] sm:grid-cols-[minmax(0,1fr)_repeat(4,4.2rem)] gap-1 sm:gap-1.5 items-center py-3 border-b border-rule last:border-b-0"
              >
                <div className="text-sm font-medium text-ink leading-tight">
                  {row.address}
                  <span className="block text-xs font-light text-mid mt-0.5">{row.note}</span>
                </div>
                {row.gates.map(([state, label], i) => (
                  <div
                    key={i}
                    style={{ animationDelay: `${0.3 + i * 0.4}s` }}
                    className={`h-7 rounded flex items-center justify-center text-[0.6rem] sm:text-[0.7rem] font-medium border ${gateClass[state]}`}
                  >
                    {label}
                  </div>
                ))}
              </div>
            ))}
            <p className="text-xs text-mid font-light py-3">Sample data. Bookings stay locked until AML verification is recorded.</p>
          </div>
        </div>
      </section>

      {/* ── What it tracks ── */}
      <section className="py-20 border-b border-rule">
        <div className="mx-auto max-w-6xl px-6">
          <p className="section-label">What it keeps track of</p>
          <div className="grid sm:grid-cols-2 gap-px bg-rule border border-rule">
            {handles.map((h) => (
              <div key={h.title} className="bg-paper p-8">
                <h3 className="font-serif text-lg font-medium text-ink mb-2">{h.title}</h3>
                <p className="text-sm text-mid font-light leading-relaxed">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it starts ── */}
      <section className="py-20 border-b border-rule">
        <div className="mx-auto max-w-6xl px-6">
          <p className="section-label">How it starts</p>
          <p className="text-mid font-light leading-relaxed max-w-2xl mb-10">
            No migration project and no long contract. Your CRM stays the record of your listings; AgencyOps runs
            the campaign around them.
          </p>
          <ol className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <li key={s.title} className="border-t-2 border-ink pt-4">
                <span className="font-serif text-2xl text-accent">{i + 1}</span>
                <h3 className="font-serif text-lg font-medium text-ink mt-1 mb-1.5">{s.title}</h3>
                <p className="text-sm text-mid font-light leading-relaxed">{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl font-medium text-ink mb-1">Run campaigns for a Queensland agency?</h2>
            <p className="text-mid font-light text-sm">
              Based in Brisbane&apos;s western suburbs and happy to come to your office.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <Link href="/contact?subject=agencyops" className="btn-primary shrink-0">Get in touch →</Link>
            <Link href="/ventures" className="btn-outline shrink-0 text-sm">All ventures</Link>
          </div>
        </div>
      </section>
    </>
  )
}
