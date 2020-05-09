<template>
  <Header class="l-app-header">
    <div class="l-header-start">
      <AppIcon
        v-show="isDetailView"
				:icon-class="iconClass"
        :img-src="backIcon"
        @click.native="backPage"
      />
			<AppIcon
				v-show="isDetailView"
				:img-src="homeIcon"
				@click.native="homepage"
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
				:class="{ alone: isBookmark }"
        :img-src="searchIcon"
        @click.native="openSearch"
      />
      <AppIcon
				v-show="!isBookmark"
        class="l-header-icon"
        :img-src="bookmarkIcon"
				@click.native="openBookmark"
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
			bookmarkIcon: 'ic_favorite_off_mobile.svg',
      searchIcon:'ic_search.svg',
      backIcon: 'ic_arrow_back.svg',
			iconClass: 'arrow',
			homeIcon: 'ic_home.svg',
    };
  },

  computed: {
    isDetailView() {
			const isStack = this.checkPath('stack');
			const isCompany = this.checkPath('company');
			const isBookmark = this.checkPath('bookmark');
      const condition =  isStack || isCompany || isBookmark;
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
		isBookmark() {
			return this.currentPath === 'bookmark';
		},
  },

  methods: {
    openSearch() {
      this.$emit('open-search');
    },
    backPage() {
      this.$router.go(-1);
    },
		homepage() {
			this.$router.push('/');
		},
		checkPath(str) {
			return this.$route.path.includes(str);
		},
		openBookmark() {
			this.$router.push('/bookmark');
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
	display: grid;
	grid-template-columns: 32px 32px;
}

.l-header-end {
  display: grid;
  grid-template-columns: 32px 32px;
}

.l-header-icon {
  justify-self: center;
  align-self: center;
}

.alone {
	position: absolute;
	top: 32px;
	right: 32px;
}
</style>
