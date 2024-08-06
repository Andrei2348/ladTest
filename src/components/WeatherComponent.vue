<template>
  <div class="weather__wrapper">
    <h2 class="weather__title">Прогноз погоды</h2>
    <input 
      class="weather__input" 
      v-model="inputValue" 
      @keyup.enter="handleGetCity" 
      type="text"
      placeholder="Введите название города"
      >
    <button class="weather__button button" @click="handleGetCity" :disabled="!inputValue">Получить прогноз</button>
    <Loader v-if="isLoading" />
    <div class="weather__error" v-if="error">{{ error }}</div>
    <div class="weather__content-wrapper" v-if="weatherData && !isLoading">
      <p class="weather__content">Погода на сегодня в городе {{ inputValue.charAt(0).toUpperCase() + inputValue.slice(1)}}:</p>
      <p class="weather__content">Температура: {{ Math.round(weatherData.main.temp) }} °C</p>
      <p class="weather__content">Ощущается как: {{ Math.round(weatherData.main.feels_like) }} °C</p>
      <p class="weather__content">Влажность: {{ weatherData.main.humidity }} %</p>
      <p class="weather__content">Давление: {{ weatherData.main.pressure }} кПа</p>
      <p class="weather__content">{{ weatherData.weather[0].description.replace(/^./, weatherData.weather[0].description[0].toUpperCase()) }}</p>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref, computed } from 'vue';
import { useWeatherStore } from '../store/useWeatherStore';
import Loader from '../components/UI/Loader.vue'

const userStore = useWeatherStore()

const inputValue = ref<string>('');

const handleGetCity = (): void => {
  if(inputValue.value.length > 0){
    userStore.fetchWeather(inputValue.value);
  }
}
const weatherData = computed(() => userStore.weatherData);
const isLoading = computed(() => userStore.isLoading);
const error = computed(() => userStore.error);

</script>

<style scoped lang='scss'>
.weather{
  &__wrapper{
    margin-top: 45px;
  }
  &__title{
    font-size: 24px;
    line-height: 1.3;
    font-weight: 600;
    color: #333;
    margin-bottom: 20px;
  }
  &__input{
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    border: none;
    border-bottom: 1px solid #555555;
    padding: 10px 6px;
    outline: none;
    width: 330px;
    color: #444444;
    background-color: #e7e7e7;
  }
  &__input::placeholder{
    color: #44444434;
  }
  &__content-wrapper{
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__content{
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    color: #444444;
  }
  &__loading{
    margin-top: 80px;
    font-size: 18px;
    line-height: 1.3;
    color: #444444;
  }
}
</style>
  