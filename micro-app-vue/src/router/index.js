/*
 * @Descripttion:
 * @Author: Coder-Tao
 * @Date: 2022-08-01 14:35:04
 * @LastEditTime: 2022-08-03 10:49:39
 */
import { createRouter, createWebHistory } from "vue-router";

// 配置子应用本身的路由表
const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
    },
];

// 创建路由实例
const router = createRouter({
    // 👇 __MICRO_APP_BASE_ROUTE__ 为micro-app传入的基础路由
    history: createWebHistory(window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL),
    routes,
});

// 导出实例
export default router;
