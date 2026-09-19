/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#080E1A',
          900: '#0A1628',
          800: '#142440',
          700: '#1C3358',
          600: '#2B4A78',
        },
        paper: {
          DEFAULT: '#F5F6F8',
          soft: '#ECEEF2',
        },
        ink: {
          DEFAULT: '#101826',
          soft: '#3B4658',
          muted: '#6B7688',
        },
        amber: {
          400: '#F0AC5C',
          500: '#E2963C',
          600: '#C97C24',
        },
        skyline: {
          400: '#6C97FF',
          500: '#3E7BFA',
          600: '#2C5FD6',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'blueprint-grid':
          'linear-gradient(rgba(62, 123, 250, 0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(62, 123, 250, 0.16) 1px, transparent 1px)',
        'hero-glow':
          'radial-gradient(60% 55% at 78% 22%, rgba(226, 150, 60, 0.28) 0%, rgba(226, 150, 60, 0) 60%), radial-gradient(45% 45% at 10% 85%, rgba(62, 123, 250, 0.24) 0%, rgba(62, 123, 250, 0) 60%)',
      },
      boxShadow: {
        card: '0 1px 2px rgba(16, 24, 38, 0.04), 0 8px 24px -8px rgba(16, 24, 38, 0.12)',
        'card-hover': '0 4px 8px rgba(16, 24, 38, 0.06), 0 20px 40px -12px rgba(16, 24, 38, 0.18)',
        glow: '0 0 0 1px rgba(226, 150, 60, 0.25), 0 8px 30px -6px rgba(226, 150, 60, 0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'draw-line': {
          '0%': { strokeDashoffset: '340' },
          '100%': { strokeDashoffset: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'draw-line': 'draw-line 1.8s ease-out 0.3s both',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
