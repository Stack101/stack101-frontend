<template>
  <div class="b-stack-filter-result">
    <AppCountTitle :label="countLabel" />
    <ListItem :item-list="stackList" />
  </div>
</template>

<script>
import AppCountTitle from '@/components/elements/AppCountTitle.vue';
import ListItem from '@/components/blocks/list-item/ListItem.vue';
import mockStack from '@/mockStack.js';

export default {
  components: {
    AppCountTitle,
    ListItem,
  },

	data() {
		return {
			stackList: mockStack,
		};
	},

	computed: {
		countLabel() {
			return String(this.stackList.length);
		},
	},
};
</script>

<style>
.b-stack-filter-result {
  padding: 26px 0;
}
</style>
