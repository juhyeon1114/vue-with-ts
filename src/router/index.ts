import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/Home.vue'),
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('@/views/About.vue'),
	},
	{
		path: '/mixin',
		name: 'MixinExample',
		component: () => import('@/views/MixinExample.vue'),
	},
	{
		path: '/bus',
		name: 'BusExample',
		component: () => import('@/views/BusExample.vue'),
	},
	{
		path: '/vuex',
		name: 'VuexExample',
		component: () => import('@/views/VuexExample.vue'),
	},
];

const router = new VueRouter({
	// mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
