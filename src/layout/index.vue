<script setup lang="ts">
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import Navbar from './navbar/index.vue'
import AppMain from './appmain/index.vue'

import Tag from './components/tag/index.vue'

import Sidebar from './sidebar/index.vue'

const collapsed = ref<boolean>(false)

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
        <Sidebar />
      </a-layout-sider>
      <a-layout style="position: relative; overflow: auto">
        <Tag />
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
