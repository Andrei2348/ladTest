import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router/index';
import App from './App.vue'
import './style.css';
// import { setupStore } from './store/store'

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');


// import { createApp } from 'vue';
// import { createPinia } from 'pinia';
// import App from './App.vue';

// const app = createApp(App);

// app.use(createPinia());

// app.mount('#app');
