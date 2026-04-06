<template>
  <div class="notice-manage">
    <h1>公告管理</h1>

    <div class="toolbar">
      <el-button type="primary" @click="showAddDialog">新增公告</el-button>
    </div>

    <el-table :data="notices" stripe>
      <el-table-column prop="id" label="ID" width="60" />
      <el-table-column prop="title" label="标题" />
      <el-table-column prop="category" label="分类" width="100">
        <template #default="{ row }">
          <el-tag :type="getTagType(row.category)">{{ row.category }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="isTop" label="置顶" width="80">
        <template #default="{ row }">
          <el-tag :type="row.isTop ? 'danger' : 'info'">{{ row.isTop ? '是' : '否' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="发布时间" width="120">
        <template #default="{ row }">
          {{ formatTime(row.createTime) }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template #default="{ row }">
          <el-button type="primary" size="small" @click="showEditDialog(row)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDelete(row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogVisible" :title="isEdit ? '编辑公告' : '新增公告'" width="500px">
      <el-form :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="分类">
          <el-select v-model="form.category">
            <el-option label="版本更新" value="版本更新" />
            <el-option label="活动通知" value="活动通知" />
            <el-option label="维护公告" value="维护公告" />
          </el-select>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="form.content" type="textarea" :rows="5" />
        </el-form-item>
        <el-form-item label="置顶">
          <el-switch v-model="form.isTop" :active-value="1" :inactive-value="0" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getBackNoticeList, addNotice, updateNotice, deleteNotice } from '../../utils/api'
import { ElMessage, ElMessageBox } from 'element-plus'

const notices = ref([])
const dialogVisible = ref(false)
const isEdit = ref(false)
const form = ref({ id: null, title: '', category: '版本更新', content: '', isTop: 0 })

const formatTime = (time) => time ? new Date(time).toLocaleDateString('zh-CN') : ''

const getTagType = (cat) => {
  switch (cat) {
    case '版本更新': return 'success'
    case '维护公告': return 'warning'
    default: return 'primary'
  }
}

const loadNotices = async () => {
  try {
    const res = await getBackNoticeList()
    notices.value = res.data
  } catch (e) {
    console.error(e)
  }
}

const showAddDialog = () => {
  isEdit.value = false
  form.value = { id: null, title: '', category: '版本更新', content: '', isTop: 0 }
  dialogVisible.value = true
}

const showEditDialog = (row) => {
  isEdit.value = true
  form.value = { ...row }
  dialogVisible.value = true
}

const handleSubmit = async () => {
  try {
    if (isEdit.value) {
      await updateNotice(form.value)
      ElMessage.success('更新成功')
    } else {
      await addNotice(form.value)
      ElMessage.success('添加成功')
    }
    dialogVisible.value = false
    loadNotices()
  } catch (e) {
    ElMessage.error('操作失败')
  }
}

const handleDelete = async (id) => {
  try {
    await ElMessageBox.confirm('确定删除该公告?', '提示')
    await deleteNotice(id)
    ElMessage.success('删除成功')
    loadNotices()
  } catch (e) {
    if (e !== 'cancel') ElMessage.error('删除失败')
  }
}

onMounted(() => loadNotices())
</script>

<style scoped>
.notice-manage h1 {
  margin-bottom: 24px;
  color: #333;
}

.toolbar {
  margin-bottom: 16px;
}
</style>