<template>
  <div class="HeaderArea">
    <div class="Logo">
      <img class="MutLogo1" src="../assets/pic.png"/>
      <div class="Picup">
        PicUp
      </div>
    </div>
    <div class="AvatarPicture">
      <img class="AvatarPicture" src="../assets/user.jfif"/>
    </div>
  </div>
</template>

<style>
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
