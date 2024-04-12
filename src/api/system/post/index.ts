import service from 'Plugins/request'
import { PostForm, PostQuery, PostVO } from './types'
import { AxiosPromise } from 'axios'

// 查询岗位列表
export function $listPost(query: PostQuery): AxiosPromise<PostVO[]> {
  return service({
    url: '/system/post/list',
    method: 'get',
    params: query,
  })
}

// 查询岗位详细
export function $getPost(postId: string | number): AxiosPromise<PostVO> {
  return service({
    url: '/system/post/' + postId,
    method: 'get',
  })
}

// 新增岗位
export function $addPost(data: PostForm) {
  return service({
    url: '/system/post',
    method: 'post',
    data: data,
  })
}

// 修改岗位
export function $updatePost(data: PostForm) {
  return service({
    url: '/system/post',
    method: 'put',
    data: data,
  })
}

// 删除岗位
export function $delPost(postId: string | number | (string | number)[]) {
  return service({
    url: '/system/post/' + postId,
    method: 'delete',
  })
}
// 获取最大岗位编码
// GET /system/post/getMaxJobNumber
// 接口ID：129698404
// 接口地址：https://app.apifox.com/link/project/3457756/apis/api-129698404
export function $getMaxJobNumber(): AxiosPromise<any> {
  return service({
    url: '/system/post/getMaxJobNumber',
    method: 'get',
  })
}
