import { createApp } from 'vue';
import './style.css';
import { createPinia } from 'pinia';
import router from './router/index';
import App from './App.vue'
import { setupStore } from './store/store'

const app = createApp(App);
const pinia = createPinia();
setupStore(app);
app.use(pinia);
app.use(router);
app.mount('#app');