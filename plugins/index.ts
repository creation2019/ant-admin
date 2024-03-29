import vue from '@vitejs/plugin-vue'
import createAutoImport from './auto-import'
import createComponents from './components'
import path from 'path'

export default (_viteEnv: any, _isBuild = false): [] => {
  const vitePlusgins: any = []
  vitePlusgins.push(vue())
  vitePlusgins.push(createAutoImport(path))
  vitePlusgins.push(createComponents(path))
  return vitePlusgins
}
