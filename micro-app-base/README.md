### 单独安装 scss

-   注意：`只有用到scss的基座或者子应用都需安装`

```shell
npm install -D sass-loader@7.3.1
npm install -D node-sass@4.14.1
```

### 基座引入全局 css

在基座中的`main.js`中引入全局 css, 子应用则可直接使用类名

```js
microApp.start({
    globalAssets: {
        css: [require("./assets/styles/common.css")],
    },
});
```
