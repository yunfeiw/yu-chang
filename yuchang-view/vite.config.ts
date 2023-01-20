/*
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-20 18:51:44
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ['@yuchang/design']
  }
})
