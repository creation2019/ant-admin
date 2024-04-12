import { AxiosPromise } from 'axios'
import { RoleQuery, RoleVO, RoleDeptTree } from './types'
import service from 'Plugins/request'

export const $listRole = (query: RoleQuery): AxiosPromise<RoleVO[]> => {
  return service({
    url: '/system/role/list',
    method: 'get',
    params: query,
  })
}

/**
 * 查询角色详细
 */
export const $getRole = (roleId: string | number): AxiosPromise<RoleVO> => {
  return service({
    url: '/system/role/' + roleId,
    method: 'get',
  })
}

/**
 * 新增角色
 */
export const $addRole = (data: any) => {
  return service({
    url: '/system/role',
    method: 'post',
    data: data,
  })
}

/**
 * 修改角色
 * @param data
 */
export const $updateRole = (data: any) => {
  return service({
    url: '/system/role',
    method: 'put',
    data: data,
  })
}

/**
 * 角色数据权限
 */
export const $dataScope = (data: any) => {
  return service({
    url: '/system/role/dataScope',
    method: 'put',
    data: data,
  })
}

/**
 * 角色状态修改
 */
export const $changeRoleStatus = (roleId: string | number, status: string) => {
  const data = {
    roleId,
    status,
  }
  return service({
    url: '/system/role/changeStatus',
    method: 'put',
    data: data,
  })
}

/**
 * 删除角色
 */
export const $delRole = (roleId: Array<string | number> | string | number) => {
  return service({
    url: '/system/role/' + roleId,
    method: 'delete',
  })
}

/**
 * 查询角色已授权用户列表
 */
export const $allocatedUserList = (query: any): AxiosPromise<any[]> => {
  return service({
    url: '/system/role/authUser/allocatedList',
    method: 'get',
    params: query,
  })
}

/**
 * 查询角色未授权用户列表
 */
export const $unallocatedUserList = (query: any): AxiosPromise<any[]> => {
  return service({
    url: '/system/role/authUser/unallocatedList',
    method: 'get',
    params: query,
  })
}

/**
 * 取消用户授权角色
 */
export const $authUserCancel = (data: any) => {
  return service({
    url: '/system/role/authUser/cancel',
    method: 'put',
    data: data,
  })
}

/**
 * 批量取消用户授权角色
 */
export const $authUserCancelAll = (data: any) => {
  return service({
    url: '/system/role/authUser/cancelAll',
    method: 'put',
    params: data,
  })
}

/**
 * 授权用户选择
 */
export const $authUserSelectAll = (data: any) => {
  return service({
    url: '/system/role/authUser/selectAll',
    method: 'put',
    params: data,
  })
}
// 根据角色ID查询部门树结构
export const $deptTreeSelect = (roleId: string | number): AxiosPromise<RoleDeptTree> => {
  return service({
    url: '/system/role/deptTree/' + roleId,
    method: 'get',
  })
}
