<template>
  <Header class="l-app-header">
    <div class="l-header-start">
      <AppIcon
        v-show="isDetailView"
        :icon-class="backIcon"
        @click.native="backPage"
      />
    </div>

    <div class="l-header-center">
      <h2 v-show="isDetailView">
        {{ headerTitle }}
      </h2>
    </div>

    <div class="l-header-end">
      <AppIcon
        class="l-header-icon"
        :icon-class="searchIcon"
        @click.native="openSearch"
      />
      <AppIcon
        class="l-header-icon"
        :icon-class="menuIcon"
      />
    </div>
  </Header>
</template>

<script>
import AppIcon from '@/components/elements/AppIcon.vue';

export default {
  components: {
    AppIcon,
  },

  data() {
    return {
      menuIcon: 'gg-bookmark',
      searchIcon:'gg-search',
      backIcon: 'gg-chevron-left',
    };
  },

  computed: {
    isDetailView() {
      const condition = this.checkPath('stack') || this.checkPath('company');
      return condition ? true : false;
    },
		currentPath() {
			return this.$route.path.split('/')[1];
		},
    headerTitle() {
      let title = '';
      switch (this.currentPath) {
        case 'stack':
          title = '기술 스택 상세';
          break;
        case 'company':
          title = '회사 상세';
          break;
        default:
          break;
      }
      return title;
    },
  },

  methods: {
    openSearch() {
      this.$emit('open-search');
    },
    backPage() {
      this.$router.go(-1);
    },
		checkPath(str) {
			return this.$route.path.includes(str);
		},
  },
};
</script>

<style lang="scss" scoped>
.l-app-header {
  display: grid;
  grid-template-columns: 64px 1fr 64px;
  align-items: center;
  justify-items: center;
  padding: 32px 20px 12px 20px;
  background-color: #FFF;
}

.l-header-start {
  justify-self: start;
}

.l-header-end {
  display: grid;
  grid-template-columns: 32px 32px;
}

.l-header-icon {
  justify-self: center;
  align-self: center;
}
</style>
