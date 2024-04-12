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
  {
    path: '/system',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'profile',
        component: () => import('Views/system/profile/index.vue'),
        name: 'profile',
        meta: { title: '个人中心', icon: 'user' },
      },
      {
        path: 'menus',
        component: () => import('Views/system/menus/index.vue'),
        name: 'menus',
        meta: { title: '菜单管理', icon: 'user' },
      },
      {
        path: 'role',
        component: () => import('Views/system/role/index.vue'),
        name: 'role',
        meta: { title: '角色管理', icon: 'user' },
      },
      {
        path: 'post',
        component: () => import('Views/system/post/index.vue'),
        name: 'post',
        meta: { title: '岗位管理', icon: 'user' },
      },
      {
        path: 'dept',
        component: () => import('Views/system/dept/index.vue'),
        name: 'dept',
        meta: { title: '部门管理', icon: 'user' },
      },
      {
        path: 'user',
        component: () => import('Views/system/user/index.vue'),
        name: 'user',
        meta: { title: '账号管理', icon: 'user' },
      },
    ],
  },
]
