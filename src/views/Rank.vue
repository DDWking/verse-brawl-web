<template>
  <div class="rank-page">
    <div class="page-header">
      <div class="header-icon">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <polygon points="30,8 35,18 45,20 38,28 40,38 30,34 20,38 22,28 15,20 25,18" fill="#ff6b35"/>
          <circle cx="30" cy="30" r="8" fill="#00d4ff"/>
        </svg>
      </div>
      <h1>排行榜</h1>
      <p>争夺榜首，成为最强玩家</p>
    </div>

    <div class="filter-section">
      <div class="filter-btn" :class="{ active: timeRange === 'all' }" @click="timeRange = 'all'; loadRankList()">
        <span>总排行</span>
      </div>
      <div class="filter-btn" :class="{ active: timeRange === 'today' }" @click="timeRange = 'today'; loadRankList()">
        <span>今日</span>
      </div>
      <div class="filter-btn" :class="{ active: timeRange === 'week' }" @click="timeRange = 'week'; loadRankList()">
        <span>本周</span>
      </div>
    </div>

    <div class="content-grid">
      <div class="rank-table-section">
        <div class="table-card">
          <div class="rank-table">
            <div class="table-header">
              <div class="col rank-col">排名</div>
              <div class="col name-col">玩家昵称</div>
              <div class="col score-col">分数</div>
              <div class="col time-col">游玩时长</div>
              <div class="col message-col">玩家寄语</div>
              <div class="col date-col">提交时间</div>
            </div>
            <div class="table-body">
              <div class="table-row" v-for="(rank, index) in ranks" :key="rank.id">
                <div class="col rank-col">
                  <div class="rank-badge" :class="getRankClass(index)">
                    <span v-if="index < 3">{{ index + 1 }}</span>
                    <span v-else>{{ index + 1 }}</span>
                  </div>
                </div>
                <div class="col name-col">{{ rank.playerName }}</div>
                <div class="col score-col">{{ rank.score }}</div>
                <div class="col time-col">{{ rank.playTime }}分钟</div>
                <div class="col message-col">
                  <span v-if="rank.message && rank.messageStatus === 1">{{ rank.message }}</span>
                  <span v-else-if="rank.messageStatus === 0" class="pending-tag">待审核</span>
                  <span v-else>-</span>
                </div>
                <div class="col date-col">{{ formatTime(rank.createTime) }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sidebar-section">
        <div class="chart-card">
          <h3>Top 10 分数分布</h3>
          <div class="chart-placeholder">
            <svg width="100%" height="200" viewBox="0 0 300 200">
              <rect x="20" y="150" width="20" height="50" fill="#ff6b35"/>
              <rect x="50" y="130" width="20" height="70" fill="#ff6b35" opacity="0.8"/>
              <rect x="80" y="100" width="20" height="100" fill="#00d4ff" opacity="0.6"/>
              <rect x="110" y="80" width="20" height="120" fill="#00d4ff"/>
              <rect x="140" y="60" width="20" height="140" fill="#00d4ff"/>
              <rect x="170" y="40" width="20" height="160" fill="#00d4ff"/>
              <rect x="200" y="30" width="20" height="170" fill="#00d4ff"/>
              <rect x="230" y="20" width="20" height="180" fill="#00d4ff"/>
              <rect x="260" y="10" width="20" height="190" fill="#00d4ff"/>
            </svg>
          </div>
        </div>

        <div class="submit-card">
          <h3>提交分数</h3>
          <div class="submit-form">
            <div class="form-item">
              <label>玩家昵称</label>
              <input type="text" v-model="submitForm.playerName" placeholder="输入昵称" />
            </div>
            <div class="form-item">
              <label>分数</label>
              <input type="number" v-model="submitForm.score" placeholder="输入分数" min="0" />
            </div>
            <div class="form-item">
              <label>游玩时长(分钟)</label>
              <input type="number" v-model="submitForm.playTime" placeholder="输入时长" min="0" />
            </div>
            <button class="submit-btn" @click="submitPlayerScore">
              <svg width="20" height="20" viewBox="0 0 20 20">
                <path d="M10 2 L18 10 L10 18 L2 10 Z" fill="none" stroke="#ffffff" stroke-width="2"/>
                <path d="M6 10 L14 10" stroke="#ffffff" stroke-width="2"/>
                <path d="M10 6 L10 14" stroke="#ffffff" stroke-width="2"/>
              </svg>
              提交
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getRankList, submitScore } from '../utils/api'
import { ElMessage } from 'element-plus'

