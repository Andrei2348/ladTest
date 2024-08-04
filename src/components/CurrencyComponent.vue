<template>
    <div id="app">
      <h1>Currency Converter</h1>
      <div>
        <label for="amount">Amount:</label>
        <input v-model.number="amount" id="amount" type="number" />
      </div>
      <div>
        <label for="from">From:</label>
        <select v-model="fromCurrency" id="from">
          <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}</option>
        </select>
      </div>
      <div>
        <label for="to">To:</label>
        <select v-model="toCurrency" id="to">
          <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}</option>
        </select>
      </div>
      <div>
        <button @click="convertCurrency">Convert</button>
      </div>
      <div v-if="result !== null">
        <p>{{ amount }} {{ fromCurrency }} = {{ result }} {{ toCurrency }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useCurrencyStore } from './stores/currencyStore';
  
  export default {
    setup() {
      const currencyStore = useCurrencyStore();
  
      const amount = ref(0);
      const fromCurrency = ref('USD');
      const toCurrency = ref('EUR');
      const result = ref(null);
  
      const currencies = Object.keys(currencyStore.rates);
  
      const convertCurrency = () => {
        result.value = currencyStore.convert(amount.value, fromCurrency.value, toCurrency.value);
      };
  
      return {
        amount,
        fromCurrency,
        toCurrency,
        result,
        currencies,
        convertCurrency,
      };
    }
  };
  </script>
  
  <style scoped>
  #app {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
  label {
    display: block;
    margin: 0.5em 0 0.2em;
  }
  input, select {
    width: 100%;
    padding: 0.5em;
    margin-bottom: 1em;
  }
  button {
    padding: 0.5em 1em;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>