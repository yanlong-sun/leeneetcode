<template>
  <div class="navBar">
    <span @click="handleGoHome">🚀</span>
    <span @click="handleGoAllPractice">{{ $t('allPractice') }}</span>
    <span @click="handleGoToDoList">{{ $t('todoList') }}</span>
    <div class="themeToggle" @click="handleChangeTheme">
      <input class="checkbox" type="checkbox" />
      <label for="checkbox">
        <i class="bi bi-moon-stars-fill"></i>
        <i class="bi bi-brightness-high-fill"></i>
        <div
          class="switch"
          :class="curTheme === 'dark' ? 'switch-dark' : 'switch-light'"
        ></div>
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()

const router = useRouter()
const handleGoHome = () => {
  router.replace('/')
}
const handleGoAllPractice = () => {
  router.push('/allPractice')
}
const handleGoToDoList = () => {
  router.replace('/')
}
const curTheme = ref(store.state.curTheme)
const handleChangeTheme = () => {
  if (curTheme.value === 'light') {
    setTheme('dark')
  } else {
    setTheme('light')
  }
}
const setTheme = (theme) => {
  curTheme.value = theme
  document.documentElement.className = theme
}
</script>

<style lang="less" scoped>
.navBar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  display: flex;
  gap: 48px;
  font-size: 24px;
  align-items: center;
  padding-left: 64px;
  background-color: var(--background-color-secondary);
  color: var(--text-primary-color);
  span {
    cursor: pointer;
  }
  .themeToggle {
    background-color: var(--accent-color);
    border-radius: 20px;
    .checkbox {
      display: none;
    }
    label {
      height: 40px;
      width: 65px;
      margin: 0 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      .bi {
        height: 32px;
        width: 32px;
      }
      .bi-moon-stars-fill {
        color: var(--moon-color);
      }
      .bi-brightness-high-fill {
        color: var(--sun-color);
      }
      .switch {
        height: 34px;
        width: 34px;
        border-radius: 50%;
        background-color: var(--background-color-secondary);
        position: absolute;
        left: 50%;
        top: 50%;
        transition: all 0.3s;
        z-index: 1;
      }
      .switch-light {
        transform: translate(-105%, -50%);
      }
      .switch-dark {
        transform: translate(5%, -50%);
      }
    }
  }
}
</style>
