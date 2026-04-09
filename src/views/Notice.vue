<template>
  <div class="announcements container">
    <header class="ann-header">
      <h1>公告中心</h1>
      <p>获取最新游戏资讯与活动信息</p>
    </header>

    <div class="ann-layout">
      <div class="ann-list">
        <div class="filters">
          <button 
            v-for="f in filterOptions" 
            :key="f"
            :class="['filter-btn', { active: category === f }]"
            @click="category = f; loadNoticeList()"
          >
            {{ f }}
          </button>
        </div>

        <div class="notice-items">
          <button
            v-for="notice in filteredNotices"
            :key="notice.id"
            :class="['notice-item', { active: selectedId === notice.id }]"
            @click="selectedId = notice.id"
          >
            <div class="notice-meta">
              <span class="notice-badge" :class="getCategoryClass(notice.category)">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                  <line x1="7" y1="7" x2="7.01" y2="7"/>
                </svg>
                {{ notice.category }}
              </span>
              <span class="notice-date">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {{ formatTime(notice.createTime) }}
              </span>
            </div>
            <h3 class="notice-title">{{ notice.title }}</h3>
          </button>
        </div>
      </div>

      <div class="ann-detail">
        <div v-if="selectedNotice" class="detail-card">
          <div class="detail-meta">
            <span class="detail-badge" :class="getCategoryClass(selectedNotice.category)">{{ selectedNotice.category }}</span>
            <span class="detail-date">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {{ formatTime(selectedNotice.createTime) }}
            </span>
          </div>
          <h2 class="detail-title">{{ selectedNotice.title }}</h2>
          <div class="detail-content">
            <p>感谢大家一直以来对 VerseBrawl 的支持！我们将继续努力，为大家带来更好的游戏体验。</p>
            <p>如有任何问题，请随时通过客服渠道与我们联系。</p>
          </div>
          <button class="back-btn" @click="$router.push(`/notice/${selectedNotice.id}`)">查看完整内容</button>
        </div>
        <div v-else class="detail-empty">
          请在左侧选择一条公告查看详情
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { getNoticeList } from '../utils/api'

const notices = ref([])
const category = ref('全部')
const selectedId = ref(null)

const filterOptions = ['全部', '版本更新', '活动通知', '维护公告']

const filteredNotices = computed(() => {
  if (category.value === '全部') return notices.value
  return notices.value.filter(n => n.category === category.value)
})

const selectedNotice = computed(() => {
  return notices.value.find(n => n.id === selectedId.value)
})

const formatTime = (time) => {
  if (!time) return ''
  return new Date(time).toLocaleDateString('zh-CN')
}

const getCategoryClass = (cat) => {
  return {
    'badge-update': cat === '版本更新',
    'badge-event': cat === '活动通知',
    'badge-maintenance': cat === '维护公告'
  }
}

const loadNoticeList = async () => {
  try {
    const res = await getNoticeList('all')
    notices.value = res.data
    if (res.data.length > 0 && !selectedId.value) {
      selectedId.value = res.data[0].id
    }
  } catch (e) {
    console.error(e)
  }
}

onMounted(() => {
  loadNoticeList()
})
</script>

<style scoped>
.announcements {
  padding: 3rem 1rem;
  max-width: 80rem;
  margin: 0 auto;
}

.ann-header {
  text-align: center;
  margin-bottom: 3rem;
}

.ann-header h1 {
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
}

.ann-header p {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-muted-foreground);
}

.ann-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .ann-layout {
    grid-template-columns: 20rem 1fr;
  }
}

.ann-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.notice-items {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.notice-item {
  width: 100%;
  text-align: left;
  padding: 1rem;
  background: var(--color-card);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-xl);
  cursor: pointer;
  transition: all 0.2s ease;
}

.notice-item:hover {
  border-color: rgba(255, 85, 0, 0.5);
}

.notice-item.active {
  background: rgba(255, 85, 0, 0.1);
  border-color: var(--color-primary);
}

.notice-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.notice-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.125rem 0.5rem;
  background: rgba(255, 85, 0, 0.1);
  color: var(--color-primary);
  border: 1px solid rgba(255, 85, 0, 0.2);
  border-radius: var(--radius-md);
}

.notice-badge.badge-update {
  background: rgba(255, 85, 0, 0.1);
  color: var(--color-primary);
}

.notice-badge.badge-event {
  background: rgba(255, 170, 0, 0.1);
  color: var(--color-accent);
}

.notice-badge.badge-maintenance {
  background: rgba(163, 144, 136, 0.1);
  color: var(--color-muted-foreground);
}

.notice-date {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-muted-foreground);
}

.notice-title {
  font-weight: 700;
  color: var(--color-foreground);
  line-height: 1.4;
}

.notice-item:hover .notice-title {
  color: var(--color-primary);
}

.ann-detail {
  min-height: 31.25rem;
}

.detail-card {
  background: var(--color-card);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-2xl);
  padding: 1.5rem;
  min-height: 31.25rem;
}

@media (min-width: 768px) {
  .detail-card {
    padding: 2rem;
  }
}

.detail-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.detail-badge {
  font-size: 0.875rem;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  background: rgba(255, 85, 0, 0.1);
  color: var(--color-primary);
  border: 1px solid rgba(255, 85, 0, 0.2);
  border-radius: var(--radius-md);
}

.detail-date {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-muted-foreground);
}

.detail-title {
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 2rem;
}

.detail-content {
  color: var(--color-muted-foreground);
  line-height: 1.7;
  font-weight: 500;
}

.detail-content p {
  margin-bottom: 1rem;
}

.back-btn {
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: var(--color-muted-foreground);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.back-btn:hover {
  background: rgba(255, 85, 0, 0.1);
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.detail-empty {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-2xl);
  padding: 2rem;
  min-height: 31.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-muted-foreground);
}
</style>