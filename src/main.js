import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from "primevue/config";
import 'primeflex/primeflex.css';

import Toolbar from "primevue/toolbar";
import Card from "primevue/card";


import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);
app.use(PrimeVue, { ripple: true} )
app.component('pv-toolbar',Toolbar);
app.component('pv-card',Card);
app.mount('#app');
