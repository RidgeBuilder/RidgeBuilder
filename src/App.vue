<script>
import HeadNavigator from './components/HeadNavigator.vue';
export default {
  name: 'App',
  components: {
    HeadNavigator
  },
  mounted() {
    if (this.$route.path !== '/') {
      this.$router.push('/');
    }
  }
}
</script>

<template>
  <HeadNavigator />
  <div class="router-view-content">
    <router-view />
  </div>
</template>

<style scoped>
.router-view-content {
  display: flex;
  justify-content: center; 
  align-items: center;
  margin-top: 3%;
}
</style>
