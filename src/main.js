import Vue from 'vue'
import 'helpers/veevalidateCommonRules';
import App from './App.vue'
import {API_URL_PROD, API_VERSION} from 'config/constants';
import * as axiosClient from 'utils/api/axiosClient';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

import { createStore } from './store'
import { createRouter } from './router'
import { sync } from 'vuex-router-sync';

Vue.config.productionTip = false;

export async function createApp({
  beforeApp = () => {
  },
  afterApp = () => {
  }
} = {}) {
  const router = createRouter();
  const store = createStore();
  sync(store, router);

  Vue.component('ValidationProvider', ValidationProvider);
  Vue.component('ValidationObserver', ValidationObserver);

  await beforeApp({
    router,
    store,
  });

  axiosClient.init({store, API_URL_PROD, API_VERSION});

  const app = new Vue({
    store,
    router,
    render: h => h(App)
  });

  const result = {
    app,
    router,
    store,

  };

  await afterApp(result);

  return result
}
