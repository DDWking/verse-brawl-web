<template>
  <div class="notice-detail">
    <div class="detail-content" v-if="notice">
      <div class="notice-meta">
        <span v-if="notice.isTop" class="top-badge">置顶</span>
        <span class="category-badge" :class="getCategoryClass(notice.category)">{{ notice.category }}</span>
        <span class="notice-date">{{ formatTime(notice.createTime) }}</span>
      </div>
      
      <h1>{{ notice.title }}</h1>
      
      <div class="notice-body">
        <pre>{{ notice.content }}</pre>
      </div>
      
      <button class="back-btn" @click="$router.back()">返回列表</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getNoticeDetail } from '../utils/api'

const route = useRoute()
const notice = ref(null)

const formatTime = (time) => {
  if (!time) return ''
  return new Date(time).toLocaleDateString('zh-CN')
}

const getCategoryClass = (cat) => {
  return {
    'cat-update': cat === '版本更新',
    'cat-event': cat === '活动通知',
    'cat-maintenance': cat === '维护公告'
  }
}

onMounted(async () => {
  try {
    const res = await getNoticeDetail(route.params.id)
    notice.value = res.data
  } catch (e) {
    console.error(e)
  }
})
</script>

<style scoped>
.notice-detail {
  padding-top: 64px;
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 40px;
}

.detail-content {
  background: #1c2732;
  padding: 48px;
  border-radius: 12px;
  margin: 20px;
}

.notice-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.top-badge {
  font-size: 13px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 4px;
  background: rgba(255, 122, 69, 0.15);
  color: #ff7a45;
}

.category-badge {
  font-size: 13px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 4px;
  background: rgba(92, 158, 173, 0.15);
  color: #5c9ead;
}

.category-badge.cat-update {
  background: rgba(255, 122, 69, 0.15);
  color: #ff7a45;
}

.category-badge.cat-event {
  background: rgba(255, 215, 0, 0.15);
  color: #ffd700;
}

.category-badge.cat-maintenance {
  background: rgba(136, 153, 166, 0.15);
  color: #8899a6;
}

.notice-date {
  font-size: 14px;
  color: #8899a6;
  margin-left: auto;
}

.detail-content h1 {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 32px;
}

.notice-body {
  padding: 32px;
  background: #0f1419;
  border-radius: 8px;
  margin-bottom: 32px;
}

.notice-body pre {
  color: #8899a6;
  line-height: 1.8;
  white-space: pre-wrap;
  font-size: 16px;
}

.back-btn {
  padding: 12px 24px;
  background: transparent;
  color: #5c9ead;
  border: 1px solid #5c9ead;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
}

.back-btn:hover {
  background: rgba(92, 158, 173, 0.1);
}
</style>