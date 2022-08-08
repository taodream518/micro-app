<!--
 * @Descripttion: 
 * @Author: Coder-Tao
 * @Date: 2022-08-01 09:50:22
 * @LastEditTime: 2022-08-03 10:27:53
-->
<template>
    <div>
        <h1>子应用</h1>
        <micro-app
            name="vue"
            baseroute="/vue"
            url="http://localhost:8081/"
            @created="created"
            @beforemount="beforemount"
            @mounted="mounted"
            @unmount="unmount"
            @error="error"
        ></micro-app>
    </div>
</template>

<script setup>
const created = () => {
    console.log("created: ", "vue子应用创建成功");
};
const beforemount = () => {
    console.log("beforemount: ", "vue子应用挂载之前");
};
const mounted = () => {
    console.log("mounted: ", "vue子应用挂载成功");
};
const unmount = () => {
    console.log("unmount: ", "vue子应用已卸载");
};
const error = () => {
    console.log("error: ", "vue子应用渲染出错");
};
</script>

<style lang="scss" scoped>

</style>
