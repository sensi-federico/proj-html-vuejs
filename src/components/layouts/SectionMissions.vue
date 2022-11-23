<script>
import { store } from '../../store'
import TextHr from './TextHr.vue';

export default {
    name: 'SectionMissions',
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
    <section class="missions py-5">
        <div class="row row-cols-2 py-5">
            <!-- image -->
            <div class="col-6 image">
                <img class="first-image" src="../../../public/images/busy-architect-PYVKWM4-1024x872.jpg" alt="">
                <div class="cover"></div>
                <img class="second-image"
                    src="../../../public/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="">
            </div>
            <!-- text -->
            <div class="col-6 text my-5">
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
</template>

<style>

</style>