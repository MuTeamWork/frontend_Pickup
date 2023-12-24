<template>
  <div class="search-container">
    <el-autocomplete
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        placeholder="Enter description to search..."
        size="large"
        @select="handleSubmit"
        @keyup.enter.native="handleSubmit"
        :suffix-icon="Search"
        class="search-input"
        style="width: 416px;height: 40px;"
    />
  </div>
  <el-row style="padding-left: 60px;padding-right: 60px" :gutter="8">
    <el-col :span="3" v-for="item in Data.fileList" :key="item.fid">
      <el-card :body-style="{ padding: '0px' }" class="card" shadow="hover" style="margin-left: 0">
        <div class="card-header" ref="headerRef">
          <div class="svg-icon">
            <div class="del" @click="delPic(item.fid)">
              <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_54566_3532)">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M13.5 2.5V3.33333H17.6667V5H16.8333V15.8333C16.8333 16.75 16.0833 17.5 15.1667 17.5H6.83334C5.91668 17.5 5.16668 16.75 5.16668 15.8333V5H4.33334V3.33333H8.50001V2.5H13.5ZM6.83334 15.8333H15.1667V5H6.83334V15.8333ZM8.50001 6.66667H10.1667V14.1667H8.50001V6.66667ZM13.5 6.66667H11.8333V14.1667H13.5V6.66667Z"
                        fill="black"/>
                </g>
                <defs>
                  <filter id="filter0_d_54566_3532" x="-3" y="0" width="28" height="28" filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_54566_3532"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_54566_3532" result="shape"/>
                  </filter>
                </defs>
              </svg>
            </div>
            <div class="box"></div>
            <div class="link" @click="copyToClipboard(item.file)">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" fill="none">
                <g clip-path="url(#clip0_54566_3563)" filter="url(#filter0_d_54566_3563)">
                  <g filter="url(#filter1_d_54566_3563)">
                    <path
                        d="M17.1667 5.83333H13.8333V7.5H17.1667C18.5417 7.5 19.6667 8.625 19.6667 10C19.6667 11.375 18.5417 12.5 17.1667 12.5H13.8333V14.1667H17.1667C19.4667 14.1667 21.3333 12.3 21.3333 10C21.3333 7.7 19.4667 5.83333 17.1667 5.83333ZM12.1667 12.5H8.83332C7.45832 12.5 6.33332 11.375 6.33332 10C6.33332 8.625 7.45832 7.5 8.83332 7.5H12.1667V5.83333H8.83332C6.53332 5.83333 4.66666 7.7 4.66666 10C4.66666 12.3 6.53332 14.1667 8.83332 14.1667H12.1667V12.5ZM9.66666 9.16667H16.3333V10.8333H9.66666V9.16667Z"
                        fill="black"/>
                  </g>
                </g>
                <defs>
                  <filter id="filter0_d_54566_3563" x="-1" y="0" width="28" height="28" filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_54566_3563"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_54566_3563" result="shape"/>
                  </filter>
                  <filter id="filter1_d_54566_3563" x="0.666656" y="5.83333" width="24.6667" height="16.3333"
                          filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_54566_3563"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_54566_3563" result="shape"/>
                  </filter>
                  <clipPath id="clip0_54566_3563">
                    <rect width="20" height="20" fill="white" transform="translate(3)"/>
                  </clipPath>
                </defs>
              </svg>
            </div>

          </div>
        </div>
        <el-image style="width: 100%; height: 200px;" :src="item.thumbnail"/>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import {delPicture, getFileList, GetTag, Login, SearchFile} from '../api/file'
import {onMounted, ref} from 'vue';
import {reactive} from 'vue';
import {ElMessage} from "element-plus";
import router from "../router/index.js";
import { Search } from '@element-plus/icons-vue'
const state = ref('');

const links = ref([]);

const loadAll = () => {
  return Data.tagList.map(item => ({
    value: item,
  }));
};

let timeout;
const querySearchAsync = (queryString, cb) => {
  const results = queryString
      ? links.value.filter(createFilter(queryString))
      : links.value;

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    cb(results);
  }, 1000 * Math.random());
};

const createFilter = (queryString) => {
  return (linkItem) => {
    return (
        linkItem.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    );
  };
};


const handleSubmit = () =>{
  if (state.value === ""){
    getFile()
  }else {
    const formData = {
      tags: [state.value],
    };
    console.log(formData)
    getSearchFile(formData)
  }
}
const getSearchFile = (data) => {
  SearchFile(data).then(res => {
    if (res.status === 200 && Array.isArray(res.data)) {
      Data.fileList = res.data
    }
  })
};

onMounted(() => {
  links.value = loadAll();
});
// Use the defined type for the fileList array
const Data = reactive({
  fileList: [],
  tagList:[],
});
onMounted(() => {
  getFile()
  getTag()
})
const getFile = () => {
  getFileList().then(res => {
    if (res.status === 200 && Array.isArray(res.data)) {
      Data.fileList = res.data
    }
  })
};

const getTag = () => {
  GetTag().then(res => {
    if (res.status === 200 && Array.isArray(res.data)) {
      Data.tagList = res.data
      links.value = loadAll();
      console.log(Data.tagList)
    }
  })
};
const delPic = (id) => {
  const data={fids:[id]}
  console.log(BigInt(id).toString())
  delPicture(data)
      .then(res => {
        if (res.status === 200) {
          setTimeout(() => {
            window.location.reload();
          }, 500); // 1秒后刷新页面
          ElMessage.success('已成功删除');
        }else{
          ElMessage.warning('删除失败');
        }
      })
      .catch(error => {
        console.error('Login failed:', error);
        ElMessage.error('未知错误');
      });

}
const copyToClipboard = (textToCopy) => {
  const textarea = document.createElement('textarea');
  textarea.value = textToCopy;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  ElMessage.success('已复制到剪贴板');
}
</script>

<style scoped>
.search-container {
  display: flex;
  justify-content: flex-start;
  padding-left: 60px;
  padding-bottom: 16px;
  padding-top: 8px;
}
.card-header {
  background-color: rgba(240, 240, 240, 0.5);
  padding: 10px;
  position: absolute;
  width: calc(100% - 12px);
  top: 0;
  z-index: 2;
}

.box {
  width: 10px;
}

.svg-icon {
  height: 0;
  display: flex;
  justify-content: right;
  align-items: center;
  cursor: pointer;
  padding-top: 8px;
}

:deep(.el-image__inner) {
  object-fit: contain;
}

:deep(.el-divider--horizontal) {
  margin: 0px;
}

.card {
  text-align: center;
  margin: 10px;
  position: relative;
}

.imgText {
  font-size: 14px;
  display: inline-block;
  padding: 10px;
  color: #898989;
}
</style>
