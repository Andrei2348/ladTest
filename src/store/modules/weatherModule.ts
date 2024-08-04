// src/stores/weatherStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useWeatherStore = defineStore({
  id: 'weather',
  state: () => ({
    weatherData: null,
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchWeather(city) {
      this.isLoading = true;
      try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`);
        this.weatherData = response.data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
