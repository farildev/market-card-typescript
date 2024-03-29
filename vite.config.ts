import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server : {
    port : 7000,
    host : true
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@/': '/src/',
    },
  },
})
