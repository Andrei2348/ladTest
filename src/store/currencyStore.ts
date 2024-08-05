import { defineStore } from 'pinia';
import axios from 'axios';

interface CurrencyState {
  baseCurrency: string;
  quoteCurrency: string;
  exchangeRate: number;
}

export const useCurrencyStore = defineStore({
  id: 'currency',
  state: (): CurrencyState => ({
    baseCurrency: 'USD',
    quoteCurrency: 'EUR',
    exchangeRate: 0,
  }),
  actions: {
    async fetchExchangeRate() {
      try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${this.baseCurrency}`);
        this.exchangeRate = response.data.rates[this.quoteCurrency];
      } catch (error) {
        console.error('Ошибка при получении курса валют:', error);
      }
    },
  },
});

