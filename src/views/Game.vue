<template>
  <div class="game-page">
    <div class="game-header">
      <h1>{{ gameInfo?.gameName || 'Verse Brawl' }}</h1>
      <p class="slogan">{{ gameInfo?.slogan }}</p>
    </div>

    <el-row :gutter="40" class="content-row">
      <el-col :span="12">
        <el-card class="info-card">
          <h2>游戏背景</h2>
          <p>{{ gameInfo?.background }}</p>
        </el-card>

        <el-card class="info-card">
          <h2>玩法说明</h2>
          <pre>{{ gameInfo?.gameplay }}</pre>
        </el-card>

        <el-card class="info-card">
          <h2>操作说明</h2>
          <pre>{{ gameInfo?.operation }}</pre>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card class="info-card feature-card">
          <h2>游戏特色</h2>
          <pre>{{ gameInfo?.feature }}</pre>
        </el-card>

        <el-card class="info-card">
          <h2>服务器状态</h2>
          <el-tag type="success" size="large">在线运行中</el-tag>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getGameInfo } from '../utils/api'

const gameInfo = ref(null)

onMounted(async () => {
  try {
    const res = await getGameInfo()
    gameInfo.value = res.data
  } catch (e) {
    console.error(e)
  }
})
</script>

<style scoped>
.game-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.game-header {
  text-align: center;
  padding: 40px 0;
}

.game-header h1 {
  font-size: 36px;
  color: #333;
}

.slogan {
  font-size: 20px;
  color: #666;
  margin-top: 8px;
}

.content-row {
  margin-top: 20px;
}

.info-card {
  margin-bottom: 20px;
}

.info-card h2 {
  margin-bottom: 16px;
  color: #333;
  border-bottom: 2px solid #409eff;
  padding-bottom: 8px;
}

.info-card p, .info-card pre {
  color: #666;
  line-height: 1.8;
  white-space: pre-wrap;
}

.feature-card {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}
</style>