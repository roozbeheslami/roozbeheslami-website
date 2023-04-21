

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
							Hello, I am Roozbeh Eslami, a web designer and front-end engineer from Tehran, Iran, who was born in 1988. 
							<br>
							I started programming in high school and worked as a freelance web designer during my studies at university. I hold a master's degree in computer software engineering from Islamic Azad University and currently I work as a full-time front-end engineer at Asa Co.
							<br>
							While my primary focus is on front-end development, I am also interested in exploring new design trends, as well as emerging technologies such as web3 and blockchain. This suggests that I have a strong desire to stay up-to-date with the latest developments in my field and I am committed to continuous learning and professional growth.
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