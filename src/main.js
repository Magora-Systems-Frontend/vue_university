import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { API_URL_PROD, API_VERSION } from 'config/constants';
import store from './store'
import { routes } from './routes';
import * as axiosClient from 'utils/api/axiosClient';

axiosClient.init({store, API_URL_PROD, API_VERSION});
Vue.config.productionTip = false;
Vue.use(VueRouter);
const router = new VueRouter({ routes });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
