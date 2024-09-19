<template>
    <div class="gallery-card" >
        <a href="/imgs/bicycle_flow.jpg" target="_blank">
            <img width="480px" height="320px" src="/imgs/bicycle_flow.jpg" alt="">
          </a>
          <p class="img-r-description">
            <b class="img-title">Bicycle Flow in Summer</b>
            <br>
            <i>A cyclic ridgeline plot visualizing bicycle flow of Washington D.C. station in summer.</i>
            <br>
            <br>
            This cyclic ridgeline plot highlights two peaks, one at 6:30.A.M.-8:30.A.M., which is the time
            period when residents go to work, and the other at 16:00.P.M.-19:00.P.M., which is the time period when
            residents go back to home.
            <br>
            <br>
            Dataset: <a
              href="https://www.kaggle.com/datasets/marklvl/bike-sharing-dataset/data?select=hour.csv">https://www.kaggle.com/datasets/marklvl/bike-sharing-dataset/data?select=hour.csv</a>
          </p>
    </div>
  </template>
  
  <script>
  export default {
   
  name: 'GalleryCardDetailBicycle',
  props: ['name'],
  computed: {
    galleryName() {
      return this.$route.params.name;
    }
  },
    
    methods: {
      // 鼠标悬浮时滚动到图片底部
      scrollImage() {
        const imageWrapper = this.$refs.imageWrapper;
        imageWrapper.scrollTo({
          top: imageWrapper.scrollHeight, // 滚动到图片容器的底部
          behavior: 'smooth' // 平滑滚动
        });
      },
      // 鼠标移出时恢复到顶部
      resetScroll() {
        const imageWrapper = this.$refs.imageWrapper;
        imageWrapper.scrollTo({
          top: 0, // 恢复滚动到顶部
          behavior: 'smooth'
        });
      }
    }
  }
  </script>
  
  <style scoped>
  
  .gallery-card {
    background-color: rgb(255, 255, 255);
    display: flex;
    overflow: hidden;
    position: relative;
    margin-top: 5%;
    justify-content: center;
    padding: 5%;
  }

  .image-wrapper {
    height: 280px; /* 图片容器的初始高度 */
    overflow-y: hidden; /* 超出的部分隐藏 */
    scroll-behavior: smooth; /* 平滑滚动 */
  }
  
  .gallery-img {
    width: 100%;
    height: auto;
  }
  
  .img-r-description {
    text-align: left;
    font-size: 14px;
    padding-left: 5%;
    width: 40%;
  }
  
  </style>
  