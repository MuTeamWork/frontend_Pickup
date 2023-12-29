<template>
  <div class="container">
    <el-upload class="upload-demo" name="file" drag :before-upload="beforeUpload" :on-success="handleSuccess"
               :on-error="handleError" :action="uploadAction" :multiple="true" :headers="headers">
      <div v-if="imageUrls.length <= 0">
        <div class="Background" >
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
      </div>

      <div v-else>

          <div class="UploadImage">
            <img data-v-16f6707d="" class="AvatarPicture1" :src="imageUrls[0]" alt="">
          </div>

        <div class="UploadComplete">Upload complete</div>
          <div class="EmbedCodes" @click.stop>
            <div class="Frame6">
              <div class="EmbedCode">Embed codes</div>
            </div>
            <div class="LinkOnly1">
              <div class="LinkOnly">Link only</div>
              <div class="LinkArea">
                <div class="HttpsExampleComImage4lkrcozn">{{ imageUrls[0] }}</div>
              </div>
            </div>
            <div class="LinkOnly1">
              <div class="Html">HTML</div>
              <div class="LinkArea">
                <div class="AHrefHttpsExampleComImage4lkrcoznTargetBlankImgSrcHttpsExampleComImage4lkrcoznJpgA">&lt;a href="{{ imageUrls[0] }}" target="_blank"&gt;&lt;img src="{{ imageUrls[0] }}" &gt;&lt;/a&gt;</div>
              </div>
            </div>
            <div class="LinkOnly1">
              <div class="Bbcode">BBCode</div>
              <div class="LinkArea">
                <div class="UrlHttpsExampleComImage4lkrcoznImgHttpsExampleComImage4lkrcoznJpgImgUrl">[url={{ imageUrls[0] }}[/img][/url]</div>
              </div>
            </div>
            <div class="LinkOnly1">
              <div class="Markdown">Markdown</div>
              <div class="LinkArea">
                <div class="ExampleFileNamePngHttpsExampleComImage4lkrcoznJpg">![{{ imageUrls[1]}}]({{ imageUrls[0] }})</div>
              </div>
            </div>
          </div>
      </div>
    </el-upload>

  </div>

  <Footer class="footer"/>

</template>

<script setup>
import {ref} from 'vue'
import {ElMessage} from 'element-plus'
import Footer from "../components/footer.vue";

const imageUrls = ref([])

const uploadAction = "http://10.0.0.5/api/file/fileUpload"

const headers = {
    'Authentication': localStorage.getItem('token')
}

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/bmp'|| file.type === 'image/webp'
  const isLt500K = file.size / 1024 < 50000

  if (!isJpgOrPng) {
    ElMessage.error('只能上传 JPG/PNG 格式的图片')
  } else if (!isLt500K) {
    ElMessage.error('图片大小必须小于 500KB')
  }
  return isJpgOrPng && isLt500K
}

const handleSuccess = (response, file) => {
  // 上传成功，添加图片链接
  if (response.status === 200){
    imageUrls.value = [];
    imageUrls.value.push(response.data.file)
    imageUrls.value.push(response.data.fileName)
    console.log(imageUrls)
    ElMessage.success('上传成功');
  }else {
    ElMessage.warning('上传失败');
  }
}

const handleError = (err) => {
  // 上传失败
  ElMessage.error('未知错误');
}
</script>

<style scoped>
.footer {
  margin-top: auto;
}
/* 外层包裹形状的容器 */
.Background {
  width: 280px;
  height: 250px;
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
  border: none;
  border-radius: 8px;
  padding-left: 0px;
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
  width: 0;
  height: 0;
  left: 140px;
  top: 0;
  position: absolute;
  border-left: 80px solid transparent;
  border-right: 80px solid transparent;
  border-bottom: 130px solid rgba(46, 125, 50, 0.12);;
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
  width: 80%;
  margin: 20px auto;
}

:deep(.el-upload-dragger) {
  border: 16px dashed var(--el-border-color);
}

/* UploadImage */
.UploadImage {
  width: 280px;
  height: 280px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  color: #70787C;
}

/* AvatarPicture */
.AvatarPicture1 {
  width: 280px;
  height: 280px;
}

/* UploadComplete */
.UploadComplete {

  text-align: center;
  color: #191C1D;
  font-size: 36px;
  font-family: Figtree;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: 1.80px;
  word-wrap: break-word;
}

/* EmbedCodes */
.EmbedCodes {
  width: 1135px;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  display: inline-flex;
  z-index: 999;
}

/* Frame6 */
.Frame6 {
  height: 28px;
  padding-left: 0.50px;
  padding-right: 922.50px;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
}

/* EmbedCodes header */
.EmbedCode {
  color: #191C1D;
  font-size: 22px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 28px;
  word-wrap: break-word;
}

/* LinkOnly */
.LinkOnly1 {
  width: 1103px;
  flex: 1 1 0;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: inline-flex;
  color: #191C1D;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 1px;
  word-wrap: break-word;
}


/* LinkArea */
.LinkArea {
  align-self: stretch;
  height: 64px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  background: #E1E3E4;
  border-radius: 8px;
  overflow: hidden;
  justify-content: flex-end;
  align-items: center;
  display: inline-flex;
  position: relative;
}
.LinkArea .el-button {
  position: absolute;
  top: 10px;
  right: 10px;
}

/* LinkArea content */
.LinkArea div {
  width: 1087px;
  height: 32px;
  color: #191C1D;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 1px;
  word-wrap: break-word;
}

</style>
