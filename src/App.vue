<template>
    <van-config-provider>
        <router-view />
    </van-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'App'
})
</script>
<style lang="scss" scoped>
.van-config-provider {
    height: 100%;
}
</style>
