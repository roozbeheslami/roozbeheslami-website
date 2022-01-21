// import $ from 'jquery';
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VTooltip from 'v-tooltip'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/sass/style.scss'

Vue.use(VTooltip)
Vue.use(VueRouter)
Vue.config.productionTip = true

// var $ = require('jquery');
// var jQueryBridget = require('jquery-bridget');

const routes = [
	{
		path: '/',
		name: 'Main',
		component: () => import('./components/Main.vue')
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('./components/About.vue')
	},
	{
		path: '/skills',
		name: 'Skills',
		component: () => import('./components/Skills.vue')
	},
	{
		path: '/works',
		name: 'Works',
		component: () => import('./components/Works.vue')
	},
	{
		path: '/contact',
		name: 'Contact',
		component: () => import('./components/Contact.vue')
	},
	{
		path: '*',
		redirect: '/'
	}
]

const router = new VueRouter({
	routes,
	mode: 'history',
	base: process.env.BASE_URL,
	scrollBehavior() {
		setTimeout(() => document.getElementById('app').scrollIntoView(), 300);
    }
})

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')