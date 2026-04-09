<template>
  <div class="home">
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-bg-gradient"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">{{ gameInfo?.gameName || 'VerseBrawl' }}</h1>
        <p class="hero-tagline">{{ gameInfo?.slogan || '2D 像素对战，指尖巅峰对决' }}</p>
        <div class="hero-actions">
          <router-link to="/download" class="btn btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            立即下载
          </router-link>
          <router-link to="/download" class="btn btn-secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            在线试玩
          </router-link>
        </div>
      </div>
    </section>

    <section class="features container">
      <div class="features-header">
        <h2 class="section-title">核心亮点</h2>
        <p class="section-desc">体验前所未有的像素格斗快感</p>
      </div>
      <div class="features-grid">
        <div class="feature-card" v-for="(feature, i) in features" :key="i">
          <div class="feature-icon">
            <component :is="feature.icon" />
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-desc">{{ feature.desc }}</p>
        </div>
      </div>
    </section>

    <section class="news-section container">
      <div class="news-column">
        <div class="column-header">
          <h2 class="column-title">最新动态</h2>
          <router-link to="/notice" class="view-more">
            更多
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </router-link>
        </div>
        <div class="news-list">
          <div 
            class="news-card" 
            v-for="notice in notices.slice(0, 2)" 
            :key="notice.id" 
            @click="$router.push(`/notice/${notice.id}`)"
          >
            <div class="news-meta">
              <span class="news-badge" :class="getCategoryClass(notice.category)">{{ notice.category }}</span>
              <span class="news-date">{{ formatTime(notice.createTime) }}</span>
            </div>
            <h3 class="news-title">{{ notice.title }}</h3>
          </div>
        </div>
      </div>
      
      <div class="screenshots-column">
        <h2 class="column-title">游戏截图</h2>
        <div class="screenshots-grid">
          <div class="screenshot-placeholder">
            <div class="screenshot-inner">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
          </div>
          <div class="screenshot-placeholder">
            <div class="screenshot-inner">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, h } from 'vue'
import { getHomeData } from '../utils/api'

const gameInfo = ref(null)
const notices = ref([])
const serverStatus = ref('online')

const UsersIcon = {
  render() {
    return h('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
      h('path', { d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }),
      h('circle', { cx: 9, cy: 7, r: 4 }),
      h('path', { d: 'M23 21v-2a4 4 0 0 0-3-3.87' }),
      h('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' })
    ])
  }
}

const ZapIcon = {
  render() {
    return h('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
      h('polygon', { points: '13 2 3 14 12 14 11 22 21 10 12 10 13 2' })
    ])
  }
}

const GamepadIcon = {
  render() {
    return h('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
      h('rect', { x: 2, y: 6, width: 20, height: 12, rx: 2 }),
      h('circle', { cx: 8, cy: 12, r: 2 }),
      h('circle', { cx: 16, cy: 12, r: 2 })
    ])
  }
}

const PaletteIcon = {
  render() {
    return h('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
      h('circle', { cx: 12, cy: 12, r: 10 }),
      h('circle', { cx: 12, cy: 8, r: 2, fill: 'currentColor' }),
      h('circle', { cx: 8, cy: 14, r: 2, fill: 'currentColor' }),
      h('circle', { cx: 16, cy: 14, r: 2, fill: 'currentColor' })
    ])
  }
}

const features = [
  { icon: UsersIcon, title: '多人对战', desc: '支持全球玩家实时匹配，体验酣畅淋漓的竞技对决。' },
  { icon: ZapIcon, title: '丰富技能', desc: '每个角色拥有独特的技能树，自由组合打出华丽连招。' },
  { icon: GamepadIcon, title: '简洁操作', desc: '易于上手的操作逻辑，硬核的判定机制，兼顾新手与高玩。' },
  { icon: PaletteIcon, title: '自定义角色', desc: '海量外观配件，打造属于你独一无二的专属格斗家。' }
]

const formatTime = (time) => {
  if (!time) return ''
  return new Date(time).toLocaleDateString('zh-CN')
}

const getCategoryClass = (category) => {
  return {
    'badge-update': category === '版本更新',
    'badge-event': category === '活动通知',
    'badge-maintenance': category === '维护公告'
  }
}

onMounted(async () => {
  try {
    const res = await getHomeData()
    gameInfo.value = res.data.gameInfo
    notices.value = res.data.latestNotices
    serverStatus.value = res.data.serverStatus
  } catch (e) {
    console.error(e)
  }
})
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-bottom: 4rem;
}

.hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-bg-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(26, 17, 14, 0.4) 0%, rgba(26, 17, 14, 0.6) 50%, var(--color-background) 100%);
  z-index: 10;
}

.hero-content {
  position: relative;
  z-index: 20;
  text-align: center;
  padding: 0 1rem;
  max-width: 64rem;
  margin: 0 auto;
}

.hero-title {
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-tagline {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-foreground);
  opacity: 0.9;
  margin-bottom: 2.5rem;
}

.hero-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .hero-actions {
    flex-direction: row;
    justify-content: center;
  }
}

.features {
  padding-top: 0;
}

.features-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-desc {
  color: var(--color-muted-foreground);
  font-size: 1.125rem;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.feature-card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-2xl);
  padding: 1.5rem;
  transition: border-color 0.2s ease;
}

.feature-card:hover {
  border-color: rgba(255, 85, 0, 0.5);
}

.feature-icon {
  width: 3rem;
  height: 3rem;
  background: rgba(255, 85, 0, 0.1);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.feature-desc {
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--color-muted-foreground);
}

.news-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .news-section {
    grid-template-columns: 1fr 2fr;
  }
}

.news-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.column-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.column-title {
  font-size: 1.5rem;
  font-weight: 700;
}

.view-more {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: var(--color-primary);
}

.view-more:hover {
  text-decoration: underline;
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.news-card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: 1rem;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.news-card:hover {
  border-color: rgba(255, 85, 0, 0.5);
}

.news-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.news-badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-md);
  background: rgba(255, 85, 0, 0.1);
  color: var(--color-primary);
}

.news-badge.badge-update {
  background: rgba(255, 85, 0, 0.1);
  color: var(--color-primary);
}

.news-badge.badge-event {
  background: rgba(255, 170, 0, 0.1);
  color: var(--color-accent);
}

.news-badge.badge-maintenance {
  background: rgba(163, 144, 136, 0.1);
  color: var(--color-muted-foreground);
}

.news-date {
  font-size: 0.75rem;
  color: var(--color-muted-foreground);
}

.news-title {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-foreground);
  transition: color 0.2s ease;
}

.news-card:hover .news-title {
  color: var(--color-primary);
}

.screenshots-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.screenshots-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.screenshot-placeholder {
  aspect-ratio: 16/9;
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.screenshot-placeholder:hover {
  opacity: 0.8;
}

.screenshot-inner {
  color: var(--color-muted-foreground);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-tagline {
    font-size: 1.125rem;
  }
}
</style>