import { Link } from 'react-router-dom'
import { Hammer, Mail, Globe, Github, Twitter, Linkedin } from 'lucide-react'
import { services, siteInfo } from '../data/content'
import useScrollToSection from '../hooks/useScrollToSection'

const PAGE_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Submissions', to: '/submissions' },
]

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com', icon: Github },
  { label: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
]

export default function Footer() {
  const onScrollTo = useScrollToSection()

  return (
    <footer className="bg-navy-950 pt-16 text-white/70">
      <div className="container-x">
        <div className="grid gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-navy-950">
                <Hammer size={18} strokeWidth={2.5} aria-hidden="true" />
              </span>
              {siteInfo.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              A full-stack studio designing and building fast, responsive,
              scalable web experiences.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-amber-500/50 hover:text-amber-400"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {PAGE_LINKS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/55 transition-colors hover:text-amber-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onScrollTo('services')}
                  className="text-sm text-white/55 transition-colors hover:text-amber-400"
                >
                  Services
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onScrollTo('services')}
                    className="text-sm text-white/55 transition-colors hover:text-amber-400"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-amber-400"
                >
                  <Mail size={15} aria-hidden="true" />
                  {siteInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/55">
                <Globe size={15} aria-hidden="true" />
                {siteInfo.website}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © {siteInfo.year} {siteInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <Link to="/privacy" className="transition-colors hover:text-amber-400">
              Privacy Policy
            </Link>
            <span aria-hidden="true">|</span>
            <Link to="/terms" className="transition-colors hover:text-amber-400">
              Terms
            </Link>
            <span aria-hidden="true">|</span>
            <Link to="/contact" className="transition-colors hover:text-amber-400">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
