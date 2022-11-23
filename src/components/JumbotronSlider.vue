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
            <div class="text text-white">
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
                </div>
            </div>
            <!-- image -->
            <div class="cropper">
                <img :src="store.slides[store.activeImage].image" alt="">
            </div>
            <!-- controls -->
            <div class="controls d-flex">
                <div class="slide-one" :class="store.activeSlide == 0 ? 'active' : ''" @click="store.slideOne()">01
                </div>
                <div class="slide-two" :class="store.activeSlide == 1 ? 'active' : ''" @click="store.slideTwo()">02
                </div>
                <div class="slide-three" :class="store.activeSlide == 2 ? 'active' : ''" @click="store.slideThree()">03
                </div>
            </div>

        </div>
    </div>

</template>

<style lang="scss">
.jumbotron {
    background-color: #F5F5F5;
    height: 600px;

    .slider {
        .cropper {
            width: 900px;
            height: 600px;
            overflow: hidden;
            position: absolute;
            top: 9.2rem;
            left: 33.5rem;


            img {
                margin: -60px -100px -30px 200px;
            }
        }

        .text {
            width: 600px;
            position: relative;
            left: 5%;
            padding-top: 5%;

            h5 {
                color: #00D9A6;
                font-family: 'Rajdhani', sans-serif;
                text-transform: uppercase;
            }

            h1 {
                font-size: 50px;
                color: black;

                span {
                    color: #00D9A6;
                }
            }

            button {
                background-image: linear-gradient(to top left, #0F0F0F, #464646);
                color: white;
                text-transform: uppercase;
                font-size: x-small;
                border: none;
                border-radius: 2rem;
                padding: .8rem 2rem;
                margin-bottom: 3rem;
                transition: all .4s;

                &:hover {
                    background-image: linear-gradient(to bottom left, #14D6A5, #99DE6B);
                    scale: 1.2;
                }
            }

        }

        .social-controls {
            h6 {
                font-size: small;
                position: relative;
                top: 3rem;
            }

        }

        .controls {
            background-image: linear-gradient(to top left, #0F0F0F, #464646);
            color: white;
            border-radius: 2rem;
            position: absolute;
            left: 40rem;

            .slide-one,
            .slide-two,
            .slide-three {
                margin: 0;
                border-radius: 50%;
                padding: .8rem 1.3rem;
                font-size: xx-small;

                &:hover {
                    cursor: pointer;
                }
            }

            .active {
                background-image: linear-gradient(to bottom left, #14D6A5, #99DE6B);
            }
        }

    }
}
</style>