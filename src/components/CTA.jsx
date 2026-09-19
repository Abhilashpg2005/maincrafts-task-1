import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
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
              Ready to build something great?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
              Tell us what you&apos;re launching and we&apos;ll draft a plan
              within one business day.
            </p>
            <Link to="/contact" className="btn-primary mt-8">
              Apply Now
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
