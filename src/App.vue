<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HeadNavigator/>
  <div class="router-view-content">
    <router-view  />
  </div>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeadNavigator from './components/HeadNavigator.vue';

export default {
  name: 'App',
  components: {
    HeadNavigator
  }
}
</script>

<style scoped>
.router-view-content {
  display: flex;
  justify-content: center; 
  align-items: center;
  margin-top: 2%;
}


</style>
