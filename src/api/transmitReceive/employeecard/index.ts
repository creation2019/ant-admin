import service from 'Plugins/request'
import { AxiosPromise } from 'axios'
import { CardCardholderVO, CardCardholderQuery } from './types'

/**
 * 分页查询员工持卡信息列表
 *   GET /cardadmin/personcard/list
 *   接口ID：125332177
 *   接口地址：https://app.apifox.com/link/project/3457756/apis/api-125332177
 */

export const $getCardCardholderList = (data: CardCardholderQuery): AxiosPromise<CardCardholderVO[]> => {
  return service({
    url: '/cardadmin/personcard/list',
    method: 'get',
    params: data,
  })
}
