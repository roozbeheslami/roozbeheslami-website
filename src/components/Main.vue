<template>
	<div id="main" class="container-fluid main dot">
		<transition name="slideSection" mode="out-in">
			<div class="half text-center" v-show="ready">
				<div class="col-12 avatar">
					<router-link to="/about"><img class="img-fluid" :src="mainImg" :alt="fullName"></router-link>
				</div>
				<div class="col-12 caption">
					<transition name="slideName" mode="out-in">
						<h1 class="name" v-show="ready">
							{{ fullName }}
						</h1>
					</transition>
					<transition name="slideTitle" mode="out-in">
						<h2 class="title" v-show="ready">
							{{ title }}
						</h2>
					</transition>
				</div>
				<transition name="fadeMenu" mode="out-in">
						<div class="col-12 main-menu" v-show="ready">
							<ul class="router">
								<li><router-link to="/about">ABOUT</router-link></li>
								<li><router-link to="/skills">SKILLS</router-link></li>
								<li><router-link to="/works">WORKS</router-link></li>
								<li><router-link to="/contact">CONTACT</router-link></li>
							</ul>
							<!-- <ul class="social">
								<li>
									<a class="linkedin" href="https://www.linkedin.com/in/roozbeheslami" target="_blank"><i class="fab fa-linkedin-in"></i></a>
								</li>
								<li>
									<a class="instagram" href="https://www.instagram.com/roosbeh" target="_blank"><i class="fab fa-instagram"></i></a>
								</li>
								<li>
									<a class="telegram" href="http://telegram.me/roozbeheslami" target="_blank"><i class="fab fa-telegram-plane"></i></a>
								</li>
							</ul> -->
						</div>
				</transition>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'Main',
        props: ['fullName'],
		data: function () {
			return {
				mainImg: require('../assets/img/avatar.jpg'),
				title: "Web Designer and Developer",
				ready: false,
			}
		},
		mounted() {
			this.ready = true;
		}
	}
</script>