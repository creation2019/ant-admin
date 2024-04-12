<script setup lang="ts">
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'
import { createVNode } from 'vue'
import { useRouter } from 'vue-router'
import FullScreen from './fullScreen.vue'
import { Modal } from 'ant-design-vue'
import Logo from './logo.vue'
import { useUserStore } from 'Store/modules/user'
const router = useRouter()
const userStore = useUserStore()

const handleOut = () => {
  Modal.confirm({
    title: '提示',
    icon: createVNode(ExclamationCircleOutlined),
    content: '是否要退出系统?',
    centered: true,
    okType: 'danger',
    async onOk() {
      await userStore.logout()
      router.push('/login')
    },
    onCancel() {},
  })
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
            <a-menu-item key="4">
              <router-link to="/system/profile"> 个人中心 </router-link>
            </a-menu-item>
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
