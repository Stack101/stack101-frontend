<template>
	<AppDescription
		class="l-search-no-result"
		:label="descriptionLabel"
		:desc-class="descriptionClass"
	/>
</template>

<script>
import AppDescription from "@/components/elements/AppDescription";

export default {
	components: {
		AppDescription,
	},

	props: {
		descriptionLabel: {
			type: String,
			default: '최근 검색한 내용이 없습니다.',
		},
	},

	data() {
		return {
			descriptionClass: "search-result",
		};
	},
};
</script>

<style lang="scss" scoped>
.l-search-no-result {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
