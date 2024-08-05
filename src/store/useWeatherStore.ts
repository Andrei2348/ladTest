import { ref } from 'vue';
import axios from 'axios';

interface Geo {
  lat: number;
  lon: number;
}

interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
  };
  weather: {
    description: string;
  }[];
}

export function useWeatherStore() {
  const weatherData = ref<WeatherData | null>(null);
  const isLoading = ref<boolean>(false);
  const error = ref<string | null>(null);

  async function fetchWeather(city: string) {
    const appid = '9ea1b8e6e8a329326dde2168fd5ce137';
    isLoading.value = true;
    error.value = null;

    try {
      const { data } = await axios.get<Geo[]>('http://api.openweathermap.org/geo/1.0/direct', {
        params: {
          q: city,
          limit: 1,
          appid
        }
      });

      if (!data.length) {
        weatherData.value = null;
        return;
      }

      const geo: Geo = {
        lat: data[0].lat,
        lon: data[0].lon
      };

      const { data: weather } = await axios.get<WeatherData>('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          lat: geo.lat,
          lon: geo.lon,
          units: 'metric',
          lang: 'ru',
          appid
        }
      });

      weatherData.value = weather;
    } catch (err) {
      error.value = `Возникла ошибка: ${err}`;
      alert(error.value);
    } finally {
      isLoading.value = false;
    }
  }

  return {
    weatherData,
    isLoading,
    error,
    fetchWeather
  };
}
