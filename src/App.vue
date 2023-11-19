<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
  <page-footer></page-footer>
</template>

<script setup>
import NavBar from '@/views/NavBar/NavBar.vue'
import PageFooter from '@/views/PageFooter/PageFooter.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
