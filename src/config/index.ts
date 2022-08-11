const env = import.meta.env.MODE === 'production' ? 'prod' : 'dev'

console.log('env: ', env)

const envConfig = {
    dev: {
        baseUrl: '/api'
    },
    prod: {
        baseUrl: '/api'
    }
}
export const TOKEN_KEY = 'Authorization'
export const TITLE = 'vue3 mobile'

export default {
    ...envConfig[env]
}
