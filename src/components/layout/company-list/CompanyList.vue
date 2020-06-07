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
      :detail-type="detailType"
      :item-list="list"
      :type="type"
      :stack-name="stackName"
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
		detailType: {
			type: String,
			default: 'company',
		},
		isSearchResult: {
			type: Boolean,
			default: false,
    },
    stackName: {
      type: String,
      default: undefined,
    },
	},

	data() {
		return {
			textLabel: '회사',
      textClass: 'search-result',
      type: 'company',
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
	padding: 26px 0;
}
</style>
