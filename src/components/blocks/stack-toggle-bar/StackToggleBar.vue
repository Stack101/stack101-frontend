<template>
  <div class="b-stack-toggle-bar">
    <AppIcon :img-src="applicationIcon" />
    <AppStrong
      class="b-stack-toggle--title"
      :label="title"
      :strong-class="strongClass"
    />
  </div>
</template>

<script>
import AppIcon from '@/components/elements/AppIcon.vue';
import AppStrong from '@/components/elements/AppStrong.vue';

export default {
  components: {
		AppIcon,
		AppStrong,
	},

	props: {
		title: {
			type: String,
			default: '',
		},
	},

	data() {
		return {
			applicationIcon: 'ic_application_mobile.svg',
			btnClass: 'app',
			strongClass: 'division',
		};
	},
};
</script>

<style lang="scss" scoped>
.b-stack-toggle-bar {
	display: grid;
	position: relative;
	grid-template-columns: 36px 1fr 30px 20px;
	align-items: center;
	padding: 24px 20px;

	&::after {
		content: '';
		position: absolute;
		right: 0;
		bottom: 0;
		width: 95%;
		height: 0.5px;
		background-color: #D6D6D6;
	}
}

.b-stack-toggle--title {
	margin-left: 8px;
}

@media screen and (min-width: 1200px) {
	.b-stack-toggle-bar {
		padding: 30px 0;
		
		&::after {
			width: 100%;
		}
	}	
	.b-stack-toggle--title {
		margin-left: 12px;
	}
}

</style>
