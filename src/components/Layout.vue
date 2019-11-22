/**********************************************/
/* src/components/Layout.vue                  */
/**********************************************/

<template>
  <div class="app_wrapper">
    <!-- main -->
    <div class="main_wrapper">
      <img src="../assets/logo.png">
      <h1 class="title">{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
  }
</script>

<style>
  /*layout*/
  .app_wrapper {
    background-color: #f2f2f2;
    /*main_wrapper*/
    /* .main_wrapper {
      padding-top: 1.95rem;
      .title {
        font-size: 1rem;
        color: #f00;
      }
    } */
  }
</style>