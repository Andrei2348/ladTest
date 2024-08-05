<template>
  <div>
    <CurrencySelector v-model="baseCurrency" />
    <CurrencySelector v-model="quoteCurrency" />
    <!-- <select v-model="baseCurrency">
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="BYN">BYN</option>
      <option value="RUB">RUB</option>
    </select>

    <select v-model="quoteCurrency">
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="BYN">BYN</option>
      <option value="RUB">RUB</option>
    </select> -->

    <input type="number" v-model="amount" placeholder="Количество">
    <span>{{ amount }} {{ baseCurrency }}</span> = {{ amount * exchangeRate }} {{ quoteCurrency }}
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, ComputedRef } from 'vue';
import { useCurrencyStore } from '../store/currencyStore';
import CurrencySelector from './CurrencySelector.vue';

const currencyStore = useCurrencyStore();
const baseCurrency = ref<string>(currencyStore.baseCurrency);
const quoteCurrency = ref<string>(currencyStore.quoteCurrency);
const amount = ref<number>(1);

watch([baseCurrency, quoteCurrency], () => {
  currencyStore.baseCurrency = baseCurrency.value
  currencyStore.quoteCurrency = quoteCurrency.value
  currencyStore.fetchExchangeRate();
}, { immediate: true });


const exchangeRate: ComputedRef<number> = computed(() => currencyStore.exchangeRate);
</script>
