<template>
  <div class="container">
    <el-upload class="upload-demo" name="avatar" drag :before-upload="beforeUpload" :on-success="handleSuccess"
               :on-error="handleError" :action="uploadAction" :multiple="true">
      <div class="Background">
        <div class="shape">
          <div class="Rectangle1"></div>
          <div class="Rectangle2"></div>
          <div class="Polygon1"></div>
          <div class="Ellipse1"></div>
        </div>
      </div>
      <div class="UploadAndShareYourImages">Upload and share your images</div>
      <div class="DragAndDropFilesHereOrClickToUpload">
        <span>Drag and drop files here or </span><span>Click to upload</span></div>
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
import {ref} from 'vue'
import {UploadFilled} from '@element-plus/icons-vue'
import {ElMessage} from 'element-plus'

const imageUrls = ref([])

const uploadAction = "https://www.fastmock.site/mock/0314575b179f8f13583244db97453df4/pic/fileUpload" // 替换成你的上传接口地址

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  const isLt500K = file.size / 1024 < 500

  if (!isJpgOrPng) {
    ElMessage.error('只能上传 JPG/PNG 格式的图片')
  } else if (!isLt500K) {
    ElMessage.error('图片大小必须小于 500KB')
  }
  return isJpgOrPng && isLt500K
}

const handleSuccess = (response, file) => {
  // 上传成功，添加图片链接
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
/* 外层包裹形状的容器 */
.Background {
  width: 280px;
  height: 280px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 40px;
}

.Rectangle1 {
  width: 140px;
  height: 140px;
  left: 0;
  top: 140px;
  position: absolute;
  background: rgba(255, 179, 25, 0.12);
}

.Rectangle2 {
  width: 99px;
  height: 99px;
  left: 140px;
  top: 210px;
  position: absolute;
  transform: rotate(-45deg);
  transform-origin: 0 0;
  background: rgba(255, 78, 100, 0.12);
}

.Polygon1 {
  width: 140px;
  height: 140px;
  left: 140px;
  top: 0;
  position: absolute;
  background: rgba(46, 125, 50, 0.12);
}

.Ellipse1 {
  width: 140px;
  height: 140px;
  left: 0;
  top: 0;
  position: absolute;
  background: rgba(52, 72, 240, 0.12);
  border-radius: 9999px;
}

/* Text */
.UploadAndShareYourImages {
  align-self: stretch;
  text-align: center;
  color: #191C1D;
  font-size: 36px;
  font-family: Figtree;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: 2px;
  word-wrap: break-word;
  margin-bottom: 40px;
}

.DragAndDropFilesHereOrClickToUpload {
  align-self: stretch;
  text-align: center;
  margin-bottom: 100px;
}

.DragAndDropFilesHereOrClickToUpload span {
  color: #191C1D;
  font-size: 32px;
  font-family: Figtree;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: 2px;
  word-wrap: break-word;
}

.container {
  min-height: 696px;
  max-height: 928px;
  width: 80%;
  margin: 20px auto;
}

:deep(.el-upload-dragger) {
  border: 16px dashed var(--el-border-color);
}
</style>
