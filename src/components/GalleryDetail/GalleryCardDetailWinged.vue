<template>
    <div class="gallery-card" >
      <a href="/imgs/winged_migration.jpg" target="_blank">
        <img width="480px" height="540px" src="/imgs/winged_migration.jpg" alt="">
      </a>
      <p class="img-r-description">
        <b class="img-title">Winged Migration</b>
        <br>
        <i>A ridgeline plot visualizing Google Trend of five migration bird species in Canada.</i>
        <br>
        <br>
        This ridgeline plot is based on the classic AREA graph and shows the distribution of the number of searches for
        the five migration bird species in Canada, and interestingly, the peaks correspond exactly to the timing of
        their migration.
        <br>
        <br>
        Dataset: <a href="./data/canada birds.csv">Google Trend</a>
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
  