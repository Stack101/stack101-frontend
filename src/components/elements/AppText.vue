<template>
	<span :class="`e-plain-text--${descClass}`">
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
.e-plain-text {
	font-size: 16px;
	font-weight: 500;
	line-height: 1.45;
	color: #3B3B3B;

	&--search-result {
		font-size: 14px;
		color: #414143;
	}

	&--tab {
		@extend .e-plain-text;
		color: #8C8A94;
	}
}

.active {
	color: #414143;
	position: relative;

	&:after {
		content: ' ';
		position: absolute;
		bottom: -62%;
		left: 50%;
		transform: translateX(-50%);
		background: #4852E7;
		width: 110px;
		height: 2px;
	}
}
</style>
