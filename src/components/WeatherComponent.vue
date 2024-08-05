<template>
  <div class="weather__wrapper">
    <input 
      class="weather__input" 
      v-model="inputValue" 
      @keyup.enter="handleGetCity" 
      type="text"
      placeholder="Введите название города"
      >
    <button class="weather__button button" @click="handleGetCity" :disabled="!inputValue">Получить прогноз</button>
    <div class="weather__loading" v-if="isLoading">Загрузка...</div>
    <div class="weather__error" v-if="error">{{ error }}</div>
    <div class="weather__content-wrapper" v-if="weatherData">
      <p class="weather__content">Погода в городе {{ inputValue }}:</p>
      <p class="weather__content">Температура: {{ Math.round(weatherData.main.temp) }} °C</p>
      <p class="weather__content">Ощущается как: {{ Math.round(weatherData.main.feels_like) }} °C</p>
      <p class="weather__content">{{ weatherData.weather[0].description.replace(/^./, weatherData.weather[0].description[0].toUpperCase()) }}</p>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useWeatherStore } from '../store/useWeatherStore';
const weatherStore = useWeatherStore();

const inputValue = ref('');
const handleGetCity = () => {
  if(inputValue.value.length > 0){
    weatherStore.fetchWeather(inputValue.value);
  }
}
const { isLoading, weatherData, error } = storeToRefs(weatherStore);
</script>

<style scoped lang='scss'>
.weather{
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
}
</style>
  