<template>
  <div class="b-favorite-title">
    <AppTitle
      :label="titleLabel"
    />
    <span>⭐️</span>
  </div>
</template>

<script>
import AppTitle from '@/components/elements/AppTitle.vue';

export default {
  components: {
    AppTitle,
  },

  data() {
    return {
      titleLabel: 'Ruby',
    };
  },
};
</script>

<style lang="scss" scoped>
.b-favorite-title {
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 7px;
  }
}
</style>
