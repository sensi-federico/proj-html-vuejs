<script >
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import JumbotronSlider from './components/JumbotronSlider.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    JumbotronSlider
  }
}
</script>

<template>

  <AppHeader />
  <JumbotronSlider />
  <AppFooter />

</template>

<style >

</style>
