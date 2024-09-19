<template>
    <div class="gallerypage-container" >
        <h2 class="cnt-title" style="align-self:flex-start;margin-left:7%;margin-top:5%">Gallery</h2>
        <div class="gallerycard-container">
            <GalleryCard
                imageSrc="/imgs/bicycle_flow.jpg"
                galleryName="Bicycle Flow in Summer"
            />
            <GalleryCard
                imageSrc="/imgs/population_distribution.jpg"
                galleryName="Population Distribution of the United States"
            />
            <GalleryCard
                imageSrc="/imgs/winged_migration.jpg"
                galleryName="Winged Migration"
            />
            <GalleryCard
                imageSrc="/imgs/song.jpg"
                galleryName="Songs and Sunsets"
            />
            <GalleryCard
                imageSrc="/imgs/activity.jpg"
                galleryName="Going with the Flow or March to the Peak of your own Ridge?"
            />
            <GalleryCard
                imageSrc="/imgs/disease_fears.jpg"
                galleryName="Mountains Out of Molehills"
            />
            <GalleryCard
                imageSrc="/imgs/trendiest_baby_names.jpg"
                galleryName="Trendiest Female Baby Names"
            />
        </div>
    </div>
    
  </template>
  
  <script>
  import GalleryCard from './GalleryCard.vue';
  export default {
    name: 'GalleryPage',
    components: {
    GalleryCard
  }
  }
  </script>
  
  <style scoped>
  .gallerypage-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 1%;
  }
  .gallerycard-container{
    display: flex;
    justify-content:center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 10px;
    width: auto;
    width:1200px;
  }
  </style>
  