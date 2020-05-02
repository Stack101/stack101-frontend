<template>
  <section class="v-detail-stack">
    <AppThumbnail
      :thumbnail-class="thumbnailSize"
      :thumbnail-img-src="thumbnailSrc"
    />
    <FavoriteTitle
			class="v-detail-stack--title"
			:title="title"
			:strong-class="strongClass"
		/>
    <AppDescription :label="description" />
  </section>
</template>

<script>
import AppThumbnail from '@/components/elements/AppThumbnail.vue';
import FavoriteTitle from '@/components/blocks/favorite-title/FavoriteTitle.vue';
import AppDescription from '@/components/elements/AppDescription.vue';

export default {
  components: {
    AppThumbnail,
    FavoriteTitle,
    AppDescription,
  },

	props: {
		title: {
			type: String,
			default: undefined,
		},

		description: {
			type: String,
			default: undefined,
		},
	},

  data() {
    return {
      thumbnailSize: 'medium',
      thumbnailSrc: 'https://hackernoon.com/drafts/yj1e929ns.png',
			strongClass: 'title',
    };
  },
};
</script>

<style lang="scss" scoped>
.v-detail-stack {
  background-color: #fff;
  padding: 32px 20px;

  &--title {
    margin-top: 15px;
    margin-bottom: 5px;
  }
}
</style>
