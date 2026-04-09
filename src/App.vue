<template>
  <div id="app">
    <nav class="game-navbar">
      <div class="nav-brand">
        <div class="brand-icon">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 2L4 10V22L16 30L28 22V10L16 2Z" fill="#00d4ff" opacity="0.3"/>
            <path d="M16 6L8 12V20L16 26L24 20V12L16 6Z" fill="#ff6b35"/>
            <circle cx="16" cy="16" r="4" fill="#ffffff"/>
          </svg>
        </div>
        <span class="brand-name">Verse Brawl</span>
      </div>
      
      <div class="nav-menu">
        <router-link to="/" class="nav-item" :class="{ active: $route.path === '/' }">首页</router-link>
        <router-link to="/game" class="nav-item" :class="{ active: $route.path === '/game' }">游戏介绍</router-link>
        <router-link to="/character" class="nav-item" :class="{ active: $route.path === '/character' }">角色技能</router-link>
        <router-link to="/rank" class="nav-item" :class="{ active: $route.path === '/rank' }">排行榜</router-link>
        <router-link to="/notice" class="nav-item" :class="{ active: $route.path === '/notice' }">公告</router-link>
        <router-link to="/about" class="nav-item" :class="{ active: $route.path === '/about' }">关于</router-link>
      </div>
      
      <div class="nav-actions">
        <router-link to="/download" class="download-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          <span>立即下载</span>
        </router-link>
      </div>
    </nav>
    
    <router-view />
  </div>
</template>

<script setup>
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
}

.game-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background: rgba(15, 52, 96, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 2px solid #00d4ff;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-icon {
  width: 40px;
  height: 40px;
}

.brand-name {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 1px;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-item {
  color: #a0a0a0;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 8px 16px;
  border-radius: 4px;
}

.nav-item:hover {
  color: #00d4ff;
  background: rgba(0, 212, 255, 0.1);
}

.nav-item.active {
  color: #ff6b35;
  background: rgba(255, 107, 53, 0.1);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.download-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  background: linear-gradient(135deg, #ff6b35, #ff8c42);
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 6px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4);
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(255, 107, 53, 0.6);
  background: linear-gradient(135deg, #ff8c42, #ff6b35);
}

.download-btn svg {
  width: 20px;
  height: 20px;
  stroke: #ffffff;
}

@media (max-width: 768px) {
  .game-navbar {
    padding: 0 20px;
  }
  
  .nav-menu {
    gap: 16px;
  }
  
  .nav-item {
    font-size: 14px;
    padding: 6px 12px;
  }
}
</style>