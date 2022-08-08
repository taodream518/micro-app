<!--
 * @Descripttion: 
 * @Author: Coder-Tao
 * @Date: 2022-08-01 15:54:52
 * @LastEditTime: 2022-08-02 16:35:50
-->
<template>
    <div class="container">
        <div class="header">
            <router-link to="/">Home</router-link>
            <router-link to="/vue">Vue</router-link>
            <router-link to="/react">React</router-link>
        </div>
        <div class="body">
            <router-view />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    flex-direction: column;

    .header {
        flex: 0 0 54px;
        display: flex;
        align-items: center;

        a {
            padding: 0 10px;
        }
    }

    .body {
        flex: 1;
    }
}
</style>
