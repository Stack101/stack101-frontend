<template>
  <section class="l-company-list">
		<AppText
			v-if="isSearchResult"
			:label="textLabel"
			:desc-class="textClass"
		/>
    <AppCountTitle
			v-else
			:label="totalNum"
		/>
    <ListItem
			:is-detail="isDetail"
			:item-list="list"
		/>
  </section>
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
		list: {
			type: Array,
			default: undefined,
		},
		isDetail: {
			type: Boolean,
			default: false,
		},
		isSearchResult: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			textLabel: '회사',
			textClass: 'search-result',
		};
	},

	computed: {
		totalNum() {
			return String(this.list.length);
		},
	},
};
</script>

<style lang="scss" scoped>
.l-company-list {
  background-color: #fff;
  margin-top: 16px;
	padding: 32px 0;
}
</style>
