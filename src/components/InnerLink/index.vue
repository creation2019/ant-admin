<template>
  <div :style="'height:' + height" class="pt-3">
    <iframe :id="iframeId" style="width: 100%; height: 100%" :src="src" frameborder="no"></iframe>
  </div>
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: '/',
  },
  iframeId: {
    type: String,
  },
})

const height = ref(document.documentElement.clientHeight - 125 + 'px')
</script>
