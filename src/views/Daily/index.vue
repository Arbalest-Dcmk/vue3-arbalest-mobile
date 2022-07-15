<template>
    <div class="page">
        <TopTabs class="top" />
        <RankTabs />
    </div>
</template>

<script lang="ts" setup name="Daily">
import TopTabs from '@/components/TopTabs/index.vue'
import RankTabs from '@/components/RankTabs/index.vue'
</script>

<style lang="scss" scoped>
.top {
    margin-bottom: 25px;
}
.page {
    background: $pageBg;
}
</style>
