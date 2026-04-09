<template>
  <div class="skills container">
    <header class="skills-header">
      <h1>角色技能</h1>
      <p>了解每个角色的特性，选择你的本命英雄</p>
    </header>

    <div class="skills-layout">
      <div class="characters-list">
        <button
          v-for="item in characters"
          :key="item.character.id"
          :class="['char-btn', { active: activeChar?.character.id === item.character.id }]"
          @click="activeChar = item"
        >
          <div class="char-avatar"></div>
          <div class="char-info">
            <div class="char-name">{{ item.character.name }}</div>
            <div class="char-title">{{ item.character.intro?.slice(0, 10) }}...</div>
          </div>
        </button>
      </div>

      <div class="char-detail" v-if="activeChar">
        <div class="detail-header">
          <div class="detail-avatar"></div>
          <div class="detail-info">
            <h2 class="detail-name">{{ activeChar.character.name }}</h2>
            <p class="detail-intro">{{ activeChar.character.intro }}</p>
            <div class="detail-stats">
              <div class="stat-item" v-for="stat in stats" :key="stat.label">
                <div class="stat-header">
                  <span class="stat-label">{{ stat.label }}</span>
                  <span class="stat-value">{{ getStatValue(stat.key) }}</span>
                </div>
                <div class="stat-bar">
                  <div 
                    class="stat-fill" 
                    :class="stat.color"
                    :style="{ width: getStatValue(stat.key) + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="skills-section">
          <h3 class="skills-title">核心技能</h3>
          <div class="skills-grid">
            <div class="skill-card" v-for="skill in activeChar.skills" :key="skill.id">
              <div class="skill-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              <h4 class="skill-name">{{ skill.name }}</h4>
              <p class="skill-desc">{{ skill.description }}</p>
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
const activeChar = ref(null)

const stats = [
  { label: '生存能力', key: 'hp', color: 'stat-green' },
  { label: '输出能力', key: 'atk', color: 'stat-red' },
  { label: '机动性', key: 'spd', color: 'stat-blue' },
  { label: '上手难度', key: 'diff', color: 'stat-purple' }
]

const getStatValue = (key) => {
  return Math.floor(Math.random() * 60) + 40
}

onMounted(async () => {
  try {
    const res = await getAllWithSkills()
    characters.value = res.data
    if (res.data.length > 0) {
      activeChar.value = res.data[0]
    }
  } catch (e) {
    console.error(e)
  }
})
</script>

<style scoped>
.skills {
  padding: 3rem 1rem;
  max-width: 72rem;
  margin: 0 auto;
}

.skills-header {
  text-align: center;
  margin-bottom: 3rem;
}

.skills-header h1 {
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
}

.skills-header p {
  font-size: 1.25rem;
  color: var(--color-muted-foreground);
}

.skills-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .skills-layout {
    grid-template-columns: 12rem 1fr;
  }
}

.characters-list {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 1rem;
}

@media (min-width: 1024px) {
  .characters-list {
    flex-direction: column;
    overflow-x: visible;
    padding-bottom: 0;
  }
}

.char-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 200px;
  text-align: left;
}

@media (min-width: 1024px) {
  .char-btn {
    min-width: 0;
  }
}

.char-btn:hover {
  border-color: rgba(255, 85, 0, 0.5);
}

.char-btn.active {
  background: rgba(255, 85, 0, 0.1);
  border-color: var(--color-primary);
}

.char-avatar {
  width: 3rem;
  height: 3rem;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
}

.char-name {
  font-weight: 700;
  color: var(--color-foreground);
}

.char-title {
  font-size: 0.75rem;
  color: var(--color-muted-foreground);
}

.char-detail {
  background: var(--color-card);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-2xl);
  padding: 1.5rem;
}

@media (min-width: 768px) {
  .char-detail {
    padding: 2rem;
  }
}

.detail-header {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .detail-header {
    flex-direction: row;
    align-items: center;
  }
}

.detail-avatar {
  width: 8rem;
  height: 8rem;
  border-radius: var(--radius-2xl);
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  border: 4px solid var(--color-primary);
  flex-shrink: 0;
}

@media (min-width: 768px) {
  .detail-avatar {
    width: 12rem;
    height: 12rem;
  }
}

.detail-name {
  font-size: 1.875rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
}

.detail-intro {
  color: var(--color-muted-foreground);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.detail-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  max-width: 28rem;
}

.stat-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
  font-size: 0.75rem;
}

.stat-label {
  color: var(--color-muted-foreground);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stat-value {
  font-weight: 700;
  color: var(--color-primary);
  font-family: monospace;
}

.stat-bar {
  height: 0.75rem;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 9999px;
  overflow: hidden;
}

.stat-fill {
  height: 100%;
  border-radius: 9999px;
  transition: width 0.3s ease;
}

.stat-green { background: linear-gradient(90deg, #22c55e, #16a34a); }
.stat-red { background: linear-gradient(90deg, #ef4444, #dc2626); }
.stat-blue { background: linear-gradient(90deg, #3b82f6, #2563eb); }
.stat-purple { background: linear-gradient(90deg, #a855f7, #9333ea); }

.skills-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--color-border);
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.skill-card {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: 1.25rem;
  transition: border-color 0.2s ease;
}

.skill-card:hover {
  border-color: rgba(255, 85, 0, 0.5);
}

.skill-icon {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.skill-icon svg {
  padding: 0.5rem;
  background: rgba(255, 85, 0, 0.1);
  border-radius: var(--radius-lg);
  color: var(--color-primary);
}

.skill-name {
  font-size: 1.125rem;
  font-weight: 700;
}

.skill-desc {
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--color-muted-foreground);
}
</style>