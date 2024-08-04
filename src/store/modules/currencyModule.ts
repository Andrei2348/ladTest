import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCurrencyStore = defineStore('currency', () => {
  const rates = ref({
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
    // Добавьте другие валюты по необходимости
  });

  const convert = (amount, fromCurrency, toCurrency) => {
    const rate = rates.value[toCurrency] / rates.value[fromCurrency];
    return amount * rate;
  };

  return {
    rates,
    convert,
  };
});