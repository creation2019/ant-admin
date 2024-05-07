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
  name: 'ContractorsCard',
})
</script>

<template>
  <div>
    <a-form ref="formRef" name="advanced_search" class="zg-query-form" :model="queryParams">
      <a-row class="zg-query-form-row">
        <a-form-item name="status" label="SN号" class="zg-query-form-item">
          <a-input v-model:value="queryParams.roleKey" placeholder="placeholder"></a-input>
        </a-form-item>
        <a-form-item name="status" label="姓名" class="zg-query-form-item">
          <a-input v-model:value="queryParams.roleKey" placeholder="placeholder"></a-input>
        </a-form-item>
        <a-form-item name="status" label="承包商公司" class="zg-query-form-item">
          <a-input v-model:value="queryParams.roleKey" placeholder="placeholder"></a-input>
        </a-form-item>
        <a-form-item name="status" label="身份证" class="zg-query-form-item">
          <a-input v-model:value="queryParams.roleKey" placeholder="placeholder"></a-input>
        </a-form-item>
        <a-form-item name="status" label="权限开关" class="zg-query-form-item">
          <a-input v-model:value="queryParams.roleKey" placeholder="placeholder"></a-input>
        </a-form-item>
        <a-form-item name="status" label="持卡状态" class="zg-query-form-item">
          <a-input v-model:value="queryParams.roleKey" placeholder="placeholder"></a-input>
        </a-form-item>
        <a-form-item class="zg-query-form-item zg-margin-left10">
          <a-button type="primary" class="zg-margin-right10">搜索</a-button>
          <a-button>重置</a-button>
        </a-form-item>
      </a-row>
    </a-form>
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
        hideOnSinglePage
        show-size-changer
        @change="getList"
        :pageSizeOptions="['15', '30', '50', '100']"
        :show-total="(_total, range) => `第 ${range[0]}-${range[1]} 条 共 ${_total} 条`"
      />
    </a-card>
  </div>
</template>

<style lang="scss" scoped></style>
