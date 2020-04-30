<template>
  <div id="app">
    <AppHeader @open-search="changeSearchStatus" />
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
import AppHeader from '@/components/layout/app-header/AppHeader.vue';
import AppSearch from '@/views/AppSearch.vue';

export default {
  components: {
    AppHeader,
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
