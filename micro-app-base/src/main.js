import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// css配置
const common = require("./assets/styles/common.css");
// js配置
import * as loadash from "lodash";
const main = require("./assets/js/index.js");

import microApp from "@micro-zoe/micro-app";
microApp.start({ globalAssets: { css: [common], js: [loadash, main] } });

const app = createApp(App);
app.use(router);
app.mount("#app");

// 监听子应用卸载
window.addEventListener("unmount", () => {
    console.log("子应用micro-app-vue卸载了");
    app.unmount();
});
