<!-- src/App.vue -->
<template>
  <div id="app">
    <!-- 导航栏 -->
    <navbar></navbar>

    <!-- 路由内容显示区域 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'; // 导入导航栏组件

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>
