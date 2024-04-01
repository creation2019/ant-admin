import service from 'Plugins/request'
import { AxiosPromise } from 'axios'
import { LoginData, LoginResult, VerifyCodeResult, TenantInfo } from './types'

// pc端固定客户端授权id
const clientId = import.meta.env.VITE_APP_CLIENT_ID

/**
 * @param data {LoginData}
 * @returns
 */
export function $login(data: LoginData): AxiosPromise<LoginResult> {
  const params = {
    ...data,
    clientId: data.clientId || clientId,
    grantType: data.grantType || 'password',
  }
  return service({
    url: '/auth/login',
    headers: {
      isToken: false,
      isEncrypt: true,
    },
    method: 'post',
    data: params,
  })
}

// 注册方法
export function $register(data: any) {
  return service({
    url: '/auth/register',
    headers: {
      isToken: false,
      isEncrypt: true,
    },
    method: 'post',
    data: data,
  })
}

/**
 * 注销
 */
export function $logout() {
  return service({
    url: '/auth/logout',
    method: 'post',
  })
}

/**
 * 获取验证码
 */
export function $getCodeImg(): AxiosPromise<VerifyCodeResult> {
  return service({
    url: '/auth/code',
    headers: {
      isToken: false,
    },
    method: 'get',
    timeout: 20000,
  })
}

/**
 * 第三方登录
 */
export function $callback(data: LoginData): AxiosPromise<any> {
  const LoginData = {
    ...data,
    clientId: clientId,
    grantType: 'social',
  }
  return service({
    url: '/auth/social/callback',
    method: 'post',
    data: LoginData,
  })
}

// 获取租户列表
export function $getTenantList(): AxiosPromise<TenantInfo> {
  return service({
    url: '/auth/tenant/list',
    headers: {
      isToken: false,
    },
    method: 'get',
  })
}

//获取系统配置信息
// GET /auth/sys/info
// 接口ID：144005652
// 接口地址：https://app.apifox.com/link/project/3457756/apis/api-144005652

export function $getSysInfo(): AxiosPromise<any> {
  return service({
    url: '/auth/sys/info',
    method: 'get',
  })
}
