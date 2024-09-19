<template>
    <div class="gallery-card" >
      <a href="/imgs/trendiest_baby_names.jpg" target="_blank">
        <img width="480px" height="757px" src="/imgs/trendiest_baby_names.jpg" alt="">
      </a>
      <p class="img-r-description">
        <b class="img-title">Trendiest Female Baby Names</b>
        <br>
        <i>A ridgeline plot visualizing the trendiest female baby names since 1930, in the U.S. Being reproduced from
          the artwork created by Nathan Yau.</i>
        <br>
        <br>
        This ridgeline plot based on the bar element shows the usage of trendiest female baby names since 1930. Each
        name has a corresponding most popular year and they are arranged horizontally according to the
        corresponding year.
        <br>
        <br>
        Dataset: <a
          href="https://www.ssa.gov/oact/babynames/limits.html">https://www.ssa.gov/oact/babynames/limits.html</a>
        <br>
        Reference: <a
          href="https://flowingdata.com/2022/02/17/trendiest-baby-name-every-year-since-1930-in-the-u-s/">Trendiest baby
          name every year since 1930, in the U.S.</a>
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
  