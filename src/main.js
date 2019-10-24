import Vue from 'vue'
import App from './App.vue'
import {API_URL_PROD, API_VERSION} from 'config/constants';
import * as axiosClient from 'utils/api/axiosClient';

import {createStore} from './store'
import {createRouter} from './router'


Vue.config.productionTip = false;

export async function createApp({
                                  beforeApp = () => {
                                  },
                                  afterApp = () => {
                                  }
                                } = {}) {
  const router = createRouter();
  const store = createStore();

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
