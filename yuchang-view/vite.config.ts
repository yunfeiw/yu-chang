/*
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-20 18:51:44
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [vue(), vueJsx()],

  // 应对文件加载
  server: {
    fs: {
      strict: false
    }
  },

  optimizeDeps: {
    include: ['@yuchang/design']
  }
})
