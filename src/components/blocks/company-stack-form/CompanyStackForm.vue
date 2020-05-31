<template>
  <ul>
    <li>
      <StackToggleBar
        :title="title"
      />
    </li>
    <li
      v-if="isCardsOpened"
      class="b-stack-cards"
    >
      <StackCard
        v-for="(card, index) in cards"
        :key="`stack-${index}`"
        :title="card.name"
        :logo="card.logo"
      />
    </li>
  </ul>
</template>

<script>
	import StackToggleBar from '@/components/blocks/stack-toggle-bar/StackToggleBar.vue';
	import StackCard from '@/components/blocks/stack-card/StackCard.vue';

	export default {
		components: {
			StackToggleBar,
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
			cards: {
				type: Array,
				default: null,
			},
		},

		data() {
			return {
				stackIcon: 'gg-database',
				isCardsOpened: true,
				btnClass: 'app',
				strongClass: 'division',
			};
		},
	};
</script>

<style lang="scss" scoped>
.b-stack-cards {
	display: grid;
	background-color: #FAFAFB;
	grid-template-columns: 1fr 1fr 1fr;
	padding: 25px 20px;
	grid-gap: 12px;
}
</style>
