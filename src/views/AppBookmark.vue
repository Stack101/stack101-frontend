<script src="../store/modules/bookmark.store.js"></script>
<template>
	<section class="l-bookmark">
		<AppTitle
			class="l-bookmark-title"
			:label="titleLabel"
		/>
		<BookmarkTab />
<!--		<StackResult />-->
<!--		<CompanyList />-->
	</section>
</template>

<script>
import AppTitle from '@/components/elements/AppTitle';
import BookmarkTab from '@/components/blocks/bookmark-tab/BookmarkTab.vue';
// import StackResult from "@/components/blocks/stack-result/StackResult";
// import CompanyList from "@/components/layout/company-list/CompanyList";

export default {
	components: {
		// CompanyList,
		// StackResult,
		AppTitle,
		BookmarkTab,
	},

	data() {
		return {
			titleLabel: '관심 목록',
		};
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
</style>
