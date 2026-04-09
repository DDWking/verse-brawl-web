<template>
  <div class="download-page">
    <div class="page-header">
      <div class="header-icon">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="26" fill="#0f3460"/>
          <path d="M20 20 L40 30 L20 40 Z" fill="#00d4ff"/>
          <rect x="15" y="42" width="30" height="6" fill="#ff6b35" rx="2"/>
        </svg>
      </div>
      <h1>下载试玩</h1>
      <p>开始你的战斗之旅</p>
    </div>

    <div class="download-grid">
      <div class="download-card primary">
        <div class="card-icon">
          <svg width="80" height="80" viewBox="0 0 80 80">
            <rect x="15" y="15" width="50" height="50" fill="#16213e" rx="8"/>
            <rect x="25" y="25" width="10" height="30" fill="#00d4ff"/>
            <rect x="45" y="25" width="10" height="30" fill="#00d4ff"/>
            <rect x="25" y="25" width="30" height="10" fill="#00d4ff"/>
          </svg>
        </div>
        <h2>下载游戏</h2>
        <button class="download-btn primary-btn" @click="handleDownload">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          <span>Windows 版下载</span>
        </button>
        <p class="download-url">{{ gameInfo?.downloadUrl || '暂无下载链接' }}</p>
      </div>

      <div class="download-card secondary">
        <div class="card-icon">
          <svg width="80" height="80" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="35" fill="#16213e"/>
            <circle cx="40" cy="40" r="25" fill="#0f3460"/>
            <polygon points="40,20 50,30 50,50 40,60 30,50 30,30" fill="#ff6b35"/>
          </svg>
        </div>
        <h2>在线试玩</h2>
        <button class="download-btn secondary-btn" @click="handlePlay">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M8 5 L19 12 L8 19 Z" fill="currentColor"/>
          </svg>
          <span>开始试玩</span>
        </button>
        <p class="play-url">{{ gameInfo?.playUrl || '暂无试玩链接' }}</p>
      </div>
    </div>

    <div class="info-grid">
      <div class="info-card">
        <div class="card-header">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" fill="#16213e" rx="2"/>
            <path d="M7 7 L17 12 L7 17 Z" fill="#00d4ff"/>
          </svg>
          <h2>安装说明</h2>
        </div>
        <pre>{{ gameInfo?.installNote }}</pre>
      </div>

      <div class="info-card">
        <div class="card-header">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#16213e"/>
            <text x="12" y="16" text-anchor="middle" fill="#ff6b35" font-size="12" font-weight="bold">?</text>
          </svg>
          <h2>常见问题</h2>
        </div>
        <pre>{{ gameInfo?.faq }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getGameInfo } from '../utils/api'

const gameInfo = ref(null)

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
.download-page {
  padding-top: 70px;
  max-width: 1200px;
  margin: 0 auto;
  background: #1a1a2e;
}

.page-header {
  text-align: center;
  padding: 80px 40px 60px;
}

.header-icon {
  margin-bottom: 20px;
}

.page-header h1 {
  font-size: 48px;
  color: #ffffff;
  margin-bottom: 16px;
}

.page-header p {
  font-size: 20px;
  color: #a0a0a0;
}

.download-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding: 40px;
}

.download-card {
  background: #16213e;
  border: 2px solid #0f3460;
  border-radius: 16px;
  padding: 50px 40px;
  text-align: center;
  transition: all 0.3s ease;
}

.download-card.primary {
  border-color: #ff6b35;
  background: linear-gradient(135deg, #16213e 0%, #0f3460 100%);
}

.download-card.secondary {
  border-color: #00d4ff;
}

.download-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(255, 107, 53, 0.4);
}

.card-icon {
  margin-bottom: 30px;
}

.download-card h2 {
  font-size: 28px;
  color: #ffffff;
  margin-bottom: 30px;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 40px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.primary-btn {
  background: linear-gradient(135deg, #ff6b35, #ff8c42);
  color: #ffffff;
  border: none;
  box-shadow: 0 6px 25px rgba(255, 107, 53, 0.5);
}

.primary-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 35px rgba(255, 107, 53, 0.7);
}

.secondary-btn {
  background: transparent;
  color: #00d4ff;
  border: 3px solid #00d4ff;
}

.secondary-btn:hover {
  background: rgba(0, 212, 255, 0.1);
  box-shadow: 0 6px 25px rgba(0, 212, 255, 0.5);
}

.download-url,
.play-url {
  color: #a0a0a0;
  font-size: 14px;
  margin-top: 10px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding: 40px;
}

.info-card {
  background: #16213e;
  border: 2px solid #0f3460;
  border-radius: 12px;
  padding: 30px;
  transition: all 0.3s ease;
}

.info-card:hover {
  border-color: #00d4ff;
  box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.card-header h2 {
  font-size: 24px;
  color: #ffffff;
  margin: 0;
}

.info-card pre {
  white-space: pre-wrap;
  line-height: 1.8;
  color: #a0a0a0;
  font-size: 16px;
}

@media (max-width: 768px) {
  .download-grid,
  .info-grid {
    grid-template-columns: 1fr;
    padding: 20px;
  }
}
</style>