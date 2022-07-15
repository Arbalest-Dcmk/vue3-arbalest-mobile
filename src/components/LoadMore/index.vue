<template>
    <div class="load-more">
        <VanEmpty v-if="list.length <= 0" description="暂无数据" />
        <div v-else class="no-more">没有更多了</div>
    </div>
</template>

<script lang="ts" setup name="LoadMore">
defineProps({
    list: {
        type: Array,
        default: function () {
            return []
        }
    }
})
</script>

<style lang="scss" scoped>
.load-more {
    overflow: hidden;
}
.no-more {
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 12px;
    color: $subColor;
    margin-bottom: 20px;
    box-sizing: border-box;
}
</style>
