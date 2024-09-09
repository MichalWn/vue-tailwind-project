import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/app.css'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
const app = createApp(App)

library.add(faChevronDown);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router)
app.mount('#app')
