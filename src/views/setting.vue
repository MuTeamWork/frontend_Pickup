<script setup>
import {ref, onMounted, reactive} from "vue";
import {getOption, updateUserInfo} from "../api/file.js";
import {ElMessage} from "element-plus";

const username = ref("");
const mail = ref("");
const currentPassword = ref("");
const newPassword = ref("");
const isExifDataKept = ref(false);
const Data = {
  Option: {
    expireTime: '',
    isExifDataKept: false,
    mail: '',
    username: '',
  },
};
const selectedOption = ref('Don’t auto delete');
const dropdownOptions = ref([
  'Don’t auto delete',
  'After 5 minutes',
  'After 15 minutes',
  'After 30 minutes',
  'After 1 hour',
  'After 3 hours',
  'After 6 hours',
  'After 12 hours',
]);
const stringToTimeMap = new Map([
  ['Don’t auto delete', 0],  // 对应时间为0分钟
  ['After 5 minutes', 300],
  ['After 15 minutes', 900],
  ['After 30 minutes', 1800],
  ['After 1 hour', 3600],
  ['After 3 hours', 10800],
  ['After 6 hours', 21600],
  ['After 12 hours', 42000],
]);
const timeToStringMap = new Map(Array.from(stringToTimeMap.entries()).map(([key, value]) => [value, key]));
const timeForOption = (option) => stringToTimeMap.get(option);

// 通过时间获取字符串
const optionForTime = (time) => timeToStringMap.get(time);

const dropdownMenu = document.querySelector('.DropdownMenu');
const toggleDropdown = () => {
  if (dropdownMenu.style.display === 'block') {
    dropdownMenu.style.display = 'none';
  } else {
    dropdownMenu.style.display = 'block';
  }
};

const selectOption = (option) => {
  // 点击DropdownOption时更新SelectedOption的值和隐藏DropdownMenu
  selectedOption.value = option;
  dropdownMenu.style.display = 'none';

};

onMounted(() => {
  getFile()
})
const getFile = () => {
  getOption().then(res => {
    if (res.status === 200) {
      // 使用后端返回的第一个数据对象来初始化 Data.Option
      Data.Option = res.data;
      console.log(Data.Option)
      updateInputPlaceholders();
    }
  });
}
const updateInputPlaceholders = () => {
  const usernameInput = document.querySelector('.InputField[type="text"]');
  const emailInput = document.querySelector('.InputField[type="email"]');

  if (usernameInput) {
    usernameInput.placeholder = Data.Option.username;
  }
  if (emailInput) {
    emailInput.placeholder = Data.Option.mail;
  }
  isExifDataKept.value = Data.Option.isExifDataKept
  selectedOption.value = optionForTime(Data.Option.expireTime)
}

const submitForm = () => {

  const formData = {
    username: username.value,
    mail: mail.value,
    currentPassword: currentPassword.value,
    newPassword: newPassword.value,
    expireTime:timeForOption(selectedOption.value),
    isExifDataKept:isExifDataKept.value,
  };
  const filteredFormData = Object.fromEntries(
      Object.entries(formData).filter(([key, value]) => value !== "")
  );
  console.log(filteredFormData)
  // 调用后端提交数据的函数
  updateUserInfo(filteredFormData).then(res => {
    if (res.status === 200) {
      ElMessage.success('已成功提交');
    }else{
      ElMessage.warning('修改失败');
    }
  });
};
</script>

