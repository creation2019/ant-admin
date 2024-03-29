import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
export default (path: any) => {
  return Components({
    resolvers: [
      AntDesignVueResolver({
        importStyle: false, // css in js
      }),
    ],
    dts: path.resolve(path.resolve(__dirname, '../'), 'types', 'components.d.ts'),
  })
}
