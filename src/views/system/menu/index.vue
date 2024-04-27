<script setup lang="ts">
import { $listMenu } from 'API/system/menus'
import { MenuVO } from 'API/system/menus/types'
import { handleTree } from 'Utils/tree'
import { reactive, ref } from 'vue'

import type { FormInstance } from 'ant-design-vue'

const formRef = ref<FormInstance>()
const formState = reactive({})
const onFinish = (values: any) => {
  console.log('Received values of form: ', values)
  console.log('formState: ', formState)
}
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
    <a-card class="mb-4">
      <a-form ref="formRef" name="advanced_search" class="ant-advanced-search-form" :model="formState" @finish="onFinish">
        <a-row :gutter="24">
          <a-col :span="8">
            <a-form-item name="status" label="status" :rules="[{ required: true, message: 'input something' }]">
              <a-input v-model:value="queryParams.status" placeholder="placeholder"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item name="status" label="status" :rules="[{ required: true, message: 'input something' }]">
              <a-input v-model:value="queryParams.status" placeholder="placeholder"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8" style="text-align: right">
            <a-button type="primary" html-type="submit">搜索</a-button>
            <a-button style="margin: 0 8px" @click="() => formRef?.resetFields()">重置</a-button>
          </a-col>
        </a-row>
      </a-form>
    </a-card>
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

<style lang="scss" scoped>
.menu {
  color: red;
}
</style>
