import { createRouter, createWebHistory } from 'vue-router'

// 页面（后面我们会创建）
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'
import Rank from '../views/Rank.vue'
import Notice from '../views/Notice.vue'
import About from '../views/About.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/game', name: 'Game', component: Game },
    { path: '/rank', name: 'Rank', component: Rank },
    { path: '/notice', name: 'Notice', component: Notice },
    { path: '/about', name: 'About', component: About },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router