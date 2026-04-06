<template>
  <div class="about-page">
    <div class="page-header">
      <h1>关于作者</h1>
    </div>

    <el-card class="about-card">
      <h2>个人简介</h2>
      <p>网络工程专业，全栈开发爱好者，独立开发 Unity 2D 对战游戏，专注前后端分离与云服务部署。</p>
    </el-card>

    <el-card class="about-card">
      <h2>技术栈</h2>
      <el-row :gutter="16">
        <el-col :span="6" v-for="tech in techs" :key="tech">
          <el-tag size="large">{{ tech }}</el-tag>
        </el-col>
      </el-row>
    </el-card>

    <el-card class="about-card">
      <h2>社交链接</h2>
      <div class="links">
        <a href="https://github.com" target="_blank" class="link-item">
          <el-button type="primary" plain>GitHub</el-button>
        </a>
      </div>
    </el-card>

    <el-card class="about-card">
      <h2>项目说明</h2>
      <p>本项目为个人独立开发，旨在展示全栈开发能力和游戏开发成果。</p>
      <p>后续将继续更新游戏内容，添加新角色、新技能、新玩法。</p>
    </el-card>
  </div>
</template>

<script setup>
const techs = ['Unity', 'SpringBoot', 'Vue3', 'MySQL', 'MyBatis-Plus', 'Docker', 'Nginx', 'GitHub Actions']
</script>

<style scoped>
.about-page {
  padding: 20px;
  max-width: 800px;
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

.about-card {
  margin-bottom: 24px;
}

.about-card h2 {
  margin-bottom: 16px;
  color: #333;
  border-bottom: 2px solid #409eff;
  padding-bottom: 8px;
}

.about-card p {
  color: #666;
  line-height: 1.8;
}

.links {
  display: flex;
  gap: 16px;
}

.link-item {
  text-decoration: none;
}
</style>