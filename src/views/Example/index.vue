<template>
    <div class="tabBar example">
        <h1>Example</h1>
        <van-button type="primary" size="small" @click="goDetail">go detail</van-button>
        <br /><br />
        <van-button type="primary" size="small" @click="doLogout">logout</van-button>
        <br /><br />
    </div>
</template>

<script lang="ts" setup name="Example">
import { useUserStore } from '@/store/user'

const router = useRouter()
const goDetail = () => {
    router.push('/example/detail')
}

const userStore = useUserStore()
const doLogout = () => {
    userStore.logout()
    router.push('/login')
}
</script>

<style lang="scss" scoped>
.example {
    padding: 15px;
    box-sizing: border-box;
}
</style>
