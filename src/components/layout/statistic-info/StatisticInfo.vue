<template>
  <section class="l-statistic-info">
    <h2 class="l-statistic-title">
      {{ title }}
    </h2>
    <StackToggleTab @chart-type="setType" />
    <StackBarChart
      :key="rerenderIndex"
      :statistic="statistic"
      :height="300"
    />
  </section>
</template>

<script>
import StackToggleTab from '@/components/blocks/stack-toggle-tab/StackToggleTab.vue';
import StackBarChart from '@/components/blocks/stack-bar-chart/StackBarChart.vue';
import mockData from '@/mockData.js';

export default {
  components: {
    StackToggleTab,
    StackBarChart,
  },

  data() {
    return {
      title: '통계 정보',
      type: 'app',
      statistics: mockData,
      rerenderIndex: 0,
    };
  },

  computed: {
    statistic() {
      const result = this.statistics.filter(el => {
        return el.type === this.type;
      });
      return result[0];
    },
  },

  methods: {
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
