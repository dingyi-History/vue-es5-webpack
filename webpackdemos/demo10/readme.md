## demo10 - 是时候来个真实🌰栗子了

> 通过在前9个demo中的尝试，的确有了更加清晰的认识，其中重点在于基于webpack的模块化打包

### webpack目前使用的功能有

* 模块加载 `module.exports  和  require() `
* 为了加载css ,添加了 `css-loader`
* 为了转html为字符串用于vue组件模板，添加了 `html-loader`
* 为了实现css单独打包处理 ，添加了 `extract-text-webpack-plugin`
* 为了实现路由添加了 `vue-router`
* 为了实现根据路由按需加载，通过使用webpack split code 功能，将路由转为异步加载 `lazy load`

### 一些待考虑的词汇

* 图片等资源的打包
* 压缩
* 混淆
* hash命名
* 元件库
* 指令库
* weui
* iscroll
* touch 
* vuex
* 单元测试
* 野狗、leancloud、微信
* 阿里云、Node、CDN、Nginx、PM2
* ...