<template>
  <div id="app">
    <AppMain />
  </div>
</template>

<script>
import AppMain from '@/views/AppMain.vue';

export default {
  components: {
    AppMain,
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>