<script setup lang="ts">
import { UserOutlined } from '@ant-design/icons-vue'
defineOptions({
  name: 'MenuItem',
})
</script>

<template>
  <a-menu-item key="/">
    <user-outlined />
    <span>首页</span>
  </a-menu-item>
  <a-sub-menu key="sub1">
    <template #title>
      <span>
        <user-outlined />
        <span>系统管理</span>
      </span>
    </template>
    <a-menu-item key="/system/role">角色管理</a-menu-item>
    <a-menu-item key="/system/menus">菜单管理</a-menu-item>
    <a-menu-item key="/system/post">岗位管理</a-menu-item>
    <a-menu-item key="/system/dept">部门管理</a-menu-item>
    <a-menu-item key="/system/user">账号管理</a-menu-item>
  </a-sub-menu>
  <a-sub-menu key="sub2">
    <template #title>
      <span>
        <user-outlined />
        <span>公司管理</span>
      </span>
    </template>
    <a-menu-item key="/tenant/tenantmanage">公司管理</a-menu-item>
    <a-menu-item key="/tenant/tenantpackage">套餐管理</a-menu-item>
  </a-sub-menu>
  <a-menu-item key="9">
    <span>File</span>
  </a-menu-item>
</template>

<style lang="scss" scoped>
.menu-item {
  color: red;
}
</style>
