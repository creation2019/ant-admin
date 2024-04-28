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
const total = ref(0)
const queryParams = ref({
  pageNum: 1,
  pageSize: 15,
  roleName: '',
  roleKey: '',
  status: '',
})
/**
 * 查询角色列表
 */
const getList = async () => {}
defineOptions({
  name: 'CardManage',
})
</script>

<template>
  <div>
    <a-card> ww </a-card>
    <a-card class="mt-2">
      <a-table
        :dataSource="dataSource"
        :columns="columns"
        :pagination="false"
        rowKey="userId"
        :rowClassName="(_record: any, index: number) => (index % 2 === 1 ? 'table-striped' : undefined)"
        class="h-full"
      />
      <a-pagination
        v-model:current="queryParams.pageNum"
        v-model:pageSize="queryParams.pageSize"
        :total="total"
        show-quick-jumper
        show-size-changer
        @change="getList"
        :pageSizeOptions="['15', '30', '50', '100']"
        :show-total="(total, range) => `第 ${range[0]}-${range[1]} 条 共 ${total} 条`"
      />
    </a-card>
  </div>
</template>

<style lang="scss" scoped></style>
