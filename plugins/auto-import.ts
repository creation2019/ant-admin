import AutoImport from 'unplugin-auto-import/vite'

export default (path: any) => {
  return AutoImport({
    // 自动导入 Vue 相关函数
    imports: ['vue', 'vue-router', 'pinia'],
    dts: path.resolve(path.resolve(__dirname, '../'), 'types', 'auto-imports.d.ts'),
  })
}
