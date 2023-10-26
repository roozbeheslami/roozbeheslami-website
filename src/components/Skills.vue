<template>
	<div class="dot">
		<div id="skills" class="container-fluid section skills">
			<div class="container">
				<div class="row">
					<div class="col-12 title">
						<div class="inner">
							<i class="fal fa-user-cog"></i>
							Skills and Tools
						</div>
					</div>
					<div class="col-lg-12 text">
						<p>
							I am skilled in designing and developing fully responsive websites using modern programming languages and frameworks, including HTML5, CSS3 <span>(SASS)</span>, JavaScript <span>(ECMAScript 6+)</span>, JS Frameworks (such as <span>VueJS/NuxtJS</span> and <span>ReactJS/NextJS</span>) and other modern programming languages and frameworks. Additionally, I have experienced in using Node package manager, <span>Webpack</span> module bundler and control version systems like <span>Git</span>. I have worked collaboratively with designers and back-end developers as part of agile teams.
						</p>
					</div>
					<div class="col-lg-12 part">
						<h6>Here are a few tools and technologies I've been working with recently</h6>
						<i class="fab fa-js-square" v-tooltip.bottom="'Javascript (ES6+)'"></i>
						<i class="fab fa-vuejs" v-tooltip.bottom="'Vue.js'"></i>
						<img src="../assets/img/skills/nuxt.png" v-tooltip.bottom="'Nuxt.js'" alt="Nuxt.js">
						<i class="fab fa-react" v-tooltip.bottom="'React'"></i>
						<img src="../assets/img/skills/next.png" v-tooltip.bottom="'Next.js'" alt="Next.js">
						<i class="fab fa-html5" v-tooltip.bottom="'HTML5'"></i>
						<i class="fab fa-css3" v-tooltip.bottom="'CSS 3'"></i>
						<i class="fab fa-sass" v-tooltip.bottom="'SASS / SCSS'"></i>
						<img src="../assets/img/skills/tailwind.png" v-tooltip.bottom="'Tailwind'" alt="Tailwind">
						<i class="fab fa-git-alt" v-tooltip.bottom="'Git'"></i>
						<!-- <i class="fab fa-npm" v-tooltip.bottom="'NPM'"></i> -->
						<img src="../assets/img/skills/webpack.png" v-tooltip.bottom="'Webpack'" alt="Webpack">
						<img src="../assets/img/skills/docker.png" v-tooltip.bottom="'Docker'" alt="Docker">
					</div>
					<!-- <div class="order-md-4 order-lg-4 col-lg-12 title-in">
						<div class="inner">
							About this website:
						</div>
					</div> -->
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import Footer from '../components/Footer.vue'
	export default {
		name: 'Skills',
		props: ['fullName'],
		components: {
			Footer
		}
	}
</script>