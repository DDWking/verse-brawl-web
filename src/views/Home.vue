<template>
  <div class="home-page">
    <div class="hero-section">
      <div class="hero-particles"></div>
      <div class="hero-content">
        <h1 class="hero-title">{{ gameInfo?.gameName || 'Verse Brawl' }}</h1>
        <p class="hero-slogan">{{ gameInfo?.slogan || '跨次元，来乱斗' }}</p>
        <div class="hero-buttons">
          <button class="primary-btn" @click="$router.push('/download')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            下载游戏
          </button>
          <button class="secondary-btn" @click="$router.push('/game')">
            了解更多
          </button>
        </div>
        
        <div class="hero-features">
          <div class="hero-feature">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="14" fill="#00d4ff" opacity="0.2"/>
              <circle cx="16" cy="16" r="10" fill="#ff6b35"/>
              <text x="16" y="20" text-anchor="middle" fill="white" font-size="12" font-weight="bold">F2P</text>
            </svg>
            <span>免费畅玩</span>
          </div>
          <div class="hero-feature">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <circle cx="8" cy="16" r="6" fill="#00d4ff"/>
              <circle cx="24" cy="16" r="6" fill="#ff6b35"/>
              <line x1="14" y1="16" x2="18" y2="16" stroke="#ffffff" stroke-width="2"/>
            </svg>
            <span>多人对战</span>
          </div>
          <div class="hero-feature">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <rect x="6" y="6" width="8" height="20" fill="#00d4ff" rx="2"/>
              <rect x="18" y="6" width="8" height="20" fill="#ff6b35" rx="2"/>
            </svg>
            <span>丰富技能</span>
          </div>
          <div class="hero-feature">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <polygon points="16,2 30,16 16,30 2,16" fill="#00d4ff" opacity="0.3"/>
              <polygon points="16,8 24,16 16,24 8,16" fill="#ff6b35"/>
            </svg>
            <span>实时排行</span>
          </div>
        </div>
      </div>
    </div>

    <div class="features-section">
      <h2 class="section-title">游戏特色</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="20" fill="#0f3460"/>
              <path d="M18 16 L30 24 L18 32 Z" fill="#00d4ff"/>
            </svg>
          </div>
          <h3>多人对战</h3>
          <p>与好友一起实时对战，体验紧张刺激的对决</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="20" fill="#0f3460"/>
              <path d="M24 12 L28 20 L36 22 L30 28 L32 36 L24 32 L16 36 L18 28 L12 22 L20 20 Z" fill="#ff6b35"/>
            </svg>
          </div>
          <h3>丰富技能</h3>
          <p>每个角色都有独特技能，组合策略无限可能</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="20" fill="#0f3460"/>
              <rect x="18" y="18" width="12" height="12" fill="#00d4ff" rx="2"/>
              <path d="M22 22 L22 26 M26 22 L26 26" stroke="#ffffff" stroke-width="2"/>
            </svg>
          </div>
          <h3>简洁操作</h3>
          <p>简单易上手，新手也能快速享受对战乐趣</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="20" fill="#0f3460"/>
              <polygon points="24,12 28,20 36,20 30,26 32,34 24,30 16,34 18,26 12,20 20,20" fill="#ff6b35"/>
              <circle cx="24" cy="24" r="4" fill="#ffffff"/>
            </svg>
          </div>
          <h3>排行榜</h3>
          <p>实时排行系统，争夺榜首荣耀</p>
        </div>
      </div>
    </div>

    <div class="news-section">
      <h2 class="section-title">最新动态</h2>
      <div class="news-grid">
        <div class="news-card" v-for="notice in notices" :key="notice.id" @click="$router.push(`/notice/${notice.id}`)">
          <div class="news-image">
            <div class="image-placeholder">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <rect width="80" height="80" fill="#16213e"/>
                <polygon points="40,20 50,35 60,35 52,45 56,60 40,50 24,60 28,45 20,35 30,35" fill="#00d4ff" opacity="0.5"/>
              </svg>
            </div>
          </div>
          <div class="news-content">
            <div class="news-tags">
              <span class="news-tag" :class="getTagClass(notice.category)">{{ notice.category }}</span>
            </div>
            <h3 class="news-title">{{ notice.title }}</h3>
            <p class="news-time">{{ formatTime(notice.createTime) }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="status-section">
      <div class="status-indicator">
        <div class="status-icon" :class="{ online: serverStatus === 'online' }">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.3"/>
            <circle cx="12" cy="12" r="6" fill="currentColor"/>
          </svg>
        </div>
        <span class="status-text">
          服务器状态: <strong :class="serverStatus === 'online' ? 'online' : 'offline'">{{ serverStatus === 'online' ? '在线' : '离线' }}</strong>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getHomeData } from '../utils/api'

