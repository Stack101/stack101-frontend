<template>
		<div class="b-stack-toggle-bar">
			<AppIcon :img-src="applicationIcon"/>
			<AppStrong
				class="b-stack-toggle--title"
				:label="title"
				:strong-class="strongClass"
			/>
			<div>{{ cnt }}</div>
			<AppIcon
				:img-src="dropDownIcon"
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
			applicationIcon: 'ic_application_mobile.svg',
			dropDownIcon: 'ic_arrow_down.svg',
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
				this.dropDownIcon = 'ic_arrow_down.svg';
			} else {
				this.dropDownIcon = 'ic_arrow_up.svg';
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

.b-stack-toggle--title {
	margin-left: 8px;
}
</style>
