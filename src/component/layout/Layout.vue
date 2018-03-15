<template lang="html">
<div class="app-wrapper">
    <Sidebar class="sidebar-container"></Sidebar>
    <div class="main-container">
        <Navbar></Navbar>
        <Content></Content>
    </div>
</div>
</template>

<script>
import {
    Navbar,
    Sidebar,
    Content
} from '@/component/layout/component'
export default {
    components: {
        Navbar,
        Sidebar,
        Content
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/style/mixin.scss";
.app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
</style>
