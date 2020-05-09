<template>
  <section class="l-statistic-info">
    <AppTitle :label="title" />
    <StackToggleTab @chart-type="setJobDetail" />
    <StackBarChart
			v-if="isStatisticsLoading"
			:key="rerenderIndex"
			:statistics="statistics"
			:height="chartHeight"
			:chart-colors="chartColors"
    />
  </section>
</template>

<script>
import AppTitle from '@/components/elements/AppTitle.vue';
import StackToggleTab from '@/components/blocks/stack-toggle-tab/StackToggleTab.vue';
import StackBarChart from '@/components/blocks/stack-bar-chart/StackBarChart.vue';
import statisticAPI from '@/api/statistic.api.js';
import colorInfo from './statisticColors.js';

export default {
  components: {
    AppTitle,
    StackToggleTab,
    StackBarChart,
  },

  data() {
    return {
      title: '통계 정보',
      jobDetail: 'App',
      rerenderIndex: 0,
			isStatisticsLoading: false,
			statistics: '',
			chartHeight: '',
			chartColors: '',
    };
  },

	created() {
		this.setJobDetail('App');
	},

  methods: {
		async setJobDetail(jobDetail) {
			this.isStatisticsLoading = false;
			const { item } = await statisticAPI.getStatistics(jobDetail);
			const result = this.getSortedStatistics(item);
      this.statistics = result;
			this.chartHeight = this.statistics.name.length * 25;
			this.chartColors = this.getColorInfo(jobDetail);
			this.isStatisticsLoading = true;
    },
		getSortedStatistics(arrStatistics) {
			const arr = arrStatistics.sort((a, b) => {
				return b.percentage - a.percentage;
			});

			const name = arr.reduce((acc, curr) => {
				acc.push(curr.name);
				return acc;
			}, []);

			const percentage = arr.reduce((acc, curr) => {
				acc.push(curr.percentage);
				return acc;
			}, []);

			const totalCnt = arr.reduce((acc, curr) => {
				acc.push(curr.total_count);
				return acc;
			}, []);

			const result = {
				name,
				percentage,
				totalCnt,
			};
			return result;
		},
		getColorInfo(jobDetail) {
			const result = colorInfo.filter(el => {
				return el.name === jobDetail;
			});
			return result[0].backgroundColor;
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

@media screen and (min-width: 1200px) {
	.l-statistic-info { 
		padding-bottom : 100px;
		margin-bottom: 0;

		& > *:not(:last-child) {
			margin-bottom: 48px;
		}
	}
}
</style>
