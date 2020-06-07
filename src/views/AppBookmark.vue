<template>
  <section class="l-bookmark">
    <AppTitle
      class="l-bookmark-title"
      :label="titleLabel"
    />
    <BookmarkTab @active-tab="setActiveTab" />
    <div class="l-bookmark-list">
      <StackResult
        v-show="activeTab === '스택'"
        :stack-list="stacks"
      />
      <CompanyList
        v-show="activeTab === '회사'"
        :list="companies"
      />
    </div>
  </section>
</template>

<script>
import AppTitle from '@/components/elements/AppTitle';
import BookmarkTab from '@/components/blocks/bookmark-tab/BookmarkTab.vue';
import StackResult from '@/components/blocks/stack-result/StackResult';
import CompanyList from '@/components/layout/company-list/CompanyList';
import { mapMutations, mapState } from 'vuex';

export default {
	components: {
		CompanyList,
		StackResult,
		AppTitle,
		BookmarkTab,
	},

	data() {
		return {
      titleLabel: '관심 목록',
      activeTab: '스택',
      isDetail: true,
      isMain: true,
		};
  },

  computed: {
    ...mapState('bookmark', ['stacks', 'companies']),
    ...mapState('bookmark', ['stacks', 'companies']),
  },

  created() {
    this.initStacks();
    this.initCompanies();
    
  },
  
  methods: {
    ...mapMutations({ 'initStacks': 'bookmark/INIT_STACKS' }),
    ...mapMutations({ 'initCompanies': 'bookmark/INIT_COMPANIES' }),
    setActiveTab(activeTab) {
      this.activeTab = activeTab;
    },
  },
};
</script>

<style lang="scss" scoped>
.l-bookmark {
	background-color: #fff;
}

.l-bookmark-title {
	padding: 17px 20px 26px 20px;
}

.l-bookmark-list {
  padding: 0 20px;
}
</style>
