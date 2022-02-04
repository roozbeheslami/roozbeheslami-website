<template>
    <footer>
        <div class="container footer">
            <div class="row">
                <div class="col-12 col-sm-7">
                    <p>
                        ©2007-2022 {{ name }} 
                    </p>
                </div>
                <div class="col-12 col-sm-5 social">
                    <ul>
                        <li v-for="(social, key) in socials" :key="key" v-tooltip="social.name">
                            <a :class="social.name" :href="social.link" target="_blank">
                                <i :class="'fab fa-' + social.icon"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
	export default {
		name: 'Footer',
		data: function () {
			return {
                name: "Roozbeh Eslami",
                socials: [
                    {
                        name: "linkedin",
                        link: "https://www.linkedin.com/in/roozbeheslami",
                        icon: "linkedin-in"
                    },
                    {
                        name: "instagram",
                        link: "https://www.instagram.com/roosbeh",
                        icon: "instagram"
                    },
                    {
                        name: "telegram",
                        link: "https://www.telegram.me/roozbeheslami",
                        icon: "telegram-plane"
                    }
                ]
			}
		},
	}
</script>
