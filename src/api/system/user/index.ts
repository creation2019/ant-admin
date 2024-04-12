import { DeptVO } from 'API/system/dept/types'
import { RoleVO } from 'API/system/role/types'
import service from 'Plugins/request'
import { AxiosPromise } from 'axios'
import { UserForm, UserQuery, UserVO, UserInfoVO } from './types'
import { parseStrEmpty } from 'Utils/index'

/**
 * 查询用户列表
 * @param query
 */
export const listUser = (query: UserQuery): AxiosPromise<UserVO[]> => {
  return service({
    url: '/system/user/list',
    method: 'get',
    params: query,
  })
}

/**
 * 获取用户详情
 * @param userId
 */
export const getUser = (userId?: string | number): AxiosPromise<UserInfoVO> => {
  return service({
    url: '/system/user/' + parseStrEmpty(userId),
    method: 'get',
  })
}

/**
 * 新增用户
 */
export const addUser = (data: UserForm) => {
  return service({
    url: '/system/user',
    method: 'post',
    data: data,
  })
}

/**
 * 修改用户
 */
export const updateUser = (data: UserForm) => {
  return service({
    url: '/system/user',
    method: 'put',
    data: data,
  })
}

/**
 * 删除用户
 * @param userId 用户ID
 */
export const delUser = (userId: Array<string | number> | string | number) => {
  return service({
    url: '/system/user/' + userId,
    method: 'delete',
  })
}

/**
 * 用户密码重置
 * @param userId 用户ID
 * @param password 密码
 */
export const resetUserPwd = (userId: string | number, password: string) => {
  const data = {
    userId,
    password,
  }
  return service({
    url: '/system/user/resetPwd',
    method: 'put',
    headers: {
      isEncrypt: true,
    },
    data: data,
  })
}

/**
 * 用户状态修改
 * @param userId 用户ID
 * @param status 用户状态
 */
export const changeUserStatus = (userId: number | string, status: string) => {
  const data = {
    userId,
    status,
  }
  return service({
    url: '/system/user/changeStatus',
    method: 'put',
    data: data,
  })
}

/**
 * 查询用户个人信息
 */
export const getUserProfile = (): AxiosPromise<UserInfoVO> => {
  return service({
    url: '/system/user/profile',
    method: 'get',
  })
}

/**
 * 修改用户个人信息
 * @param data 用户信息
 */
export const updateUserProfile = (data: UserForm) => {
  return service({
    url: '/system/user/profile',
    method: 'put',
    data: data,
  })
}

/**
 * 用户密码重置
 * @param oldPassword 旧密码
 * @param newPassword 新密码
 */
export const updateUserPwd = (oldPassword: string, newPassword: string) => {
  const data = {
    oldPassword,
    newPassword,
  }
  return service({
    url: '/system/user/profile/updatePwd',
    method: 'put',
    headers: {
      isEncrypt: true,
    },
    params: data,
  })
}

/**
 * 用户头像上传
 * @param data 头像文件
 */
export const uploadAvatar = (data: FormData) => {
  return service({
    url: '/system/user/profile/avatar',
    method: 'post',
    data: data,
  })
}

/**
 * 查询授权角色
 * @param userId 用户ID
 */
export const getAuthRole = (userId: string | number): AxiosPromise<{ user: UserVO; roles: RoleVO[] }> => {
  return service({
    url: '/system/user/authRole/' + userId,
    method: 'get',
  })
}

/**
 * 保存授权角色
 * @param data 用户ID
 */
export const updateAuthRole = (data: { userId: string; roleIds: string }) => {
  return service({
    url: '/system/user/authRole',
    method: 'put',
    params: data,
  })
}

/**
 * 查询当前部门的所有用户信息
 * @param deptId
 */
export const listUserByDeptId = (deptId: string | number): AxiosPromise<UserVO[]> => {
  return service({
    url: '/system/user/list/dept/' + deptId,
    method: 'get',
  })
}

/**
 * 查询部门下拉树结构
 */
export const deptTreeSelect = (): AxiosPromise<DeptVO[]> => {
  return service({
    url: '/system/user/deptTree',
    method: 'get',
  })
}
/**
 * 查询拥有可用账号的人员信息列表
  GET /system/person/list/account
  接口ID：152303428
  接口地址：https://app.apifox.com/link/project/3457756/apis/api-152303428
 */

export const personListAccount = (query: UserQuery): AxiosPromise<UserVO[]> => {
  return service({
    url: '/system/person/list/account',
    method: 'get',
    params: query,
  })
}

export default {
  listUser,
  getUser,
  addUser,
  updateUser,
  delUser,
  resetUserPwd,
  changeUserStatus,
  getUserProfile,
  updateUserProfile,
  updateUserPwd,
  uploadAvatar,
  getAuthRole,
  updateAuthRole,
  deptTreeSelect,
  listUserByDeptId,
  personListAccount,
}
