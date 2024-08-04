import { createRouter, createWebHistory } from 'vue-router';
import WeatherPage from '../pages/WeatherPage.vue';
import CurrencyConverter from '../pages/CurrencyConverter.vue';

const routes = [
  {
    path: '/',
    name: 'Weather',
    component: WeatherPage
  },
  {
    path: '/currency-converter',
    name: 'CurrencyConverter',
    component: CurrencyConverter
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;