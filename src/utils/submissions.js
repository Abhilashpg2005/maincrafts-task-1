// Small helper around localStorage for the Task 3 requirement: contact
// form submissions are saved in the browser and displayed back on a
// dedicated "Submissions" page. Kept in one place so the Contact form
// and the Submissions page always agree on the storage key and shape.

const STORAGE_KEY = 'contacts'

function safeParse(raw) {
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    // Corrupted or hand-edited localStorage data shouldn't crash the page.
    return []
  }
}

export function getSubmissions() {
  if (typeof window === 'undefined') return []
  return safeParse(window.localStorage.getItem(STORAGE_KEY))
}

export function saveSubmission({ name, email, message }) {
  const submissions = getSubmissions()
  const entry = {
    id:
      typeof crypto !== 'undefined' && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    email,
    message,
    submittedAt: new Date().toISOString(),
  }
  submissions.push(entry)
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions))
  return entry
}

export function clearSubmissions() {
  window.localStorage.removeItem(STORAGE_KEY)
}
