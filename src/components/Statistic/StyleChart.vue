<template>
  <div class="statistic-small-container" id="statistic-style-container" ></div>
</template>

<script>
import * as echarts from 'https://cdn.jsdelivr.net/npm/echarts@5.3.3/dist/echarts.esm.min.js';

export default {
  name: 'StyleChart',
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const rawData = [
        [34,59, 89],
        [5, 69,108],
        [0,24, 158],
      ];
      const totalData = [182, 182, 182];
      const colors = [
        ['#E4F3E1','#C2E3BB', '#9BB795'],
        ['#E4F3E1','#C2E3BB', '#9BB795'],
        ['#C2E3BA','#C2E3BB', '#9BB795'],
      ];
      const grid = {
        top: 20,
        bottom: 40,
      };
      const customDataNames = [
        ['Color: None','Opacity: EncodeData',''],
        ['Color: Style', 'Opacity: Style', "Border: None"],
        ['Color: EncodeData', 'Opacity: None', "Border: Stroke"],
      ];

      const series = rawData[0].map((_, sid) => {
        return {
          name: `Series ${sid + 1}`,
          type: 'bar',
          stack: 'total',
          barWidth: '70%',
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
            color: (params) => colors[params.dataIndex][sid],
          },
          data: rawData.map((row) => row[sid]),
        };
      });

      const option = {
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'shadow',
          },
          formatter: (params) => {
            const valueFromRawData = Math.round(rawData[params.dataIndex][params.seriesIndex] / totalData[params.dataIndex] * 100);
            const customName = customDataNames[params.seriesIndex][params.dataIndex];
            const imageName = customName.split(": ")[1];
            return `
              <div style="gap:2px;display: flex; align-items: center;flex-direction: column">
                <div>${customName} (${valueFromRawData}%)</div>
                 ${imageName !== 'None' ?`<img src="/RidgeBuilder/statisticImage/Style/${customName.split(": ")[0]}_${customName.split(": ")[1]}.png" style="width: 50px;height:auto;box-shadow:none" />`:''}
              </div>
            `;
          },
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
          data: ['Color', 'Opacity', 'Border'],
          axisLabel: {
            rotate: 30,
            fontSize: 10,
            color: '#7CBF64',
          },
        },
        series,
        title: {
          text: 'Style',
          left: 5,
          top: 5,
          textStyle: {
            fontSize: 12,
            color: '#7CBF64',
          },
        },
      };

      const myChart = echarts.init(this.$el);
      myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
.statistic-container{
  height:200px;
  width: 30%;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2);
}
.statistic-small-container{
  border-radius: 5px;
  height:200px;
  width: 200px;
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2);
}
.statistic-small-container2{
  border-radius: 5px;
  height:125px;
  width: 150px;
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2);
}
</style>
