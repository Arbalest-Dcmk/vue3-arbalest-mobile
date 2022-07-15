<template>
    <div class="breadcrumb" @click="goBack">{{ date }} / {{ typeName }} / {{ routeTitle }}</div>
</template>

<script lang="ts" setup name="Breadcrumb">
const store = useStore()
const route = useRoute()
const router = useRouter()
const date = computed(() => store.state.app.date)
const typeName = computed(() => store.state.app.typeName)
const routeTitle = computed(() => route.meta.title || '')
const goBack = () => router.back()
</script>

<style lang="scss" scoped>
.breadcrumb {
    color: $subColor;
    margin: 10px 15px 15px;
    padding-left: 15px;
    box-sizing: border-box;
    position: relative;
    &::after {
        content: '';
        width: 0;
        height: 0;
        border: 4px solid transparent;
        border-right: 8px solid $subColor;
        position: absolute;
        left: -6px;
        top: 50%;
        transform: translateY(-60%);
    }
}
</style>
