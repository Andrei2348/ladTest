<template>
  <select class="selector__inner" v-model="selectedCurrency">
    <option class="selector__option" value="USD">USD</option>
    <option class="selector__option" value="EUR">EUR</option>
    <option class="selector__option" value="BYN">BYN</option>
    <option class="selector__option" value="RUB">RUB</option>
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

<style scoped lang='scss'>
.selector{
  &__inner{
    background-color: #e7e7e7;
    outline: none;
    border: 1px solid #444444;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 400;
    color: #444444;
    margin-right: 10px;
    cursor: pointer;
    padding: 6px 5px;
  }
  &__option{
    color: #444444;
  }
}
</style>
  