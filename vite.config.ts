// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/', // Replace with your repository name
//   build: {
//     outDir: 'dist',
//     assetsDir: 'assets',
//     sourcemap: true,
//     minify: 'esbuild',
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           vendor: ['react', 'react-dom', 'react-router-dom'],
//           animations: ['framer-motion'],
//           icons: ['@fortawesome/react-fontawesome', '@fortawesome/free-solid-svg-icons']
//         }
//       }
//     }
//   },
//   server: {
//     port: 3000,
//     open: true
//   }
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/'
})