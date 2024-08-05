<template>
    <select v-model="selectedCurrency">
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="BYN">BYN</option>
      <option value="RUB">RUB</option>
    </select>
  </template>
  
  <script setup lang="ts">
  import { ref, watch } from 'vue';
  import { useCurrencyStore } from '../../store/currencyStore';
  const currencyStore = useCurrencyStore();
  
  const props = defineProps({
    currency: String,
  });
  const selectedCurrency = ref<string>(currencyStore[props.currency]);
  
  watch(selectedCurrency, (newSelectedValue) => {
    currencyStore[props.currency] = newSelectedValue;
  });
  </script>
  