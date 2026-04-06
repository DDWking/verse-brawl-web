<template>
  <div class="home-page">
    <!-- 英雄区 -->
    <div class="hero-section">
      <div class="hero-content">
        <h1>{{ gameInfo?.gameName || 'Verse Brawl' }}</h1>
        <p class="slogan">{{ gameInfo?.slogan || '跨次元，来乱斗' }}</p>
        <div class="hero-buttons">
          <el-button type="primary" size="large" @click="$router.push('/download')">下载游戏</el-button>
          <el-button size="large" @click="$router.push('/game')">了解更多</el-button>
        </div>
      </div>
    </div>

    <!-- 核心亮点 -->
    <div class="features-section">
      <h2>游戏特色</h2>
      <div class="features-grid">
        <el-card class="feature-card">
          <div class="feature-icon">🎮</div>
          <h3>多人对战</h3>
          <p>与好友一起实时对战，体验紧张刺激的对决</p>
        </el-card>
        <el-card class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>丰富技能</h3>
          <p>每个角色都有独特技能，组合策略无限可能</p>
        </el-card>
        <el-card class="feature-card">
          <div class="feature-icon">🎯</div>
          <h3>简洁操作</h3>
          <p>简单易上手，新手也能快速享受对战乐趣</p>
        </el-card>
        <el-card class="feature-card">
          <div class="feature-icon">🏆</div>
          <h3>排行榜</h3>
          <p>实时排行系统，争夺榜首荣耀</p>
        </el-card>
      </div>
    </div>

    <!-- 最新公告 -->
    <div class="news-section">
      <h2>最新动态</h2>
      <el-row :gutter="20">
        <el-col :span="8" v-for="notice in notices" :key="notice.id">
          <el-card class="news-card" @click="$router.push(`/notice/${notice.id}`)">
            <el-tag :type="notice.category === '版本更新' ? 'success' : notice.category === '维护公告' ? 'warning' : 'primary'">
              {{ notice.category }}
            </el-tag>
            <h3>{{ notice.title }}</h3>
            <p class="news-time">{{ formatTime(notice.createTime) }}</p>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!-- 服务器状态 -->
    <div class="status-section">
      <el-tag type="success" size="large">服务器状态: {{ serverStatus === 'online' ? '在线' : '离线' }}</el-tag>
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
  padding: 0;
}

.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 20px;
  text-align: center;
}

.hero-content h1 {
  font-size: 48px;
  margin-bottom: 16px;
}

.slogan {
  font-size: 24px;
  margin-bottom: 32px;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.features-section {
  padding: 40px 20px;
  text-align: center;
}

.features-section h2 {
  margin-bottom: 32px;
  color: #333;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.feature-card {
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.news-section {
  padding: 40px 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.news-section h2 {
  margin-bottom: 24px;
  color: #333;
}

.news-card {
  cursor: pointer;
  transition: all 0.3s;
}

.news-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.news-card h3 {
  margin: 12px 0 8px;
  font-size: 16px;
}

.news-time {
  color: #999;
  font-size: 12px;
}

.status-section {
  padding: 20px;
  text-align: center;
}
</style>