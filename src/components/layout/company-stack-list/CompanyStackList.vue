<template>
  <section class="l-company-stack-list">
    <CompanyStackForm
      v-for="(value, index) in stackList"
      :key="`stack-${index}`"
      :title="value.divisionType"
      :cnt="value.item.length"
      :cards="value.item"
    />
  </section>
</template>

<script>
import CompanyStackForm from '../../blocks/company-stack-form/CompanyStackForm';

export default {
  components: {
		CompanyStackForm,
  },

	props: {
		stacks: {
			type: Array,
			default: null,
		},
	},

	data() {
		return {
			divisions: ['Application', 'Design'],
			cardOpenInfo: { status: true, type: '' },
		};
	},

	computed: {
		developerStacks() {
			const result = this.stacks.filter(el => {
				return el.job_type === 'developer';
			});
			return result;
		},
		designerStacks() {
			const result = this.stacks.filter(el => {
				return el.job_type === 'designer';
			});
			return result;
		},
		filteredStacks() {
			const result = [];
			result.push(this.developerStacks, this.designerStacks);
			return result;
		},
		stackList() {
			const result = this.divisions.reduce((acc, curr, i) => {
				const obj = {};
				obj.divisionType = curr;
				obj.item = this.filteredStacks[i];
				acc.push(obj);
				return acc;
			}, []);
			return result;
		},
	},
};
</script>

<style lang="scss" scoped>
.l-company-stack-list {
	position: relative;
	background-color: #fff;
	margin-top: 16px;
	padding-top: 10px;
	padding-bottom: 46px;
}
</style>
