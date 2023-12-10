// router.js
import {createRouter, createWebHashHistory} from "vue-router";
import Login from '../views/Login.vue';
import Index from '../views/index.vue';
import Setting from '../views/setting.vue';
import Upload from '../views/upload.vue';
import Preview from '../views/preview.vue';
import History_login from "../views/history_login.vue";
import Setting_login from "../views/setting_login.vue";
import new_Page from "../views/new.vue";
import axios from 'axios';
import {ValidateToken} from "../api/file.js";
import Register from "../views/register.vue";

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
            },
            {
                path: '/history',
                name: 'history',
                component: Preview,
                meta: {requiresAuth: true},
            },
            {
                path: '/settings',
                name: 'settings',
                component: Setting,
                meta: {requiresAuth: true},
            },
            {
                path: '/faq',
                name: 'faq',
                component: new_Page,
            },
            {
                path: '/history_login',
                name: 'history_login',
                component: History_login
            },
            {
                path: '/settings_login',
                name: 'settings_login',
                component: Setting_login
            },
            {
                path: '/login',
                name: 'login',
                component: Login,
            },
            {
                path: '/register',
                name: 'register',
                component: Register,
            },
            {
                path: '/privacy',
                name: 'privacy',
                component: new_Page,
            },
            {
                path: '/service',
                name: 'service',
                component: new_Page,
            }
        ],
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
    if (to.name === 'history' && !token) {
        // 如果用户点击的是"history"路由且未登录，则重定向到 history_login
        await router.push('/history_login');
    } else if (to.name === 'settings' && !token) {
        // 如果用户点击的是"history"路由且未登录，则重定向到 history_login
        await router.push('/settings_login');
    } else if (requiresAuth && token) {
        try {
            await ValidateToken(token)
                .then(res => {
                    console.log(res)
                    if (res.code === 200) {
                        next();
                    } else {
                        router.push('/login');
                    }
                })
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
