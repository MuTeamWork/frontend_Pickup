<template>
  <div class="container">
    <el-upload class="upload-demo" name="avatar" drag :before-upload="beforeUpload" :on-success="handleSuccess" :on-error="handleError" :action="uploadAction" :multiple="true">
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        拖拽 /点击此处选择图片
      </div>
      <template #tip>
        <div class="el-upload__tip">
          小于500kb的Jpg /png文件
        </div>
      </template>
    </el-upload>
  </div>
  <div v-if="imageUrls.length > 0">
    <h3>已上传的图片链接：</h3>
    <ul>
      <li v-for="(imageUrl, index) in imageUrls" :key="index">
        <a :href="imageUrl" target="_blank">{{ imageUrl }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { UploadFilled } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const imageUrls = ref([])

const uploadAction = "http://localhost:3000/fileUpload" // 替换成你的上传接口地址

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  const isLt500K = file.size / 1024 < 500

  if (!isJpgOrPng) {
    ElMessage.error('只能上传 JPG/PNG 格式的图片')
  }
  if (!isLt500K) {
    ElMessage.error('图片大小必须小于 500KB')
  }

  return isJpgOrPng && isLt500K
}

const handleSuccess = (response, file) => {
  // 上传成功，添加图片链接
  response.imageUrl = "";
  imageUrls.value.push(response.imageUrl)
  ElMessage({
    message: '上传成功',
    type: 'success',
  })
}

const handleError = (err) => {
  // 上传失败
  ElMessage.error('上传失败')
}
</script>

<style scoped>
.container {
  width: 50%;
  margin: 20px auto;
}

:deep(.el-upload-dragger) {
  border: 5px dashed var(--el-border-color);
}
</style>
