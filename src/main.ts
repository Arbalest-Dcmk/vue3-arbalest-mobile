import { createApp } from 'vue'
import router from '@/router'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'normalize.css'
import 'amfe-flexible'
import 'vant/lib/index.css'
import '@/style/index.scss'
import 'virtual:svg-icons-register'
import '@/router/guide'

createApp(App).use(createPinia()).use(router).mount('#app')
