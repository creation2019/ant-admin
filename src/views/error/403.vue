<script setup lang="ts">
defineOptions({
  name: '403',
})
</script>

<template>
  <a-result status="403" title="403" sub-title="Sorry, you are not authorized to access this page.">
    <template #extra>
      <a-button type="primary">Back Home</a-button>
    </template>
  </a-result>
</template>

<style lang="scss" scoped></style>
