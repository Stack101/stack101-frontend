<template>
  <main class="v-app-main">
    <StatisticInfo />
    <StackInfo />
  </main>
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
@media screen and (min-width: 1200px) {
  .v-app-main {
    
  }
}  
</style>
