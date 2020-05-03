<template>
	<ul class="b-stack-toggle">
		<li class="b-stack-toggle-bar">
			<AppIcon :icon-class="stackIcon" />
			<AppStrong
				:label="title"
				:strong-class="strongClass"
			/>
			<div>{{ stackCnt }}</div>
			<AppIcon
				:icon-class="iconClass"
				@click.native="toggleDropDown"
			/>
		</li>
		<li
			v-if="isToggle"
			class="b-stack-cards"
		>
			<StackCard
				v-for="(stack, index) in stacks"
				:key="`stack-${index}`"
				:title="stack"
			/>
		</li>
	</ul>
</template>

<script>
import AppIcon from '@/components/elements/AppIcon.vue';
import AppStrong from '@/components/elements/AppStrong.vue';
import StackCard from '@/components/blocks/stack-card/StackCard.vue';

export default {
  components: {
		AppIcon,
		AppStrong,
		StackCard,
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
			isToggle: false,
			btnClass: 'app',
			strongClass: 'division',
		};
	},

	computed: {
		toggleCondition() {
			return this.isToggle ? 'b-stack-tab-btns--toggle' : 'b-stack-tab-btns';
		},
		stackCnt() {
			return `${this.cnt}개`;
		},
		stacks() {
			const temp = [
				'Ruby',
				'Ruby',
				'Ruby',
				'Ruby',
				'Ruby',
				'Ruby'
			];
			return temp;
		},
	},

	methods: {
		toggleDropDown() {
			this.isToggle = !this.isToggle;
			if (this.isToggle) {
				this.iconClass = 'gg-chevron-up';
			} else {
				this.iconClass = 'gg-chevron-down';
			}
			this.$emit('toggle-status', this.isToggle);
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

.b-stack-cards {
	display: grid;
	background-color: #FAFAFB;
	grid-template-columns: 1fr 1fr 1fr;
	padding: 25px 20px;
	grid-gap: 12px;
}
</style>
