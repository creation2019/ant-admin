import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      dts: path.resolve(path.resolve(__dirname, './src'), 'types', 'auto-imports.d.ts'),
    }),
  ],
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
      Assets: path.resolve(__dirname, 'src/assets'),
      Views: path.resolve(__dirname, 'src/views'),
      Components: path.resolve(__dirname, 'src/components'),
      Utils: path.resolve(__dirname, 'src/utils'), // 工具类方法（新创建的）
      Routes: path.resolve(__dirname, 'src/routes'),
      Plugins: path.resolve(__dirname, 'src/plugins'),
      API: path.resolve(__dirname, 'src/api'),
      Store: path.resolve(__dirname, 'src/store'),
    },
  },
})
