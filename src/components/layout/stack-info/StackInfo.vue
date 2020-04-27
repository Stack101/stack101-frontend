<template>
  <section class="l-stack-info">
    <h2 class="l-stack-title">
      {{ title }}
    </h2>
    <StackFilterDropdown />
    <StackFilterList />
  </section>
</template>

<script>
import StackFilterDropdown from '@/components/blocks/stack-filter-dropdown/StackFilterDropdown.vue';
import StackFilterList from '@/components/blocks/stack-filter-list/StackFilterList.vue';

export default {
  components: {
    StackFilterDropdown,
    StackFilterList,
  },

  data() {
    return {
      title: '기술스택 정보',
    };
  },

};
</script>

<style lang="scss" scoped>
.l-stack-info {
  padding: 32px 20px;
  background-color: #FFF;
}

.l-stack-title {
  font-size: 22px;
  font-weight: 600;
  line-height: 1.4;
  color: #1A1F27;
  text-align: left;
}
</style>
