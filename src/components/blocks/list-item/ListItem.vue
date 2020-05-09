<template>
  <div class="b-list-item">
    <ul>
      <li
				v-for="(item, index) in itemList"
				:key="index"
			>
        <router-link :to="itemPath(item._id, item)">
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
		isMain: {
			type: Boolean,
			default: false,
		},
    isDetail: {
      type: Boolean,
      default: false,
    },
		isSearchResult: {
			type: Boolean,
			default: false,
		},
		itemList: {
			type: Array,
			default: undefined,
		},
		routeType: {
			type: String,
			default: '',
		},
  },

  data() {
    return {
      thumbnailClass: 'medium',
    };
  },

  methods: {
    descriptionLabel(item) {
			let result;
			let totalNum;
			switch (true) {
				case this.isMain:
					totalNum = item.cnt;
					result = `${totalNum}개의 기업이 사용 중입니다.`;
					break;
				case this.isDetail:
					result = `${item.name} 외 ${item.cnt}개 사용 중입니다.`;
					break;
				default:
					result = '임시 텍스트';
					break;
			}
			return result;
    },
		itemPath(id, item) {
			const path = this.$route.path.split('/')[1];
			let result = '';
			if (item.repStack) {
				result = `/company/${id}`;
			} else if (path === 'stack') {
				result = `/company/${id}`;
			} else {
				result = `/stack/${id}`;
			}
			return result;
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
