export const LANGUAGE_CONSTANTS = {
  SET_LANGUAGE: 'SET_LANGUAGE',
  GET_LANGUAGE: 'GET_LANGUAGE',
  GET_CURRENT_DICTIONARY: 'GET_CURRENT_DICTIONARY',
};

export const languageState = {
  state: {
    language: 'EN'
  },
  mutations: {
    [LANGUAGE_CONSTANTS.SET_LANGUAGE](state, payload) {
      state.language = payload.value
    },
  },
  actions: {},
  getters: {
    [LANGUAGE_CONSTANTS.GET_LANGUAGE]: state => state.language,
    [LANGUAGE_CONSTANTS.GET_CURRENT_DICTIONARY]:
      (state, getters) => dictionary => dictionary[getters[LANGUAGE_CONSTANTS.GET_LANGUAGE]]
  },
};
