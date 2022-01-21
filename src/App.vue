<template>
	<div id="app">
		
		<transition name="slideUp" mode="out-in">
			<nav class="nav-fix" v-show="$route.path !== '/'">
				<div class="holder"> 
					<div class="left"> 
						<ul>
							<li><router-link to="/">{{ name }}</router-link></li>
						</ul>
					</div>
					<div class="right">
						<ul>
							<li><router-link to="/about">ABOUT</router-link></li>
							<li><router-link to="/skills">SKILLS</router-link></li>
							<li><router-link to="/works">WORKS</router-link></li>
							<li><router-link to="/contact">CONTACT</router-link></li>
						</ul>
					</div>
				</div>
			</nav>
		</transition>
		
		<transition name="slideUp" mode="out-in">
			<div class="nav-mob" @click="toggleMenu = !toggleMenu" v-show="$route.path !== '/'">
				<div class="menu" :class="{ 'open': toggleMenu }">
					<div class="icon">
						<div class="menu__line menu__line--1"></div>
						<div class="menu__line menu__line--2"></div>
						<div class="menu__line menu__line--3"></div>
					</div>
				</div>
				<div class="nav-name">{{ name }}</div>
			</div>
		</transition>

		<transition name="slideUp" mode="out-in">
			<div class="nav-mob-list" v-show="toggleMenu">
				<ul>
					<li @click="toggleMenu = !toggleMenu"><router-link to="/">HOME</router-link></li>
					<li @click="toggleMenu = !toggleMenu"><router-link to="/about">ABOUT</router-link></li>
					<li @click="toggleMenu = !toggleMenu"><router-link to="/skills">SKILLS</router-link></li>
					<li @click="toggleMenu = !toggleMenu"><router-link to="/works">WORKS</router-link></li>
					<li @click="toggleMenu = !toggleMenu"><router-link to="/contact">CONTACT</router-link></li>
				</ul>
			</div>
		</transition>

		<transition name="fade" mode="out-in">
			<router-view :fullName="name"></router-view>
		</transition>
		
		<transition name="slideBottom" mode="out-in">
			<a class="back-to-top" v-show="top" @click="backToTop()">
				<i class="fal fa-arrow-to-top"></i>
			</a>
		</transition>
		
	</div>
</template>

<script>
	export default {
		name: 'App',
		data: function () {
			return {
				name: "Roozbeh Eslami",
				title: "Web Designer and Developer",
				top: false,
				toggleMenu: false
			}
		},
		created() {
			window.addEventListener('scroll', this.backToTopShow);
		},
		methods: {
			backToTop() {
				document.getElementById('app').scrollIntoView()
			},
			backToTopShow() {
				const html = document.documentElement; 
				if ( html.scrollTop > 500 ) {
					this.top = true
				} else {
					this.top = false
				}
			}
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
