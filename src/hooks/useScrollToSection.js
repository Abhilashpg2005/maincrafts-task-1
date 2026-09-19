import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// Scrolls to a section id when already on the home page, or navigates
// to home first (carrying the target id in router state) when on a
// different route such as /privacy or /terms.
export default function useScrollToSection() {
  const navigate = useNavigate()
  const location = useLocation()

  return useCallback(
    (id) => {
      if (location.pathname === '/') {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        navigate('/', { state: { scrollTo: id } })
      }
    },
    [location.pathname, navigate]
  )
}
