<template>
    <van-tabbar route>
        <template v-for="item in tabBarRoutes" :key="item.redirect">
            <van-tabbar-item :to="`${item.meta?.to}`" replace>
                <span>{{ item.meta?.title }}</span>
                <template #icon>
                    <SvgIcon :name="`${item.meta?.icon}`" />
                </template>
            </van-tabbar-item>
        </template>
    </van-tabbar>
</template>

<script lang="ts" setup name="TabBar">
import path from 'path-browserify'
import { usePermissionStore } from '@/store/permission'
import { RouteRecordRaw } from 'vue-router'

const permissionStore = usePermissionStore()

const tabBarRoutes = computed(() =>
    permissionStore.routes
        .flatMap(
            (item: RouteRecordRaw) =>
                <RouteRecordRaw[]>[
                    item,
                    ...(item.children?.map((child: RouteRecordRaw) => ({
                        ...child,
                        meta: { ...child.meta, to: path.resolve(item.path, child.path) }
                    })) ?? [])
                ]
        )
        .filter(item => item.meta?.isTabBar)
)
</script>

<style lang="scss" scoped></style>
