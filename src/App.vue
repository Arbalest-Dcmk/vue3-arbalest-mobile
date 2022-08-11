<template>
    <van-config-provider>
        <router-view />
    </van-config-provider>
</template>

<script lang="ts">
import { useTitle } from '@/hooks/useTitle'
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'App',
    setup() {
        useTitle()
    }
})
</script>
<style lang="scss" scoped></style>
