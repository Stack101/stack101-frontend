<template>
  <div class="b-favorite-title">
    <AppStrong
      :label="title"
      :strong-class="strongClass"
    />
    <AppIcon
      :img-src="imgSrc"
      :icon-class="iconClass"
      @click.native="$emit('click-favorite')"
    />
  </div>
</template>

<script>
import AppStrong from '@/components/elements/AppStrong.vue';
import AppIcon from '@/components/elements/AppIcon.vue';

export default {
  components: {
		AppStrong,
		AppIcon,
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
		imgSrc: {
			type: String,
			default: 'ic_list_favorite_off_mobile.svg',
		},
	},

	data() {
		return {
			iconClass: 'bookmark',
		};
	},
};
</script>

<style lang="scss" scoped>
.b-favorite-title {
  display: flex;
  align-items: center;
}
</style>
