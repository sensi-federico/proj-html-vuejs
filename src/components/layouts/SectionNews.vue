<script>
import { store } from '../../store'
import TextHr from './TextHr.vue';

export default {
    name: 'SectionNews',
    components: {
        TextHr,
    },
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <section class="news">
        <!-- text -->
        <div class="text d-flex flex-column align-items-center">
            <h1>Latest News & Our <span>Blog</span></h1>
            <TextHr />
        </div>
        <!-- card -->
        <div class="cards">
            <div class="container">
                <div class="row row-cols-3">
                    <div class="col" v-for="(card, i) in store.blogCards">
                        <!-- image -->
                        <div class="card-image">
                            <img :src="store.blogCards[i].image" alt="">
                        </div>
                        <!-- banner -->
                        <div class="banner">
                            <p class="text-muted">
                                {{ store.blogCards[i].date }}
                            </p>
                            <!-- title -->
                            <div class="title d-flex align-items-center">
                                <div class="circle-green"></div>
                                <h4 class="m-0 ps-3">{{ store.blogCards[i].title }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- button -->
                <div class="button d-flex justify-content-center">
                    <button>view all post</button>
                </div>
                <div class="vertical">
                    17 years of experience helping people for best solutions
                </div>
            </div>
        </div>
    </section>
</template>