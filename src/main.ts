import { createApp } from 'vue'
import App from './App.vue'

// 引入重置样式
import '@/assets/style/reset.scss'
import '@/assets/style/index.scss'
// 一定要在main.ts中导入tailwind.css，防止vite每次hmr都会请求src/style/index.scss整体css文件导致热更新慢的问题
import '@/assets/style/tailwind.css'

import { setupRouter } from 'Routes/index'
import { setupStore } from 'Store/index'

// 注册插件
import plugins from 'Plugins/index'

import 'Plugins/permission'

const app = createApp(App)
async function setupApp() {
  // 挂载pinia状态管理
  setupStore(app)
  // 挂载路由
  await setupRouter(app)
  app.use(plugins)

  app.mount('#app')
}

setupApp()
