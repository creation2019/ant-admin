import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

import { HttpStatus } from '@/enums/RespEnum'
import { errorCode } from '@/utils/errorCode'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers['clientid'] = import.meta.env.VITE_APP_CLIENT_ID
// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
})

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const _isToken = (config.headers || {}).isToken === false
    // 是否需要防止数据重复提交
    const _isRepeatSubmit = (config.headers || {}).repeatSubmit === false
    if (config.data instanceof FormData) {
      delete config.headers['Content-Type']
    }
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (res: AxiosResponse) => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || HttpStatus.SUCCESS
    // 获取错误信息
    const _msg = errorCode[code] || res.data.msg || errorCode['default']

    // 二进制数据则直接返回
    if (res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer') {
      return res.data
    }

    return Promise.resolve(res.data)
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 导出 axios 实例
export default service
