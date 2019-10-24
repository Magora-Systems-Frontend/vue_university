import Vue from 'vue'
import Vuex from 'vuex'
import {
  coursesState, categoriesState, commentsState,
  languageState, modalsState,
} from './modules';

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    modules: {
      coursesState,
      categoriesState,
      commentsState,
      languageState,
      modalsState,
    },
    state() {
    },
    mutations: {},
    actions: {},
  })
}
