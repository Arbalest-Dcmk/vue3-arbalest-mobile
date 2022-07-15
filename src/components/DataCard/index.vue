<template>
    <div class="data-card">
        <div class="shadow-before"></div>
        <div class="shadow-after"></div>
        <div class="content">
            <div class="top">
                <div class="item">
                    <span class="label"><SvgIcon name="plane" />发帖量</span>
                    <div class="value">
                        {{ nowData.post }}<i class="unit">篇</i
                        ><TrendTip :num="nowData.postTrend" />
                    </div>
                </div>
                <div class="item border" trend="⬆32%">
                    <span class="label"><SvgIcon name="hot" />热议度</span>
                    <div class="value">
                        {{ nowData.hot }}<i class="unit">W</i><TrendTip :num="nowData.hotTrend" />
                    </div>
                </div>
            </div>

            <div class="bottom">
                <div class="item">
                    <span class="label">提及商品</span>
                    <div class="value">{{ nowData.goods }}<i class="unit">个</i></div>
                </div>
                <div class="item">
                    <span class="label">提及品类</span>
                    <div class="value">{{ nowData.category }}<i class="unit">个</i></div>
                </div>
                <div class="item">
                    <span class="label">发帖人数</span>
                    <div class="value">{{ nowData.kol }}<i class="unit">人</i></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="DataCard">
import TrendTip from '@/components/TrendTip/index.vue'
const store = useStore()
type PlatformType = 'all' | 'redbook' | 'tiktok'
const type = computed(() => store.state.app.type)
const typeData = reactive({
    all: {
        post: 1220,
        postTrend: 32,
        hot: 5.4,
        hotTrend: 32,
        goods: 324,
        category: 42,
        kol: 1108
    },
    redbook: {
        post: 511,
        postTrend: 29,
        hot: 2.1,
        hotTrend: 27,
        goods: 114,
        category: 18,
        kol: 528
    },
    tiktok: {
        post: 709,
        postTrend: 33,
        hot: 3.3,
        hotTrend: 34,
        goods: 210,
        category: 24,
        kol: 590
    }
})
const nowData = computed(() => typeData[<PlatformType>type.value])
</script>

<style lang="scss" scoped>
.data-card {
    position: relative;
}
.shadow-before {
    width: calc(100% - 10px);
    height: 100%;
    z-index: 2;
    position: absolute;
    left: 5px;
    top: 5px;
    @include box;
    opacity: 0.8;
}
.shadow-after {
    width: calc(100% - 20px);
    height: 100%;
    z-index: 1;
    position: absolute;
    left: 10px;
    top: 10px;
    @include box;
    opacity: 0.4;
}
.content {
    @include box;
    position: relative;
    z-index: 3;
}
.top {
    display: flex;
    margin-bottom: 8px;
    padding: 15px $pageInterval;
    box-sizing: border-box;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 15px;
        right: 15px;
        height: 1px;
        background: $fadeBorder;
    }
    .item {
        width: 50%;
        box-sizing: border-box;
        position: relative;
        &.border::after {
            content: '';
            position: absolute;
            top: 4px;
            left: 3px;
            width: 1px;
            height: 32px;
            background: $fadeBorder;
        }

        &:last-child {
            .label {
                padding-left: 15px;
            }
        }
    }
    .label {
        ::v-deep(.svg-icon) {
            padding-right: 12px;
        }
    }
    .value {
        text-align: right;
    }

    .unit {
        display: inline-block;
        padding-right: 15px;
    }
}
.bottom {
    display: flex;
    justify-content: left;
    text-align: left;
    .item {
        width: calc(100% / 3);
        padding: 13px 0 13px 15px;
        box-sizing: border-box;
        .label {
            padding: 0 !important;
        }
        .value {
            font-size: 21px;
            text-align: left;
        }
    }
}
.item {
    .label {
        display: block;
        color: $subColor;
        font-size: 14px;
        margin-bottom: 10px;
    }
    .value {
        font-weight: $bold;
        font-size: 24px;
        white-space: nowrap;
    }
}
.unit {
    font-size: 12px;
    font-style: normal;
    padding-left: 6px;
}
</style>
