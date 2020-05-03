<template>
	<section>
		<StackResult
			v-if="isStackSearchList"
			:stackList="stackSearchList"
			:is-search-result="isSearchResult"
		/>
		<CompanyList
			v-if="isCompanySearchList"
			:list="companySearchList"
			:is-search-result="isSearchResult"
		/>
	</section>
</template>

<script>
import StackResult from "@/components/blocks/stack-result/StackResult";
import CompanyList from "@/components/layout/company-list/CompanyList";

export default {
	components: {
		StackResult,
		CompanyList,
	},

	props: {
		stackSearchList: {
			type: Array,
			default: null,
		},
		companySearchList: {
			type: Array,
			default: null,
		},
	},

	data() {
		return {
			isSearchResult: true,
		};
	},

	computed: {
		isStackSearchList() {
			return this.stackSearchList.length > 0;
		},
		isCompanySearchList() {
			return this.companySearchList.length > 0;
		},
	},
};
</script>

<style lang="scss" scoped>

</style>
