<template>
  <div class="e-stack-card">
    <AppThumbnail
      :thumbnail-class="thumbnailSize"
      :thumbnail-img-src="logo"
    />
    <AppStrong
      :strong-class="strongClass"
      :label="title"
    />
  </div>
</template>

<script>
import AppThumbnail from "@/components/elements/AppThumbnail.vue";
import AppStrong from "@/components/elements/AppStrong.vue";

export default {
	components: {
		AppThumbnail,
		AppStrong,
	},

	props: {
		title: {
			type: String,
			default: '',
    },
    logo: {
      type: String,
			default: null,
    },
	},

	data() {
		return {
			thumbnailSize: 'small',
			strongClass: "card",
		};
	},
};
</script>

<style lang="scss" scoped>
.e-stack-card {
	display: grid;
	justify-items: center;
	align-items: center;
	width: 104px;
	height: 84px;
	background-color: #fff;
	border-radius: 10px;

	& > *:first-child {
		align-self: end;
	}
	& > *:last-child {
		align-self: start;
	}
}
@media screen and (min-width: 1200px) {
	.e-stack-card {
		row-gap: 8px;
		width: 150px;
		height: 128px;
	}
}
</style>
