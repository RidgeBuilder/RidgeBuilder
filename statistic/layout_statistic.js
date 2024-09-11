import * as echarts from 'https://cdn.jsdelivr.net/npm/echarts@5.3.3/dist/echarts.esm.min.js';

var chartDom = document.getElementById('statistic-layout-container');
var myChart = echarts.init(chartDom);
var option;

// There should not be negative values in rawData
const rawData = [
  [0, 0, 0,0,182],
  [0,2,8,9,17],
  [0,0,9,30,51],
  [ 0, 0,35,39,75],
];
const rawData2 = [
  [0, 0, 0,0,273],
  [0,8,32,36,68],
  [0,0,18,60,102],
  [ 0, 0,52.5,58.5,112.5],
];
const colors = [
  ['#FFFFFF', '#B4D1F4', '#96B9E3', '#76A3D8','#5987BF'],
  ['#FFFFFF', '#B4D1F4', '#96B9E3', '#76A3D8','#5987BF'],
  ['#FFFFFF', '#B4D1F4', '#96B9E3', '#76A3D8','#5987BF'],
  ['#FFFFFF', '#B4D1F4', '#96B9E3', '#76A3D8','#5987BF'],
]; 
const totalData=[182,182,182,182]
const grid = {
  top: 20,
  bottom: 40,
};
const customDataNames = [
  ['', 'Layer: Stacked', '',  ''],
  ['', 'Layer: Alternate', '', ''],
  ['',  'Layer: Separated', 'Order: Peak', 'Overlay: Dense'],
  ['Transform: Circular','Layer: Juxtaposed', 'Order: Statistic',"Overlay: Moderate"],
  ['Transform: Regular', 'Layer: Overlay', 'Order: Meta',"Overlay: Little"]
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
        <img src="../statisticImage/Layout/${customName.split(": ")[0]}_${customName.split(": ")[1]}.png" style="width: 50px;height:'auto';box-shadow:none" />
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
    data: ['Transform','Layer','Order','Overlap' ],
    
    axisLabel: {
      rotate: 30 ,
      fontSize: 10, 
      color: '#3B89FE'
    }
  },
  series,
  title: {
    text: 'Layout',
    left: 5, 
    top: 5, 
    textStyle: {
      fontSize: 12, 
      color: '#3B89FE' 
    }
  },
};

option && myChart.setOption(option);
