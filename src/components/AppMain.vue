<script>
import JumbotronSlider from './JumbotronSlider.vue';
import ServicesCards from './ServicesCards.vue';
import TextHr from './TextHr.vue';
import { store } from '../store.js'

export default {
    name: 'AppMain',
    components: {
        JumbotronSlider,
        ServicesCards,
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

    <main id="site_main">
        <!-- jumbotron slider -->
        <JumbotronSlider />

        <!-- services -->
        <section class="services">
            <div class="container">
                <div class="row">
                    <!-- text -->
                    <div class="col-5 text">
                        <h1>
                            We are here to make your
                            <span>website</span>
                            look more
                            <span>elegant</span>
                            and stylish!
                        </h1>
                        <TextHr />
                        <button>view all</button>
                    </div>
                    <!-- card -->
                    <div class="col cards">
                        <div class="row row-cols-2 g-4">
                            <ServicesCards />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- missons -->
        <section class="missions py-5">
            <div class="row py-5">
                <!-- image -->
                <div class="col-6 image">
                    <img class="first-image" src="../../public/images/busy-architect-PYVKWM4-1024x872.jpg" alt="">
                    <img class="second-image"
                        src="../../public/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="">
                </div>
                <!-- text -->
                <div class="col-6 text my-5 px-5">
                    <h1>Learn more <br> about our <br> <span>missions</span> </h1>
                    <TextHr />
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit doloribus alias quidem
                        dicta, doloremque distinctio temporibus mollitia fugiat rem possimus illum.
                    </p>
                    <button>read more</button>
                </div>
            </div>
        </section>

    </main>
    <!-- #site_main -->

</template>

<style lang="scss">
#site_main {
    .services {
        background-color: #F9F9F9;
        padding: 8rem 0;

        .text {

            padding-right: 10rem;
            padding-top: 4rem;

            button {
                text-transform: uppercase;
                background: #00D9A6;
                border: none;
                padding: .5rem 1rem;
                border-radius: 2rem;
                color: white;
                font-size: small;
                margin-top: 2rem;
            }

            h1 {
                font-size: 45px;
                text-transform: capitalize;
            }

            span {
                color: #00D9A6;
            }
        }
    }

    .missions {
        .image {
            .first-image {
                width: 70%;
                border-radius: 1rem;
            }

            .second-image {
                position: absolute;
                top: 198%;
                left: 10%;
                width: 35%;
                border-radius: .5rem;
            }
        }

        button {
            text-transform: uppercase;
            background: #00D9A6;
            border: none;
            padding: .5rem 1rem;
            border-radius: 2rem;
            color: white;
            font-size: small;
            margin-top: .5rem;
        }

        span {
            color: #00D9A6;
        }
    }
}
</style>