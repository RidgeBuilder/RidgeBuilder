<template>
    <div class="gallery-card" >
      <a href="/imgs/song.jpg" target="_blank">
        <img width="480px" height="557px" src="/imgs/song.jpg" alt="">
      </a>
      <p class="img-r-description">
        <b class="img-title">Songs and Sunsets</b>
        <br>
        <i>A ridgeline plot visualizing a user's music listening preferences.</i>
        <br>
        <br>
        This ridgeline plot shows the distribution of a user's listening preferences for each month based on the bar
        element. Since the user mainly focuses on listening at dusk, an orange background is used to represent
        the time of sunset.
        <br>
        <br>
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
  