<script setup lang="ts">
import { PieChartOutlined, UserOutlined, TeamOutlined, FileOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import Navbar from './navbar/index.vue'
import AppMain from './components/appMain.vue'
import { MenuProps } from 'ant-design-vue'
// import Tag from './components/tag/index.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const collapsed = ref<boolean>(false)
const selectedKeys = ref<string[]>(['1'])
const handleClick: MenuProps['onClick'] = ({ key }) => {
  router.push({ path: key as string })
}

defineOptions({
  name: 'Layout',
})
</script>

<template>
  <a-layout class="app-wrapper">
    <a-layout-header class="app-header">
      <Navbar />
    </a-layout-header>
    <a-layout>
      <a-layout-sider v-model:collapsed="collapsed" collapsible style="background: #fff" class="app-sider">
        <template #trigger>
          <div>
            <MenuUnfoldOutlined v-if="collapsed" />
            <MenuFoldOutlined v-else />
          </div>
        </template>
        <a-menu v-model:selectedKeys="selectedKeys" mode="inline" @click="handleClick">
          <a-menu-item key="/">
            <pie-chart-outlined />
            <span>首页</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                <span>系统管理</span>
              </span>
            </template>
            <a-menu-item key="/system/role">角色管理</a-menu-item>
            <a-menu-item key="/system/menus">菜单管理</a-menu-item>
            <a-menu-item key="/system/post">岗位管理</a-menu-item>
            <a-menu-item key="/system/dept">部门管理</a-menu-item>
            <a-menu-item key="/system/user">账号管理</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <team-outlined />
                <span>Team</span>
              </span>
            </template>
            <a-menu-item key="6">Team 1</a-menu-item>
            <a-menu-item key="8">Team 2</a-menu-item>
          </a-sub-menu>
          <a-menu-item key="9">
            <file-outlined />
            <span>File</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout style="position: relative; overflow: auto">
        <!-- <Tag /> -->
        <a-layout-content>
          <AppMain />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;

  &::after {
    display: table;
    clear: both;
    content: '';
  }
}

.app-header {
  background-color: #fff;
}

.app-sider {
  :deep(.ant-layout-sider-children) {
    overflow-y: auto;
  }
}
</style>
