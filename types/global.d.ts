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
}
