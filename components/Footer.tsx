import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-rule mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Logo size={22} />
              <span className="font-serif text-sm font-medium text-ink">Connectum Labs</span>
            </div>
            <p className="text-xs text-mid leading-relaxed font-light">
              A Brisbane-based technology holding company building and operating digital products.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-mid mb-4">Navigation</p>
            <ul className="flex flex-col gap-2">
              {[
                { href: '/',         label: 'Home' },
                { href: '/about',    label: 'About' },
                { href: '/ventures', label: 'Ventures' },
                { href: '/contact',  label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-xs text-mid hover:text-ink transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ventures */}
          <div>
            <p className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-mid mb-4">Ventures</p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/ventures/agencyops" className="text-xs text-mid hover:text-ink transition-colors">
                  AgencyOps
                </Link>
              </li>
              <li>
                <Link href="/ventures/celestial" className="text-xs text-mid hover:text-ink transition-colors">
                  Celestial
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-rule pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="font-mono text-[0.62rem] tracking-[0.08em] text-mid">
            © {year} Connectum Labs Pty Ltd · Brisbane, Queensland, Australia
          </p>
          <p className="font-mono text-[0.62rem] tracking-[0.06em] text-mid">
            ABN-registered Australian Company
          </p>
        </div>
      </div>
    </footer>
  )
}
