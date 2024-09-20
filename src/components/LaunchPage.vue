<template>
  <div>
    <h5>Loading...</h5>
  </div>
</template>

<script>
export default {
  name: 'AppLaunchPage',
  mounted() {
    window.location.href = 'https://ridge-builder-app.vercel.app/';
  }
}
</script>

<style scoped>
/* Component-specific styles */
</style>
