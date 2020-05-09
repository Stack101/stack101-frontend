<template>
  <main
		class="v-detail-company"
		v-if="isCompanyLoaded"
	>
    <DetailInfo
			:title="companyInfo.name"
			:description="companyInfo.description"
		/>
    <CompanyStackList :stacks="companyInfo.stacks" />
  </main>
</template>

<script>
import DetailInfo from '@/components/layout/detail-info/DetailInfo.vue';
import CompanyStackList from '@/components/layout/company-stack-list/CompanyStackList.vue';
import stackApi from '@/api/company.api.js';

export default {
  components: {
    DetailInfo,
    CompanyStackList,
  },

	data() {
		return {
			isCompanyLoaded: false,
			companyInfo: '',
		};
	},

	computed: {
		routeId() {
			const pathArr = this.$route.path.split('/');
			const id = pathArr[pathArr.length - 1];
			return id;
		},
	},

	created() {
		this.fetchTargetCompany();
	},

	methods: {
		async fetchTargetCompany() {
			this.isCompanyLoaded = false;
			const { item } = await stackApi.getTargetCompany(this.routeId);
			this.companyInfo = item[0];
			this.isCompanyLoaded = true;
		},
	},
};
</script>

<style lang="scss" scoped>

</style>
