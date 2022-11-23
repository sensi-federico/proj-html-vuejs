<script>
import { store } from '../../store'
import TextHr from './TextHr.vue';
import ServicesCards from './ServicesCards.vue';

export default {
    name: 'SectionServices',
    components: {
        TextHr,
        ServicesCards
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
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
</template>

<style>

</style>