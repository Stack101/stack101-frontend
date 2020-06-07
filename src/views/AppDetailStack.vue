<template>
  <main class="v-detail-stack">
    <DetailInfo
      v-if="stackDetails"
      :id="stackDetails._id"
      :cnt="stackDetails.cnt"
      :title="stackDetails.name"
      :description="stackDetails.description"
      :logo="stackDetails.logo"
    />
    <div class="v-company-list">
      <CompanyList
        v-if="stackDetails"
        :list="stackDetails.companies"
        :detail-type="detailType"
        :stack-name="stackDetails.name"
      />
    </div>
  </main>
</template>

<script>
import DetailInfo from '@/components/layout/detail-info/DetailInfo.vue';
import CompanyList from '@/components/layout/company-list/CompanyList.vue';
import { mapMutations, mapActions, mapState } from 'vuex';

export default {
  components: {
    DetailInfo,
    CompanyList,
  },

	data() {
		return {
      detailType: 'stack',
		};
  },

  computed: {
    routeId() {
			const pathArr = this.$route.path.split('/');
			const id = pathArr[pathArr.length - 1];
			return id;
    },
    ...mapState('stack', ['stackDetails']),
    ...mapState('bookmark', ['stacks', 'companies']),
    // result() {
    //   if (this.stackDetails) {
    //     this.stackDetails.companies.forEach(el => {
    //       el._id === 
    //     })
    //   }
    // }
  },

  created() {
    this.setTargetStack(this.routeId);
  },

	methods: {
    ...mapActions({ 'setTargetStack': 'stack/setTargetStack' }),
    ...mapMutations({ 'initStacks': 'bookmark/INIT_STACKS' }),
    ...mapMutations({ 'initCompanies': 'bookmark/INIT_COMPANIES' }),
  },
};
</script>

<style lang="scss" scoped>
.v-company-list {
	background-color: #fff;
	padding: 0 20px;
}
</style>
