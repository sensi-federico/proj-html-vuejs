<script>
import { store } from '../store.js';
import TextHr from './TextHr.vue';

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
        <nav>
            <div class="container">
                <div class="row row-cols-4">

                    <!-- logo -->
                    <div class="col logo">
                        <img src="../../public/images/cropped-Group-39-2x.png" alt="">
                        <p class="text-muted">
                            While the lovely valley teems with vapour around me, and the meridian sun strikes the upper
                            surface og the impenetrable foliage of my trees. While the lovelt valey teems with vapour
                            around me.
                        </p>
                    </div>

                    <!-- links -->
                    <div class="col links d-flex flex-column">
                        <h4 class="text-uppercase">quick links</h4>
                        <TextHr />
                        <a class="text-muted text-center text-capitalize" :href="store.linksFooter[i].url"
                            v-for="(link, i) in store.linksFooter">{{ store.linksFooter[i].text }}</a>
                    </div>

                    <!-- contact -->
                    <div class="col contact">
                        <h4 class="text-uppercase">contact</h4>
                        <TextHr />
                    </div>

                    <!-- location -->
                    <div class="col location">
                        <h4 class="text-uppercase">location on maps</h4>
                        <TextHr />
                    </div>

                </div>
            </div>
        </nav>

    </footer>
    <!-- /#site_footer -->

</template>

<style lang="scss">
#site_footer {

    nav {

        .logo {

            img {
                width: 200px;
            }

            p {
                padding-top: 1.5rem;
                margin: 0;
                font-size: 12px;
                line-height: 1.2rem;
            }
        }

        .links {
            a {
                text-decoration: none;
            }
        }
    }
}
</style>