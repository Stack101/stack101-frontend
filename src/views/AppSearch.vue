<template>
  <div class="v-search">
    <div class="v-search-wrapper">
      <SearchHeader
				@close-search="closeSearch"
				@search-msg="getMsg"
			/>
			<section v-if="!msg">
				<SearchNoResult v-if="!isRecentSearch" />
				<RecentSearch
					v-else
					:search-list="searchList"
					@delete-search="deleteSearch"
				/>
			</section>
			<section v-else>
				<SearchNoResult
					v-if="!api"
					:description-label="noResultLabel"
				/>
				<SearchResult
					v-else
					:search-keyword="msg"
					:stack-search-list="stackResult"
					:company-search-list="companyResult"
				/>
			</section>
    </div>
  </div>
</template>

<script>
import SearchHeader from '@/components/layout/search-header/SearchHeader.vue';
import SearchNoResult from "@/components/layout/search-no-result/SearchNoResult";
import RecentSearch from "@/components/layout/recent-search/RecentSearch";
import SearchResult from "@/components/layout/search-result/SearchResult";
import mockStack from '@/mockStack.js';
import mockCompany from '@/mockCompany.js';

export default {
  components: {
		RecentSearch,
    SearchHeader,
		SearchNoResult,
		SearchResult,
  },

	data() {
		return {
			msg: '',
			noResultLabel: '검색 결과가 없습니다.',
			searchList: [],
			stackResult: [],
			companyResult: [],
		};
	},

	computed: {
		isRecentSearch() {
			if (this.searchList.length) {
				return true;
			} else {
				return false;
			}
		},
		api() {
			const stackLength = this.stackResult.length;
			const companyLength = this.companyResult.length;
			if (stackLength > 0 || companyLength > 0) {
				return true;
			} else {
				return false;
			}
		},
	},

	created() {
		this.initSearchList();
	},

	beforeDestroy() {
		this.saveSearchInLocal();
	},

  methods: {
    closeSearch() {
      this.$emit('close-search');
    },
		getMsg(msg) {
			this.msg = msg;
			this.setSearchResult();
			this.saveSearch(msg);
		},
		saveSearch(msg) {
			const length = this.searchList.length;
			const item = { key: length, value: msg };
			this.searchList.push(item);
		},
		initSearchList() {
			const item = window.localStorage.getItem('search-list');
			if (item) {
				const arr = JSON.parse(item);
				this.searchList = arr;
			}
		},
		saveSearchInLocal() {
			const item = JSON.stringify(this.searchList);
			window.localStorage.setItem('search-list', item);
		},
		deleteSearch(itemKey) {
			const index = this.searchList
				.findIndex(el => (el.key === itemKey));
			this.searchList.splice(index, 1);
		},
		setSearchResult() {
			this.stackResult = this.getSearchResult(mockStack);
			this.companyResult = this.getSearchResult(mockCompany);
		},
		getSearchResult(target) {
			const result = target.filter(el => {
				return el.name.toLowerCase() === this.msg.toLowerCase();
			});
			return result;
		},
  },
};
</script>

<style lang="scss" scoped>
.v-search {
  position: fixed;
  background-color: white;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  top: 0;
  left: 0;
  &-wrapper {
    padding: 26px 20px;
  }
}
</style>
