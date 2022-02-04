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
							The websites I design and develop are fully responsive, and they use HTML5, CSS3 <span>(SASS)</span>, JavaScript <span>(ECMAScript 6+)</span>, JS Frameworks (such as <span>VueJS/NuxtJS</span> and <span>ReactJS/NextJS</span>) and other modern programming languages and frameworks. Additionally, I have experience using Node package manager, <span>Webpack</span> module bundler and control version systems like <span>Git</span>. I have worked effectively with designers and back-end developers, as a front-end developer in agile teams.
						</p>
						<p>Here are a few tools and technologies I've been working with recently:</p>
					</div>
					<div class="order-1 order-lg-1 col-lg-4 part first">
						<h6>HTML5 & CSS3</h6>
						<i class="fab fa-html5" v-tooltip.bottom="'HTML5'"></i>
						<i class="fab fa-css3" v-tooltip.bottom="'CSS 3'"></i>
						<i class="fab fa-sass" v-tooltip.bottom="'SASS / SCSS'"></i>
						<i class="fab fa-bootstrap" v-tooltip.bottom="'Bootstrap'"></i>
					</div>
					<div class="order-3 order-lg-2 col-lg-4 part second">
						<h6>Dev Tools</h6>
						<i class="fab fa-git-alt" v-tooltip.bottom="'Git'"></i>
						<i class="fab fa-npm" v-tooltip.bottom="'NPM'"></i>
						<img src="../assets/img/skills/webpack.png" v-tooltip.bottom="'Webpack'" alt="Webpack">
					</div>
					<div class="order-2 order-lg-3 col-lg-4 part third">
						<h6>Javascript Family</h6>
						<i class="fab fa-js-square" v-tooltip.bottom="'Javascript (ES6+)'"></i>
						<i class="fab fa-vuejs" v-tooltip.bottom="'Vue.js'"></i>
						<i class="fab fa-react" v-tooltip.bottom="'React.js'"></i>
						<img src="../assets/img/skills/jquery.png" v-tooltip.bottom="'jQuery'" alt="jQuery">
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