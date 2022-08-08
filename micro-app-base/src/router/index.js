/*
 * @Descripttion:
 * @Author: Coder-Tao
 * @Date: 2022-08-01 09:50:22
 * @LastEditTime: 2022-08-03 10:15:43
 */
// router.js
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        // 👇 非严格匹配，/my-page/* 都指向 MyPage 页面
        path: "/",
        name: "home",
        component: () => import("../views/Home.vue"),
    },
    {
        // 👇 非严格匹配，/my-page/* 都指向 MyPage 页面
        path: "/vue/:page*",
        name: "vue",
        component: () => import("../VuePage.vue"),
    },
    {
        // 👇 非严格匹配，/my-page/* 都指向 MyPage 页面
        path: "/react/:page*",
        name: "react",
        component: () => import("../ReactPage.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
