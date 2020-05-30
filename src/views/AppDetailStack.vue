<template>
  <main class="v-detail-stack">
    <DetailInfo
      v-if="stackDetails"
      :item="stackDetails"
      :title="stackDetails.name"
      :description="stackDetails.description"
      :logo="stackDetails.logo"
    />
    <div class="v-company-list">
      <CompanyList
        v-if="stackDetails"
        :list="stackDetails.companies"
        :is-detail="isDetail"
      />
    </div>
  </main>
</template>

<script>
import DetailInfo from '@/components/layout/detail-info/DetailInfo.vue';
import CompanyList from '@/components/layout/company-list/CompanyList.vue';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    DetailInfo,
    CompanyList,
  },

	data() {
		return {
      isDetail: true,
		};
  },

  computed: {
    routeId() {
			const pathArr = this.$route.path.split('/');
			const id = pathArr[pathArr.length - 1];
			return id;
    },
    ...mapState('stack', ['stackDetails']),
  },

  created() {
    this.setTargetStack(this.routeId);
  },

	methods: {
    ...mapActions({ 'setTargetStack': 'stack/setTargetStack' }),
  },
};
</script>

<style lang="scss" scoped>
.v-company-list {
	background-color: #fff;
	padding: 0 20px;
}
</style>
