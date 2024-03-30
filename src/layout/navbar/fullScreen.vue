<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'
import { ExpandOutlined, CompressOutlined } from '@ant-design/icons-vue'
const { isFullscreen, toggle } = useFullscreen()
</script>

<template>
  <span class="fullscreen-icon navbar-bg-hover" @click="toggle">
    <CompressOutlined v-if="isFullscreen" />
    <ExpandOutlined v-else />
  </span>
</template>

<style scoped lang="scss">
.fullscreen-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 48px;
  cursor: pointer;
}
</style>
