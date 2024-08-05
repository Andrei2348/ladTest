<template>
  <div>
    <CurrencySelector :currency='`baseCurrency`' />
    <CurrencySelector :currency='`quoteCurrency`' />
    <input type="number" v-model="amount" placeholder="Количество">
    <span>{{ amount }} {{ baseCurrency }}</span> = {{ amount * exchangeRate }} {{ quoteCurrency }}
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, ComputedRef } from 'vue';
import { useCurrencyStore } from '../store/currencyStore';
import CurrencySelector from './UI/CurrencySelector.vue';

const currencyStore = useCurrencyStore();
const baseCurrency: ComputedRef<string> = computed(() => currencyStore.baseCurrency);
const quoteCurrency: ComputedRef<string> = computed(() => currencyStore.quoteCurrency);
const exchangeRate: ComputedRef<number> = computed(() => currencyStore.exchangeRate);
const amount = ref<number>(1);
watch([baseCurrency, quoteCurrency], () => {
  console.log('changed')
  currencyStore.fetchExchangeRate();
}, { immediate: true });
</script>
