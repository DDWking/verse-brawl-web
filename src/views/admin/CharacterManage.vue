<template>
  <div class="character-manage">
    <h1>角色管理</h1>

    <div class="toolbar">
      <el-button type="primary" @click="showAddDialog">新增角色</el-button>
    </div>

    <el-table :data="characters" stripe>
      <el-table-column prop="id" label="ID" width="60" />
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="avatar" label="头像链接" />
      <el-table-column prop="intro" label="简介" />
      <el-table-column prop="advantage" label="优势" />
      <el-table-column prop="disadvantage" label="劣势" />
      <el-table-column label="操作" width="250">
        <template #default="{ row }">
          <el-button type="primary" size="small" @click="showEditDialog(row)">编辑</el-button>
          <el-button type="success" size="small" @click="showSkillDialog(row)">技能管理</el-button>
          <el-button type="danger" size="small" @click="handleDelete(row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 角色 Dialog -->
    <el-dialog v-model="dialogVisible" :title="isEdit ? '编辑角色' : '新增角色'" width="400px">
      <el-form :model="form" label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="头像链接">
          <el-input v-model="form.avatar" />
        </el-form-item>
        <el-form-item label="简介">
          <el-input v-model="form.intro" />
        </el-form-item>
        <el-form-item label="优势">
          <el-input v-model="form.advantage" />
        </el-form-item>
        <el-form-item label="劣势">
          <el-input v-model="form.disadvantage" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit">确定</el-button>
      </template>
    </el-dialog>

    <!-- 技能管理 Dialog -->
    <el-dialog v-model="skillDialogVisible" title="技能管理" width="600px">
      <el-button type="primary" size="small" @click="showAddSkillDialog" style="margin-bottom: 16px">新增技能</el-button>
      <el-table :data="skills" stripe size="small">
        <el-table-column prop="id" label="ID" width="60" />
        <el-table-column prop="name" label="名称" />
        <el-table-column prop="icon" label="图标链接" />
        <el-table-column prop="description" label="描述" />
        <el-table-column label="操作" width="120">
          <template #default="{ row }">
            <el-button type="primary" size="small" @click="showEditSkillDialog(row)">编辑</el-button>
            <el-button type="danger" size="small" @click="handleDeleteSkill(row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>

    <!-- 技能 Dialog -->
    <el-dialog v-model="skillFormVisible" :title="isSkillEdit ? '编辑技能' : '新增技能'" width="400px">
      <el-form :model="skillForm" label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="skillForm.name" />
        </el-form-item>
        <el-form-item label="图标链接">
          <el-input v-model="skillForm.icon" />
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="skillForm.description" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="skillFormVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSkillSubmit">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {
  getBackCharacterList, addCharacter, updateCharacter, deleteCharacter,
  getSkills, addSkill, updateSkill, deleteSkill
} from '../../utils/api'
import { ElMessage, ElMessageBox } from 'element-plus'

const characters = ref([])
const skills = ref([])
const dialogVisible = ref(false)
const skillDialogVisible = ref(false)
const skillFormVisible = ref(false)
const isEdit = ref(false)
const isSkillEdit = ref(false)
const currentCharacterId = ref(null)
const form = ref({ id: null, name: '', avatar: '', intro: '', advantage: '', disadvantage: '' })
const skillForm = ref({ id: null, name: '', icon: '', description: '' })

const loadCharacters = async () => {
  try {
    const res = await getBackCharacterList()
    characters.value = res.data
  } catch (e) {
    console.error(e)
  }
}

const showAddDialog = () => {
  isEdit.value = false
  form.value = { id: null, name: '', avatar: '', intro: '', advantage: '', disadvantage: '' }
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
      await updateCharacter(form.value)
      ElMessage.success('更新成功')
    } else {
      await addCharacter(form.value)
      ElMessage.success('添加成功')
    }
    dialogVisible.value = false
    loadCharacters()
  } catch (e) {
    ElMessage.error('操作失败')
  }
}

const handleDelete = async (id) => {
  try {
    await ElMessageBox.confirm('删除角色将同时删除其所有技能，确定删除?', '提示')
    await deleteCharacter(id)
    ElMessage.success('删除成功')
    loadCharacters()
  } catch (e) {
    if (e !== 'cancel') ElMessage.error('删除失败')
  }
}

const showSkillDialog = async (row) => {
  currentCharacterId.value = row.id
  try {
    const res = await getSkills(row.id)
    skills.value = res.data
    skillDialogVisible.value = true
  } catch (e) {
    console.error(e)
  }
}

const showAddSkillDialog = () => {
  isSkillEdit.value = false
  skillForm.value = { id: null, name: '', icon: '', description: '' }
  skillFormVisible.value = true
}

const showEditSkillDialog = (row) => {
  isSkillEdit.value = true
  skillForm.value = { ...row }
  skillFormVisible.value = true
}

const handleSkillSubmit = async () => {
  try {
    if (isSkillEdit.value) {
      await updateSkill(skillForm.value)
      ElMessage.success('更新成功')
    } else {
      await addSkill(currentCharacterId.value, skillForm.value)
      ElMessage.success('添加成功')
    }
    skillFormVisible.value = false
    const res = await getSkills(currentCharacterId.value)
    skills.value = res.data
  } catch (e) {
    ElMessage.error('操作失败')
  }
}

const handleDeleteSkill = async (id) => {
  try {
    await ElMessageBox.confirm('确定删除该技能?', '提示')
    await deleteSkill(id)
    ElMessage.success('删除成功')
    const res = await getSkills(currentCharacterId.value)
    skills.value = res.data
  } catch (e) {
    if (e !== 'cancel') ElMessage.error('删除失败')
  }
}

onMounted(() => loadCharacters())
</script>

<style scoped>
.character-manage h1 {
  margin-bottom: 24px;
  color: #333;
}

.toolbar {
  margin-bottom: 16px;
}
</style>