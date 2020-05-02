import Vue from 'vue';
import VueRouter from 'vue-router';
import AppMain from '@/views/AppMain.vue';
import AppDetailStack from '@/views/AppDetailStack.vue';
import AppDetailCompany from '@/views/AppDetailCompany.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppMain,
  },
  {
    path: '/stack',
    name: 'Stack',
    component: AppDetailStack,
  },
  {
    path: '/company',
    name: 'Company',
    component: AppDetailCompany,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
