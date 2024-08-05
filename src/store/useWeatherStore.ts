// import { ref } from 'vue';
// import axios from 'axios';

// interface Geo {
//   lat: number;
//   lon: number;
// }

// export function useWeatherStore() {
//   const weatherData = ref(null);
//   const isLoading = ref<boolean>(false);
//   const error = ref<string | null>(null);

//   async function fetchWeather(city: string) {
//     const appid = '9ea1b8e6e8a329326dde2168fd5ce137';
//     isLoading.value = true;
//     error.value = null;

//     try {
//       const { data } = await axios.get<Geo[]>('http://api.openweathermap.org/geo/1.0/direct', {
//         params: {
//           q: city,
//           limit: 1,
//           appid
//         }
//       });

//       if (!data.length) {
//         weatherData.value = null;
//         return;
//       }

//       const geo: Geo = {
//         lat: data[0].lat,
//         lon: data[0].lon
//       };

//       const { data: weather } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
//         params: {
//           lat: geo.lat,
//           lon: geo.lon,
//           units: 'metric',
//           lang: 'ru',
//           appid
//         }
//       });

//       weatherData.value = weather;
//     } catch (err) {
//       error.value = `Возникла ошибка: ${err}`;
//       alert(error.value);
//     } finally {
//       isLoading.value = false;
//     }
//   }

//   return {
//     weatherData,
//     isLoading,
//     error,
//     fetchWeather
//   };
// }



// import {watch, reactive } from 'vue';
// import axios from 'axios';

// interface Geo {
//   lat: number;
//   lon: number;
// }

// export function useWeatherStore() {
//   const state = reactive({
//     weatherData: null,
//     isLoading: false,
//     error: null,
//   });

//   async function fetchWeather(city: string) {
//     const appid = '9ea1b8e6e8a329326dde2168fd5ce137';
//     state.isLoading = true;
//     state.error = null;

//     try {
//       const { data } = await axios.get<Geo[]>('http://api.openweathermap.org/geo/1.0/direct', {
//         params: {
//           q: city,
//           limit: 1,
//           appid
//         }
//       });

//       if (!data.length) {
//         state.weatherData = null;
//         return;
//       }

//       const geo: Geo = {
//         lat: data[0].lat,
//         lon: data[0].lon
//       };
      
//       const { data: weather } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
//         params: {
//           lat: geo.lat,
//           lon: geo.lon,
//           units: 'metric',
//           lang: 'ru',
//           appid
//         }
//       });
//       state.weatherData = weather;
//       console.log(state.weatherData)
//     } catch (err) {
//       state.error = `Возникла ошибка: ${err}`;
//       alert(state.error);
//     } finally {
//       state.isLoading = false;
//     }
//   }



//   return {
//     ...state,
//     fetchWeather
//   };
// }



import { defineStore } from 'pinia';
import axios from 'axios';

interface Geo {
  lat: number;
  lon: number;
}

export const useWeatherStore = defineStore({
  id: 'weather', // Уникальный идентификатор хранилища
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
        console.log(this.weatherData)
      } catch (err) {
        this.error = `Возникла ошибка: ${err}`;
        alert(this.error);
      } finally {
        this.isLoading = false;
      }
    }
  }
});
