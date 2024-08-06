<template>
  <div class="currency__wrapper">
    <h2 class="currency__title">Конвертер валют</h2>
    <div class="currency__selector-wrapper">
      <CurrencySelector :currency='`baseCurrency`' />
      <input class="currency__input" type="number" v-model="amount" placeholder="Введите сумму">
    </div>
    <div class="currency__selector-wrapper">
      <CurrencySelector :currency='`quoteCurrency`' />
      <p class="currency__text">{{ amount }} {{ baseCurrency }} = {{ Number((amount * exchangeRate).toFixed(2)) }} {{ quoteCurrency }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, ComputedRef } from 'vue';
import { useCurrencyStore } from '../store/useCurrencyStore';
import CurrencySelector from './UI/CurrencySelector.vue';

const currencyStore = useCurrencyStore();
const baseCurrency: ComputedRef<string> = computed(() => currencyStore.baseCurrency);
const quoteCurrency: ComputedRef<string> = computed(() => currencyStore.quoteCurrency);
const exchangeRate: ComputedRef<number> = computed(() => currencyStore.exchangeRate);
const amount = ref<number>(1);
watch([baseCurrency, quoteCurrency], () => {
  currencyStore.fetchExchangeRate();
}, { immediate: true });
</script>

<style scoped lang='scss'>
.currency{
  &__wrapper{
    margin-top: 45px;
  }
  &__selector-wrapper{
    display: flex;
    margin-bottom: 20px;
  }
  &__title{
    font-size: 24px;
    line-height: 1.3;
    font-weight: 600;
    color: #333;
    margin-bottom: 20px;
  }
  &__input{
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    border: none;
    border-bottom: 1px solid #555555;
    padding: 10px 6px;
    outline: none;
    width: 230px;
    color: #444444;
    background-color: #e7e7e7;
  }
  &__input::placeholder{
    color: #44444434;
  }
  &__text{
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    border-bottom: 1px solid #555555;
    padding: 10px 6px;
    width: 230px;
    color: #444444;
  }
}
</style>
