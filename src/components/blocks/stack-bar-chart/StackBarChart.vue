<script>
import { HorizontalBar } from 'vue-chartjs';

export default {
  extends: HorizontalBar,

  props: {
    statistics: {
      type: Object,
      default: undefined,
    },
		chartColors: {
      type: Array,
			default: undefined,
		},
  },

  mounted () {
    this.renderChart({
      labels: [...this.statistics.name],
      datasets: [
        {
          label: ['stack'],
          backgroundColor: [...this.chartColors],
          data: [...this.statistics.percentage],
          barPercentage: 1.0,
          categoryPercentage: 0.4,
        }
      ],
    },
    // options
    {
      maintainAspectRatio: false,
      legend: { //hides the legend
        display: false,
      },
      scales: { //hides the y axis
        xAxes: [{
          display: false,
        }],
        yAxes: [{
          gridLines: {
            display: false,
          },
        }],
      },
    });
  },
};
</script>