const gameInfo = ref(null)
const notices = ref([])
const serverStatus = ref('online')

const formatTime = (time) => {
  if (!time) return ''
  return new Date(time).toLocaleDateString('zh-CN')
}

const getTagClass = (category) => {
  switch (category) {
    case '版本更新': return 'tag-update'
    case '维护公告': return 'tag-maintenance'
    case '活动通知': return 'tag-event'
    default: return 'tag-default'
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
.home-page {
  padding-top: 70px;
}

.hero-section {
  position: relative;
  min-height: 600px;
  background: linear-gradient(135deg, #0f3460 0%, #16213e 50%, #1a1a2e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 50%);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px 20px;
}

.hero-title {
  font-size: 72px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 20px;
  text-shadow: 0 0 30px rgba(0, 212, 255, 0.5), 0 0 60px rgba(255, 107, 53, 0.3);
  animation: titleGlow 3s ease-in-out infinite;
}

@keyframes titleGlow {
  0%, 100% { text-shadow: 0 0 30px rgba(0, 212, 255, 0.5), 0 0 60px rgba(255, 107, 53, 0.3); }
  50% { text-shadow: 0 0 40px rgba(0, 212, 255, 0.7), 0 0 80px rgba(255, 107, 53, 0.5); }
}

.hero-slogan {
  font-size: 32px;
  color: #00d4ff;
  margin-bottom: 40px;
  font-weight: 500;
  letter-spacing: 2px;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 40px;
}

.primary-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 40px;
  background: linear-gradient(135deg, #ff6b35, #ff8c42);
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 25px rgba(255, 107, 53, 0.5);
}

.primary-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 35px rgba(255, 107, 53, 0.7);
}

.secondary-btn {
  padding: 16px 40px;
  background: transparent;
  color: #00d4ff;
  font-size: 20px;
  font-weight: bold;
  border: 2px solid #00d4ff;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.secondary-btn:hover {
  background: rgba(0, 212, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 212, 255, 0.4);
}

.hero-features {
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 20px;
}

.hero-feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.hero-feature span {
  color: #a0a0a0;
  font-size: 14px;
  font-weight: 500;
}

.features-section {
  padding: 80px 40px;
  background: #1a1a2e;
}

.section-title {
  font-size: 48px;
  text-align: center;
  margin-bottom: 60px;
  color: #ffffff;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: #16213e;
  border: 2px solid #0f3460;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.feature-card:hover {
  border-color: #00d4ff;
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 212, 255, 0.3);
}

.feature-icon {
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 12px;
}

.feature-card p {
  color: #a0a0a0;
  font-size: 16px;
  line-height: 1.6;
}

.news-section {
  padding: 60px 40px;
  background: #16213e;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.news-card {
  background: #1a1a2e;
  border: 2px solid #0f3460;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}

.news-card:hover {
  border-color: #ff6b35;
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.3);
}

.news-image {
  width: 100%;
  height: 180px;
  background: #16213e;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-placeholder {
  opacity: 0.5;
}

.news-content {
  padding: 20px;
}

.news-tags {
  margin-bottom: 12px;
}

.news-tag {
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
}

.tag-update {
  background: rgba(0, 212, 255, 0.2);
  color: #00d4ff;
  border: 1px solid #00d4ff;
}

.tag-maintenance {
  background: rgba(255, 107, 53, 0.2);
  color: #ff6b35;
  border: 1px solid #ff6b35;
}

.tag-event {
  background: rgba(255, 215, 0, 0.2);
  color: #ffd700;
  border: 1px solid #ffd700;
}

.tag-default {
  background: rgba(160, 160, 160, 0.2);
  color: #a0a0a0;
  border: 1px solid #a0a0a0;
}

.news-title {
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 8px;
}

.news-time {
  color: #a0a0a0;
  font-size: 14px;
}

.status-section {
  padding: 40px 20px;
  background: #1a1a2e;
  display: flex;
  justify-content: center;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #16213e;
  padding: 20px 40px;
  border-radius: 12px;
  border: 2px solid #0f3460;
}

.status-icon {
  color: #ff6b35;
}

.status-icon.online {
  color: #00d4ff;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.status-text {
  font-size: 18px;
  color: #a0a0a0;
}

.status-text strong.online {
  color: #00d4ff;
  font-size: 20px;
}

.status-text strong.offline {
  color: #ff6b35;
  font-size: 20px;
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 48px;
  }
  
  .hero-slogan {
    font-size: 24px;
  }
  
  .hero-features {
    gap: 20px;
  }
  
  .features-grid,
  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>