<template>
  <div class="ContentArea">
    <div class="FooterArea">
      <div class="LeftSection">
        <img class="MutLogo1" src="../assets/pic.png"/>
      </div>
      <div class="RightSection">
        <div class="TextContainer">
          <div class="Text">
            <div class="Privacy">
              Privacy
            </div>
            <div class="TermsOfService">
              Terms of service
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ContentArea */
.ContentArea {
  width: calc(100vw - 120px);
  height: 100%;
  position: relative;
  flex-direction: column;
  bottom: 0;
}

/* FooterArea */
.FooterArea {
  padding: 24px 60px;
  justify-content: space-between; /* 使文字和图片之间有空间 */
  align-items: center;
  display: flex;
  flex-grow: 1;
}

/* LeftSection */
.LeftSection {
  display: flex;
  align-items: center;
}

/* RightSection */
.RightSection {
  display: flex;
  align-items: center;
}

/* TextContainer */
.TextContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 255px; /* 限制TextContainer的宽度为255px */
}

/* Text */
.Text {
  display: flex;
  justify-content: space-between; /* 使文字左右分布 */
  width: 100%; /* 让Text占满TextContainer的宽度 */
}

/* Privacy */
.Privacy {
  color: #40484C;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

/* TermsOfService */
.TermsOfService {
  color: #40484C;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

/* MutLogo1 */
.MutLogo1 {
  width: 48px;
  height: 48px;
  left: 0;
  top: 0;

}
</style>
