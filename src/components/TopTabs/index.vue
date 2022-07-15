<template>
    <div class="top-tabs">
        <VanTabs
            v-model:active="active"
            shrink
            duration="0.1"
            :line-width="variables.lineWidth"
            :title-active-color="variables.titleActive"
            :title-inactive-color="variables.titleInactive"
            :color="variables.red"
            @clickTab="handleClickTab"
        >
            <VanTab
                v-for="item in TOP_TABS"
                :key="item.value"
                :title="item.label"
                :name="item.value"
            />
        </VanTabs>

        <div class="date">
            <div class="date-content">{{ date }}</div>
        </div>
        <DataCard class="data-card" />
    </div>
</template>

<script lang="ts" setup name="Top">
import { TOP_TABS } from '@/config/constant'
import DataCard from '@/components/DataCard/index.vue'
const store = useStore()
const date = computed(() => store.state.app.date)
const active = ref('all')
const handleClickTab = (e: any) => {
    const { name, title } = e
    store.commit('app/setType', { type: name, typeName: title })
}
</script>

<style lang="scss" scoped>
::v-deep(.van-tab--active) {
    font-size: 17px;
    font-weight: $bold;
}

.date {
    font-size: 12px;
    height: 20px;
    line-height: 20px;
    position: relative;
    color: #fff;

    .date-content {
        text-align: center;
        position: absolute;
        right: $pageInterval;
        top: 2px;
        width: 80px;
        background: $primary;
        border-radius: 5px;
        height: 30px;
        z-index: 0;
    }
}

.data-card {
    position: relative;
    z-index: 1;
    margin: 0 $pageInterval 16px;
}
</style>

<style lang="scss" module="variables">
:export {
    primary: $primary;
    titleActive: $titleActive;
    titleInactive: $titleInactive;
    lineColor: $lineColor;
    lineWidth: 15px;
    red: $red;
}
</style>
