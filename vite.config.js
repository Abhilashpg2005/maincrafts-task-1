import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If deploying to GitHub Pages at https://<user>.github.io/<repo>/,
  // set base to '/<repo>/'. For a user/organization page or a custom
  // domain, leave it as '/'.
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
