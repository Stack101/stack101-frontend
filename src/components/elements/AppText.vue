<template>
	<span :class="`e--description--${descClass}`">
		{{ label }}
	</span>
</template>

<script>
	export default {
		props: {
			descClass: {
				type: String,
				default: null,
			},
			label: {
				type: String,
				default: null,
			},
		},
	};
</script>

<style lang="scss" scoped>
.e-description {
	font-size: 16px;
	font-weight: 500;
	line-height: 1.45;
	color: #3B3B3B;

	&--search-result {
		font-size: 14px;
		color: #414143;
	}
}
</style>
