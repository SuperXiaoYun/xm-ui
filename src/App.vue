<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
    <myTabbar></myTabbar>
  </div>
</template>

<script scoped>
import myTabbar from "@/components/tabbar.vue";

export default {
  data() {
    return {};
  },
  components: {
    myTabbar
  }
};
</script scoped>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width:100%;
}
</style>