const ranks = ref([])
const timeRange = ref('all')
const submitForm = ref({
  playerName: '',
  score: 0,
  playTime: 0
})

const formatTime = (time) => {
  if (!time) return ''
  return new Date(time).toLocaleDateString('zh-CN')
}

const getRankClass = (index) => {
  if (index === 0) return 'gold'
  if (index === 1) return 'silver'
  if (index === 2) return 'bronze'
  return ''
}

const loadRankList = async () => {
  try {
    const res = await getRankList(timeRange.value)
    ranks.value = res.data
  } catch (e) {
    console.error(e)
  }
}

const submitPlayerScore = async () => {
  if (!submitForm.value.playerName) {
    ElMessage.warning('请输入玩家昵称')
    return
  }
  try {
    await submitScore(submitForm.value)
    ElMessage.success('提交成功')
    submitForm.value = { playerName: '', score: 0, playTime: 0 }
    loadRankList()
  } catch (e) {
    ElMessage.error('提交失败')
  }
}

onMounted(() => {
  loadRankList()
})
</script>

<style scoped>
.rank-page {
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

.filter-section {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px 40px;
}

.filter-btn {
  padding: 12px 32px;
  background: #16213e;
  color: #a0a0a0;
  border: 2px solid #0f3460;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  border-color: #00d4ff;
  color: #00d4ff;
}

.filter-btn.active {
  background: rgba(255, 107, 53, 0.2);
  border-color: #ff6b35;
  color: #ff6b35;
}

.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  padding: 40px;
}

.table-card {
  background: #16213e;
  border: 2px solid #0f3460;
  border-radius: 12px;
  overflow: hidden;
}

.rank-table {
  width: 100%;
}

.table-header {
  display: flex;
  background: #0f3460;
  padding: 16px;
  font-weight: bold;
  color: #ffffff;
  border-bottom: 2px solid #00d4ff;
}

.table-row {
  display: flex;
  padding: 16px;
  border-bottom: 1px solid #0f3460;
  transition: all 0.3s ease;
}

.table-row:hover {
  background: rgba(0, 212, 255, 0.1);
}

.col {
  color: #a0a0a0;
}

.rank-col {
  width: 80px;
  display: flex;
  align-items: center;
}

.rank-badge {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #0f3460;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #ffffff;
}

.rank-badge.gold {
  background: linear-gradient(135deg, #ffd700, #ffed4a);
  color: #1a1a2e;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
}

.rank-badge.silver {
  background: linear-gradient(135deg, #c0c0c0, #e8e8e8);
  color: #1a1a2e;
  box-shadow: 0 4px 15px rgba(192, 192, 192, 0.5);
}

.rank-badge.bronze {
  background: linear-gradient(135deg, #cd7f32, #dda15e);
  color: #1a1a2e;
  box-shadow: 0 4px 15px rgba(205, 127, 50, 0.5);
}

.name-col {
  flex: 1;
}

.score-col {
  width: 100px;
}

.time-col {
  width: 120px;
}

.message-col {
  flex: 1;
}

.pending-tag {
  background: rgba(255, 107, 53, 0.2);
  color: #ff6b35;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
}

.date-col {
  width: 120px;
}

.sidebar-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.chart-card,
.submit-card {
  background: #16213e;
  border: 2px solid #0f3460;
  border-radius: 12px;
  padding: 30px;
}

.chart-card h3,
.submit-card h3 {
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 20px;
}

.chart-placeholder {
  width: 100%;
  height: 200px;
}

.submit-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-item label {
  display: block;
  color: #a0a0a0;
  font-size: 14px;
  margin-bottom: 8px;
}

.form-item input {
  width: 100%;
  padding: 12px;
  background: #1a1a2e;
  border: 2px solid #0f3460;
  border-radius: 6px;
  color: #ffffff;
  font-size: 16px;
  transition: all 0.3s ease;
}

.form-item input:focus {
  outline: none;
  border-color: #00d4ff;
  box-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
}

.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 32px;
  background: linear-gradient(135deg, #ff6b35, #ff8c42);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.5);
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(255, 107, 53, 0.7);
}

@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .table-header,
  .table-row {
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .col {
    width: auto;
    flex: 1;
  }
}
</style>