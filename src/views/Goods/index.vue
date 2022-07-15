<template>
    <div class="page">
        <div class="container">
            <Breadcrumb />
            <VanSkeleton avatar title :loading="skeletonLoading" row="4">
                <div class="goods-item" :rank="rank">
                    <SvgIcon name="rank_bg" class="rank-bg" />
                    <SvgIcon name="crown" class="crown" />
                    <div class="top">
                        <div class="img-box">
                            <SvgIcon class="img-bg" name="img_bg" />
                            <van-image :src="detail.img" lazy-load class="img" />
                        </div>
                        <div class="title">{{ detail.title }}</div>
                    </div>
                    <div class="bottom">
                        <div class="item">
                            <span class="label">提及次数</span>
                            <div class="value">
                                <span>{{ detail.times }}</span>
                                <TrendTip :num="detail.timesTrend" />
                            </div>
                        </div>
                        <div class="item">
                            <span class="label">热议度</span>
                            <div class="value">
                                <span>{{ detail.hot }}</span>
                                <TrendTip :num="detail.hotTrend" />
                            </div>
                        </div>
                        <div class="item">
                            <span class="label">隶属部门</span>
                            <div class="value">{{ detail.department }}</div>
                        </div>
                    </div>
                </div>
            </VanSkeleton>

            <VanSkeleton title :loading="skeletonLoading" row="5">
                <div class="content">
                    <!-- 商品详情 -->
                    <SectionTitle title="商品详情" />
                    <div v-for="(item, itemIndex) in detail.detail" :key="itemIndex" class="cell">
                        <div
                            class="cell-label"
                            :class="{ tags: item.split('：')[0] === '颜色分类' }"
                        >
                            {{ item.split('：')[0] }}
                        </div>
                        <div v-if="item.split('：')[0] !== '颜色分类'" class="cell-value">
                            {{ item.split('：')[1] }}
                        </div>
                        <div v-else class="cell-value">
                            <div
                                v-for="tag in item.split('：')[1].split('，')"
                                :key="tag"
                                class="tag"
                            >
                                {{ tag }}
                            </div>
                        </div>
                    </div>

                    <!-- 热议内容 -->
                    <SectionTitle title="热议内容" />
                    <LinkList :list="detail.links" />
                </div>
            </VanSkeleton>
        </div>
    </div>
</template>

<script lang="ts" setup name="GoodsDetail">
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import SectionTitle from '@/components/SectionTitle/index.vue'
import LinkList from '@/components/LinkList/index.vue'
import useMockData from '@/hooks/useMockData'
import useSkeleton from '@/hooks/useSkeleton'
const route = useRoute()
const { goodsList } = useMockData()
const { skeletonLoading } = useSkeleton()
const code = ref()
onBeforeMount(() => {
    code.value = Number(route.query.code)
})
const index = computed(() => goodsList.value.findIndex(item => item.code === code.value))
const detail = computed(() => goodsList.value[index.value])
const rank = computed(() => (index.value + 1 > 9 ? index.value + 1 : '0' + (index.value + 1)))
</script>

<style lang="scss" scoped>
.container {
    background: $pageBg;
    overflow: hidden;
}
.goods-item {
    position: relative;
    margin: 0 15px 15px;
    box-sizing: border-box;
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
}

.top {
    height: 80px;
    position: relative;
    padding: 15px 20px 0 85px;
    margin-bottom: 8px;
    box-sizing: border-box;
    @include box;

    .img-box {
        position: absolute;
        top: 15px;
        left: 15px;
        width: 55px;
        height: 50px;
        background: $fade;
        border-radius: 5px;
        overflow: hidden;

        .img-bg {
            font-size: 18px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        .img {
            z-index: 1;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
    }
    .title {
        font-size: 15px;
        white-space: normal;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 2;
        line-height: 21px;
        font-weight: $semiBold;
    }
}

.bottom {
    display: flex;
    justify-content: space-between;
    height: 80px;
    box-sizing: border-box;
}
.item {
    @include box;
    width: calc((100% - 16px) / 3);
    padding: 15px 5px 15px 15px;
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
        display: flex;
        justify-content: space-between;
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

.cell {
    font-size: 15px;
    padding: 0 15px 11px 30px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: nowrap;
    .cell-label {
        color: $subColor;
        width: 85px;
        &.tags {
            padding-top: 5px;
        }
    }
    .cell-value {
        flex: 1;
    }
    .tag {
        color: $subColor;
        display: inline-block;
        padding: 5px 9px;
        box-sizing: border-box;
        background: $fade;
        border-radius: 5px;
        margin: 0 15px 10px 0;
    }
}
</style>
