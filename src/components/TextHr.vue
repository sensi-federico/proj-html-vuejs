<script>
export default {
    name: 'TextHr'
}
</script>

<template>

    <div class="bars d-flex pt-3">
        <div class="bar-short me-2"></div>
        <div class="bar-long"></div>
    </div>

</template>

<style lang="scss">
.bars {
    .bar-short {
        height: 5px;
        width: 15px;
        background-color: #00D9A6;
        border-radius: 2rem;
    }

    .bar-long {
        height: 5px;
        width: 60px;
        background-color: #00D9A6;
        border-radius: 2rem;
    }
}
</style>