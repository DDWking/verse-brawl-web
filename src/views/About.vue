<template>
  <div class="about container">
    <header class="about-header">
      <h1>关于作者</h1>
      <p>独立开发者，热爱游戏与代码</p>
    </header>

    <div class="about-layout">
      <div class="profile-card">
        <div class="profile-avatar"></div>
        <h2 class="profile-name">Alex Dev</h2>
        <p class="profile-title">全栈开发 / 独立游戏制作人</p>
        <p class="profile-desc">
          网络工程专业，全栈开发爱好者，专注前后端分离与云服务部署。
        </p>
        <div class="profile-links">
          <a href="https://github.com" target="_blank" class="icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
          <a href="#" class="icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
          <a href="#" class="icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="details-column">
        <section class="detail-card">
          <h3>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
            技术栈展示
          </h3>
          <div class="tech-groups">
            <div class="tech-group">
              <h4>游戏端 (Client)</h4>
              <div class="tech-tags">
                <span class="tech-tag tag-primary" v-for="tech in clientTechs" :key="tech">{{ tech }}</span>
              </div>
            </div>
            <div class="tech-group">
              <h4>官网前端 (Frontend)</h4>
              <div class="tech-tags">
                <span class="tech-tag tag-accent" v-for="tech in frontendTechs" :key="tech">{{ tech }}</span>
              </div>
            </div>
            <div class="tech-group">
              <h4>服务端 (Backend)</h4>
              <div class="tech-tags">
                <span class="tech-tag tag-green" v-for="tech in backendTechs" :key="tech">{{ tech }}</span>
              </div>
            </div>
          </div>
        </section>

        <section class="detail-card">
          <h3>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
              <line x1="6" y1="6" x2="6.01" y2="6"/>
              <line x1="6" y1="18" x2="6.01" y2="18"/>
            </svg>
            项目说明
          </h3>
          <div class="project-desc">
            <p><strong>开发初衷：</strong> VerseBrawl 是我作为独立开发者尝试的第一个完整的联机对战游戏项目。旨在通过实践掌握 Unity 联机开发以及全栈 Web 技术的整合。</p>
            <p><strong>官网目的：</strong> 本网站主要用于展示游戏特色、提供下载入口，并作为玩家查看排行榜和最新公告的枢纽。同时，后台管理系统方便我对游戏数据进行简单的维护。</p>
            <p><strong>后续计划：</strong></p>
            <ul>
              <li>完善更多角色和技能设计。</li>
              <li>增加好友系统和组队匹配功能。</li>
              <li>优化 WebGL 端的性能表现。</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
const clientTechs = ['Unity 2022', 'C#', 'Photon PUN 2', 'DOTween']
const frontendTechs = ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vite', 'Pinia']
const backendTechs = ['Spring Boot', 'MySQL', 'Redis', 'Docker', 'Nginx']
</script>

<style scoped>
.about {
  padding: 3rem 1rem;
  max-width: 64rem;
  margin: 0 auto;
}

.about-header {
  text-align: center;
  margin-bottom: 3rem;
}

.about-header h1 {
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
}

.about-header p {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-muted-foreground);
}

.about-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .about-layout {
    grid-template-columns: 16rem 1fr;
  }
}

.profile-card {
  background: var(--color-card);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-3xl);
  padding: 1.5rem;
  text-align: center;
}

@media (min-width: 768px) {
  .profile-card {
    position: sticky;
    top: 6rem;
  }
}

.profile-avatar {
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  border: 4px solid var(--color-primary);
  margin: 0 auto 1rem;
}

.profile-name {
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 0.25rem;
}

.profile-title {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.profile-desc {
  font-size: 0.875rem;
  color: var(--color-muted-foreground);
  margin-bottom: 1.5rem;
}

.profile-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.details-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.detail-card {
  background: var(--color-card);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-3xl);
  padding: 2rem;
}

.detail-card h3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
}

.tech-groups {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.tech-group h4 {
  font-size: 0.75rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-muted-foreground);
  margin-bottom: 0.75rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: var(--radius-lg);
  border: 1px solid;
}

.tag-primary {
  background: rgba(255, 85, 0, 0.1);
  color: var(--color-primary);
  border-color: rgba(255, 85, 0, 0.2);
}

.tag-accent {
  background: rgba(255, 170, 0, 0.1);
  color: var(--color-accent);
  border-color: rgba(255, 170, 0, 0.2);
}

.tag-green {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border-color: rgba(34, 197, 94, 0.2);
}

.project-desc {
  color: var(--color-muted-foreground);
  line-height: 1.7;
  font-weight: 500;
}

.project-desc p {
  margin-bottom: 1rem;
}

.project-desc ul {
  list-style: disc;
  padding-left: 1.5rem;
}

.project-desc li {
  margin-bottom: 0.5rem;
}
</style>