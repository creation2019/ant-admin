import service from 'Plugins/request'
import { AxiosPromise } from 'axios'
import { DeptForm, DeptQuery, DeptVO } from './types'

// 查询部门列表
export const $listDept = (query?: DeptQuery) => {
  return service({
    url: '/system/dept/list',
    method: 'get',
    params: query,
  })
}

// 查询部门列表（排除节点）
export const $listDeptExcludeChild = (deptId: string | number): AxiosPromise<DeptVO[]> => {
  return service({
    url: '/system/dept/list/exclude/' + deptId,
    method: 'get',
  })
}

// 查询部门详细
export const $getDept = (deptId: string | number): AxiosPromise<DeptVO> => {
  return service({
    url: '/system/dept/' + deptId,
    method: 'get',
  })
}

// 查询部门下拉树结构
export const $treeselect = (): AxiosPromise<DeptVO[]> => {
  return service({
    url: '/system/dept/treeselect',
    method: 'get',
  })
}

// 新增部门
export const $addDept = (data: DeptForm) => {
  return service({
    url: '/system/dept',
    method: 'post',
    data: data,
  })
}

// 修改部门
export const $updateDept = (data: DeptForm) => {
  return service({
    url: '/system/dept',
    method: 'put',
    data: data,
  })
}

// 删除部门
export const $delDept = (deptId: number | string) => {
  return service({
    url: '/system/dept/' + deptId,
    method: 'delete',
  })
}
/**
 * 根据用户名模糊搜索
  GET /system/person/getPersonInfoByName
  接口ID：126315001
  接口地址：https://app.apifox.com/link/project/3457756/apis/api-126315001
 */
// 查询部门列表
export const $getPersonInfoByName = (query?: any) => {
  return service({
    url: '/system/person/getPersonInfoByName',
    method: 'get',
    params: query,
  })
}
