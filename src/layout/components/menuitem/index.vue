<script setup lang="ts">
import { UserOutlined } from '@ant-design/icons-vue'
import { isExternal, getNormalPath } from 'Utils/index'
import AppLink from '../applink/index.vue'
import { RouteOption } from 'vue-router'
import { PropType } from 'vue'
import MenuItem from '../menuitem/index.vue'
const props = defineProps({
  item: {
    type: Object as PropType<RouteOption>,
    required: true,
  },
  isNest: {
    type: Boolean,
    default: false,
  },
  basePath: {
    type: String,
    default: '',
  },
})
const onlyOneChild = ref<any>({})

const hasOneShowingChild = (children: RouteOption[] = [], parent: RouteOption) => {
  if (!children) {
    children = []
  }
  const showingChildren = children.filter((item) => {
    if (item.hidden) {
      return false
    } else {
      // Temp set(will be used if only has one showing child)
      onlyOneChild.value = item
      return true
    }
  })

  // When there is only one child router, the child router is displayed by default
  if (showingChildren.length === 1) {
    return true
  }

  // Show parent if there are no child router to display
  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, path: '', noShowingChildren: true }
    return true
  }

  return false
}

const resolvePath = (routePath: string, routeQuery?: string): any => {
  if (isExternal(routePath)) {
    return routePath
  }
  if (isExternal(props.basePath)) {
    return props.basePath
  }

  if (routeQuery) {
    let query = JSON.parse(routeQuery)
    return { path: getNormalPath(props.basePath + '/' + routePath), query: query }
  }

  return getNormalPath(props.basePath + '/' + routePath)
}

defineOptions({
  name: 'MenuItem',
})
</script>

<template>
  <a-menu-item
    :key="resolvePath(onlyOneChild.path)"
    v-if="!item.hidden && hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow"
  >
    <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path, onlyOneChild.query)">
      <user-outlined />
      <span>{{ onlyOneChild.meta?.title }}</span>
    </app-link>
  </a-menu-item>
  <a-sub-menu v-else-if="!item.hidden" :key="resolvePath(item.path)">
    <template #title>
      <user-outlined />
      <span>{{ item.meta?.title }}</span>
    </template>
    <menu-item v-for="child in item.children" :key="child.path" :is-nest="true" :item="child" :basePath="resolvePath(child.path)" class="nest-menu" />
  </a-sub-menu>
</template>

<style lang="scss" scoped></style>
