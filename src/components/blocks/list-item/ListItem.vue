<template>
  <div class="b-list-item">
    <ul>
      <li>
        <a href="">
          <AppThumbnail 
            :thumbnail-class="thumbnailClass"
          />
          <div class="container">
            <AppStackTitle 
              :label="stackTitle"
            />
            <AppDescription 
              :label="totalNumber"
            />
          </div>
        </a>
      </li>
    </ul> 
  </div>
</template>

<script>
import AppThumbnail from '@/components/elements/AppThumbnail.vue';
import AppStackTitle from '@/components/elements/AppStackTitle.vue';
import AppDescription from '@/components/elements/AppDescription.vue';

export default {
  components: {
    AppThumbnail,
    AppStackTitle,
    AppDescription,
  },

  data() {
    return {
      thumbnailClass: 'medium',
      stackTitle: 'Node.js',
      totalNumber: '12',
    };
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