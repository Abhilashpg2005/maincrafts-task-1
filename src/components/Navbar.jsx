import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown, Hammer } from 'lucide-react'
import { services, siteInfo } from '../data/content'
import useScrollToSection from '../hooks/useScrollToSection'

// Real, linkable pages come first (Home, About, Contact, Submissions) —
// this is the core multi-page navigation from Task 2, extended in Task 3
// with the Submissions page. Services stays as an in-page dropdown since
// it lives inside the Home page.
const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', id: 'services', dropdown: true },
  { label: 'Contact', to: '/contact' },
  { label: 'Submissions', to: '/submissions' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef(null)
  const scrollToSection = useScrollToSection()

  const navLinkClass = ({ isActive }) =>
    `rounded-md px-4 py-2 font-body text-sm font-medium transition-colors ${
      isActive ? 'text-white' : 'text-white/85 hover:text-white'
    }`

  const mobileNavLinkClass = ({ isActive }) =>
    `block w-full rounded-lg px-3 py-3 text-left font-body text-base font-medium transition-colors ${
      isActive ? 'text-amber-400' : 'text-white/90'
    }`

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the desktop dropdown on outside click
  useEffect(() => {
    function handleClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Close the desktop dropdown on Escape
  useEffect(() => {
    function handleKey(event) {
      if (event.key === 'Escape') setServicesOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  const goToSection = (id) => {
    setMobileOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
    scrollToSection(id)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/90 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between sm:h-20" aria-label="Primary">
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="flex items-center gap-2 rounded-md font-display text-lg font-semibold text-white sm:text-xl"
          aria-label="MainCrafts home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-navy-950">
            <Hammer size={18} strokeWidth={2.5} aria-hidden="true" />
          </span>
          {siteInfo.name}
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) =>
            item.dropdown ? (
              <li key={item.id} className="relative" ref={dropdownRef}>
                <button
                  className="flex items-center gap-1 rounded-md px-4 py-2 font-body text-sm font-medium text-white/85 transition-colors hover:text-white"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((v) => !v)}
                >
                  {item.label}
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>

                {servicesOpen && (
                  <div
                    className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-2xl border border-white/10 bg-navy-900/95 p-2 shadow-card-hover backdrop-blur-md animate-fade-up"
                    role="menu"
                  >
                    {services.map((service) => (
                      <button
                        key={service.id}
                        role="menuitem"
                        onClick={() => goToSection('services')}
                        className="flex w-full flex-col rounded-xl px-4 py-3 text-left transition-colors hover:bg-white/5"
                      >
                        <span className="font-display text-sm font-semibold text-white">
                          {service.title}
                        </span>
                        <span className="mt-0.5 text-xs text-white/55">
                          {service.description.slice(0, 46)}…
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'} className={navLinkClass}>
                  {item.label}
                </NavLink>
              </li>
            )
          )}
        </ul>

        <div className="hidden md:block">
          <Link to="/contact" className="btn-primary">
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-navy-950/98 backdrop-blur-md transition-[max-height] duration-300 ease-out md:hidden ${
          mobileOpen ? 'max-h-[28rem]' : 'max-h-0'
        }`}
      >
        <ul className="container-x flex flex-col gap-1 py-4">
          {NAV_ITEMS.map((item) =>
            item.dropdown ? (
              <li key={item.id}>
                <button
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 font-body text-base font-medium text-white/90"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  aria-expanded={mobileServicesOpen}
                >
                  {item.label}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      mobileServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden pl-3 transition-[max-height] duration-300 ${
                    mobileServicesOpen ? 'max-h-60' : 'max-h-0'
                  }`}
                >
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => goToSection('services')}
                      className="block w-full rounded-lg px-3 py-2 text-left font-body text-sm text-white/70"
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              </li>
            ) : (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={mobileNavLinkClass}
                >
                  {item.label}
                </NavLink>
              </li>
            )
          )}
          <li className="pt-2">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
