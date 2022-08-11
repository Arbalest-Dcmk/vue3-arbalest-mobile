<template>
    <div class="page login">
        <div class="container">
            <div class="title">Login</div>
            <van-form ref="formRef" :show-error-message="false" validate-first>
                <van-field
                    v-model.trim="formData.username"
                    placeholder="输入账号"
                    label="账号"
                    autocomplete="off"
                    :rules="rules.username"
                />
                <van-field
                    v-model.trim="formData.password"
                    placeholder="输入密码"
                    label="密码"
                    type="password"
                    autocomplete="off"
                    :rules="rules.password"
                />
            </van-form>
            <van-button :disabled="loading" block type="primary" @click="doSubmit">登录</van-button>
        </div>
    </div>
</template>

<script lang="ts" setup name="Login">
import { useUserStore } from '@/store/user'
import { useValidate } from '@/hooks/useValidate'

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
    password: [
        { required: true, message: '请输入密码' },
        {
            pattern: /^[a-zA-Z0-9]{2,6}$/,
            message: '密码格式为2-6位大小写字母及数字'
        }
    ]
}

const { doValidate } = useValidate(formRef)

const doLogin = async () => {
    try {
        loading.value = true
        await userStore.login(formData)
        router.push(redirectUrl.value)
    } finally {
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
