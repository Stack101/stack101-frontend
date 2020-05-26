<template>
  <section class="l-stack-info">
    <AppTitle :label="title" />
    <StackFilterDropdown @selected-tab="fetchStackResult" />
    <StackResult
      v-if="isStacksLoaded"
      :stack-list="stackList"
      :is-main="isMain"
    />
  </section>
</template>

<script>
import AppTitle from '@/components/elements/AppTitle.vue';
import StackFilterDropdown from '@/components/blocks/stack-filter-dropdown/StackFilterDropdown.vue';
import StackResult from '@/components/blocks/stack-result/StackResult.vue';
import stackApi from '@/api/stack.api.js';

export default {
  components: {
    AppTitle,
    StackFilterDropdown,
    StackResult,
  },

  data() {
    return {
      title: '기술스택 정보',
      isMain: true,
      isStacksLoaded: false,
      stackList: '',
    };
  },

  methods: {
    async fetchStackResult(activeTabs) {
      const tabs = {};
      this.isStacksLoaded = false;
      for (const prop in activeTabs) {
        tabs[prop] = activeTabs[prop];
      }
      if (activeTabs.jobGroup === 'developer') {
        const { item } = await stackApi.getStacks(tabs.jobGroup, tabs.jobGroupDetail, tabs.stackGroup);
        this.stackList = item;
      } else {
        const { item } = await stackApi.getStacks(tabs.jobGroup, tabs.jobGroupDetail, tabs.toolGroup);
        this.stackList = item;
      }
      this.isStacksLoaded = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.l-stack-info {
  padding: 32px 20px;
  background-color: #FFF;
}
</style>
