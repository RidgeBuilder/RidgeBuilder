<template>
  <div id="statistic-layout-container" class="statistic-container"></div>
</template>

<script>
import * as echarts from 'https://cdn.jsdelivr.net/npm/echarts@5.3.3/dist/echarts.esm.min.js';

export default {
  name: 'LayoutChart',
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      
      const rawData = [
        [0, 0, 0, 0, 182],
        [2, 8, 9, 17,146],
        [ 0, 9, 30, 51,92],
        [0, 33, 35, 39, 75],
      ];

      const colors = [
        ['#FFFFFF', '#B4D1F4', '#96B9E3', '#76A3D8', '#5987BF'],
        ['#FFFFFF', '#B4D1F4', '#96B9E3', '#76A3D8', '#5987BF'],
        ['#FFFFFF', '#B4D1F4', '#96B9E3', '#76A3D8', '#5987BF'],
        ['#FFFFFF', '#B4D1F4', '#96B9E3', '#76A3D8', '#5987BF'],
      ];
      const totalData = [182, 182, 182, 182];
      const grid = {
        top: 20,
        bottom: 40,
        left:20
      };
      const customDataNames = [
        ['', 'Layer: Alternate', '', ''],
        ['', 'Layer: Separated', 'Order: Peak', 'Overlay: None'],
        ['', 'Layer: Juxtaposed', 'Order: Statistic', 'Overlay: Dense'],
        ['Transform: Circular', 'Layer: Overlay', 'Order: Meta', "Overlay: Moderate"],
        ['Transform: Regular', 'Layer: None', 'Order: None', "Overlay: Little"],
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
              const valueFromRawData2 = rawData[params.dataIndex][sid];
              return valueFromRawData2 === 0 ? "" : valueFromRawData2;
            },
            textStyle: {
              fontSize: 8,
            },
          },
          itemStyle: {
            color: (params) => colors[params.dataIndex][sid],
          },
          data: rawData.map((row, index) => ({
            value: row[sid],
            name: customDataNames[sid][index],
          })),
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
                 ${imageName !== 'None' ?`<img src="/RidgeBuilder/statisticImage/Layout/${customName.split(": ")[0]}_${customName.split(": ")[1]}.png" style="width: 50px;height:auto;box-shadow:none" />`:''}
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
          data: ['Transform', 'Layer', 'Order', 'Overlap'],
          axisLabel: {
            rotate: 30,
            fontSize: 8,
            color: '#3B89FE',
          },
        },
        series,
        title: {
          text: 'Layout',
          left: 10,
          top: 5,
          textStyle: {
            fontSize: 12,
            color: '#3B89FE',
          },
        },
      };
      var chartDom = document.getElementById('statistic-layout-container');
      var myChart = echarts.init(chartDom);

      myChart.setOption(option);
      
    },
  },
};
</script>

<style scoped>
.statistic-container{
  height:200px;
  width: 220px;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2);
}

</style>


