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
        <div class="banner d-flex aling-items-center justify-content-between text-white bg-dark">
            <div class="left d-flex ">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <h6 class="ms-2 my-0">(001) 88451234 88455438</h6>
            </div>

            <div class="right d-flex aling-items-center">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-pinterest-p"></i>
            </div>
        </div>

        <!-- navbar  -->
        <nav class="d-flex align-items-center justify-content-between">

            <!-- logo section  -->
            <div class="logo">
                <img src="../../public/images/cropped-Group-39-2x.png" alt="">
            </div>

            <!-- links section  -->
            <div class="links">
                <a :href="store.links[i].url" v-for="(link, i) in store.links">{{ store.links[i].text }}</a>
            </div>

            <!-- search section  -->
            <div class="search d-flex align-items-center">
                <button>purchase</button>
                <i class="fa fa-search ms-4" aria-hidden="true"></i>
            </div>

        </nav>
    </header>
    <!-- /#site_header -->

</template>

<style lang="scss">
#site_header {

    .banner {
        padding: .5rem 2rem;

        .right {
            i {
                margin-left: 1rem;
            }
        }
    }

    nav {

        padding: 2rem;

        .logo {
            img {
                width: 200px;
            }
        }

        .links {
            a {
                color: black;
                text-decoration: none;
                margin: 1rem;
                text-transform: uppercase;
                font-size: 15px;
            }
        }

    }

}
</style>
