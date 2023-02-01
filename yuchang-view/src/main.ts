/*
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-20 18:51:43
 */
import { createApp } from 'vue'

// style
import "./assets/main.less"
// ui
import ViewUIPlus from '@yuchang/design'
import "@yuchang/design/dist/styles/viewuiplus.css"

// route
import router from './router'
// 入口
import App from './App.vue'
createApp(App).use(router).use(ViewUIPlus).mount('#app')
