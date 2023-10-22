<template>
  <div class="DesktopUpload">
    <Sidebar/>
<!--  主体  -->
    <div class="MainArea">
<!--   导航栏   -->
      <Navbar />
<!--   可变部分   -->
      <router-view></router-view>
      <!--   底部   -->
      <Footer v-if="$route.path !== '/settings'" />
    </div>
  </div>
</template>

<script>

import Navbar from './navbar.vue'; // 引用导航栏组件的路径
import Sidebar from './Sidebar.vue';
import Footer from './footer.vue';
export default {
  components: {
    Navbar,
    Footer,
    Sidebar
  },
  data() {
    return {
      isSettingPage: false
    };
  },
  watch: {
    $route(to, from) {
      this.isSettingPage = to.name === 'settings';
    }
  },
};

</script>

<style scoped>
/* Reset some default styles */
html, body, div, img {
  margin: 0;
  border: 0;
}

/* MainArea */
.MainArea {
  width: calc(100vw - 120px);
  padding-left: 104px;
  flex-grow: 1;
}

/* DesktopUpload */
.DesktopUpload {
  background: white;
  justify-content: center;
  align-items: flex-start;
  display: inline-flex;
}
</style>
