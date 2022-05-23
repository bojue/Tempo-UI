import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),  ],
  server: {
    port: 4000,
  },
  css: {
    modules: {
      generateScopedName: '[name]__[local]_[hash:base64:5]',
      hashPrefix: 'prefix',
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      },
    }
  },
  preview: {
    open: 'chrome'
  }
})
