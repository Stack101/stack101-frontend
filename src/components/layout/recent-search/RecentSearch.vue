<template>
  <section class="l-recent-search">
    <AppTitle :label="titleLabel" />
    <ul class="l-search-list">
      <SearchTitleBar
        v-for="item in searchList"
        :key="item.key"
        class="l-search-item"
        :item-key="item.key"
        :search-title="item.value"
        @delete-search="deleteSearch"
      />
    </ul>
  </section>
</template>

<script>
import AppTitle from '@/components/elements/AppTitle';
import SearchTitleBar from '@/components/blocks/search-title-bar/SearchTitleBar';

export default {
	components: {
		AppTitle,
		SearchTitleBar,
	},

	props: {
		searchList: {
			type: Array,
			default: null,
		},
	},

	data() {
		return {
			titleLabel: '최근 검색어',
		};
	},

	methods: {
		deleteSearch(itemKey) {
			this.$emit('delete-search', itemKey);
		},
	},
};
</script>

<style lang="scss" scoped>
.l-recent-search {
	padding: 26px 0;
}

.l-search-list {
	padding: 16px 0;
}

.l-search-item {
	margin-bottom: 12px;
}
</style>
