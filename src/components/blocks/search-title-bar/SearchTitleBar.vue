<template>
	<li class="b-search-title-bar">
		<AppText :label="searchTitle" />
		<AppButton
			:btn-class="deleteClass"
			:label="btnText"
			@button-click="deleteSearch"
		/>
	</li>
</template>

<script>
import AppText from "@/components/elements/AppText";
import AppButton from "@/components/elements/AppButton";

export default {
	components: {
		AppText,
		AppButton,
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
			deleteClass: 'delete',
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
