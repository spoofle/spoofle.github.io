import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/spoofle.github.io/', // Replace with your repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion'],
          icons: ['@fortawesome/react-fontawesome', '@fortawesome/free-solid-svg-icons']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
