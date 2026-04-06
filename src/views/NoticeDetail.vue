<template>
  <div class="notice-detail-page">
    <el-card class="detail-card" v-if="notice">
      <div class="notice-header">
        <el-tag v-if="notice.isTop" type="danger">置顶</el-tag>
        <el-tag :type="getTagType(notice.category)">{{ notice.category }}</el-tag>
        <span class="notice-time">{{ formatTime(notice.createTime) }}</span>
      </div>
      <h1>{{ notice.title }}</h1>
      <div class="notice-content">
        <pre>{{ notice.content }}</pre>
      </div>
      <el-button @click="$router.back()">返回列表</el-button>
    </el-card>
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

const getTagType = (cat) => {
  switch (cat) {
    case '版本更新': return 'success'
    case '维护公告': return 'warning'
    case '活动通知': return 'primary'
    default: return 'info'
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
.notice-detail-page {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.detail-card {
  padding: 20px;
}

.notice-header {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 16px;
}

.notice-time {
  color: #999;
  margin-left: auto;
}

.detail-card h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 24px;
}

.notice-content {
  padding: 20px;
  background: #f5f7fa;
  border-radius: 8px;
  margin-bottom: 24px;
}

.notice-content pre {
  white-space: pre-wrap;
  line-height: 1.8;
  color: #666;
}
</style>