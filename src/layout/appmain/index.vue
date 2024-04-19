<script setup lang="ts">
defineOptions({
  name: 'AppMain',
})
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition>
      <keep-alive>
        <component v-if="!route.meta.link" :is="Component" :key="route.path" class="main-content" />
      </keep-alive>
    </transition>
  </router-view>
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
