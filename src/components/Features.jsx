import { Zap, LayoutGrid, Layers, ShieldCheck } from 'lucide-react'
import { features } from '../data/content'

const ICONS = { Zap, LayoutGrid, Layers, ShieldCheck }

export default function Features() {
  return (
    <section id="features" className="bg-paper py-24 sm:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow text-skyline-600">Why MainCrafts</span>
          <h2 className="section-label mt-3">Built to hold up under real use</h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-muted">
            Every project starts from the same four principles — the
            difference between a demo and something you can actually ship.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = ICONS[feature.icon]
            return (
              <article
                key={feature.id}
                className="group relative overflow-hidden rounded-2xl border border-ink/8 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover animate-fade-up"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div
                  className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-amber-500/10 transition-transform duration-300 group-hover:scale-125"
                  aria-hidden="true"
                />
                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-amber-400">
                  <Icon size={20} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 className="relative mt-5 font-display text-lg font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink-muted">
                  {feature.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
