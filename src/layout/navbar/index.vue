<script setup lang="ts">
import { useRouter } from 'vue-router'
import FullScreen from './fullScreen.vue'
import Logo from './logo.vue'
const router = useRouter()
const handleOut = () => {
  router.push('/login')
}
defineOptions({
  name: 'Navbar',
})
</script>

<template>
  <div class="w-full h-full flex-bc">
    <Logo />
    <div class="flex-c">
      <FullScreen />
      <a-dropdown :trigger="['click']">
        <a class="ant-dropdown-link" @click.prevent> Click me </a>
        <template #overlay>
          <a-menu>
            <a-menu-item key="4">个人中心</a-menu-item>
            <a-menu-item key="3" @click="handleOut">退出登录</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  background-color: #fff;
}
</style>
