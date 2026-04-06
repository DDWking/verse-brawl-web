<template>
  <div class="dashboard">
    <h1>后台首页</h1>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="stat-card">
          <h3>公告总数</h3>
          <p class="stat-num">{{ stats.noticeCount }}</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="stat-card">
          <h3>玩家总数</h3>
          <p class="stat-num">{{ stats.playerCount }}</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="stat-card">
          <h3>角色数量</h3>
          <p class="stat-num">{{ stats.characterCount }}</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="stat-card">
          <h3>服务器状态</h3>
          <el-tag type="success">在线</el-tag>
        </el-card>
      </el-col>
    </el-row>

    <el-card class="quick-links" style="margin-top: 24px">
      <h2>快捷操作</h2>
      <el-row :gutter="16">
        <el-col :span="6">
          <el-button type="primary" @click="$router.push('/admin/notice')">公告管理</el-button>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" @click="$router.push('/admin/rank')">排行榜管理</el-button>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" @click="$router.push('/admin/game')">游戏信息</el-button>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" @click="$router.push('/admin/character')">角色管理</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getBackNoticeList, getBackRankList, getBackCharacterList } from '../../utils/api'

const stats = ref({
  noticeCount: 0,
  playerCount: 0,
  characterCount: 0
})

onMounted(async () => {
  try {
    const [noticeRes, rankRes, charRes] = await Promise.all([
      getBackNoticeList(),
      getBackRankList(),
      getBackCharacterList()
    ])
    stats.value.noticeCount = noticeRes.data?.length || 0
    stats.value.playerCount = rankRes.data?.length || 0
    stats.value.characterCount = charRes.data?.length || 0
  } catch (e) {
    console.error(e)
  }
})
</script>

<style scoped>
.dashboard h1 {
  margin-bottom: 24px;
  color: #333;
}

.stat-card {
  text-align: center;
}

.stat-card h3 {
  margin-bottom: 12px;
  color: #666;
}

.stat-num {
  font-size: 32px;
  color: #409eff;
  font-weight: bold;
}

.quick-links h2 {
  margin-bottom: 16px;
  color: #333;
}
</style>