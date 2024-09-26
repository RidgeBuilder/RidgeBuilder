<template>
    <div class="homepage-container">
        <div class="abstract-container">
            <div class="abstract-container02">
                <h1 id="paper-title">RidgeBuilder</h1>
                <p id="paper-subtitle">Interactive Authoring of Expressive Ridgeline Plots</p>
                <router-link class="btn-launch" to="/app" role="button">Launch RidgeBulider</router-link>
            </div>
            
            <p id="abstract">
            Ridgeline plots are frequently used to visualize the evolution or distributions of multiple series using a pile of
            overlapping line, area, or bar charts, highlighting the peak patterns among these series. While the existing
            studies have mainly seen ridgeline plots as a type of small multiple visualization, the signature ridge-like
            patterns in these plots have increasingly attracted graphic designers to create appealing data visualizations
            based on customized ridgeline plots. However, many authoring tools only support creating basic ridgeline plots and
            overlook the diverse layouts and styles of these plots. In this paper, we present a comprehensive design space of
            ridgeline plots by surveying the usages of such plots, specifically focusing on delineating their diverse layouts
            and expressive styles. Based on this design space, we introduce RidgeBuilder, an intuitive tool that facilitates
            the fast authoring of expressive ridgeline plots with intuitive interactions and user-friendly recommendations. In
            particular, we summarize three goals for refining the layout of ridgeline plots and propose an optimization method
            that automatically generates an optimal order of the series in the plots. The effectiveness of RidgeBuilder is
            evaluated with a replication study where the participants were asked to recreate the existing complex ridgeline
            plots, and both qualitative and quantitative results indicate good usability and usefulness. We also evaluate the
            efficiency and effectiveness of the proposed layout optimization algorithm with anonymized questionnaires.
            Furthermore, the expressiveness of RidgeBuilder are demonstrated with a gallery of ridgeline plots created by our
            tool.
            </p>
        </div>
        
        <br>
        <br>
        
        <div class="video-container">
            
            <video class="video" controls >
                <source src="/usage_senario.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            <h4>Usage Scenario</h4>
        </div>
        <br>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    methods: {
    playVideo(event) {
      event.target.play();
    },
    pauseVideo(event) {
      event.target.pause();
    }
  }
  }
  </script>
  
  <style scoped>
  .homepage-container{
    background-color:#ffffff ;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
  }
  .btn-launch {
    width: 40%;
    background-color: #50A24F;
    padding: 12px 24px;
    border-radius: 2px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    transition: background-color 0.1s linear, box-shadow 0.1s linear; }
    .btn-launch, .btn-launch:visited
     {
      color: white; }
    .btn-launch:hover
    {
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
      color: white;
      background-color: #50A24F;
      text-decoration: none; }
    .btn-launch:focus {
      outline: none;
      box-shadow: 0 0 0 0.2em #50A24F;
      text-decoration: none; }
  
  .btn-launch {
    display: inline-block;
    vertical-align: top;
    height: 20px;
    line-height: 20px;
    text-align: center;
    }

    a {text-decoration: none; }
        
    a:hover {
          text-decoration: underline; }
       

  .abstract-container{
    width: 100%;
    background-color:#E2E2E2 ;
    color: #000000;
    display: flex;
    gap:5%;
    padding-bottom: 5%;
    padding-top: 5%;
    align-items: center;
    justify-content: center;
    margin: auto;

  }
  .abstract-container02{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  #paper-title {
    font-size: 30px;
    text-align: left;
  }
  #paper-subtitle {
    font-size: 20px;
    text-align: left;
  }
  #abstract {
    text-align: justify;
    margin-top: 20px;
    font-size: 14px;
    width: 50%;
  }
  .video-container {
    display: flex;
    justify-content:center;
    gap:10%;
    align-items: center;
    width: 90%;
    margin-top: 10%;
    margin: auto;
  }
  .video {
    width: 70%;
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);
  }
  
  </style>
  
