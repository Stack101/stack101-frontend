<template>
	<strong :class="`e-strong--${strongClass}`">
		{{ label }}
	</strong>
</template>

<script>
	export default {
		props: {
			label: {
				type: String,
				default: null,
			},
			strongClass: {
				type: String,
				default: 'default',
			},
		},
	};
</script>

<style lang="scss" scoped>
	.e-strong {
		font-weight: 600;
		line-height: 1.4;
		color: #1A1F27;
		text-align: left;

		&--default {
			@extend .e-strong;
			font-size: 16px;
		}

		&--title {
			@extend .e-strong;
			font-size: 22px;
		}

		&--division {
			@extend .e-strong;
			font-weight: 500;
			font-size: 16px;
		}

		&--card {
			@extend .e-strong;
			font-weight: 300;
			font-size: 14px;
		}
	}
</style>
