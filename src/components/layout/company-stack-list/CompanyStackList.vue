<template>
  <section class="l-company-stack-list">
    <StackToggleBar
			v-for="(value, index) in division"
			:key="`division-${index}`"
			:title="value.name"
			:cnt="value.totalCnt"
		/>
  </section>
</template>

<script>
import StackToggleBar from '@/components/blocks/stack-toggle-bar/StackToggleBar.vue';

export default {
  components: {
    StackToggleBar,
  },

	data() {
		return {
			division: [
				{
					name: 'Application',
					totalCnt: 6,
				},
				{
					name: 'Design',
					totalCnt: 9,
				}
			],
		};
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
