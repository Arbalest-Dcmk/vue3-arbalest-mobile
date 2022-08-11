# Vue3 Arbalest Mobile

## 技术栈

### 主要生产依赖

-   [vue] - \* 开发前确保已完整阅读 vue3 文档
-   [vant] - 基础组件库
-   [pinia] - 状态管理
-   [vue-router] - 路由管理
-   [vueuse] - 针对 vue 的常用 hooks
-   [lodash] - 常用工具函数集
-   [axios] - 请求库

### 主要开发依赖

-   [vite] - 开发与构建工具
-   [husky] - git hooks 工具
-   [commitlint] - git commit 格式校验
-   [lint-staged] - 针对 commit 所更改文件的 lint 校验
-   [typescript] - JavaScript 的超集，添加了静态类型

## 目录结构（src/）

-   api ([axios])- 请求封装（modules 目录下文件名对应功能或模块）
-   assets - svg 图标，图片等资源文件
-   components - 公用业务组件
-   config - 全局配置，接口地址，常量字典等
-   enum - ts 枚举
-   hooks - 需抽象提取出的多处通用逻辑 (命名规范文件名前缀加 use)
-   layout - 整体布局组件
-   router - 路由配置（静态路由添加到 index 中，动态路由按功能模块于 modules 中新建）
-   store ([pinia])- 需要维护的全局状态（文件名对应功能或模块）
-   style - 需要全局使用或覆盖的样式
-   utils - 无关业务的工具纯函数
-   views - 路由需匹配的页面组件（按路由层级划分）

---

## 开发

```
安装依赖
npm install

本地启动
npm run dev

格式检查
npm run lint
```

## 规范

### 降低后续开发与维护成本

-   [风格指南]

-   代码可读性（包括且远不限于驼峰，英文命名，命名语义完整等）
-   git commit HEAD 规范遵循 `<type>(<scope>): <subject>`

## 开发工具

-   [vscode] - 基于 electron 实现的代码编辑器
-   [volar] - vue3 的 vscode 插件
-   [vue devtools] - chrome 浏览器 的 vue 开发插件

[vite]: https://cn.vitejs.dev/
[vue]: https://v3.cn.vuejs.org/
[vant]: https://vant-ui.github.io/vant/#/zh-CN
[pinia]: https://pinia.vuejs.org/
[vue-router]: https://router.vuejs.org/zh/
[vueuse]: https://vueuse.org/
[lodash]: https://lodash.com/docs/4.17.15
[axios]: https://axios-http.com/
[风格指南]: https://v3.cn.vuejs.org/style-guide/#%E4%BC%98%E5%85%88%E7%BA%A7-b-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90
[husky]: https://typicode.github.io/husky/#/
[commitlint]: https://commitlint.js.org/#/
[lint-staged]: https://github.com/okonet/lint-staged#readme
[vite]: https://cn.vitejs.dev/
[typescript]: https://www.typescriptlang.org/
[vscode]: https://code.visualstudio.com/
[volar]: https://github.com/johnsoncodehk/volar
[vue devtools]: https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd
