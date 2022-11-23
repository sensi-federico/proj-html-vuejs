<script>
import { store } from '../../store'
import TextHr from './TextHr.vue';

export default {
    name: 'SectionProjects',
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
    <section class="projects">
        <div class="container">
            <div class="title-text d-flex">
                <div class="row">
                    <!-- title -->
                    <div class="col">
                        <div class="title">
                            <TextHr />
                            <h1>Our recent <span>web designs</span> & some examples of <br> past
                                <span>projects</span>
                            </h1>
                            <TextHr />
                        </div>
                    </div>
                    <div class="col">
                        <!-- text -->
                        <div class="text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem placeat et iusto
                                beatae
                                excepturi dolores perspiciatis veritatis molestiae enim, labore, eos aspernatur,
                                quam
                                hic?
                                Temporibus excepturi obcaecati facilis. Temporibus doloremque dolor rem aperiam
                                quaerat
                                incidunt nisi odio debitis quam in ea accusantium velit deleniti.</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- cards -->
            <div class="container">
                <div class="row row-cols-4 pt-4">
                    <div class="col col-image" v-for="(image, i) in store.projectsCards">
                        <img :src="store.projectsCards[i]" alt="">
                    </div>
                </div>
                <div class="button d-flex justify-content-center">
                    <button>read more</button>
                </div>
                <div class="vertical">
                    17 years of experience helping people for best solutions
                </div>
            </div>
        </div>
    </section>
</template>