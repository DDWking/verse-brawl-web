<template>
  <div class="intro container">
    <header class="intro-header">
      <h1>游戏介绍</h1>
      <p>在像素世界中，操控角色展开实时对战，击败对手获得分数，登顶排行榜。</p>
    </header>

    <section class="gameplay-section">
      <h2 class="section-label">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/>
          <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
          <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/>
          <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/>
          <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/>
          <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
          <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/>
          <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/>
        </svg>
        核心玩法
      </h2>
      <div class="steps-grid">
        <div class="step-card" v-for="(step, i) in steps" :key="i">
          <div class="step-number">{{ step.step }}</div>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-desc">{{ step.desc }}</p>
        </div>
      </div>
    </section>

    <section class="controls-section">
      <h2 class="section-label centered">操作说明</h2>
      <div class="controls-grid">
        <div class="control-panel">
          <div class="control-header">
            <div class="control-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M6 8h.001M10 8h.001M14 8h.001M18 8h.001M8 12h.001M12 12h.001M16 12h.001M6 16h12"/>
              </svg>
            </div>
            <h3 class="control-title">键盘操作</h3>
          </div>
          <div class="control-list">
            <div class="control-item" v-for="item in keyboardControls" :key="item.label">
              <span class="control-label">{{ item.label }}</span>
              <div class="control-keys">
                <kbd v-for="key in item.keys" :key="key" class="key">{{ key }}</kbd>
              </div>
            </div>
          </div>
        </div>
        
        <div class="control-panel">
          <div class="control-header">
            <div class="control-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="5" y="2" width="14" height="20" rx="2"/>
                <circle cx="12" cy="18" r="1"/>
              </svg>
            </div>
            <h3 class="control-title">鼠标操作</h3>
          </div>
          <div class="control-list">
            <div class="control-item" v-for="item in mouseControls" :key="item.label">
              <span class="control-label">{{ item.label }}</span>
              <div class="control-keys">
                <kbd class="key">{{ item.key }}</kbd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="features-section">
      <h2 class="section-label">游戏特色</h2>
      <div class="features-grid">
        <div class="feature-item" v-for="(feature, i) in features" :key="i">
          <div class="feature-icon">
            <component :is="feature.icon" />
          </div>
          <div class="feature-content">
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-desc">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, h } from 'vue'
import { getGameInfo } from '../utils/api'

const gameInfo = ref(null)

const steps = [
  { step: '1', title: '选择角色', desc: '挑选适合你的像素英雄' },
  { step: '2', title: '匹配对手', desc: '全球同服，极速匹配' },
  { step: '3', title: '释放技能', desc: '华丽连招，策略博弈' },
  { step: '4', title: '击败对手', desc: '清空敌人血条' },
  { step: '5', title: '获得分数', desc: '提升段位，登顶榜单' }
]

const keyboardControls = [
  { label: '移动', keys: ['W', 'A', 'S', 'D'] },
  { label: '跳跃', keys: ['Space'] },
  { label: '技能 1/2/3', keys: ['Q', 'E', 'R'] }
]

const mouseControls = [
  { label: '普通攻击', key: '左键' },
  { label: '特殊攻击', key: '右键' },
  { label: '瞄准', key: '鼠标移动' }
]

const ZapIcon = {
  render() {
    return h('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
      h('polygon', { points: '13 2 3 14 12 14 11 22 21 10 12 10 13 2' })
    ])
  }
}

const SwordsIcon = {
  render() {
    return h('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
      h('polyline', { points: '14.5 17.5 3 6 3 3 6 3 17.5 14.5' }),
      h('line', { x1: 13, y1: 19, x2: 19, y2: 13 }),
      h('line', { x1: 16, y1: 16, x2: 20, y2: 20 }),
      h('line', { x1: 19, y1: 21, x2: 21, y2: 19 })
    ])
  }
}

