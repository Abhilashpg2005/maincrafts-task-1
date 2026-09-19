import { Link } from 'react-router-dom'
import { ArrowRight, Compass } from 'lucide-react'
import useScrollToSection from '../hooks/useScrollToSection'

export default function Hero() {
  const onScrollTo = useScrollToSection()

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy-950 pt-24 sm:pt-20"
    >
      {/* Blueprint grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-70 [background-size:44px_44px]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950 to-transparent"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-0">
        <div className="animate-fade-up">
          <span className="eyebrow">
            <Compass size={14} aria-hidden="true" />
            Full-stack studio
          </span>

          <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build Smarter with{' '}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              MainCrafts
            </span>
          </h1>

          <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-white/65 sm:text-lg">
            We design and build fast, responsive, scalable web experiences —
            from the first wireframe to the day it ships. Whatever you&apos;re
            launching tomorrow, we help you draft it, craft it, and get it
            live.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/contact" className="btn-primary">
              Get Started
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <button onClick={() => onScrollTo('services')} className="btn-secondary">
              Explore Services
            </button>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wide text-white/40">Delivery</dt>
              <dd className="mt-1 font-display text-lg font-semibold text-white">2–4 weeks</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wide text-white/40">Uptime</dt>
              <dd className="mt-1 font-display text-lg font-semibold text-white">99.9%</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wide text-white/40">Support</dt>
              <dd className="mt-1 font-display text-lg font-semibold text-white">Always-on</dd>
            </div>
          </dl>
        </div>

        {/* Signature blueprint panel */}
        <div className="relative mx-auto hidden w-full max-w-md animate-float lg:block">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-card-hover backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-xs text-white/40">build_plan.mc</span>
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
              </div>
            </div>
            <svg viewBox="0 0 320 260" className="mt-4 w-full" role="img" aria-label="Blueprint diagram of a build path connecting design, development, and launch">
              <g stroke="rgba(255,255,255,0.12)" strokeWidth="1">
                <line x1="0" y1="40" x2="320" y2="40" />
                <line x1="0" y1="120" x2="320" y2="120" />
                <line x1="0" y1="200" x2="320" y2="200" />
              </g>
              <path
                d="M20 210 C 90 210, 90 130, 160 130 S 230 40, 300 40"
                fill="none"
                stroke="#E2963C"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="340"
                className="animate-draw-line"
              />
              <circle cx="20" cy="210" r="6" fill="#3E7BFA" />
              <circle cx="160" cy="130" r="6" fill="#F5F6F8" />
              <circle cx="300" cy="40" r="7" fill="#E2963C" />
              <text x="8" y="232" fill="rgba(255,255,255,0.55)" fontSize="11" fontFamily="JetBrains Mono, monospace">
                Design
              </text>
              <text x="130" y="152" fill="rgba(255,255,255,0.55)" fontSize="11" fontFamily="JetBrains Mono, monospace">
                Develop
              </text>
              <text x="255" y="30" fill="rgba(255,255,255,0.75)" fontSize="11" fontFamily="JetBrains Mono, monospace">
                Launch
              </text>
            </svg>
          </div>

          <div className="absolute -right-6 -top-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500 font-display text-xl font-bold text-navy-950 shadow-glow">
            MC
          </div>
        </div>
      </div>
    </section>
  )
}
