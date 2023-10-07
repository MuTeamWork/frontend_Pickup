<!-- Login.vue -->
<template>
  <div>
    <h2>Login</h2>
    <div v-if="showServerError" class="error-message">
      Server connection failed. Please try again later.
    </div>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" v-model="username" required />

      <label for="password">Password:</label>
      <input type="password" v-model="password" required />

      <button type="submit">Login</button>
      <button type="button" @click="quickLogin">Quick Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      showServerError: false,
    };
  },
  methods: {
    login() {
      this.showServerError = false; // Reset connection error status

      axios.post('http://123.1.1.2/login', {
        username: this.username,
        password: this.password,
      })
          .then(response => {
            const { token, user } = response.data;
            localStorage.setItem('token', token);
            this.$router.push('/upload');
          })
          .catch(error => {
            // Handle login failure
            console.error('Login failed:', error);

            if (error.response && error.response.status === 500) {
              // Server error, show connection failed message
              this.showServerError = true;
            }
          });
    },

    quickLogin() {
      // Use a local test account for quick login
      this.username = 'admin';
      this.password = '1234';
      localStorage.setItem('token', "1111");

      // 使用 $nextTick 确保 v-model 双向绑定更新完成后再进行路由跳转
      this.$nextTick(() => {
        this.$router.push('/upload');
      });
    },
  },
};
</script>

<style scoped>
/* Styles can be adjusted based on your needs */
.error-message {
  color: red;
  margin-bottom: 10px;
}
</style>
