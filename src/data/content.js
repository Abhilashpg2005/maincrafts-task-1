// Central content data for MainCrafts. Keeping copy and card data here
// keeps components lean and data-driven instead of duplicating JSX.

export const services = [
  {
    id: 'web-design',
    title: 'Web Design',
    description:
      'Clean, purposeful interfaces built around your users, not just your brand guide. Wireframes to pixel-perfect UI.',
    icon: 'PenTool',
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description:
      'Production-grade front and back ends built on modern frameworks, with performance and maintainability baked in.',
    icon: 'Code2',
  },
  {
    id: 'app-development',
    title: 'App Development',
    description:
      'Cross-platform mobile experiences that feel native, ship fast, and stay easy to extend as your product grows.',
    icon: 'Smartphone',
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimization',
    description:
      'Technical audits, on-page fixes, and content structure that help the right people actually find what you built.',
    icon: 'TrendingUp',
  },
]

export const features = [
  {
    id: 'fast',
    title: 'Fast',
    description:
      'Optimized builds and lean assets mean pages that load in a blink, not a spinner — on any connection.',
    icon: 'Zap',
  },
  {
    id: 'responsive',
    title: 'Responsive',
    description:
      'Every layout is drafted mobile-first and tested across real breakpoints, so it holds up on any screen.',
    icon: 'LayoutGrid',
  },
  {
    id: 'scalable',
    title: 'Scalable',
    description:
      'Component-driven architecture that grows cleanly from a landing page to a full product without a rewrite.',
    icon: 'Layers',
  },
  {
    id: 'secure',
    title: 'Secure',
    description:
      'Sensible defaults, validated inputs, and modern best practices keep your project safe from day one.',
    icon: 'ShieldCheck',
  },
]

export const navLinks = [
  { label: 'Home', to: '/#home' },
  { label: 'Features', to: '/#features' },
  { label: 'Services', to: '/#services', hasDropdown: true },
  { label: 'Contact', to: '/#contact' },
]

export const aboutContent = {
  intro:
    'MainCrafts is a small full-stack studio that designs and builds fast, responsive, scalable web experiences — from the first wireframe to the day a product ships.',
  mission:
    'We believe good software should feel effortless to use and painless to maintain. Every project we take on is built with clean code, sensible defaults, and a real person on the other end of the inbox.',
  stats: [
    { label: 'Projects shipped', value: '40+' },
    { label: 'Avg. delivery time', value: '2–4 wks' },
    { label: 'Client satisfaction', value: '99%' },
  ],
  values: [
    {
      id: 'craft',
      title: 'Craftsmanship',
      description:
        'We sweat the details others skip — spacing, states, accessibility — because they add up to a product that feels considered.',
      icon: 'PenTool',
    },
    {
      id: 'transparency',
      title: 'Transparency',
      description:
        'Clear timelines, honest estimates, and no surprise scope. You always know what is being built and why.',
      icon: 'ShieldCheck',
    },
    {
      id: 'partnership',
      title: 'Partnership',
      description:
        'We work like an extension of your team, not an outside vendor — sharing context and decisions along the way.',
      icon: 'Layers',
    },
  ],
  team: [
    { name: 'Aditi Rao', role: 'Founder & Full-Stack Engineer' },
    { name: 'Rohan Mehta', role: 'Product Designer' },
    { name: 'Sana Iqbal', role: 'Frontend Engineer' },
  ],
}

export const siteInfo = {
  name: 'MainCrafts',
  tagline: 'Build Smarter with MainCrafts',
  email: 'hr@maincrafts.com',
  website: 'www.maincrafts.com',
  // The Task 1 brief specifies "Copyright © 2025" in the footer, so this
  // is set explicitly rather than derived from the current date.
  year: 2025,
}
