<template>
  <div class="character-page">
    <div class="page-header">
      <h1>角色技能</h1>
      <p>选择你的战斗角色，释放独特技能</p>
    </div>

    <div class="characters-grid">
      <el-card class="character-card" v-for="item in characters" :key="item.character.id">
        <div class="character-info">
          <img :src="item.character.avatar || '/images/default.png'" alt="avatar" class="avatar" />
          <h2>{{ item.character.name }}</h2>
          <p class="intro">{{ item.character.intro }}</p>
          <div class="pros-cons">
            <el-tag type="success">优势: {{ item.character.advantage }}</el-tag>
            <el-tag type="danger">劣势: {{ item.character.disadvantage }}</el-tag>
          </div>
        </div>

        <div class="skills-section">
          <h3>技能列表</h3>
          <el-row :gutter="12">
            <el-col :span="6" v-for="skill in item.skills" :key="skill.id">
              <div class="skill-item">
                <img :src="skill.icon || '/images/skill-default.png'" alt="skill" class="skill-icon" />
                <h4>{{ skill.name }}</h4>
                <p>{{ skill.description }}</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAllWithSkills } from '../utils/api'

const characters = ref([])

onMounted(async () => {
  try {
    const res = await getAllWithSkills()
    characters.value = res.data
  } catch (e) {
    console.error(e)
  }
})
</script>

<style scoped>
.character-page {
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

.page-header p {
  color: #666;
  margin-top: 8px;
}

.characters-grid {
  display: grid;
  gap: 24px;
}

.character-card {
  overflow: hidden;
}

.character-info {
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  background: #f0f0f0;
}

.character-info h2 {
  font-size: 24px;
  color: #333;
}

.intro {
  color: #666;
  margin: 8px 0;
}

.pros-cons {
  display: flex;
  gap: 8px;
}

.skills-section {
  margin-top: 20px;
}

.skills-section h3 {
  margin-bottom: 16px;
  color: #333;
}

.skill-item {
  text-align: center;
  padding: 12px;
  background: #f5f7fa;
  border-radius: 8px;
}

.skill-icon {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: #e0e0e0;
  margin-bottom: 8px;
}

.skill-item h4 {
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
}

.skill-item p {
  font-size: 12px;
  color: #666;
  line-height: 1.4;
}
</style>