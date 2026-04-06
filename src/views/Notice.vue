<template>
  <div class="notice-page">
    <div class="page-header">
      <h1>公告中心</h1>
    </div>

    <div class="filter-section">
      <el-radio-group v-model="category" @change="loadNoticeList">
        <el-radio-button label="all">全部</el-radio-button>
        <el-radio-button label="版本更新">版本更新</el-radio-button>
        <el-radio-button label="活动通知">活动通知</el-radio-button>
        <el-radio-button label="维护公告">维护公告</el-radio-button>
      </el-radio-group>
    </div>

    <div class="notice-list">
      <el-card class="notice-card" v-for="notice in notices" :key="notice.id" @click="$router.push(`/notice/${notice.id}`)">
        <div class="notice-header">
          <el-tag v-if="notice.isTop" type="danger" size="small">置顶</el-tag>
          <el-tag :type="getTagType(notice.category)" size="small">{{ notice.category }}</el-tag>
          <span class="notice-time">{{ formatTime(notice.createTime) }}</span>
        </div>
        <h2>{{ notice.title }}</h2>
      </el-card>
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

const getTagType = (cat) => {
  switch (cat) {
    case '版本更新': return 'success'
    case '维护公告': return 'warning'
    case '活动通知': return 'primary'
    default: return 'info'
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
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  padding: 40px 0;
}

.page-header h1 {
  font-size: 36px;
  color: #333;
}

.filter-section {
  margin-bottom: 24px;
  text-align: center;
}

.notice-list {
  display: grid;
  gap: 16px;
}

.notice-card {
  cursor: pointer;
  transition: all 0.3s;
}

.notice-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.notice-header {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 12px;
}

.notice-time {
  color: #999;
  font-size: 12px;
  margin-left: auto;
}

.notice-card h2 {
  font-size: 18px;
  color: #333;
}
</style>