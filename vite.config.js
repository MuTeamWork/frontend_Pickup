import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./public/css/colors.module.css";`
      }
    }
  },
  Server: {
    proxy: {
      '/api':{
        target: 'http://10.0.0.5/api',
        changeOrigin: true,
      }
    },
  }
});
