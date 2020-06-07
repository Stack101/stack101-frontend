<template>
  <div class="b-list-item">
    <ul>
      <li
        v-for="(item, index) in itemList"
        :key="index"
      >
        <router-link
          :to="itemPath(item._id || item.id)"
        >
          <AppThumbnail
            :thumbnail-class="thumbnailClass"
            :thumbnail-img-src="item.logo"
          />
          <div class="container">
            <FavoriteTitle
              v-if="detailType === 'stack'"
              :item="item"
              :random-stack="stackName"
              :type="type"
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
    detailType: {
      type: String,
      default: 'company',
    },
		isSearchResult: {
			type: Boolean,
			default: false,
		},
		itemList: {
			type: Array,
			default: undefined,
    },
    type: {
      type: String,
      default: 'stack',
    },
    stackName: {
      type: String,
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
			let result;
      if (this.type === 'stack') {
        result = `${item.cnt}개의 기업이 사용 중입니다.`;
      }
      if (this.type === 'company') {
        const stackName = this.stackName || item.stackName;
        result = `${stackName} 외 ${item.cnt}개 사용 중입니다.`;
      }
			return result;
    },
    itemPath(id) {
      return `/${this.type}/${id}`;
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

@media screen and (min-width: 1200px) {
  .b-list-item { 
    ul li {
      padding: 40px 0 30px;
    }

    .container {
      padding-left: 19px;
    }
  }
}
</style>
