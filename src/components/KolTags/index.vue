<template>
    <div class="kol-tags">
        <div v-for="(item, index) in tags" :key="index" class="kol-tag">{{ item }}</div>
    </div>
</template>

<script lang="ts" setup name="KolTags">
const props = defineProps({
    tags: {
        type: Array,
        default: function () {
            return ['狮子座', '中国', '时尚博主', '南京艺术学院']
        }
    }
})
</script>

<style lang="scss" scoped>
.kol-tags {
    display: flex;
    margin-bottom: 15px;
    .kol-tag {
        font-size: 12px;
        text-align: center;
        color: $red;
        padding: 2px 9px;
        box-sizing: border-box;
        margin: 5px;
        background: rgba(233, 31, 18, 0.1);
        border-radius: 5px;
        &:first-child {
            margin-left: 0;
        }
    }
}
</style>
