<template>
  <main class="v-detail-company">
    <DetailInfo
			:title="companyInfo.name"
			:description="companyInfo.description"
		/>
    <CompanyStackList />
  </main>
</template>

<script>
import DetailInfo from '@/components/layout/detail-info/DetailInfo.vue';
import CompanyStackList from '@/components/layout/company-stack-list/CompanyStackList.vue';
import mockCompany from '@/mockCompany.js';

export default {
  components: {
    DetailInfo,
    CompanyStackList,
  },

	computed: {
		companyInfo() {
			const id = this.$route.path.split('/')[2];
			const company = mockCompany.find(el => {
				return el._id.$oid === id;
			});
			return company;
		},
	},
};
</script>

<style lang="scss" scoped>

</style>
