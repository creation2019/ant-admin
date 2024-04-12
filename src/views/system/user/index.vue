<script setup lang="ts">
defineOptions({
  name: 'User',
})
</script>

<template>
  <div>
    <a-row :gutter="16" class="h-full">
      <a-col class="gutter-row" :span="3">
        <div class="gutter-box">col-6</div>
      </a-col>
      <a-col class="gutter-row" :span="21">
        <div class="gutter-box">col-6</div>
      </a-col>
    </a-row>
  </div>
</template>

<style lang="scss" scoped>
.gutter-row {
  height: 100%;

  .gutter-box {
    background-color: aqua;
  }
}
</style>
