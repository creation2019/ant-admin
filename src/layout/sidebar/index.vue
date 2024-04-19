<script setup lang="ts">
import { MenuProps } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import MenuItem from '../components/menuitem/index.vue'
const router = useRouter()
const selectedKeys = ref<string[]>(['1'])
const handleClick: MenuProps['onClick'] = ({ key }) => {
  router.push({ path: key as string })
}
defineOptions({
  name: 'Sidebar',
})
</script>

<template>
  <a-menu v-model:selectedKeys="selectedKeys" mode="inline" @click="handleClick">
    <menu-item />
  </a-menu>
</template>

<style lang="scss" scoped></style>
