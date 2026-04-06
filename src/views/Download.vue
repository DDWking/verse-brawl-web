<template>
  <div class="download-page">
    <div class="page-header">
      <h1>下载试玩</h1>
      <p>开始你的战斗之旅</p>
    </div>

    <el-row :gutter="24">
      <el-col :span="12">
        <el-card class="download-card">
          <h2>下载游戏</h2>
          <el-button type="primary" size="large" @click="handleDownload">
            Windows 版下载
          </el-button>
          <p class="download-url">{{ gameInfo?.downloadUrl || '暂无下载链接' }}</p>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card class="play-card">
          <h2>在线试玩</h2>
          <el-button size="large" @click="handlePlay">
            开始试玩
          </el-button>
          <p class="play-url">{{ gameInfo?.playUrl || '暂无试玩链接' }}</p>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="24" style="margin-top: 24px">
      <el-col :span="12">
        <el-card class="info-card">
          <h2>安装说明</h2>
          <pre>{{ gameInfo?.installNote }}</pre>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card class="info-card">
          <h2>常见问题</h2>
          <pre>{{ gameInfo?.faq }}</pre>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getGameInfo } from '../utils/api'

const gameInfo = ref(null)

const handleDownload = () => {
  if (gameInfo.value?.downloadUrl) {
    window.open(gameInfo.value.downloadUrl, '_blank')
  }
}

const handlePlay = () => {
  if (gameInfo.value?.playUrl) {
    window.open(gameInfo.value.playUrl, '_blank')
  }
}

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
.download-page {
  padding: 20px;
  max-width: 1000px;
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

.download-card, .play-card {
  text-align: center;
  padding: 40px 20px;
}

.download-card h2, .play-card h2 {
  margin-bottom: 24px;
  color: #333;
}

.download-url, .play-url {
  margin-top: 16px;
  color: #999;
  font-size: 12px;
}

.info-card {
  margin-top: 24px;
}

.info-card h2 {
  margin-bottom: 16px;
  color: #333;
  border-bottom: 2px solid #409eff;
  padding-bottom: 8px;
}

.info-card pre {
  white-space: pre-wrap;
  line-height: 1.8;
  color: #666;
}
</style>