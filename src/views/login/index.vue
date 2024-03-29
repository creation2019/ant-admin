<script setup lang="ts">
defineOptions({
  name: 'Login',
})
</script>

<template>
  <div class="select-none">
    <div class="login-container">
      <div class="login-box"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  display: grid;
  place-items: center center;
  padding: 0 2rem;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
}

.login-box {
  width: 50%;
  height: 560px;
  background-color: aqua;
}
</style>
