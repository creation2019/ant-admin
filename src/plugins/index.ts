import tab from './tab'
import auth from './auth'

import { App } from 'vue'

export default function installPlugin(app: App) {
  // 页签操作
  app.config.globalProperties.$tab = tab

  // 认证对象
  app.config.globalProperties.$auth = auth
}
