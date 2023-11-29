<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
  <page-footer></page-footer>
</template>

<script setup>
import NavBar from '@/views/NavBar/NavBar.vue'
import PageFooter from '@/views/PageFooter/PageFooter.vue'
import { useStore } from 'vuex'

const store = useStore()
const setColorScheme = (isLight) => {
  const colorScheme = isLight ? 'light' : 'dark'
  store.dispatch('getCurThemeAndSet', colorScheme)
  document.documentElement.className = colorScheme
}
const isLight = window.matchMedia('(prefers-color-scheme:light)')
setColorScheme(isLight.matches)
isLight.addEventListener('change', (matcheLight) => {
  console.log(matcheLight.matches)
  setColorScheme(matcheLight.matches)
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: var(--background-color-primary);
}
:root {
  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;
  --sun-color: #f0c420;
  --moon-color: #f0c420;
}
:root.dark {
  --background-color-primary: #1e1e1e;
  --background-color-secondary: #2d2d30;
  --accent-color: #3f3f3f;
  --text-primary-color: #ddd;
}
</style>
