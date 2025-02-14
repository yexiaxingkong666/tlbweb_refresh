<!-- src/components/Navbar.vue -->
<template>
    <header class="navbar has-shadow is-fixed-top">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/home">
          <h1 class="title is-4">悠忆怀挚</h1>
        </router-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/home">首页</router-link>
          <router-link class="navbar-item" to="/about">关于服主</router-link>
          <router-link class="navbar-item" to="/contact">联系我们</router-link>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  