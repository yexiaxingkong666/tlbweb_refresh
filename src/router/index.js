import { createRouter, createWebHistory } from 'vue-router';

// 导入页面组件
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';

// 配置路由
const routes = [
    {
        path: '/',
        redirect: '/home', 
      },

    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
