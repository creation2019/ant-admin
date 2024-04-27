<script setup lang="ts">
import type { TreeProps } from 'ant-design-vue'
const dataSource = ref<any[]>([])
const columns = [
  {
    title: '用户编号',
    dataIndex: 'userId',
    key: 'userId',
  },
  {
    title: '用户名称',
    dataIndex: 'userName',
    key: 'userName ',
  },
  {
    title: '用户昵称',
    dataIndex: 'nickName',
    key: 'nickName',
  },
  {
    title: '部门',
    dataIndex: 'deptName',
    key: 'deptName',
  },
  {
    title: '手机号码',
    dataIndex: 'phonenumber',
    key: 'phonenumber',
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
const treeData: TreeProps['treeData'] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },
          { title: 'leaf', key: '0-0-0-1' },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ key: '0-0-1-0', title: 'sss' }],
      },
    ],
  },
]
defineOptions({
  name: 'User',
})
</script>

<template>
  <div>
    <a-card> ww </a-card>

    <a-row :gutter="8" class="mt-2">
      <a-col :span="3">
        <a-card>
          <a-tree :treeData="treeData" />
        </a-card>
      </a-col>
      <a-col :span="21">
        <a-card>
          <a-table
            :dataSource="dataSource"
            :columns="columns"
            :pagination="false"
            rowKey="userId"
            :rowClassName="(_record: any, index: number) => (index % 2 === 1 ? 'table-striped' : undefined)"
            class="h-full"
          />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<style lang="scss" scoped></style>
