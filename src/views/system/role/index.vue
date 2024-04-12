<script setup lang="ts">
import { $listRole } from '@/api/system/role'
const dataSource = ref<any[]>([])
const total = ref(0)
const queryParams = ref({
  pageNum: 1,
  pageSize: 15,
  roleName: '',
  roleKey: '',
  status: '',
})
const columns = [
  {
    title: '角色编号',
    dataIndex: 'roleId',
    key: 'roleId',
  },
  {
    title: '角色名称',
    dataIndex: 'roleName',
    key: 'roleName ',
  },
  {
    title: '权限字符',
    dataIndex: 'roleKey',
    key: 'roleKey',
  },
  {
    title: '显示顺序',
    dataIndex: 'roleSort',
    key: 'roleSort',
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
/**
 * 查询角色列表
 */
const getList = async () => {
  const res = await $listRole(queryParams.value)
  dataSource.value = res.rows
  total.value = res.total
}
onMounted(() => {
  getList()
})
defineOptions({
  name: 'Role',
})
</script>

<template>
  <div>
    <a-card :bordered="false">
      <a-table :dataSource="dataSource" :columns="columns" :pagination="false" />
      <a-pagination
        v-model:current="queryParams.pageNum"
        v-model:pageSize="queryParams.pageSize"
        :total="total"
        show-size-changer
        show-quick-jumper
        @change="getList"
        :show-total="(total, range) => `${range[0]}-${range[1]}`"
      />
    </a-card>
  </div>
</template>

<style lang="scss" scoped>
.role {
  color: red;
}
</style>
