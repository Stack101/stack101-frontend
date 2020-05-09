<template>
		<div class="b-stack-toggle-bar">
			<AppIcon :icon-class="stackIcon"/>
			<AppStrong
				:label="title"
				:strong-class="strongClass"
			/>
			<div>{{ cnt }}</div>
			<AppIcon
				:icon-class="iconClass"
				@click.native="toggleDropDown"
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
		cnt: {
			type: Number,
			default: 0,
		},
	},

	data() {
		return {
			stackIcon: 'gg-database',
			iconClass: 'gg-chevron-down',
			isDropDown: true,
			btnClass: 'app',
			strongClass: 'division',
		};
	},

	computed: {
		toggleCondition() {
			return this.isToggle ? 'b-stack-tab-btns--toggle' : 'b-stack-tab-btns';
		},
	},

	methods: {
		toggleDropDown() {
			this.isDropDown = !this.isDropDown;
			if (this.isDropDown) {
				this.iconClass = 'gg-chevron-down';
			} else {
				this.iconClass = 'gg-chevron-up';
			}
			this.$emit('toggle-status', this.isDropDown);
		},
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
</style>
