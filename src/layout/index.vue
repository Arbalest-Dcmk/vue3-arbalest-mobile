<template>
    <div class="layout">
        <Main />
        <transition name="fade" mode="out-in">
            <TabBar v-if="isTabBar" />
        </transition>
    </div>
</template>

<script lang="ts" setup name="Layout">
import Main from './Main/index.vue'
import TabBar from './TabBar/index.vue'

const route = useRoute()
const isTabBar = computed(() => route.meta?.isTabBar)
</script>

<style lang="scss" scoped>
.layout {
    overflow: hidden;
    box-sizing: border-box;
    min-height: 100vh;
    background: $pageBg;
}

.tabBar {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
}
</style>
