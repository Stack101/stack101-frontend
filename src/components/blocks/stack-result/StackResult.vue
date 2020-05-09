<template>
  <div class="b-stack-result">
		<AppText
			v-if="isSearchResult"
			:label="textLabel"
			:desc-class="textClass"
		/>
    <AppCountTitle
			v-else
			:label="countLabel"
		/>
    <ListItem
			:item-list="stackList"
			:is-main="isMain"
		/>
  </div>
</template>

<script>
import AppCountTitle from '@/components/elements/AppCountTitle.vue';
import AppText from '@/components/elements/AppText.vue';
import ListItem from '@/components/blocks/list-item/ListItem.vue';

export default {
  components: {
    AppCountTitle,
    ListItem,
		AppText,
  },

	props: {
		stackList: {
			type: Array,
			default: null,
		},
		isSearchResult: {
			type: Boolean,
			default: false,
		},
		isMain: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			textLabel: '스택',
			textClass: 'search-result',
		};
	},

	computed: {
		countLabel() {
			return String(this.stackList.length);
		},
	},
};
</script>

<style lang="scss" scoped>
.b-stack-result {
  padding: 26px 0;
}

@media screen and (min-width: 1200px) {
	.b-stack-result {
		padding: 40px 0;
	}
}
</style>
