import { to as tos } from 'await-to-js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from 'Routes/index'
import { getToken } from '@/utils/auth'
import { isRelogin } from 'Plugins/request'
import { usePermissionStore } from 'Store/modules/permission'
import { useUserStore } from 'Store/modules/user'
import { isHttp } from 'Utils/index'

NProgress.configure({ showSpinner: false })
const whiteList = ['/login', '/register']
router.beforeEach(async (to, _from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      if (useUserStore().roles.length === 0) {
        isRelogin.show = true
        // 判断当前用户是否已拉取完user_info信息
        const [err] = await tos(useUserStore().getInfo())
        if (err) {
          await useUserStore().logout()

          next({ path: '/' })
        } else {
          isRelogin.show = false
          const accessRoutes = await usePermissionStore().generateRoutes()
          // 根据roles权限生成可访问的路由表
          accessRoutes.forEach((route) => {
            if (!isHttp(route.path)) {
              router.addRoute(route) // 动态添加可访问路由表
            }
          })
          next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
        }
      } else {
        next()
      }
    }
  } else {
    // 没有token
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