<template>
  <div class="BodyArea">
    <div class="UserContainer">
      <div class="IconsPersonOutline24px">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M18 6C14.685 6 12 8.685 12 12C12 15.315 14.685 18 18 18C21.315 18 24 15.315 24 12C24 8.685 21.315 6 18 6ZM21 12C21 10.35 19.65 9 18 9C16.35 9 15 10.35 15 12C15 13.65 16.35 15 18 15C19.65 15 21 13.65 21 12ZM27 25.5C26.7 24.435 22.05 22.5 18 22.5C13.95 22.5 9.3 24.435 9 25.515V27H27V25.5ZM6 25.5C6 21.51 13.995 19.5 18 19.5C22.005 19.5 30 21.51 30 25.5V30H6V25.5Z"
                fill="#191C1D"/>
        </svg>
      </div>
      <div class="User">User</div>
    </div>


    <div class="SettingText">
      <div class="Username NonInputElements">Username</div>
      <input class="InputField" type="text" placeholder="" v-model="username">
    </div>


    <div class="SettingText">
      <div class="Username">Email address</div>
      <input class="InputField" type="email" placeholder="" v-model="mail" disabled>
    </div>

    <div class="Line1"></div>

    <div class="UserContainer">
      <div class="IconsFileUpload">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path
              d="M27 22.5V27H9V22.5H6V27C6 28.65 7.35 30 9 30H27C28.65 30 30 28.65 30 27V22.5H27ZM10.5 13.5L12.615 15.615L16.5 11.745V24H19.5V11.745L23.385 15.615L25.5 13.5L18 6L10.5 13.5Z"
              fill="#191C1D"/>
        </svg>
      </div>
      <div class="Upload">Upload</div>
    </div>

    <div class="Group4">
      <div class="KeepImageExifDataOnUpload">Keep image Exif data on upload</div>
      <label class="Switch">
        <input type="checkbox" class="ToggleSwitch" v-model="isExifDataKept">
        <span class="Slider"></span>
      </label>
    </div>



    <div class="Group3">
      <div class="AutoDeleteUploads">Auto delete uploads</div>
      <div class="Dropdown">
        <div class="SelectedOption" @click="toggleDropdown">{{ selectedOption }}</div>
        <div class="DropdownIcon">▼</div>
        <div class="DropdownMenu">
          <div
              class="DropdownOption"
              v-for="option in dropdownOptions"
              :key="option"
              @click="selectOption(option)"
          >
            {{ option }}
          </div>
        </div>
      </div>
    </div>

    <div class="Line2"></div>

    <div class="UserContainer">
      <div class="Security">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path
              d="M18 1.5L4.5 7.5V16.5C4.5 24.825 10.26 32.61 18 34.5C25.74 32.61 31.5 24.825 31.5 16.5V7.5L18 1.5ZM18 17.985H28.5C27.705 24.165 23.58 29.67 18 31.395V18H7.5V9.45L18 4.785V17.985Z"
              fill="black"/>
        </svg>
      </div>
      <div class="Security">Security</div>
    </div>

    <div class="SettingText">
      <div class="Username">Current password</div>
      <input class="InputField" type="password" placeholder="Enter your current password" v-model="currentPassword">
    </div>

    <div class="SettingText">
      <div class="Username">New password</div>
      <input class="InputField" type="password" placeholder="Enter your new password" v-model="newPassword">
    </div>
    <div class="ToChangeYourPasswordYouHaveToProvideYourCurrentPassword">To change your password, you have to provide
      your current password
    </div>
  </div>
  <div class="box"></div>
  <div class="CenteredButtonContainer">
    <button @click="submitForm" class="FilterChip">
      <div class="StateLayer">
        <div class="SelectedIcon">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M6.75 12.1275L3.6225 9L2.5575 10.0575L6.75 14.25L15.75 5.25L14.6925 4.1925L6.75 12.1275Z" fill="#120068"/>
          </svg>
        </div>
        <div class="LabelText">Save Changes</div>
      </div>
    </button>
  </div>
</template>

