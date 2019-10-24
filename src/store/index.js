import Vue from 'vue'
import Vuex from 'vuex'
import { coursesState, categoriesState, commentsState, languageState } from './modules';

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    modules: {
      coursesState,
      categoriesState,
      commentsState,
      languageState,
    },
    state() {
    },
    mutations: {},
    actions: {},
  })
}
