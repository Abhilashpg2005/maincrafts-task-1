# MainCrafts Task 3

## Description

A visually polished, fully responsive **multi-page website** for
**MainCrafts**, built for the MainCrafts Full Stack Web Development
Internship — Task 3. Task 2 delivered the multi-page site (Home, About,
Contact); Task 3 adds **JavaScript interactivity**: the Contact form now
validates and saves every submission to the browser's **LocalStorage**,
and a new **Submissions** page reads that data back and displays it,
while keeping the "blueprint / craft" visual identity (deep navy, copper
accent, blueprint-grid motifs) from Tasks 1 and 2.

## What's new in Task 3

- **LocalStorage-backed contact form** — on successful validation, the
  Contact form saves `{ name, email, message, submittedAt }` to
  `localStorage` under the `contacts` key via `src/utils/submissions.js`,
  instead of only showing a success message.
- **Submissions page** (`/submissions`) — reads all saved entries from
  `localStorage` and lists them newest-first, with an empty state when
  there's nothing saved yet and a "Clear all" action to reset storage.
- **Graceful storage handling** — if `localStorage` is unavailable (e.g.
  strict private-browsing mode), the form shows a clear error state
  instead of silently losing the message.
- **Cross-tab sync** — the Submissions page listens for the browser's
  `storage` event, so if you submit the form in one tab it updates in
  another without a manual refresh.
- **Navigation & footer** updated with a "Submissions" link alongside
  Home / About / Contact.
- **Privacy Policy** updated to accurately describe that contact data is
  stored locally in the browser (not sent to a server) and how to clear
  it.

## What's new in Task 2 (carried forward)

- **Multi-page navigation** — the navbar links to real, separate routes
  (`/`, `/about`, `/contact`, `/submissions`) using React Router `Link` /
  `NavLink`, with the current page highlighted.
- **About page** — mission statement, company stats, "how we work" values
  cards, and a team section, all data-driven from `src/data/content.js`.
- **Standalone Contact page** — the contact form lives on its own
  `/contact` route with a dedicated page header.
- **Responsive navbar** — desktop dropdown for Services (an in-page
  section on Home) plus a mobile hamburger menu, both fully keyboard
  accessible.

## Features

- **Header & navigation** — sticky navbar with logo/brand, real Home /
  About / Contact / Submissions page links, a working Services
  **dropdown** (desktop hover/click + mobile accordion), plus a
  responsive hamburger menu with an open/close animation.
- **Hero section** — the required "Build Smarter with MainCrafts" headline,
  supporting tagline, a primary CTA ("Get Started") linking to `/contact`,
  a gradient/blueprint background, and an animated SVG "build path"
  illustration.
- **Features section** — four data-driven cards (Fast, Responsive,
  Scalable, Secure) with icons and hover animations.
- **Services section** — four service cards (Web Design, Web Development,
  App Development, SEO Optimization) mirrored in the nav dropdown.
- **Secondary CTA banner** — "Ready to build something great?" with an
  "Apply Now" action linking to `/contact`.
- **About page** — mission, stats, values, and team sections.
- **Contact page** — a client-side validated form (name, email, message)
  with inline error states, required-field checks (per the task brief)
  plus email-format and minimum-length validation, all in JavaScript
  `onSubmit` before anything is saved. On success, the submission is
  written to `localStorage` and the user is offered a link straight to
  the Submissions page. No backend is wired up; the UI is honest about
  that rather than pretending an email was sent.
- **Submissions page** — displays every saved submission (see "What's new
  in Task 3" above).
- **Footer** — brand blurb, quick links (Home / About / Contact /
  Submissions), services list, contact details, social icons, Privacy
  Policy / Terms / Contact links, and a dynamic copyright year.
- **Privacy Policy & Terms & Conditions** — full standalone pages, routed
  with React Router.
- **Fully responsive** — CSS Grid & Flexbox throughout, tested down to
  375px, with no horizontal scrolling, overlap, or broken layout at any
  breakpoint.
- **Accessible** — semantic HTML, proper heading hierarchy, labeled
  controls, visible focus states, keyboard-operable dropdown and menu,
  and `prefers-reduced-motion` support.
- **SEO-ready** — descriptive `<title>`, meta description, viewport tag,
  Open Graph / Twitter meta tags, and semantic landmark structure.

## Technologies Used

- [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) (`HashRouter`, for static-host
  compatibility such as GitHub Pages)
- [Tailwind CSS](https://tailwindcss.com/) with a custom design-token
  theme (colors, fonts, shadows, keyframes)
- [Lucide React](https://lucide.dev/) icons
- Google Fonts: **Space Grotesk** (display), **Inter** (body),
  **JetBrains Mono** (labels/eyebrows)

## Project Structure

```
maincrafts-task-3/
│
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── README.md
├── .gitignore
├── .eslintrc.cjs
│
├── public/
│   └── favicon.svg
│
└── src/
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── Features.jsx
    │   ├── Services.jsx
    │   ├── CTA.jsx
    │   ├── Contact.jsx         ← saves to LocalStorage (Task 3)
    │   ├── Footer.jsx
    │   └── LegalLayout.jsx
    ├── pages/
    │   ├── Home.jsx
    │   ├── About.jsx
    │   ├── ContactPage.jsx
    │   ├── Submissions.jsx     ← new in Task 3
    │   ├── PrivacyPolicy.jsx
    │   └── Terms.jsx
    ├── data/
    │   └── content.js
    ├── hooks/
    │   └── useScrollToSection.js
    ├── utils/
    │   └── submissions.js      ← new in Task 3 (LocalStorage helpers)
    ├── App.jsx
    ├── main.jsx
    └── index.css
```

## Installation

```bash
npm install
```

## Run

```bash
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

## Build

```bash
npm run build
```

Output is generated in `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## Deployment

### Deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. Install the `gh-pages` package as a dev dependency:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add these two entries to `package.json`:
   ```json
   "homepage": "https://<your-username>.github.io/<your-repo-name>",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. `vite.config.js` already sets `base: './'`, so asset paths resolve
   correctly on GitHub Pages without further changes. The app uses
   `HashRouter`, so client-side routes (`/#/privacy`, `/#/terms`) work
   correctly on a static host without server-side rewrite rules.
5. Deploy:
   ```bash
   npm run deploy
   ```
6. In your GitHub repository settings, under **Pages**, set the source
   branch to `gh-pages` (created automatically by the command above).

## Internship

**MainCrafts Full Stack Web Development Internship – Task 3**
