<template>
    <div>
      <input v-model="city" @keyup.enter="fetchWeather">
      <button @click="fetchWeather">Получить погоду</button>
      <div v-if="isLoading">Загрузка...</div>
      <div v-if="error">{{ error }}</div>
      <div v-if="weatherData">
        Погода в {{ city }}: {{ weatherData.main.temp }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useWeatherStore } from '../store/modules/weatherModule';
  
  const city = ref('');
  const { fetchWeather, isLoading, error, weatherData } = useWeatherStore();
  </script>
  