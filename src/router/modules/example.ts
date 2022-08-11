import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import { shallowRef } from 'vue'

export const exampleRoutes: RouteRecordRaw[] = [
    {
        path: '/example',
        name: 'Example',
        component: shallowRef(Layout),
        redirect: '/example/index',
        children: [
            {
                path: 'index',
                name: 'ExampleIndex',
                component: () => import('@/views/Example/index.vue'),
                meta: {
                    title: '示例页',
                    isTabBar: true,
                    icon: 'home'
                }
            },
            {
                path: 'detail',
                name: 'ExampleDetail',
                component: () => import('@/views/Example/detail.vue'),
                meta: {
                    title: '示例详情页'
                }
            }
        ]
    }
]
