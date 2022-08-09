import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import viteSvgIcons from 'vite-plugin-svg-icons'
import viteArbalest from 'vite-plugin-arbalest'
import postCssPxToRem from 'postcss-pxtorem'

export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: ['vue', 'vue-router'],
            dts: 'types/components.d.ts'
        }),
        Components({
            dirs: ['src/components'],
            dts: 'types/auto-imports.d.ts',
            resolvers: [
                VantResolver({
                    importStyle: false
                })
            ]
        }),
        viteSvgIcons({
            iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
            symbolId: 'icon-[dir]-[name]'
        }),
        viteArbalest()
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/style/variables.scss";`
            }
        },
        postcss: {
            plugins: [
                postCssPxToRem({
                    rootValue: 37.5,
                    propList: ['*']
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
        host: '0.0.0.0',
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
