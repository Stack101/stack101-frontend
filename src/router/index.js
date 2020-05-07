import Vue from 'vue';
import VueRouter from 'vue-router';
import AppMain from '@/views/AppMain.vue';
import AppDetailStack from '@/views/AppDetailStack.vue';
import AppDetailCompany from '@/views/AppDetailCompany.vue';
import AppBookmark from '@/views/AppBookmark.vue';
import AppSearch from '@/views/AppSearch.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppMain,
  },
  {
    path: '/stack/:id',
    name: 'Stack',
    component: AppDetailStack,
  },
  {
    path: '/company/:id',
    name: 'Company',
    component: AppDetailCompany,
  },
	{
		path: '/bookmark',
		name: 'Bookmark',
		component: AppBookmark,
	},
	{
		path: '/search',
		name: 'Search',
		component: AppSearch,
	}
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
