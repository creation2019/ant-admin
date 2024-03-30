import { UserConfig, ConfigEnv, loadEnv, defineConfig } from 'vite'
import createPlugins from './plugins'
import * as path from 'path'

export default defineConfig(({ mode, command }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd())
  return {
    base: env.VITE_APP_CONTEXT_PATH,
    plugins: createPlugins(env, command === 'build'),
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
    server: {
      host: '0.0.0.0',
      port: Number(env.VITE_APP_PORT),
      open: true,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_BASE_URL,
          ws: true,
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), ''),
        },
      },
    },
    build: {
      target: 'ESNext',
      minify: 'esbuild',
      // rollup 配置
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
          entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
          assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
        },
      },
    },
  }
})
