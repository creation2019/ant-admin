<script setup lang="ts">
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
defineOptions({
  name: 'Dict',
})
</script>

<template>
  <div>
    <a-card> ww </a-card>

    <a-row class="mt-2">
      <a-col span="24">
        <a-card>
          <a-table
            :dataSource="dataSource"
            :columns="columns"
            :pagination="false"
            rowKey="dictId"
            :rowClassName="(_record: any, index: number) => (index % 2 === 1 ? 'table-striped' : undefined)"
            class="h-full"
          />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<style lang="scss" scoped></style>
