import { useEffect } from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import ContactPage from './pages/ContactPage'
import Submissions from './pages/Submissions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'

function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-paper px-6 pt-24 text-center">
      <span className="font-mono text-sm uppercase tracking-wide text-amber-600">404</span>
      <h1 className="mt-3 font-display text-3xl font-semibold text-ink">Page not found</h1>
      <p className="mt-3 max-w-sm text-sm text-ink-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </section>
  )
}

function ScrollToTopOnNavigate() {
  const location = useLocation()

  useEffect(() => {
    // Only reset scroll for full page-to-page navigation (not in-page
    // section jumps, which arrive with router state and are handled
    // separately by the Home page).
    if (!location.state?.scrollTo) {
      window.scrollTo(0, 0)
    }
  }, [location.pathname])

  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <ScrollToTopOnNavigate />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
