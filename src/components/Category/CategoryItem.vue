<template>
    <div class="category-item" @click="goDetail">
        <div class="top-container">
            <div class="top">
                <img :src="bgUrl" class="bg" />
                <SvgIcon :name="`c_${value.icon}`" class="icon" />
                <div class="title">{{ value.name }}品类</div>
            </div>
        </div>

        <div class="bottom">
            <div class="item">
                <span class="label">提及次数</span>
                <div class="value">
                    {{ value.times }}
                    <TrendTip :num="value.timesTrend" />
                </div>
            </div>
            <div class="item">
                <span class="label">热议度</span>
                <div class="value">
                    {{ value.hot }}
                    <TrendTip :num="value.hotTrend" />
                </div>
            </div>
            <div class="item">
                <span class="label">隶属部门</span>
                <div class="value">{{ value.name }}部门</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="CategoryItem">
import bgUrl from '@/assets/icons/category_bg.png'
const router = useRouter()
const props = defineProps({
    value: {
        type: Object,
        default: function () {
            return {
                index: 0,
                type: 'redbook',
                name: '',
                times: 0,
                timesTrend: 0,
                hot: 0,
                hotTrend: 0,
                links: []
            }
        }
    }
})
const goDetail = () => {
    router.push(`/category?index=${props.value.index}`)
}
</script>

<style lang="scss" scoped>
.category-item {
    @include box;
    box-sizing: border-box;
    margin-bottom: 11px;
    position: relative;
    &::after {
        content: attr(rank);
        color: #fff;
        font-size: 12px;
        text-align: center;
        line-height: 16px;
        display: block;
        width: 15px;
        height: 15px;
        border-radius: 5px 0 5px 0;
        position: absolute;
        left: 0;
        top: 0;
        background: $subColor;
    }
    &:nth-child(1)::after {
        background: $red;
    }
    &:nth-child(2)::after {
        background: $secondColor;
    }
}
.top-container {
    padding: 15px 15px 0;
    box-sizing: border-box;
}
.top {
    box-sizing: border-box;
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
    justify-content: space-between;
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
</style>
