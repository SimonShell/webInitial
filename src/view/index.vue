<style lang="less">
html,
body {
    width: 100%;
    height: 100%;
    font-size: 12px;
}
body {
    background: #A8ABB0;
}
</style>
<template>
<!-- <keep-alive> -->
    <router-view></router-view>
<!-- </keep-alive> -->
</template>
<script>
export default {
    created() {
        window.templateCenterGlobalObj = {};
    }
};
</script>
