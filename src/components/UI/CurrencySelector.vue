<template>
    <select v-model="selectedCurrency">
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="BYN">BYN</option>
      <option value="RUB">RUB</option>
    </select>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import { useCurrencyStore } from '../../store/currencyStore';
  import { defineProps } from 'vue';
  
  const props = defineProps({
    modelValue: String,
    currencyType: String,
  });
  
  const currencyStore = useCurrencyStore();
  const selectedCurrency = ref(props.modelValue);
  
  watch(selectedCurrency, (newValue) => {
    if (props.currencyType === 'base') {
      currencyStore.setBaseCurrency(newValue);
    } else if (props.currencyType === 'quote') {
      currencyStore.setQuoteCurrency(newValue);
    }
  });
  </script>
  