<template>
  <div id="app">
    <header class="header">
      <div class="header-inner">
        <router-link to="/" class="brand">
          <svg class="brand-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="6" width="20" height="12" rx="2"/>
            <circle cx="8" cy="12" r="2"/>
            <circle cx="16" cy="12" r="2"/>
          </svg>
          <span class="brand-text">VerseBrawl</span>
        </router-link>

        <nav class="nav-desktop">
          <router-link 
            v-for="item in navItems" 
            :key="item.path" 
            :to="item.path"
            :class="['nav-link', { active: $route.path === item.path }]"
          >
            {{ item.name }}
          </router-link>
        </nav>

        <button class="mobile-menu-btn" @click="mobileMenuOpen = !mobileMenuOpen">
          <svg v-if="!mobileMenuOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      <nav v-if="mobileMenuOpen" class="nav-mobile">
        <router-link 
          v-for="item in navItems" 
          :key="item.path" 
          :to="item.path"
          :class="['nav-link-mobile', { active: $route.path === item.path }]"
          @click="mobileMenuOpen = false"
        >
          {{ item.name }}
        </router-link>
      </nav>
    </header>

    <main class="main">
      <router-view />
    </main>

    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-info">
          <p class="footer-copyright">&copy; {{ currentYear }} VerseBrawl. All rights reserved.</p>
          <p class="footer-tagline">2D 像素对战，指尖巅峰对决</p>
        </div>
        <div class="footer-status">
          <a href="https://github.com" target="_blank" class="icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
          <div class="server-status">
            <span class="status-dot"></span>
            <span class="status-text">服务器在线</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const mobileMenuOpen = ref(false)

const navItems = [
  { name: '首页', path: '/' },
  { name: '游戏介绍', path: '/game' },
  { name: '角色技能', path: '/character' },
  { name: '排行榜', path: '/rank' },
  { name: '公告', path: '/notice' },
  { name: '下载/试玩', path: '/download' },
  { name: '关于作者', path: '/about' }
]

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  border-bottom: 4px solid var(--color-border);
  background: rgba(26, 17, 14, 0.9);
  backdrop-filter: blur(12px);
}

.header-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-primary);
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.brand:hover {
  color: var(--color-primary);
}

.brand-icon {
  width: 2rem;
  height: 2rem;
}

.nav-desktop {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  font-size: 0.875rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-muted-foreground);
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link.active {
  color: var(--color-primary);
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: var(--color-muted-foreground);
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-menu-btn:hover {
  color: var(--color-foreground);
}

.nav-mobile {
  display: none;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-top: 4px solid var(--color-border);
  background: var(--color-background);
}

.nav-link-mobile {
  font-size: 1rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-muted-foreground);
  transition: color 0.2s ease;
}

.nav-link-mobile:hover,
.nav-link-mobile.active {
  color: var(--color-primary);
}

.main {
  min-height: calc(100vh - 5rem - 200px);
}

.footer {
  border-top: 4px solid var(--color-border);
  background: var(--color-card);
  padding: 3rem 0;
  margin-top: 4rem;
}

.footer-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.footer-info {
  text-align: left;
}

.footer-copyright {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-muted-foreground);
}

.footer-tagline {
  margin-top: 0.5rem;
  color: var(--color-primary);
  font-weight: 700;
}

.footer-status {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.server-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-muted-foreground);
}

.status-dot {
  position: relative;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: var(--color-accent);
}

.status-dot::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--color-accent);
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }
  
  .mobile-menu-btn {
    display: block;
  }
  
  .nav-mobile {
    display: flex;
  }
  
  .footer-inner {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-info {
    text-align: center;
  }
}
</style>