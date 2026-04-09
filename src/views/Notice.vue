<template>
  <div class="notice-page">
    <div class="page-header">
      <div class="header-icon">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <rect x="10" y="15" width="40" height="30" fill="#0f3460" rx="4"/>
          <path d="M15 20 L45 20 L45 35 L15 35 Z" fill="#16213e"/>
          <circle cx="30" cy="27" r="6" fill="#00d4ff"/>
          <path d="M10 15 L30 5 L50 15" fill="none" stroke="#ff6b35" stroke-width="2"/>
        </svg>
      </div>
      <h1>公告中心</h1>
    </div>

    <div class="filter-section">
      <div class="filter-btn" :class="{ active: category === 'all' }" @click="category = 'all'; loadNoticeList()">
        <span>全部</span>
      </div>
      <div class="filter-btn" :class="{ active: category === '版本更新' }" @click="category = '版本更新'; loadNoticeList()">
        <span>版本更新</span>
      </div>
      <div class="filter-btn" :class="{ active: category === '活动通知' }" @click="category = '活动通知'; loadNoticeList()">
        <span>活动通知</span>
      </div>
      <div class="filter-btn" :class="{ active: category === '维护公告' }" @click="category = '维护公告'; loadNoticeList()">
        <span>维护公告</span>
      </div>
    </div>

    <div class="notice-list">
      <div class="notice-card" v-for="notice in notices" :key="notice.id" @click="$router.push(`/notice/${notice.id}`)">
        <div class="notice-header">
          <span v-if="notice.isTop" class="top-tag">置顶</span>
          <span class="category-tag" :class="getTagClass(notice.category)">{{ notice.category }}</span>
          <span class="notice-time">{{ formatTime(notice.createTime) }}</span>
        </div>
        <h2>{{ notice.title }}</h2>
        <div class="card-arrow">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M8 4 L14 10 L8 16" fill="none" stroke="#00d4ff" stroke-width="2"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getNoticeList } from '../utils/api'

const notices = ref([])
const category = ref('all')

const formatTime = (time) => {
  if (!time) return ''
  return new Date(time).toLocaleDateString('zh-CN')
}

const getTagClass = (cat) => {
  switch (cat) {
    case '版本更新': return 'tag-update'
    case '维护公告': return 'tag-maintenance'
    case '活动通知': return 'tag-event'
    default: return 'tag-default'
  }
}

const loadNoticeList = async () => {
  try {
    const res = await getNoticeList(category.value)
    notices.value = res.data
  } catch (e) {
    console.error(e)
  }
}

onMounted(() => {
  loadNoticeList()
})
</script>

<style scoped>
.notice-page {
  padding-top: 70px;
  max-width: 800px;
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

.filter-section {
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 20px 40px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 12px 28px;
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

.notice-list {
  display: grid;
  gap: 20px;
  padding: 40px;
}

.notice-card {
  background: #16213e;
  border: 2px solid #0f3460;
  border-radius: 12px;
  padding: 24px 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.notice-card:hover {
  border-color: #ff6b35;
  transform: translateX(5px);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.3);
}

.notice-header {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 12px;
}

.top-tag {
  background: rgba(255, 107, 53, 0.2);
  color: #ff6b35;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  border: 1px solid #ff6b35;
}

.category-tag {
  padding: 4px 12px;
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

.notice-time {
  color: #a0a0a0;
  font-size: 14px;
}

.notice-card h2 {
  font-size: 18px;
  color: #ffffff;
  margin: 0;
}

.card-arrow {
  opacity: 0;
  transition: all 0.3s ease;
}

.notice-card:hover .card-arrow {
  opacity: 1;
  transform: translateX(5px);
}
</style>