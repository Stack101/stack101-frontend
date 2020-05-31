<template>
  <main
    v-if="companyDetails"
    class="v-detail-company"
  >
    <DetailInfo
      :title="companyDetails.name"
      :description="companyDetails.description"
      :logo="companyDetails.logo"
      :item="companyDetails"
    />
    <CompanyStackList :stacks="companyDetails.stacks" />
  </main>
</template>

<script>
import DetailInfo from '@/components/layout/detail-info/DetailInfo.vue';
import CompanyStackList from '@/components/layout/company-stack-list/CompanyStackList.vue';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    DetailInfo,
    CompanyStackList,
  },

	computed: {
		routeId() {
			const pathArr = this.$route.path.split('/');
			const id = pathArr[pathArr.length - 1];
			return id;
    },
    ...mapState('company', ['companyDetails']),
	},

	created() {
    this.setTargetCompany(this.routeId);
	},

	methods: {
    ...mapActions({ 'setTargetCompany': 'company/setTargetCompany' }),
	},
};
</script>

<style lang="scss" scoped>

</style>
