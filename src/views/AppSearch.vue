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
          v-if="!isSearchLoaded"
          :description-label="noResultLabel"
        />
        <SearchResult
          v-else
          :search-keyword="msg"
          :stack-search-list="searchResult.stackResult"
          :company-search-list="searchResult.companyResult"
        />
      </section>
    </div>
  </div>
</template>

<script>
import SearchHeader from '@/components/layout/search-header/SearchHeader.vue';
import SearchNoResult from '@/components/layout/search-no-result/SearchNoResult';
import RecentSearch from '@/components/layout/recent-search/RecentSearch';
import SearchResult from '@/components/layout/search-result/SearchResult';
import searchApi from '@/api/search.api.js';
// import debounce from 'lodash.debounce';

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
			searchResult: '',
			isSearchLoaded: false,
			searchList: [],
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
	},

	watch: {
		$route() {
			this.closeSearch();
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
			this.setSearchResult(msg);
			this.saveSearch(msg);
		},
		async setSearchResult(msg) {
			this.isSearchLoaded = false;
			const { item, isError } = await searchApi.search(msg);
			if (isError) {
				this.searchResult = '검색 결과가 없습니다.';
			} else {
				this.searchResult = item[0];
				this.isSearchLoaded = true;
			}
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
				arr.sort((a, b) => {
					return b.key - a.key;
				});
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
