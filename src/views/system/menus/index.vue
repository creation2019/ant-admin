<script setup lang="ts">
import { $listMenu } from 'API/system/menus'
import { MenuVO } from 'API/system/menus/types'
import { handleTree } from 'Utils/tree'
import { reactive, ref } from 'vue'
import { DownOutlined, UpOutlined } from '@ant-design/icons-vue'
import type { FormInstance } from 'ant-design-vue'
const expand = ref(false)
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
  console.log(' ', data)
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
          <template>
            <a-col :span="8">
              <a-form-item :name="`field-`" :label="`field`" :rules="[{ required: true, message: 'input something' }]">
                <a-input placeholder="placeholder"></a-input>
              </a-form-item>
            </a-col>
          </template>
        </a-row>
        <a-row>
          <a-col :span="24" style="text-align: right">
            <a-button type="primary" html-type="submit">Search</a-button>
            <a-button style="margin: 0 8px" @click="() => formRef?.resetFields()">Clear</a-button>
            <a style="font-size: 12px" @click="expand = !expand">
              <template v-if="expand">
                <UpOutlined />
              </template>
              <template v-else>
                <DownOutlined />
              </template>
              Collapse
            </a>
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
