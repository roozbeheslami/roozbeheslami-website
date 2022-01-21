<template>
    <div class="dot">
        <div id="form-submit" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <i class="fal fa-times"></i>
                        </button>
                    </div>
                    <div class="modal-body text-center">
                        <h2 class="mb-4">Thank you!</h2>
                        <p>Your message has been submitted successfully and I'll get back to you shortly.</p>
                    </div>
                    <div class="modal-footer">
                    </div>
                </div>
            </div>
        </div>
        <div id="contact" class="container-fluid section contact">
            <div class="container">
                <div class="row">
                    <div class="col-12 title">
                        <div class="inner white">
                            <i class="fal fa-envelope"></i>
                            Contact Me
                        </div>
                    </div>
                    <div class="col-lg-3 col-xl-3 side">
                        <div class="qrcode hvr-wobble-vertical">
                            <img src="../assets/img/qr-code.png" alt="QR Code">
                            <h6>Scan the QR-Code to have my contact details on your phone.</h6>
                        </div>
                    </div>
                    <div class="col-md-12 col-md-offset-0 col-lg-8 col-lg-offset-1 col-xl-9 col-xl-offset-1 content">
                        <div class="row text">
                            <div class="col-md-12 inner">
                                <p>
                                    You can send me an email at 
                                    <a href="mailto:eslami.roozbeh@gmail.com" target="_blank">eslami.roozbeh [at] gmail [dot] com</a> or send me a message using this form below and I will respond you ASAP.
                                </p>
                            </div>
                        </div>
                        <div class="row form">
                            <div class="col-12 inner">
                                <form @submit="checkForm" method="post" action="contact_form.php">
                                    <div class="form-group">
                                        <input class="form-control" name="name" placeholder="name" type="text" required>
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" name="email" placeholder="email" type="email" required>
                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-control" name="message" rows="20" cols="20" placeholder="message" required></textarea>
                                    </div>
                                    <div class="form-group">
                                        <input v-model="userAgent" class="form-control" name="useragent" hidden>
                                    </div>
                                    <div class="row">
                                        <!-- <div class="col-7 captcha">
                                            <div class="g-recaptcha" data-sitekey="6Lcs0VQUAAAAAOxP0tQrrufg71CqHzEM_3rBv27c"></div>
                                        </div> -->
                                        <div class="col-12">
                                            <div class="form-group">
                                                <button class="btn-main" name="submit" type="submit"><i class="fas fa-share"></i> {{ msgBtn }}</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="row social">
                            <ul>
                                <li v-for="(social, key) in socials" :key="key" v-tooltip.bottom="social.name">
                                    <a :class="social.name" :href="social.link" target="_blank">
                                        <i :class="'fab fa-' + social.icon"></i>
                                    </a>
                                </li>
                            </ul>
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
    import $ from 'jquery';
    export default {
        name: 'Contact',
        data: function () {
			return {
                msgBtn: "Send Message",
                userAgent: "",
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
                        name: "twitter",
                        link: "https://www.twitter.com/roozbeh_eslami",
                        icon: "twitter"
                    },
                    {
                        name: "unsplash",
                        link: "https://www.unsplash.com/@roozbeheslami",
                        icon: "unsplash"
                    },
                    {
                        name: "pinterest",
                        link: "https://www.pinterest.com/roozbeheslami/",
                        icon: "pinterest-p"
                    },
                    {
                        name: "telegram",
                        link: "https://www.telegram.me/roozbeheslami",
                        icon: "telegram-plane"
                    },
                    {
                        name: "github",
                        link: "https://github.com/roozbeheslami",
                        icon: "github"
                    },
                    {
                        name: "codepen",
                        link: "https://www.codepen.io/roozbeheslami",
                        icon: "codepen"
                    }
                ]
            }
        },
        mounted() {
            if (localStorage.formSubmit) {
                $('#form-submit').modal();
                localStorage.removeItem("formSubmit"); 
            }
            this.userAgent = navigator.userAgent;
        },
		methods: {
            checkForm:function() {
                this.msgBtn = "Sending...",
                localStorage.setItem("formSubmit", true);
                if (this.name && this.email && this.message) return true;
            }
		},
		components: {
			Footer
		}
    }
</script>