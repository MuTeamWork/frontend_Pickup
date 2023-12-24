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
<!--      <div class="leftbottom">-->
<!--        <svg xmlns="http://www.w3.org/2000/svg" width="803" height="509" viewBox="0 0 803 509" fill="none">-->
<!--          <path d="M3.15312 683.181C-148.86 643.594 -173.803 438.295 -35.6924 363.459L-8.17459 348.548C51.2858 316.329 94.7154 260.886 111.759 195.441L119.646 165.153L85.3918 156.233L119.646 165.153C159.233 13.1401 364.532 -11.8033 439.368 126.308L454.279 153.825C486.498 213.286 541.94 256.715 607.386 273.759L637.674 281.646C789.687 321.233 814.63 526.532 676.519 601.368L649.001 616.279C589.541 648.498 546.111 703.94 529.068 769.386L521.181 799.674C481.594 951.687 276.295 976.63 201.459 838.519L186.548 811.001C154.329 751.541 98.8864 708.111 33.4408 691.068L3.15312 683.181Z" stroke="#2E7D32" stroke-opacity="0.12" stroke-width="71"/>-->
<!--        </svg>-->
<!--      </div>-->

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
  display: flex;
  align-items: center;
  justify-content: center;
}

.Group1:hover {
  /* 鼠标悬浮时的样式 */
  color: mediumblue;
  .ArrowCircleRight path{
    fill: mediumblue;
  }
}


.SignInToSaveSettings {
  margin-right: 10px;
}

.ArrowCircleRight {
  margin-top: 9px;
}
</style>
