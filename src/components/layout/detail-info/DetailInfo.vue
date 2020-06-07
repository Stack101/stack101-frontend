<template>
  <section class="v-detail-stack">
    <AppThumbnail
      :thumbnail-class="thumbnailSize"
      :thumbnail-img-src="logo"
    />
    <FavoriteTitle
      class="v-detail-stack--title"
      :item="favoriteInfo"
      :strong-class="strongClass"
      :type="infoType"
      :random-stack="randomStack"
      :cnt="cnt"
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
			default: '',
		},
		description: {
			type: String,
			default: '',
		},
		cnt: {
			type: Number,
			default: 0,
    },
    logo: {
      type: String,
      default: null,
    },
    id: {
      type: String,
      default: '',
    },
    randomStack: {
      type: String,
      default: '',
    },
	},

  data() {
    return {
      thumbnailSize: 'medium',
			strongClass: 'title',
    };
  },

	computed: {
		detailPath() {
			const pathArr = this.$route.path.split('/');
			const path = pathArr[1];
			return path;
    },
    infoType() {
			const pathArr = this.$route.path.split('/');
			const id = pathArr[1];
			return id;
    },
    favoriteInfo() {
      const obj = {
        id: this.id,
        name: this.title,
        description: this.description,
        cnt: this.cnt,
        logo: this.logo,
      };
      return obj;
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
@media screen and (min-width: 1200px) {
	.v-detail-stack {
		border-bottom: 3px solid #414143;

		.e-thumbnail--medium {
			margin-right: 22px;
			float: left;
		}
		.v-detail-stack--title {
			margin-top: 0;
		}

		&::after {
			content: '';
			display: block;
			clear: both;
		}
	}

}
</style>
