<template>
  <div id="app">
    <!-- 路由跳转 -->
    <el-menu mode="horizontal" default-active="/">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/game">游戏介绍</el-menu-item>
      <el-menu-item index="/rank">排行榜</el-menu-item>
      <el-menu-item index="/notice">公告</el-menu-item>
      <el-menu-item index="/about">关于作者</el-menu-item>
    </el-menu>

    <!-- 页面展示区域 -->
    <router-view />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

// 菜单跳转
const handleSelect = (key) => {
  router.push(key)
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app{
  width: 100%;
  height: 100vh;
}

.el-menu{
  margin-bottom: 20px;
}
</style>