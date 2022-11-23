<script>
import { store } from '../store.js';
import TextHr from './layouts/TextHr.vue';

export default {
    name: 'AppFooter',
    components: {
        TextHr
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <footer id="site_footer">

        <!-- navbar -->
        <nav class="footer">
            <div class="container">
                <div class="row row-cols-4">

                    <!-- logo -->
                    <div class="col logo">
                        <img src="../../public/images/cropped-Group-39-2x.png" alt="">
                        <p class="">
                            While the lovely valley teems with vapour around me, and the meridian sun strikes the upper
                            surface og the impenetrable foliage of my trees. While the lovelt valey teems with vapour
                            around me.
                        </p>
                    </div>

                    <!-- links -->
                    <div class="col links d-flex flex-column">
                        <h5 class="text-uppercase">quick links</h5>
                        <TextHr />
                        <a class="text-center text-capitalize" :href="store.linksFooter[i].url"
                            v-for="(link, i) in store.linksFooter">{{ store.linksFooter[i].text }}</a>
                    </div>

                    <!-- contact -->
                    <div class="col contacts">
                        <h5 class="text-uppercase">contact</h5>
                        <TextHr />
                        <p class=" pb-2">
                            Patricia C. Amedee 4401 Waldeck Street <br> Grapevine Nashville, TX 76051
                        </p>
                        <p class=" pb-3">
                            info@yourdomain.com
                        </p>
                        <p class="">
                            +39 (0) 101 0000 888
                        </p>
                    </div>

                    <!-- location -->
                    <div class="col location">
                        <h5 class="text-uppercase">location on maps</h5>
                        <TextHr />
                        <img src="../../public/images/map.png" alt="">
                    </div>

                </div>
            </div>
        </nav>

        <!-- banner -->
        <div class="banner bg-dark">

            <div class="container d-flex justify-content-between align-items-center py-4">

                <!-- copyright -->
                <p class=" m-0">
                    <i class="fa fa-copyright" aria-hidden="true"></i>
                    2020 PHLOX BUSINESS THEME.
                </p>

                <!-- social -->
                <div class="social d-flex aling-items-center text-muted">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-pinterest-p"></i>
                </div>

            </div>

        </div>

    </footer>
    <!-- /#site_footer -->

</template>

<style lang="scss">

</style>