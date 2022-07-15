import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
export const NotFound: RouteRecordRaw = {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: { hidden: true },
    component: () => import('@/views/404/index.vue')
}

export const constantRoutes: Array<RouteRecordRaw> = [
    // {
    //     path: '/login',
    //     name: 'Login',
    //     meta: { hidden: true },
    //     component: () => import('@/views/Login/index.vue')
    // },
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: () => import('@/views/Home/index.vue')
    // },
    {
        path: '/',
        name: 'Daily',
        component: () => import('@/views/Daily/index.vue')
    },
    {
        path: '/goods',
        name: 'Goods',
        meta: { title: '商品详情' },
        component: () => import('@/views/Goods/index.vue')
    },
    {
        path: '/category',
        name: 'Category',
        meta: { title: '品类详情' },
        component: () => import('@/views/Category/index.vue')
    },
    {
        path: '/kol',
        name: 'Kol',
        meta: { title: 'KOL详情' },
        component: () => import('@/views/Kol/index.vue')
    },
    NotFound
]

export const asyncRoutes: Array<RouteRecordRaw> = []

export const resetRouter = () =>
    createRouter({
        history: createWebHashHistory(),
        routes: constantRoutes,
        scrollBehavior() {
            return { top: 0 }
        }
    })

const router = resetRouter()

export default router
