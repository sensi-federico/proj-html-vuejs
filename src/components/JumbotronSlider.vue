<script>
import { store } from '../store.js'
import TextHr from './TextHr.vue';

export default {
    name: 'JumbotronSlider',
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

    <!-- jumbotron -->
    <div class="jumbotron">

        <!-- slider -->
        <div class="slider">
            <div class="row">
                <div class="text text-white col">
                    <!-- subtitle -->
                    <h5>{{ store.slides[store.activeImage].subtitle }}</h5>
                    <!-- title -->
                    <h1>
                        {{ store.slides[store.activeImage].title }}
                        <span>{{ store.slides[store.activeImage].span }}</span>
                    </h1>
                    <!-- component -->
                    <TextHr />
                    <!-- paragraph -->
                    <p class="pt-3 pb-5 text-muted">
                        {{ store.slides[store.activeImage].text }}
                    </p>
                    <!-- button -->
                    <button>read more</button>
                    <div class="social-controls d-flex align-items-center">
                        <!-- social -->
                        <h6 class="text-muted pe-5 pb-0 mb-0">
                            FACEBOOK - INSTAGRAM - YOUTUBE - TWITTER
                        </h6>
                        <!-- controls -->
                        <div class="controls d-flex">
                            <button class="slide-one" :class="store.activeSlide == 0 ? 'active' : ''"
                                @click="store.slideOne()">01</button>
                            <button class="slide-two" :class="store.activeSlide == 1 ? 'active' : ''"
                                @click="store.slideTwo()">02</button>
                            <button class="slide-three" :class="store.activeSlide == 2 ? 'active' : ''"
                                @click="store.slideThree()">03</button>
                        </div>
                    </div>
                </div>
                <!-- image -->
                <div class="cropper col-8">
                    <img :src="store.slides[store.activeImage].image" alt="">
                </div>

            </div>
        </div>

    </div>

</template>

<style lang="scss">
.jumbotron {
    background-color: #F5F5F5;

    .slider {
        .cropper {
            overflow: hidden;
            position: relative;
            left: 15%;

            img {
                margin: -100px 0;
                width: 100%;
            }
        }

        .text {
            width: 600px;
            position: relative;
            left: 15%;
            padding-top: 5%;

            h5 {
                color: #00D9A6;
            }

            h1 {
                font-size: 50px;
                color: black;

                span {
                    color: #00D9A6;
                }
            }

            button {
                background-color: black;
                color: white;
                text-transform: uppercase;
                font-size: x-small;
                border: none;
                border-radius: 2rem;
                padding: 1rem 2.5rem;
                margin-bottom: 3rem;
            }

        }

        .social-controls {
            h6 {
                font-size: small;
            }

            .controls {
                background-color: black;
                color: white;
                border-radius: 2rem;

                .slide-one,
                .slide-two,
                .slide-three {
                    margin: 0;
                    padding: .5rem .5rem;
                    border-radius: 50%;
                }

                .active {
                    background: #00D9A6;
                }
            }
        }

    }
}
</style>