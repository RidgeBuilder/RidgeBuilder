<template>
    <div class="gallery-card" >
      <a href="/imgs/activity.jpg" target="_blank">
        <img width="480px" height="530px" src="/imgs/activity.jpg" alt="">
      </a>
      <p class="img-r-description">
        <b class="img-title">Going with the Flow or March to the Peak of your own Ridge?</b>
        <br>
        <i>A cyclic ridgeline plot visualizing the temporal distribution of American activity preferences. Being
          reproduced from the artwork created by Lindberg.</i>
        <br>
        <br>
        Number of participants throughout the day compared to peak popularity. Note the spiral line reveals
        different activity time preference. There are morning-and-evening everyday workouts the midday
        hobbies, and the evenings/late nights out.
        <br>
        <br>
        Dataset: <a href="https://www.bls.gov/tus/home.htm">https://www.bls.gov/tus/home.htm</a>
        <br>
        Reference: <a href="https://twitter.com/hnrklndbrg/status/883675698300420098">Peak time for sports and leisure
          #dataviz</a>
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
  