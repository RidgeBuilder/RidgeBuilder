<template>
    <div class="designspacepage-container">
      
        <div class="scope-box">
          <h2 class="cnt-title" >Design Space</h2>
            <a href="/imgs/scope.png" target="_blank">
                <img width="60%"  src="/imgs/scope.png" alt="">
            </a>
            
        </div>
        <div  class="statistic-bigbox"> 
          <h2 class="cnt-title" style="margin-left: -52%;">Statistic</h2>
          <div class="statistic-box"> 
            <ElementChart/>
            <LayoutChart/>
            <StyleChart/>
            <div style="display: flex;flex-direction: column;height: 200px;gap:5px;width: '20%';">
              <EmbellishmentChart/>
              <CompositionChart/>
            </div>
          </div>
        </div>
        
        <div class="dataset-box">
            <h2 class="cnt-title" style="margin-left:10%">DataSet Query</h2>
            <h5 style="margin-left:10%;margin-top:-1%;color:#50A24F">Notice: After the information is made public, we will display dataset images for which we do not hold the copyright in the form of source links.</h5>
            <div class="query-box"> 
                <div class="query-panel">
                    <QueryPanel/>
                </div>
                <div class="result-panel"> 
                    <ResultPanel/>
                </div>
            </div>
            
        </div>
    </div>
  </template>
  
  <script>
import QueryPanel from './QueryPanel.vue';
import ResultPanel from './ResultPanel.vue';
import ElementChart from './Statistic/ElementChart.vue';
import CompositionChart from './Statistic/CompositionChart.vue';
import EmbellishmentChart from './Statistic/EmbellishmentChart.vue';
import LayoutChart from './Statistic/LayoutChart.vue';
import StyleChart from './Statistic/StyleChart.vue';
  export default {
    name: 'DesignSpacePage',
    components:{
        QueryPanel,
        ResultPanel,
        ElementChart,
        CompositionChart,
        EmbellishmentChart,
        LayoutChart,StyleChart
    }
  }
  </script>
  
  <style scoped>
  .cnt-title{
    margin-left:20%;
  }
  .designspacepage-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .scope-box{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width:100%;
    margin-top: -0.5%;
    background-color: #E2E2E2;
    padding-bottom: 2%;
  }
  .dataset-box{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width:100%;
    padding-top: 1%;
    padding-bottom: 2%;
    background-color: #E2E2E2;
  }

  .query-box{
    display: flex;
    width:80%;
    margin-left: 10%;
    gap:2%;
    
    
  }
  .query-panel{
    background-color: white;
    width: 50%;
    height: 600px;
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);
  }
  .result-panel{
    background-color: white;
    width: 50%;
    height: 600px;
    overflow-y: scroll;
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);
  }

  .statistic-box{
    display: flex;
    gap:5px;
    padding: 1px;
  }
  .statistic-bigbox{
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    background-color: #ffffff;
    padding-bottom: 4%;
    padding-top: 1%;
  }
  </style>
  