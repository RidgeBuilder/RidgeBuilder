<template>
  <div class="statistic-small-container2" id="statistic-composition-container" ></div>
</template>

<script>
import * as echarts from 'https://cdn.jsdelivr.net/npm/echarts@5.3.3/dist/echarts.esm.min.js';

export default {
  name: 'CompositionChart',
  mounted() {
    // Chart initialization
    this.initChart();
  },
  methods: {
    initChart() {
      var chartDom = document.getElementById('statistic-composition-container');
      var myChart = echarts.init(chartDom);
      var option;

      // Raw data and chart settings
      const rawData = [
        [12],
        [8],
      ];

      const colors = [
        ['#FBB4AE'],
        ['#FBB4AE'],
      ];

      const grid = {
        top: 30,
        bottom: 30,
      };

      const totalData = [
        182,
        182,
      ];

      const customDataNames = [
        ['Dot plot', 'Strip plot'],
      ];

      const series = rawData[0].map((_, sid) => {
        return {
          name: `Series ${sid + 1}`,
          type: 'bar',
          stack: 'total',
          barWidth: '40%',
          label: {
            show: true,
            formatter: (params) => {
              return params.value === 0 ? '' : params.value;
            },
            textStyle: {
              fontSize: 8,
            },
          },
          itemStyle: {
            color: function (params) {
              return colors[params.dataIndex][sid];
            },
          },
          data: rawData.map((row) => row[sid]),
        };
      });

      option = {
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'shadow',
          },
          formatter: (params) => {
            const valueFromRawData = Math.round(rawData[params.dataIndex][params.seriesIndex] / totalData[params.dataIndex] * 100);
            const customName = customDataNames[params.seriesIndex][params.dataIndex];
            return `
              <div style="gap: 2px; display: flex; align-items: center; flex-direction: column">
                <div>${customName} (${valueFromRawData}%)</div>
                <img src="/RidgeBuilder/statisticImage/Composition/${customName}.png" style="width: 50px; height: auto; box-shadow: none" />
              </div>
            `;
          }
        },
        legend: {
          show: false,
        },
        grid,
        yAxis: {
          type: 'value',
          show: false,
        },
        xAxis: {
          type: 'category',
          data: ['Dot', 'Strip'],
          axisLabel: {
            fontSize: 10,
            color: '#D77B73',
            rotate: 30,
          },
        },
        series,
        title: {
          text: 'Composition',
          left: 5,
          top: 5,
          textStyle: {
            fontSize: 12,
            color: '#D77B73',
          },
        },
      };

      // Set the option for the chart
      option && myChart.setOption(option);
    }
  }
};
</script>

<style scoped>

.statistic-small-container2{
  border-radius: 5px;
  height:100px;
  width: 150px;
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2);
}
</style>
