<script setup>
import {ref, onMounted} from "vue";
import {updateUserInfo} from "../api/file.js";

const username = ref("");
const email = ref("");
const currentPassword = ref("");
const newPassword = ref("");
const isExifDataKept = ref(false);

const selectedOption = ref('Don’t auto delete'); // 初始选中值
const dropdownOptions = ref([
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 1',
  'Option 2',
  'Option 3',
]);

const toggleDropdown = () => {
  // 在点击SelectedOption时，切换DropdownMenu的显示状态
  const dropdownMenu = document.querySelector('.DropdownMenu');
  if (dropdownMenu.style.display === 'block') {
    dropdownMenu.style.display = 'none';
  } else {
    dropdownMenu.style.display = 'block';
  }
};

const selectOption = (option) => {
  // 点击DropdownOption时更新SelectedOption的值和隐藏DropdownMenu
  selectedOption.value = option;
  const dropdownMenu = document.querySelector('.DropdownMenu');
  dropdownMenu.style.display = 'none';
};



// 初始化表单数据
onMounted(() => {
  // 这里可以添加初始化表单数据的逻辑
  // 例如，从后端获取用户信息并填充表单字段
});


const submitForm = () => {
  // 构造表单数据
  const formData = {
    username: username.value,
    email: email.value,
    currentPassword: currentPassword.value,
    newPassword: newPassword.value,
    selectedOption:selectedOption.value,
    isExifDataKept:isExifDataKept.value,
    // 其他表单字段
  };

  // 调用后端提交数据的函数
  // updateUserInfo(formData);
  console.log(formData)
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
      <input class="InputField" type="text" placeholder="Tommy" v-model="username">
    </div>


    <div class="SettingText">
      <div class="Username">Email address</div>
      <input class="InputField" type="email" placeholder="1651215abab@outlook.com" v-model="email">
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
  height: 40px;
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
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 8px;
  padding-right: 16px;
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
