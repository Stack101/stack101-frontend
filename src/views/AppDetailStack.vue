<template>
  <main class="v-detail-stack">
    <DetailInfo
			:title="stack.name"
			:description="stack.description"
		/>
    <CompanyList :list="stack.companies" />
  </main>
</template>

<script>
import DetailInfo from '@/components/layout/detail-info/DetailInfo.vue';
import CompanyList from '@/components/layout/company-list/CompanyList.vue';
import mockStack from '@/mockStack.js';

export default {
  components: {
    DetailInfo,
    CompanyList,
  },

	computed: {
		stack() {
			const id = this.getTest();
			const result = mockStack.filter(el => {
				return el._id.$oid === id;
			});
			return result[0];
		},
	},

	methods: {
		getTest() {
			const pathArr = this.$route.path.split('/');
			const id = pathArr[pathArr.length - 1];
			return id;
		},
	},
};
</script>

<style lang="scss" scoped>

</style>
