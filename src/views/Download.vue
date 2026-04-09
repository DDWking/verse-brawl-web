<template>
  <div class="download container">
    <header class="download-header">
      <h1>下载与试玩</h1>
      <p>选择适合你的方式，立即加入战斗</p>
    </header>

    <div class="download-grid">
      <div class="download-card">
        <div class="card-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </div>
        <h2>下载客户端</h2>
        <p class="card-desc">获得最完整的游戏体验，支持更高帧率与画质设置。</p>
        <div class="card-buttons">
          <button class="btn btn-primary" @click="handleDownload">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            Windows 版下载
          </button>
          <button class="btn btn-secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
            </svg>
            Mac 版下载
          </button>
        </div>
      </div>

      <div class="download-card">
        <div class="card-icon card-icon-accent">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
        </div>
        <h2>在线试玩</h2>
        <p class="card-desc">无需下载，直接在浏览器中体验核心对战玩法。</p>
        <div class="card-buttons">
          <button class="btn btn-accent" @click="handlePlay">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            启动 WebGL 试玩
          </button>
        </div>
        <p class="card-note">* 试玩版可能存在性能限制，推荐使用 Chrome 或 Edge 浏览器。</p>
      </div>
    </div>

    <div class="info-section">
      <div class="info-block">
        <h3>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
          配置要求
        </h3>
        <ul class="spec-list">
          <li><span>操作系统</span><span>Windows 10 / macOS 11+</span></li>
          <li><span>处理器</span><span>Intel Core i3 或同等性能</span></li>
          <li><span>内存</span><span>4 GB RAM</span></li>
          <li><span>显卡</span><span>支持 OpenGL 3.3 的独立显卡</span></li>
          <li><span>存储空间</span><span>500 MB 可用空间</span></li>
        </ul>
      </div>

      <div class="info-block">
        <h3>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          常见问题
        </h3>
        <div class="faq-list">
          <div class="faq-item" v-for="(faq, i) in faqs" :key="i">
            <div class="faq-q">Q: {{ faq.q }}</div>
            <div class="faq-a">A: {{ faq.a }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getGameInfo } from '../utils/api'

const gameInfo = ref(null)

const faqs = [
  { q: '下载后提示文件损坏怎么办？', a: '请尝试重新下载，或检查杀毒软件是否误拦截。' },
  { q: 'Mac 版提示无法验证开发者？', a: '请在系统设置 -> 隐私与安全性中，点击"仍要打开"。' },
  { q: 'WebGL 试玩加载卡在 90%？', a: '请清除浏览器缓存后重试，或尝试更换网络环境。' }
]

const handleDownload = () => {
  if (gameInfo.value?.downloadUrl) {
    window.open(gameInfo.value.downloadUrl, '_blank')
  }
}

const handlePlay = () => {
  if (gameInfo.value?.playUrl) {
    window.open(gameInfo.value.playUrl, '_blank')
  }
}

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
.download {
  padding: 3rem 1rem;
  max-width: 64rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.download-header {
  text-align: center;
}

.download-header h1 {
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
}

.download-header p {
  font-size: 1.25rem;
  color: var(--color-muted-foreground);
}

.download-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .download-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.download-card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-3xl);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.card-icon {
  width: 5rem;
  height: 5rem;
  background: rgba(255, 85, 0, 0.1);
  border-radius: var(--radius-2xl);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--color-primary);
}

.card-icon-accent {
  background: rgba(255, 170, 0, 0.1);
  color: var(--color-accent);
}

.download-card h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.card-desc {
  color: var(--color-muted-foreground);
  margin-bottom: 2rem;
}

.card-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-top: auto;
}

.card-note {
  font-size: 0.75rem;
  color: var(--color-muted-foreground);
  margin-top: 1rem;
}

.info-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .info-section {
    grid-template-columns: repeat(2, 1fr);
  }
}

.info-block h3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.spec-list {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-2xl);
  padding: 1.5rem;
}

.spec-list li {
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
}

.spec-list li:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.spec-list li span:first-child {
  color: var(--color-muted-foreground);
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: 1rem;
}

.faq-q {
  font-weight: 700;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.faq-a {
  font-size: 0.875rem;
  color: var(--color-muted-foreground);
}
</style>