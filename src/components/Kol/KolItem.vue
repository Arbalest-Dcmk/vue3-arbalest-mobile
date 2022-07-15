<template>
    <div class="kol-item" @click="goDetail">
        <SvgIcon v-if="value.type === 'redbook'" name="redbook" class="icon" />
        <SvgIcon v-else-if="value.type === 'tiktok'" name="tiktok" class="icon tiktok" />
        <div class="top">
            <div class="info">
                <div class="avatar">
                    <van-image lazy-load :src="value.avatar" class="avatar-img" />
                </div>
                <div class="name">{{ value.name }}</div>
                <div class="tips">
                    <div class="tips-item">
                        <span class="tips-label">粉丝量</span>
                        <span class="tips-value">{{ numberToW(value.fans) }}</span>
                    </div>
                    <div class="tips-item">
                        <span class="tips-label">获赞与收藏</span>
                        <span class="tips-value">{{ numberToW(value.star) }}</span>
                    </div>
                </div>
            </div>
            <KolTags :tags="value.tags" />
        </div>
        <div class="bottom">
            <div class="item">
                <span class="label">发帖量</span>
                <div class="value">{{ value.postNum }}</div>
            </div>
            <div class="item">
                <span class="label">热议度</span>
                <div class="value">{{ value.hot }}</div>
            </div>
            <div class="item">
                <span class="label">历史帖子</span>
                <div class="value">{{ value.history }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="KolItem">
import KolTags from '@/components/KolTags/index.vue'
import { numberToW } from '@/utils'
const router = useRouter()
const props = defineProps({
    value: {
        type: Object,
        default: function () {
            return {
                id: '',
                name: '',
                url: '',
                avatar: '',
                detail: '',
                follow: 0,
                fans: 0,
                star: 0,
                tags: [],
                postNum: 0,
                hot: 0,
                history: 0,
                type: ''
            }
        }
    }
})
const goDetail = () => {
    router.push(`/kol?id=${props.value.id}`)
}
</script>

<style lang="scss" scoped>
.kol-item {
    @include box;
    padding: 15px 15px 0;
    box-sizing: border-box;
    margin-bottom: 11px;
    position: relative;
    &::before {
        content: '';
        width: 40px;
        height: 20px;
        background: $fade;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 0;
        border-radius: 5px;
    }
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
.icon {
    font-size: 30px;
    position: absolute;
    right: 5px;
    top: 0;
    z-index: 1;
    width: 30px;
    height: 18px;
    text-align: center;
    &.tiktok {
        font-size: 12px;
        top: 2px;
        height: 14px;
    }
}
.top {
    position: relative;
    &::after {
        width: 100%;
        height: 1px;
        content: '';
        position: absolute;
        bottom: -7px;
        left: 0;
        background: $fade;
    }
    .info {
        margin-bottom: 10px;
        position: relative;
        padding-left: 65px;
        box-sizing: border-box;
        .avatar {
            position: absolute;
            left: 0;
            top: 0;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            overflow: hidden;
            background: $fade;
        }
        .avatar-img {
            width: 100%;
            height: 100%;
        }

        .name {
            font-size: 16px;
            font-weight: $semiBold;
            margin-bottom: 8px;
        }
        .tips {
            display: flex;
            .tips-item {
                width: 50%;
                display: flex;
                white-space: nowrap;
            }
            .tips-label {
                margin-right: 12px;
                color: $subColor;
            }
            .tips-value {
                font-size: 15px;
                font-weight: $bold;
            }
        }
    }
}

.bottom {
    display: flex;
    justify-content: space-between;
    height: 65px;
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
        text-align: center;
    }
}
</style>
