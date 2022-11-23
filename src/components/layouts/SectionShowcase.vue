<script>
import { store } from '../../store'
import TextHr from './TextHr.vue';

export default {
    name: 'SectionShowcase',
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
    <section class="showcase">
        <div class="container d-flex">
            <!-- stats -->
            <div class="stats">
                <img src="../../../public/images/person-with-long-curly-hair-PZ99QM2-2x.jpg" alt="">
            </div>
            <div class="stats-cover">
                <div class="cover">
                    <div class="top text-center">
                        <h1>280</h1>
                        <h2>projects</h2>
                    </div>
                    <div class="bottom d-flex align-items-center">
                        <div class="left pe-4 text-center">
                            <h1>+3,500</h1>
                            <h2>users' comments</h2>
                        </div>
                        <div class="center"></div>
                        <div class="right ps-4 text-center">
                            <h1>100%</h1>
                            <h2>happy clients</h2>
                        </div>
                    </div>
                </div>
            </div>
            <!-- text -->
            <div class="text">
                <h1>We <span>love</span> what <br> we do</h1>
                <TextHr />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem alias labore
                    perferendis
                    laudantium repellat, odit natus fugit doloribus placeat asperiores, aut aliquam voluptas
                    reprehenderit. Atque architecto recusandae incidunt laboriosam.
                    reprehenderit. Atque architecto recusandae incidunt laboriosam.
                    recusandae incidunt laboriosam.
                </p>

                <div class="icons d-flex align-items-center pt-1" v-for="(goal, i) in store.goals">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <p class="ms-2">{{ store.goals[i] }}</p>
                </div>

            </div>
        </div>
    </section>
</template>
