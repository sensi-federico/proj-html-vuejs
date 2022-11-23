<script>
import { store } from '../../store'
import TextHr from './TextHr.vue';

export default {
    name: 'SectionComment',
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
    <section class="comment">
        <div class="scale"></div>
        <div class="content text-center">
            <i class="fa-solid fa-quote-left"></i>
            <p class="long">
                When it comes to barbequing, there are two min schools of thought fore the <br> techniques that
                you
                can use, Freshly scrambled eggs with applewood smoked bacon <br> - are amazing!
            </p>
            <img src="../../../public/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="">

            <h4>lissa durbin</h4>
            <p>Client</p>
        </div>
    </section>
</template>