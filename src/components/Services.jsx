import { PenTool, Code2, Smartphone, TrendingUp, ArrowUpRight } from 'lucide-react'
import { services } from '../data/content'
import useScrollToSection from '../hooks/useScrollToSection'

const ICONS = { PenTool, Code2, Smartphone, TrendingUp }

export default function Services() {
  const onScrollTo = useScrollToSection()

  return (
    <section id="services" className="bg-navy-950 py-24 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">What we do</span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Services built around your roadmap
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/60">
              Pick one service or the whole toolkit — every engagement is
              scoped to what your product actually needs next.
            </p>
          </div>
          <button onClick={() => onScrollTo('contact')} className="btn-secondary shrink-0">
            Discuss a project
            <ArrowUpRight size={16} aria-hidden="true" />
          </button>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = ICONS[service.icon]
            return (
              <article
                key={service.id}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:bg-white/[0.06] animate-fade-up"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-navy-950">
                    <Icon size={22} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs text-white/25">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {service.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
