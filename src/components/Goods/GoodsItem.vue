<template>
    <div class="goods-item" @click="goDetail">
        <div class="top">
            <div class="img-box">
                <SvgIcon class="img-bg" name="img_bg" />
                <van-image :src="value.img" class="img" lazy-load />
            </div>
            <div class="title">{{ value.title }}</div>
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
                <div class="value">{{ value.department }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="GoodsItem">
const props = defineProps({
    value: {
        type: Object,
        default: function () {
            return {
                type: '',
                code: 0,
                name: '',
                url: '',
                link: '',
                detail: [],
                times: 0,
                timesTrend: 0,
                hot: 0,
                hotTrend: 0,
                img: '',
                department: '',
                links: []
            }
        }
    }
})
const router = useRouter()
const goDetail = () => {
    router.push(`/goods?code=${props.value.code}`)
}
</script>

<style lang="scss" scoped>
.goods-item {
    @include box;
    position: relative;
    margin-bottom: 11px;
    padding: 0 15px;
    box-sizing: border-box;
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

.top {
    height: 80px;
    position: relative;
    padding: 15px 0 0 70px;
    box-sizing: border-box;

    .img-box {
        position: absolute;
        top: 15px;
        left: 0;
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
    padding: 10px 0 0 0;
    box-sizing: border-box;
    border-top: 1px solid $fade;
}
.item {
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
