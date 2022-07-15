<template>
    <div class="section-title">{{ title }}</div>
</template>

<script lang="ts" setup name="SectionTitle">
const props = defineProps({
    title: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.section-title {
    font-size: 17px;
    position: relative;
    font-weight: $semiBold;
    padding: 15px 30px;
    box-sizing: border-box;
    &::after {
        content: '';
        width: 10px;
        height: 6px;
        border-radius: 3px;
        display: block;
        position: absolute;
        left: 12px;
        background: $red;
        top: 22px;
    }
}
</style>
