<script>
import { store } from '../store.js'

export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <header id="site_header">

        <!-- banner -->
        <div class="banner  text-white bg-dark">
            <div class="container d-flex aling-items-center justify-content-between">

                <!-- contact -->
                <div class="left d-flex ">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <h6 class="ms-2 my-0">(001) 88451234 88455438</h6>
                </div>

                <!-- social -->
                <div class="right d-flex aling-items-center">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-pinterest-p"></i>
                </div>

            </div>
        </div>

        <!-- navbar  -->
        <nav>

            <div class="container d-flex align-items-center justify-content-between">

                <!-- logo section  -->
                <div class="logo">
                    <img src="../../public/images/cropped-Group-39-2x.png" alt="">
                </div>

                <!-- links section  -->
                <div class="links">
                    <a :href="store.linksHeader[i].url" v-for="(link, i) in store.linksHeader">{{
                            store.linksHeader[i].text
                    }}</a>
                </div>

                <!-- search section  -->
                <div class="search d-flex align-items-center">
                    <button>purchase</button>
                    <i class="fa fa-search ms-4" aria-hidden="true"></i>
                </div>

            </div>
        </nav>

    </header>
    <!-- /#site_header -->

</template>

<style lang="scss">

</style>
