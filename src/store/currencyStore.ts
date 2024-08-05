import { defineStore } from 'pinia';
import axios from 'axios';

export const useCurrencyStore = defineStore({
  id: 'currency',
  state: () => ({
    baseCurrency: 'USD', 
    quoteCurrency: 'EUR', 
    exchangeRate: 0, 
  }),
  actions: {
    async fetchExchangeRate() {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/' + this.baseCurrency);
        this.exchangeRate = response.data.rates[this.quoteCurrency];
        console.log(this.exchangeRate)
      } catch (error) {
        console.error('Ошибка при получении курса валют:', error);
      }
    },
  },
});