<style scoped>
/* Styles for BodyArea */
.BodyArea {
  margin-left: 60px;
  margin-right: 60px;
  width: calc(100vw - 230px);
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.NonInputElements {
  pointer-events: none;
}

.box{
  height: 60px;
}

/* Button Style */
.FilterChip {
  width: 173px;
  height: 40px;
  background: #E3DFFF;
  border-radius: 8px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  border: none; /* Optionally remove the button border */
  cursor: pointer;
  transition: background-color 0.3s; /* Optional hover effect */
}

.FilterChip:hover {
  background: #9c8de6; /* Optional hover background color */
}

.StateLayer {
  width: 139px;
  padding: 6px 16px 6px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: flex;
}

.SelectedIcon {
  width: 18px;
  height: 18px;
  position: relative;
}

.LabelText {
  text-align: center;
  color: #120068;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.CenteredButtonContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed; /* 固定位置 */
  width: calc(100% - 104px);
  bottom: 0;
  left: 104px;
  background-color: white; /* 白色背景 */
  padding: 10px 0 10px 0;
  z-index: 999; /* 使按钮位于其他元素之上 */
}

/* Styles for InputField */
.InputField {
  top: 38px;
  width: 312px;
  height: 36px;
  position: absolute;
  background: #ECEEF0;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  color: #191C1D;
  padding-left: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
}

.Dropdown {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

/* Styles for Dropdown items */
.DropdownContent li {
  padding: 10px;
  cursor: pointer;
}

/* Show the dropdown content on hover */
.Dropdown:hover .DropdownContent {
  display: block;
}

/* Styles for User */
.User {
  color: #191C1D;
  font-size: 28px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 36px;
  word-wrap: break-word;
}

.UserContainer {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
}

/* Styles for IconsPersonOutline24px */
.IconsPersonOutline24px {
  width: 36px;
  height: 36px;
  position: relative;
}


/* Styles for SettingText */
.SettingText {
  width: 312px;
  height: 68px;
  position: relative;
  flex-direction: column;
  display: flex;
  margin-bottom: 20px;
}

/* Styles for Username */
.Username {
  color: black;
  font-size: 22px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 28px;
}

/* Styles for Line1 and Line2 */
.Line1, .Line2 {
  width: calc(100vw - 230px);
  border: 1px #CAC4D0 solid;
}

/* Styles for Upload */
.Upload {
  color: #191C1D;
  font-size: 28px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 36px;
  word-wrap: break-word;
}

/* Styles for IconsFileUpload */
.IconsFileUpload {
  width: 36px;
  height: 36px;
  position: relative;
}

/* Styles for Group4 */
.Group4 {
  width: 600px;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

/* Styles for KeepImageExifDataOnUpload */
.KeepImageExifDataOnUpload {
  font-size: 22px;
  font-family: Roboto;
  color: #191C1D;
  line-height: 32px;
}

/* Styles for the toggle switch */
.Switch {
  margin-left: 24px;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Styles for the actual checkbox input */
.ToggleSwitch {
  display: none;
}

/* Styles for the slider (track) */
.Slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #CAC4D0;
  border-radius: 34px;
  transition: 0.4s;
}

/* Styles for the slider (track) when checked */
.ToggleSwitch:checked + .Slider {
  background-color: #006781;
}

/* Styles for the handle (knob) */
.Slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;
}

/* Styles for the handle (knob) when checked */
.ToggleSwitch:checked + .Slider:before {
  transform: translateX(26px);
}

/* Styles for the container div */
.Group3 {
  width: 312px;
  height: auto; /* Adjust the height as needed */
  position: relative;
}

/* Styles for AutoDeleteUploads */
.AutoDeleteUploads {
  font-size: 22px;
  font-family: Roboto;
  font-weight: 400;
  color: #191C1D;
  line-height: 28px;
  margin-bottom: 10px; /* Add margin to separate from the dropdown */
}

/* Styles for the Dropdown */
.Dropdown {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;
  align-items: center;
  width: 330px;
}

/* Styles for the SelectedOption */
.SelectedOption {
  font-size: 16px;
  font-family: Roboto;
  color: #191C1D;
  line-height: 24px;
  height: 37px;
  background: #ECEEF0;
  border-radius: 8px 0 0 8px;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  padding-left: 16px;
}

/* Styles for the DropdownIcon */
.DropdownIcon {
  font-size: 16px;
  height: 37px;
  background: #ECEEF0;
  border-radius: 0 8px 8px 0;
  display: flex;
  align-items: center;
  padding-right: 10px;
}

/* Styles for the DropdownMenu */
.DropdownMenu {
  position: absolute;
  top: 100%; /* Position below the SelectedOption */
  width: 100%; /* Adjust the width as needed */
  background: rgba(236, 238, 240, 1); /* Use rgba with an alpha value of 1 for full opacity */
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: none; /* Initially hidden */
  z-index: 999;
  max-height: 200px; /* Adjust the max height as needed */
  overflow-y: auto; /* Enable vertical scrollbar when content overflows max-height */

  /* Customize the scrollbar */
  scrollbar-width: thin; /* Hide the default scrollbar in Firefox */
  scrollbar-color: #999999 #f0f0f0; /* Customize scrollbar colors */
}

/* Style the thumb (the draggable part of the scrollbar) */
.DropdownMenu::-webkit-scrollbar {
  width: 8px; /* Set the width of the scrollbar */
}

.DropdownMenu::-webkit-scrollbar-thumb {
  background: #999999; /* Set the background color of the thumb */
  border-radius: 4px; /* Add some border radius for a rounded appearance */
}

/* Style the track (the background of the scrollbar) */
.DropdownMenu::-webkit-scrollbar-track {
  background: #f0f0f0; /* Set the background color of the track */
}


/* Styles for DropdownOption */
.DropdownOption {
  font-size: 16px;
  font-family: Roboto;
  color: #191C1D;
  line-height: 24px;
  padding: 10px 10px 10px 16px;
  cursor: pointer;
}

/* Show the DropdownMenu when hovering over the Dropdown */
.Dropdown:hover .DropdownMenu {
  display: block;
}

/* Show the DropdownMenu when hovering over the Dropdown */
.Dropdown:hover .SelectedOption {
  border-bottom-left-radius: 0;
}

.Dropdown:hover .DropdownIcon {
  border-bottom-right-radius: 0;
}

/* Style the DropdownOption on hover */
.DropdownOption:hover {
  background: #006781;
  color: white;
}

/* Styles for Security */
.Security {
  color: #191C1D;
  font-size: 28px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 36px;
  word-wrap: break-word;
}

/* Styles for ToChangeYourPassword */
.ToChangeYourPasswordYouHaveToProvideYourCurrentPassword {
  color: black;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

</style>
