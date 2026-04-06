<template>
  <div class="admin-layout">
    <el-container>
      <el-aside width="200px">
        <el-menu router default-active="/admin">
          <el-menu-item index="/admin">
            <span>后台首页</span>
          </el-menu-item>
          <el-menu-item index="/admin/notice">
            <span>公告管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/rank">
            <span>排行榜管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/game">
            <span>游戏信息</span>
          </el-menu-item>
          <el-menu-item index="/admin/character">
            <span>角色管理</span>
          </el-menu-item>
        </el-menu>
        <div class="logout-section">
          <el-button type="danger" plain @click="handleLogout">退出登录</el-button>
        </div>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '../../stores/user'

const router = useRouter()
const userStore = useUserStore()

const handleLogout = () => {
  userStore.logout()
  router.push('/admin/login')
}
</script>

<style scoped>
.admin-layout {
  min-height: 100vh;
}

.el-aside {
  background: #304156;
}

.el-menu {
  background: #304156;
  color: #fff;
  border-right: none;
}

.el-menu-item {
  color: #bfcbd9;
}

.el-menu-item.is-active {
  background: #409eff;
  color: #fff;
}

.logout-section {
  padding: 20px;
  text-align: center;
}

.el-main {
  background: #f5f5f5;
  padding: 20px;
}
</style>