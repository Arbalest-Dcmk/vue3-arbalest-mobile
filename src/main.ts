import { createApp } from 'vue'
import router from '@/router'
import store from '@/store'
import App from './App.vue'
import 'normalize.css'
import 'amfe-flexible'
import '@/style/index.scss'
import 'virtual:svg-icons-register'
import { Button, Tab, Tabs, Lazyload, Skeleton, Image, Empty, Loading } from 'vant'

createApp(App)
    .use(store)
    .use(router)
    .use(Button)
    .use(Skeleton)
    .use(Tabs)
    .use(Empty)
    .use(Loading)
    .use(Image)
    .use(Tab)
    .use(Lazyload)
    .mount('#app')
