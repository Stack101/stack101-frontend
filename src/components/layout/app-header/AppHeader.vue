<template>
  <Header class="l-app-header">
    <SearchForm />
    <AppIcon :icon-class="menuIcon" />
  </Header>
</template>

<script>
import SearchForm from '@/components/blocks/search-form/SearchForm.vue';
import AppIcon from '@/components/elements/AppIcon.vue';

export default {
  components: {
    AppIcon,
    SearchForm,
  },

  data() {
    return {
      menuIcon: 'gg-menu',
    };
  },
};
</script>

<style lang="scss" scoped>
.l-app-header {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-end;

  & > * {
    margin-left: 24px;
  }
}
</style>
