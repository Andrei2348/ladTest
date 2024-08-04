<template>
  <div id="app">
    <nav>
      <router-link to="/">Weather</router-link>
      <router-link to="/currency-converter">Currency Converter</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  setup() {}
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  background-color: #f8f9fa;
  padding: 1em;
}
nav a {
  color: #007bff;
  text-decoration: none;
}
nav a:hover {
  text-decoration: underline;
}
</style>