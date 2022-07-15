<template>
    <div class="trend-tip">
        {{ num }}{{ num !== '新增' ? '%' : '' }}<SvgIcon v-if="num !== '新增'" name="arrow" />
    </div>
</template>

<script lang="ts" setup name="TrendTip">
const props = defineProps({
    num: {
        type: [Number, String],
        default: 0
    }
})
</script>

<style lang="scss" scoped>
.trend-tip {
    font-size: 14px;
    display: inline-block;
    box-sizing: border-box;
    padding-left: 7px;
    color: $red;
}
::v-deep(.svg-icon) {
    font-size: 10px;
    padding-left: 5px;
    position: relative;
    bottom: 1px;
}
</style>
