<template>
    <el-row>
        <el-col :span="6" v-for="item in Data.fileList" :key="item.id">
            <el-card :body-style="{ padding: '0px' }" class="card">
                <el-image style="width: 100%;height: 300px;" :src="item.file_url" />
                <el-divider />
                <span class="imgText">图片地址:<a :href="item.file_url" target="_blank">{{ item.file_url }}</a></span>
            </el-card>
        </el-col>
    </el-row>
</template>

<script setup>
import { getFileList } from '../api/file'
import { onMounted, ref } from 'vue';
import { reactive } from 'vue';
const Data = reactive({
    fileList: []
})
onMounted(() => {
    getFile()
    // console.log(fileList);
})
const getFile = () => {
    getFileList().then(res => {
        if (res.code === 200) {
            Data.fileList = res.data
        }
    })
}
</script>

<style scoped>
:deep(.el-image__inner){
    object-fit: contain;
}
:deep(.el-divider--horizontal){
   margin: 0px;
}
.card{
    text-align: center;
    margin: 10px;
}
.imgText{
    font-size: 14px;
    display: inline-block;
    padding: 10px;
    color: #898989;
}
</style>