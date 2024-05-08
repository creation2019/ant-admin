<script setup lang="ts">
import type { TableColumnType } from 'ant-design-vue'
import { $getCardCardholderList } from 'API/transmitReceive/employeecard'
import type { TreeProps } from 'ant-design-vue'
const dataSource = ref<any[]>([])
const columns: TableColumnType[] = [
  {
    title: '工号',
    dataIndex: 'jobNum',
    key: 'jobNum',
  },
  {
    title: '姓名',
    dataIndex: 'personName',
    key: 'personName ',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
  },
  {
    title: '照片',
    dataIndex: 'deptName',
    key: 'deptName',
  },
  {
    title: '部门',
    dataIndex: 'deptName',
    key: 'deptName',
  },
  {
    title: '岗位',
    dataIndex: 'postName',
    key: 'postName',
  },
  {
    title: '岗位状态',
    dataIndex: 'dimission',
    key: 'dimission',
  },
  {
    title: '用卡类型',
    dataIndex: 'issueWay',
    key: 'issueWay',
  },
  {
    title: 'SN号',
    dataIndex: 'macCard',
    key: 'macCard',
  },
  {
    title: '卡片电量',
    dataIndex: 'battery',
    key: 'battery',
  },
  {
    title: '取卡状态',
    dataIndex: 'cardStatus',
    key: 'cardStatus',
  },
  {
    title: '权限',
    dataIndex: 'cardStatus',
    key: 'cardStatus',
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    fixed: 'right',
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
const total = ref(0)
const loading = ref(true)
const queryParams = ref({
  pageNum: 1,
  pageSize: 15,
  cardholderName: '',
  cardNum: '',
  dimission: '',
  cardStatus: '',
  postId: '',
  deptId: '',
})
/**
 * 查询角色列表
 */
const getList = async () => {
  loading.value = true
  const res = await $getCardCardholderList(queryParams.value)
  dataSource.value = res.rows
  total.value = res.total
  loading.value = false
}

onMounted(() => {
  getList()
})
defineOptions({
  name: 'EmployeeCard',
})
</script>

<template>
  <div>
    <a-form ref="formRef" name="advanced_search" class="zg-query-form" :model="queryParams">
      <a-row class="zg-query-form-row">
        <a-form-item name="status" label="姓名/工号" class="zg-query-form-item">
          <a-input v-model:value="queryParams.cardholderName" placeholder="placeholder"></a-input>
        </a-form-item>
        <a-form-item name="status" label="卡号" class="zg-query-form-item">
          <a-input v-model:value="queryParams.cardholderName" placeholder="placeholder"></a-input>
        </a-form-item>
        <a-form-item name="status" label="岗位状态" class="zg-query-form-item">
          <a-input v-model:value="queryParams.cardholderName" placeholder="placeholder"></a-input>
        </a-form-item>
        <a-form-item name="status" label="持卡状态" class="zg-query-form-item">
          <a-input v-model:value="queryParams.cardholderName" placeholder="placeholder"></a-input>
        </a-form-item>
        <a-form-item class="zg-query-form-item zg-margin-left10">
          <a-button type="primary" class="zg-margin-right10">搜索</a-button>
          <a-button>重置</a-button>
        </a-form-item>
      </a-row>
    </a-form>
    <a-row :gutter="8" class="mt-2">
      <a-col :span="3">
        <a-card class="h-full">
          <a-tree :treeData="treeData" />
        </a-card>
      </a-col>
      <a-col :span="21">
        <a-card>
          <a-table
            :loading="loading"
            :dataSource="dataSource"
            :columns="columns"
            :pagination="false"
            rowKey="userId"
            :rowClassName="(_record: any, index: number) => (index % 2 === 1 ? 'table-striped' : undefined)"
            class="h-full"
            sticky
          >
            <template #bodyCell="{ column }">
              <template v-if="column.dataIndex === 'action'">
                <a-button type="link">编辑</a-button>
                <a-button type="link" danger>删除</a-button>
              </template>
            </template>
          </a-table>
          <a-pagination
            v-model:current="queryParams.pageNum"
            v-model:pageSize="queryParams.pageSize"
            :total="total"
            show-quick-jumper
            hideOnSinglePage
            show-size-changer
            @change="getList"
            :pageSizeOptions="['15', '30', '50', '100']"
            :show-total="(total, range) => `第 ${range[0]}-${range[1]} 条 共 ${total} 条`"
          />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<style lang="scss" scoped></style>
