<script>
import { HorizontalBar } from 'vue-chartjs';

export default {
  extends: HorizontalBar,

  props: {
    statistic: {
      type: Object,
      default: undefined,
    },
  },

  mounted () {
    this.renderChart({
      labels: [...(this.statistic.labels)],
      datasets: [
        {
          label: 'companies',
          backgroundColor: [...(this.statistic.backgroundColor)],
          data: [...(this.statistic.data)],
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
