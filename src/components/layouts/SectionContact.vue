<script>
import { store } from '../../store'
import TextHr from './TextHr.vue';

export default {
    name: 'SectionContact',
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
    <section class="contact">
        <div class="container">
            <div class="row row-cols-2">
                <!-- left-card -->
                <div class="col">
                    <div class="left-card d-flex flex-column align-items-center">
                        <p class="text-muted mb-2">
                            Are You Ready?
                        </p>
                        <h2 class="mb-3 text-white">Start a New Project</h2>
                        <div class="submit">
                            <input type="email" placeholder="Enter Your Email Address">
                            <button>submit</button>
                        </div>
                    </div>
                </div>
                <!-- right-card -->
                <div class="col">
                    <div class="right-card d-flex flex-column align-items-center">
                        <p class="text-muted mb-2">
                            What Are You Waiting for?
                        </p>
                        <h2 class="mb-3 text-white">Let's Talk About Work</h2>
                        <div class="start">
                            <button>start now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row row-cols-6">
                    <div class="col" v-for="(logo, i) in store.partnerLogo">
                        <div class="image">
                            <img :src="store.partnerLogo[i]" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>