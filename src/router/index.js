import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/user'

const routes = [
    { path: '/', name: 'Home', component: () => import('../views/Home.vue') },
    { path: '/game', name: 'Game', component: () => import('../views/Game.vue') },
    { path: '/character', name: 'Character', component: () => import('../views/Character.vue') },
    { path: '/rank', name: 'Rank', component: () => import('../views/Rank.vue') },
    { path: '/notice', name: 'Notice', component: () => import('../views/Notice.vue') },
    { path: '/notice/:id', name: 'NoticeDetail', component: () => import('../views/NoticeDetail.vue') },
    { path: '/download', name: 'Download', component: () => import('../views/Download.vue') },
    { path: '/about', name: 'About', component: () => import('../views/About.vue') },
    // 后台路由
    { path: '/admin/login', name: 'AdminLogin', component: () => import('../views/admin/Login.vue') },
    {
        path: '/admin',
        name: 'AdminRoot',
        component: () => import('../views/admin/Layout.vue'),
        meta: { requiresAuth: true },
        children: [
            { path: '', name: 'Dashboard', component: () => import('../views/admin/Dashboard.vue') },
            { path: 'notice', name: 'NoticeManage', component: () => import('../views/admin/NoticeManage.vue') },
            { path: 'rank', name: 'RankManage', component: () => import('../views/admin/RankManage.vue') },
            { path: 'game', name: 'GameManage', component: () => import('../views/admin/GameManage.vue') },
            { path: 'character', name: 'CharacterManage', component: () => import('../views/admin/CharacterManage.vue') }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
    const userStore = useUserStore()
    if (to.meta.requiresAuth && !userStore.token) {
        next('/admin/login')
    } else {
        next()
    }
})

export default router