import { createRouter, createWebHashHistory } from "vue-router";

const route = [
    {
        path: '/',
        name: 'home',
        redirect:"/upload",
        component: () => import('../views/index.vue'),
        children: [
            {
                path: '/upload',
                name: 'upload',
                component: () => import('../views/upload.vue')
            },
            {
                path: '/history',
                name: 'history',
                component: () => import('../views/preview.vue')
            },
            {
                path: '/settings',
                name: 'settings',
                component: () => import('../views/preview.vue')
            },
            {
                path: '/faq',
                name: 'faq',
                component: () => import('../views/preview.vue')
            },
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: route
})
export default router;
