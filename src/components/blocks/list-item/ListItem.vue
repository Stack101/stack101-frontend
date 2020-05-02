<template>
  <div class="b-list-item">
    <ul>
      <li>
        <router-link to="/">
          <AppThumbnail 
            :thumbnail-class="thumbnailClass"
          />
          <div class="container">
            <FavoriteTitle
              v-if="isDetail"
              :label="favoriteTitle"
            />
            <AppStackTitle
              v-else
              :label="stackTitle"
            />
            <AppDescription 
              :label="descriptionLabel"
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
  },

  data() {
    return {
      thumbnailClass: 'medium',
      stackTitle: 'Node.js',
      favoriteTitle: 'Google',
      totalNumber: '12',
    };
  },

  computed: {
    descriptionLabel() {
      return `${this.totalNumber}개의 기업이 사용 중입니다.`;
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