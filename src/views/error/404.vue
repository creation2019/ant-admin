<script setup lang="ts">
defineOptions({
  name: '404',
})
</script>

<template>
  <a-result
    status="404"
    title="404"
    class="my-auto"
    sub-title="对不起，您正在寻找的页面不存在。尝试检查URL的错误，然后按浏览器上的刷新按钮或尝试在我们的应用程序中找到其他内容。"
  >
    <template #extra>
      <router-link to="/index">
        <a-button type="primary">返回首页</a-button>
      </router-link>
    </template>
  </a-result>
</template>

<style lang="scss" scoped></style>
