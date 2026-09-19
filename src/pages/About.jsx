import { Link } from 'react-router-dom'
import { PenTool, ShieldCheck, Layers, ArrowRight } from 'lucide-react'
import { aboutContent, siteInfo } from '../data/content'

const ICONS = { PenTool, ShieldCheck, Layers }

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-navy-950 pb-20 pt-32 sm:pt-36">
        <div
          className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-70 [background-size:44px_44px]"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden="true" />

        <div className="container-x relative animate-fade-up">
          <span className="eyebrow">About us</span>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
            The studio behind{' '}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              {siteInfo.name}
            </span>
          </h1>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-white/65 sm:text-lg">
            {aboutContent.intro}
          </p>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-6">
            {aboutContent.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-[11px] uppercase tracking-wide text-white/40">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-display text-lg font-semibold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="eyebrow text-skyline-600">Our mission</span>
            <h2 className="section-label mt-3">Software that feels effortless</h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-ink-muted">
            {aboutContent.mission}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-x">
          <span className="eyebrow text-skyline-600">What we value</span>
          <h2 className="section-label mt-3">How we work</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aboutContent.values.map((value) => {
              const Icon = ICONS[value.icon]
              return (
                <div
                  key={value.id}
                  className="rounded-2xl border border-ink/8 bg-paper p-6 shadow-card transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="container-x">
          <span className="eyebrow text-skyline-600">Team</span>
          <h2 className="section-label mt-3">The people building it</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {aboutContent.team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-ink/8 bg-white p-6 text-center shadow-card"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 font-display text-lg font-semibold text-amber-400">
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">{member.name}</h3>
                <p className="mt-1 text-sm text-ink-muted">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper px-5 pb-6 sm:px-8 lg:px-10">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-8 py-14 text-center sm:px-16 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-40 [background-size:36px_36px]"
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden="true" />
            <div className="relative">
              <h2 className="mx-auto max-w-xl font-display text-2xl font-semibold text-white sm:text-3xl">
                Want to work with us?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
                Tell us what you&apos;re building and we&apos;ll follow up within one business day.
              </p>
              <Link to="/contact" className="btn-primary mt-8">
                Get in touch
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
