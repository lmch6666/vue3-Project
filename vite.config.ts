import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  mode: 'development',
  base: './',
  resolve: {
    alias: {
      '@': path.resolve('src')
    }
  },
  server: {
    open: true
  },
  plugins: [
    vue(),
  ]
})
