<template>
  <div>
    <!-- Header -->
    <header class="navbar has-shadow is-fixed-top">
      <div class="navbar-brand">
        <a class="navbar-item" href="#home">
          <h1 class="title is-4">悠忆怀挚</h1>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="#home">首页</a>
          <a class="navbar-item" href="#about">关于服主</a>
          <a class="navbar-item" href="#contact">联系我们</a>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section 
     id="home" 
     class="hero is-medium is-primary"
     :style="{ backgroundImage: 'url(/images/background.png)', backgroundSize: 'cover', backgroundPosition: 'center center' }"
    >
     <div class="hero-body">
       <div class="container has-text-centered">
         <h2 class="title is-1" style="color: #f08080;">
           欢迎来到悠忆怀挚服务器
         </h2>
         <p class="subtitle is-3" style="color: #fff;">
            我们是集生电, PVP, PVE, 生存, MC, 游戏, 娱乐于一体的服务器!
          </p>
          <a href="#contact"
            class="button is-large is-link"
            style="background-color: #f08080; opacity: 0.75; transition: all 0.3s ease;">
            立即加入
        </a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="section">
      <div class="container">
        <h2 class="title has-text-centered">服务器特点</h2>
        <div class="columns is-centered">
          <div class="column is-4">
            <div class="box">
              <h3 class="title is-4">使用Leaves服务端</h3>
              <p>Leaves 是一款纯净的服务端, 专为生电设计, LeavesMC 改善了 Minecraft 的生态系统, 提供快速、安全和稳定的软件, 作为最特立独行的组织提供快速迭代和健康支持。</p>
            </div>
          </div>
          <div class="column is-4">
            <div class="box">
              <h3 class="title is-4">拥有各种插件</h3>
              <p>服内安装了各种插件, 例如领地插件、金钱插件、登录插件, 给 Minecraft 添加更多玩法。</p>
            </div>
          </div>
          <div class="column is-4">
            <div class="box">
              <h3 class="title is-4">活跃社团</h3>
              <p>服内有许多社团, 你可以加入他们, 参与活动, 瓜分金币, 借用社团的红石机器。甚至你也可以成立一个社团。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer has-background-dark has-text-white-ter">
      <div class="content has-text-centered">
        <p>Copyright &copy; 2020-2025 qwq1141046, yexiaxingkong233, hrufh_kjr | All Rights Reserved.</p>
        <div>
          <!-- 社交媒体按钮，添加间隔 -->
          <a href="https://space.bilibili.com/454891069" class="button is-outlined is-light mr-4">服主B站</a>
          <a href="https://space.bilibili.com/1249337373" class="button is-outlined is-light mr-4">夜下星空B站</a>
          <a href="https://space.bilibili.com/1107594508" class="button is-outlined is-light">去去B站</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
  /* 悬浮时效果 */
  .button.is-large:hover {
    transform: scale(1.1); /* 放大按钮 */
    opacity: 1; /* 增加不透明度 */
  }

  /* 按下时反弹效果 */
  .button.is-large:active {
    transform: scale(0.95); /* 按下时稍微缩小 */
    transition: all 0.1s ease-out; /* 使反弹效果更加自然 */
  }
</style>
