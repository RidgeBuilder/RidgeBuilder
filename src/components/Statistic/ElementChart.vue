<template>
  <div class="statistic-container" id="statistic-element-container" ></div>
</template>

<script>
import * as echarts from 'https://cdn.jsdelivr.net/npm/echarts@5.3.3/dist/echarts.esm.min.js';

export default {
  name: 'ElementChart',
  mounted() {
    // Initialize chart
    this.initChart();
  },
  methods: {
    initChart() {
      var chartDom = document.getElementById('statistic-element-container');
      var myChart = echarts.init(chartDom);
      var option;

      // Raw data and settings
      const rawData = [
        [1, 3, 8, 170],
        [11, 171, 0, 0],
        [16, 166, 0, 0],
        [16, 166, 0, 0],
        [17, 28, 137, 0],
      ];
      const totalData = [182, 182, 182, 182, 182];

      const customDataNames = [
        ['Base: Step', 'X Axis: Discrete', 'Y Axis: Ordinal', 'Z Axis: Discrete', 'Optional: Mode Line'],
        ['Base: Bar', 'X Axis: Continuous', 'Y Axis: Nominal', 'Z Axis: Continuous', 'Optional: Reference Line'],
        ['Base: Line', 'Data C2', 'Data C3', 'Data C4', 'Optional: None'],
        ['Base: Area', 'Data D2', 'Data D3', 'Data D4', 'Data D5']
      ];

      const colors = [
        ['#FFEDD4', '#FED9A6', '#FFD498', '#FFC16B'],
        ['#FFEDD4', '#FFC16B', '#FFD498', '#FFC16B'],
        ['#FFEDD4', '#FFC16B', '#FFD498', '#FFC16B'],
        ['#FFEDD4', '#FFC16B', '#FFD498', '#FFC16B'],
        ['#FFEDD4', '#FED9A6', '#FFC16B', '#FFC16B'],
      ];

      const grid = {
        top: 20,
        bottom: 40,
      };

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
            }
          },
          itemStyle: {
            color: function (params) {
              return colors[params.dataIndex][sid];
            },
          },
          data: rawData.map((row, index) => ({
            value: row[sid],
            name: customDataNames[sid][index],
          })),
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
            const imageName = customName.split(": ")[1];
            return `
              <div style="gap:2px;display: flex; align-items: center;flex-direction: column">
                <div>${customName} (${valueFromRawData}%)</div>
                 ${imageName !== 'None' ? `<img src="/RidgeBuilder/statisticImage/Element/${customName.split(": ")[0]}_${imageName}.png" style="width: 32px;height:auto;box-shadow:none" />` : ''}
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
          data: ['Ridge', 'X Axis', 'Y Axis', 'Z Axis', 'Optional'],
          axisLabel: {
            fontSize: 10,
            color: '#FFB857',
            rotate: 30,
          }
        },
        series,
        title: {
          text: 'Element',
          left: 5,
          top: 5,
          textStyle: {
            fontSize: 12,
            color: '#FFB857',
          }
        },
      };

      option && myChart.setOption(option);
    }
  }
};
</script>

<style scoped>
.statistic-container{
  height:200px;
  width: 250px;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2);
}


</style>
