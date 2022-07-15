<template>
    <div class="page">
        <div class="container">
            <Breadcrumb />
            <VanSkeleton avatar title :loading="skeletonLoading" row="4">
                <div class="kol-item" :rank="rank">
                    <SvgIcon name="rank_bg" class="rank-bg" />
                    <SvgIcon name="crown" class="crown" />
                    <div class="top">
                        <div class="info">
                            <div class="avatar">
                                <img :src="detail.avatar" class="avatar-img" />
                            </div>
                            <div class="name">
                                {{ detail.name }}
                                <SvgIcon
                                    v-if="detail.type === 'redbook'"
                                    name="tag_redbook"
                                    class="tag-redbook"
                                />
                                <SvgIcon
                                    v-else-if="detail.type === 'tiktok'"
                                    name="tag_tiktok"
                                    class="tag-tiktok"
                                />
                            </div>
                            <div v-if="detail.type === 'redbook'" class="tips">
                                小红书号：{{ detail.id }}
                            </div>
                            <div v-else-if="detail.type === 'tiktok'" class="tips">
                                抖音号：{{ detail.id }}
                            </div>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="item">
                            <span class="label">发帖量</span>
                            <div class="value">{{ detail.postNum }}</div>
                        </div>
                        <div class="item">
                            <span class="label">热议度</span>
                            <div class="value">{{ detail.hot }}</div>
                        </div>
                        <div class="item">
                            <span class="label">历史帖子</span>
                            <div class="value">{{ detail.history }}</div>
                        </div>
                    </div>
                </div>
            </VanSkeleton>

            <VanSkeleton title :loading="skeletonLoading" row="5">
                <div class="content">
                    <SectionTitle title="KOL详情" />
                    <div class="kol-info">
                        <p>{{ detail.detail }}</p>
                        <KolTags :tags="detail.tags" class="tags" />
                        <div class="home-info">
                            <div class="item">
                                <div class="value">{{ numberToW(detail.follow) }}</div>
                                <div class="label">关注</div>
                            </div>
                            <div class="item">
                                <div class="value">{{ numberToW(detail.fans) }}</div>
                                <div class="label">粉丝</div>
                            </div>
                            <div class="item">
                                <div class="value">{{ numberToW(detail.star) }}</div>
                                <div class="label">获赞与收藏</div>
                            </div>
                            <div class="homepage" @click="goHomepage">访问主页</div>
                        </div>
                    </div>

                    <SectionTitle title="昨日帖子" />
                    <LinkList :list="detail.links" />
                </div>
            </VanSkeleton>
        </div>
    </div>
</template>

<script lang="ts" setup name="KolDetail">
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import KolTags from '@/components/KolTags/index.vue'
import useMockData from '@/hooks/useMockData'
import useSkeleton from '@/hooks/useSkeleton'
import { numberToW } from '@/utils'
const route = useRoute()
const { kolList } = useMockData()
const { skeletonLoading } = useSkeleton()
const id = ref('')
onBeforeMount(() => {
    id.value = String(route.query.id)
})

const index = computed(() => kolList.value.findIndex(item => item.id === id.value))
const detail = computed(() => kolList.value[index.value])
const rank = computed(() => (index.value + 1 > 9 ? index.value + 1 : '0' + (index.value + 1)))
const goHomepage = () => {
    location.href = detail.value.url
}
</script>

<style lang="scss" scoped>
.container {
    background: $pageBg;
    overflow: hidden;
}
.kol-item {
    padding: 0;
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

    .item {
        @include box;
        width: calc((100% - 16px) / 3);
        padding: 13px 5px 13px 15px;
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
    }
}
.icon {
    font-size: 30px;
    position: absolute;
    right: 2px;
    top: 0;
    transform: translateY(-30%);
    &.tiktok {
        font-size: 12px;
        right: 7px;
        transform: translateY(0);
    }
}
.top {
    @include box;
    overflow: hidden;
    margin-bottom: 8px;
    .info {
        padding: 15px 15px 15px 65px;
        position: relative;
        padding-left: 80px;
        box-sizing: border-box;
        .avatar {
            position: absolute;
            left: 15px;
            top: 15px;
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
            color: $subColor;
        }
    }
}
.bottom {
    display: flex;
    justify-content: space-between;
}

.content {
    @include box;
    border-radius: 20px 20px 0 0;
    box-shadow: none;
}
.kol-info {
    padding: 0 15px 10px;
    box-sizing: border-box;
    p {
        position: relative;
        margin: 0 0 8px;
        padding: 0 0 0 15px;
        box-sizing: border-box;
        font-size: 15px;
        &::after {
            content: '';
            width: 5px;
            height: 5px;
            background: $primary;
            border-radius: 50%;
            position: absolute;
            top: 8px;
            left: 0;
        }
    }
}
.tags {
    margin-bottom: 6px;
}
.home-info {
    display: flex;
    flex-wrap: nowrap;
    @include box;
    box-shadow: none;
    background: $fade;
    justify-content: space-around;
    align-items: center;
    .item {
        text-align: center;
        .value {
            font-size: 15px;
            font-weight: $bold;
            padding: 5px 0 5px;
            box-sizing: border-box;
        }
        .label {
            color: $subColor;
            padding-bottom: 5px;
            box-sizing: border-box;
        }
    }
    .homepage {
        font-size: 12px;
        font-weight: $semiBold;
        text-align: center;
        padding: 0 11px;
        height: 30px;
        line-height: 30px;
        border: 1px solid $primary;
        border-radius: 15px;
        box-sizing: border-box;
    }
}
.tag {
    &-redbook {
        font-size: 40px;
        height: 22px !important;
        margin-left: 5px;
    }
    &-tiktok {
        font-size: 40px;
        height: 22px !important;
        position: relative;
    }
}
</style>
