<template lang="html">
<div class="main">
    <Sidebar></Sidebar>
    <div class="content">
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

<style lang="css">
</style>
