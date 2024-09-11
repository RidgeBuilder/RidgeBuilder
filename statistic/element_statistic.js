import * as echarts from 'https://cdn.jsdelivr.net/npm/echarts@5.3.3/dist/echarts.esm.min.js';

var chartDom = document.getElementById('statistic-element-container');
var myChart = echarts.init(chartDom);
var option;

// There should not be negative values in rawData
const rawData = [
  [1, 3, 8, 170],
  [11, 171, 0, 0],
  [16, 166, 0, 0],
  [16, 166, 0, 0],
  [17, 28, 0, 0],
];
const rawData2 = [
  [8, 15, 40, 170],
  [59, 171, 0, 0],
  [64, 166, 0, 0],
  [64, 166, 0, 0],
  [68, 112, 0, 0],
];
const totalData=[182,182,182,182,182]
const customDataNames = [
  ['Base: Step', 'X Axis: Discrete', 'Y Axis: Ordinal', 'Z Axis: Discrete', 'Optional: Mode Line'],
  ['Base: Bar', 'X Axis: Continuous', 'Y Axis: Nominal', 'Z Axis: Continuous', 'Optional: Reference Line'],
  ['Base: Line', 'Data C2', 'Data C3', 'Data C4', 'Data C5'],
  ['Base: Area', 'Data D2', 'Data D3', 'Data D4', 'Data D5']
];
const colors = [
  ['#FFEDD4', '#FED9A6', '#FFD498', '#FFC16B'],
  ['#FFEDD4', '#FFC16B', '#FFD498', '#FFC16B'],
  ['#FFEDD4', '#FFC16B', '#FFD498', '#FFC16B'],
  ['#FFEDD4', '#FFC16B', '#FFD498', '#FFC16B'],
  ['#FFEDD4', '#FFC16B', '#FFD498', '#FFC16B'],
];

const grid = {
  top: 20,
  bottom: 40,
};

const series =rawData[0].map((_, sid) => {
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
        fontSize: 12, 
      }
    },
    itemStyle: {
      color: function (params) {
        
        return colors[params.dataIndex][sid];
      },
    },
    data: rawData2.map((row, index) => ({
      value: row[sid], 
      name: customDataNames[sid][index], 
    })),
  };
});

option = {
  tooltip: {
    trigger: 'item',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    },
    formatter: (params) => {
      
      const valueFromRawData = Math.round(rawData[params.dataIndex][params.seriesIndex]/totalData[params.dataIndex]*100);
      const customName = customDataNames[params.seriesIndex][params.dataIndex];
      
      return `
     <div style="gap:2px;display: flex; align-items: center;flex-direction: column">
        
        <div>${customName} (${valueFromRawData}%)</div>
        <img src="../statisticImage/Element/${customName.split(": ")[0]}_${customName.split(": ")[1]}.png" style="width: 32px;height:'auto';box-shadow:none" />
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
      rotate: 30 

    }
  },
  series,
  title: {
    text: 'Element', 
    left: 5, 
    top: 5, 
    textStyle: {
      fontSize: 12, 
      color: '#FFB857' 
    }
  },
};

option && myChart.setOption(option);
