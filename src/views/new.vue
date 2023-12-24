<script setup>

import Footer from "./footer.vue";
</script>

<template>
  <div class="BodyArea"
       style="position: relative; display: flex; flex-direction: column; align-items: flex-start;padding-left:60px;padding-right: 60px ">

    <!-- Section 1 -->
    <div class="SectionContainer" style="display: flex; align-items: center; margin-bottom: 24px;">
      <!-- SVG Placeholder for HelpOutline -->
      <div class="HelpOutline" style=" height: 40px; margin-right: 20px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
              d="M18.3333 30H21.6666V26.6667H18.3333V30ZM20 3.33333C10.8 3.33333 3.33331 10.8 3.33331 20C3.33331 29.2 10.8 36.6667 20 36.6667C29.2 36.6667 36.6666 29.2 36.6666 20C36.6666 10.8 29.2 3.33333 20 3.33333ZM20 33.3333C12.65 33.3333 6.66665 27.35 6.66665 20C6.66665 12.65 12.65 6.66667 20 6.66667C27.35 6.66667 33.3333 12.65 33.3333 20C33.3333 27.35 27.35 33.3333 20 33.3333ZM20 10C16.3166 10 13.3333 12.9833 13.3333 16.6667H16.6666C16.6666 14.8333 18.1666 13.3333 20 13.3333C21.8333 13.3333 23.3333 14.8333 23.3333 16.6667C23.3333 20 18.3333 19.5833 18.3333 25H21.6666C21.6666 21.25 26.6666 20.8333 26.6666 16.6667C26.6666 12.9833 23.6833 10 20 10Z"
              fill="black"/>
        </svg>
      </div>
      <div class="HowToUploadAnImage"
           style="color: #191C1D; font-size: 32px; font-family: Roboto; font-weight: 400; line-height: 40px; word-wrap: break-word">
        How to upload an image?
      </div>
    </div>

    <!-- Detailed Instructions -->
    <div class="SectionContainer" style="display: flex; align-items: center;">
      <div class="HelpOutline" style="width: 40px; height: 40px; margin-right: 20px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path
              d="M16.5 10.5H19.5V13.5H16.5V10.5ZM16.5 16.5H19.5V25.5H16.5V16.5ZM18 3C9.72 3 3 9.72 3 18C3 26.28 9.72 33 18 33C26.28 33 33 26.28 33 18C33 9.72 26.28 3 18 3ZM18 30C11.385 30 6 24.615 6 18C6 11.385 11.385 6 18 6C24.615 6 30 11.385 30 18C30 24.615 24.615 30 18 30Z"
              fill="black"/>
        </svg>
      </div>
      <div
          class="YouMerelyNeedToDragTheImageIntoTheDesignatedRectangularAreaOnTheUploadPageOrClickOnThatAreaAndThenSelectTheDesiredImageFromTheFilePickerThatAppearsSubsequently"
          style=" color: #191C1D; font-size: 28px; font-family: Roboto; font-weight: 400; line-height: 36px; word-wrap: break-word; margin-bottom: 10px;">
        You merely need to drag the image into the designated rectangular area on the upload page, or click on that
        area, and then select the desired image from the file picker that appears subsequently.
      </div>
    </div>
    <!-- Divider -->
    <div class="Line3" style="width: 100%; height: 0px; border: 1px #C0C8CC solid;margin-bottom: 10px;"></div>

    <!-- Section 2 -->
    <div class="SectionContainer" style="display: flex; align-items: center; margin-bottom: 24px;">
      <!-- SVG Placeholder for Info -->
      <div class="Info" style="width: 40px; height: 40px; margin-right: 20px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
              d="M18.3333 30H21.6666V26.6667H18.3333V30ZM20 3.33333C10.8 3.33333 3.33331 10.8 3.33331 20C3.33331 29.2 10.8 36.6667 20 36.6667C29.2 36.6667 36.6666 29.2 36.6666 20C36.6666 10.8 29.2 3.33333 20 3.33333ZM20 33.3333C12.65 33.3333 6.66665 27.35 6.66665 20C6.66665 12.65 12.65 6.66667 20 6.66667C27.35 6.66667 33.3333 12.65 33.3333 20C33.3333 27.35 27.35 33.3333 20 33.3333ZM20 10C16.3166 10 13.3333 12.9833 13.3333 16.6667H16.6666C16.6666 14.8333 18.1666 13.3333 20 13.3333C21.8333 13.3333 23.3333 14.8333 23.3333 16.6667C23.3333 20 18.3333 19.5833 18.3333 25H21.6666C21.6666 21.25 26.6666 20.8333 26.6666 16.6667C26.6666 12.9833 23.6833 10 20 10Z"
              fill="black"/>
        </svg>
      </div>
      <div class="WhatIsExifInformationShouldIPreserveIt"
           style="color: #191C1D; font-size: 32px; font-family: Roboto; font-weight: 400; line-height: 40px; word-wrap: break-word">
        What is EXIF information? Should I preserve it?
      </div>
    </div>

    <!-- EXIF Details -->
    <div class="SectionContainer" style="display: flex; align-items: center; ">
      <div class="HelpOutline" style="width: 40px; height: 40px; margin-right: 20px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
              d="M16.5 10.5H19.5V13.5H16.5V10.5ZM16.5 16.5H19.5V25.5H16.5V16.5ZM18 3C9.72 3 3 9.72 3 18C3 26.28 9.72 33 18 33C26.28 33 33 26.28 33 18C33 9.72 26.28 3 18 3ZM18 30C11.385 30 6 24.615 6 18C6 11.385 11.385 6 18 6C24.615 6 30 11.385 30 18C30 24.615 24.615 30 18 30Z"
              fill="black"/>
        </svg>
      </div>
      <div
          class="ExifDataContainsCameraDateLocationAndImageDetailsPreserveItForPhotographyAnalysisAndOrganizingPhotosButConsiderRemovingItForPrivacyAndToReduceFileSize"
          style="color: #191C1D; font-size: 28px; font-family: Roboto; font-weight: 400; line-height: 36px; word-wrap: break-word; margin-bottom: 10px;">
        EXIF data contains camera, date, location, and image details. Preserve it for photography analysis and
        organizing
        photos, but consider removing it for privacy and to reduce file size.
      </div>
    </div>
    <!-- Divider -->
    <div class="Line4" style="width: 100%; height: 0px; border: 1px #C0C8CC solid; margin-bottom: 10px;"></div>

    <!-- Section 3 -->
    <div class="SectionContainer" style="display: flex; align-items: center;margin-bottom: 24px;">
      <!-- SVG Placeholder for Info -->
      <div class="Info" style="width: 40px; height: 40px; margin-right: 20px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
              d="M18.3333 30H21.6666V26.6667H18.3333V30ZM20 3.33333C10.8 3.33333 3.33331 10.8 3.33331 20C3.33331 29.2 10.8 36.6667 20 36.6667C29.2 36.6667 36.6666 29.2 36.6666 20C36.6666 10.8 29.2 3.33333 20 3.33333ZM20 33.3333C12.65 33.3333 6.66665 27.35 6.66665 20C6.66665 12.65 12.65 6.66667 20 6.66667C27.35 6.66667 33.3333 12.65 33.3333 20C33.3333 27.35 27.35 33.3333 20 33.3333ZM20 10C16.3166 10 13.3333 12.9833 13.3333 16.6667H16.6666C16.6666 14.8333 18.1666 13.3333 20 13.3333C21.8333 13.3333 23.3333 14.8333 23.3333 16.6667C23.3333 20 18.3333 19.5833 18.3333 25H21.6666C21.6666 21.25 26.6666 20.8333 26.6666 16.6667C26.6666 12.9833 23.6833 10 20 10Z"
              fill="black"/>
        </svg>
      </div>

      <div class="IWishToShareMyImageTemporarilyHowMightISetATimeLimitForTheValidityOfTheImageLink"
           style=" color: #191C1D; font-size: 32px; font-family: Roboto; font-weight: 400; line-height: 40px; word-wrap: break-word;">
        I wish to share my image temporarily. How might I set a time limit for the validity of the image link?
      </div>
    </div>
    <div class="SectionContainer" style="display: flex; align-items: center; margin-bottom: 10px;">
      <div class="HelpOutline" style="width: 40px; height: 40px; margin-right: 20px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
              d="M16.5 10.5H19.5V13.5H16.5V10.5ZM16.5 16.5H19.5V25.5H16.5V16.5ZM18 3C9.72 3 3 9.72 3 18C3 26.28 9.72 33 18 33C26.28 33 33 26.28 33 18C33 9.72 26.28 3 18 3ZM18 30C11.385 30 6 24.615 6 18C6 11.385 11.385 6 18 6C24.615 6 30 11.385 30 18C30 24.615 24.615 30 18 30Z"
              fill="black"/>
        </svg>
      </div>
      <div
          class="YouCanNavigateToTheSettingsPageAndSpecifyTheDefaultExpirationTimeForYourUploadedImagesUnderTheAutoDeleteUploadsSectionAdditionallyAfterSharingYouCanLocateTheImageInTheHistoryPageAndManuallyDeleteIt"
          style=" color: #191C1D; font-size: 28px; font-family: Roboto; font-weight: 400; line-height: 36px; word-wrap: break-word">
        You can navigate to the settings page and specify the default expiration time for your uploaded images under the
        "Auto delete uploads" section. Additionally, after sharing, you can locate the image in the history page and
        manually delete it.
      </div>
    </div>
    <div class="Line4" style="width: 100%; height: 0px; border: 1px #C0C8CC solid; margin-bottom: 10px;"></div>
  </div>
  <Footer class="footer"/>
</template>

<style scoped>
.footer {
  margin-top: auto;
}
</style>
