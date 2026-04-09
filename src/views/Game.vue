<template>
  <div class="game-page">
    <div class="game-header">
      <div class="header-decoration">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <polygon points="40,10 70,40 40,70 10,40" fill="#00d4ff" opacity="0.3"/>
          <polygon points="40,20 60,40 40,60 20,40" fill="#ff6b35"/>
          <circle cx="40" cy="40" r="10" fill="#ffffff"/>
        </svg>
      </div>
      <h1>{{ gameInfo?.gameName || 'Verse Brawl' }}</h1>
      <p class="slogan">{{ gameInfo?.slogan }}</p>
    </div>

    <div class="content-grid">
      <div class="info-card">
        <div class="card-header">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#00d4ff"/>
            <path d="M2 17L12 22L22 17" fill="none" stroke="#00d4ff" stroke-width="2"/>
            <path d="M2 12L12 17L22 12" fill="none" stroke="#00d4ff" stroke-width="2"/>
          </svg>
          <h2>游戏背景</h2>
        </div>
        <p>{{ gameInfo?.background }}</p>
      </div>

      <div class="info-card">
        <div class="card-header">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#0f3460"/>
            <path d="M8 8 L16 12 L8 16 Z" fill="#ff6b35"/>
          </svg>
          <h2>玩法说明</h2>
        </div>
        <pre>{{ gameInfo?.gameplay }}</pre>
      </div>

      <div class="info-card">
        <div class="card-header">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <rect x="4" y="4" width="6" height="6" fill="#00d4ff" rx="1"/>
            <rect x="14" y="4" width="6" height="6" fill="#00d4ff" rx="1"/>
            <rect x="4" y="14" width="6" height="6" fill="#00d4ff" rx="1"/>
            <rect x="14" y="14" width="6" height="6" fill="#ff6b35" rx="1"/>
          </svg>
          <h2>操作说明</h2>
        </div>
        <pre>{{ gameInfo?.operation }}</pre>
      </div>

      <div class="info-card feature-card">
        <div class="card-header">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <polygon points="12,2 14,8 20,8 16,12 18,18 12,14 6,18 8,12 4,8 10,8" fill="#ff6b35"/>
            <circle cx="12" cy="12" r="3" fill="#ffffff"/>
          </svg>
          <h2>游戏特色</h2>
        </div>
        <pre>{{ gameInfo?.feature }}</pre>
      </div>

      <div class="info-card status-card">
        <div class="card-header">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#00d4ff" opacity="0.3"/>
            <circle cx="12" cy="12" r="6" fill="#00d4ff"/>
          </svg>
          <h2>服务器状态</h2>
        </div>
        <div class="status-badge online">
          <span class="status-dot"></span>
          <span>在线运行中</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getGameInfo } from '../utils/api'

const gameInfo = ref(null)

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
.game-page {
  padding-top: 70px;
  max-width: 1200px;
  margin: 0 auto;
  background: #1a1a2e;
}

.game-header {
  text-align: center;
  padding: 80px 40px 60px;
  position: relative;
}

.header-decoration {
  margin-bottom: 20px;
}

.game-header h1 {
  font-size: 48px;
  color: #ffffff;
  margin-bottom: 16px;
}

.slogan {
  font-size: 24px;
  color: #00d4ff;
}

.content-grid {
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
  transform: translateY(-5px);
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

.info-card p,
.info-card pre {
  color: #a0a0a0;
  line-height: 1.8;
  white-space: pre-wrap;
  font-size: 16px;
}

.feature-card {
  background: linear-gradient(135deg, #16213e 0%, #0f3460 100%);
  border-color: #ff6b35;
}

.status-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.status-badge {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
}

.status-badge.online {
  background: rgba(0, 212, 255, 0.2);
  color: #00d4ff;
  border: 2px solid #00d4ff;
}

.status-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #00d4ff;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
    padding: 20px;
  }
}
</style>