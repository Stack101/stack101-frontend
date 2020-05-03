<template>
  <main class="v-detail-stack">
    <DetailInfo
			:title="stack.name"
			:description="stack.description"
		/>
		<div class="v-company-list">
			<CompanyList
				:list="stack.companies"
				:is-detail="isDetail"
			/>
		</div>
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

	data() {
		return {
			isDetail: true,
		};
	},

	computed: {
		stack() {
			const id = this.getRouteId();
			const result = mockStack.filter(el => {
				return el._id.$oid === id;
			});
			return result[0];
		},
	},

	methods: {
		getRouteId() {
			const pathArr = this.$route.path.split('/');
			const id = pathArr[pathArr.length - 1];
			return id;
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
