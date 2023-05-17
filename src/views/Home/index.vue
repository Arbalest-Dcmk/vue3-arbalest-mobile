<template>
    <div class="tabBar home">
        <h1 v-for="_i in 1" :key="_i">Home</h1>

        <Chart :option="chartOptions.lineOne" />
        <van-button size="small" type="primary" @click="updateChart">update chart 1</van-button>
        <br /><br />

        <Chart :option="chartOptions.lineTwo" />
        <van-button size="small" type="primary" @click="updateChartTwo">update chart 2</van-button>
        <br /><br />
    </div>
</template>

<script lang="ts" setup name="Home">
import options from '@/components/Chart/options'
import Chart from '@/components/Chart/index.vue'

const chartOptions = reactive({
    lineOne: { ...options.lineOption(), title: { text: 'Chart 1' } },
    lineTwo: { ...options.lineOption(), title: { text: 'Chart 2' } }
})

const updateChart = () => {
    chartOptions.lineOne.series.forEach(item => {
        item.data = item.data.map(() => Math.ceil(Math.random() * 1000))
    })
}

const updateChartTwo = () => {
    chartOptions.lineTwo.series.forEach(item => {
        item.data = item.data.map(() => Math.ceil(Math.random() * 1000))
    })
}
</script>

<style lang="scss" scoped>
.home {
    padding: 15px;
    box-sizing: border-box;
}
</style>
