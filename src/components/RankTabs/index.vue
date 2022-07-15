<template>
    <div class="rank-tabs">
        <VanTabs
            v-model:active="active"
            shrink
            line-width="0"
            :title-active-color="variables.titleActive"
            :title-inactive-color="variables.titleInactive"
            :color="variables.red"
            @clickTab="handleClickTab"
        >
            <VanTab
                v-for="item in RANK_TABS_DAILY"
                :key="item.value"
                :title="item.label"
                :name="item.value"
            >
                <RankList :is="item.component" v-show="!loading" />
                <VanLoading v-show="loading" class="loading" :size="variables.loadingSize" />
            </VanTab>
        </VanTabs>
    </div>
</template>
<script lang="ts" setup name="RankTabs">
import RankList from '@/components/RankList/index.vue'
import { RANK_TABS_DAILY } from '@/config/constant'
const store = useStore()
const active = ref('goods')
const loading = ref(false)
const type = computed(() => store.state.app.type)

const getList = () => {
    loading.value = true
    setTimeout(() => {
        loading.value = false
    }, 400)
}

watch(() => type.value, getList)

const handleClickTab = () => {
    console.log(active.value)
    getList()
}
</script>

<style lang="scss" scoped>
.rank-tabs {
    padding: 0 $pageInterval;
    box-sizing: border-box;
}

::v-deep(.van-tabs__wrap) {
    height: 30px;
    margin-bottom: 15px;

    .van-tabs__nav {
        padding: 0;
    }

    .van-tab--active {
        font-weight: $semiBold;
        border: 1px solid $red;
        border-radius: 5px;
    }
    .van-tab--shrink {
        padding: 0 12px;
        margin-right: 6px;
    }
}
.loading {
    text-align: center;
    min-height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>

<style lang="scss" module="variables">
:export {
    primary: $primary;
    titleActive: $red;
    titleInactive: $titleInactive;
    lineColor: $lineColor;
    loadingSize: 36px;
}
</style>
