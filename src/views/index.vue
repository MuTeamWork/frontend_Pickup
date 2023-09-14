<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <el-menu class="el-menu-demo" router  mode="horizontal" :ellipsis="false" default-active="/upload">
                    <h2>PicUp</h2>
                    <div class="flex-grow"></div>
                    <el-menu-item index="/preview">图片预览</el-menu-item>
                    <el-menu-item index="/upload">图片上传</el-menu-item>
                    <div class="flex-grow"></div>
                </el-menu>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>

    </div>
</template>

<script setup>
import { ref } from 'vue'

</script>

<style scoped>
.common-layout{
    height: 100%;
}
.flex-grow {
    flex-grow: 1;
}
</style>
