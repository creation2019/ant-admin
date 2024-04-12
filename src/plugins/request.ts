import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'
import { createVNode } from 'vue'
import { getToken } from '@/utils/auth'
import { HttpStatus } from '@/enums/RespEnum'
import { errorCode } from '@/utils/errorCode'
import { message } from 'ant-design-vue'
import { Modal } from 'ant-design-vue'
import { useUserStore } from 'Store/modules/user'

// 是否显示重新登录
export const isRelogin = { show: false }
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
    const isToken = (config.headers || {}).isToken === false
    // 是否需要防止数据重复提交
    const _isRepeatSubmit = (config.headers || {}).repeatSubmit === false
    if (getToken() && !isToken) {
      config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
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
    const userStore = useUserStore()
    // 未设置状态码则默认成功状态
    const code = res.data.code || HttpStatus.SUCCESS
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode['default']

    // 二进制数据则直接返回
    if (res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer') {
      return res.data
    }
    if (code === HttpStatus.UNAUTHORIZED) {
      if (!isRelogin.show) {
        Modal.confirm({
          title: '系统提示',
          icon: createVNode(ExclamationCircleOutlined),
          content: '登录状态已过期，您可以继续留在该页面，或者重新登录',
          centered: true,
          okType: 'danger',
          okText: '重新登录',
          async onOk() {
            isRelogin.show = false
            await userStore.logout()
            location.href = import.meta.env.VITE_APP_CONTEXT_PATH + 'index'
          },
          onCancel() {
            isRelogin.show = false
          },
        })
      }
      return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
    } else if (code === HttpStatus.SERVER_ERROR) {
      message.error(msg)
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
