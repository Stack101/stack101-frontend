<template>
  <section class="l-statistic-info">
    <AppTitle :label="title" />
    <StackToggleTab @chart-type="setType" />
    <StackBarChart
      :key="rerenderIndex"
      :statistic="statistic"
      :height="chartHeight"
    />
  </section>
</template>

<script>
import AppTitle from '@/components/elements/AppTitle.vue';
import StackToggleTab from '@/components/blocks/stack-toggle-tab/StackToggleTab.vue';
import StackBarChart from '@/components/blocks/stack-bar-chart/StackBarChart.vue';
import mockData from '@/mockData.js';
// import { mapActions, mapState, mapGetters } from 'vuex';

      // v-if="isStatisticLoaded"
      // :key="rerenderIndex"
      // :statistic="statistic"
      // :height="chartHeight"
export default {
  components: {
    AppTitle,
    StackToggleTab,
    StackBarChart,
  },
  data() {
    return {
      title: '통계 정보',
      type: 'app',
      rerenderIndex: 0,
    };
  },
  computed: {
    // ...mapState('statistic', ['statistics']),
    // ...mapGetters({ 'getSpecificStatistic': 'statistic/getSpecificStatistic' }),
    // statistic() {
    //   return this.getSpecificStatistic(this.type);
    // },
    statistic() {
      // Mock
      const test = mockData.filter(el => {
        return el.type === this.type;
      });
      return test[0];
    },
    chartHeight() {
      return this.statistic.labels.length * 25;
    },
    // isStatisticLoaded() {
    //   return this.statistics !== '' ? true : false;
    // },
  },
  created() {
    // this.setStatistics();
  },
  methods: {
    // ...mapActions({ 'setStatistics': 'statistic/setStatistics' }),
    setType(type) {
      this.type = type;
      this.rerenderIndex += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.l-statistic-info {
  padding: 32px 20px;
  margin-bottom: 16px;
  background-color: #FFF;
  & > *:not(:last-child) {
    margin-bottom: 25px;
  }
}
</style>
