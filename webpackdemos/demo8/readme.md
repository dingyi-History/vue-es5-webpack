## demo8 - vue es5 组件化

* 😛 目标1 - 把demo6那套再整理下,把css单独抽在外面进行开发,考虑代码组织的方案
* 由于vue-loader依赖es6所以暂时不用
* 目前考虑的最合适的目录结构

```
+ dist/                         // 打包目录
  - build.js                    // 打包的Js
  - build.css                   // 打包的css文件
+ src/                          // 开发目录
  - main.js                     // 入口文件，vue初始化
  - router.js                   // 路由
  + app/                        // 根组件
    + css/                      // 通用的css样式
    + iconfont/                 // 全局通用的iconfont
    + libs/                     // 如果有的一些第三方或自定义非npm的类库
    + commoncomponent/          // 一个通用的组件，类似页头页脚这种
      - index.js                // 组件的js文件
      - commoncomponent.css     // 该通用组件的css样式
      - commoncomponent.html    // 该通用组件的html片段
    - app.css                   // 根组件的CSS样式
    - app.html                  // 根组件的html片段
    - index.js                  // 根组件js代码
  + view1/                      // 某个页面（以主路由为准）
    - index.js                  // 该页面的js文件
    - view1.html                // 该页面的html片段
    + component1/               // 一个子组件文件夹
      - index.js                // 该子组件js代码
      - component1.html         // 该子组件html
    + css/                      // 该页面中所有的css文件
      - view1.css               // 页面布局
      - index.js                // 页面css汇总
      - component1.css          // 页面子组件css文件
  + base/                       // 基础的内容
    + utils/                    // 元件
    + directive/                // 指令    
- webpack.config.js             // webpack配置文件      
+ webpack.config/               // webpack配置目录 (待考虑)              
```

* 还有种看似不错，就是在require()的时候层级比较多的

```
+ webpack.config/
- webpack.config.js
+ src/
  + html/
    - app.html  // 根组件 html
    - commoncomponent1.html // 通用的组件 html
    + view1
      - index.html
      - component1.html
      - component2.html
  + js/
    - app.js    // 根组件 JS
    - commoncomponent1.js // 通用的组件 js
    + view1/
      - index.js
      - component1.js
      - component2.js
  + css/
    - app.css  // 根组件 样式
    + view1/
      - index.css
      - component1.css
      - component2.css
  + base/
    + utils/
    + directive/    
  - main.js
  - router.js
```