import { defineStore } from 'pinia';
import axios from 'axios';

interface Geo {
  lat: number;
  lon: number;
}

export const useWeatherStore = defineStore({
  id: 'weather', 
  state: () => ({
    weatherData: null,
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchWeather(city: string) {
      const appid = '9ea1b8e6e8a329326dde2168fd5ce137';
      this.isLoading = true;
      this.error = null;

      try {
        const { data } = await axios.get<Geo[]>('http://api.openweathermap.org/geo/1.0/direct', {
          params: {
            q: city,
            limit: 1,
            appid
          }
        });

        if (!data.length) {
          this.weatherData = null;
          return;
        }

        const geo: Geo = {
          lat: data[0].lat,
          lon: data[0].lon
        };
        
        const { data: weather } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            lat: geo.lat,
            lon: geo.lon,
            units: 'metric',
            lang: 'ru',
            appid
          }
        });
        this.weatherData = weather;
      } catch (err) {
        this.error = `Возникла ошибка: ${err}`;
        alert(this.error);
      } finally {
        this.isLoading = false;
      }
    }
  }
});

