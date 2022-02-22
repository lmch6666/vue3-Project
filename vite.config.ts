import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 设置别名
    alias: {
    }
  },
  server: {
    open: true
  },
  plugins: [
    vue(),
  ]
})
