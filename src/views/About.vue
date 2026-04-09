<template>
  <div class="about-page">
    <div class="page-header">
      <div class="header-icon">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="26" fill="#0f3460"/>
          <circle cx="30" cy="24" r="10" fill="#00d4ff"/>
          <path d="M20 35 Q30 42 40 35" fill="#ff6b35"/>
        </svg>
      </div>
      <h1>关于作者</h1>
    </div>

    <div class="about-grid">
      <div class="about-card">
        <div class="card-header">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#16213e"/>
            <circle cx="12" cy="10" r="4" fill="#00d4ff"/>
            <path d="M6 16 Q12 20 18 16" fill="none" stroke="#ff6b35" stroke-width="2"/>
          </svg>
          <h2>个人简介</h2>
        </div>
        <p>网络工程专业，全栈开发爱好者，独立开发 Unity 2D 对战游戏，专注前后端分离与云服务部署。</p>
      </div>

      <div class="about-card">
        <div class="card-header">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <polygon points="12,2 15,8 21,8 17,12 18,18 12,15 6,18 7,12 3,8 9,8" fill="#ff6b35"/>
          </svg>
          <h2>技术栈</h2>
        </div>
        <div class="tech-grid">
          <span class="tech-tag" v-for="tech in techs" :key="tech">{{ tech }}</span>
        </div>
      </div>

      <div class="about-card">
        <div class="card-header">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#16213e"/>
            <path d="M8 8 L16 12 L8 16 Z" fill="#00d4ff"/>
          </svg>
          <h2>社交链接</h2>
        </div>
        <div class="links">
          <a href="https://github.com" target="_blank" class="link-item github">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <path d="M16 4C9.4 4 4 9.4 4 16c0 5.6 3.7 10.4 8.8 12.1.6.1.8-.3.8-.6v-2.1c-3.6.8-4.3-1.7-4.3-1.7-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.7-2.8-.3-5.8-1.4-5.8-6.2 0-1.4.5-2.5 1.3-3.4-.1-.4-.6-1.7.1-3.5 0 0 1.1-.3 3.5 1.3 1-.3 2.1-.4 3.2-.4s2.2.1 3.2.4c2.4-1.7 3.5-1.3 3.5-1.3.7 1.8.2 3.1.1 3.5.8.9 1.3 2 1.3 3.4 0 4.8-3 5.9-5.8 6.2.5.4.9 1.2.9 2.4v3.5c0 .3.2.7.8.6C24.3 26.4 28 21.6 28 16c0-6.6-5.4-12-12-12z" fill="#ffffff"/>
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <div class="about-card">
        <div class="card-header">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <rect x="4" y="4" width="16" height="16" fill="#16213e" rx="2"/>
            <path d="M8 12 L16 12 M12 8 L12 16" stroke="#00d4ff" stroke-width="2"/>
          </svg>
          <h2>项目说明</h2>
        </div>
        <p>本项目为个人独立开发，旨在展示全栈开发能力和游戏开发成果。</p>
        <p>后续将继续更新游戏内容，添加新角色、新技能、新玩法。</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const techs = ['Unity', 'SpringBoot', 'Vue3', 'MySQL', 'MyBatis-Plus', 'Docker', 'Nginx', 'GitHub Actions']
</script>

<style scoped>
.about-page {
  padding-top: 70px;
  max-width: 800px;
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

.about-grid {
  display: grid;
  gap: 30px;
  padding: 40px;
}

.about-card {
  background: #16213e;
  border: 2px solid #0f3460;
  border-radius: 12px;
  padding: 30px;
  transition: all 0.3s ease;
}

.about-card:hover {
  border-color: #00d4ff;
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.card-header h2 {
  font-size: 24px;
  color: #ffffff;
  margin: 0;
}

.about-card p {
  color: #a0a0a0;
  line-height: 1.8;
  font-size: 16px;
  margin-bottom: 12px;
}

.tech-grid {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.tech-tag {
  padding: 8px 16px;
  background: rgba(0, 212, 255, 0.2);
  color: #00d4ff;
  border: 1px solid #00d4ff;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: rgba(255, 107, 53, 0.2);
  color: #ff6b35;
  border-color: #ff6b35;
}

.links {
  display: flex;
  gap: 16px;
}

.link-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 24px;
  background: rgba(0, 212, 255, 0.2);
  color: #00d4ff;
  border: 2px solid #00d4ff;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.link-item:hover {
  background: rgba(255, 107, 53, 0.2);
  color: #ff6b35;
  border-color: #ff6b35;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
}

.link-item span {
  font-size: 16px;
  font-weight: bold;
}
</style>