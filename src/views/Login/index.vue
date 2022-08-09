<template>
    <div class="page login">
        <div class="container">
            <div class="title">Login</div>
            <van-form ref="formRef" :show-error-message="false" validate-first>
                <van-field
                    v-model="formData.username"
                    placeholder="输入账号"
                    label="账号"
                    :rules="rules.username"
                />
                <van-field
                    v-model="formData.password"
                    placeholder="输入密码"
                    label="密码"
                    :rules="rules.password"
                />
            </van-form>
            <van-button :disabled="loading" block type="primary" @click="doSubmit">登录</van-button>
        </div>
    </div>
</template>

<script lang="ts" setup name="Login">
import { Toast } from 'vant'
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
const route = useRoute()
const router = useRouter()
const redirectUrl = computed(() => `${route.query.redirectUrl ?? '/'}`)
const loading = ref(false)

const formRef = ref()
const formData = reactive({
    username: '',
    password: ''
})
const rules = {
    username: [{ required: true, message: '请输入账号' }],
    password: [{ required: true, message: '请输入密码' }]
}

const doValidate = async () => {
    try {
        await formRef.value.validate()
        return true
    } catch (err: any) {
        const { message } = err[0] ?? {}
        message && Toast(message)
    }
}

const doLogin = async () => {
    try {
        loading.value = true
        await userStore.login(formData)
        router.push(redirectUrl.value)
    } catch {
        loading.value = false
    }
}

const doSubmit = async () => {
    if (!(await doValidate())) return
    doLogin()
}
</script>

<style lang="scss" scoped>
.login {
    background: $fade;
}

.container {
    padding: $pageInterval;
    box-sizing: border-box;
}

.title {
    align-self: center;
    padding: 30px 0;
    color: $subColor;
    font-size: 24px;
    text-align: center;
}

.van-form {
    @include box;
    margin: 30px 0;
    padding: 20px 0;
}
</style>
