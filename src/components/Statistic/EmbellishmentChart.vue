<template>
  <div class="statistic-small-container2" id="statistic-embellishment-container" ></div>
</template>

<script>
import * as echarts from 'https://cdn.jsdelivr.net/npm/echarts@5.3.3/dist/echarts.esm.min.js';

export default {
  name: 'EmbellishmentChart',
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const rawData = [
        [40, 67],
        [0, 11],
        [0, 8],
      ];
      const rawData2 = [
        [40, 67],
        [0, 33],
        [0, 24],
      ];
      const colors = [
        ['#EEE4F1', '#DECBE4'],
        ['#FFFFFF', '#DECBE4'],
        ['#FFFFFF', '#DECBE4'],
      ];
      const totalData = [182, 182, 182];
      const customDataNames = [
        ['Annotation: Local Pattern', 'Background', 'Decoration'],
        ['Annotation: Overall Visualization', 'Background', 'Decoration'],
      ];
      const grid = {
        top: 20,
        bottom: 40,
        left: 20,
        right: 10,
      };
      
      const series = rawData[0].map((_, sid) => {
        return {
          name: `Series ${sid + 1}`,
          type: 'bar',
          stack: 'total',
          barWidth: '50%',
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
          data: rawData2.map((row, index) => ({
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
            return `
              <div style="display: flex; align-items: center; flex-direction: column">
                <div>${customName} (${valueFromRawData}%)</div>
                ${customName.includes(":") ? 
                  `<img src="/RidgeBuilder/statisticImage/Embellishment/${customName.split(": ")[1]}.png" style="width: 50px; height: auto; box-shadow: none;" />` : 
                  `<img src="/RidgeBuilder/statisticImage/Embellishment/${customName}.png" style="width: 50px; height: auto; box-shadow: none;" />`}
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
          data: ['Annotation', 'Background', 'Decoration'],
          axisLabel: {
            fontSize: 8,
            color: '#C388D6',
            rotate: 30,
          },
        },
        series,
        title: {
          text: 'Embellishment',
          left: 5,
          top: 5,
          textStyle: {
            fontSize: 12,
            color: '#C388D6',
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
  height:250px;
  width: 30%;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2);
}
.statistic-small-container{
  border-radius: 5px;
  height:250px;
  width: 20%;
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2);
}
.statistic-small-container2{
  border-radius: 5px;
  height:100px;
  width: 150px;
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2);
}
.statistic-box{
  display: flex;
  justify-content: space-around;
  gap:5px;
  width: 50%vwS;
}
</style>

