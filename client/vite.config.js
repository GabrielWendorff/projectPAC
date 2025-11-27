import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API calls to Flask backend
      '/api': 'http://localhost:5000',
      // Proxy static assets to Flask static folder during dev
      '/static': 'http://localhost:5000'
    }
  }
})
