<template>
  <form
    class="b-search-form"
    @submit.prevent="ascSearchMsg"
  >
    <div class="b-search-bar">
      <AppIcon
        class="b-search-icon"
        :img-src="searchIcon"
      />
      <input
        v-model="searchMsg"
        class="b-search-form__input"
        :type="type"
        :placeholder="placeholder"
      >
      <AppIcon
        v-show="isTyping"
        class="b-search-icon"
        :img-src="closeIcon"
        @click.native="initMsg"
      />
    </div>
  </form>
</template>

<script>
import AppIcon from '@/components/elements/AppIcon.vue';

export default {
  components: {
    AppIcon,
  },

  data() {
    return {
      searchIcon:'ic_search.svg',
      type: 'string',
      placeholder: '스택/기업을 입력해주세요.',
      closeIcon: 'ic_search_delete.svg',
      searchMsg: '',
    };
  },

  computed: {
    isTyping() {
      if (this.searchMsg) {
        return true;
      } else {
        return false;
      }
    },
  },

  methods: {
    initMsg() {
      this.searchMsg = '';
    },
		ascSearchMsg() {
			this.$emit('search-msg', this.searchMsg);
		},
  },
};
</script>

<style lang="scss" scoped>
.b-search-form {
	width: 95%;

  &__input {
    width: 100%;
    border: none;
    background-color: #F3F3F3;
    margin: 0;
    padding: 0;
  }
}
.b-search-bar {
  display: grid;
  grid-template-columns: 32px 1fr 32px;
  align-items: center;
  background-color: #F3F3F3;
  height: 100%;
  border-radius: 4px;
}
.b-search-icon {
	width: 32px;
	height: 32px;
}
</style>
