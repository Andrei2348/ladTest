<template>
  <div class="main" id="app">
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style scoped lang="scss">
.main{
  height: 100vh;
  background-color: #e7e7e7;
}
</style>