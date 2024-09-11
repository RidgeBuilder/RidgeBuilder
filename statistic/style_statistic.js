import * as echarts from 'https://cdn.jsdelivr.net/npm/echarts@5.3.3/dist/echarts.esm.min.js';

var chartDom = document.getElementById('statistic-style-container');
var myChart = echarts.init(chartDom);
var option;

// There should not be negative values in rawData
const rawData = [
  [59,89],
  [5,69],
  [0, 158],
];
const totalData = [
  182,
  182,
  182
];
const colors = [
  ['#C2E3BB', '#9BB795'],
  ['#C2E3BB', '#9BB795'],
  ['#C2E3BB', '#9BB795'],
]; 

const grid = {
  top: 20,
  bottom: 40,
};
const customDataNames = [
  ['Color: Distinguish Ridges','Opacity: Encode Data',"Border: Shadow"],
  ['Color: Encode Data', 'Opacity: Distinguish Ridges', "Border: Stroke"]
];
const series =rawData[0].map((_, sid) => {
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
        fontSize: 12, 
      }
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
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    },
    formatter: (params) => {
      
      const valueFromRawData = Math.round(rawData[params.dataIndex][params.seriesIndex]/totalData[params.dataIndex]*100);
      const customName = customDataNames[params.seriesIndex][params.dataIndex];
      
      return `
      <div style="gap:2px;display: flex; align-items: center;flex-direction: column">
        
        <div>${customName} (${valueFromRawData}%)</div>
        <img src="../statisticImage/Style/${customName.split(": ")[0]}_${customName.split(": ")[1]}.png" style="width: 50px;height:'auto';box-shadow:none" />
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
    data: ['Color','Opacity','Border'],
    axisLabel: {
      rotate: 30 ,
      fontSize: 10,
      color: '#7CBF64' 
    }
  },
  series,
  title: {
    text: 'Style',
    left: 5, 
    top: 5, 
    textStyle: {
      fontSize: 12, 
      color: '#7CBF64' 
    }
  },
};

option && myChart.setOption(option);
