<template>
  <header class="l-search-header">
    <SearchForm @search-msg="ascSearchMsg" />
    <AppButton
      class="l-search-btn--cancel"
      :class="cancelClass"
      :label="btnText"
      @button-click="closeSearch"
    />
  </header>
</template>

<script>
import SearchForm from '@/components/blocks/search-form/SearchForm.vue';
import AppButton from '@/components/elements/AppButton.vue';

export default {
  components: {
    SearchForm,
    AppButton,
  },

  data() {
    return {
      cancelClass: 'e-button--cancel',
      btnText: '취소',
    };
  },
  methods: {
    closeSearch() {
      this.$emit('close-search');
    },
		ascSearchMsg(msg) {
			this.$emit('search-msg', msg);
		},
  },
};
</script>

<style lang="scss" scoped>
.l-search-header {
  display: grid;
  grid-template-columns: 1fr 50px;
}
.l-search-btn--cancel {
  justify-self: end;
}
</style>
