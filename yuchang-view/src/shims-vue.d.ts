/*
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-16 17:12:02
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

// declare module  "@yuchang/design"

