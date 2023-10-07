// router.js
import { createRouter, createWebHashHistory } from "vue-router";
import Login from '../views/Login.vue';
import Index from '../views/index.vue';
import Upload from '../views/upload.vue';
import Preview from '../views/preview.vue';
import axios from 'axios';

const routes = [
    {
        path: '/',
        name: 'home',
        redirect: '/upload',
        component: Index,
        children: [
            {
                path: '/upload',
                name: 'upload',
                component: Upload,
                meta: { requiresAuth: true },
            },
            {
                path: '/history',
                name: 'history',
                component: Preview,
                meta: { requiresAuth: true },
            },
            {
                path: '/settings',
                name: 'settings',
                component: Preview,
                meta: { requiresAuth: true },
            },
            {
                path: '/faq',
                name: 'faq',
                component: Preview,
                meta: { requiresAuth: true },
            },
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
];


const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});

// 导航守卫
// 导航守卫
router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const token = localStorage.getItem('token');

    if (requiresAuth && !token) {
        // 如果页面需要身份验证但用户没有 token，则重定向到登录页
        next('/login');
    } else if (requiresAuth && token) {
        try {
            // 如果 token 是 '1111'，直接继续导航
            if (token === '1111') {
                next();
            } else {
                // 否则，发送 token 到后端验证，设置超时时间为 2 秒
                const response = await axios.post('http://123.1.1.2/validateToken', { token }, { timeout: 2000 });

                if (response.data.success) {
                    // 如果后端返回成功，则直接继续导航
                    next();
                } else {
                    // 如果后端返回失败，说明 token 无效，需要用户重新登录
                    next('/login');
                }
            }
        } catch (error) {
            // 请求失败，可能是网络错误等情况
            if (axios.isCancel(error)) {
                console.error('Request timeout:', error);
                // 处理超时情况，可能是等待时间超过 2 秒
                // 在这里，你可以选择继续等待或者直接处理为响应为空
                // 这里选择继续等待，可以通过适当的逻辑进行其他处理
            } else {
                console.error('Token validation failed:', error);
                // 其他错误，重定向到登录页
                next('/login');
            }
        }
    } else {
        // 其他情况继续导航
        next();
    }
});

export default router;
