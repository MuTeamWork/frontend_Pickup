<script setup>
import router from "../router/index.js";

const login = () =>{
  router.push('/login')
}
</script>

<template>
  <div class="ContentArea">
    <div class="BodyArea">
      <div class="Save">
        <svg xmlns="http://www.w3.org/2000/svg" width="288" height="288" viewBox="0 0 288 288" fill="none">
          <path d="M224 0H32C14.24 0 0 14.4 0 32V256C0 273.6 14.24 288 32 288H256C273.6 288 288 273.6 288 256V64L224 0ZM256 256H32V32H210.72L256 77.28V256ZM144 144C117.44 144 96 165.44 96 192C96 218.56 117.44 240 144 240C170.56 240 192 218.56 192 192C192 165.44 170.56 144 144 144ZM48 48H192V112H48V48Z" fill="#3448F0" fill-opacity="0.24"/>
        </svg>
      </div>
      <div class="Group1" @click="login">
        <div class="SignInToSaveSettings display-large">Sign in to save settings</div>
        <div class="ArrowCircleRight">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M55 30C55 16.2 43.8 5 30 5C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30ZM10 30C10 18.95 18.95 10 30 10C41.05 10 50 18.95 50 30C50 41.05 41.05 50 30 50C18.95 50 10 41.05 10 30ZM40 30L30 40L26.475 36.475L30.425 32.5H20V27.5H30.425L26.45 23.525L30 20L40 30Z" fill="black"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* styles.css */

.ContentArea {
  padding-bottom: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.BodyArea {
  flex: 1 1 0;
  align-self: stretch;
  padding: 138px 330px 216px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  display: flex;
}

.Save {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Customize the SVG path if needed */
.Save svg {
  width: 288px;
  height: 288px;
  fill: #3448F0;
  fill-opacity: 0.24;
}

.Group1 {
  align-self: stretch;
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
}
.Group1:hover {
  /* 鼠标悬浮时的样式 */
  color: mediumblue;
  .ArrowCircleRight path{
    fill: mediumblue;
  }
}


.SignInToSaveSettings {
  width: 741px;
}

.ArrowCircleRight {
  width: 60px;
  height: 60px;
  padding-left: 24px;
  left: 675px;
  top: 8px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  fill: black;
}
</style>
