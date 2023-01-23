import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index.js';

const app = createApp(App);

app.config.globalProperties.$filters = {
  valorEmReal(valor) {
    return valor.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  },
};

app.use(store).use(router).mount('#app');
