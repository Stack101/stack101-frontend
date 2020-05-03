<template>
  <div class="b-favorite-title">
    <AppStrong
			:label="title"
			:strong-class="strongClass"
		/>
    <span>⭐️</span>
  </div>
</template>

<script>
import AppStrong from '@/components/elements/AppStrong.vue';

export default {
  components: {
		AppStrong,
  },

	props: {
		title: {
			type: String,
			default: undefined,
		},
		strongClass: {
			type: String,
			default: 'default',
		},
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
