<script>
import { store } from '../../store'
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

</style>