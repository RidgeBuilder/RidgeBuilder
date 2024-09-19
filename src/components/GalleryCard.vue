<template>
    <div class="gallery-card" @mouseover="scrollImage" @mouseleave="resetScroll" @click="goToDetailPage">
      
        <div class="image-wrapper" ref="imageWrapper">
          <img :src="`/RidgeBuilder/${imageSrc}`" alt="Gallery Image" class="gallery-img">
        </div>
    
      <p class="img-r-description">
        {{ galleryName }}
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GalleryCard',
    props: {
      imageSrc: {
        type: String,
        required: true
      },
      galleryName: {
        type: String,
        required: true
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
      },
      goToDetailPage() {
      const name = this.galleryName.includes(" ")? this.galleryName.split(" ")[0]:this.galleryName; // 获取名称中的第一部分
      this.$router.push({ 
        name: `GalleryCardDetail${name}`, // 路由的名字应是固定的
        params: { name } // 通过 params 传递 name 参数
      });
    }}
  }
  </script>
  
  <style scoped>
  
  .gallery-card {
    background-color: rgb(255, 255, 255);
    flex-basis: 320px; 
    margin: 10px;
    display: flex;
    flex-direction: column;
    height: 350px; /* 固定卡片高度 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1); /* 添加阴影 */
    overflow: hidden;
    position: relative;
    border: 1px solid rgb(212, 212, 212);
    cursor: pointer;
  }
  .gallery-card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 40px rgba(0, 0, 0, 0.2); /* 鼠标悬浮时增加阴影效果 */
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
  }
  
  </style>
  