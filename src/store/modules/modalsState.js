export const MODAL_CONSTANTS = {
  SHOW: 'MODAL_SHOW',
  HIDE: 'MODAL_HIDE',
};

export const modalsState = {
  state: {
    modal: '',
  },
  mutations: {
    [MODAL_CONSTANTS.SHOW](state, payload) {
      state.modal = payload;
      const body = document.body;
      body.classList.add('modal-open');
    },
    [MODAL_CONSTANTS.HIDE](state) {
      state.modal = '';
      const body = document.body;
      body.classList.remove('modal-open');
    },
  }
};
