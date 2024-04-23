<script setup lang="ts">
import { useRoute } from 'vue-router'
import MenuItem from '../components/menuitem/index.vue'
import { usePermissionStore } from 'Store/modules/permission'
const permissionStore = usePermissionStore()
const sidebarRouters = computed(() => permissionStore.sidebarRouters)
const selectedKeys = computed(() => {
  const { meta, path } = route
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return [meta.activeMenu as string]
  }
  return [path]
})
const route = useRoute()

defineOptions({
  name: 'Sidebar',
})
</script>

<template>
  <a-menu v-model:selectedKeys="selectedKeys" mode="inline" :inlineIndent="16">
    <menu-item v-for="(route, index) in sidebarRouters" :key="route.path + index" :item="route" :base-path="route.path" />
  </a-menu>
</template>

<style lang="scss" scoped></style>
