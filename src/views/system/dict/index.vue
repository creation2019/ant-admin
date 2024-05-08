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
    <a-form ref="formRef" name="advanced_search" class="zg-query-form">
      <a-row class="zg-query-form-row">
        <a-form-item name="status" label="姓名/工号" class="zg-query-form-item">
          <a-input placeholder="placeholder"></a-input>
        </a-form-item>
        <a-form-item name="status" label="卡号" class="zg-query-form-item">
          <a-input placeholder="placeholder"></a-input>
        </a-form-item>
        <a-form-item name="status" label="岗位状态" class="zg-query-form-item">
          <a-input placeholder="placeholder"></a-input>
        </a-form-item>
        <a-form-item name="status" label="持卡状态" class="zg-query-form-item">
          <a-input placeholder="placeholder"></a-input>
        </a-form-item>
        <a-form-item class="zg-query-form-item zg-margin-left10">
          <a-button type="primary" class="zg-margin-right10">搜索</a-button>
          <a-button>重置</a-button>
        </a-form-item>
      </a-row>
    </a-form>

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
  </div>
</template>

<style lang="scss" scoped></style>
