<script>
export default {
    name: 'TextHr'
}
</script>

<template>

    <div class="bars d-flex pt-3 pb-4">
        <div class="bar-short"></div>
        <div class="bar-long"></div>
    </div>

</template>

<style lang="scss">
.bars {
    .bar-short {
        height: 5px;
        width: 12px;
        background-color: #00D9A6;
        border-radius: 2rem;
        margin-right: .3rem;
    }

    .bar-long {
        height: 5px;
        width: 40px;
        background-color: #00D9A6;
        border-radius: 2rem;
    }
}
</style>