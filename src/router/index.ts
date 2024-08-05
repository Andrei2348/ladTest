import { createRouter, createWebHistory } from 'vue-router';
import WeatherComponent from '../components/WeatherComponent.vue';
import CurrencyComponent from '../components/CurrencyComponent.vue';

const routes = [
  {
    path: '/',
    name: 'Weather',
    component: WeatherComponent
  },
  {
    path: '/currency-converter',
    name: 'CurrencyConverter',
    component: CurrencyComponent
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;