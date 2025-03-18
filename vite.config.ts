import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@/ui': '/src/components/ui',
      '@/styles': '/src/styles',
      '@/assets': '/src/assets',
      '@/helpers': '/src/helpers',
      '@/components': '/src/components',
      '@/': '/src',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/_variables.scss" as *;`,
      },
    },
  },
})
