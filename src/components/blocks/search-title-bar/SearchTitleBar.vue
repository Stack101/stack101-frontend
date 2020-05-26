<template>
  <li class="b-search-title-bar">
    <AppText :label="searchTitle" />
    <AppIcon
      :img-src="deleteIcon"
      @click.native="deleteSearch"
    />
  </li>
</template>

<script>
import AppText from "@/components/elements/AppText";
import AppIcon from "@/components/elements/AppIcon";

export default {
	components: {
		AppText,
		AppIcon,
	},

	props: {
		searchTitle: {
			type: String,
			default: '',
		},
		itemKey: {
			type: Number,
			default: null,
		},
	},

	data() {
		return {
			deleteIcon: 'ic_search_delete.svg',
			btnText: '삭제',
		};
	},

	methods: {
		deleteSearch() {
			this.$emit('delete-search', this.itemKey);
			this.$destroy();
			this.$el.parentNode.removeChild(this.$el);
		},
	},
};
</script>

<style lang="scss" scoped>
.b-search-title-bar {
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;

	& > *:first-child {
		justify-self: start;
	}
	& > *:last-child {
		justify-self: end;
	}
}
</style>
