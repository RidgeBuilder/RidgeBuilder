<template>
    <div class="designspacepage-container">
        <div class="scope-box">
            <h2 class="cnt-title" >Design Space</h2>
            <a href="/imgs/scope.png" target="_blank">
                <img width="60%"  src="/imgs/scope.png" alt="">
              </a>
        </div>
        <div class="dataset-box">
            <h2 class="cnt-title" style="margin-left:10%">DataSet Query</h2>
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

  export default {
    name: 'DesignSpacePage',
    components:{
        QueryPanel,
        ResultPanel
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
    flex-direction: column;
    align-items: flex-start;
    width:100%;
    margin-top: 2%;
    background-color: rgb(102, 102, 102);
    padding-bottom: 2%;
  }
  .dataset-box{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width:100%;
    padding-top: 1%;
    background-color: rgb(212, 212, 212);
    padding-bottom: 2%;
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
  }
  .result-panel{
    background-color: white;
    width: 50%;
    height: 600px;
    overflow-y: scroll;
  }
  </style>
  