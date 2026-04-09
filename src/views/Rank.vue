<template>
  <div class="leaderboard container">
    <header class="lb-header">
      <h1>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
          <path d="M4 22h16"/>
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
        </svg>
        排行榜
      </h1>
      <p>群雄逐鹿，谁能登顶巅峰？</p>
    </header>

    <div class="filters">
      <button 
        v-for="f in filterOptions" 
        :key="f.id"
        :class="['filter-btn', { active: timeRange === f.id }]"
        @click="timeRange = f.id; loadRankList()"
      >
        {{ f.label }}
      </button>
    </div>

    <div class="lb-layout">
      <div class="lb-table-wrapper">
        <table class="lb-table">
          <thead>
            <tr>
              <th class="col-rank">排名</th>
              <th class="col-name">玩家昵称</th>
              <th class="col-score">分数</th>
              <th class="col-time">时长</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(player, index) in ranks" :key="player.id" class="lb-row">
              <td class="col-rank">
                <span v-if="index === 0" class="medal medal-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="8" r="6"/>
                    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                </span>
                <span v-else-if="index === 1" class="medal medal-silver">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="8" r="6"/>
                    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                </span>
                <span v-else-if="index === 2" class="medal medal-bronze">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="8" r="6"/>
                    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                </span>
                <span v-else class="rank-num">{{ index + 1 }}</span>
              </td>
              <td class="col-name">
                <div class="player-name">{{ player.playerName }}</div>
                <div v-if="player.message && player.messageStatus === 1" class="player-msg">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  {{ player.message }}
                </div>
              </td>
              <td class="col-score">{{ player.score }}</td>
              <td class="col-time">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                {{ player.playTime }}分钟
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="lb-sidebar">
        <div class="chart-card">
          <h3>Top 10 分数分布</h3>
          <div class="chart">
            <div class="chart-bars">
              <div 
                v-for="(rank, i) in ranks.slice(0, 10)" 
                :key="i" 
                class="chart-bar"
                :style="{ height: (rank.score / maxScore * 100) + '%' }"
              >
                <span class="bar-value">{{ rank.score }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="submit-card">
          <h3>提交分数</h3>
          <form class="submit-form" @submit.prevent="submitPlayerScore">
            <div class="form-group">
              <label>玩家昵称</label>
              <input type="text" v-model="submitForm.playerName" required />
            </div>
            <div class="form-group">
              <label>分数</label>
              <input type="number" v-model="submitForm.score" min="0" required />
            </div>
            <div class="form-group">
              <label>游玩时长(分钟)</label>
              <input type="number" v-model="submitForm.playTime" min="0" required />
            </div>
            <button type="submit" class="btn btn-primary">提交</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { getRankList, submitScore } from '../utils/api'
import { ElMessage } from 'element-plus'

const ranks = ref([])
const timeRange = ref('all')

const filterOptions = [
  { id: 'today', label: '今日排行榜' },
  { id: 'week', label: '本周排行榜' },
  { id: 'all', label: '总排行榜' }
]

const submitForm = ref({
  playerName: '',
  score: 0,
  playTime: 0
})

const maxScore = computed(() => {
  if (ranks.value.length === 0) return 100
  return Math.max(...ranks.value.map(r => r.score))
})

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
.leaderboard {
  padding: 3rem 1rem;
  max-width: 80rem;
  margin: 0 auto;
}

.lb-header {
  text-align: center;
  margin-bottom: 3rem;
}

.lb-header h1 {
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.lb-header p {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-muted-foreground);
}

.filters {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.lb-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .lb-layout {
    grid-template-columns: 1fr 20rem;
  }
}

.lb-table-wrapper {
  background: var(--color-card);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-2xl);
  overflow: hidden;
}

.lb-table {
  width: 100%;
  border-collapse: collapse;
}

.lb-table th {
  text-align: left;
  padding: 1rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-muted-foreground);
  background: rgba(61, 38, 29, 0.5);
  border-bottom: 2px solid var(--color-border);
}

.lb-row {
  border-bottom: 1px solid rgba(74, 46, 35, 0.5);
  transition: background 0.2s ease;
}

.lb-row:hover {
  background: rgba(61, 38, 29, 0.3);
}

.lb-table td {
  padding: 1rem;
  color: var(--color-foreground);
}

.col-rank {
  width: 5rem;
  text-align: center;
}

.medal {
  display: inline-block;
}

.medal-gold { color: #ffd700; filter: drop-shadow(0 0 8px rgba(250, 204, 21, 0.5)); }
.medal-silver { color: #9ca3af; }
.medal-bronze { color: #d97706; }

.rank-num {
  font-family: monospace;
  font-weight: 700;
  color: var(--color-muted-foreground);
}

.player-name {
  font-weight: 900;
  font-size: 1.125rem;
}

.player-msg {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: var(--color-muted-foreground);
  margin-top: 0.25rem;
}

.col-score {
  font-family: monospace;
  font-weight: 900;
  font-size: 1.25rem;
  color: var(--color-primary);
}

.col-time {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-muted-foreground);
}

.lb-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.chart-card,
.submit-card {
  background: var(--color-card);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-2xl);
  padding: 1.5rem;
}

.chart-card h3,
.submit-card h3 {
  font-size: 1.25rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.chart {
  height: 10rem;
}

.chart-bars {
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  height: 100%;
}

.chart-bar {
  flex: 1;
  background: linear-gradient(180deg, var(--color-primary), var(--color-accent));
  border-radius: 0.25rem 0.25rem 0 0;
  min-height: 1.25rem;
  position: relative;
}

.bar-value {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.625rem;
  font-weight: 700;
  color: var(--color-muted-foreground);
  white-space: nowrap;
}

.submit-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group label {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-muted-foreground);
  margin-bottom: 0.375rem;
}

.form-group input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: var(--color-background);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-xl);
  color: var(--color-foreground);
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.form-group input:focus {
  outline: none;
  border-color: var(--color-primary);
}
</style>