<template>
  <div class="SignInPanel">
    <div class="Rectangle5"></div>
    <div class="Rectangle6"></div>
    <div class="SignIn display-medium">Sign in</div>
    <div class="Email headline-small">Email</div>
    <input class="Rectangle1" type="text" v-model="mail">
    <div class="Username headline-small">Username</div>
    <input class="Rectangle10" type="text" v-model="username">
    <div class="Password headline-small">Password</div>
    <input class="Rectangle9" type="text" v-model="password">
    <div class="ArrowCircleRight" @click="register">
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
        <path
            d="M58.6666 32C58.6666 17.28 46.7199 5.33333 31.9999 5.33333C17.2799 5.33333 5.33325 17.28 5.33325 32C5.33325 46.72 17.2799 58.6667 31.9999 58.6667C46.7199 58.6667 58.6666 46.72 58.6666 32ZM10.6666 32C10.6666 20.2133 20.2133 10.6667 31.9999 10.6667C43.7866 10.6667 53.3333 20.2133 53.3333 32C53.3333 43.7867 43.7866 53.3333 31.9999 53.3333C20.2133 53.3333 10.6666 43.7867 10.6666 32ZM42.6666 32L31.9999 42.6667L28.2399 38.9067L32.4533 34.6667H21.3333V29.3333H32.4533L28.2133 25.0933L31.9999 21.3333L42.6666 32Z"
            fill="#191C1D"/>
      </svg>
    </div>
    <div class="hov">
      <div class="DonTHaveAnAccount headline-medium" @click="login">Already have an account?</div>
      <div class="IconsArrowForward24px" @click="login">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
              d="M20.0001 6.66666L17.6501 9.01666L26.9501 18.3333H6.66675V21.6667H26.9501L17.6501 30.9833L20.0001 33.3333L33.3334 20L20.0001 6.66666Z"
              fill="black"/>
        </svg>
      </div>
    </div>

  </div>
</template>

<script setup>
import {Login, Register, updateUserInfo} from "../api/file.js";
import {ref} from "vue";
import router from "../router/index.js";
import {ElMessage} from "element-plus";

const mail = ref("");
const username = ref("");
const password = ref("");
const register = () => {
  // 构造表单数据
  const formData = {
    mail: mail.value,
    username: username.value,
    password: password.value,
    // 其他表单字段
  };
  console.log(formData)
  // 调用后端提交数据的函数
  Register(formData)
      .then(res => {
        if (res.status === 200) {
          localStorage.setItem('token', res.token);
          console.log(res.token)
          ElMessage.success('注册成功');
          setTimeout(() => {
            window.location.reload();
          }, 1000); // 1秒后刷新页面
          router.push('/upload');
        }
        else {
          ElMessage.warning('注册失败');
        }
      })
      .catch(error => {
        // Handle login failure
        console.error('Login failed:', error);
        ElMessage.error('未知错误');
      });
};
const login = () => {
  router.push('/login')
}
</script>

<style scoped>
.blue-button {
  cursor: pointer;
}

/* 初始按钮样式，灰色 */
.ArrowCircleRight {
  cursor: pointer;
}

/* 激活状态下的按钮样式，蓝色 */
.ArrowCircleRight.active {
  fill: blue;
}

.SignInPanel {
  width: 592px;
  height: 532px;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 40%;
  left: 50%;
}

/* 背景 */
.Rectangle5 {
  width: 592px;
  height: 532px;
  background: #ECEEF0;
  border-bottom-left-radius: 64px;
  border-top-right-radius: 64px;
  position: relative; /* 使子元素相对于该元素定位 */
}

/* 放在Rectangle5上的其他元素 */
.Rectangle6 {
  position: absolute; /* 相对于Rectangle5定位 */
  top: 0;
  left: 0;
  width: 24px;
  height: 72px;
  background: #00677E;
}

.SignIn {
  position: absolute; /* 相对于Rectangle5定位 */
  top: 16px; /* 根据需要调整位置 */
  left: 48px; /* 根据需要调整位置 */
}

.Email {
  position: absolute; /* 相对于Rectangle5定位 */
  top: 92px; /* 根据需要调整位置 */
  left: 56px; /* 根据需要调整位置 */
}

.Username {
  position: absolute; /* 相对于Rectangle5定位 */
  top: 184px; /* 根据需要调整位置 */
  left: 56px; /* 根据需要调整位置 */
}

.Rectangle1 {
  position: absolute;
  top: 128px;
  left: 56px;
  width: 480px;
  height: 36px;
  padding-left: 16px;
  background: #E1E3E4;
  border-radius: 8px;
}

.Rectangle10 {
  position: absolute;
  top: 312px;
  left: 56px;
  width: 480px;
  height: 36px;
  padding-left: 16px;
  background: #E1E3E4;
  border-radius: 8px;
}

.Password {
  position: absolute; /* 相对于Rectangle5定位 */
  top: 276px; /* 根据需要调整位置 */
  left: 56px; /* 根据需要调整位置 */
}

.Rectangle9 {
  position: absolute; /* 相对于Rectangle5定位 */
  top: 220px; /* 根据需要调整位置 */
  left: 56px; /* 根据需要调整位置 */
  width: 480px;
  height: 36px;
  padding-left: 16px;
  background: #E1E3E4;
  border-radius: 8px;
}

.ArrowCircleRight {
  position: absolute; /* 相对于Rectangle5定位 */
  top: 372px; /* 根据需要调整位置 */
  left: 264px; /* 根据需要调整位置 */
  width: 64px;
  height: 64px;
}
.ArrowCircleRight:hover{
  path{
    fill: mediumblue;
  }
}

.DonTHaveAnAccount {
  position: absolute;
  top: 476px;
  left: 177px;
}

.IconsArrowForward24px {
  position: absolute; /* 相对于DonTHaveAnAccount定位 */
  top: 476px;
  left: 512px;
  width: 40px;
  height: 40px;
}

.hov{
  cursor: pointer;
}
.hov:hover {
  color: mediumblue;

  .IconsArrowForward24px path {
    fill: mediumblue;
  }
}
</style>


