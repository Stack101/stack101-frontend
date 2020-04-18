<template>
  <div class="v-app-main">
    <AppHeader />
    <StatisticInfo />
  </div>
</template>

<script>
import AppHeader from '@/components/layout/app-header/AppHeader.vue';
import StatisticInfo from '@/components/layout/statistic-info/StatisticInfo.vue';

export default {
  components: {
    AppHeader,
    StatisticInfo,
  },
};
</script>

<style>

</style>