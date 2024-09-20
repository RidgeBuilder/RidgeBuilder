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
      
      scrollImage() {
        const imageWrapper = this.$refs.imageWrapper;
        imageWrapper.scrollTo({
          top: imageWrapper.scrollHeight, 
          behavior: 'smooth'
        });
      },
 
      resetScroll() {
        const imageWrapper = this.$refs.imageWrapper;
        imageWrapper.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      },
      goToDetailPage() {
      const name = this.galleryName.includes(" ")? this.galleryName.split(" ")[0]:this.galleryName; 
      this.$router.push({ 
        name: `GalleryCardDetail${name}`, 
        params: { name } 
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
    height: 350px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1); 
    overflow: hidden;
    position: relative;
    border: 1px solid rgb(212, 212, 212);
    cursor: pointer;
  }
  .gallery-card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 40px rgba(0, 0, 0, 0.2); 
  }

  .image-wrapper {
    height: 280px; 
    overflow-y: hidden; 
    scroll-behavior: smooth; 
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
  