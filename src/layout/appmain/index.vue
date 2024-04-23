<script setup lang="ts">
import useTagsViewStore from 'Store/modules/tagsView'
import IframeToggle from '../components/IframeToggle/index.vue'
const tagsViewStore = useTagsViewStore()
defineOptions({
  name: 'AppMain',
})
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive :include="tagsViewStore.cachedViews">
      <component v-if="!route.meta.link" :is="Component" :key="route.path" class="main-content" />
    </keep-alive>
  </router-view>
  <iframe-toggle />
</template>

<style lang="scss" scoped>
.main-content {
  position: relative;
  overflow-x: hidden;
  padding: 8px;
  width: 100%;
  height: 100%;
}
</style>
