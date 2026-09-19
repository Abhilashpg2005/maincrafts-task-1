import { useState } from 'react'
import { Mail, Globe, CheckCircle2, Loader2, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteInfo } from '../data/content'
import { saveSubmission } from '../utils/submissions'

const initialValues = { name: '', email: '', message: '' }

function validate(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
  } else if (values.name.trim().length < 2) {
    errors.name = 'Name should be at least 2 characters.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.message.trim()) {
    errors.message = 'Please add a short message.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }

  return errors
}

export default function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (touched[name]) {
      setErrors(validate({ ...values, [name]: value }))
    }
  }

  const handleBlur = (event) => {
    const { name } = event.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors(validate(values))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setTouched({ name: true, email: true, message: true })

    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')
    // No backend is wired up for this project — we save the submission to
    // the browser's localStorage instead, and simulate a short delay so
    // the UI clearly demonstrates a real submit flow.
    window.setTimeout(() => {
      try {
        saveSubmission(values)
        setStatus('success')
        setValues(initialValues)
        setTouched({})
        setErrors({})
      } catch (err) {
        // localStorage can throw in private-browsing modes or when full.
        console.error('Could not save submission to localStorage', err)
        setStatus('error')
      }
    }, 700)
  }

  if (status === 'success') {
    return (
      <section id="contact" className="bg-paper py-24 sm:py-28">
        <div className="container-x">
          <div className="mx-auto flex max-w-lg flex-col items-center rounded-3xl border border-ink/8 bg-white px-8 py-14 text-center shadow-card animate-fade-up">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/15 text-amber-600">
              <CheckCircle2 size={28} aria-hidden="true" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-semibold text-ink">
              Message received
            </h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
              Thanks for reaching out. This demo form doesn&apos;t send a real
              email yet, but your details were validated and saved in this
              browser&apos;s local storage.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => setStatus('idle')} className="btn-outline">
                Send another message
              </button>
              <Link to="/submissions" className="btn-primary">
                View submissions
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (status === 'error') {
    return (
      <section id="contact" className="bg-paper py-24 sm:py-28">
        <div className="container-x">
          <div className="mx-auto flex max-w-lg flex-col items-center rounded-3xl border border-red-200 bg-white px-8 py-14 text-center shadow-card animate-fade-up">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Couldn&apos;t save your message
            </h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
              Your browser blocked local storage (this can happen in private
              browsing mode). Your message wasn&apos;t lost — please try
              again.
            </p>
            <button onClick={() => setStatus('idle')} className="btn-outline mt-8">
              Try again
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-paper py-24 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <span className="eyebrow text-skyline-600">Get in touch</span>
          <h2 className="section-label mt-3">Let&apos;s scope your build</h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-muted">
            Send a few details about what you&apos;re building and we&apos;ll
            follow up with next steps and a rough timeline.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={`mailto:${siteInfo.email}`}
              className="flex items-center gap-3 rounded-xl border border-ink/8 bg-white px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-amber-500/40"
            >
              <Mail size={18} className="text-amber-600" aria-hidden="true" />
              {siteInfo.email}
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-ink/8 bg-white px-4 py-3 text-sm font-medium text-ink">
              <Globe size={18} className="text-skyline-600" aria-hidden="true" />
              {siteInfo.website}
            </div>
          </div>
        </div>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="rounded-3xl border border-ink/8 bg-white p-6 shadow-card sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="block font-body text-sm font-medium text-ink">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(touched.name && errors.name)}
                aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
                className={`mt-2 w-full rounded-xl border bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-amber-500 ${
                  touched.name && errors.name ? 'border-red-400' : 'border-ink/10'
                }`}
                placeholder="Jane Doe"
              />
              {touched.name && errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="email" className="block font-body text-sm font-medium text-ink">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(touched.email && errors.email)}
                aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                className={`mt-2 w-full rounded-xl border bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-amber-500 ${
                  touched.email && errors.email ? 'border-red-400' : 'border-ink/10'
                }`}
                placeholder="jane@company.com"
              />
              {touched.email && errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block font-body text-sm font-medium text-ink">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(touched.message && errors.message)}
                aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
                className={`mt-2 w-full resize-none rounded-xl border bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-amber-500 ${
                  touched.message && errors.message ? 'border-red-400' : 'border-ink/10'
                }`}
                placeholder="Tell us a bit about your project…"
              />
              {touched.message && errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-500">
                  {errors.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="btn-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                Sending…
              </>
            ) : (
              <>
                Send message
                <Send size={16} aria-hidden="true" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
