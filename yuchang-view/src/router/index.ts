/*
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-21 19:54:28
 */
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home';
import CodeLess from '../pages/CodeLess';
import Preview from '../pages/Preview'
import About from '../pages/About.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/codeless', component: CodeLess },
    { path: '/preview', component: Preview },
    { path: '/about', component: About }
];


export default createRouter({
    history: createWebHistory(import.meta.env.BASE_PATH),
    routes
});