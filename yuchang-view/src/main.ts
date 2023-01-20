/*
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-20 18:51:43
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ViewUIPlus from '@yuchang/design'
import "@yuchang/design/dist/styles/viewuiplus.css"

createApp(App).use(ViewUIPlus).mount('#app')
