import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { siteInfo } from '../data/content'

export default function LegalLayout({ title, updated, children }) {
  return (
    <section className="bg-paper pb-24 pt-32 sm:pt-36">
      <div className="container-x max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-skyline-600 transition-colors hover:text-skyline-500"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Back to home
        </Link>

        <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-ink-muted">Last updated: {updated}</p>

        <div className="prose-legal mt-10 space-y-8 text-sm leading-relaxed text-ink-soft sm:text-base">
          {children}
        </div>

        <div className="mt-14 rounded-2xl border border-ink/8 bg-white p-6 text-sm text-ink-muted">
          Questions about this page? Reach us at{' '}
          <a href={`mailto:${siteInfo.email}`} className="font-medium text-skyline-600">
            {siteInfo.email}
          </a>
          .
        </div>
      </div>
    </section>
  )
}
