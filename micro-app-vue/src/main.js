/*
 * @Descripttion:
 * @Author: Coder-Tao
 * @Date: 2022-08-01 14:35:04
 * @LastEditTime: 2022-08-02 15:12:51
 */

// entry
import "./public-path";

import { createApp } from "vue";
import App from "./App.vue";
import router from './router'

const app = createApp(App);

app.use(router);
app.mount("#app");
