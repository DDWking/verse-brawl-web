<template>
  <div class="character-page">
    <div class="page-header">
      <div class="header-icon">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="26" fill="#0f3460"/>
          <path d="M20 20 L40 30 L20 40 Z" fill="#00d4ff"/>
          <circle cx="30" cy="30" r="8" fill="#ff6b35"/>
        </svg>
      </div>
      <h1>角色技能</h1>
      <p>选择你的战斗角色，释放独特技能</p>
    </div>

    <div class="characters-grid">
      <div class="character-card" v-for="item in characters" :key="item.character.id">
        <div class="character-header">
          <div class="avatar-wrapper">
            <div class="avatar-placeholder">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="38" fill="#16213e"/>
                <circle cx="40" cy="40" r="30" fill="#0f3460"/>
                <circle cx="40" cy="40" r="20" fill="#00d4ff" opacity="0.3"/>
                <polygon points="40,25 50,35 50,45 40,55 30,45 30,35" fill="#ff6b35"/>
              </svg>
            </div>
          </div>
          <div class="character-info">
            <h2>{{ item.character.name }}</h2>
            <p class="intro">{{ item.character.intro }}</p>
            <div class="pros-cons">
              <span class="pro-tag">优势: {{ item.character.advantage }}</span>
              <span class="con-tag">劣势: {{ item.character.disadvantage }}</span>
            </div>
          </div>
        </div>

        <div class="skills-section">
          <h3>技能列表</h3>
          <div class="skills-grid">
            <div class="skill-item" v-for="skill in item.skills" :key="skill.id">
              <div class="skill-icon-placeholder">
                <svg width="48" height="48" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="22" fill="#16213e"/>
                  <circle cx="24" cy="24" r="16" fill="#0f3460"/>
                  <polygon points="24,12 30,18 30,30 24,36 18,30 18,18" fill="#00d4ff"/>
                </svg>
              </div>
              <h4>{{ skill.name }}</h4>
              <p>{{ skill.description }}</p>
            </div>
          </div>
        </div>
      </div>
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
  padding-top: 70px;
  max-width: 1200px;
  margin: 0 auto;
  background: #1a1a2e;
}

.page-header {
  text-align: center;
  padding: 80px 40px 60px;
}

.header-icon {
  margin-bottom: 20px;
}

.page-header h1 {
  font-size: 48px;
  color: #ffffff;
  margin-bottom: 16px;
}

.page-header p {
  font-size: 20px;
  color: #a0a0a0;
}

.characters-grid {
  display: grid;
  gap: 30px;
  padding: 40px;
}

.character-card {
  background: #16213e;
  border: 2px solid #0f3460;
  border-radius: 16px;
  padding: 30px;
  transition: all 0.3s ease;
}

.character-card:hover {
  border-color: #ff6b35;
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(255, 107, 53, 0.3);
}

.character-header {
  display: flex;
  align-items: center;
  gap: 30px;
  padding-bottom: 30px;
  border-bottom: 2px solid #0f3460;
}

.avatar-wrapper {
  position: relative;
}

.avatar-placeholder {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid #00d4ff;
  overflow: hidden;
}

.character-info {
  flex: 1;
}

.character-info h2 {
  font-size: 28px;
  color: #ffffff;
  margin-bottom: 12px;
}

.intro {
  color: #a0a0a0;
  font-size: 16px;
  margin-bottom: 16px;
  line-height: 1.6;
}

.pros-cons {
  display: flex;
  gap: 12px;
}

.pro-tag {
  background: rgba(0, 212, 255, 0.2);
  color: #00d4ff;
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid #00d4ff;
  font-size: 14px;
  font-weight: bold;
}

.con-tag {
  background: rgba(255, 107, 53, 0.2);
  color: #ff6b35;
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid #ff6b35;
  font-size: 14px;
  font-weight: bold;
}

.skills-section {
  margin-top: 30px;
}

.skills-section h3 {
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.skills-section h3::before {
  content: '';
  width: 24px;
  height: 2px;
  background: #00d4ff;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.skill-item {
  background: #1a1a2e;
  border: 2px solid #0f3460;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.skill-item:hover {
  border-color: #00d4ff;
  transform: translateY(-3px);
}

.skill-icon-placeholder {
  width: 48px;
  height: 48px;
  margin: 0 auto 12px;
}

.skill-item h4 {
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 8px;
}

.skill-item p {
  font-size: 14px;
  color: #a0a0a0;
  line-height: 1.5;
}

@media (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .character-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>