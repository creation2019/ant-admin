declare global {
  interface ViteEnv {
    VITE_APP_TITLE: string
    VITE_APP_PORT: number
    VITE_APP_BASE_API: string
    VITE_APP_BASE_URL: string
    VITE_APP_CONTEXT_PATH: string
    VITE_APP_MONITRO_ADMIN: string
    VITE_APP_POWERJOB_ADMIN: string
    VITE_APP_ENV: string
    VITE_APP_RSA_PUBLIC_KEY: string
    VITE_APP_CLIENT_ID: string
  }

  interface BaseEntity {
    createBy?: any
    createDept?: any
    createTime?: string
    updateBy?: any
    updateTime?: any
  }

  /**
   * 分页数据
   * T : 表单数据
   * D : 查询参数
   */
  interface PageData<T, D> {
    form: T
    queryParams: D
    rules: ElFormRules
  }
  /**
   * 分页查询参数
   */
  interface PageQuery {
    pageNum: number
    pageSize: number
  }
}
export {}
