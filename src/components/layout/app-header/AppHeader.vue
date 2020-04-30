<template>
  <Header class="l-app-header">
    <div class="l-header-start">
      <div v-show="isDetail">
        test
      </div>
    </div>

    <div class="l-header-center">
      <div v-show="isDetail">
        test2
      </div>
    </div>

    <div class="l-header-end">
      <AppIcon
        class="l-header-icon"
        :icon-class="searchIcon"
        @click.native="openSearch"
      />
      <AppIcon
        class="l-header-icon"
        :icon-class="menuIcon"
      />
    </div>
  </Header>
</template>

<script>
import AppIcon from '@/components/elements/AppIcon.vue';
export default {
  components: {
    AppIcon,
  },
  props: {
    isDetails: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      menuIcon: 'gg-menu',
      searchIcon:'gg-search',
      backIcon: 'gg-chevron-left',
      isDetail: false,
    };
  },
  methods: {
    openSearch() {
      this.$emit('open-search');
    },
  },
};
</script>

<style lang="scss" scoped>
.l-app-header {
  display: grid;
  grid-template-columns: 64px 1fr 64px;
  align-items: center;
  justify-items: center;
  padding: 32px 20px 12px 20px;
  background-color: #FFF;
}
.l-header-end {
  display: grid;
  grid-template-columns: 32px 32px;
}
.l-header-icon {
  justify-self: center;
  align-self: center;
}
</style>
