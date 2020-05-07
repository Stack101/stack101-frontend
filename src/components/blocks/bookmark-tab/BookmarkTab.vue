<template>
	<ul class="b-bookmark-tab">
		<li
			v-for="(name, index) in tabName"
			:key="index"
			:descClass="tabClass"
		>
			<AppText
				:label="name"
				@click.native="setActiveTab(name)"
				:desc-class="descClass"
				:class="{ active: isActive(name) }"
			/>
		</li>
	</ul>
</template>

<script>
import AppText from '@/components/elements/AppText';

export default {
	components: {
		AppText,
	},

	data() {
		return {
			tabName: ['스택', '회사'],
			tabClass: 'tab',
			activeTab: '스택',
			descClass: 'tab',
		};
	},

	computed: {

	},

	methods: {
		setActiveTab(currentTab) {
			this.activeTab = currentTab;
		},

		isActive(currentTab) {
			return this.activeTab === currentTab;
		},
	},
};
</script>

<style lang="scss" scoped>
.b-bookmark-tab {
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-items: center;
	padding: 14px 0;
	border-bottom: 0.5px solid #C8C8C8;
}
</style>
