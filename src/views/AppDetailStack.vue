<template>
  <main class="v-detail-stack">
    <DetailInfo
      v-if="isStackLoaded"
      :item="stack"
      :title="stack.name"
      :description="stack.description"
      :logo="stack.logo"
    />
    <div class="v-company-list">
      <CompanyList
        v-if="isStackLoaded"
        :list="stack.companies"
        :is-detail="isDetail"
      />
    </div>
  </main>
</template>

<script>
import DetailInfo from '@/components/layout/detail-info/DetailInfo.vue';
import CompanyList from '@/components/layout/company-list/CompanyList.vue';
import stackApi from '@/api/stack.api.js';

export default {
  components: {
    DetailInfo,
    CompanyList,
  },

	data() {
		return {
      isDetail: true,
      isStackLoaded: false,
      stack: '',
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
    this.fetchTargetStack();
  },

	methods: {
    async fetchTargetStack() {
      this.isStackLoaded = false;
      const { item } = await stackApi.getTargetStack(this.routeId);
      this.stack = item[0];
      this.isStackLoaded = true;
    },
	},
};
</script>

<style lang="scss" scoped>
.v-company-list {
	background-color: #fff;
	padding: 0 20px;
}
</style>
