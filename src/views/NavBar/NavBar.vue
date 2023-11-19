<template>
  <div class="navBar">
    <span @click="handleGoHome">🚀</span>
    <span @click="handleGoAllPractice">{{ $t('allPractice') }}</span>
    <span @click="handleGoToDoList">{{ $t('todoList') }}</span>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

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
</script>

<style lang="less" scoped>
.navBar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  display: flex;
  gap: 48px;
  font-size: 24px;
  align-items: center;
  margin-left: 64px;
  span {
    cursor: pointer;
  }
}
</style>
