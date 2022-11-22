<script>
import { store } from '../store.js'

export default {
    name: 'ServicesCard',
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <div class="col" v-for="(card, i) in store.servicesCards">
        <div class="my-card bg-light">

            <i :class="store.servicesCards[i].icon"></i>
            <h4>{{ store.servicesCards[i].title }}</h4>
            <p class="text-muted">
                {{ store.servicesCards[i].text }}
            </p>

        </div>
    </div>

</template>

<style lang="scss">
.my-card {
    padding: 2rem;
    border-radius: .5rem;
    box-shadow: 0 2px 4px 0 rgba(152, 150, 150, 0.2), 0 3px 10px 0 rgba(146, 144, 144, 0.19);

    i {
        font-size: 40px;
        color: #00D9A6;
    }

    h4 {
        padding-top: 1.5rem;
        text-transform: capitalize;
    }

    p {
        font-size: small;
        padding-top: .5rem;
    }
}
</style>