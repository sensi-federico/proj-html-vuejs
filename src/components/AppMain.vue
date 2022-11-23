<script>
import JumbotronSlider from './layouts/JumbotronSlider.vue';
import ServicesCards from './layouts/ServicesCards.vue';
import SectionServices from './layouts/SectionServices.vue'
import SectionMissions from './layouts/SectionMissions.vue';
import SectionProjects from './layouts/SectionProjects.vue';
import SectionShowcase from './layouts/SectionShowcase.vue';
import SectionPacks from './layouts/SectionPacks.vue';
import SectionComment from './layouts/SectionComment.vue';
import SectionNews from './layouts/SectionNews.vue';
import SectionContact from './layouts/SectionContact.vue';
import TextHr from './layouts/TextHr.vue';
import { store } from '../store.js'

export default {
    name: 'AppMain',
    components: {
        JumbotronSlider,
        ServicesCards,
        TextHr,
        SectionServices,
        SectionMissions,
        SectionProjects,
        SectionShowcase,
        SectionPacks,
        SectionComment,
        SectionNews,
        SectionContact
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <main id="site_main">
        <!-- jumbotron slider -->
        <JumbotronSlider />

        <!-- services -->
        <SectionServices />

        <!-- missons -->
        <SectionMissions />

        <!-- projects -->
        <SectionProjects />

        <!-- showcase -->
        <SectionShowcase />

        <!-- packs - offers -->
        <SectionPacks />

        <!-- comment -->
        <SectionComment />

        <!-- latest news -->
        <SectionNews />

        <!-- contact -->
        <SectionContact />

    </main>
    <!-- #site_main -->

</template>

<style lang="scss">

</style>