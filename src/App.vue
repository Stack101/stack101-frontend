<template>
  <div id="app">
    <MainHeader @open-search="changeSearchStatus" />
    <router-view />

    <transition
      name="slide"
      mode="out-in"
    >
      <AppSearch
        v-if="onSearch"
        @close-search="changeSearchStatus"
      />
    </transition>
  </div>
</template>

<script>
import MainHeader from '@/components/layout/main-header/MainHeader.vue';
import AppSearch from '@/views/AppSearch.vue';

export default {
  components: {
    MainHeader,
    AppSearch,
  },

  data() {
    return {
      onSearch: false,
    };
  },

	methods: {
    changeSearchStatus() {
      this.onSearch = !this.onSearch;
    },
  },
};
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.7s, transform 0.3s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateY(90%);
}
</style>
