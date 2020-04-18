<template>
  <form class="b-search-form">
    <AppInput
      v-show="searchActive"
      class="b-search-form__input"
      :type="type"
      :placeholder="placeholder"
    />
    <AppIcon
      :icon-class="searchIcon"
      @click.native="activateSearch"
    />
  </form>
</template>

<script>
import AppIcon from '@/components/elements/AppIcon.vue';
import AppInput from '@/components/elements/AppInput.vue';

export default {
  components: {
    AppIcon,
    AppInput,
  },

  data() {
    return {
      searchIcon:'gg-search',
      type: 'string',
      placeholder: 'test',
      searchActive: false,
    };
  },

  methods: {
    activateSearch() {
      !this.searchActive ? this.searchActive = true : this.searchActive = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.b-search-form {
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: flex-end;

  &__input {
    position: fixed;
    width: calc(100% - 80px);
    background-color: black;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>


