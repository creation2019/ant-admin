import service from 'Plugins/request'
import { MenuQuery, MenuVO, MenuForm, MenuTreeOption, RoleMenuTree } from './types'
import { AxiosPromise } from 'axios'

// 查询菜单列表
export const $listMenu = (query?: MenuQuery): AxiosPromise<any[]> => {
  return service({
    url: '/system/menu/list',
    method: 'get',
    params: query,
  })
}

// 查询菜单详细
export const $getMenu = (menuId: string | number): AxiosPromise<MenuVO> => {
  return service({
    url: '/system/menu/' + menuId,
    method: 'get',
  })
}

// 查询菜单下拉树结构
export const $treeselect = (): AxiosPromise<MenuTreeOption[]> => {
  return service({
    url: '/system/menu/treeselect',
    method: 'get',
  })
}

// 根据角色ID查询菜单下拉树结构
export const $roleMenuTreeselect = (roleId: string | number): AxiosPromise<RoleMenuTree> => {
  return service({
    url: '/system/menu/roleMenuTreeselect/' + roleId,
    method: 'get',
  })
}

// 根据角色ID查询菜单下拉树结构
export const $tenantPackageMenuTreeselect = (packageId: string | number): AxiosPromise<RoleMenuTree> => {
  return service({
    url: '/system/menu/tenantPackageMenuTreeselect/' + packageId,
    method: 'get',
  })
}

// 新增菜单
export const $addMenu = (data: MenuForm) => {
  return service({
    url: '/system/menu',
    method: 'post',
    data: data,
  })
}

// 修改菜单
export const $updateMenu = (data: MenuForm) => {
  return service({
    url: '/system/menu',
    method: 'put',
    data: data,
  })
}

// 删除菜单
export const $delMenu = (menuId: string | number) => {
  return service({
    url: '/system/menu/' + menuId,
    method: 'delete',
  })
}
