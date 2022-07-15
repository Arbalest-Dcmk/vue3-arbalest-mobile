<template>
    <div class="container">
        <div class="rank-list">
            <Component
                :is="is"
                v-for="(item, index) in list[is]"
                :key="index"
                :value="{ ...item, index }"
                :rank="index + 1"
            />
        </div>
        <LoadMore :list="list[is]" />
    </div>
</template>

<script lang="ts">
// setup内无法注册动态组件
import GoodsItem from '@/components/Goods/GoodsItem.vue'
import CategoryItem from '@/components/Category/CategoryItem.vue'
import KolItem from '@/components/Kol/KolItem.vue'
import LoadMore from '@/components/LoadMore/index.vue'
export default defineComponent({
    name: 'RankList',
    components: {
        GoodsItem,
        CategoryItem,
        KolItem
    }
})
</script>

<script lang="ts" setup>
import useMockData from '@/hooks/useMockData'
const props = defineProps({
    is: {
        type: String,
        default: 'GoodsItem'
    }
})
const { goodsList, categoryList, kolList } = useMockData()
const list = ref<Record<string, any>>({
    GoodsItem: goodsList,
    CategoryItem: categoryList,
    KolItem: kolList
})
</script>

<style lang="scss" scoped></style>
