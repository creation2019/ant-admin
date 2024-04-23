import { createWebHistory, createRouter, RouteOption } from 'vue-router'
import { App } from 'vue'

import Layout from '@/layout/index.vue'

export const constantRoutes: RouteOption[] = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        component: () => import('Views/welcome/index.vue'),
        name: 'Index',
        meta: { title: '首页', icon: 'menu-shouye', affix: true },
      },
    ],
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    meta: {
      icon: '',
      title: '加载中...',
      showLink: false,
    },
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'Redirect',
        component: () => import('@/layout/redirect/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('Views/login/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/error/404.vue'),
    hidden: true,
  },
]

export const dynamicRoutes: RouteOption[] = []

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_CONTEXT_PATH),
  routes: constantRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior(_to: any, _from: any, savedPosition: any) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})
export async function setupRouter(app: App) {
  app.use(router)
  // 路由准备就绪后挂载APP实例
  await router.isReady()
}

export default router
