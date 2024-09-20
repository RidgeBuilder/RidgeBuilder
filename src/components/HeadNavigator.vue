<template>
  <header class="site-header" role="banner">
    <div class="wrapper">
      <router-link class="title" rel="author" to="/">
        <img src="/ridgeIcon.svg" alt="RidgeBuilder" style="width: 32px" />
        RidgeBuilder
      </router-link>

      <nav class="nav">
        <div class="trigger">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/gallery">Gallery</router-link>
          <router-link class="nav-link" to="/designSpace">Design Space</router-link>
          <!-- <router-link class="nav-link" to="/about">About</router-link> -->
          <router-link class="btn" to="/app" >Launch</router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeadNavigator',
 
}
</script>

<style scoped>
.site-header {
  display: flex;
  min-height: 54px;
  line-height: 54px;
  background: #848788;
  color: white;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1000; }

.title {
  display: inline-block;
  height: 54px;
  line-height: 54px;
  vertical-align: top; }
  .title:hover {
    text-decoration: none; }
  .title, .title:visited {
    color: #ffffff; }
  .title img {
    height: 32px;
    padding: 11px 0;
    vertical-align: top; }


.nav {
  margin-left: auto;
  min-height: 54px;
  line-height: 54px; }
  .nav .nav-link {
    display: inline-block;
    height: 52px;
    line-height: 52px;
    padding-top: 2px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 0;
    color: #fffefe;
    text-decoration: none;
    border-bottom: 2px solid #848788;
    vertical-align: top;
    transition: border-color 0.1s linear; }
    .nav .nav-link:not(:last-child) {
      margin-right: 1px; }
    .nav .nav-link:hover, .nav .router-link-active:not(:last-child) {
      border-bottom: 2px solid white; }
  @media screen and (max-width: 600px) {
    .nav {
      background: #848788;
      text-align: left;
      border-color: #676767;
      min-height: auto; }
      .nav .nav-link {
        display: block;
        border-bottom: none;
        margin-left: 0;
        padding-left: 20px;
        padding-right: 40px; }
        .nav .nav-link:hover, .nav .nav-link.active {
          background: #2b2b2b;
          border-bottom: none; }
      .nav .btn {
        margin-left: 20px; }
      }

.wrapper {
  width: 90%;
  display: flex;
  justify-content: space-between;
  max-width: calc(1100px - (30px * 2));
  margin-right: auto;
  margin-left: auto;
  }
  @media screen and (max-width: 1100x) {
    .wrapper {
      max-width: -webkit-calc(1100px - (30px));
      max-width: calc(1100px - (30px));
      padding-right: 15px;
      padding-left: 15px; } }


  .btn{
    background-color: #50A24F;
    padding: 12px 24px;
    border-radius: 2px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    transition: background-color 0.1s linear, box-shadow 0.1s linear;
    text-decoration: none; }
    .btn, .btn:visited
   {
      color: white; 
      text-decoration: none;}
    .btn:hover{
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.8);
      color: white;
      background-color: #50A24F;
      text-decoration: none; }
    .btn:focus{
      outline: none;
      box-shadow: 0 0 0 0.2em #50A24F;
      text-decoration: none; }
      
  
  .btn {
    text-decoration: none;
    display: inline-block;
    vertical-align: top;
    height: 34px;
    line-height: 34px;
    margin: 10px 0;
    padding: 0 20px;
    margin-left: 10px; }
    a {
      text-decoration: none;
  }
  

</style>
