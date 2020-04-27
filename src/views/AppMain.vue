<template>
  <div class="v-app-main">
    <AppHeader />
    <StatisticInfo />
    <StackInfo />
  </div>
</template>

<script>
import AppHeader from '@/components/layout/app-header/AppHeader.vue';
import StatisticInfo from '@/components/layout/statistic-info/StatisticInfo.vue';
import StackInfo from '@/components/layout/stack-info/StackInfo.vue';

export default {
  components: {
    AppHeader,
    StatisticInfo,
    StackInfo,
  },
};
</script>

<style lang="scss" scoped>
.v-app-main {
  
}
</style>