<!--
 * @Description: 菜单管理
 * @Author: zhougui
 * @Date: 2024-04-24 16:03:48
 * @LastEditors: zhougui
 * @LastEditTime: 2024-05-07 09:29:38
-->

<script setup lang="ts">
import { $listMenu } from 'API/system/menus'
import { MenuVO } from 'API/system/menus/types'
import { handleTree } from 'Utils/tree'
import { reactive, ref } from 'vue'

import type { FormInstance } from 'ant-design-vue'

const formRef = ref<FormInstance>()
const formState = reactive({})

const dataSource = ref<MenuVO[]>([])
const queryParams = ref({
  menuName: undefined,
  status: undefined,
})

const columns = [
  {
    title: '菜单名称',
    dataIndex: 'menuName',
    key: 'menuName',
  },
  {
    title: '排序',
    dataIndex: 'orderNum',
    key: 'orderNum ',
  },
  {
    title: '权限标识',
    dataIndex: 'perms',
    key: 'perms',
  },
  {
    title: '组件路径',
    dataIndex: 'component',
    key: 'component',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: '操作',
    dataIndex: 'createTime',
    key: 'createTime',
  },
]
/** 查询菜单列表 */
const getList = async () => {
  const res = await $listMenu(queryParams.value)
  const data = handleTree(res.data, 'menuId')
  if (data) {
    dataSource.value = data as MenuVO[]
  }
}
onMounted(() => {
  getList()
})
defineOptions({
  name: 'Menus',
})
</script>

<template>
  <div>
    <a-form ref="formRef" name="advanced_search" class="zg-query-form" :model="formState">
      <a-row class="zg-query-form-row">
        <a-form-item name="status" label="菜单名称" class="zg-query-form-item">
          <a-input v-model:value="queryParams.status" placeholder="placeholder"></a-input>
        </a-form-item>
        <a-form-item name="status" label="状态" class="zg-query-form-item">
          <a-input v-model:value="queryParams.status" placeholder="placeholder"></a-input>
        </a-form-item>
        <a-form-item class="zg-query-form-item zg-margin-left10">
          <a-button type="primary" class="zg-margin-right10">搜索</a-button>
          <a-button>重置</a-button>
        </a-form-item>
      </a-row>
    </a-form>
    <a-card :bordered="false">
      <a-table
        :dataSource="dataSource"
        :columns="columns"
        :pagination="false"
        rowKey="menuId"
        :rowClassName="(_record: any, index: number) => (index % 2 === 1 ? 'table-striped' : undefined)"
        class="h-full"
      />
    </a-card>
  </div>
</template>

<style lang="scss" scoped></style>
