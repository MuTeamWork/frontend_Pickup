<!-- Navbar.vue -->
<template>
  <div class="HeaderArea">
    <div class="Logo">
      <img class="MutLogo1" src="../assets/pic.png" alt=""/>
      <div class="Picup">
        PicUp
      </div>
    </div>

    <div>
      <!-- AvatarPicture if token is available -->
      <div v-if="hasToken" class="AvatarPicture" @mouseover="setTooltip(true)" @mouseout="startHideTimer"
           @click="handleTooltipClick" :class="{ 'clicked': clicked }">
        <img class="AvatarPicture" src="../assets/user.jfif" alt=""/>
        <div v-if="showTooltip" @click="handleTooltipClick">
          <el-button type="danger" plain class="Tooltip">Logout</el-button>
        </div>
      </div>

      <!-- Sign in message if token is not available -->
      <div v-else class="sign" @click="logins">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path
              d="M16.5 10.5L14.4 12.6L18.3 16.5H3V19.5H18.3L14.4 23.4L16.5 25.5L24 18L16.5 10.5ZM30 28.5H18V31.5H30C31.65 31.5 33 30.15 33 28.5V7.5C33 5.85 31.65 4.5 30 4.5H18V7.5H30V28.5Z"
              fill="black"/>
        </svg>
        <div class="headline-medium">sign in</div>
      </div>
    </div>

  </div>
</template>

<script>
import router from "../router/index.js";

export default {
  data() {
    return {
      token: localStorage.getItem('token'),
      showTooltip: false,
      hideTimer: null, // 定时器
      clicked: false, // 点击状态
    };
  },
  computed: {
    hasToken() {
      return this.token !== null;
    },
  },
  created() {
    // 在组件创建时检查是否有 token
    this.token = localStorage.getItem('token');
  },
  methods: {
    logins() {
      // 使用 router.push 跳转而不是直接刷新页面
      router.push('/login');
    },
    setTooltip(value) {
      this.showTooltip = value;
    },
    startHideTimer() {
      // 如果鼠标悬浮状态，则不执行隐藏逻辑
      if (!this.showTooltip) {
        // 清除之前的定时器
        clearTimeout(this.hideTimer);
        // 启动新的定时器，在一秒后隐藏悬浮框
        this.hideTimer = setTimeout(() => {
          this.showTooltip = false;
        }, 5000);
      }
    },
    handleTooltipClick() {
      // 在这里添加删除 localStorage token 的逻辑
      localStorage.removeItem('token');
      // 切换点击状态
      this.clicked = true;
      // 可以在这里设置一个定时器，一段时间后重置 clicked 状态，以还原样式
      setTimeout(() => {
        this.clicked = false;
        window.location.reload();
      }, 500); // 1秒后重置 clicked 状态
      // 其他逻辑...
    },
  },
};
</script>


<style>
.AvatarPicture {
  position: relative;
  cursor: pointer;
}

.AvatarPicture.clicked {
  background-color: rgb(128, 128, 128); /* 灰色背景 */
}

.Tooltip {
  width: 90px;
  height: 40px;
  position: absolute;
  bottom: -40px; /* 调整垂直位置 */
  left: 50%;
  color: black;
  opacity: 0; /* 初始透明度为 0 */
  transition: opacity 0.5s ease;
  transform: translateX(-50%);
  border-top: 20px;
  padding: 5px; /* 内边距 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  display: none; /* 初始隐藏 */
  z-index: 999;
}

.AvatarPicture:hover .Tooltip {
  display: block; /* 鼠标悬浮时显示 */
  opacity: 1;
}

/* styles.css */

.sign {
  display: flex;
  align-items: center;
  width: 132px;
  cursor: pointer;
}

.sign svg {
  fill: black;
}

.sign:hover {
  color: mediumblue;

  path {
    fill: mediumblue;
  }
}

.sign .headline-medium {
  margin-left: 12px;
  font-size: 16px;
}

/* HeaderArea */
.HeaderArea {
  align-self: stretch;
  height: 96px;
  padding: 0 60px;
  background: white;
  box-shadow: 0 4px 40px rgba(255, 255, 255, 0.50);
  justify-content: center;
  align-items: center; /* 居中对齐 */
  margin-left: auto; /* 使HeaderArea从右边开始 */
  gap: calc(100vw - 463px); /* 这个属性可能需要根据您的具体需求调整 */
  display: flex; /* 使用 Flexbox 布局 */
}

/* Logo */
.Logo {
  display: flex; /* 使用 Flexbox 布局 */
  align-items: center; /* 垂直居中对齐 */
}

/* MutLogo1 */
.MutLogo1 {
  width: 48px;
  height: 48px;
  margin-right: 16px; /* 添加右侧间距 */
}

/* Picup */
.Picup {
  color: #191C1D;
  font-size: 36px;
  font-family: Figtree;
  font-weight: 600;
  line-height: 48px; /* 设置行高使文字垂直居中 */
  letter-spacing: 2px;
  word-wrap: break-word;
}

/* AvatarPicture */
.AvatarPicture {
  width: 48px;
  height: 48px;
  border-radius: 50%; /* 圆形头像 */
  margin-left: auto; /* 将头像推到最右侧 */
}

</style>
