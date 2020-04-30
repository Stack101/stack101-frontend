<template>
  <div class="v-app-main">
    <StatisticInfo />
    <StackInfo />
  </div>
</template>

<script>
import StatisticInfo from '@/components/layout/statistic-info/StatisticInfo.vue';
import StackInfo from '@/components/layout/stack-info/StackInfo.vue';

export default {
  components: {
    StatisticInfo,
    StackInfo,
  },
};
</script>

<style lang="scss" scoped>

</style>