<template>
    <div class="app">
        <router-view v-slot="{ Component }">
            <keep-alive :include="['Daily']">
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'App'
})
</script>
<style lang="scss" scoped></style>
