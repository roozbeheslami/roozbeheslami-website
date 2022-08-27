

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
							Hello, I'm {{ fullName }}, a web designer and front-end engineer born in 1988, based in Tehran, Iran.
							<br>
							I began programming in Highschool and worked as a freelance web designer during my studies at university. I have more than 10 years of experience working in web development therefore I could understand the importance of a well-designed and functional website.
							<br>
							My master's degree is in computer software engineering from Islamic Azad University and currently I work as a full-time front-end engineer at Asa Co.
							<br>
							Nowadays, I'm mostly focusing on front-end development and web3, but from time to time I like to design my own projects and explore new design trends.
						</p>
						<div class="touch">
							<p>Have a project you'd like to discuss? Let's work together!</p>
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