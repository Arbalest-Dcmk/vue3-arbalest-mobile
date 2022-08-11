<template>
    <div class="chart-container" :style="{ width: width, height: height }">
        <transition name="fade" mode="out-in">
            <div v-show="chartRef" ref="chartRef" class="chart"></div>
        </transition>
    </div>
</template>

<script lang="ts" setup name="Chart">
import echarts from './echarts'

import { debounce } from 'lodash'

const props = defineProps({
    width: {
        type: String,
        default: '100%'
    },
    height: {
        type: String,
        default: '300px'
    },
    option: {
        type: Object,
        required: true
    }
})

let myChart: any = null
const chartRef = ref()

const init = () => {
    myChart = echarts.init(chartRef.value)
    watch(
        () => props.option,
        () => {
            myChart && myChart.setOption(props.option)
        },
        { deep: true, immediate: true }
    )
}

const resizeHandler = debounce(() => myChart && myChart.resize(), 200)

onMounted(() => {
    window.addEventListener('resize', resizeHandler)
    // use nextTick to avoid get clientWidth is 0
    nextTick(init)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeHandler)
    myChart = null
})
</script>

<style lang="scss" scoped>
.chart {
    width: 100%;
    height: 100%;
}
</style>
