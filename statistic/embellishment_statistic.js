import * as echarts from 'https://cdn.jsdelivr.net/npm/echarts@5.3.3/dist/echarts.esm.min.js';

var chartDom = document.getElementById('statistic-embellishment-container');
var myChart = echarts.init(chartDom);
var option;

// There should not be negative values in rawData
const rawData = [
  [40,67],
  [0,7],
  [0,8],
];
const rawData2 = [
  [40,67],
  [0,28],
  [0,24],
];
const colors = [
  ['#EEE4F1','#DECBE4'],
  ['#FFFFFF','#DECBE4'],
  ['#FFFFFF','#DECBE4'],

];

const grid = {
  top: 20,
  bottom: 40,
  left:20,
  right:10
};
const totalData = [
  182,
  182,
  182
];
const customDataNames = [
  ['Annotation: Local Pattern','Background',"Decoration"],
  ['Annotation: Overall Visualization','Background',"Decoration"],
];
const series =rawData[0].map((_, sid) => {
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
  <div style="display: flex; align-items: center; flex-direction: column">
    <div>${customName} (${valueFromRawData}%)</div>
    
    ${customName.includes(":") ? `<img src="../statisticImage/Embellishment/${customName.split(": ")[1]}.png" style="width: 50px; height: auto; box-shadow: none;" />` : `<img src="../statisticImage/Embellishment/${customName}.png" style="width: 50px; height: auto; box-shadow: none;" />`}
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
    data: ['Annotation','Background','Decoration'],
    axisLabel: {
      fontSize: 8,
      color: '#C388D6', 
      rotate: 30, 
    }
  },
  series,
  title: {
    text: 'Embellishment',
    left: 5, 
    top: 5, 
    textStyle: {
      fontSize: 12, 
      color: '#C388D6'
    }
  },
};

option && myChart.setOption(option);
