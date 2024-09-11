import * as echarts from 'https://cdn.jsdelivr.net/npm/echarts@5.3.3/dist/echarts.esm.min.js';

var chartDom = document.getElementById('statistic-composition-container');
var myChart = echarts.init(chartDom);
var option;

// There should not be negative values in rawData
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
  ['Dot plot','Strip plot'],
];
const series =rawData[0].map((_, sid) => {
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
        <img src="../statisticImage/Composition/${customName}.png" style="width: 50px;height:'auto';box-shadow:none" />
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
    data: ['Dot','Strip'],
    axisLabel: {
      fontSize: 10,
      color: '#D77B73' ,
      rotate: 30 
    }
  },
  series,
  title: {
    text: 'Composition',
    left: 5,
    top: 5,
    textStyle: {
      fontSize: 12, 
      color: '#D77B73' 
    }
  },
};

option && myChart.setOption(option);
