<template>
  <section class="v-detail-stack">
    <AppThumbnail
      :thumbnail-class="thumbnailSize"
      :thumbnail-img-src="logo"
    />
    <FavoriteTitle
      class="v-detail-stack--title"
      :title="title"
      :strong-class="strongClass"
      :img-src="favoriteIcon"
      @click-favorite="setClickFavorite"
    />
    <AppDescription :label="description" />
  </section>
</template>

<script>
import AppThumbnail from '@/components/elements/AppThumbnail.vue';
import FavoriteTitle from '@/components/blocks/favorite-title/FavoriteTitle.vue';
import AppDescription from '@/components/elements/AppDescription.vue';
import { mapMutations } from 'vuex';

export default {
  components: {
    AppThumbnail,
    FavoriteTitle,
    AppDescription,
  },

	props: {
		title: {
			type: String,
			default: '',
		},
		description: {
			type: String,
			default: '',
		},
		item: {
			type: Object,
			default: undefined,
    },
    logo: {
      type: String,
      default: null,
    },
	},

  data() {
    return {
      thumbnailSize: 'medium',
			strongClass: 'title',
			isFavorite: false,
    };
  },

	computed: {
		favoriteIcon() {
			if (this.isFavorite) {
				return 'ic_favorite_on_mobile.svg';
			} else {
				return 'ic_favorite_off_mobile.svg';
			}
		},
		detailPath() {
			const pathArr = this.$route.path.split('/');
			const path = pathArr[1];
			return path;
		},
	},

	methods: {
		...mapMutations({ 'setStacks': 'bookmark/SET_STACKS' }),
		...mapMutations({ 'setCompanies': 'bookmark/SET_COMPANIES' }),
		setClickFavorite() {
			if (this.isFavorite) {
				this.isFavorite = false;
			} else {
				this.isFavorite = true;
        this.saveOnStore();
			}
		},
		saveOnStore() {
			if (this.detailPath === 'stack') {
				this.setStacks(this.item);
			} else {
				this.setCompanies(this.item);
			}
		},
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
