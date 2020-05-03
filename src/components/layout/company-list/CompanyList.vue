<script src="../../../mockStack.js"></script>
<template>
  <section class="l-company-list">
    <AppCountTitle :label="totalNum" />
    <ListItem
			:is-detail="isDetail"
			:item-list="list"
		/>
  </section>
</template>

<script>
import AppCountTitle from '@/components/elements/AppCountTitle.vue';
import ListItem from '@/components/blocks/list-item/ListItem.vue';

export default {
  components: {
    AppCountTitle,
    ListItem,
  },

	props: {
		list: {
			type: Array,
			default: undefined,
		},
	},

  data() {
    return {
      isDetail: true,
    };
  },

	computed: {
		totalNum() {
			return String(this.list.length);
		},
	},
};
</script>

<style lang="scss" scoped>
.l-company-list {
  background-color: #fff;
  margin-top: 16px;
  padding: 32px 20px;
}
</style>
