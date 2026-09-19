import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-950 pb-4 pt-32 sm:pt-36">
        <div className="container-x">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let&apos;s talk about your project
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
            Fill in the form below and we&apos;ll get back to you within one business day.
          </p>
        </div>
      </section>
      <Contact />
    </>
  )
}
