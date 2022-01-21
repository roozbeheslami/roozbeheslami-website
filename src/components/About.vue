

<template>
	<div class="dot">
		<div id="about" class="container-fluid section about">
			<div class="container">
				<div class="row">
					<div class="col-12 title">
						<div class="inner">
							<i class="fal fa-user-circle"></i>
							About Me
						</div>
					</div>
					<div class="col-md-12 col-md-offset-0 col-lg-10 col-lg-offset-1 col-xl-8 col-xl-offset-2 body">
						<img class="image" src="../assets/img/avatar1.jpg" :alt="fullName">
						<p>
							Hi, I'm {{ fullName }}, a web designer and front-end developer born in 1988 based in Tehran, Iran. I started learning programming at Highschool and during my studies at university, I started working as a freelance web designer who could understand the importance of a functional and well designed websites. I have a Master's Degree in computer software engineering from Islamic Azad University. Currently, I work at Asa Co. as a full-time front-end engineer.
							<br>
						</p>
						<div class="touch">
							<p>Let's work together! Have a project you'd like to discuss?</p>
							<router-link class="btn-main" to="/contact">Get In Touch</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import Footer from '../components/Footer.vue'
	export default {
		name: 'About',
		props: ['fullName'],
		components: {
			Footer
		}
	}
</script>