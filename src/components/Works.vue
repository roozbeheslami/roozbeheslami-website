<template>
	<div class="dot">
		<div id="works" class="container-fluid section works">
			<div class="container">
				<div class="row">
					<div class="col-12 title">
						<div class="inner">
							<i class="fal fa-laptop-code"></i>
							Works
						</div>
					</div>
					<div class="col-sm-12 tabs">
						<ul class="button-group" id="filters">
							<li v-for="(val, key) in option.getFilterData" :key="key" class="btn-main"  :class="{ 'is-checked': option.filterOption == key }" @click="filter(key)">{{key}}</li>
						</ul>
					</div>
					<div class="col-sm-12 grid">
						<isotope ref="cpt" :item-selector="'grid-item'" :options="option" :list="works" >
							<div v-for="(work, key) in works" :key="key">
								<figure class="grid-scale wrk">
									<img :src="work.image" :alt="work.titleBold+' '+work.title"/>
									<figcaption>
										<h4 v-if="work.titleSort"><span>{{ work.titleBold }}</span> {{ work.title }}</h4>
										<h4 v-else>{{ work.titleBold }} <span>{{ work.title }}</span></h4>
										<p>{{ work.description }}</p>
										<div class="tools">
											<p>
												<i v-if="work.tools.html" class="fab fa-html5"></i>
												<i v-if="work.tools.css" class="fab fa-css3"></i>
												<i v-if="work.tools.sass" class="fab fa-sass"></i>
												<i v-if="work.tools.bootstrap" class="fab fa-bootstrap"></i>
												<i v-if="work.tools.js" class="fab fa-js-square"></i>
												<i v-if="work.tools.vue" class="fab fa-vuejs"></i>
												<img v-if="work.tools.nuxt" src="../assets/img/skills/nuxt.png" alt="Nuxt">
												<i v-if="work.tools.react" class="fab fa-react"></i>
												<img v-if="work.tools.jquery" src="../assets/img/skills/jquery.png" alt="jQuery">
											</p>
											<p><a :href="'http://' + work.website" target="_blank">{{ work.website }}</a></p>
										</div>
									</figcaption>			
								</figure>
							</div>
						</isotope>
					</div>
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import Footer from '../components/Footer.vue'
	import isotope from 'vueisotope'
	export default {
		name: 'Works',
		data: function () {
			return {
				option: {
					filterOption: "All Projects",
					itemSelector: ".grid-item",
					getFilterData: {
						"All Projects": function() {
							return true;
						},
						"Full Website": function(el) {
							return el.category === "full";
						},
						"Front-End Development": function(el) {
							return el.category === "front";
						},
					},
				},
				works: [
					{
						image: require('../assets/img/works/avanod.png'),
						titleSort: true,
						titleBold: "Avanod",
						title: "",
						description: "Avanod is the first provider to able you proof your experiences through Soulbound Tokens and NFTs!",
						website: "avanod.com" ,
						category: "front",
						tools: { html: true, sass: true, nuxt: true }
					},
					{
						image: require('../assets/img/works/ava.png'),
						titleSort: true,
						titleBold: "Ava",
						title: "Agah",
						description: "Ava-Agah seeks to provide investment advisory services accessible to everyone across the country.",
						website: "ava.agah.com" ,
						category: "front",
						tools: { html: true, sass: true, nuxt: true, js: true}
					},
					{
						image: require('../assets/img/works/mobexi.jpg'),
						titleSort: true,
						titleBold: "Mobexi",
						title: "Exchange",
						description: "Mobexi is a financial online platform for cryptocurrency exchange.",
						website: "mobexi.ir" ,
						category: "front",
						tools: { html: true, sass: true, nuxt: true }
					},
					{
						image: require('../assets/img/works/ghoghnos.jpg'),
						titleSort: true,
						titleBold: "Ghoghnos",
						title: "Agency",
						description: "Ghoghnos Travel Company is active in the field of tourism since 1979.",
						website: "ghoghnos.ir" ,
						category: "front",
						tools: { html: true, sass: true, js: true, vue: true, jquery: true }
					},
					{
						image: require('../assets/img/works/arzjoo.jpg'),
						titleSort: true,
						titleBold: "Sarmayex",
						title: "Exchange",
						description: "Sarmayex (Sarmayex) is a online platform for buying or selling digital currency.",
						website: "sarmayex.com" ,
						category: "front",
						tools: { html: true, sass: true, js: true, nuxt: true }
					},
					{
						image: require('../assets/img/works/decathlon.jpg'),
						titleSort: true,
						titleBold: "Decathlon",
						title: "Group",
						description: "Decathlon S.A. is a French sporting goods retailer. They are the largest sporting goods retailer in the world.",
						website: "decathlon.ir" ,
						category: "front",
						tools: { html: true, sass: true, js: true, jquery: true }
					},
					{
						image: require('../assets/img/works/cocalo.jpg'),
						titleSort: true,
						titleBold: "Cocalo",
						title: "Store",
						description: "SakenCocalo is an online baby store.",
						website: "cocalostore.ir" ,
						category: "front",
						tools: { html: true, css: true, bootstrap: true, js: true, jquery: true }
					},
					{
						image: require('../assets/img/works/tajhiz.jpg'),
						titleSort: true,
						titleBold: "Tajhiz",
						title: "Online",
						description: "Tajhiz Online is a online market for buying building products.",
						website: "tajhizonline.com" ,
						category: "front",
						tools: { html: true, sass: true, bootstrap: true, js: true, jquery: true }
					},
					{
						image: require('../assets/img/works/forifood.jpg'),
						titleSort: true,
						titleBold: "Forifood",
						title: "Service",
						description: "Forifood is an online food ordering service.",
						website: "forifood.com" ,
						category: "front",
						tools: { html: true, sass: true, bootstrap: true, js: true, jquery: true }
					},
					// {
					// 	image: require('../assets/img/works/mahim.jpg'),
					// 	titleSort: true,
					// 	titleBold: "Mahim",
					// 	title: "Shop",
					// 	description: "Mahim Online Market",
					// 	website: "" ,
					// 	category: "front",
					// 	tools: { html: true, sass: true, js: true, jquery: true }
					// },
					{
						image: require('../assets/img/works/aos.jpg'),
						titleSort: true,
						titleBold: "The AOS",
						title: "Group",
						description: "'Agile Solutions Operations' IT office.",
						website: "theaosgroup.com" ,
						category: "full",
						tools: { html: true, css: true, js: true, jquery: true }
					},
					{
						image: require('../assets/img/works/medlin.jpg'),
						titleSort: true,
						titleBold: "Medlin",
						title: "Group",
						description: "Medlin Group is a distributer of Animal Health products, feed supplements and Feed additives with the main office in UAE since 2006.",
						website: "medlin-ahn.com" ,
						category: "front",
						tools: { html: true, css: true, bootstrap: true, js: true, jquery: true }
					},
					{
						image: require('../assets/img/works/aparch.jpg'),
						titleSort: true,
						titleBold: "AP",
						title: "Architects",
						description: "Ajand Panam Engineers Company, active in the field of construction industry.",
						website: "ajandpanam.com" ,
						category: "full",
						tools: { html: true, css: true, js: true, jquery: true }
					},
					{
						image: require('../assets/img/works/sakenin.jpg'),
						titleSort: true,
						titleBold: "Sakenin",
						title: "Real Estate",
						description: "Sakenin is a Tehran based real estate website.",
						website: "sakenin.com" ,
						category: "front",
						tools: { html: true, css: true, bootstrap: true, js: true, jquery: true }
					},
					{
						image: require('../assets/img/works/mesh.jpg'),
						titleSort: true,
						titleBold: "MESH",
						title: "architects",
						description: "The TR+Partners is an architectural practice based in Tehran, Iran.",
						website: "mesh-architects.com" ,
						category: "full",
						tools: { html: true, css: true, js: true, jquery: true }
					},
					{
						image: require('../assets/img/works/roozbeheslami.jpg'),
						titleSort: false,
						titleBold: "Roozbeh",
						title: "Eslami",
						description: "My Personal Website.",
						website: "roozbeheslami.com" ,
						category: "full",
						tools: { html: true, sass: true, bootstrap: true, vue: true }
					},
					// {
					// 	image: require('../assets/img/works/akbarmesripour.jpg'),
					// 	titleSort: false,
					// 	titleBold: "Akbar",
					// 	title: "Mesripour",
					// 	description: "Akbar Mesripour is a painter who lives in Esfahan, Iran.",
					// 	website: "akbarmesripour.com" ,
					// 	category: "full",
					// 	tools: { html: true, css: true, bootstrap: true, js: true, jquery: true }
					// },
					// {
					// 	image: require('../assets/img/works/bitobin.jpg'),
					// 	titleSort: true,
					// 	titleBold: "Bitobin",
					// 	title: "Exchange",
					// 	description: "Bitobin is a online platform for buying or selling digital currency.",
					// 	website: "bitobin.com" ,
					// 	category: "front",
					// 	tools: { html: true, sass: true, bootstrap: true, js: true, jquery: true }
					// },
					// {
					// 	image: require('../assets/img/works/rezaeslami.jpg'),
					// 	titleSort: false,
					// 	titleBold: "Reza",
					// 	title: "Eslami",
					// 	description: "Reza Eslami is an Architect.",
					// 	website: "reza-eslami.com" ,
					// 	category: "full",
					// 	tools: { html: true, css: true, js: true, jquery: true }
					// },
					// {
					// 	image: require('../assets/img/works/bazartahrir.jpg'),
					// 	titleSort: true,
					// 	titleBold: "Bazar",
					// 	title: "Tahrir",
					// 	description: "Bazar Tahrir is an online stationery shop for unique stationery lovers.",
					// 	website: "bazartahrir.ir" ,
					// 	category: "front",
					// 	tools: { html: true, sass: true, bootstrap: true, js: true, jquery: true }
					// },
					// {
					// 	image: require('../assets/img/works/yadakiparts.jpg'),
					// 	titleSort: true,
					// 	titleBold: "Yadaki",
					// 	title: "Pars",
					// 	description: "An online shop for high quality and discount auto parts.",
					// 	website: "yadaki.parts" ,
					// 	category: "front",
					// 	tools: { html: true, css: true, bootstrap: true, js: true, jquery: true }
					// },
					// {
					// 	image: require('../assets/img/works/vadoo.jpg'),
					// 	titleSort: true,
					// 	titleBold: "Vadoo",
					// 	title: "Service",
					// 	description: "Vadoo is a professional website for searching cars or estates to buy.",
					// 	website: "vadoo.ir" ,
					// 	category: "front",
					// 	tools: { html: true, sass: true, bootstrap: true, js: true, jquery: true }
					// }
				],
			}
		},
		methods: {
			filter: function(key) {
				this.option.filterOption = key;
				this.$refs.cpt.filter(key);
			}
		},
		components: {
			Footer,
			isotope
		}
	}
</script>