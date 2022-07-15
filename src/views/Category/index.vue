<template>
    <div class="page">
        <div class="container">
            <Breadcrumb />
            <VanSkeleton avatar title :loading="skeletonLoading" row="4">
                <div class="category-item" :rank="rank">
                    <SvgIcon name="rank_bg" class="rank-bg" />
                    <SvgIcon name="crown" class="crown" />
                    <div class="top-container">
                        <div class="top">
                            <img :src="bgUrl" class="bg" />
                            <SvgIcon :name="`c_${detail.icon}`" class="icon" />
                            <div class="title">{{ detail.name }}品类</div>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="item">
                            <span class="label">提及次数</span>
                            <div class="value">
                                {{ detail.times }}
                                <TrendTip :num="detail.timesTrend" />
                            </div>
                        </div>
                        <div class="item">
                            <span class="label">热议度</span>
                            <div class="value">
                                {{ detail.hot }}
                                <TrendTip :num="detail.hotTrend" />
                            </div>
                        </div>
                        <div class="item">
                            <span class="label">隶属部门</span>
                            <div class="value">{{ detail.name }}部门</div>
                        </div>
                    </div>
                </div>
            </VanSkeleton>

            <VanSkeleton title :loading="skeletonLoading" row="5">
                <div class="content">
                    <SectionTitle title="热议内容" />
                    <LinkList :list="detail.links" />
                </div>
            </VanSkeleton>
        </div>
    </div>
</template>

<script lang="ts" setup name="CategoryDetail">
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import bgUrl from '@/assets/icons/category_bg.png'
import SectionTitle from '@/components/SectionTitle/index.vue'
import LinkList from '@/components/LinkList/index.vue'
import useMockData from '@/hooks/useMockData'
import useSkeleton from '@/hooks/useSkeleton'
const { categoryList } = useMockData()
const { skeletonLoading } = useSkeleton()
const route = useRoute()
const detailIndex = ref()
onBeforeMount(() => {
    const { index } = route.query
    detailIndex.value = Number(index)
})
const detail = computed(() => categoryList.value[detailIndex.value])
const rank = computed(() =>
    detailIndex.value + 1 > 9 ? detailIndex.value + 1 : '0' + (detailIndex.value + 1)
)
</script>

<style lang="scss" scoped>
.container {
    background: $pageBg;
    overflow: hidden;
}
.category-item {
    @include box;
    box-sizing: border-box;
    margin: 0 15px 15px;
    position: relative;
    &::after {
        content: attr(rank);
        font-size: 12px;
        color: #fff;
        position: absolute;
        right: 6.5px;
        top: 5px;
        z-index: 3;
        transform: rotate(45deg);
    }
}
.top-container {
    padding: 15px 15px 0;
    box-sizing: border-box;
}

.rank-bg {
    font-size: 39px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
}
.crown {
    position: absolute;
    font-size: 18px;
    right: -7px;
    top: -7px;
    z-index: 2;
}
.top {
    position: relative;
    height: 50px;
    margin-bottom: 15px;
    border-radius: 5px;
    background: linear-gradient(180deg, rgba(230, 237, 252, 0.7) 0%, rgba(245, 248, 255, 0.7) 100%);
    border: 1px solid rgba(225, 233, 250, 0.3);
    display: flex;
    align-items: center;
    &::before,
    &::after {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        content: '';
        background: #fff;
        position: absolute;
        top: -4px;
        display: block;
        left: 58.5px;
    }
    &::after {
        top: calc(100% - 2px);
    }
    .bg {
        width: 265px;
        height: 33px;
        position: absolute;
        right: 0;
        bottom: 0;
    }
    .icon {
        margin: 0 15px 0 14px;
        font-size: 36px;
    }
    .title {
        font-size: 16px;
        color: $primary;
        font-weight: $semiBold;
        padding-left: 20px;
        height: 30px;
        border-left: 1px solid rgba(142, 160, 192, 0.15);
        line-height: 30px;
    }
}
.bottom {
    display: flex;
    justify-content: left;
    height: 65px;
}
.item {
    width: calc(100% / 3);
    padding-left: 15px;
    box-sizing: border-box;
    .label {
        font-size: 14px;
        color: $subColor;
        margin-bottom: 10px;
        display: block;
    }
    .value {
        font-size: 18px;
        white-space: nowrap;
        font-weight: $bold;
    }
    &:last-child {
        .value {
            font-size: 15px;
            font-weight: $semiBold;
        }
    }
}

.content {
    @include box;
    border-radius: 20px 20px 0 0;
    box-shadow: none;
}
</style>
