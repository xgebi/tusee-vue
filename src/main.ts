import '@/styles/main.scss';
import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { createI18n } from 'vue-i18n';

import en from './locales/en.json';

type MessageSchema = typeof en;

const i18n = createI18n<[MessageSchema], 'en'>({
  locale: 'en',
  messages: {
    en: en,
  },
});

createApp(App).use(store).use(router).use(i18n).mount('#app');
