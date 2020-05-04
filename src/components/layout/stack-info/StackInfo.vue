<template>
  <section class="l-stack-info">
    <AppTitle :label="title" />
    <StackFilterDropdown />
    <!-- <StackFilterList /> -->
    <StackResult
			:stack-list="stack"
			:is-main="isMain"
		/>
  </section>
</template>

<script>
import AppTitle from '@/components/elements/AppTitle.vue';
import StackFilterDropdown from '@/components/blocks/stack-filter-dropdown/StackFilterDropdown.vue';
// import StackFilterList from '@/components/blocks/stack-filter-list/StackFilterList.vue';
import StackResult from '@/components/blocks/stack-result/StackResult.vue';
import mockStack from '@/mockStack.js';

export default {
  components: {
    AppTitle,
    StackFilterDropdown,
    // StackFilterList,
    StackResult,
  },

  data() {
    return {
      title: '기술스택 정보',
			stack: mockStack,
			isMain: true,
    };
  },

};
</script>

<style lang="scss" scoped>
.l-stack-info {
  padding: 32px 20px;
  background-color: #FFF;
}
</style>
