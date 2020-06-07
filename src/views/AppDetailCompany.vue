<template>
  <main
    v-if="companyDetails"
    class="v-detail-company"
  >
    <DetailInfo
      :id="companyDetails._id"
      :title="companyDetails.name"
      :description="companyDetails.description"
      :logo="companyDetails.logo"
      :cnt="companyDetails.cnt"
      :random-stack="randomStack"
    />
    <CompanyStackList
      :stacks="companyDetails.stacks"
    />
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
    ...mapState('company', ['companyDetails']),
		routeId() {
			const pathArr = this.$route.path.split('/');
			const id = pathArr[pathArr.length - 1];
			return id;
    },
    randomStack() {
      const stacks = this.companyDetails.stacks;
      const length = this.companyDetails.stacks.length;
      const randomNum = Math.floor(Math.random() * length);
      return stacks[randomNum].name;
    },
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
