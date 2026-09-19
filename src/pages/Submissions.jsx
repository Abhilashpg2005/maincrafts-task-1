import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Inbox, Mail, Trash2, ArrowRight } from 'lucide-react'
import { getSubmissions, clearSubmissions } from '../utils/submissions'

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleString(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short',
    })
  } catch {
    return iso
  }
}

export default function Submissions() {
  const [submissions, setSubmissions] = useState([])

  // Read from localStorage on mount. Also re-read if another tab writes
  // to the same key, so this page stays in sync without a refresh.
  useEffect(() => {
    setSubmissions(getSubmissions())

    function onStorage(event) {
      if (event.key === 'contacts' || event.key === null) {
        setSubmissions(getSubmissions())
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const handleClear = () => {
    if (!window.confirm('Delete all saved submissions from this browser? This cannot be undone.')) {
      return
    }
    clearSubmissions()
    setSubmissions([])
  }

  return (
    <section className="bg-paper min-h-[70vh] pb-24 pt-32 sm:pt-36">
      <div className="container-x max-w-3xl">
        <span className="eyebrow text-skyline-600">Task 3 · LocalStorage</span>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Submissions
            </h1>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-muted sm:text-base">
              Every message sent through the Contact page is saved to this
              browser&apos;s <code className="rounded bg-ink/5 px-1.5 py-0.5 text-xs">localStorage</code>{' '}
              and listed here — no backend or database involved.
            </p>
          </div>

          {submissions.length > 0 && (
            <button
              onClick={handleClear}
              className="inline-flex items-center gap-2 rounded-full border border-red-200 px-4 py-2 font-display text-sm font-semibold text-red-500 transition-colors hover:bg-red-50"
            >
              <Trash2 size={15} aria-hidden="true" />
              Clear all
            </button>
          )}
        </div>

        {submissions.length === 0 ? (
          <div className="mt-10 flex flex-col items-center rounded-3xl border border-dashed border-ink/15 bg-white px-8 py-16 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/15 text-amber-600">
              <Inbox size={26} aria-hidden="true" />
            </div>
            <h2 className="mt-5 font-display text-xl font-semibold text-ink">
              No submissions yet
            </h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
              Send a message from the Contact page and it will show up here
              automatically.
            </p>
            <Link to="/contact" className="btn-primary mt-8">
              Go to Contact
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        ) : (
          <ul className="mt-8 space-y-4">
            {submissions
              .slice()
              .reverse()
              .map((entry) => (
                <li
                  key={entry.id}
                  className="rounded-2xl border border-ink/8 bg-white p-6 shadow-card"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-base font-semibold text-ink">
                      {entry.name}
                    </h3>
                    {entry.submittedAt && (
                      <span className="font-mono text-xs text-ink-muted">
                        {formatDate(entry.submittedAt)}
                      </span>
                    )}
                  </div>
                  <a
                    href={`mailto:${entry.email}`}
                    className="mt-1 inline-flex items-center gap-1.5 text-sm text-skyline-600 hover:underline"
                  >
                    <Mail size={13} aria-hidden="true" />
                    {entry.email}
                  </a>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{entry.message}</p>
                </li>
              ))}
          </ul>
        )}
      </div>
    </section>
  )
}
