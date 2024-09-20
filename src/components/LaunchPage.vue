<template>
  <div>
    <h5>Loading...</h5>
  </div>
</template>

<script>
export default {
  name: 'AppLaunchPage',
  mounted() {
    // Redirect to the desired URL when the component is mounted
    window.location.href = 'https://ridge-builder-app.vercel.app/'; // Replace with your target URL
  }
}
</script>

<style scoped>
/* Component-specific styles */
</style>
