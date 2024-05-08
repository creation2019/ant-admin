<script setup lang="ts">
import { $listRole } from 'API/system/role'
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
    <a-form ref="formRef" name="advanced_search" class="zg-query-form" :model="queryParams">
      <a-row class="zg-query-form-row">
        <a-form-item name="status" label="姓名/工号" class="zg-query-form-item">
          <a-input v-model:value="queryParams.roleName" placeholder="placeholder"></a-input>
        </a-form-item>
        <a-form-item name="status" label="卡号" class="zg-query-form-item">
          <a-input v-model:value="queryParams.roleName" placeholder="placeholder"></a-input>
        </a-form-item>
        <a-form-item name="status" label="岗位状态" class="zg-query-form-item">
          <a-input v-model:value="queryParams.roleName" placeholder="placeholder"></a-input>
        </a-form-item>
        <a-form-item name="status" label="持卡状态" class="zg-query-form-item">
          <a-input v-model:value="queryParams.roleName" placeholder="placeholder"></a-input>
        </a-form-item>
        <a-form-item class="zg-query-form-item zg-margin-left10">
          <a-button type="primary" class="zg-margin-right10">搜索</a-button>
          <a-button>重置</a-button>
        </a-form-item>
      </a-row>
    </a-form>
    <a-card :bordered="false" class="mt-2">
      <a-table
        :dataSource="dataSource"
        :columns="columns"
        :pagination="false"
        rowKey="roleId"
        :rowClassName="(_record: any, index: number) => (index % 2 === 1 ? 'table-striped' : undefined)"
      />
      <a-pagination
        v-model:current="queryParams.pageNum"
        v-model:pageSize="queryParams.pageSize"
        :total="total"
        show-quick-jumper
        show-size-changer
        @change="getList"
        :pageSizeOptions="['15', '30', '50', '100']"
        :show-total="(_total, range) => `第 ${range[0]}-${range[1]} 条 共 ${_total} 条`"
      />
    </a-card>
  </div>
</template>

<style lang="scss" scoped>
.role {
  color: red;
}
</style>