const UsersIcon = {
  render() {
    return h('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
      h('path', { d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }),
      h('circle', { cx: 9, cy: 7, r: 4 }),
      h('path', { d: 'M23 21v-2a4 4 0 0 0-3-3.87' }),
      h('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' })
    ])
  }
}

const GlobeIcon = {
  render() {
    return h('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
      h('circle', { cx: 12, cy: 12, r: 10 }),
      h('line', { x1: 2, y1: 12, x2: 22, y2: 12 }),
      h('path', { d: 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' })
    ])
  }
}

const TrophyIcon = {
  render() {
    return h('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
      h('path', { d: 'M6 9H4.5a2.5 2.5 0 0 1 0-5H6' }),
      h('path', { d: 'M18 9h1.5a2.5 2.5 0 0 0 0-5H18' }),
      h('path', { d: 'M4 22h16' }),
      h('path', { d: 'M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22' }),
      h('path', { d: 'M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22' }),
      h('path', { d: 'M18 2H6v7a6 6 0 0 0 12 0V2Z' })
    ])
  }
}

const features = [
  { icon: ZapIcon, title: '轻量化体积', desc: '极小的客户端体积，秒下载秒安装，随时随地开启对局。' },
  { icon: SwordsIcon, title: '流畅对战', desc: '优化的网络同步算法，确保每一击都精准判定，告别延迟卡顿。' },
  { icon: UsersIcon, title: '多种角色可选', desc: '战士、法师、刺客等多种定位，总有一款适合你的战斗风格。' },
  { icon: GlobeIcon, title: '技能组合丰富', desc: '自由搭配技能，创造属于你的独门连招，打对手一个措手不及。' },
  { icon: TrophyIcon, title: '排行榜实时更新', desc: '全球玩家同台竞技，分数实时变动，为了荣誉而战。' }
]

onMounted(async () => {
  try {
    const res = await getGameInfo()
    gameInfo.value = res.data
  } catch (e) {
    console.error(e)
  }
})
</script>

<style scoped>
.intro {
  padding: 3rem 1rem;
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.intro-header {
  text-align: center;
  margin-bottom: 1rem;
}

.intro-header h1 {
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.intro-header p {
  font-size: 1.25rem;
  color: var(--color-muted-foreground);
  max-width: 48rem;
  margin: 0 auto;
}

.section-label {
  font-size: 1.875rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.section-label.centered {
  justify-content: center;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}

@media (max-width: 1024px) {
  .steps-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .steps-grid {
    grid-template-columns: 1fr;
  }
}

.step-card {
  background: var(--color-card);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: border-color 0.2s ease;
}

.step-card:hover {
  border-color: var(--color-primary);
}

.step-number {
  position: absolute;
  right: -1rem;
  top: -1rem;
  font-size: 4rem;
  font-weight: 900;
  color: rgba(61, 38, 29, 0.3);
}

.step-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
}

.step-desc {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-muted-foreground);
  position: relative;
  z-index: 1;
}

.controls-section {
  background: var(--color-card);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-2xl);
  padding: 2rem;
}

@media (min-width: 768px) {
  .controls-section {
    padding: 3rem;
  }
}

.controls-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 768px) {
  .controls-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.control-panel {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.control-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.control-icon {
  padding: 0.75rem;
  background: rgba(255, 85, 0, 0.1);
  border-radius: var(--radius-lg);
  color: var(--color-primary);
}

.control-title {
  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.control-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.control-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--color-border);
}

.control-label {
  font-weight: 700;
  color: var(--color-muted-foreground);
}

.control-keys {
  display: flex;
  gap: 0.25rem;
}

.key {
  padding: 0.25rem 0.5rem;
  background: var(--color-background);
  border-bottom: 4px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-primary);
  font-family: monospace;
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

.feature-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.feature-icon {
  padding: 0.5rem;
  background: rgba(255, 85, 0, 0.1);
  border-radius: var(--radius-lg);
  color: var(--color-primary);
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.feature-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.feature-desc {
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--color-muted-foreground);
}
</style>