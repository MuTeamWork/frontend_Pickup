<script setup>
import router from "../router/index.js";

const login = () =>{
  router.push('/login')
}
</script>

<template>
  <div class="ContentArea">
    <div class="BodyArea">
      <div class="HistoryToggleOff">
        <svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320" fill="none">
          <path d="M209.6 277.92L225.6 305.76C210.24 312.8 193.44 317.44 176 319.2V286.88C187.84 285.44 199.04 282.4 209.6 277.92ZM33.1201 176H0.800049C2.56005 193.6 7.20005 210.24 14.2401 225.6L42.0801 209.6C37.6001 199.04 34.5601 187.84 33.1201 176ZM209.6 42.08L225.6 14.24C210.24 7.19999 193.6 2.55999 176 0.799988V33.12C187.84 34.56 199.04 37.6 209.6 42.08ZM286.88 144H319.2C317.44 126.4 312.8 109.76 305.76 94.4L277.92 110.4C282.4 120.96 285.44 132.16 286.88 144ZM110.4 277.92L94.4001 305.76C109.76 312.8 126.56 317.44 144 319.2V286.88C132.16 285.44 120.96 282.4 110.4 277.92ZM144 33.12V0.799988C126.4 2.55999 109.76 7.19999 94.4001 14.24L110.4 42.08C120.96 37.6 132.16 34.56 144 33.12ZM261.76 82.72L289.6 66.56C279.52 52.64 267.2 40.32 253.28 30.24L237.12 58.08C246.56 65.28 254.72 73.44 261.76 82.72ZM42.0801 110.4L14.2401 94.4C7.20005 109.76 2.56005 126.4 0.800049 144H33.1201C34.5601 132.16 37.6001 120.96 42.0801 110.4ZM286.88 176C285.44 187.84 282.4 199.04 277.92 209.6L305.76 225.6C312.8 210.24 317.44 193.44 319.2 176H286.88ZM237.28 261.76L253.44 289.6C267.36 279.52 279.68 267.2 289.76 253.28L261.92 237.12C254.72 246.56 246.56 254.72 237.28 261.76ZM82.72 58.24L66.72 30.24C52.64 40.48 40.4801 52.64 30.4001 66.72L58.24 82.88C65.28 73.44 73.44 65.28 82.72 58.24ZM58.24 237.28L30.4001 253.28C40.4801 267.2 52.8 279.52 66.72 289.6L82.8801 261.76C73.4401 254.72 65.28 246.56 58.24 237.28ZM176 80H144V166.56L212.64 235.2L235.2 212.64L176 153.44V80Z" fill="#FFB319" fill-opacity="0.24"/>
        </svg>
      </div>
      <div class="Group2" @click="login">
        <div class="SignInToSaveSettings display-large">Sign in to save upload history</div>
        <div class="ArrowCircleRight">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path
                d="M55 30C55 16.2 43.8 5 30 5C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30ZM10 30C10 18.95 18.95 10 30 10C41.05 10 50 18.95 50 30C50 41.05 41.05 50 30 50C18.95 50 10 41.05 10 30ZM40 30L30 40L26.475 36.475L30.425 32.5H20V27.5H30.425L26.45 23.525L30 20L40 30Z"
                fill="black"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ContentArea {
  display: flex;
  justify-content: center;
  align-items: center;
}
.Group2:hover {
  /* 鼠标悬浮时的样式 */
  color: mediumblue;
  .ArrowCircleRight path{
    fill: mediumblue;
  }
}


.BodyArea {
  flex: 1 1 0;
  align-self: stretch;
  padding: 128px 330px 216px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  display: flex;
}

.HistoryToggleOff {
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

.Group2 {
  align-self: stretch;
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
}

.ArrowCircleRight {
  width: 60px;
  height: 60px;
  padding-left: 240px;
  left: 616px;
  top: 6px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
