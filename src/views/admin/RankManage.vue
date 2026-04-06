<template>
  <div class="rank-manage">
    <h1>排行榜管理</h1>

    <el-table :data="ranks" stripe>
      <el-table-column prop="id" label="ID" width="60" />
      <el-table-column prop="playerName" label="玩家昵称" />
      <el-table-column prop="score" label="分数" sortable />
      <el-table-column prop="playTime" label="游玩时长" />
      <el-table-column prop="message" label="寄语" />
      <el-table-column prop="messageStatus" label="寄语状态" width="100">
        <template #default="{ row }">
          <el-tag :type="row.messageStatus === 1 ? 'success' : row.messageStatus === 2 ? 'danger' : 'info'">
            {{ row.messageStatus === 1 ? '已通过' : row.messageStatus === 2 ? '已拒绝' : '待审核' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="提交时间" width="120">
        <template #default="{ row }">
          {{ formatTime(row.createTime) }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template #default="{ row }">
          <el-button type="success" size="small" @click="handleAudit(row.id, 1)" v-if="row.messageStatus !== 1">通过</el-button>
          <el-button type="warning" size="small" @click="handleAudit(row.id, 2)" v-if="row.messageStatus !== 2">拒绝</el-button>
          <el-button type="danger" size="small" @click="handleDelete(row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getBackRankList, auditMessage, deleteRank } from '../../utils/api'
import { ElMessage, ElMessageBox } from 'element-plus'

const ranks = ref([])

const formatTime = (time) => time ? new Date(time).toLocaleDateString('zh-CN') : ''

const loadRanks = async () => {
  try {
    const res = await getBackRankList()
    ranks.value = res.data
  } catch (e) {
    console.error(e)
  }
}

const handleAudit = async (id, status) => {
  try {
    await auditMessage(id, status)
    ElMessage.success('审核完成')
    loadRanks()
  } catch (e) {
    ElMessage.error('审核失败')
  }
}

const handleDelete = async (id) => {
  try {
    await ElMessageBox.confirm('确定删除该记录?', '提示')
    await deleteRank(id)
    ElMessage.success('删除成功')
    loadRanks()
  } catch (e) {
    if (e !== 'cancel') ElMessage.error('删除失败')
  }
}

onMounted(() => loadRanks())
</script>

<style scoped>
.rank-manage h1 {
  margin-bottom: 24px;
  color: #333;
}
</style>