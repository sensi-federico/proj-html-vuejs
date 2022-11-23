<script>
import { store } from '../../store'
import TextHr from './TextHr.vue';

export default {
    name: 'SectionPacks',
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
    <section class="packs">
        <div class="container">
            <div class="row d-flex align-items-center">
                <!-- text -->
                <div class="col-4 text">
                    <h1>With <span class="green">live chat <br> 24/7 </span>support </h1>
                    <TextHr />
                    <p class="text-muted">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit doloribus alias
                        quidem
                        dicta, doloremque distinctio temporibus mollitia fugiat rem possimus illum.
                    </p>
                </div>
                <!-- cards -->
                <div class="col-8">
                    <div class="row row-cols-3">
                        <div class="col" v-for="(pack, i) in store.packs">
                            <div class="my-cards text-center">
                                <!-- top card -->
                                <div class="top pt-2"
                                    :class="store.packs[i].title === 'development' ? 'green-card' : 'black-card'">
                                    <!-- banner -->
                                    <div class="banner mt-2">
                                        <h4>{{ store.packs[i].title }}</h4>
                                        <p class="text-muted m-0 pb-2">{{ store.packs[i].subtitle }}</p>
                                    </div>
                                    <h2 class="text-white price">{{ store.packs[i].price }}
                                        <span class="small">{{ store.packs[i].work }}</span>
                                    </h2>
                                </div>
                                <!-- bottom card -->
                                <div class="bottom pt-5 pb-3">
                                    <p class="m-0 pb-3" v-for="(offer, i) in store.offers">
                                        <i class="fa fa-check" aria-hidden="true"></i>
                                        {{ store.offers[i] }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>