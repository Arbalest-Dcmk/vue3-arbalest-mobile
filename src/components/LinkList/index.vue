<template>
    <div class="link-list">
        <LinkItem v-for="(item, index) in list" :key="index" :value="item" />
    </div>
    <LoadMore :list="list" />
</template>

<script lang="ts" setup name="LinkList">
import { PropType } from 'vue'
import LinkItem from '@/components/LinkItem/index.vue'
import LoadMore from '@/components/LoadMore/index.vue'
defineProps({
    list: {
        type: Array as PropType<Record<string, any>[]>,
        default: function () {
            return []
        }
    }
})
</script>

<style lang="scss" scoped>
.link-list {
    margin: 0 15px;
    display: flex;
    flex-wrap: wrap;
    ::v-deep(.link-item) {
        &:nth-child(2n + 1) {
            margin-right: 10px;
        }
    }
}
</style>
