import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { shallowRef } from 'vue'
import Layout from '@/layout/index.vue'
import { exampleRoutes } from './modules/example'

export const NotFound: RouteRecordRaw = {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/404/index.vue')
}

export const constantRoutes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录'
        },
        component: () => import('@/views/Login/index.vue')
    },
    {
        path: '/',
        component: shallowRef(Layout),
        redirect: '/home',
        children: [
            {
                path: 'home',
                name: 'Home',
                component: () => import('@/views/Home/index.vue'),
                meta: {
                    isTabBar: true,
                    icon: 'home',
                    title: '首页'
                }
            }
        ]
    }
]

export const asyncRoutes: RouteRecordRaw[] = [...exampleRoutes]

export const resetRouter = () =>
    createRouter({
        history: createWebHashHistory(),
        routes: constantRoutes,
        scrollBehavior: () =>
            new Promise(resolve => {
                setTimeout(() => {
                    resolve({ top: 0 })
                }, 300)
            })
    })

const router = resetRouter()

export default router
