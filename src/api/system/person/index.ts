import service from 'Plugins/request'
import { AxiosPromise } from 'axios'
import { PersonVO, PersonQuery } from './types'

export const PersonApi = {
  /**
   * 查询人员信息列表
   * @param query
   * @returns
   */
  listPerson: (query?: PersonQuery): AxiosPromise<PersonVO[]> => {
    return service({
      url: '/system/person/list',
      method: 'get',
      params: query,
    })
  },
  /**
   * 获取tree
   * @param params
   * @returns
   */
  getDeptPostTree: (params?: string) => {
    return service({
      url: '/system/deptPost/tree',
      method: 'get',
      params,
    })
  },
}

// /**
//  * 查询人员信息列表
//  * @param query
//  * @returns {*}
//  */

// export const listPerson = (query?: PersonQuery): AxiosPromise<PersonVO[]> => {
//   return service({
//     url: '/system/person/list',
//     method: 'get',
//     params: query,
//   })
// }
// // 根据名称查找
// export const getPersonByName = (query?: any) => {
//   return service({
//     url: '/system/person/getPersonDeptByName',
//     method: 'get',
//     params: query,
//   })
// }

// /**
//  * 查询人员信息详细
//  * @param personId
//  */
// export const getPerson = (personId: string | number): AxiosPromise<PersonVO> => {
//   return service({
//     url: '/system/person/detail/' + personId,
//     method: 'get',
//   })
// }

// /**
//  * 新增人员信息
//  * @param data
//  */
// export const addPerson = (data: PersonForm) => {
//   return service({
//     url: '/system/person/add',
//     method: 'post',
//     data: data,
//   })
// }
// export const addPersonUser = (data: PersonForm) => {
//   return service({
//     url: '/system/person/adduser',
//     method: 'post',
//     data: data,
//   })
// }
// /**
//  * 修改人员信息
//  * @param data
//  */
// export const updatePerson = (data: PersonForm) => {
//   return service({
//     url: '/system/person/update',
//     method: 'put',
//     data: data,
//   })
// }
// export const updatePersonUser = (data: PersonForm) => {
//   return service({
//     url: '/system/person/updateuser',
//     method: 'put',
//     data: data,
//   })
// }
// export const updatePersonDimission = (data: any) => {
//   return service({
//     url: '/system/person/update/dimission',
//     method: 'put',
//     data: data,
//   })
// }

// /**
//  * 删除人员信息
//  * @param personId
//  */
// export const delPerson = (personId: string | number | Array<string | number> | any) => {
//   return service({
//     url: '/system/person/delete',
//     method: 'put',
//     data: personId,
//   })
// }

// /**
//  * 获取tree
//  * @param personId
//  */
// export const getdeptPostTree = (params?: string) => {
//   return service({
//     url: '/system/deptPost/tree',
//     method: 'get',
//     params,
//   })
// }
