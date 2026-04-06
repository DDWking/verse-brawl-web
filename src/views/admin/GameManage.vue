<template>
  <div class="game-manage">
    <h1>游戏信息管理</h1>

    <el-form :model="gameInfo" label-width="120px" v-if="gameInfo">
      <el-form-item label="游戏名称">
        <el-input v-model="gameInfo.gameName" />
      </el-form-item>
      <el-form-item label="宣传语">
        <el-input v-model="gameInfo.slogan" />
      </el-form-item>
      <el-form-item label="游戏背景">
        <el-input v-model="gameInfo.background" type="textarea" :rows="3" />
      </el-form-item>
      <el-form-item label="玩法说明">
        <el-input v-model="gameInfo.gameplay" type="textarea" :rows="3" />
      </el-form-item>
      <el-form-item label="操作说明">
        <el-input v-model="gameInfo.operation" type="textarea" :rows="3" />
      </el-form-item>
      <el-form-item label="游戏特色">
        <el-input v-model="gameInfo.feature" type="textarea" :rows="3" />
      </el-form-item>
      <el-form-item label="下载链接">
        <el-input v-model="gameInfo.downloadUrl" />
      </el-form-item>
      <el-form-item label="试玩链接">
        <el-input v-model="gameInfo.playUrl" />
      </el-form-item>
      <el-form-item label="安装说明">
        <el-input v-model="gameInfo.installNote" type="textarea" :rows="3" />
      </el-form-item>
      <el-form-item label="常见问题">
        <el-input v-model="gameInfo.faq" type="textarea" :rows="3" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleUpdate">保存修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getBackGameInfo, updateGameInfo } from '../../utils/api'
import { ElMessage } from 'element-plus'

const gameInfo = ref(null)

const loadGameInfo = async () => {
  try {
    const res = await getBackGameInfo()
    gameInfo.value = res.data
  } catch (e) {
    console.error(e)
  }
}

const handleUpdate = async () => {
  try {
    await updateGameInfo(gameInfo.value)
    ElMessage.success('更新成功')
  } catch (e) {
    ElMessage.error('更新失败')
  }
}

onMounted(() => loadGameInfo())
</script>

<style scoped>
.game-manage h1 {
  margin-bottom: 24px;
  color: #333;
}
</style>