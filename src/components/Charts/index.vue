<template>
    <div ref="chartsEl" :style="{ width: width, height: height }"></div>
</template>

<script lang="ts" setup name="Charts">
import * as echarts from 'echarts'
import { debounce } from 'lodash-es'
let myChart: any = null
const chartsEl = ref()
const props = defineProps({
    width: {
        type: String,
        default: '100%'
    },
    height: {
        type: String,
        default: '8rem'
    },
    option: {
        type: Object,
        required: true
    }
})

onMounted(() => {
    nextTick(() => {
        myChart = echarts.init(chartsEl.value)
        myChart.setOption(props.option)
        window.addEventListener('resize', resizeHandler)
    })
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeHandler)
    myChart = null
})

watch(
    () => props.option,
    () => myChart.setOption(props.option)
)

const resizeHandler = debounce(() => myChart && myChart.resize(), 300)
</script>

<style lang="scss" scoped></style>
