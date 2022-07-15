import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { resolve } from 'path'
import viteSvgIcons from 'vite-plugin-svg-icons'
import viteArbalest from 'vite-plugin-arbalest'
import styleImport, { VantResolve } from 'vite-plugin-style-import'
import postCssPxToRem from 'postcss-pxtorem'

export default defineConfig({
    plugins: [
        vue(),
        styleImport({
            resolves: [VantResolve()]
        }),
        AutoImport({
            imports: ['vue', 'vue-router', 'vuex'],
            dts:'types/components.d.ts'
        }),
        Components({
            dirs: ['src/components'],
            dts:'types/auto-imports.d.ts',
        }),
        viteSvgIcons({
            iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
            symbolId: 'icon-[dir]-[name]',
        }),
        viteArbalest()
    ],
    css:{
        preprocessorOptions:{
            scss:{
                additionalData: `@import "./src/style/variables.scss";`
            }
        },
        postcss:{
            plugins:[
                postCssPxToRem({
                    rootValue:37.5,
                    propList:['*']
                })
            ]
        }
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    server: {
        host:'0.0.0.0',
        port: 8080,
        open: true,
        proxy: {
            '/api': {
                target: '',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            }
        }
    }
})
