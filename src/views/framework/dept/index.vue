<script setup lang="ts">
import { handleTree } from 'Utils/tree'
import { $listDept } from 'API/system/dept'
import { DeptVO } from 'API/system/dept/types'

const dataSource = ref<DeptVO[]>([])
const queryParams = ref({
  pageNum: 1,
  pageSize: 15,
  deptName: undefined,
  status: undefined,
})

const columns = [
  {
    title: '部门名称',
    dataIndex: 'deptName',
    key: 'deptName ',
  },
  {
    title: '排序',
    dataIndex: 'orderNum',
    key: 'orderNum ',
  },
  {
    title: '负责人',
    dataIndex: 'leaderName',
    key: 'leaderName',
  },
  {
    title: '部门人数',
    dataIndex: 'personCount',
    key: 'personCount',
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
  const res = await $listDept(queryParams.value)
  const data = handleTree(res.data, 'deptId')
  if (data) {
    dataSource.value = data as DeptVO[]
  }
  console.log(' ', data)
}
onMounted(() => {
  getList()
})
defineOptions({
  name: 'Dept',
})
</script>

<template>
  <div>
    <a-form ref="formRef" name="advanced_search" class="zg-query-form" :model="queryParams">
      <a-row class="zg-query-form-row">
        <a-form-item name="status" label="姓名/工号" class="zg-query-form-item">
          <a-input v-model:value="queryParams.deptName" placeholder="placeholder"></a-input>
        </a-form-item>
        <a-form-item name="status" label="卡号" class="zg-query-form-item">
          <a-input v-model:value="queryParams.deptName" placeholder="placeholder"></a-input>
        </a-form-item>
        <a-form-item name="status" label="岗位状态" class="zg-query-form-item">
          <a-input v-model:value="queryParams.deptName" placeholder="placeholder"></a-input>
        </a-form-item>
        <a-form-item name="status" label="持卡状态" class="zg-query-form-item">
          <a-input v-model:value="queryParams.deptName" placeholder="placeholder"></a-input>
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
        :rowClassName="(_record: any, index: number) => (index % 2 === 1 ? 'table-striped' : undefined)"
        rowKey="deptId"
        class="h-full"
      />
    </a-card>
  </div>
</template>

<style lang="scss" scoped>
.dept {
  color: red;
}
</style>
