<template>
  <div id="app">
    <el-menu mode="horizontal" router default-active="/">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/game">游戏介绍</el-menu-item>
      <el-menu-item index="/character">角色技能</el-menu-item>
      <el-menu-item index="/rank">排行榜</el-menu-item>
      <el-menu-item index="/notice">公告</el-menu-item>
      <el-menu-item index="/download">下载试玩</el-menu-item>
      <el-menu-item index="/about">关于作者</el-menu-item>
    </el-menu>
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
  background: #f5f5f5;
}

.el-menu {
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>