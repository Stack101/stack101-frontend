<template>
  <section class="l-statistic-info">
    <h2 class="l-statistic-title">
      {{ title }}
    </h2>
    <StackToggleTab @chart-type="setType" />
    <StackBarChart
      v-if="isStatisticLoaded"
      :key="rerenderIndex"
      :statistic="statistic"
      :height="300"
    />
  </section>
</template>

<script>
import StackToggleTab from '@/components/blocks/stack-toggle-tab/StackToggleTab.vue';
import StackBarChart from '@/components/blocks/stack-bar-chart/StackBarChart.vue';
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  components: {
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
    ...mapState('statistic', ['statistics']),
    ...mapGetters({ 'getSpecificStatistic': 'statistic/getSpecificStatistic' }),
    statistic() {
      return this.getSpecificStatistic(this.type);
    },
    isStatisticLoaded() {
      return this.statistics !== '' ? true : false;
    },
  },

  created() {
    this.setStatistics();
  },

  methods: {
    ...mapActions({ 'setStatistics': 'statistic/setStatistics' }),
    setType(type) {
      this.type = type;
      this.rerenderIndex += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.l-statistic-info {
  margin: 32px 0;

  & > * {
    margin-bottom: 25px;
  }
}

.l-statistic-title {
  font-size: 22px;
  font-weight: 600;
  color: #1A1F27;
  text-align: left;
}
</style>
