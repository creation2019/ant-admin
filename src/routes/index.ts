import Layout from '@/layout/index.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/welcome',
    meta: {
      icon: 'ep:home-filled',
      title: '首页',
    },
    children: [
      {
        path: '/welcome',
        name: 'Welcome',
        component: () => import('Views/welcome/index.vue'),
        meta: {
          title: '首页',
        },
      },
    ],
  },
  {
    path: '/redirect',
    component: Layout,
    meta: {
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
  { path: '/login', name: 'login', component: () => import('Views/login/index.vue') },
]
