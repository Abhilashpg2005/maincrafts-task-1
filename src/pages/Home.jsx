import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Services from '../components/Services'
import CTA from '../components/CTA'

export default function Home() {
  const location = useLocation()
  const navigate = useNavigate()

  // If we arrived here from another route with a requested section
  // (see useScrollToSection), scroll to it once the page has mounted.
  useEffect(() => {
    const targetId = location.state?.scrollTo
    if (!targetId) return

    const timer = window.setTimeout(() => {
      const el = document.getElementById(targetId)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      navigate(location.pathname, { replace: true, state: {} })
    }, 80)

    return () => window.clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Hero />
      <Features />
      <Services />
      <CTA />
    </>
  )
}
