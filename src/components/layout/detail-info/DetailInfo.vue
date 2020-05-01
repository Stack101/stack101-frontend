<template>
  <section class="v-detail-stack">
    <AppThumbnail
      :thumbnail-class="thumbnailSize"
      :thumbnail-img-src="thumbnailSrc"
    />
    <FavoriteTitle class="v-detail-stack--title" />
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

  data() {
    return {
      thumbnailSize: 'medium',
      thumbnailSrc: 'https://hackernoon.com/drafts/yj1e929ns.png',
      description: 'A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.',
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
