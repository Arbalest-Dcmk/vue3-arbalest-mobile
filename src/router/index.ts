import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export const NotFound: RouteRecordRaw = {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: { hidden: true },
    component: () => import('@/views/404/index.vue')
}

export const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        meta: { hidden: true },
        component: () => import('@/views/Login/index.vue')
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home/index.vue')
    }
]

export const asyncRoutes: Array<RouteRecordRaw> = []

export const resetRouter = () =>
    createRouter({
        history: createWebHashHistory(),
        routes: constantRoutes,
        scrollBehavior: () => ({ top: 0 })
    })

const router = resetRouter()

export default router
