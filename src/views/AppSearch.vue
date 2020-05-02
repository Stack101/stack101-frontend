<template>
  <div class="v-search">
    <div class="v-search-wrapper">
      <SearchHeader @close-search="closeSearch" />
    </div>
  </div>
</template>

<script>
import SearchHeader from '@/components/layout/search-header/SearchHeader.vue';
export default {
  components: {
    SearchHeader,
  },
  methods: {
    closeSearch() {
      this.$emit('close-search');
    },
  },
};
</script>

<style lang="scss" scoped>
.v-search {
  position: fixed;
  background-color: white;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  top: 0;
  left: 0;
  &-wrapper {
    padding: 26px 20px;
  }
}
</style>
