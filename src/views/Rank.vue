<template>
  <div class="rank-page">
    <div class="page-header">
      <h1>排行榜</h1>
      <p>争夺榜首，成为最强玩家</p>
    </div>

    <div class="filter-section">
      <el-radio-group v-model="timeRange" @change="loadRankList">
        <el-radio-button label="all">总排行</el-radio-button>
        <el-radio-button label="today">今日</el-radio-button>
        <el-radio-button label="week">本周</el-radio-button>
      </el-radio-group>
    </div>

    <el-row :gutter="24">
      <el-col :span="16">
        <el-card class="rank-table-card">
          <el-table :data="ranks" stripe>
            <el-table-column type="index" label="排名" width="60" />
            <el-table-column prop="playerName" label="玩家昵称" />
            <el-table-column prop="score" label="分数" sortable />
            <el-table-column prop="playTime" label="游玩时长(分钟)" />
            <el-table-column prop="message" label="玩家寄语">
              <template #default="{ row }">
                <span v-if="row.message && row.messageStatus === 1">{{ row.message }}</span>
                <el-tag v-else-if="row.messageStatus === 0" type="info" size="small">待审核</el-tag>
                <span v-else>-</span>
              </template>
            </el-table-column>
            <el-table-column prop="createTime" label="提交时间">
              <template #default="{ row }">
                {{ formatTime(row.createTime) }}
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card class="chart-card">
          <h3>Top 10 分数分布</h3>
          <div ref="chartRef" class="chart-container"></div>
        </el-card>

        <el-card class="submit-card">
          <h3>提交分数</h3>
          <el-form :model="submitForm" label-width="80px">
            <el-form-item label="玩家昵称">
              <el-input v-model="submitForm.playerName" />
            </el-form-item>
            <el-form-item label="分数">
              <el-input-number v-model="submitForm.score" :min="0" />
            </el-form-item>
            <el-form-item label="游玩时长">
              <el-input-number v-model="submitForm.playTime" :min="0" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitPlayerScore">提交</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { getRankList, submitScore } from '../utils/api'
import { ElMessage } from 'element-plus'

const ranks = ref([])
const timeRange = ref('all')
const chartRef = ref(null)
const submitForm = ref({
  playerName: '',
  score: 0,
  playTime: 0
})

const formatTime = (time) => {
  if (!time) return ''
  return new Date(time).toLocaleDateString('zh-CN')
}

const loadRankList = async () => {
  try {
    const res = await getRankList(timeRange.value)
    ranks.value = res.data
    drawChart()
  } catch (e) {
    console.error(e)
  }
}

const drawChart = () => {
  // 简化版图表，使用CSS绘制
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
  padding: 20px;
  max-width: 1200px;
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

.rank-table-card {
  margin-bottom: 24px;
}

.chart-card {
  margin-bottom: 24px;
}

.chart-card h3 {
  margin-bottom: 16px;
  color: #333;
}

.chart-container {
  height: 200px;
}

.submit-card h3 {
  margin-bottom: 16px;
  color: #333;
}
</style>