import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'lottie-react': require.resolve('lottie-react')
    }
  },
  build: {
    rollupOptions: {
      external: ['lottie-react']
    }
  }
})

