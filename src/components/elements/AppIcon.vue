<template>
  <div class="e-icon">
    <img
      :src="getSrc(imgSrc)"
      :class="`e-icon--${iconClass}`"
    >
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: '',
    },
		iconClass: {
			type: String,
			default: null,
		},
  },

	methods: {
		getSrc(iconName) {
			return iconName ? require(`../../assets/images/${iconName}`) : '';
		},
	},
};
</script>

<style lang="scss" scoped>
.e-icon {
  display: flex;
	align-items: center;
	justify-content: center;

	&--bookmark {
		width: 28px;
		height: 28px;
	}

	&--arrow {
		width: 32px;
		height: 32px;
	}
}

@media screen and (min-width: 1200px) {
	.e-icon {
		
		&--bookmark {
			width: 38px;
			height: 38px;
		}	

	}		
}
</style>