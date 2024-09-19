<template>
    <div class="gallery-card" >
        <a href="/imgs/population_distribution.jpg" target="_blank">
            <img width="480px" height="320px" src="/imgs/population_distribution.jpg" alt="">
          </a>
          <p class="img-r-description">
            <b class="img-title">Population Distribution of the United States</b>
            <br>
            <i>A geo ridgeline plot based on geographic map visualizing the population distribution of the United States.
              Being reproduced from the artwork created by J. Cheshire.</i>
            <br>
            <br>
            The distribution of Los Angeles, Chicago, Washington, D.C., and New York is visualized with red lines,
            highlighting the cities with the highest populations in the United States.
            <br>
            <br>
            Dataset: <a
              href="https://www.kaggle.com/datasets/marklvl/bike-sharing-dataset/data?select=hour.csv">https://www.kaggle.com/datasets/marklvl/bike-sharing-dataset/data?select=hour.csv</a>
            <br>
            Reference: <a
              href="https://jcheshire.com/featured-maps/population-lines-how-and-why-i-created-it/">https://jcheshire.com/featured-maps/population-lines-how-and-why-i-created-it/</a>
          </p>
    </div>
  </template>
  
  <script>
  export default {
   
  name: 'GalleryCardDetail',
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
  