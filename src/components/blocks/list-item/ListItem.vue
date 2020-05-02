<template>
  <div class="b-list-item">
    <ul>
      <li
				v-for="(item, index) in itemList"
				:key="index"
			>
        <router-link :to="itemPath(item._id.$oid)">
          <AppThumbnail
            :thumbnail-class="thumbnailClass"
          />
          <div class="container">
            <FavoriteTitle
              v-if="isDetail"
              :title="item.name"
            />
            <AppStackTitle
              v-else
              :label="item.name"
            />
            <AppDescription
              :label="descriptionLabel(item)"
            />
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import AppThumbnail from '@/components/elements/AppThumbnail.vue';
import AppStackTitle from '@/components/elements/AppStackTitle.vue';
import AppDescription from '@/components/elements/AppDescription.vue';
import FavoriteTitle from '@/components/blocks/favorite-title/FavoriteTitle.vue';

export default {
  components: {
    AppThumbnail,
    AppStackTitle,
    AppDescription,
    FavoriteTitle,
  },

  props: {
    isDetail: {
      type: Boolean,
      default: false,
    },

		itemList: {
			type: Array,
			default: undefined,
		},
  },

  data() {
    return {
      thumbnailClass: 'medium',
    };
  },

  methods: {
    descriptionLabel(item) {
			const isStackPath = this.$route.path.includes('stack');
			if (!isStackPath) {
				const totalNum = item.companies.length;
				return `${totalNum}개의 기업이 사용 중입니다.`;
			} else {
				return `${item.name}외 ${item.cnt}개 사용 중입니다.`;
			}
    },

		itemPath(id) {
			const isStackPath = this.$route.path.includes('stack');
			if (isStackPath) {
				return `/company/${id}`;
			} else {
				return `/stack/${id}`;
			}
		},
  },
};
</script>

<style lang="scss" scoped>
.b-list-item {

  ul li {
    position: relative;
    padding: 24px 0;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0.5px;
      background-color: #D6D6D6;
    }

    > a {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  .container {
    padding-left: 13px;
  }
}
</style>
