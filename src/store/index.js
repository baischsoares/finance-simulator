import { createStore } from 'vuex';

const store = createStore({
  state: {
    usuario: null,
  },
  getters: {},
  mutations: {
    CRIAR_USUARIO(state, payload) {
      state.usuario = payload;
    },
  },
  actions: {
    criarUsuario(context, payload) {
      context.commit('CRIAR_USUARIO', payload);
      localStorage.setItem('usuario', JSON.stringify(context.state.usuario));
    },
    pegarUsuário(context) {
      if (localStorage.usuario) {
        context.state.usuario = localStorage.usuario;
      }
    },
  },
  modules: {},
});

export default store;
