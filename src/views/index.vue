<template>
  <div class="DesktopUpload">
    <Sidebar/>
    <div class="MainArea">
      <Navbar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './navbar.vue';
import Sidebar from './Sidebar.vue';

export default {
  components: {
    Navbar,
    Sidebar
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
  display: flex;
  flex-direction: column;
  width: calc(100vw - 120px);
  min-height: 100vh;
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
